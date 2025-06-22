import type { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { id_hmacWithSHA1 } from "../PKCS5v2-1/id-hmacWithSHA1.va.mjs";

/**
 * ### ASN.1 Definition
 * ```
 * {NULL IDENTIFIED BY id-hmacWithSHA1}
 * ```
 */
export const ContentEncryptionAlgorithms_Union0_Intersection0_Exclusion: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA1,
    "&Type": 0 as never,
};
