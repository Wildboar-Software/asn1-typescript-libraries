/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_privateUniqueMember } from "../OrganizationAndGroupSchema/id-at-privateUniqueMember.va.mjs";
import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.mjs";
import { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";

/**
 * @summary privateUniqueMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * privateUniqueMember ATTRIBUTE ::= {
 *     SUBTYPE OF                  uniqueMember
 *     LDAP-SYNTAX                 nameAndOptionalUID.&id
 *     LDAP-NAME                   {"privateUniqueMember"}
 *     LDAP-DESC                   "A member whose involvement is private / secret information"
 *     ID                          id-at-privateUniqueMember
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const privateUniqueMember: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": uniqueMember /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["privateUniqueMember"],
    "&ldapDesc": "A member whose involvement is private / secret information" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_privateUniqueMember /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
