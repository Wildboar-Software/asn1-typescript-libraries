/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va.mjs";
import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.mjs";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
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

/* eslint-enable */
