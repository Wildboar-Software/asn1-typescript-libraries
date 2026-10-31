/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_formerMembersCount } from "../OrganizationAndGroupSchema/id-at-formerMembersCount.va.mjs";
import { membersCount } from "../OrganizationAndGroupSchema/membersCount.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";

/**
 * @summary formerMembersCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * formerMembersCount ATTRIBUTE ::= {
 *     SUBTYPE OF                  membersCount
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"formerMembersCount"}
 *     LDAP-DESC                    "The number of former members of a group, organization, unit, team, etc."
 *     ID                            id-at-formerMembersCount
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const formerMembersCount: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": membersCount /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["formerMembersCount"],
    "&ldapDesc": "The number of former members of a group, organization, unit, team, etc." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_formerMembersCount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
