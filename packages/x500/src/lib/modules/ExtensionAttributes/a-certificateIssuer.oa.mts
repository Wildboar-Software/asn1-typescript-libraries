/* eslint-disable */
import { certificateIssuer } from "../CertificateExtensions/certificateIssuer.oa.mjs";
import { id_asx_certificateIssuer } from "../ExtensionAttributes/id-asx-certificateIssuer.va.mjs";
import { id_ce_a_certificateIssuer } from "../ExtensionAttributes/id-ce-a-certificateIssuer.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-certificateIssuer ATTRIBUTE ::= {
 *   WITH SYNTAX       certificateIssuer.&ExtnType
 *   LDAP-SYNTAX       id-asx-certificateIssuer
 *   LDAP-NAME         {"Certificate issuer"}
 *   ID                id-ce-a-certificateIssuer}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof certificateIssuer["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof certificateIssuer["&ExtnType"]>}
 */
export const a_certificateIssuer: ATTRIBUTE<
    typeof certificateIssuer["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": certificateIssuer.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": certificateIssuer.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_certificateIssuer /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_certificateIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
