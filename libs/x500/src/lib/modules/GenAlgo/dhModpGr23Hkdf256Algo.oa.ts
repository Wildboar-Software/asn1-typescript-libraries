/* eslint-disable */
import {
    Group23,
    _decode_Group23,
    _encode_Group23,
} from "../GenAlgo/Group23.ta";
import { id_algo_dhModpGr23Hkdf256Algo } from "../GenAlgo/id-algo-dhModpGr23Hkdf256Algo.va";
import {
    Payload23,
    _decode_Payload23,
    _encode_Payload23,
} from "../GenAlgo/Payload23.ta";
import { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca";
export {
    Group23,
    _decode_Group23,
    _encode_Group23,
} from "../GenAlgo/Group23.ta";
export { id_algo_dhModpGr23Hkdf256Algo } from "../GenAlgo/id-algo-dhModpGr23Hkdf256Algo.va";
export {
    Payload23,
    _decode_Payload23,
    _encode_Payload23,
} from "../GenAlgo/Payload23.ta";
export { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION dhModpGr23Hkdf256Algo */
/**
 * @summary dhModpGr23Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhModpGr23Hkdf256Algo ALGORITHM ::= {
 *   PARMS         Group23
 *   DYN-PARMS     Payload23
 *   IDENTIFIED BY id-algo-dhModpGr23Hkdf256Algo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<Group23, Payload23>}
 * @implements {ALGORITHM<Group23, Payload23>}
 */
export const dhModpGr23Hkdf256Algo: ALGORITHM<Group23, Payload23> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Group23,
        "&DynParms": _decode_Payload23,
    },
    encoderFor: {
        "&Type": _encode_Group23,
        "&DynParms": _encode_Payload23,
    },
    "&id": id_algo_dhModpGr23Hkdf256Algo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dhModpGr23Hkdf256Algo */

/* eslint-enable */
