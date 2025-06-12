/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    AttributeTypeDescription,
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta.mjs";
import { id_soa_attributeTypes } from "../SchemaAdministration/id-soa-attributeTypes.va.mjs";
import { attributeTypeDescription } from "../SelectedAttributeTypes/attributeTypeDescription.oa.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export {
    AttributeTypeDescription,
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta.mjs";
export { id_soa_attributeTypes } from "../SchemaAdministration/id-soa-attributeTypes.va.mjs";
export { attributeTypeDescription } from "../SelectedAttributeTypes/attributeTypeDescription.oa.mjs";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";

/* START_OF_SYMBOL_DEFINITION attributeTypes */
/**
 * @summary attributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeTypes ATTRIBUTE ::= {
 *   WITH SYNTAX              AttributeTypeDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              attributeTypeDescription.&id
 *   LDAP-NAME                {"attributeTypes"}
 *   ID                       id-soa-attributeTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AttributeTypeDescription>}
 * @implements {ATTRIBUTE<AttributeTypeDescription>}
 */
export const attributeTypes: ATTRIBUTE<AttributeTypeDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeTypeDescription,
    },
    encoderFor: {
        "&Type": _encode_AttributeTypeDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": attributeTypeDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["attributeTypes"],
    "&id": id_soa_attributeTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeTypes */

/* eslint-enable */
