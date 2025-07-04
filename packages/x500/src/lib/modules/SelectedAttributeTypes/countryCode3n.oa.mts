/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    CountryCode3n,
    _decode_CountryCode3n,
    _encode_CountryCode3n,
} from "../SelectedAttributeTypes/CountryCode3n.ta.mjs";
import { countryString3n } from "../SelectedAttributeTypes/countryString3n.oa.mjs";
import { id_at_countryCode3n } from "../SelectedAttributeTypes/id-at-countryCode3n.va.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
/**
 * @summary countryCode3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryCode3n ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryCode3n
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString3n.&id
 *   LDAP-NAME                {"n3"}
 *   ID                       id-at-countryCode3n }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CountryCode3n>}
 * @implements {ATTRIBUTE<CountryCode3n>}
 */
export const countryCode3n: ATTRIBUTE<CountryCode3n> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryCode3n,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3n,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString3n["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["n3"],
    "&id": id_at_countryCode3n /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
