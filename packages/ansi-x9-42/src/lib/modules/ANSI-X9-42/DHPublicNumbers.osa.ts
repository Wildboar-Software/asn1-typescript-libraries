/* eslint-disable */
import { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca";
export { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca";
import { dhPublicNumber } from "../ANSI-X9-42/dhPublicNumber.va";
import {
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../ANSI-X9-42/DomainParameters.ta";

/* START_OF_SYMBOL_DEFINITION DHPublicNumbers */
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
/* END_OF_SYMBOL_DEFINITION DHPublicNumbers */

/* eslint-enable */
