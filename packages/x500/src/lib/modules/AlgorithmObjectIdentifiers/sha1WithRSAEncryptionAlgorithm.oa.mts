/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { sha1WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha1WithRSAEncryption.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary sha1WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha1WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const sha1WithRSAEncryptionAlgorithm: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha1WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
