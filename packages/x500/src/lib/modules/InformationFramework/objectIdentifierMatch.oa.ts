/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_mr_objectIdentifierMatch } from "../InformationFramework/id-mr-objectIdentifierMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { oid } from "../SelectedAttributeTypes/oid.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { id_mr_objectIdentifierMatch } from "../InformationFramework/id-mr-objectIdentifierMatch.va.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { oid } from "../SelectedAttributeTypes/oid.oa.js";

/* START_OF_SYMBOL_DEFINITION objectIdentifierMatch */
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
/* END_OF_SYMBOL_DEFINITION objectIdentifierMatch */

/* eslint-enable */
