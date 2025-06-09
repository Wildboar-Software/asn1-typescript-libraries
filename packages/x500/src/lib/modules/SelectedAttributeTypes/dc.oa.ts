/* eslint-disable */
import { IA5String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.js";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.js";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.js";
import { id_coat_dc } from "../SelectedAttributeTypes/id-coat-dc.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
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
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.js";
export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.js";
export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.js";
export { id_coat_dc } from "../SelectedAttributeTypes/id-coat-dc.va.js";

/* START_OF_SYMBOL_DEFINITION dc */
/**
 * @summary dc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dc ATTRIBUTE ::= {
 *   WITH SYNTAX              IA5String
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              ia5String.&id
 *   LDAP-NAME                {"dc"}
 *   ID                       id-coat-dc }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export const dc: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dc"],
    "&id": id_coat_dc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dc */

/* eslint-enable */
