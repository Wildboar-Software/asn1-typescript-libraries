/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { SMIMECapabilities, _decode_SMIMECapabilities, _encode_SMIMECapabilities } from "../PKCS-9/SMIMECapabilities.ta.mjs";
// export { SMIMECapabilities, _decode_SMIMECapabilities, _encode_SMIMECapabilities } from "../PKCS-9/SMIMECapabilities.ta.mjs";
import { pkcs_9_at_smimeCapabilities } from "../PKCS-9/pkcs-9-at-smimeCapabilities.va.mjs";
// export { pkcs_9_at_smimeCapabilities } from "../PKCS-9/pkcs-9-at-smimeCapabilities.va.mjs";


/**
 * @summary smimeCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smimeCapabilities ATTRIBUTE ::= {
 *         WITH SYNTAX SMIMECapabilities
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-smimeCapabilities
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SMIMECapabilities>}
 * @implements {ATTRIBUTE<SMIMECapabilities>}
 */
export
const smimeCapabilities: ATTRIBUTE<SMIMECapabilities> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SMIMECapabilities,
    },
    encoderFor: {
        "&Type": _encode_SMIMECapabilities,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_smimeCapabilities /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
