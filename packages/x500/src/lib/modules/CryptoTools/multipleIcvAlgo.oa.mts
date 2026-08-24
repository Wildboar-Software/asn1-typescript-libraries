/* eslint-disable */
import { id_algo_multipleIcvAlgo } from "../CryptoTools/id-algo-multipleIcvAlgo.va.mjs";
import {
    MultipleIcvAlgo,
    _decode_MultipleIcvAlgo,
    _encode_MultipleIcvAlgo,
} from "../CryptoTools/MultipleIcvAlgo.ta.mjs";
import { type ALGORITHM } from "@wildboar/pki-stub";
/**
 * @summary multipleIcvAlgo
 * @description
 *
 * Outer ALGORITHM for migration (Annex H). PARMS = fixed MultipleIcvAlgo
 * SEQUENCE SIZE (1..MAX); empty illegal; order = preference. No DYN-PARMS.
 * Instance is an invocation.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleIcvAlgo ALGORITHM ::= {
 *   PARMS         MultipleIcvAlgo
 *   IDENTIFIED BY id-algo-multipleIcvAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<MultipleIcvAlgo>}
 * @implements {ALGORITHM<MultipleIcvAlgo>}
 */
export const multipleIcvAlgo: ALGORITHM<MultipleIcvAlgo> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleIcvAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleIcvAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleIcvAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
