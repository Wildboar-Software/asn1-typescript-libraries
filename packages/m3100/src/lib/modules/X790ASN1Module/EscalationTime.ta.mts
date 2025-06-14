/* eslint-disable */
import {
    GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION EscalationTime */
/**
 * @summary EscalationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EscalationTime  ::=  GeneralizedTime
 * ```
 */
export type EscalationTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION EscalationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EscalationTime */
let _cached_decoder_for_EscalationTime: $.ASN1Decoder<EscalationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EscalationTime */

/* START_OF_SYMBOL_DEFINITION _decode_EscalationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) EscalationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EscalationTime} The decoded data structure.
 */
export function _decode_EscalationTime(el: _Element) {
    if (!_cached_decoder_for_EscalationTime) {
        _cached_decoder_for_EscalationTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_EscalationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EscalationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EscalationTime */
let _cached_encoder_for_EscalationTime: $.ASN1Encoder<EscalationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EscalationTime */

/* START_OF_SYMBOL_DEFINITION _encode_EscalationTime */
/**
 * @summary Encodes a(n) EscalationTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscalationTime, encoded as an ASN.1 Element.
 */
export function _encode_EscalationTime(
    value: EscalationTime,
    elGetter: $.ASN1Encoder<EscalationTime>
) {
    if (!_cached_encoder_for_EscalationTime) {
        _cached_encoder_for_EscalationTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_EscalationTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EscalationTime */

/* eslint-enable */
