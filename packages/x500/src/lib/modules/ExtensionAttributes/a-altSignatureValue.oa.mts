/* eslint-disable */
import { altSignatureValue } from "../CertificateExtensions/altSignatureValue.oa.mjs";
import { id_asx_altSignatureValue } from "../ExtensionAttributes/id-asx-altSignatureValue.va.mjs";
import { id_ce_a_altSignatureValue } from "../ExtensionAttributes/id-ce-a-altSignatureValue.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION a_altSignatureValue */
/**
 * @summary a_altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-altSignatureValue ATTRIBUTE ::= {
 *   WITH SYNTAX       altSignatureValue.&ExtnType
 *   LDAP-SYNTAX       id-asx-altSignatureValue
 *   LDAP-NAME         {"Alternative signature value"}
 *   ID                id-ce-a-altSignatureValue}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof altSignatureValue["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof altSignatureValue["&ExtnType"]>}
 */
export const a_altSignatureValue: ATTRIBUTE<
    typeof altSignatureValue["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": altSignatureValue.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": altSignatureValue.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_altSignatureValue /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_altSignatureValue /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_altSignatureValue */

/* eslint-enable */
