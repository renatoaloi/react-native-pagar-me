
# react-native-pagar-me

## Getting started

`$ npm install react-native-pagar-me --save`

### Mostly automatic installation

`$ react-native link react-native-pagar-me`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-pagar-me` and add `RNPagarMe.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPagarMe.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNPagarMePackage;` to the imports at the top of the file
  - Add `new RNPagarMePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-pagar-me'
  	project(':react-native-pagar-me').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-pagar-me/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-pagar-me')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNPagarMe.sln` in `node_modules/react-native-pagar-me/windows/RNPagarMe.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Pagar.Me.RNPagarMe;` to the usings at the top of the file
  - Add `new RNPagarMePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNPagarMe from 'react-native-pagar-me';

// TODO: What to do with the module?
RNPagarMe;
```
  