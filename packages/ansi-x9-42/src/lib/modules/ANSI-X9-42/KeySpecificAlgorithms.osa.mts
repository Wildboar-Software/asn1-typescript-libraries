/* eslint-disable */
import { type ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
import {
    _decode_Counter,
    _encode_Counter,
} from "../ANSI-X9-42/Counter.ta.mjs";
import { tripleDES } from "../ANSI-X9-42/tripleDES.va.mjs";


/**
 * @summary KeySpecificAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeySpecificAlgorithms ALGORITHM-ID ::= {
 * { OID tripleDES PARMS Counter },
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_ID[]}
 *
 */
export const KeySpecificAlgorithms: ALGORITHM_ID[] = [
    {
        class: "ALGORITHM-ID",
        decoderFor: {
            "&Type": _decode_Counter,
        },
        encoderFor: {
            "&Type": _encode_Counter,
        },
        "&id": tripleDES,
        "&Type": 0 as never,
    },
];

/* eslint-enable */
