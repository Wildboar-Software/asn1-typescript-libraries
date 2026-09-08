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



/**
 * @summary PerformanceManagementErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerformanceManagementErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     performanceLimitExceeded             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PerformanceManagementErrors {
    generic = 1,
    performanceLimitExceeded = 2,
}

/**
 * @summary PerformanceManagementErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerformanceManagementErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     performanceLimitExceeded             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
type PerformanceManagementErrors = _enum_for_PerformanceManagementErrors;

/**
 * @summary PerformanceManagementErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerformanceManagementErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     performanceLimitExceeded             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
const PerformanceManagementErrors = _enum_for_PerformanceManagementErrors;

/**
 * @summary PerformanceManagementErrors_generic
 * @constant
 * @type {number}
 */
export
const PerformanceManagementErrors_generic: PerformanceManagementErrors = PerformanceManagementErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: PerformanceManagementErrors = PerformanceManagementErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerformanceManagementErrors_performanceLimitExceeded
 * @constant
 * @type {number}
 */
export
const PerformanceManagementErrors_performanceLimitExceeded: PerformanceManagementErrors = PerformanceManagementErrors.performanceLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary performanceLimitExceeded
 * @constant
 * @type {number}
 */
export
const performanceLimitExceeded: PerformanceManagementErrors = PerformanceManagementErrors.performanceLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PerformanceManagementErrors: $.ASN1Decoder<PerformanceManagementErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerformanceManagementErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PerformanceManagementErrors (el: _Element): PerformanceManagementErrors {
    if (!_cached_decoder_for_PerformanceManagementErrors) { _cached_decoder_for_PerformanceManagementErrors = $._decodeEnumerated; }
    return _cached_decoder_for_PerformanceManagementErrors(el);
}

let _cached_encoder_for_PerformanceManagementErrors: $.ASN1Encoder<PerformanceManagementErrors> | null = null;

/**
 * @summary Encodes a(n) PerformanceManagementErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerformanceManagementErrors, encoded as an ASN.1 Element.
 */
export
function _encode_PerformanceManagementErrors (value: PerformanceManagementErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PerformanceManagementErrors) { _cached_encoder_for_PerformanceManagementErrors = $._encodeEnumerated; }
    return _cached_encoder_for_PerformanceManagementErrors(value, elGetter);
}


/* eslint-enable */
