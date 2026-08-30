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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";


/**
 * @summary SS_EventSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-EventSpecification  ::=  SEQUENCE SIZE (1..maxEventSpecification) OF
 *     AddressString
 * ```
 */
export
type SS_EventSpecification = AddressString[]; // SequenceOfType

let _cached_decoder_for_SS_EventSpecification: $.ASN1Decoder<SS_EventSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_EventSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_EventSpecification (el: _Element): SS_EventSpecification {
    if (!_cached_decoder_for_SS_EventSpecification) { _cached_decoder_for_SS_EventSpecification = $._decodeSequenceOf<AddressString>(() => _decode_AddressString); }
    return _cached_decoder_for_SS_EventSpecification(el);
}

let _cached_encoder_for_SS_EventSpecification: $.ASN1Encoder<SS_EventSpecification> | null = null;

/**
 * @summary Encodes a(n) SS_EventSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_EventSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_SS_EventSpecification (value: SS_EventSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_EventSpecification) { _cached_encoder_for_SS_EventSpecification = $._encodeSequenceOf<AddressString>(() => _encode_AddressString, $.BER); }
    return _cached_encoder_for_SS_EventSpecification(value, elGetter);
}


/* eslint-enable */
