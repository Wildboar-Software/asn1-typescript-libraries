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
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCRegistrationOutcome {
    success = 1,
    failure = 2,
}

/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;

/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;

/**
 * @summary PTCRegistrationOutcome_success
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_success: PTCRegistrationOutcome = PTCRegistrationOutcome.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: PTCRegistrationOutcome = PTCRegistrationOutcome.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCRegistrationOutcome_failure
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_failure: PTCRegistrationOutcome = PTCRegistrationOutcome.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: PTCRegistrationOutcome = PTCRegistrationOutcome.failure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCRegistrationOutcome: $.ASN1Decoder<PTCRegistrationOutcome> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCRegistrationOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCRegistrationOutcome (el: _Element): PTCRegistrationOutcome {
    if (!_cached_decoder_for_PTCRegistrationOutcome) { _cached_decoder_for_PTCRegistrationOutcome = $._decodeEnumerated; }
    return _cached_decoder_for_PTCRegistrationOutcome(el);
}

let _cached_encoder_for_PTCRegistrationOutcome: $.ASN1Encoder<PTCRegistrationOutcome> | null = null;

/**
 * @summary Encodes a(n) PTCRegistrationOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCRegistrationOutcome, encoded as an ASN.1 Element.
 */
export
function _encode_PTCRegistrationOutcome (value: PTCRegistrationOutcome, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCRegistrationOutcome) { _cached_encoder_for_PTCRegistrationOutcome = $._encodeEnumerated; }
    return _cached_encoder_for_PTCRegistrationOutcome(value, elGetter);
}


/* eslint-enable */
