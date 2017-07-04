Warning:Using incompatible plugins for the annotation processing: android-apt. This may result in an unexpected behavior.
Error:Conflict with dependency 'com.google.code.findbugs:jsr305' in project ':app'. Resolved versions for app (3.0.0) and test app (2.0.1) differ. See http://g.co/androidstudio/app-test-app-conflict for details.
Error:Module 'com.facebook.stetho:stetho-okhttp:1.2.0' depends on one or more Android Libraries but is a jar



Resolving conflicts between main and test APK

When instrumentation tests are run, both the main APK and test APK share the same classpath. Gradle build will fail if the main APK and the test APK use the same library (e.g. Guava) but in different versions. If gradle didn't catch that, your app could behave differently during tests and during normal run (including crashing in one of the cases).

To make the build succeed, just make sure both APKs use the same version. If the error is about an indirect dependency (a library you didn't mention in your build.gradle), just add a dependency for the newer version to the configuration ("compile" or "androidTestCompile") that needs it. You can also use Gradle's resolution strategy mechanism. You can inspect the dependency tree by running ./gradlew :app:dependencies and ./gradlew :app:androidDependencies.
Running tests

As mentioned previously, checks requiring a connected device are launched with the anchor task called connectedCheck. This depends on the task connectedDebugAndroidTest and therefore will run it. This task does the following:
Ensure the app and the test app are built (depending on assembleDebug and assembleDebugAndroidTest).
Install both apps.
Run the tests.
Uninstall both apps.
If more than one device is connected, all tests are run in parallel on all connected devices. If one of the test fails, on any device, the build will fail.
