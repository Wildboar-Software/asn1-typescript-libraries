/* eslint-disable */
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
import { id_ecPublicKey } from "../AuthenticationFramework/id-ecPublicKey.va.mjs";
import {
    SupportedCurves,
    _decode_SupportedCurves,
    _encode_SupportedCurves,
} from "../AuthenticationFramework/SupportedCurves.vsa.mjs";
/**
 * @summary ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecPublicKey ALGORITHM ::= {  -- copied IETF RFC 5480
 *   PARMS       SupportedCurves
 *   IDENTIFIED  BY id-ecPublicKey }
 * ```
 *
 * @constant
 * @type {ALGORITHM<SupportedCurves>}
 * @implements {ALGORITHM<SupportedCurves>}
 */
export const ecPublicKey: ALGORITHM<SupportedCurves> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_SupportedCurves,
    },
    encoderFor: {
        "&Type": _encode_SupportedCurves,
    },
    "&id": id_ecPublicKey /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
