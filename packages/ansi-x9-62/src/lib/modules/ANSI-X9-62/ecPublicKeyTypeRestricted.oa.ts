/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
import {
    ECPKRestrictions,
    _decode_ECPKRestrictions,
    _encode_ECPKRestrictions,
} from "../ANSI-X9-62/ECPKRestrictions.ta";
import { id_ecPublicKeyRestricted } from "../ANSI-X9-62/id-ecPublicKeyRestricted.va";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
export {
    ECPKRestrictions,
    _decode_ECPKRestrictions,
    _encode_ECPKRestrictions,
} from "../ANSI-X9-62/ECPKRestrictions.ta";
export { id_ecPublicKeyRestricted } from "../ANSI-X9-62/id-ecPublicKeyRestricted.va";

/* START_OF_SYMBOL_DEFINITION ecPublicKeyTypeRestricted */
/**
 * @summary ecPublicKeyTypeRestricted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecPublicKeyTypeRestricted ALGORITHM ::= {
 * OID id-ecPublicKeyRestricted PARMS ECPKRestrictions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<ECPKRestrictions>}
 * @implements {ALGORITHM<ECPKRestrictions>}
 */
export const ecPublicKeyTypeRestricted: ALGORITHM<ECPKRestrictions> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECPKRestrictions,
    },
    encoderFor: {
        "&Type": _encode_ECPKRestrictions,
    },
    "&id": id_ecPublicKeyRestricted /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecPublicKeyTypeRestricted */

/* eslint-enable */
