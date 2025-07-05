import type { INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_alg_CMSRC2wrap } from "../CryptographicMessageSyntax/id-alg-CMSRC2wrap.va.mjs";
import { type ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {INTEGER IDENTIFIED BY id-alg-CMSRC2wrap}
 * ```
 */
export const KeyEncryptionAlgorithms_Union1_Intersection0_Element: ALGORITHM_IDENTIFIER<INTEGER> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&id": id_alg_CMSRC2wrap,
    "&Type": 0 as never,
};
