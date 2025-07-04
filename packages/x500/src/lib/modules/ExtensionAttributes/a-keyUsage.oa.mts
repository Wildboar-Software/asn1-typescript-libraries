/* eslint-disable */
import { keyUsage } from "../CertificateExtensions/keyUsage.oa.mjs";
import { id_asx_keyUsage } from "../ExtensionAttributes/id-asx-keyUsage.va.mjs";
import { id_ce_a_keyUsage } from "../ExtensionAttributes/id-ce-a-keyUsage.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-keyUsage ATTRIBUTE ::= {
 *   WITH SYNTAX       keyUsage.&ExtnType
 *   LDAP-SYNTAX       id-asx-keyUsage
 *   LDAP-NAME         {"Key Usage"}
 *   ID                id-ce-a-keyUsage }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof keyUsage["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof keyUsage["&ExtnType"]>}
 */
export const a_keyUsage: ATTRIBUTE<typeof keyUsage["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": keyUsage.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": keyUsage.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_keyUsage /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_keyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
