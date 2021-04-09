/* eslint-disable */
import { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca";
export { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca";
import { id_sha1 } from "../ANSI-X9-42/id-sha1.va";
import {
    _decodeNull,
    _encodeNull,
} from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyDerivationAlgorithm */
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
/* END_OF_SYMBOL_DEFINITION KeyDerivationAlgorithm */

/* eslint-enable */
