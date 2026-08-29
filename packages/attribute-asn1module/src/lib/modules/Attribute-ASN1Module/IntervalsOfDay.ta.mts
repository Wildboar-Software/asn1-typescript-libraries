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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntervalsOfDay_Item, _decode_IntervalsOfDay_Item, _encode_IntervalsOfDay_Item } from "../Attribute-ASN1Module/IntervalsOfDay-Item.ta.mjs";
/**
 * @summary IntervalsOfDay
 * @description
 * 
 * Set of daily time windows. Used by daily and weekly scheduling. Default is
 * 00:00–23:59. `{smi2AttributeID 57}`. ITU-T Rec. X.721 (02/92) §8.8,
 * §10.7.4.9; ITU-T Rec. X.734 | ISO/IEC 10164-5; ITU-T Rec. X.735 | ISO/IEC
 * 10164-6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntervalsOfDay  ::= 
 *   SET OF
 *     SEQUENCE {intervalStart  Time24, -- start at the beginning of this minute
 *               intervalEnd    Time24}
 * ```
 */
export
type IntervalsOfDay = IntervalsOfDay_Item[]; // SetOfType

let _cached_decoder_for_IntervalsOfDay: $.ASN1Decoder<IntervalsOfDay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntervalsOfDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntervalsOfDay} The decoded data structure.
 */
export
function _decode_IntervalsOfDay (el: _Element): IntervalsOfDay {
    if (!_cached_decoder_for_IntervalsOfDay) { _cached_decoder_for_IntervalsOfDay = $._decodeSetOf<IntervalsOfDay_Item>(() => _decode_IntervalsOfDay_Item); }
    return _cached_decoder_for_IntervalsOfDay(el);
}

let _cached_encoder_for_IntervalsOfDay: $.ASN1Encoder<IntervalsOfDay> | null = null;

/**
 * @summary Encodes a(n) IntervalsOfDay into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalsOfDay, encoded as an ASN.1 Element.
 */
export
function _encode_IntervalsOfDay (value: IntervalsOfDay, elGetter: $.ASN1Encoder<IntervalsOfDay>): _Element {
    if (!_cached_encoder_for_IntervalsOfDay) { _cached_encoder_for_IntervalsOfDay = $._encodeSetOf<IntervalsOfDay_Item>(() => _encode_IntervalsOfDay_Item, $.BER); }
    return _cached_encoder_for_IntervalsOfDay(value, elGetter);
}


/* eslint-enable */
