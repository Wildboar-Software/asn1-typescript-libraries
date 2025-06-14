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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION SegmentTerminator */
/**
 * @summary SegmentTerminator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SegmentTerminator  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type SegmentTerminator = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SegmentTerminator */
let _cached_decoder_for_SegmentTerminator: $.ASN1Decoder<SegmentTerminator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _decode_SegmentTerminator */
/**
 * @summary Decodes an ASN.1 element into a(n) SegmentTerminator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SegmentTerminator} The decoded data structure.
 */
export function _decode_SegmentTerminator(el: _Element) {
    if (!_cached_decoder_for_SegmentTerminator) {
        _cached_decoder_for_SegmentTerminator = $._decodeOctetString;
    }
    return _cached_decoder_for_SegmentTerminator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SegmentTerminator */
let _cached_encoder_for_SegmentTerminator: $.ASN1Encoder<SegmentTerminator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _encode_SegmentTerminator */
/**
 * @summary Encodes a(n) SegmentTerminator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SegmentTerminator, encoded as an ASN.1 Element.
 */
export function _encode_SegmentTerminator(
    value: SegmentTerminator,
    elGetter: $.ASN1Encoder<SegmentTerminator>
) {
    if (!_cached_encoder_for_SegmentTerminator) {
        _cached_encoder_for_SegmentTerminator = $._encodeOctetString;
    }
    return _cached_encoder_for_SegmentTerminator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SegmentTerminator */

/* eslint-enable */
