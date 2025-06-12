/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    AttributeTypeDescription,
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta.mjs";
import { id_lsx_attributeTypeDescription } from "../SelectedAttributeTypes/id-lsx-attributeTypeDescription.va.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export {
    AttributeTypeDescription,
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta.mjs";
export { id_lsx_attributeTypeDescription } from "../SelectedAttributeTypes/id-lsx-attributeTypeDescription.va.mjs";

/* START_OF_SYMBOL_DEFINITION attributeTypeDescription */
/**
 * @summary attributeTypeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeTypeDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Attribute Type Description"
 *   DIRECTORY SYNTAX  AttributeTypeDescription
 *   ID                id-lsx-attributeTypeDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<AttributeTypeDescription>}
 * @implements {SYNTAX_NAME<AttributeTypeDescription>}
 */
export const attributeTypeDescription: SYNTAX_NAME<AttributeTypeDescription> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_AttributeTypeDescription,
    },
    encoderFor: {
        "&Type": _encode_AttributeTypeDescription,
    },
    "&ldapDesc": "Attribute Type Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_attributeTypeDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeTypeDescription */

/* eslint-enable */
