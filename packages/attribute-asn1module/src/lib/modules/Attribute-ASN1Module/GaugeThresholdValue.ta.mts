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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";
/**
 * @summary GaugeThresholdValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeThresholdValue  ::=  ObservedValue
 * ```
 */
export
type GaugeThresholdValue = ObservedValue; // DefinedType

let _cached_decoder_for_GaugeThresholdValue: $.ASN1Decoder<GaugeThresholdValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GaugeThresholdValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GaugeThresholdValue} The decoded data structure.
 */
export
function _decode_GaugeThresholdValue (el: _Element) {
    if (!_cached_decoder_for_GaugeThresholdValue) { _cached_decoder_for_GaugeThresholdValue = _decode_ObservedValue; }
    return _cached_decoder_for_GaugeThresholdValue(el);
}

let _cached_encoder_for_GaugeThresholdValue: $.ASN1Encoder<GaugeThresholdValue> | null = null;

/**
 * @summary Encodes a(n) GaugeThresholdValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeThresholdValue, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeThresholdValue (value: GaugeThresholdValue, elGetter: $.ASN1Encoder<GaugeThresholdValue>) {
    if (!_cached_encoder_for_GaugeThresholdValue) { _cached_encoder_for_GaugeThresholdValue = _encode_ObservedValue; }
    return _cached_encoder_for_GaugeThresholdValue(value, elGetter);
}


/* eslint-enable */
