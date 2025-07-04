/* eslint-disable */
import { authorityAttributeIdentifier } from "../AttributeCertificateDefinitions/authorityAttributeIdentifier.oa.mjs";
import { id_asx_authorityAttributeIdentifier } from "../ExtensionAttributes/id-asx-authorityAttributeIdentifier.va.mjs";
import { id_ce_a_authorityAttributeIdentifier } from "../ExtensionAttributes/id-ce-a-authorityAttributeIdentifier.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorityAttributeIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       authorityAttributeIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorityAttributeIdentifier
 *   LDAP-NAME         {"Authority attribute identifier"}
 *   ID                id-ce-a-authorityAttributeIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof authorityAttributeIdentifier["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof authorityAttributeIdentifier["&ExtnType"]>}
 */
export const a_authorityAttributeIdentifier: ATTRIBUTE<
    typeof authorityAttributeIdentifier["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorityAttributeIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorityAttributeIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorityAttributeIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorityAttributeIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
