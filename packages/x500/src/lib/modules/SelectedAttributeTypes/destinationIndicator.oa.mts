/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import {
    DestinationIndicator,
    _decode_DestinationIndicator,
    _encode_DestinationIndicator,
} from "../SelectedAttributeTypes/DestinationIndicator.ta.mjs";
import { id_at_destinationIndicator } from "../SelectedAttributeTypes/id-at-destinationIndicator.va.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
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
export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
export {
    DestinationIndicator,
    _decode_DestinationIndicator,
    _encode_DestinationIndicator,
} from "../SelectedAttributeTypes/DestinationIndicator.ta.mjs";
export { id_at_destinationIndicator } from "../SelectedAttributeTypes/id-at-destinationIndicator.va.mjs";
export { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";

/* START_OF_SYMBOL_DEFINITION destinationIndicator */
/**
 * @summary destinationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * destinationIndicator ATTRIBUTE ::= {
 *   WITH SYNTAX              DestinationIndicator
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"destinationIndicator"}
 *   ID                       id-at-destinationIndicator }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DestinationIndicator>}
 * @implements {ATTRIBUTE<DestinationIndicator>}
 */
export const destinationIndicator: ATTRIBUTE<DestinationIndicator> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DestinationIndicator,
    },
    encoderFor: {
        "&Type": _encode_DestinationIndicator,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["destinationIndicator"],
    "&id": id_at_destinationIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION destinationIndicator */

/* eslint-enable */
