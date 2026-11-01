/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { pkcs_9_at_extendedCertificateAttributes } from "../PKCS-9/pkcs-9-at-extendedCertificateAttributes.va.mjs";
// export { pkcs_9_at_extendedCertificateAttributes } from "../PKCS-9/pkcs-9-at-extendedCertificateAttributes.va.mjs";


/**
 * @summary extendedCertificateAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * extendedCertificateAttributes ATTRIBUTE ::= {
 *         WITH SYNTAX SET OF Attribute
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-extendedCertificateAttributes
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Attribute[]>}
 * @implements {ATTRIBUTE<Attribute[]>}
 */
export
const extendedCertificateAttributes: ATTRIBUTE<Attribute[]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeSetOf<Attribute>(() => _decode_Attribute),
    },
    encoderFor: {
        "&Type": $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER),
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_extendedCertificateAttributes /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
