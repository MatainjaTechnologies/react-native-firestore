# Implementation Firestore in React Project 

# Create A FireStore Apps in Google Console  Andd Add Package Name in FireStore Application 

#Suppose FireBase Folder Name 

cd android ;



Once downloaded, place this file in the root of your project at android/app/google-services.json.


PLease Check android /.gradle 

4.4 and higher folder name Exist


open android/build.gradle and Edit files


Find 

dependencies {
        classpath 'com.android.tools.build:gradle:3.1.4'
        
        

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }


Replace

dependencies {
        classpath 'com.android.tools.build:gradle:3.1.4'
        classpath 'com.google.gms:google-services:4.0.1'
        

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }

