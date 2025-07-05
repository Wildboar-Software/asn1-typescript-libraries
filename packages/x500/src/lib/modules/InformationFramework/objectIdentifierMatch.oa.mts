/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_mr_objectIdentifierMatch } from "../InformationFramework/id-mr-objectIdentifierMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
/**
 * @summary objectIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX       OBJECT IDENTIFIER
 *   LDAP-SYNTAX  oid.&id
 *   LDAP-NAME    {"objectIdentifierMatch"}
 *   ID           id-mr-objectIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OBJECT_IDENTIFIER>}
 * @implements {MATCHING_RULE<OBJECT_IDENTIFIER>}
 */
export const objectIdentifierMatch: MATCHING_RULE<OBJECT_IDENTIFIER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["objectIdentifierMatch"],
    "&id": id_mr_objectIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
