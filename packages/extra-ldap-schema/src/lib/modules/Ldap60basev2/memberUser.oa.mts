/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_memberUser } from "../Ldap60basev2/id-at-memberUser.va.mjs";


/**
 * @summary memberUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberUser ATTRIBUTE ::= {
 *   SUBTYPE OF                distinguishedName
 *   WITH SYNTAX               DistinguishedName
 *   EQUALITY MATCHING RULE    distinguishedNameMatch
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"memberUser"}
 *   LDAP-DESC                 "Reference to a principal that performs an action (usually user)."
 *   ID                        id-at-memberUser }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const memberUser: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "memberUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Reference to a principal that performs an action (usually user)." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_memberUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

