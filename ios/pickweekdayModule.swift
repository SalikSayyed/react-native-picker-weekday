//
//  pickweekdayModule.swift
//  pickweekdayModule
//
//  Copyright © 2021 Salik Sayyed. All rights reserved.
//

import Foundation

@objc(pickweekdayModule)
class pickweekdayModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
