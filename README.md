# Implementation Firestore in React Project 

# Create A FireStore Apps in Google Console  & Add Package Name in FireStore Application 

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

    open files android/app/build.gradle


    at end of files add that line

    apply plugin: 'com.google.gms.google-services'

    Install Module 
    npm install react-native-firebase


    android/app/build.gradle update all your compile statements to be implementation, e.g.


    Open android/app/src/main/java/"Package Name Folder"/MainApplication.java

    Import THese are Package 

    import io.invertase.firebase.RNFirebasePackage;
    import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;



    You Will see that Function 
    protected List<ReactPackage> getPackages() {


        You will see the function new RNFirebasePackage(), if not add here


        Install Core Function 

        Add the Firebase Functions dependency to android/app/build.gradle:

        dependencies {
          // ...
          implementation "com.google.firebase:firebase-functions:16.1.3" // The line Add on dependency 
        }
    	

        Add the RNFirebaseFunctionsPackage to your android/app/src/main/java/com/[app name]/MainApplication.java:

        // ...
        import io.invertase.firebase.RNFirebasePackage;
        import io.invertase.firebase.functions.RNFirebaseFunctionsPackage; // <-- Add this line


        You Will see that Function 
    protected List<ReactPackage> getPackages() {


        add function   like previous 

        new RNFirebaseFunctionsPackage() // <-- Add this line


        Install FireStore 
 
 Add the Firebase Functions dependency to android/app/build.gradle:

        dependencies {
  // ...
  implementation "com.google.firebase:firebase-firestore:17.1.5"  //add this line on dependency 
}

        Add the RNFirebaseFirestorePackage to your android/app/src/main/java/com/[app name]/MainApplication.java:


        // ...
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage; // <-- Add this line

You Will see that Function 
    protected List<ReactPackage> getPackages() {


        add function   like previous 

       new RNFirebaseFirestorePackage() // <-- Add this line 



       After That Look like The function example

        @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new RNFirebasePackage(),
           new RNFirebaseFunctionsPackage(), 
            new RNFirebaseAuthPackage(), // <-- Add this line
            new RNFirebaseFirestorePackage() // <-- Add this line
      );
    }





    Then Run react Native Application 







