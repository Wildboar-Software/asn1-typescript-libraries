/* eslint-disable */
import { id_algo_multipleSymmetricKeyAlgo } from "../CryptoTools/id-algo-multipleSymmetricKeyAlgo.va.js";
import {
    MultipleSymmetricKeyAlgo,
    _decode_MultipleSymmetricKeyAlgo,
    _encode_MultipleSymmetricKeyAlgo,
} from "../CryptoTools/MultipleSymmetricKeyAlgo.ta.js";
import { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca.js";
export { id_algo_multipleSymmetricKeyAlgo } from "../CryptoTools/id-algo-multipleSymmetricKeyAlgo.va.js";
export {
    MultipleSymmetricKeyAlgo,
    _decode_MultipleSymmetricKeyAlgo,
    _encode_MultipleSymmetricKeyAlgo,
} from "../CryptoTools/MultipleSymmetricKeyAlgo.ta.js";
export { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca.js";

/* START_OF_SYMBOL_DEFINITION multipleSymmetricKeyAlgo */
/**
 * @summary multipleSymmetricKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleSymmetricKeyAlgo ALGORITHM ::= {
 *   PARMS         MultipleSymmetricKeyAlgo
 *   IDENTIFIED BY id-algo-multipleSymmetricKeyAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<MultipleSymmetricKeyAlgo>}
 * @implements {ALGORITHM<MultipleSymmetricKeyAlgo>}
 */
export const multipleSymmetricKeyAlgo: ALGORITHM<MultipleSymmetricKeyAlgo> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleSymmetricKeyAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleSymmetricKeyAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleSymmetricKeyAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multipleSymmetricKeyAlgo */

/* eslint-enable */
