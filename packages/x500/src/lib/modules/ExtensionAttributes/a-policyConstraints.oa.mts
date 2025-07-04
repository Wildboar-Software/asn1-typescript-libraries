/* eslint-disable */
import { policyConstraints } from "../CertificateExtensions/policyConstraints.oa.mjs";
import { id_asx_policyConstraints } from "../ExtensionAttributes/id-asx-policyConstraints.va.mjs";
import { id_ce_a_policyConstraints } from "../ExtensionAttributes/id-ce-a-policyConstraints.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-policyConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       policyConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-policyConstraints
 *   LDAP-NAME         {"Policy Constraints"}
 *   ID                id-ce-a-policyConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof policyConstraints["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof policyConstraints["&ExtnType"]>}
 */
export const a_policyConstraints: ATTRIBUTE<
    typeof policyConstraints["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_policyConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_policyConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
