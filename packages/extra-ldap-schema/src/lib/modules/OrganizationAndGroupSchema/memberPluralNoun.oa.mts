/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_memberPluralNoun } from "../OrganizationAndGroupSchema/id-at-memberPluralNoun.va.mjs";
import { memberNoun } from "../OrganizationAndGroupSchema/memberNoun.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";

/**
 * @summary memberPluralNoun
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberPluralNoun ATTRIBUTE ::= {
 *     SUBTYPE OF                  memberNoun
 *     LDAP-SYNTAX                    directoryString.&id
 *     LDAP-NAME                    {"memberPluralNoun"}
 *     LDAP-DESC                    "Plural noun used as a term for members of this group, such as 'Goobers'"
 *     ID                            id-at-memberPluralNoun
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const memberPluralNoun: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": memberNoun /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["memberPluralNoun"],
    "&ldapDesc": "Plural noun used as a term for members of this group, such as 'Goobers'" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_memberPluralNoun /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
