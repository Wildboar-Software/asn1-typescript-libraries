/* eslint-disable */
import { type ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
import { id_sha1 } from "../ANSI-X9-42/id-sha1.va.mjs";
import {
    _decodeNull,
    _encodeNull,
} from "@wildboar/asn1/functional";


/**
 * @summary KeyDerivationAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgorithm ALGORITHM-ID ::= {
 * { OID  id-sha1  PARMS NULL },    -- From ANS X9.30
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_ID[]}
 *
 */
export const KeyDerivationAlgorithm: ALGORITHM_ID[] = [
    {
        class: "ALGORITHM-ID",
        decoderFor: {
            "&Type": _decodeNull,
        },
        encoderFor: {
            "&Type": _encodeNull,
        },
        "&id": id_sha1,
        "&Type": 0 as never,
    },
];

/* eslint-enable */
