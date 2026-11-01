/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { pkcs_9_at_pkcs15Token } from "../PKCS-9/pkcs-9-at-pkcs15Token.va.mjs";
// export { pkcs_9_at_pkcs15Token } from "../PKCS-9/pkcs-9-at-pkcs15Token.va.mjs";


/**
 * @summary pKCS15Token
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pKCS15Token ATTRIBUTE ::= {
 *         WITH SYNTAX PKCS15Token
 *         ID pkcs-9-at-pkcs15Token
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PKCS15Token>}
 * @implements {ATTRIBUTE<PKCS15Token>}
 */
export
const pKCS15Token: ATTRIBUTE<PKCS15Token> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PKCS15Token,
    },
    encoderFor: {
        "&Type": _encode_PKCS15Token,
    },
    "&id": pkcs_9_at_pkcs15Token /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
