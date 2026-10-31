/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_homePostalAddress } from "../LdapSchema2ldifCosine/id-at-homePostalAddress.va.mjs";
import {
    type PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta.mjs";
import { caseIgnoreListMatch } from "../SelectedAttributeTypes/caseIgnoreListMatch.oa.mjs";
import { caseIgnoreListSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreListSubstringsMatch.oa.mjs";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";

/**
 * @summary homePostalAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * homePostalAddress ATTRIBUTE ::= {
 *   WITH SYNTAX               PostalAddress
 *   EQUALITY MATCHING RULE    caseIgnoreListMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreListSubstringsMatch
 *   LDAP-SYNTAX               postalAddr.&id
 *   LDAP-NAME                 {"homePostalAddress"}
 *   LDAP-DESC                 "RFC1274: home postal address"
 *   ID                        id-at-homePostalAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PostalAddress>}
 * @implements {ATTRIBUTE<PostalAddress>}
 */
export
const homePostalAddress: ATTRIBUTE<PostalAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&equality-match": caseIgnoreListMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreListSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["homePostalAddress"],
    "&ldapDesc": "RFC1274: home postal address" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_homePostalAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
