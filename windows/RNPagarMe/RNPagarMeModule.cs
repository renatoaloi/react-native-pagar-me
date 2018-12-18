using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Pagar.Me.RNPagarMe
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNPagarMeModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNPagarMeModule"/>.
        /// </summary>
        internal RNPagarMeModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNPagarMe";
            }
        }
    }
}
