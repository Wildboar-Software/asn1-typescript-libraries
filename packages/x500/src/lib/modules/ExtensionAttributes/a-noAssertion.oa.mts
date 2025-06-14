/* eslint-disable */
import { noAssertion } from "../AttributeCertificateDefinitions/noAssertion.oa.mjs";
import { id_asx_noAssertion } from "../ExtensionAttributes/id-asx-noAssertion.va.mjs";
import { id_ce_a_noAssertion } from "../ExtensionAttributes/id-ce-a-noAssertion.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION a_noAssertion */
/**
 * @summary a_noAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-noAssertion ATTRIBUTE ::= {
 *   WITH SYNTAX       noAssertion.&ExtnType
 *   LDAP-SYNTAX       id-asx-noAssertion
 *   LDAP-NAME         {"No assertion"}
 *   ID                id-ce-a-noAssertion}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof noAssertion["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof noAssertion["&ExtnType"]>}
 */
export const a_noAssertion: ATTRIBUTE<typeof noAssertion["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": noAssertion.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": noAssertion.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_noAssertion /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_noAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_noAssertion */

/* eslint-enable */
