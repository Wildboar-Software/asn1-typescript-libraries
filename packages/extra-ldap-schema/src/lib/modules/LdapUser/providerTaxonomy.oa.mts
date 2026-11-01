/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PostalAddress, _decode_PostalAddress, _encode_PostalAddress } from "../SelectedAttributeTypes/PostalAddress.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
import { id_at_providerTaxonomy } from "../LdapUser/id-at-providerTaxonomy.va.mjs";


/**
 * @summary providerTaxonomy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * providerTaxonomy ATTRIBUTE ::= {
 *   WITH SYNTAX               PostalAddress
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               postalAddr.&id
 *   LDAP-NAME                 {"providerTaxonomy"}
 *   LDAP-DESC                 "provider taxonomies"
 *   ID                        id-at-providerTaxonomy }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PostalAddress>}
 * @implements {ATTRIBUTE<PostalAddress>}
 */
export
const providerTaxonomy: ATTRIBUTE<PostalAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "providerTaxonomy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "provider taxonomies" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_providerTaxonomy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

