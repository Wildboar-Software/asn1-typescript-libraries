/* eslint-disable */
import { indirectIssuer } from "../AttributeCertificateDefinitions/indirectIssuer.oa.mjs";
import { id_asx_indirectIssuer } from "../ExtensionAttributes/id-asx-indirectIssuer.va.mjs";
import { id_ce_a_indirectIssuer } from "../ExtensionAttributes/id-ce-a-indirectIssuer.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-indirectIssuer ATTRIBUTE ::= {
 *   WITH SYNTAX       indirectIssuer.&ExtnType
 *   LDAP-SYNTAX       id-asx-indirectIssuer
 *   LDAP-NAME         {"Indirect issuer"}
 *   ID                id-ce-a-indirectIssuer}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof indirectIssuer["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof indirectIssuer["&ExtnType"]>}
 */
export const a_indirectIssuer: ATTRIBUTE<typeof indirectIssuer["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": indirectIssuer.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": indirectIssuer.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_indirectIssuer /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_indirectIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
