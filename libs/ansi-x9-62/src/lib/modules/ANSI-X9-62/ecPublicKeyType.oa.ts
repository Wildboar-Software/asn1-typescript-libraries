/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
import { id_ecPublicKey } from "../ANSI-X9-62/id-ecPublicKey.va";
import {
    ECDomainParameters,
    _decode_ECDomainParameters,
    _encode_ECDomainParameters,
} from "./ECDomainParameters.ta";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
export { id_ecPublicKey } from "../ANSI-X9-62/id-ecPublicKey.va";

// ECDomainParameters used to be DomainParameters. I think this is a mistake.

/* START_OF_SYMBOL_DEFINITION ecPublicKeyType */
/**
 * @summary ecPublicKeyType
 * @description
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
/* END_OF_SYMBOL_DEFINITION ecPublicKeyType */

/* eslint-enable */
