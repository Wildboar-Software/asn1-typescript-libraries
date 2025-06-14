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
