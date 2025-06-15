/* eslint-disable */
import { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
import { dhPublicNumber } from "../ANSI-X9-42/dhPublicNumber.va.mjs";
import {
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../ANSI-X9-42/DomainParameters.ta.mjs";


/**
 * @summary DHPublicNumbers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPublicNumbers ALGORITHM-ID ::= {
 * { OID dhPublicNumber PARMS DomainParameters },
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_ID[]}
 *
 */
export const DHPublicNumbers: ALGORITHM_ID[] = [
    {
        class: "ALGORITHM-ID",
        decoderFor: {
            "&Type": _decode_DomainParameters,
        },
        encoderFor: {
            "&Type": _encode_DomainParameters,
        },
        "&id": dhPublicNumber,
        "&Type": 0 as never,
    },
];

/* eslint-enable */
