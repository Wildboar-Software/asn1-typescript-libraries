/* eslint-disable */
import {
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
import { CompressionMethod, _enum_for_CompressionMethod, _decode_CompressionMethod, _encode_CompressionMethod } from "../TSM/CompressionMethod.ta.mjs";



/**
 * @summary CompressionMethods
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressionMethods     ::=     SEQUENCE(SIZE(1..255)) OF CompressionMethod
 * ```
 */
export
type CompressionMethods = CompressionMethod[]; // SequenceOfType

let _cached_decoder_for_CompressionMethods: $.ASN1Decoder<CompressionMethods> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressionMethods
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressionMethods (el: _Element): CompressionMethods {
    if (!_cached_decoder_for_CompressionMethods) { _cached_decoder_for_CompressionMethods = $._decodeSequenceOf<CompressionMethod>(() => _decode_CompressionMethod); }
    return _cached_decoder_for_CompressionMethods(el);
}

let _cached_encoder_for_CompressionMethods: $.ASN1Encoder<CompressionMethods> | null = null;

/**
 * @summary Encodes a(n) CompressionMethods into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressionMethods, encoded as an ASN.1 Element.
 */
export
function _encode_CompressionMethods (value: CompressionMethods, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressionMethods) { _cached_encoder_for_CompressionMethods = $._encodeSequenceOf<CompressionMethod>(() => _encode_CompressionMethod, $.BER); }
    return _cached_encoder_for_CompressionMethods(value, elGetter);
}


/* eslint-enable */
