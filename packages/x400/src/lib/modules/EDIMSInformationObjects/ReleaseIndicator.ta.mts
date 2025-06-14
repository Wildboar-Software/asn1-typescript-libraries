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

/* START_OF_SYMBOL_DEFINITION ReleaseIndicator */
/**
 * @summary ReleaseIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseIndicator  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type ReleaseIndicator = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseIndicator */
let _cached_decoder_for_ReleaseIndicator: $.ASN1Decoder<ReleaseIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_ReleaseIndicator */
/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseIndicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseIndicator} The decoded data structure.
 */
export function _decode_ReleaseIndicator(el: _Element) {
    if (!_cached_decoder_for_ReleaseIndicator) {
        _cached_decoder_for_ReleaseIndicator = $._decodeOctetString;
    }
    return _cached_decoder_for_ReleaseIndicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseIndicator */
let _cached_encoder_for_ReleaseIndicator: $.ASN1Encoder<ReleaseIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_ReleaseIndicator */
/**
 * @summary Encodes a(n) ReleaseIndicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseIndicator, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseIndicator(
    value: ReleaseIndicator,
    elGetter: $.ASN1Encoder<ReleaseIndicator>
) {
    if (!_cached_encoder_for_ReleaseIndicator) {
        _cached_encoder_for_ReleaseIndicator = $._encodeOctetString;
    }
    return _cached_encoder_for_ReleaseIndicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReleaseIndicator */

/* eslint-enable */
