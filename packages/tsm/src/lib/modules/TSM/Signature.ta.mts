/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Signature_rsa, _decode_Signature_rsa, _encode_Signature_rsa } from "../TSM/Signature-rsa.ta.mjs";

import { Signature_dsa, _decode_Signature_dsa, _encode_Signature_dsa } from "../TSM/Signature-dsa.ta.mjs";



/**
 * @summary Signature
 * @description
 *
 * Signature over ServerKeyExchange params: anonymous, RSA (MD5+SHA-1),
 * or DSA (SHA-1). Extensible. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signature     ::=     CHOICE {
 * anonymous    NULL,
 * rsa        SEQUENCE {
 *     md5-hash    Opaque(SIZE(16)),
 *     sha-hash    Opaque(SIZE(20))
 *     },
 * dsa          SEQUENCE {
 *     sha-hash    Opaque(SIZE(20))
 *     },
 * ...
 * }
 * ```
 */
export
type Signature =
    { anonymous: NULL } /* CHOICE_ALT_ROOT */
    | { rsa: Signature_rsa } /* CHOICE_ALT_ROOT */
    | { dsa: Signature_dsa } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Signature: $.ASN1Decoder<Signature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signature (el: _Element): Signature {
    if (!_cached_decoder_for_Signature) { _cached_decoder_for_Signature = $._decode_extensible_choice<Signature>({
    "CONTEXT 0": [ "anonymous", $._decodeNull ],
    "CONTEXT 1": [ "rsa", _decode_Signature_rsa ],
    "CONTEXT 2": [ "dsa", _decode_Signature_dsa ]
}); }
    return _cached_decoder_for_Signature(el);
}

let _cached_encoder_for_Signature: $.ASN1Encoder<Signature> | null = null;

/**
 * @summary Encodes a(n) Signature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signature, encoded as an ASN.1 Element.
 */
export
function _encode_Signature (value: Signature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signature) { _cached_encoder_for_Signature = $._encode_choice<Signature>({
    "anonymous": $._encodeNull,
    "rsa": _encode_Signature_rsa,
    "dsa": _encode_Signature_dsa,
}, $.BER); }
    return _cached_encoder_for_Signature(value, elGetter);
}


/* eslint-enable */
