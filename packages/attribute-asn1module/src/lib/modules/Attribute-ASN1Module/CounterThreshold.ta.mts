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
import { CounterThreshold_Item, _decode_CounterThreshold_Item, _encode_CounterThreshold_Item } from "../Attribute-ASN1Module/CounterThreshold-Item.ta.mjs";
/**
 * @summary CounterThreshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterThreshold  ::= 
 *   SET OF
 *     SEQUENCE {comparisonLevel    INTEGER,
 *               offsetValue        INTEGER,
 *               notificationOnOff  BOOLEAN}
 * ```
 */
export
type CounterThreshold = CounterThreshold_Item[]; // SetOfType

let _cached_decoder_for_CounterThreshold: $.ASN1Decoder<CounterThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CounterThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CounterThreshold} The decoded data structure.
 */
export
function _decode_CounterThreshold (el: _Element): CounterThreshold {
    if (!_cached_decoder_for_CounterThreshold) { _cached_decoder_for_CounterThreshold = $._decodeSetOf<CounterThreshold_Item>(() => _decode_CounterThreshold_Item); }
    return _cached_decoder_for_CounterThreshold(el);
}

let _cached_encoder_for_CounterThreshold: $.ASN1Encoder<CounterThreshold> | null = null;

/**
 * @summary Encodes a(n) CounterThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CounterThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_CounterThreshold (value: CounterThreshold, elGetter: $.ASN1Encoder<CounterThreshold>): _Element {
    if (!_cached_encoder_for_CounterThreshold) { _cached_encoder_for_CounterThreshold = $._encodeSetOf<CounterThreshold_Item>(() => _encode_CounterThreshold_Item, $.BER); }
    return _cached_encoder_for_CounterThreshold(value, elGetter);
}


/* eslint-enable */
