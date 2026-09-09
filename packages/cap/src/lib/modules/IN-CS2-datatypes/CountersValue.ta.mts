/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { CounterAndValue, _decode_CounterAndValue, _encode_CounterAndValue } from "../IN-CS2-datatypes/CounterAndValue.ta.mjs";
// export { CounterAndValue, _decode_CounterAndValue, _encode_CounterAndValue } from "../IN-CS2-datatypes/CounterAndValue.ta.mjs";


/**
 * @summary CountersValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountersValue  ::=  SEQUENCE SIZE (0..numOfCounters) OF CounterAndValue
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
    return _cached_decoder_for_CountersValue(el);
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
