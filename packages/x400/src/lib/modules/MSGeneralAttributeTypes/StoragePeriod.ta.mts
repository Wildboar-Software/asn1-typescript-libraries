/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION StoragePeriod */
/**
 * @summary StoragePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StoragePeriod  ::=  INTEGER
 * ```
 */
export type StoragePeriod = INTEGER;
/* END_OF_SYMBOL_DEFINITION StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StoragePeriod */
let _cached_decoder_for_StoragePeriod: $.ASN1Decoder<StoragePeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _decode_StoragePeriod */
/**
 * @summary Decodes an ASN.1 element into a(n) StoragePeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StoragePeriod} The decoded data structure.
 */
export function _decode_StoragePeriod(el: _Element) {
    if (!_cached_decoder_for_StoragePeriod) {
        _cached_decoder_for_StoragePeriod = $._decodeInteger;
    }
    return _cached_decoder_for_StoragePeriod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StoragePeriod */
let _cached_encoder_for_StoragePeriod: $.ASN1Encoder<StoragePeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _encode_StoragePeriod */
/**
 * @summary Encodes a(n) StoragePeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StoragePeriod, encoded as an ASN.1 Element.
 */
export function _encode_StoragePeriod(
    value: StoragePeriod,
    elGetter: $.ASN1Encoder<StoragePeriod>
) {
    if (!_cached_encoder_for_StoragePeriod) {
        _cached_encoder_for_StoragePeriod = $._encodeInteger;
    }
    return _cached_encoder_for_StoragePeriod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StoragePeriod */

/* eslint-enable */
