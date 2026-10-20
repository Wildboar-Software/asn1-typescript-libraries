/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AuthenticationFramework/AttributeCertificate.ta.mjs";
// export { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AuthenticationFramework/AttributeCertificate.ta.mjs";
import { attributeCertificateMatch } from "../AuthenticationFramework/attributeCertificateMatch.oa.mjs";
// export { attributeCertificateMatch } from "../AuthenticationFramework/attributeCertificateMatch.oa.mjs";
import { id_at_attributeCertificate } from "../AuthenticationFramework/id-at-attributeCertificate.va.mjs";
// export { id_at_attributeCertificate } from "../AuthenticationFramework/id-at-attributeCertificate.va.mjs";


/**
 * @summary attributeCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeCertificate ATTRIBUTE ::= {
 *   WITH SYNTAX             AttributeCertificate
 *   EQUALITY MATCHING RULE  attributeCertificateMatch
 *   ID                      id-at-attributeCertificate
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<AttributeCertificate>}
 * @implements {ATTRIBUTE<AttributeCertificate>}
 */
export
const attributeCertificate: ATTRIBUTE<AttributeCertificate> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCertificate,
    },
    encoderFor: {
        "&Type": _encode_AttributeCertificate,
    },
    "&equality-match": attributeCertificateMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeCertificate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
