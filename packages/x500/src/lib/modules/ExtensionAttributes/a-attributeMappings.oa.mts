/* eslint-disable */
import { attributeMappings } from "../AttributeCertificateDefinitions/attributeMappings.oa.mjs";
import { id_asx_attributeMappings } from "../ExtensionAttributes/id-asx-attributeMappings.va.mjs";
import { id_ce_a_attributeMappings } from "../ExtensionAttributes/id-ce-a-attributeMappings.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { attributeMappings } from "../AttributeCertificateDefinitions/attributeMappings.oa.mjs";
export { id_asx_attributeMappings } from "../ExtensionAttributes/id-asx-attributeMappings.va.mjs";
export { id_ce_a_attributeMappings } from "../ExtensionAttributes/id-ce-a-attributeMappings.va.mjs";
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

/* START_OF_SYMBOL_DEFINITION a_attributeMappings */
/**
 * @summary a_attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-attributeMappings ATTRIBUTE ::= {
 *   WITH SYNTAX       attributeMappings.&ExtnType
 *   LDAP-SYNTAX       id-asx-attributeMappings
 *   LDAP-NAME         {"Attribute mappings"}
 *   ID                id-ce-a-attributeMappings}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof attributeMappings["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof attributeMappings["&ExtnType"]>}
 */
export const a_attributeMappings: ATTRIBUTE<
    typeof attributeMappings["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": attributeMappings.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": attributeMappings.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_attributeMappings /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_attributeMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_attributeMappings */

/* eslint-enable */
