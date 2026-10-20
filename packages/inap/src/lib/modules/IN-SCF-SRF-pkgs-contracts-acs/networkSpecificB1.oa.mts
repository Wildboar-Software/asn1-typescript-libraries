/* eslint-disable */
import { type COMMON_BOUNDS } from "../IN-common-classes/COMMON-BOUNDS.oca.mjs";


/**
 * @summary networkSpecificB1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkSpecificB1 COMMON-BOUNDS ::= {NUM-OF-EXTENSIONS  1
 *  --example value--}
 * ```
 * 
 * @constant
 * @type {COMMON_BOUNDS}
 * @implements {COMMON_BOUNDS}
 */
export
const networkSpecificB1: COMMON_BOUNDS = {
    class: "COMMON-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&numOfExtensions": 1 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
