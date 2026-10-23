/* eslint-disable */
import { type SCF_SRF_BOUNDS } from "../IN-SCF-SRF-Classes/SCF-SRF-BOUNDS.oca.mjs";


/**
 * @summary nsb3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsb3 SCF-SRF-BOUNDS ::= {
 *   MINIMUM-FOR-ATTRIBUTES              1 -- example value
 *   MAXIMUM-FOR-ATTRIBUTES              5 -- example value
 *   MINIMUM-FOR-MAIL-BOX-ID             1 -- example value
 *   MAXIMUM-FOR-MAIL-BOX-ID             5 -- example value
 *   MINIMUM-FOR-MESSAGE-CONTENT         1 -- example value
 *   MAXIMUM-FOR-MESSAGE-CONTENT         5 -- example value
 *   MINIMUM-FOR-RECEIVED-INFORMATION    1 -- example value
 *   MAXIMUM-FOR-RECEIVED-INFORMATION    5 -- example value
 *   MAXIMUM-FOR-RECORDING-TIME          5 -- example value
 *   NUM-OF-MESSAGE-IDS                  2 -- example value
 *   MAXIMUM-FOR-RECORDED-MESSAGE-UNITS  5 -- example value
 *   NUM-OF-VARIABLE-PARTS               5
 *  -- example value--}
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
