/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary sCFSSFBoundSetforSCFSDF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sCFSSFBoundSetforSCFSDF SCF-SSF-BOUNDS ::= {
 *   MINIMUM-FOR-DIGITS  1
 *   MAXIMUM-FOR-DIGITS  10
 * }
 * ```
 * 
 * @constant
 * @type {SCF_SSF_BOUNDS}
 * @implements {SCF_SSF_BOUNDS}
 */
export
const sCFSSFBoundSetforSCFSDF: SCF_SSF_BOUNDS = {
    class: "SCF-SSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&minDigitsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDigitsLength": 10 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
