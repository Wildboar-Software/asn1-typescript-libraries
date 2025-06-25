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
    ReportingTriggers_Item,
    _decode_ReportingTriggers_Item,
    _encode_ReportingTriggers_Item,
} from '../UsageMeteringFunction/ReportingTriggers-Item.ta.mjs';
/**
 * @summary ReportingTriggers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingTriggers  ::=
 *   SET OF
 *     CHOICE {periodic  [1]  TimePeriod,
 *             induced   [2]  Induced,
 *             event     [3]  ReportingEvent,
 *             stimulus  [4]  OBJECT IDENTIFIER}
 * ```
 */
export type ReportingTriggers = ReportingTriggers_Item[]; // SetOfType

let _cached_decoder_for_ReportingTriggers: $.ASN1Decoder<ReportingTriggers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingTriggers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingTriggers} The decoded data structure.
 */
export function _decode_ReportingTriggers(el: _Element): ReportingTriggers {
    if (!_cached_decoder_for_ReportingTriggers) {
        _cached_decoder_for_ReportingTriggers = $._decodeSetOf<ReportingTriggers_Item>(
            () => _decode_ReportingTriggers_Item
        );
    }
    return _cached_decoder_for_ReportingTriggers(el);
}

let _cached_encoder_for_ReportingTriggers: $.ASN1Encoder<ReportingTriggers> | null = null;

/**
 * @summary Encodes a(n) ReportingTriggers into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingTriggers, encoded as an ASN.1 Element.
 */
export function _encode_ReportingTriggers(
    value: ReportingTriggers,
    elGetter: $.ASN1Encoder<ReportingTriggers>
): _Element {
    if (!_cached_encoder_for_ReportingTriggers) {
        _cached_encoder_for_ReportingTriggers = $._encodeSetOf<ReportingTriggers_Item>(
            () => _encode_ReportingTriggers_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ReportingTriggers(value, elGetter);
}


/* eslint-enable */
