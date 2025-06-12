/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta.mjs";
import { countryString } from "../SelectedAttributeTypes/countryString.oa.mjs";
import { id_at_countryName } from "../SelectedAttributeTypes/id-at-countryName.va.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta.mjs";
export { countryString } from "../SelectedAttributeTypes/countryString.oa.mjs";
export { id_at_countryName } from "../SelectedAttributeTypes/id-at-countryName.va.mjs";
export { name } from "../SelectedAttributeTypes/name.oa.mjs";

/* START_OF_SYMBOL_DEFINITION countryName */
/**
 * @summary countryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryName
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString.&id
 *   LDAP-NAME                {"c"}
 *   ID                       id-at-countryName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CountryName>}
 * @implements {ATTRIBUTE<CountryName>}
 */
export const countryName: ATTRIBUTE<CountryName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryName,
    },
    encoderFor: {
        "&Type": _encode_CountryName,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["c"],
    "&id": id_at_countryName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryName */

/* eslint-enable */
