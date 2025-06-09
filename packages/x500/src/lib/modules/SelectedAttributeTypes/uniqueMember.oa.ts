/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { id_at_uniqueMember } from "../SelectedAttributeTypes/id-at-uniqueMember.va.js";
import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.js";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta.js";
import { uniqueMemberMatch } from "../SelectedAttributeTypes/uniqueMemberMatch.oa.js";
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
export { id_at_uniqueMember } from "../SelectedAttributeTypes/id-at-uniqueMember.va.js";
export { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.js";
export {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta.js";
export { uniqueMemberMatch } from "../SelectedAttributeTypes/uniqueMemberMatch.oa.js";

/* START_OF_SYMBOL_DEFINITION uniqueMember */
/**
 * @summary uniqueMember
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueMember ATTRIBUTE ::= {
 *   WITH SYNTAX              NameAndOptionalUID
 *   EQUALITY MATCHING RULE   uniqueMemberMatch
 *   LDAP-SYNTAX              nameAndOptionalUID.&id
 *   LDAP-NAME                {"uniqueMember"}
 *   ID                       id-at-uniqueMember }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<NameAndOptionalUID>}
 * @implements {ATTRIBUTE<NameAndOptionalUID>}
 */
export const uniqueMember: ATTRIBUTE<NameAndOptionalUID> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&Type": _encode_NameAndOptionalUID,
    },
    "&equality-match": uniqueMemberMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uniqueMember"],
    "&id": id_at_uniqueMember /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uniqueMember */

/* eslint-enable */
