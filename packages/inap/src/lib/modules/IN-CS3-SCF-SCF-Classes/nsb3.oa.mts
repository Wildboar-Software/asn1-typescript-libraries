/* eslint-disable */
import { type SCF_SRF_BOUNDS } from "../IN-CS3-SCF-SRF-classes/SCF-SRF-BOUNDS.oca.mjs";


/**
 * @summary nsb3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsb3 SCF-SRF-BOUNDS ::= {
 *   MINIMUM-FOR-ATTRIBUTES              1
 *   MAXIMUM-FOR-ATTRIBUTES              5
 *   MINIMUM-FOR-MAIL-BOX-ID             1
 *   MAXIMUM-FOR-MAIL-BOX-ID             5
 *   MINIMUM-FOR-MESSAGE-CONTENT         1
 *   MAXIMUM-FOR-MESSAGE-CONTENT         5
 *   MINIMUM-FOR-RECEIVED-INFORMATION    1
 *   MAXIMUM-FOR-RECEIVED-INFORMATION    5
 *   MAXIMUM-FOR-RECORDING-TIME          5
 *   NUM-OF-MESSAGE-IDS                  2
 *   MAXIMUM-FOR-RECORDED-MESSAGE-UNITS  5
 *   NUM-OF-VARIABLE-PARTS               5
 * }
 * ```
 * 
 * @constant
 * @type {SCF_SRF_BOUNDS}
 * @implements {SCF_SRF_BOUNDS}
 */
export
const nsb3: SCF_SRF_BOUNDS = {
    class: "SCF-SRF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&minAttributesLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAttributesLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minMailBoxIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMailBoxIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minMessageContentLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMessageContentLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minReceivedInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxReceivedInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxRecordingTime": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfMessageIDs": 2 /* OBJECT_FIELD_SETTING */,
    "&maxRecordedMessageUnits": 5 /* OBJECT_FIELD_SETTING */,
    "&maxVariableParts": 5 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
