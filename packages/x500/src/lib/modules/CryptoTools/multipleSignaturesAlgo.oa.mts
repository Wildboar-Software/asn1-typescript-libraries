/* eslint-disable */
import { id_algo_multipleSignaturesAlgo } from "../CryptoTools/id-algo-multipleSignaturesAlgo.va.mjs";
import {
    MultipleSignaturesAlgo,
    _decode_MultipleSignaturesAlgo,
    _encode_MultipleSignaturesAlgo,
} from "../CryptoTools/MultipleSignaturesAlgo.ta.mjs";
import { type ALGORITHM } from "@wildboar/pki-stub";
/**
 * @summary multipleSignaturesAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleSignaturesAlgo ALGORITHM ::= {
 *   PARMS         MultipleSignaturesAlgo
 *   IDENTIFIED BY id-algo-multipleSignaturesAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<MultipleSignaturesAlgo>}
 * @implements {ALGORITHM<MultipleSignaturesAlgo>}
 */
export const multipleSignaturesAlgo: ALGORITHM<MultipleSignaturesAlgo> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleSignaturesAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleSignaturesAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleSignaturesAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
