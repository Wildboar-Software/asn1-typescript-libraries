/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
import {
    DITStructureRuleDescription,
    _decode_DITStructureRuleDescription,
    _encode_DITStructureRuleDescription,
} from "../SchemaAdministration/DITStructureRuleDescription.ta.js";
import { id_lsx_dITStructureRuleDescription } from "../SelectedAttributeTypes/id-lsx-dITStructureRuleDescription.va.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export {
    DITStructureRuleDescription,
    _decode_DITStructureRuleDescription,
    _encode_DITStructureRuleDescription,
} from "../SchemaAdministration/DITStructureRuleDescription.ta.js";
export { id_lsx_dITStructureRuleDescription } from "../SelectedAttributeTypes/id-lsx-dITStructureRuleDescription.va.js";

/* START_OF_SYMBOL_DEFINITION dITStructureRuleDescription */
/**
 * @summary dITStructureRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITStructureRuleDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "DIT StructureRule Description"
 *   DIRECTORY SYNTAX  DITStructureRuleDescription
 *   ID                id-lsx-dITStructureRuleDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<DITStructureRuleDescription>}
 * @implements {SYNTAX_NAME<DITStructureRuleDescription>}
 */
export const dITStructureRuleDescription: SYNTAX_NAME<DITStructureRuleDescription> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DITStructureRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITStructureRuleDescription,
    },
    "&ldapDesc": "DIT StructureRule Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dITStructureRuleDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dITStructureRuleDescription */

/* eslint-enable */
