/* eslint-disable */
import { Scrypt_params, _decode_Scrypt_params, _encode_Scrypt_params } from "../Scrypt-0/Scrypt-params.ta";
import { id_scrypt } from "../Scrypt-0/id-scrypt.va";
import type { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca";


/* START_OF_SYMBOL_DEFINITION scrypt */
/**
 * @summary scrypt
 * @description
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
/* END_OF_SYMBOL_DEFINITION scrypt */

/* eslint-enable */
