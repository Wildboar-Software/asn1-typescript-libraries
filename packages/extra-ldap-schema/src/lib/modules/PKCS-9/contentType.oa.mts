/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type ContentType, _decode_ContentType, _encode_ContentType } from "../PKCS-9/ContentType.ta.mjs";
// export { ContentType, _decode_ContentType, _encode_ContentType } from "../PKCS-9/ContentType.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { pkcs_9_at_contentType } from "../PKCS-9/pkcs-9-at-contentType.va.mjs";
// export { pkcs_9_at_contentType } from "../PKCS-9/pkcs-9-at-contentType.va.mjs";


/**
 * @summary contentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contentType ATTRIBUTE ::= {
 *         WITH SYNTAX ContentType
 *         EQUALITY MATCHING RULE objectIdentifierMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-contentType
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<ContentType>}
 * @implements {ATTRIBUTE<ContentType>}
 */
export
const contentType: ATTRIBUTE<ContentType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContentType,
    },
    encoderFor: {
        "&Type": _encode_ContentType,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_contentType /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
