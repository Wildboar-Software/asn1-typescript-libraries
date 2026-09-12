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
enum _enum_for_ABRT_diagnostic {
    no_reason_given = 1,
    protocol_error = 2,
    authentication_mechanism_name_not_recognized = 3,
    authentication_mechanism_name_required = 4,
    authentication_failure = 5,
    authentication_required = 6,
}

/**
 * @summary ABRT_diagnostic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ABRT-diagnostic  ::=  ENUMERATED {
 *   no-reason-given(1), protocol-error(2),
 *   authentication-mechanism-name-not-recognized(3),
 *   authentication-mechanism-name-required(4), authentication-failure(5),
 *   authentication-required(6), ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type ABRT_diagnostic = _enum_for_ABRT_diagnostic | ENUMERATED;

/**
 * @summary ABRT_diagnostic_no_reason_given
 * @constant
 * @type {number}
 */
export
const ABRT_diagnostic_no_reason_given: ABRT_diagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_reason_given
 * @constant
 * @type {number}
 */
export
const no_reason_given: ABRT_diagnostic = ABRT_diagnostic_no_reason_given; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_protocol_error
 * @constant
 * @type {number}
 */
export
const ABRT_diagnostic_protocol_error: ABRT_diagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol_error
 * @constant
 * @type {number}
 */
export
const protocol_error: ABRT_diagnostic = ABRT_diagnostic_protocol_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export
const ABRT_diagnostic_authentication_mechanism_name_not_recognized: ABRT_diagnostic = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export
const authentication_mechanism_name_not_recognized: ABRT_diagnostic = ABRT_diagnostic_authentication_mechanism_name_not_recognized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export
const ABRT_diagnostic_authentication_mechanism_name_required: ABRT_diagnostic = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export
const authentication_mechanism_name_required: ABRT_diagnostic = ABRT_diagnostic_authentication_mechanism_name_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_failure
 * @constant
 * @type {number}
 */
export
const ABRT_diagnostic_authentication_failure: ABRT_diagnostic = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_failure
 * @constant
 * @type {number}
 */
export
const authentication_failure: ABRT_diagnostic = ABRT_diagnostic_authentication_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_required
 * @constant
 * @type {number}
 */
export
const ABRT_diagnostic_authentication_required: ABRT_diagnostic = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_required
 * @constant
 * @type {number}
 */
export
const authentication_required: ABRT_diagnostic = ABRT_diagnostic_authentication_required; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ABRT_diagnostic: $.ASN1Decoder<ABRT_diagnostic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_diagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ABRT_diagnostic (el: _Element): ABRT_diagnostic {
    if (!_cached_decoder_for_ABRT_diagnostic) { _cached_decoder_for_ABRT_diagnostic = $._decodeEnumerated; }
    return _cached_decoder_for_ABRT_diagnostic(el);
}

let _cached_encoder_for_ABRT_diagnostic: $.ASN1Encoder<ABRT_diagnostic> | null = null;

/**
 * @summary Encodes a(n) ABRT_diagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_diagnostic, encoded as an ASN.1 Element.
 */
export
function _encode_ABRT_diagnostic (value: ABRT_diagnostic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ABRT_diagnostic) { _cached_encoder_for_ABRT_diagnostic = $._encodeEnumerated; }
    return _cached_encoder_for_ABRT_diagnostic(value, elGetter);
}


/* eslint-enable */
