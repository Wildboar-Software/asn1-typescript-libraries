/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    CountryCode3c,
    _decode_CountryCode3c,
    _encode_CountryCode3c,
} from "../SelectedAttributeTypes/CountryCode3c.ta.mjs";
import { countryString3c } from "../SelectedAttributeTypes/countryString3c.oa.mjs";
import { id_at_countryCode3c } from "../SelectedAttributeTypes/id-at-countryCode3c.va.mjs";
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
    CountryCode3c,
    _decode_CountryCode3c,
    _encode_CountryCode3c,
} from "../SelectedAttributeTypes/CountryCode3c.ta.mjs";
export { countryString3c } from "../SelectedAttributeTypes/countryString3c.oa.mjs";
export { id_at_countryCode3c } from "../SelectedAttributeTypes/id-at-countryCode3c.va.mjs";
export { name } from "../SelectedAttributeTypes/name.oa.mjs";

/* START_OF_SYMBOL_DEFINITION countryCode3c */
/**
 * @summary countryCode3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryCode3c ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryCode3c
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString3c.&id
 *   LDAP-NAME                {"c3"}
 *   ID                       id-at-countryCode3c }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CountryCode3c>}
 * @implements {ATTRIBUTE<CountryCode3c>}
 */
export const countryCode3c: ATTRIBUTE<CountryCode3c> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryCode3c,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3c,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString3c["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["c3"],
    "&id": id_at_countryCode3c /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryCode3c */

/* eslint-enable */
