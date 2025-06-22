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
import * as $ from "@wildboar/asn1/functional";
import { GaugeThreshold_Item, _decode_GaugeThreshold_Item, _encode_GaugeThreshold_Item } from "../Attribute-ASN1Module/GaugeThreshold-Item.ta.mjs";
/**
 * @summary GaugeThreshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeThreshold  ::= 
 *   SET OF SEQUENCE {notifyLow   NotifyThreshold,
 *                    notifyHigh  NotifyThreshold}
 * ```
 */
export
type GaugeThreshold = GaugeThreshold_Item[]; // SetOfType

let _cached_decoder_for_GaugeThreshold: $.ASN1Decoder<GaugeThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GaugeThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GaugeThreshold} The decoded data structure.
 */
export
function _decode_GaugeThreshold (el: _Element) {
    if (!_cached_decoder_for_GaugeThreshold) { _cached_decoder_for_GaugeThreshold = $._decodeSetOf<GaugeThreshold_Item>(() => _decode_GaugeThreshold_Item); }
    return _cached_decoder_for_GaugeThreshold(el);
}

let _cached_encoder_for_GaugeThreshold: $.ASN1Encoder<GaugeThreshold> | null = null;

/**
 * @summary Encodes a(n) GaugeThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeThreshold (value: GaugeThreshold, elGetter: $.ASN1Encoder<GaugeThreshold>) {
    if (!_cached_encoder_for_GaugeThreshold) { _cached_encoder_for_GaugeThreshold = $._encodeSetOf<GaugeThreshold_Item>(() => _encode_GaugeThreshold_Item, $.BER); }
    return _cached_encoder_for_GaugeThreshold(value, elGetter);
}


/* eslint-enable */
