/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { sha256WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha256WithRSAEncryption.va.mjs";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary sha256WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha256WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const sha256WithRSAEncryptionAlgorithm: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha256WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
