import type { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_alg_CMS3DESwrap } from "../CryptographicMessageSyntax/id-alg-CMS3DESwrap.va.mjs";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {NULL IDENTIFIED BY id-alg-CMS3DESwrap}
 * ```
 */
export const KeyEncryptionAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_alg_CMS3DESwrap,
    "&Type": 0 as never,
};
