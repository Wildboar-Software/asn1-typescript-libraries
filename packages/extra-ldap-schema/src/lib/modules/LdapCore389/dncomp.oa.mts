/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_dncomp } from "../LdapCore389/id-at-dncomp.va.mjs";


/**
 * @summary dncomp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dncomp ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   EQUALITY MATCHING RULE    distinguishedNameMatch
 *   NO USER MODIFICATION      TRUE
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"dncomp"}
 *   LDAP-DESC                 "Internal database attribute for each DN component"
 *   ID                        id-at-dncomp }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const dncomp: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dncomp" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Internal database attribute for each DN component" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dncomp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

