/* eslint-disable */
import { type ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import {
    ECPKRestrictions,
    _decode_ECPKRestrictions,
    _encode_ECPKRestrictions,
} from "../ANSI-X9-62/ECPKRestrictions.ta.mjs";
import { id_ecPublicKeyRestricted } from "../ANSI-X9-62/id-ecPublicKeyRestricted.va.mjs";
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

/* eslint-enable */
