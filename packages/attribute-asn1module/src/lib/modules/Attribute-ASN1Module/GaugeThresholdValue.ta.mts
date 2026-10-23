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
import { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";
/**
 * @summary GaugeThresholdValue
 * @description
 * 
 * Alias of `ObservedValue` for a gauge-threshold level. ITU-T Rec. X.721
 * (02/92) §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeThresholdValue  ::=  ObservedValue
 * ```
 */
export
type GaugeThresholdValue = ObservedValue; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GaugeThresholdValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GaugeThresholdValue} The decoded data structure.
 */
export const _decode_GaugeThresholdValue: $.ASN1Decoder<GaugeThresholdValue> = _decode_ObservedValue;

/**
 * @summary Encodes a(n) GaugeThresholdValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeThresholdValue, encoded as an ASN.1 Element.
 */
export const _encode_GaugeThresholdValue: $.ASN1Encoder<GaugeThresholdValue> = _encode_ObservedValue;


/* eslint-enable */
