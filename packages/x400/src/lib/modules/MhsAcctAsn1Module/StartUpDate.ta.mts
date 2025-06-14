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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/* START_OF_SYMBOL_DEFINITION StartUpDate */
/**
 * @summary StartUpDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StartUpDate  ::=  Time
 * ```
 */
export type StartUpDate = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION StartUpDate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StartUpDate */
let _cached_decoder_for_StartUpDate: $.ASN1Decoder<StartUpDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StartUpDate */

/* START_OF_SYMBOL_DEFINITION _decode_StartUpDate */
/**
 * @summary Decodes an ASN.1 element into a(n) StartUpDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StartUpDate} The decoded data structure.
 */
export function _decode_StartUpDate(el: _Element) {
    if (!_cached_decoder_for_StartUpDate) {
        _cached_decoder_for_StartUpDate = _decode_Time;
    }
    return _cached_decoder_for_StartUpDate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StartUpDate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StartUpDate */
let _cached_encoder_for_StartUpDate: $.ASN1Encoder<StartUpDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StartUpDate */

/* START_OF_SYMBOL_DEFINITION _encode_StartUpDate */
/**
 * @summary Encodes a(n) StartUpDate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartUpDate, encoded as an ASN.1 Element.
 */
export function _encode_StartUpDate(
    value: StartUpDate,
    elGetter: $.ASN1Encoder<StartUpDate>
) {
    if (!_cached_encoder_for_StartUpDate) {
        _cached_encoder_for_StartUpDate = _encode_Time;
    }
    return _cached_encoder_for_StartUpDate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StartUpDate */

/* eslint-enable */
