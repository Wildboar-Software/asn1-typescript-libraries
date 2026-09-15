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
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary TimerValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerValue  ::=  Integer4
 * ```
 */
export
type TimerValue = Integer4; // DefinedType

let _cached_decoder_for_TimerValue: $.ASN1Decoder<TimerValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimerValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimerValue (el: _Element): TimerValue {
    if (!_cached_decoder_for_TimerValue) { _cached_decoder_for_TimerValue = _decode_Integer4; }
    return _cached_decoder_for_TimerValue(el);
}

let _cached_encoder_for_TimerValue: $.ASN1Encoder<TimerValue> | null = null;

/**
 * @summary Encodes a(n) TimerValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimerValue, encoded as an ASN.1 Element.
 */
export
function _encode_TimerValue (value: TimerValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimerValue) { _cached_encoder_for_TimerValue = _encode_Integer4; }
    return _cached_encoder_for_TimerValue(value, elGetter);
}


/* eslint-enable */
