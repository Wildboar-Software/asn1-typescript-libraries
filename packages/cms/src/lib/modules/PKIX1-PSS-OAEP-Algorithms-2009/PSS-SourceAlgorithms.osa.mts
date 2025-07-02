/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/AuthenticationFramework";
import {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta.mjs";
import { id_pSpecified } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-pSpecified.va.mjs";

const PSS_SourceAlgorithms_0: ALGORITHM<EncodingParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_EncodingParameters,
    },
    encoderFor: {
        "&Type": _encode_EncodingParameters,
    },
    "&id": id_pSpecified,
    "&Type": 0 as never,
};


/**
 * @summary PSS_SourceAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSS-SourceAlgorithms ALGORITHM ::= {
 * { IDENTIFIER id-pSpecified PARAMS TYPE EncodingParameters
 * ARE required },
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const PSS_SourceAlgorithms: ALGORITHM[] = [
    PSS_SourceAlgorithms_0,
];

/* eslint-enable */
