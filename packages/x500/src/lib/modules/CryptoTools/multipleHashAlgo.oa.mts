/* eslint-disable */
import { id_algo_multipleHashAlgo } from "../CryptoTools/id-algo-multipleHashAlgo.va.mjs";
import {
    MultipleHashAlgo,
    _decode_MultipleHashAlgo,
    _encode_MultipleHashAlgo,
} from "../CryptoTools/MultipleHashAlgo.ta.mjs";
import { type ALGORITHM } from "@wildboar/pki-stub";
/**
 * @summary multipleHashAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleHashAlgo ALGORITHM ::= {
 *   PARMS         MultipleHashAlgo
 *   IDENTIFIED BY id-algo-multipleHashAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<MultipleHashAlgo>}
 * @implements {ALGORITHM<MultipleHashAlgo>}
 */
export const multipleHashAlgo: ALGORITHM<MultipleHashAlgo> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleHashAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleHashAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleHashAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
