/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "RNSplashScreen.h"
//#import “SplashScreen.h"


////This Build failed WARNING
//#if RCT_DEV
//#import <React/RCTDevLoadingView.h>
//#endif
////This Build failed WARNING


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"HrApp"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  
  
  ////This Build failed WARNING
//  RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation
//                                            moduleProvider:nil
//                                             launchOptions:launchOptions];
//#if RCT_DEV
//  [bridge moduleForClass:[RCTDevLoadingView class]];
//#endif
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
//                                                   moduleName:@"Test"
//                                            initialProperties:nil];
  ////This Build failed WARNING
  
  
  
  
[RNSplashScreen show];
//  [SplashScreen show];
  return YES;
}

@end
