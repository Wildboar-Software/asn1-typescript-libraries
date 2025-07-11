/* eslint-disable */
import {
    Group28,
    _decode_Group28,
    _encode_Group28,
} from "../GenAlgo/Group28.ta.mjs";
import { id_algo_dhModpGr28Hkdf256Algo } from "../GenAlgo/id-algo-dhModpGr28Hkdf256Algo.va.mjs";
import {
    Payload28,
    _decode_Payload28,
    _encode_Payload28,
} from "../GenAlgo/Payload28.ta.mjs";
import { type ALGORITHM } from "@wildboar/pki-stub";
/**
 * @summary dhModpGr28Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhModpGr28Hkdf256Algo ALGORITHM ::= {
 *   PARMS         Group28
 *   DYN-PARMS     Payload28
 *   IDENTIFIED BY id-algo-dhModpGr28Hkdf256Algo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<Group28, Payload28>}
 * @implements {ALGORITHM<Group28, Payload28>}
 */
export const dhModpGr28Hkdf256Algo: ALGORITHM<Group28, Payload28> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Group28,
        "&DynParms": _decode_Payload28,
    },
    encoderFor: {
        "&Type": _encode_Group28,
        "&DynParms": _encode_Payload28,
    },
    "&id": id_algo_dhModpGr28Hkdf256Algo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
