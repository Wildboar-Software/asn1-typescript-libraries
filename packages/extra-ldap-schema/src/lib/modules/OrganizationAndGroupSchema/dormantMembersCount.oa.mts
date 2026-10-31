/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_dormantMembersCount } from "../OrganizationAndGroupSchema/id-at-dormantMembersCount.va.mjs";
import { membersCount } from "../OrganizationAndGroupSchema/membersCount.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";

/**
 * @summary dormantMembersCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dormantMembersCount ATTRIBUTE ::= {
 *     SUBTYPE OF                  membersCount
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"dormantMembersCount"}
 *     LDAP-DESC                    "The number of members that have memberships that have lapsed, but which did not formally leave"
 *     ID                            id-at-dormantMembersCount
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const dormantMembersCount: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": membersCount /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dormantMembersCount"],
    "&ldapDesc": "The number of members that have memberships that have lapsed, but which did not formally leave" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dormantMembersCount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
