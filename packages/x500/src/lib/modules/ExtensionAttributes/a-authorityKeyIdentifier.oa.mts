/* eslint-disable */
import { authorityKeyIdentifier } from "../CertificateExtensions/authorityKeyIdentifier.oa.mjs";
import { id_asx_authorityKeyIdentifier } from "../ExtensionAttributes/id-asx-authorityKeyIdentifier.va.mjs";
import { id_ce_a_authorityKeyIdentifier } from "../ExtensionAttributes/id-ce-a-authorityKeyIdentifier.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorityKeyIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       authorityKeyIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorityKeyIdentifier
 *   LDAP-NAME         {"Authority Key Identifier"}
 *   ID                id-ce-a-authorityKeyIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof authorityKeyIdentifier["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof authorityKeyIdentifier["&ExtnType"]>}
 */
export const a_authorityKeyIdentifier: ATTRIBUTE<
    typeof authorityKeyIdentifier["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorityKeyIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorityKeyIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorityKeyIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorityKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
