/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-objectIdentifierFirstComponentMatch.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
/**
 * @summary objectIdentifierFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifierFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       OBJECT IDENTIFIER
 *   LDAP-SYNTAX  oid.&id
 *   LDAP-NAME    {"objectIdentifierFirstComponentMatch"}
 *   ID           id-mr-objectIdentifierFirstComponentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OBJECT_IDENTIFIER>}
 * @implements {MATCHING_RULE<OBJECT_IDENTIFIER>}
 */
export const objectIdentifierFirstComponentMatch: MATCHING_RULE<OBJECT_IDENTIFIER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["objectIdentifierFirstComponentMatch"],
    "&id": id_mr_objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
