No implementation found for com.facebook.react.bridge.Inspector com.facebook.react.bridge.Inspector.instance() (tried Java_com_facebook_react_bridge_Inspector_instance and Java_com_facebook_react_bridge_Inspector_instance__)

> com.android.build.api.transform.TransformException: java.util.zip.ZipException: duplicate entry: okhttp3/internal/ws/RealWebSocket$1.class


07-05 15:55:54.166 11022-11281/com.eduu.bang E/ACRA: ACRA caught a RuntimeException for com.eduu.bang
                                                     java.lang.RuntimeException: An error occured while executing doInBackground()
                                                         at android.os.AsyncTask$3.done(AsyncTask.java:300)
                                                         at java.util.concurrent.FutureTask.finishCompletion(FutureTask.java:355)
                                                         at java.util.concurrent.FutureTask.setException(FutureTask.java:222)
                                                         at java.util.concurrent.FutureTask.run(FutureTask.java:242)
                                                         at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1112)
                                                         at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:587)
                                                         at java.lang.Thread.run(Thread.java:818)
                                                      Caused by: java.lang.NoClassDefFoundError: com.facebook.react.packagerconnection.ReconnectingWebSocket
                                                         at com.facebook.react.packagerconnection.JSPackagerClient.<init>(JSPackagerClient.java:79)
                                                         at com.facebook.react.devsupport.DevServerHelper$1.doInBackground(DevServerHelper.java:173)
                                                         at com.facebook.react.devsupport.DevServerHelper$1.doInBackground(DevServerHelper.java:146)
                                                         at android.os.AsyncTask$2.call(AsyncTask.java:288)
                                                         at java.util.concurrent.FutureTask.run(FutureTask.java:237)
                                                         at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1112) 
                                                         at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:587) 
                                                         at java.lang.Thread.run(Thread.java:818) 


                                                     [ 07-05 15:55:54.171 11022:11201 E/         ]
                                                     [android_ws] Format: 5, Width: 1080, Height: 1920


                                                     [ 07-05 15:55:54.171 11022:11201 E/         ]
                                                     [android_ws] Format: 5, Width: 1080, Height: 1920


                                                     [ 07-05 15:55:54.171 11022:11201 E/         ]
                                                     [android_ws] Format: 5, Width: 1080, Height: 1920
07-05 15:55:54.176 11022-11286/com.eduu.bang E/ACRA: ACRA caught a RuntimeException for com.eduu.bang

------


git remote add origin https://github.com/weikipeng/ReactNativeFirstDemo.git
git push -u origin master

Navigator is deprecated and has been removed from this package. It can now be installed and imported from `react-native-deprecated-custom-components` instead of `react-native`. Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html


Warning:Using incompatible plugins for the annotation processing: android-apt. This may result in an unexpected behavior.
Error:Conflict with dependency 'com.google.code.findbugs:jsr305' in project ':app'. Resolved versions for app (3.0.0) and test app (2.0.1) differ. See http://g.co/androidstudio/app-test-app-conflict for details.
Error:Module 'com.facebook.stetho:stetho-okhttp:1.2.0' depends on one or more Android Libraries but is a jar

https://m-dev.jzb.com/user/version/down?id=11

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
