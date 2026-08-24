/* eslint-disable */
import {
    Group14,
    _decode_Group14,
    _encode_Group14,
} from "../GenAlgo/Group14.ta.mjs";
import { id_algo_dhModpGr14Hkdf256Algo } from "../GenAlgo/id-algo-dhModpGr14Hkdf256Algo.va.mjs";
import {
    Payload14,
    _decode_Payload14,
    _encode_Payload14,
} from "../GenAlgo/Payload14.ta.mjs";
import { type ALGORITHM } from "@wildboar/pki-stub";
/**
 * @summary dhModpGr14Hkdf256Algo
 * @description
 *
 * DH group 14 + HKDF-256. PARMS `Group14` = INTEGER (14) always; RFC 3526
 * MODP 2048. DYN-PARMS `Payload14`: `dhPublicKey` SIZE 256, `nonce` SIZE
 * 32. New DH pair per association; client new pair each rekey; new nonce
 * each establishment; server retains DH private for rekey. HKDF
 * hmacWithSHA256: salt=`nonce`, IKM=DH secret, info=empty. 2 keys (AEAD):
 * client then server. 4 keys: client ICV, server ICV, client enc, server
 * enc. 6.4.6: certs of both parties are not mixed into the shared secret.
 * Instance is an invocation.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhModpGr14Hkdf256Algo ALGORITHM ::= {
 *   PARMS         Group14
 *   DYN-PARMS     Payload14
 *   IDENTIFIED BY id-algo-dhModpGr14Hkdf256Algo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<Group14, Payload14>}
 * @implements {ALGORITHM<Group14, Payload14>}
 */
export const dhModpGr14Hkdf256Algo: ALGORITHM<Group14, Payload14> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Group14,
        "&DynParms": _decode_Payload14,
    },
    encoderFor: {
        "&Type": _encode_Group14,
        "&DynParms": _encode_Payload14,
    },
    "&id": id_algo_dhModpGr14Hkdf256Algo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
