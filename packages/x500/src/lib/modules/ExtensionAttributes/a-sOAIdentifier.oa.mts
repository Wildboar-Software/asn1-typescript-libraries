/* eslint-disable */
import { sOAIdentifier } from "../AttributeCertificateDefinitions/sOAIdentifier.oa.mjs";
import { id_asx_sOAIdentifier } from "../ExtensionAttributes/id-asx-sOAIdentifier.va.mjs";
import { id_ce_a_sOAIdentifier } from "../ExtensionAttributes/id-ce-a-sOAIdentifier.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-sOAIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       sOAIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-sOAIdentifier
 *   LDAP-NAME         {"SOA identifier"}
 *   ID                id-ce-a-sOAIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof sOAIdentifier["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof sOAIdentifier["&ExtnType"]>}
 */
export const a_sOAIdentifier: ATTRIBUTE<typeof sOAIdentifier["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": sOAIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": sOAIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_sOAIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_sOAIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
