/* eslint-disable */
import { policyMappings } from "../CertificateExtensions/policyMappings.oa.mjs";
import { id_asx_policyMappings } from "../ExtensionAttributes/id-asx-policyMappings.va.mjs";
import { id_ce_a_policyMappings } from "../ExtensionAttributes/id-ce-a-policyMappings.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-policyMappings ATTRIBUTE ::= {
 *   WITH SYNTAX       policyMappings.&ExtnType
 *   LDAP-SYNTAX       id-asx-policyMappings
 *   LDAP-NAME         {"Policy Mappings"}
 *   ID                id-ce-a-policyMappings }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof policyMappings["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof policyMappings["&ExtnType"]>}
 */
export const a_policyMappings: ATTRIBUTE<typeof policyMappings["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyMappings.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyMappings.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_policyMappings /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_policyMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
