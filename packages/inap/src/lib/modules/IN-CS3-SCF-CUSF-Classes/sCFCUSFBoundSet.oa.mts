/* eslint-disable */
import { type SCF_CUSF_BOUNDS } from "../IN-CS3-SCF-CUSF-Classes/SCF-CUSF-BOUNDS.oca.mjs";


/**
 * @summary sCFCUSFBoundSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sCFCUSFBoundSet SCF-CUSF-BOUNDS ::= {
 *   MINIMUM-FOR-ASS-RELEASE-INFO-LENGTH    5
 *   MAXIMUM-FOR-ASS-RELEASE-INFO-LENGTH    10
 *   MINIMUM-FOR-COMP-RECEIVED-INFO-LENGTH  5
 *   MAXIMUM-FOR-COMP-RECEIVED-INFO-LENGTH  10
 *   NUM-OF-BCUSM-EVENTS                    2
 * }
 * ```
 * 
 * @constant
 * @type {SCF_CUSF_BOUNDS}
 * @implements {SCF_CUSF_BOUNDS}
 */
export
const sCFCUSFBoundSet: SCF_CUSF_BOUNDS = {
    class: "SCF-CUSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&minAssReleaseInfoLen": 5 /* OBJECT_FIELD_SETTING */,
    "&maxAssReleaseInfoLen": 10 /* OBJECT_FIELD_SETTING */,
    "&minCompReceivedInfoLen": 5 /* OBJECT_FIELD_SETTING */,
    "&maxCompReceivedInfoLen": 10 /* OBJECT_FIELD_SETTING */,
    "&numOfBCUSMEvents": 2 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
