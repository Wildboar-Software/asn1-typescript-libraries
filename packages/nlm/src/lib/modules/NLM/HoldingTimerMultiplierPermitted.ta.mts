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

/* START_OF_SYMBOL_DEFINITION HoldingTimerMultiplierPermitted */
/**
 * @summary HoldingTimerMultiplierPermitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldingTimerMultiplierPermitted  ::=  INTEGER(2..63)
 * ```
 */
export type HoldingTimerMultiplierPermitted = INTEGER;
/* END_OF_SYMBOL_DEFINITION HoldingTimerMultiplierPermitted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldingTimerMultiplierPermitted */
let _cached_decoder_for_HoldingTimerMultiplierPermitted: $.ASN1Decoder<HoldingTimerMultiplierPermitted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldingTimerMultiplierPermitted */

/* START_OF_SYMBOL_DEFINITION _decode_HoldingTimerMultiplierPermitted */
/**
 * @summary Decodes an ASN.1 element into a(n) HoldingTimerMultiplierPermitted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HoldingTimerMultiplierPermitted} The decoded data structure.
 */
export function _decode_HoldingTimerMultiplierPermitted(el: _Element) {
    if (!_cached_decoder_for_HoldingTimerMultiplierPermitted) {
        _cached_decoder_for_HoldingTimerMultiplierPermitted = $._decodeInteger;
    }
    return _cached_decoder_for_HoldingTimerMultiplierPermitted(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HoldingTimerMultiplierPermitted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldingTimerMultiplierPermitted */
let _cached_encoder_for_HoldingTimerMultiplierPermitted: $.ASN1Encoder<HoldingTimerMultiplierPermitted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldingTimerMultiplierPermitted */

/* START_OF_SYMBOL_DEFINITION _encode_HoldingTimerMultiplierPermitted */
/**
 * @summary Encodes a(n) HoldingTimerMultiplierPermitted into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldingTimerMultiplierPermitted, encoded as an ASN.1 Element.
 */
export function _encode_HoldingTimerMultiplierPermitted(
    value: HoldingTimerMultiplierPermitted,
    elGetter: $.ASN1Encoder<HoldingTimerMultiplierPermitted>
) {
    if (!_cached_encoder_for_HoldingTimerMultiplierPermitted) {
        _cached_encoder_for_HoldingTimerMultiplierPermitted = $._encodeInteger;
    }
    return _cached_encoder_for_HoldingTimerMultiplierPermitted(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HoldingTimerMultiplierPermitted */

/* eslint-enable */
