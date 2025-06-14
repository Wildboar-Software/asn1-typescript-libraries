/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION MTAName */
/**
 * @summary MTAName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTAName  ::=  IA5String(SIZE (1..ub-mta-name-length))
 * ```
 */
export type MTAName = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION MTAName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTAName */
let _cached_decoder_for_MTAName: $.ASN1Decoder<MTAName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTAName */

/* START_OF_SYMBOL_DEFINITION _decode_MTAName */
/**
 * @summary Decodes an ASN.1 element into a(n) MTAName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTAName} The decoded data structure.
 */
export function _decode_MTAName(el: _Element) {
    if (!_cached_decoder_for_MTAName) {
        _cached_decoder_for_MTAName = $._decodeIA5String;
    }
    return _cached_decoder_for_MTAName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTAName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTAName */
let _cached_encoder_for_MTAName: $.ASN1Encoder<MTAName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTAName */

/* START_OF_SYMBOL_DEFINITION _encode_MTAName */
/**
 * @summary Encodes a(n) MTAName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTAName, encoded as an ASN.1 Element.
 */
export function _encode_MTAName(
    value: MTAName,
    elGetter: $.ASN1Encoder<MTAName>
) {
    if (!_cached_encoder_for_MTAName) {
        _cached_encoder_for_MTAName = $._encodeIA5String;
    }
    return _cached_encoder_for_MTAName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTAName */

/* eslint-enable */
