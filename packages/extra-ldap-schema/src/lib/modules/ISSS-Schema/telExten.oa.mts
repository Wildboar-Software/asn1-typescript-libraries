/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
// export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
// export { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
import { id_euro_at_telExten } from "../ISSS-Schema/id-euro-at-telExten.va.mjs";
// export { id_euro_at_telExten } from "../ISSS-Schema/id-euro-at-telExten.va.mjs";


/**
 * @summary telExten
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * telExten ATTRIBUTE ::= {
 *     SUBTYPE OF                  telephoneNumber
 *     LDAP-SYNTAX                 telephoneNr.&id
 *     LDAP-NAME                   {"telExten"}
 *     ID                          id-euro-at-telExten }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const telExten: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": telephoneNumber /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "telExten" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_at_telExten /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
