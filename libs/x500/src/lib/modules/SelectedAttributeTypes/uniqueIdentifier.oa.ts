/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { bitString } from "../SelectedAttributeTypes/bitString.oa";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
import { id_at_uniqueIdentifier } from "../SelectedAttributeTypes/id-at-uniqueIdentifier.va";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
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
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { bitString } from "../SelectedAttributeTypes/bitString.oa";
export { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
export { id_at_uniqueIdentifier } from "../SelectedAttributeTypes/id-at-uniqueIdentifier.va";
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION uniqueIdentifier */
/**
 * @summary uniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX              UniqueIdentifier
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"x500UniqueIdentifier"}
 *   ID                       id-at-uniqueIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UniqueIdentifier>}
 * @implements {ATTRIBUTE<UniqueIdentifier>}
 */
export const uniqueIdentifier: ATTRIBUTE<UniqueIdentifier> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniqueIdentifier,
    },
    encoderFor: {
        "&Type": _encode_UniqueIdentifier,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["x500UniqueIdentifier"],
    "&id": id_at_uniqueIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uniqueIdentifier */

/* eslint-enable */
