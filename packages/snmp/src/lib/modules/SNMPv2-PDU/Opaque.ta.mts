/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary Opaque
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Opaque  ::=  [APPLICATION 4] IMPLICIT OCTET STRING
 * ```
 */
export
type Opaque = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Opaque: $.ASN1Decoder<Opaque> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Opaque
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Opaque} The decoded data structure.
 */
export
function _decode_Opaque (el: _Element) {
    if (!_cached_decoder_for_Opaque) { _cached_decoder_for_Opaque = $._decode_implicit<Opaque>(() => $._decodeOctetString); }
    return _cached_decoder_for_Opaque(el);
}

let _cached_encoder_for_Opaque: $.ASN1Encoder<Opaque> | null = null;

/**
 * @summary Encodes a(n) Opaque into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Opaque, encoded as an ASN.1 Element.
 */
export
function _encode_Opaque (value: Opaque, elGetter: $.ASN1Encoder<Opaque>) {
    if (!_cached_encoder_for_Opaque) { _cached_encoder_for_Opaque = $._encode_implicit(_TagClass.application, 4, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Opaque(value, elGetter);
}


/* eslint-enable */
