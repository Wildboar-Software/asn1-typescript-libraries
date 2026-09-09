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
import { CauseValue, _decode_CauseValue, _encode_CauseValue } from "../MAP-MS-DataTypes/CauseValue.ta.mjs";
// export { CauseValue, _decode_CauseValue, _encode_CauseValue } from "../MAP-MS-DataTypes/CauseValue.ta.mjs";


/**
 * @summary T_CauseValueCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-CauseValueCriteria    ::=  SEQUENCE SIZE(1..maxNumOfCAMEL-T-CauseValueCriteria) OF
 *     CauseValue
 * ```
 */
export
type T_CauseValueCriteria = CauseValue[]; // SequenceOfType

let _cached_decoder_for_T_CauseValueCriteria: $.ASN1Decoder<T_CauseValueCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_CauseValueCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_CauseValueCriteria (el: _Element): T_CauseValueCriteria {
    if (!_cached_decoder_for_T_CauseValueCriteria) { _cached_decoder_for_T_CauseValueCriteria = $._decodeSequenceOf<CauseValue>(() => _decode_CauseValue); }
    return _cached_decoder_for_T_CauseValueCriteria(el);
}

let _cached_encoder_for_T_CauseValueCriteria: $.ASN1Encoder<T_CauseValueCriteria> | null = null;

/**
 * @summary Encodes a(n) T_CauseValueCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_CauseValueCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_T_CauseValueCriteria (value: T_CauseValueCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_CauseValueCriteria) { _cached_encoder_for_T_CauseValueCriteria = $._encodeSequenceOf<CauseValue>(() => _encode_CauseValue, $.BER); }
    return _cached_encoder_for_T_CauseValueCriteria(value, elGetter);
}


/* eslint-enable */
