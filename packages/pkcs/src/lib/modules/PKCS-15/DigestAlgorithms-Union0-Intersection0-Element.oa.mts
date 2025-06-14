import type { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { sha_1 } from "../CryptographicMessageSyntax/sha-1.va.mjs";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {NULL IDENTIFIED BY sha-1}
 * ```
 */
export const DigestAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha_1,
    "&Type": 0 as never,
};
