/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION AlarmEffectOnServiceParameter */
/**
 * @summary AlarmEffectOnServiceParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmEffectOnServiceParameter  ::=  BOOLEAN
 * ```
 */
export type AlarmEffectOnServiceParameter = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmEffectOnServiceParameter */
let _cached_decoder_for_AlarmEffectOnServiceParameter: $.ASN1Decoder<AlarmEffectOnServiceParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmEffectOnServiceParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmEffectOnServiceParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmEffectOnServiceParameter} The decoded data structure.
 */
export function _decode_AlarmEffectOnServiceParameter(el: _Element) {
    if (!_cached_decoder_for_AlarmEffectOnServiceParameter) {
        _cached_decoder_for_AlarmEffectOnServiceParameter = $._decodeBoolean;
    }
    return _cached_decoder_for_AlarmEffectOnServiceParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmEffectOnServiceParameter */
let _cached_encoder_for_AlarmEffectOnServiceParameter: $.ASN1Encoder<AlarmEffectOnServiceParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmEffectOnServiceParameter */
/**
 * @summary Encodes a(n) AlarmEffectOnServiceParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmEffectOnServiceParameter, encoded as an ASN.1 Element.
 */
export function _encode_AlarmEffectOnServiceParameter(
    value: AlarmEffectOnServiceParameter,
    elGetter: $.ASN1Encoder<AlarmEffectOnServiceParameter>
) {
    if (!_cached_encoder_for_AlarmEffectOnServiceParameter) {
        _cached_encoder_for_AlarmEffectOnServiceParameter = $._encodeBoolean;
    }
    return _cached_encoder_for_AlarmEffectOnServiceParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmEffectOnServiceParameter */

/* eslint-enable */
