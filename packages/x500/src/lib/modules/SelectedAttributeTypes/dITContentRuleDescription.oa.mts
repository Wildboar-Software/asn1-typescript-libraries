/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    DITContentRuleDescription,
    _decode_DITContentRuleDescription,
    _encode_DITContentRuleDescription,
} from "../SchemaAdministration/DITContentRuleDescription.ta.mjs";
import { id_lsx_dITContentRuleDescription } from "../SelectedAttributeTypes/id-lsx-dITContentRuleDescription.va.mjs";
/**
 * @summary dITContentRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContentRuleDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "DIT Content Rule Description"
 *   DIRECTORY SYNTAX  DITContentRuleDescription
 *   ID                id-lsx-dITContentRuleDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<DITContentRuleDescription>}
 * @implements {SYNTAX_NAME<DITContentRuleDescription>}
 */
export const dITContentRuleDescription: SYNTAX_NAME<DITContentRuleDescription> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DITContentRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContentRuleDescription,
    },
    "&ldapDesc": "DIT Content Rule Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dITContentRuleDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
