
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNPagarMeModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNPagarMeModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNPagarMe";
  }

  @ReactMethod
  public String getHelloWorld() {
    return "Hello World from react";
  }
}