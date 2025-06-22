import type { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
