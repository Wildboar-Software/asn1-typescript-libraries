/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_activeMembersCount } from "../OrganizationAndGroupSchema/id-at-activeMembersCount.va.mjs";
import { membersCount } from "../OrganizationAndGroupSchema/membersCount.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";

/**
 * @summary activeMembersCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activeMembersCount ATTRIBUTE ::= {
 *     SUBTYPE OF                  membersCount
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"activeMembersCount"}
 *     LDAP-DESC                    "The active number of members, in contrast to dormant, reserve, retired, etc. members"
 *     ID                            id-at-activeMembersCount
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const activeMembersCount: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": membersCount /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["activeMembersCount"],
    "&ldapDesc": "The active number of members, in contrast to dormant, reserve, retired, etc. members" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_activeMembersCount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
