/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { sha512WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha512WithRSAEncryption.va.mjs";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary sha512WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha512WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const sha512WithRSAEncryptionAlgorithm: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha512WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
