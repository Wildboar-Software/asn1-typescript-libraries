/* eslint-disable */
import { id_ecPublicKey } from "../AlgorithmObjectIdentifiers/id-ecPublicKey.va.mjs";
import {
    X509Curves,
    _decode_X509Curves,
    _encode_X509Curves,
} from "../AlgorithmObjectIdentifiers/X509Curves.vsa.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecPublicKey ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         X509Curves
 *   IDENTIFIED BY id-ecPublicKey }
 * ```
 *
 * @constant
 * @type {ALGORITHM<X509Curves>}
 * @implements {ALGORITHM<X509Curves>}
 */
export const ecPublicKey: ALGORITHM<X509Curves> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_X509Curves,
    },
    encoderFor: {
        "&Type": _encode_X509Curves,
    },
    "&id": id_ecPublicKey /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
