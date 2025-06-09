/* eslint-disable */
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";
import { id_ecPublicKey } from "../AuthenticationFramework/id-ecPublicKey.va.js";
import {
    SupportedCurves,
    _decode_SupportedCurves,
    _encode_SupportedCurves,
} from "../AuthenticationFramework/SupportedCurves.vsa.js";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";
export { id_ecPublicKey } from "../AuthenticationFramework/id-ecPublicKey.va.js";
export {
    SupportedCurves,
    _decode_SupportedCurves,
    _encode_SupportedCurves,
} from "../AuthenticationFramework/SupportedCurves.vsa.js";

/* START_OF_SYMBOL_DEFINITION ecPublicKey */
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
/* END_OF_SYMBOL_DEFINITION ecPublicKey */

/* eslint-enable */
