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
 * @summary UDMCancelLocationMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMCancelLocationMethod  ::=  ENUMERATED
 * {
 *     aMF3GPPAccessDeregistration(1),
 *     aMFNon3GPPAccessDeregistration(2),
 *     uDMDeregistration(3),
 *     unknown(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMCancelLocationMethod {
    aMF3GPPAccessDeregistration = 1,
    aMFNon3GPPAccessDeregistration = 2,
    uDMDeregistration = 3,
    unknown = 4,
}

/**
 * @summary UDMCancelLocationMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMCancelLocationMethod  ::=  ENUMERATED
 * {
 *     aMF3GPPAccessDeregistration(1),
 *     aMFNon3GPPAccessDeregistration(2),
 *     uDMDeregistration(3),
 *     unknown(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMCancelLocationMethod = _enum_for_UDMCancelLocationMethod;

/**
 * @summary UDMCancelLocationMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMCancelLocationMethod  ::=  ENUMERATED
 * {
 *     aMF3GPPAccessDeregistration(1),
 *     aMFNon3GPPAccessDeregistration(2),
 *     uDMDeregistration(3),
 *     unknown(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMCancelLocationMethod = _enum_for_UDMCancelLocationMethod;

/**
 * @summary UDMCancelLocationMethod_aMF3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_aMF3GPPAccessDeregistration: UDMCancelLocationMethod = UDMCancelLocationMethod.aMF3GPPAccessDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aMF3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const aMF3GPPAccessDeregistration: UDMCancelLocationMethod = UDMCancelLocationMethod.aMF3GPPAccessDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMCancelLocationMethod_aMFNon3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_aMFNon3GPPAccessDeregistration: UDMCancelLocationMethod = UDMCancelLocationMethod.aMFNon3GPPAccessDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aMFNon3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const aMFNon3GPPAccessDeregistration: UDMCancelLocationMethod = UDMCancelLocationMethod.aMFNon3GPPAccessDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMCancelLocationMethod_uDMDeregistration
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_uDMDeregistration: UDMCancelLocationMethod = UDMCancelLocationMethod.uDMDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDMDeregistration
 * @constant
 * @type {number}
 */
export
const uDMDeregistration: UDMCancelLocationMethod = UDMCancelLocationMethod.uDMDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMCancelLocationMethod_unknown
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_unknown: UDMCancelLocationMethod = UDMCancelLocationMethod.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: UDMCancelLocationMethod = UDMCancelLocationMethod.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UDMCancelLocationMethod: $.ASN1Decoder<UDMCancelLocationMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMCancelLocationMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMCancelLocationMethod (el: _Element): UDMCancelLocationMethod {
    if (!_cached_decoder_for_UDMCancelLocationMethod) { _cached_decoder_for_UDMCancelLocationMethod = $._decodeEnumerated; }
    return _cached_decoder_for_UDMCancelLocationMethod(el);
}

let _cached_encoder_for_UDMCancelLocationMethod: $.ASN1Encoder<UDMCancelLocationMethod> | null = null;

/**
 * @summary Encodes a(n) UDMCancelLocationMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMCancelLocationMethod, encoded as an ASN.1 Element.
 */
export
function _encode_UDMCancelLocationMethod (value: UDMCancelLocationMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMCancelLocationMethod) { _cached_encoder_for_UDMCancelLocationMethod = $._encodeEnumerated; }
    return _cached_encoder_for_UDMCancelLocationMethod(value, elGetter);
}


/* eslint-enable */
