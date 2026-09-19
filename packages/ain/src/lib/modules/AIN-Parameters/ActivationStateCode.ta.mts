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



/**
 * @summary ActivationStateCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivationStateCode  ::=  ENUMERATED{
 *         off(0),
 *         on(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivationStateCode {
    off = 0,
    on = 1,
}

/**
 * @summary ActivationStateCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivationStateCode  ::=  ENUMERATED{
 *         off(0),
 *         on(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ActivationStateCode = _enum_for_ActivationStateCode;

/**
 * @summary ActivationStateCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivationStateCode  ::=  ENUMERATED{
 *         off(0),
 *         on(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const ActivationStateCode = _enum_for_ActivationStateCode;

/**
 * @summary ActivationStateCode_off
 * @constant
 * @type {number}
 */
export
const ActivationStateCode_off: ActivationStateCode = ActivationStateCode.off; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off
 * @constant
 * @type {number}
 */
export
const off: ActivationStateCode = ActivationStateCode.off; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivationStateCode_on
 * @constant
 * @type {number}
 */
export
const ActivationStateCode_on: ActivationStateCode = ActivationStateCode.on; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on
 * @constant
 * @type {number}
 */
export
const on: ActivationStateCode = ActivationStateCode.on; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ActivationStateCode: $.ASN1Decoder<ActivationStateCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivationStateCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivationStateCode (el: _Element): ActivationStateCode {
    if (!_cached_decoder_for_ActivationStateCode) { _cached_decoder_for_ActivationStateCode = $._decodeEnumerated; }
    return _cached_decoder_for_ActivationStateCode(el);
}

let _cached_encoder_for_ActivationStateCode: $.ASN1Encoder<ActivationStateCode> | null = null;

/**
 * @summary Encodes a(n) ActivationStateCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivationStateCode, encoded as an ASN.1 Element.
 */
export
function _encode_ActivationStateCode (value: ActivationStateCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivationStateCode) { _cached_encoder_for_ActivationStateCode = $._encodeEnumerated; }
    return _cached_encoder_for_ActivationStateCode(value, elGetter);
}


/* eslint-enable */
