/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va.js";
import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.js";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va.js";
export { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.js";
export {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta.js";

/* START_OF_SYMBOL_DEFINITION uniqueMemberMatch */
/**
 * @summary uniqueMemberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueMemberMatch MATCHING-RULE ::= {
 *   SYNTAX       NameAndOptionalUID
 *   LDAP-SYNTAX  nameAndOptionalUID.&id
 *   LDAP-NAME    {"uniqueMemberMatch"}
 *   ID           id-mr-uniqueMemberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<NameAndOptionalUID>}
 * @implements {MATCHING_RULE<NameAndOptionalUID>}
 */
export const uniqueMemberMatch: MATCHING_RULE<NameAndOptionalUID> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&AssertionType": _encode_NameAndOptionalUID,
    },
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uniqueMemberMatch"],
    "&id": id_mr_uniqueMemberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uniqueMemberMatch */

/* eslint-enable */
