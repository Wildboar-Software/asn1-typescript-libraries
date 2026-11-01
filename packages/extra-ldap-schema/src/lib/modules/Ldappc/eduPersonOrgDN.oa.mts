/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_eduPersonOrgDN } from "../Ldappc/id-at-eduPersonOrgDN.va.mjs";


/**
 * @summary eduPersonOrgDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eduPersonOrgDN ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   EQUALITY MATCHING RULE    distinguishedNameMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"eduPersonOrgDN"}
 *   LDAP-DESC                 "eduPerson per Internet2 and EDUCAUSE"
 *   ID                        id-at-eduPersonOrgDN }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const eduPersonOrgDN: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "eduPersonOrgDN" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "eduPerson per Internet2 and EDUCAUSE" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_eduPersonOrgDN /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

