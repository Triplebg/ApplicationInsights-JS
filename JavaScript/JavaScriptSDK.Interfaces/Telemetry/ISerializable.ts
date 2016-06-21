﻿
module Microsoft.ApplicationInsights {

    "use strict";

    export interface ISerializable {
        /**
         * The set of fields for a serializeable object. 
         * This defines the serialization order and a value of true/false
         * for each field defines whether the field is required or not.
         */
        aiDataContract: any;
    }
}