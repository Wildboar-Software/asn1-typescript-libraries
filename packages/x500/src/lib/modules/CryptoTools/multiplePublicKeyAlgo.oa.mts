/* eslint-disable */
import { id_algo_multiplePublicKeyAlgo } from "../CryptoTools/id-algo-multiplePublicKeyAlgo.va.mjs";
import {
    MultiplePublicKeyAlgo,
    _decode_MultiplePublicKeyAlgo,
    _encode_MultiplePublicKeyAlgo,
} from "../CryptoTools/MultiplePublicKeyAlgo.ta.mjs";
import { type ALGORITHM } from "@wildboar/pki-stub";
/**
 * @summary multiplePublicKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multiplePublicKeyAlgo ALGORITHM ::= {
 *   PARMS         MultiplePublicKeyAlgo
 *   IDENTIFIED BY id-algo-multiplePublicKeyAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<MultiplePublicKeyAlgo>}
 * @implements {ALGORITHM<MultiplePublicKeyAlgo>}
 */
export const multiplePublicKeyAlgo: ALGORITHM<MultiplePublicKeyAlgo> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultiplePublicKeyAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultiplePublicKeyAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multiplePublicKeyAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
