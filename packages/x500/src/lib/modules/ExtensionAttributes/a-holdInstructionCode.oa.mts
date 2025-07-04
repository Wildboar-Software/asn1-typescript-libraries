/* eslint-disable */
import { holdInstructionCode } from "../CertificateExtensions/holdInstructionCode.oa.mjs";
import { id_asx_holdInstructionCode } from "../ExtensionAttributes/id-asx-holdInstructionCode.va.mjs";
import { id_ce_a_holdInstructionCode } from "../ExtensionAttributes/id-ce-a-holdInstructionCode.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-holdInstructionCode ATTRIBUTE ::= {
 *   WITH SYNTAX       holdInstructionCode.&ExtnType
 *   LDAP-SYNTAX       id-asx-holdInstructionCode
 *   LDAP-NAME         {"Hold instruction code"}
 *   ID                id-ce-a-holdInstructionCode}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof holdInstructionCode["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof holdInstructionCode["&ExtnType"]>}
 */
export const a_holdInstructionCode: ATTRIBUTE<
    typeof holdInstructionCode["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": holdInstructionCode.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": holdInstructionCode.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_holdInstructionCode /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_holdInstructionCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
