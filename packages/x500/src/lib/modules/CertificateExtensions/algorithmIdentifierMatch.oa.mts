/* eslint-disable */
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { algorithmIdentifier } from "../CertificateExtensions/algorithmIdentifier.oa.mjs";
import { id_mr_algorithmIdentifierMatch } from "../CertificateExtensions/id-mr-algorithmIdentifierMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary algorithmIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX       AlgorithmIdentifier {{SupportedAlgorithms}}
 *   LDAP-SYNTAX  algorithmIdentifier.&id
 *   LDAP-NAME    {"algorithmIdentifierMatch"}
 *   LDAP-DESC    "X.509 Algorithm Identifier Match"
 *   ID           id-mr-algorithmIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<AlgorithmIdentifier>}
 * @implements {MATCHING_RULE<AlgorithmIdentifier>}
 */
export const algorithmIdentifierMatch: MATCHING_RULE<AlgorithmIdentifier> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        "&AssertionType": _encode_AlgorithmIdentifier,
    },
    "&ldapSyntax": algorithmIdentifier["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["algorithmIdentifierMatch"],
    "&ldapDesc": "X.509 Algorithm Identifier Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
