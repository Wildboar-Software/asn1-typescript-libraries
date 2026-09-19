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



export
enum _enum_for_SignalType {
    brief = 0,
    onOff = 1,
    timeOut = 2,
}

/**
 * @summary SignalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalType  ::=  ENUMERATED
 *     {
 *         brief(0),
 *         onOff(1),
 *         timeOut(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SignalType = _enum_for_SignalType | ENUMERATED;

/**
 * @summary SignalType_brief
 * @constant
 * @type {number}
 */
export
const SignalType_brief: SignalType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary brief
 * @constant
 * @type {number}
 */
export
const brief: SignalType = SignalType_brief; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalType_onOff
 * @constant
 * @type {number}
 */
export
const SignalType_onOff: SignalType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onOff
 * @constant
 * @type {number}
 */
export
const onOff: SignalType = SignalType_onOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalType_timeOut
 * @constant
 * @type {number}
 */
export
const SignalType_timeOut: SignalType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOut
 * @constant
 * @type {number}
 */
export
const timeOut: SignalType = SignalType_timeOut; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SignalType: $.ASN1Decoder<SignalType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignalType (el: _Element): SignalType {
    if (!_cached_decoder_for_SignalType) { _cached_decoder_for_SignalType = $._decodeEnumerated; }
    return _cached_decoder_for_SignalType(el);
}

let _cached_encoder_for_SignalType: $.ASN1Encoder<SignalType> | null = null;

/**
 * @summary Encodes a(n) SignalType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalType, encoded as an ASN.1 Element.
 */
export
function _encode_SignalType (value: SignalType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignalType) { _cached_encoder_for_SignalType = $._encodeEnumerated; }
    return _cached_encoder_for_SignalType(value, elGetter);
}


/* eslint-enable */
