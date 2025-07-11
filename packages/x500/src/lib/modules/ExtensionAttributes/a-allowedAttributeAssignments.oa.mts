/* eslint-disable */
import { allowedAttributeAssignments } from "../AttributeCertificateDefinitions/allowedAttributeAssignments.oa.mjs";
import { id_asx_allowedAttributeAssignments } from "../ExtensionAttributes/id-asx-allowedAttributeAssignments.va.mjs";
import { id_ce_a_allowedAttributeAssignments } from "../ExtensionAttributes/id-ce-a-allowedAttributeAssignments.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-allowedAttributeAssignments ATTRIBUTE ::= {
 *   WITH SYNTAX       allowedAttributeAssignments.&ExtnType
 *   LDAP-SYNTAX       id-asx-allowedAttributeAssignments
 *   LDAP-NAME         {"Allowed attribute assignments"}
 *   ID                id-ce-a-allowedAttributeAssignments}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof allowedAttributeAssignments["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof allowedAttributeAssignments["&ExtnType"]>}
 */
export const a_allowedAttributeAssignments: ATTRIBUTE<
    typeof allowedAttributeAssignments["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": allowedAttributeAssignments.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": allowedAttributeAssignments.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
