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
 * @summary Release_request_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0), urgent(1), user-defined(30)
 * }(0 | 1 | 30, ...)
 * ```
 */
export
type Release_request_reason = INTEGER;

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export
const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export
const normal: Release_request_reason = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export
const Release_request_reason_urgent: Release_request_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export
const urgent: Release_request_reason = Release_request_reason_urgent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export
const Release_request_reason_user_defined: Release_request_reason = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export
const user_defined: Release_request_reason = Release_request_reason_user_defined; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Release_request_reason: $.ASN1Decoder<Release_request_reason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Release_request_reason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Release_request_reason (el: _Element): Release_request_reason {
    if (!_cached_decoder_for_Release_request_reason) { _cached_decoder_for_Release_request_reason = $._decodeInteger; }
    return _cached_decoder_for_Release_request_reason(el);
}

let _cached_encoder_for_Release_request_reason: $.ASN1Encoder<Release_request_reason> | null = null;

/**
 * @summary Encodes a(n) Release_request_reason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release_request_reason, encoded as an ASN.1 Element.
 */
export
function _encode_Release_request_reason (value: Release_request_reason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Release_request_reason) { _cached_encoder_for_Release_request_reason = $._encodeInteger; }
    return _cached_encoder_for_Release_request_reason(value, elGetter);
}


/* eslint-enable */
