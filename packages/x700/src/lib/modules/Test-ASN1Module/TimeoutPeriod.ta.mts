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
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TimeoutPeriod */
/**
 * @summary TimeoutPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeoutPeriod  ::=  Timespec
 * ```
 */
export type TimeoutPeriod = Timespec; // DefinedType
/* END_OF_SYMBOL_DEFINITION TimeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeoutPeriod */
let _cached_decoder_for_TimeoutPeriod: $.ASN1Decoder<TimeoutPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _decode_TimeoutPeriod */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeoutPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeoutPeriod} The decoded data structure.
 */
export function _decode_TimeoutPeriod(el: _Element) {
    if (!_cached_decoder_for_TimeoutPeriod) {
        _cached_decoder_for_TimeoutPeriod = _decode_Timespec;
    }
    return _cached_decoder_for_TimeoutPeriod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeoutPeriod */
let _cached_encoder_for_TimeoutPeriod: $.ASN1Encoder<TimeoutPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeoutPeriod */

/* START_OF_SYMBOL_DEFINITION _encode_TimeoutPeriod */
/**
 * @summary Encodes a(n) TimeoutPeriod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeoutPeriod, encoded as an ASN.1 Element.
 */
export function _encode_TimeoutPeriod(
    value: TimeoutPeriod,
    elGetter: $.ASN1Encoder<TimeoutPeriod>
) {
    if (!_cached_encoder_for_TimeoutPeriod) {
        _cached_encoder_for_TimeoutPeriod = _encode_Timespec;
    }
    return _cached_encoder_for_TimeoutPeriod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeoutPeriod */

/* eslint-enable */
