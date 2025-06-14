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

/* START_OF_SYMBOL_DEFINITION NAddress */
/**
 * @summary NAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddress  ::=  OCTET STRING(SIZE (0..20))
 * ```
 */
export type NAddress = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION NAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddress */
let _cached_decoder_for_NAddress: $.ASN1Decoder<NAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddress */

/* START_OF_SYMBOL_DEFINITION _decode_NAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) NAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NAddress} The decoded data structure.
 */
export function _decode_NAddress(el: _Element) {
    if (!_cached_decoder_for_NAddress) {
        _cached_decoder_for_NAddress = $._decodeOctetString;
    }
    return _cached_decoder_for_NAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddress */
let _cached_encoder_for_NAddress: $.ASN1Encoder<NAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddress */

/* START_OF_SYMBOL_DEFINITION _encode_NAddress */
/**
 * @summary Encodes a(n) NAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NAddress, encoded as an ASN.1 Element.
 */
export function _encode_NAddress(
    value: NAddress,
    elGetter: $.ASN1Encoder<NAddress>
) {
    if (!_cached_encoder_for_NAddress) {
        _cached_encoder_for_NAddress = $._encodeOctetString;
    }
    return _cached_encoder_for_NAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NAddress */

/* eslint-enable */
