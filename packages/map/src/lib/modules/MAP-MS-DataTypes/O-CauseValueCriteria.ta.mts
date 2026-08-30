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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CauseValue, _decode_CauseValue, _encode_CauseValue } from "../MAP-MS-DataTypes/CauseValue.ta.mjs";


import { maxNumOfCAMEL_O_CauseValueCriteria } from "./maxNumOfCAMEL-O-CauseValueCriteria.va.mjs";

/**
 * @summary O_CauseValueCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-CauseValueCriteria    ::=  SEQUENCE SIZE(1..maxNumOfCAMEL-O-CauseValueCriteria) OF
 *     CauseValue
 * ```
 */
export
type O_CauseValueCriteria = CauseValue[]; // SequenceOfType

let _cached_decoder_for_O_CauseValueCriteria: $.ASN1Decoder<O_CauseValueCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) O_CauseValueCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_O_CauseValueCriteria (el: _Element): O_CauseValueCriteria {
    if (!_cached_decoder_for_O_CauseValueCriteria) { _cached_decoder_for_O_CauseValueCriteria = $._decodeSequenceOf<CauseValue>(() => _decode_CauseValue); }
    const value = _cached_decoder_for_O_CauseValueCriteria(el);
    if (value.length < 1 || value.length > maxNumOfCAMEL_O_CauseValueCriteria) {
        throw new ASN1SizeError("O_CauseValueCriteria violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_O_CauseValueCriteria: $.ASN1Encoder<O_CauseValueCriteria> | null = null;

/**
 * @summary Encodes a(n) O_CauseValueCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_CauseValueCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_O_CauseValueCriteria (value: O_CauseValueCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_O_CauseValueCriteria) { _cached_encoder_for_O_CauseValueCriteria = $._encodeSequenceOf<CauseValue>(() => _encode_CauseValue, $.BER); }
    return _cached_encoder_for_O_CauseValueCriteria(value, elGetter);
}


/* eslint-enable */
