/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { ldapSyntaxes } from "../LdapSystemSchema/ldapSyntaxes.oa.js";
import { attributeTypes } from "../SchemaAdministration/attributeTypes.oa.js";
import { contextTypes } from "../SchemaAdministration/contextTypes.oa.js";
import { dITContentRules } from "../SchemaAdministration/dITContentRules.oa.js";
import { dITContextUse } from "../SchemaAdministration/dITContextUse.oa.js";
import { dITStructureRules } from "../SchemaAdministration/dITStructureRules.oa.js";
import { friends } from "../SchemaAdministration/friends.oa.js";
import { id_soc_subschema } from "../SchemaAdministration/id-soc-subschema.va.js";
import { matchingRules } from "../SchemaAdministration/matchingRules.oa.js";
import { matchingRuleUse } from "../SchemaAdministration/matchingRuleUse.oa.js";
import { nameForms } from "../SchemaAdministration/nameForms.oa.js";
import { objectClasses } from "../SchemaAdministration/objectClasses.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta.js";
export { ldapSyntaxes } from "../LdapSystemSchema/ldapSyntaxes.oa.js";
export { attributeTypes } from "../SchemaAdministration/attributeTypes.oa.js";
export { contextTypes } from "../SchemaAdministration/contextTypes.oa.js";
export { dITContentRules } from "../SchemaAdministration/dITContentRules.oa.js";
export { dITContextUse } from "../SchemaAdministration/dITContextUse.oa.js";
export { dITStructureRules } from "../SchemaAdministration/dITStructureRules.oa.js";
export { friends } from "../SchemaAdministration/friends.oa.js";
export { id_soc_subschema } from "../SchemaAdministration/id-soc-subschema.va.js";
export { matchingRules } from "../SchemaAdministration/matchingRules.oa.js";
export { matchingRuleUse } from "../SchemaAdministration/matchingRuleUse.oa.js";
export { nameForms } from "../SchemaAdministration/nameForms.oa.js";
export { objectClasses } from "../SchemaAdministration/objectClasses.oa.js";

/* START_OF_SYMBOL_DEFINITION subschema */
/**
 * @summary subschema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subschema OBJECT-CLASS ::= {
 *   KIND        auxiliary
 *   MAY CONTAIN { dITStructureRules |
 *                 nameForms |
 *                 dITContentRules |
 *                 objectClasses |
 *                 attributeTypes |
 *                 friends |
 *                 contextTypes |
 *                 dITContextUse |
 *                 matchingRules |
 *                 matchingRuleUse |
 *                 ldapSyntaxes }
 *   LDAP-NAME   {"subschema"}
 *   ID          id-soc-subschema }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const subschema: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        dITStructureRules,
        nameForms,
        dITContentRules,
        objectClasses,
        attributeTypes,
        friends,
        contextTypes,
        dITContextUse,
        matchingRules,
        matchingRuleUse,
        ldapSyntaxes,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["subschema"],
    "&id": id_soc_subschema /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subschema */

/* eslint-enable */
