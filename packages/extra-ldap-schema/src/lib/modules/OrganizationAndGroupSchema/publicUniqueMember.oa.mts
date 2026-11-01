/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";
import { id_at_publicUniqueMember } from "../OrganizationAndGroupSchema/id-at-publicUniqueMember.va.mjs";

import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.mjs";
/**
 * @summary publicUniqueMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * publicUniqueMember ATTRIBUTE ::= {
 *     SUBTYPE OF                  uniqueMember
 *     LDAP-SYNTAX                 nameAndOptionalUID.&id
 *     LDAP-NAME                   {"publicUniqueMember"}
 *     LDAP-DESC                   "A member whose involvement is public / non-secret information"
 *     ID                          id-at-publicUniqueMember
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const publicUniqueMember: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": uniqueMember /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "publicUniqueMember" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A member whose involvement is public / non-secret information" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_publicUniqueMember /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
