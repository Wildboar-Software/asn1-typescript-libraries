/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_publicMemberDN } from "../OrganizationAndGroupSchema/id-at-publicMemberDN.va.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";

/**
 * @summary publicMemberDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * publicMemberDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  member
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"publicMemberDN"}
 *     LDAP-DESC                   "DN of a member whose involvement is public / non-secret information"
 *     ID                          id-at-publicMemberDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const publicMemberDN: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": member /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["publicMemberDN"],
    "&ldapDesc": "DN of a member whose involvement is public / non-secret information" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_publicMemberDN /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
