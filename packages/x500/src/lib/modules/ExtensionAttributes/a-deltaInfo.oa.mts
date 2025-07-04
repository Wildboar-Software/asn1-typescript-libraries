/* eslint-disable */
import { deltaInfo } from "../CertificateExtensions/deltaInfo.oa.mjs";
import { id_asx_deltaInfo } from "../ExtensionAttributes/id-asx-deltaInfo.va.mjs";
import { id_ce_a_deltaInfo } from "../ExtensionAttributes/id-ce-a-deltaInfo.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-deltaInfo ATTRIBUTE ::= {
 *   WITH SYNTAX       deltaInfo.&ExtnType
 *   LDAP-SYNTAX       id-asx-deltaInfo
 *   LDAP-NAME         {"Delta information"}
 *   ID                id-ce-a-deltaInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof deltaInfo["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof deltaInfo["&ExtnType"]>}
 */
export const a_deltaInfo: ATTRIBUTE<typeof deltaInfo["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": deltaInfo.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": deltaInfo.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_deltaInfo /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_deltaInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
