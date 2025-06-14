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
    SeverityIndicatingGaugeThreshold_Item,
    _decode_SeverityIndicatingGaugeThreshold_Item,
    _encode_SeverityIndicatingGaugeThreshold_Item,
} from '../MetricModule/SeverityIndicatingGaugeThreshold-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SeverityIndicatingGaugeThreshold */
/**
 * @summary SeverityIndicatingGaugeThreshold
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SeverityIndicatingGaugeThreshold  ::=
 *   SET OF
 *     SEQUENCE {notifyLow   SeverityIndicatingThreshold,
 *               notifyHigh  SeverityIndicatingThreshold}
 * ```
 */
export type SeverityIndicatingGaugeThreshold = SeverityIndicatingGaugeThreshold_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SeverityIndicatingGaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SeverityIndicatingGaugeThreshold */
let _cached_decoder_for_SeverityIndicatingGaugeThreshold: $.ASN1Decoder<SeverityIndicatingGaugeThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SeverityIndicatingGaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _decode_SeverityIndicatingGaugeThreshold */
/**
 * @summary Decodes an ASN.1 element into a(n) SeverityIndicatingGaugeThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SeverityIndicatingGaugeThreshold} The decoded data structure.
 */
export function _decode_SeverityIndicatingGaugeThreshold(el: _Element) {
    if (!_cached_decoder_for_SeverityIndicatingGaugeThreshold) {
        _cached_decoder_for_SeverityIndicatingGaugeThreshold = $._decodeSetOf<SeverityIndicatingGaugeThreshold_Item>(
            () => _decode_SeverityIndicatingGaugeThreshold_Item
        );
    }
    return _cached_decoder_for_SeverityIndicatingGaugeThreshold(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SeverityIndicatingGaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SeverityIndicatingGaugeThreshold */
let _cached_encoder_for_SeverityIndicatingGaugeThreshold: $.ASN1Encoder<SeverityIndicatingGaugeThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SeverityIndicatingGaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _encode_SeverityIndicatingGaugeThreshold */
/**
 * @summary Encodes a(n) SeverityIndicatingGaugeThreshold into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SeverityIndicatingGaugeThreshold, encoded as an ASN.1 Element.
 */
export function _encode_SeverityIndicatingGaugeThreshold(
    value: SeverityIndicatingGaugeThreshold,
    elGetter: $.ASN1Encoder<SeverityIndicatingGaugeThreshold>
) {
    if (!_cached_encoder_for_SeverityIndicatingGaugeThreshold) {
        _cached_encoder_for_SeverityIndicatingGaugeThreshold = $._encodeSetOf<SeverityIndicatingGaugeThreshold_Item>(
            () => _encode_SeverityIndicatingGaugeThreshold_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SeverityIndicatingGaugeThreshold(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SeverityIndicatingGaugeThreshold */

/* eslint-enable */
