/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_memberSingularNoun } from "../OrganizationAndGroupSchema/id-at-memberSingularNoun.va.mjs";
import { memberNoun } from "../OrganizationAndGroupSchema/memberNoun.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";

/**
 * @summary memberSingularNoun
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberSingularNoun ATTRIBUTE ::= {
 *     SUBTYPE OF                  memberNoun
 *     LDAP-SYNTAX                    directoryString.&id
 *     LDAP-NAME                    {"memberSingularNoun"}
 *     LDAP-DESC                    "Singular noun used as a term for a member of this group, such as 'Goober'"
 *     ID                            id-at-memberSingularNoun
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const memberSingularNoun: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": memberNoun /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["memberSingularNoun"],
    "&ldapDesc": "Singular noun used as a term for a member of this group, such as 'Goober'" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_memberSingularNoun /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
