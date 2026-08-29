/* eslint-disable */
import { type ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { id_ecPublicKey } from "../ANSI-X9-62/id-ecPublicKey.va.mjs";
import {
    ECDomainParameters,
    _decode_ECDomainParameters,
    _encode_ECDomainParameters,
} from "./ECDomainParameters.ta.mjs";
// ECDomainParameters used to be DomainParameters. I think this is a mistake.

/**
 * @summary ecPublicKeyType
 * @description
 *
 * Unrestricted EC public key. ANSI X9.62-1998 §6.4 identifies
 * `Parameters` by `id-ecPublicKey`. This package's later module
 * uses `ECDomainParameters` as the parameter type. The public
 * key BIT STRING is the `ECPoint` octet string mapped bit-for-
 * bit. ANSI X9.62-1998 §6.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecPublicKeyType ALGORITHM ::= {
 * OID id-ecPublicKey PARMS ECDomainParameters
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<ECDomainParameters>}
 * @implements {ALGORITHM<ECDomainParameters>}
 */
export const ecPublicKeyType: ALGORITHM<ECDomainParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECDomainParameters,
    },
    encoderFor: {
        "&Type": _encode_ECDomainParameters,
    },
    "&id": id_ecPublicKey /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
