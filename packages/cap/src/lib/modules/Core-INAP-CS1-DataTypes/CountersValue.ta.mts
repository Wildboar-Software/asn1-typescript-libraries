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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CounterAndValue, _decode_CounterAndValue, _encode_CounterAndValue } from "../Core-INAP-CS1-DataTypes/CounterAndValue.ta.mjs";
// export { CounterAndValue, _decode_CounterAndValue, _encode_CounterAndValue } from "../Core-INAP-CS1-DataTypes/CounterAndValue.ta.mjs";


/**
 * @summary CountersValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountersValue           ::=  SEQUENCE SIZE(0..numOfCounters) OF CounterAndValue
 * ```
 */
export
type CountersValue = CounterAndValue[]; // SequenceOfType

let _cached_decoder_for_CountersValue: $.ASN1Decoder<CountersValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CountersValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CountersValue (el: _Element): CountersValue {
    if (!_cached_decoder_for_CountersValue) { _cached_decoder_for_CountersValue = $._decodeSequenceOf<CounterAndValue>(() => _decode_CounterAndValue); }
    const value = _cached_decoder_for_CountersValue(el);
    if (value.length > 100) {
        throw new ASN1SizeError("CountersValue violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CountersValue: $.ASN1Encoder<CountersValue> | null = null;

/**
 * @summary Encodes a(n) CountersValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountersValue, encoded as an ASN.1 Element.
 */
export
function _encode_CountersValue (value: CountersValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CountersValue) { _cached_encoder_for_CountersValue = $._encodeSequenceOf<CounterAndValue>(() => _encode_CounterAndValue, $.BER); }
    return _cached_encoder_for_CountersValue(value, elGetter);
}


/* eslint-enable */
