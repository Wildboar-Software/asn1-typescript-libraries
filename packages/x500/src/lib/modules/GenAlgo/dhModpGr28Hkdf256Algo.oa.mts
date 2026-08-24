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
 * DH group 28 + HKDF-256. PARMS `Group28` = INTEGER (28) always; RFC 6932
 * brainpoolP256r1. DYN-PARMS `Payload28`: `dhPublicKey` SIZE 512, `nonce`
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
