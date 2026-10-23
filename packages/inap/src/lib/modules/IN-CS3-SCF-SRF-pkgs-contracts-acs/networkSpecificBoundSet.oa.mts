/* eslint-disable */
import { type COMMON_BOUNDS } from "../IN-CS3-common-classes/COMMON-BOUNDS.oca.mjs";


/**
 * @summary networkSpecificBoundSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkSpecificBoundSet COMMON-BOUNDS ::= {NUM-OF-EXTENSIONS  1
 * }
 * ```
 * 
 * @constant
 * @type {COMMON_BOUNDS}
 * @implements {COMMON_BOUNDS}
 */
export
const networkSpecificBoundSet: COMMON_BOUNDS = {
    class: "COMMON-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&numOfExtensions": 1 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
