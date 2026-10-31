/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_base4kidsCountryCode } from "../LdapBase4kids2/id-at-base4kidsCountryCode.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";

/**
 * @summary base4kidsCountryCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsCountryCode ATTRIBUTE ::= {
 *   SUBTYPE OF                countryName
 *   LDAP-NAME                 {"base4kidsCountryCode"}
 *   LDAP-DESC                 "ISO 3166 two-letter country code"
 *   ID                        id-at-base4kidsCountryCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsCountryCode: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": countryName /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsCountryCode"],
    "&ldapDesc": "ISO 3166 two-letter country code" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsCountryCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
