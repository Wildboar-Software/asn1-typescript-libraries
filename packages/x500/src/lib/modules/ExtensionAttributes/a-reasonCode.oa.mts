/* eslint-disable */
import { reasonCode } from "../CertificateExtensions/reasonCode.oa.mjs";
import { id_asx_reasonCode } from "../ExtensionAttributes/id-asx-reasonCode.va.mjs";
import { id_ce_a_reasonCode } from "../ExtensionAttributes/id-ce-a-reasonCode.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-reasonCode ATTRIBUTE ::= {
 *   WITH SYNTAX       reasonCode.&ExtnType
 *   LDAP-SYNTAX       id-asx-reasonCode
 *   LDAP-NAME         {"Reason code"}
 *   ID                id-ce-a-reasonCode}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof reasonCode["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof reasonCode["&ExtnType"]>}
 */
export const a_reasonCode: ATTRIBUTE<typeof reasonCode["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": reasonCode.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": reasonCode.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_reasonCode /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_reasonCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
