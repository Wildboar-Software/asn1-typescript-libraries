/* eslint-disable */
import {
    Group23,
    _decode_Group23,
    _encode_Group23,
} from "../GenAlgo/Group23.ta.mjs";
import { id_algo_dhModpGr23Hkdf256Algo } from "../GenAlgo/id-algo-dhModpGr23Hkdf256Algo.va.mjs";
import {
    Payload23,
    _decode_Payload23,
    _encode_Payload23,
} from "../GenAlgo/Payload23.ta.mjs";
import { type ALGORITHM } from "@wildboar/pki-stub";
/**
 * @summary dhModpGr23Hkdf256Algo
 * @description
 *
 * DH group 23 + HKDF-256. PARMS `Group23` = INTEGER (23) always; RFC 5114
 * secp256r1 ECDH. DYN-PARMS `Payload23`: `dhPublicKey` SIZE 512, `nonce`
 * SIZE 32. New DH pair per association; client new pair each rekey; new
 * nonce each establishment; server retains DH private for rekey. HKDF
 * hmacWithSHA256: salt=`nonce`, IKM=DH secret, info=empty. 2 keys (AEAD):
 * client then server. 4 keys: client ICV, server ICV, client enc, server
 * enc. 6.4.6: certs of both parties are not mixed into the shared secret.
 * Instance is an invocation.
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

/* eslint-enable */
