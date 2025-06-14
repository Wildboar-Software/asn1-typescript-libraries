/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ldapSyntaxes } from "../LdapSystemSchema/ldapSyntaxes.oa.mjs";
import { attributeTypes } from "../SchemaAdministration/attributeTypes.oa.mjs";
import { contextTypes } from "../SchemaAdministration/contextTypes.oa.mjs";
import { dITContentRules } from "../SchemaAdministration/dITContentRules.oa.mjs";
import { dITContextUse } from "../SchemaAdministration/dITContextUse.oa.mjs";
import { dITStructureRules } from "../SchemaAdministration/dITStructureRules.oa.mjs";
import { friends } from "../SchemaAdministration/friends.oa.mjs";
import { id_soc_subschema } from "../SchemaAdministration/id-soc-subschema.va.mjs";
import { matchingRules } from "../SchemaAdministration/matchingRules.oa.mjs";
import { matchingRuleUse } from "../SchemaAdministration/matchingRuleUse.oa.mjs";
import { nameForms } from "../SchemaAdministration/nameForms.oa.mjs";
import { objectClasses } from "../SchemaAdministration/objectClasses.oa.mjs";
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
