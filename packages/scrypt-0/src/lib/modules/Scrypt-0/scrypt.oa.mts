/* eslint-disable */
import { Scrypt_params, _decode_Scrypt_params, _encode_Scrypt_params } from "../Scrypt-0/Scrypt-params.ta.mjs";
import { id_scrypt } from "../Scrypt-0/id-scrypt.va.mjs";
import type { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca.mjs";



/**
 * @summary scrypt
 * @description
 *
 * `ALGORITHM` information object for the scrypt KDF: parameters type
 * `Scrypt-params`, identified by `id-scrypt` (RFC 7914 §7). Used where
 * an `AlgorithmIdentifier` names scrypt instead of PBKDF2 (same
 * abstraction level as PKCS #5).
 *
 * The scrypt algorithm itself (passphrase P, salt S, N, r, p, dkLen →
 * derived key) is defined in RFC 7914 §6; it uses PBKDF2-HMAC-SHA-256
 * and `scryptROMix`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scrypt ALGORITHM ::= {
 *     PARMS Scrypt-params
 *     IDENTIFIED BY id-scrypt }
 * ```
 *
 * @constant
 * @type {ALGORITHM<Scrypt_params>}
 * @implements {ALGORITHM<Scrypt_params>}
 */
export
const scrypt: ALGORITHM<Scrypt_params> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Scrypt_params,
    },
    encoderFor: {
        "&Type": _encode_Scrypt_params,
    },
    "&id": id_scrypt /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
