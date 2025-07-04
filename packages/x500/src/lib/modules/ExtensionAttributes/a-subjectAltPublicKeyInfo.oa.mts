/* eslint-disable */
import { subjectAltPublicKeyInfo } from "../CertificateExtensions/subjectAltPublicKeyInfo.oa.mjs";
import { id_asx_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-asx-subjectAltPublicKeyInfo.va.mjs";
import { id_ce_a_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-ce-a-subjectAltPublicKeyInfo.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectAltPublicKeyInfo ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectAltPublicKeyInfo.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectAltPublicKeyInfo
 *   LDAP-NAME         {"Subject alternative public key info"}
 *   ID                id-ce-a-subjectAltPublicKeyInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof subjectAltPublicKeyInfo["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof subjectAltPublicKeyInfo["&ExtnType"]>}
 */
export const a_subjectAltPublicKeyInfo: ATTRIBUTE<
    typeof subjectAltPublicKeyInfo["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectAltPublicKeyInfo.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectAltPublicKeyInfo.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
