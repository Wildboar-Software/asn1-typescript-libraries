import type { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hMAC_SHA1 } from "../CryptographicMessageSyntax/hMAC-SHA1.va.mjs";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {NULL IDENTIFIED BY hMAC-SHA1}
 * ```
 */
export const MACAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": hMAC_SHA1,
    "&Type": 0 as never,
};
