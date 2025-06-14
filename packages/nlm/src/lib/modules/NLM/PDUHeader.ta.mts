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

/* START_OF_SYMBOL_DEFINITION PDUHeader */
/**
 * @summary PDUHeader
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUHeader  ::=  OCTET STRING(SIZE (1..255))
 * ```
 */
export type PDUHeader = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION PDUHeader */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUHeader */
let _cached_decoder_for_PDUHeader: $.ASN1Decoder<PDUHeader> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUHeader */

/* START_OF_SYMBOL_DEFINITION _decode_PDUHeader */
/**
 * @summary Decodes an ASN.1 element into a(n) PDUHeader
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUHeader} The decoded data structure.
 */
export function _decode_PDUHeader(el: _Element) {
    if (!_cached_decoder_for_PDUHeader) {
        _cached_decoder_for_PDUHeader = $._decodeOctetString;
    }
    return _cached_decoder_for_PDUHeader(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PDUHeader */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUHeader */
let _cached_encoder_for_PDUHeader: $.ASN1Encoder<PDUHeader> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUHeader */

/* START_OF_SYMBOL_DEFINITION _encode_PDUHeader */
/**
 * @summary Encodes a(n) PDUHeader into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUHeader, encoded as an ASN.1 Element.
 */
export function _encode_PDUHeader(
    value: PDUHeader,
    elGetter: $.ASN1Encoder<PDUHeader>
) {
    if (!_cached_encoder_for_PDUHeader) {
        _cached_encoder_for_PDUHeader = $._encodeOctetString;
    }
    return _cached_encoder_for_PDUHeader(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PDUHeader */

/* eslint-enable */
