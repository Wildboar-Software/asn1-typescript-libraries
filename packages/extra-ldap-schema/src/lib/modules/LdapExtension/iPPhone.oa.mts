/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
// export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { id_at_iPPhone } from "../LdapExtension/id-at-iPPhone.va.mjs";
// export { id_at_iPPhone } from "../LdapExtension/id-at-iPPhone.va.mjs";


/**
 * @summary iPPhone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPPhone ATTRIBUTE ::= {
 *   SUBTYPE OF                telephoneNumber
 *   LDAP-NAME                 {"IPPhone"}
 *   ID                        id-at-iPPhone }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const iPPhone: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": telephoneNumber /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "IPPhone" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_iPPhone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
