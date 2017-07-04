package com.awesomeproject;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

//    Error:Execution failed for task ':app:processDebugManifest'.
//            > Manifest merger failed : uses-sdk:minSdkVersion 14 cannot be smaller than version 16 declared in library [com.facebook.react:react-native:0.45.1] /Users/wikipeng/.android/build-cache/0121eae09d5f6d2d3843865d8e55c80fb4ac3ae1/output/AndroidManifest.xml
//    Suggestion: use tools:overrideLibrary="com.facebook.react" to force usage
}
