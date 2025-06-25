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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SeverityIndicatingGaugeThreshold_Item,
    _decode_SeverityIndicatingGaugeThreshold_Item,
    _encode_SeverityIndicatingGaugeThreshold_Item,
} from '../MetricModule/SeverityIndicatingGaugeThreshold-Item.ta.mjs';
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

let _cached_decoder_for_SeverityIndicatingGaugeThreshold: $.ASN1Decoder<SeverityIndicatingGaugeThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SeverityIndicatingGaugeThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SeverityIndicatingGaugeThreshold} The decoded data structure.
 */
export function _decode_SeverityIndicatingGaugeThreshold(el: _Element): SeverityIndicatingGaugeThreshold {
    if (!_cached_decoder_for_SeverityIndicatingGaugeThreshold) {
        _cached_decoder_for_SeverityIndicatingGaugeThreshold = $._decodeSetOf<SeverityIndicatingGaugeThreshold_Item>(
            () => _decode_SeverityIndicatingGaugeThreshold_Item
        );
    }
    return _cached_decoder_for_SeverityIndicatingGaugeThreshold(el);
}

let _cached_encoder_for_SeverityIndicatingGaugeThreshold: $.ASN1Encoder<SeverityIndicatingGaugeThreshold> | null = null;

/**
 * @summary Encodes a(n) SeverityIndicatingGaugeThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SeverityIndicatingGaugeThreshold, encoded as an ASN.1 Element.
 */
export function _encode_SeverityIndicatingGaugeThreshold(
    value: SeverityIndicatingGaugeThreshold,
    elGetter: $.ASN1Encoder<SeverityIndicatingGaugeThreshold>
): _Element {
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


/* eslint-enable */
