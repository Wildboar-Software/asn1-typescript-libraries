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
enum _enum_for_PwdResponse_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}

/**
 * @summary PwdResponse_error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PwdResponse-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type PwdResponse_error = _enum_for_PwdResponse_error | ENUMERATED;

/**
 * @summary PwdResponse_error_passwordExpired
 * @constant
 * @type {number}
 */
export
const PwdResponse_error_passwordExpired: PwdResponse_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passwordExpired
 * @constant
 * @type {number}
 */
export
const passwordExpired: PwdResponse_error = PwdResponse_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PwdResponse_error_changeAfterReset
 * @constant
 * @type {number}
 */
export
const PwdResponse_error_changeAfterReset: PwdResponse_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeAfterReset
 * @constant
 * @type {number}
 */
export
const changeAfterReset: PwdResponse_error = PwdResponse_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PwdResponse_error: $.ASN1Decoder<PwdResponse_error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse_error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PwdResponse_error (el: _Element): PwdResponse_error {
    if (!_cached_decoder_for_PwdResponse_error) { _cached_decoder_for_PwdResponse_error = $._decodeEnumerated; }
    return _cached_decoder_for_PwdResponse_error(el);
}

let _cached_encoder_for_PwdResponse_error: $.ASN1Encoder<PwdResponse_error> | null = null;

/**
 * @summary Encodes a(n) PwdResponse_error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse_error, encoded as an ASN.1 Element.
 */
export
function _encode_PwdResponse_error (value: PwdResponse_error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PwdResponse_error) { _cached_encoder_for_PwdResponse_error = $._encodeEnumerated; }
    return _cached_encoder_for_PwdResponse_error(value, elGetter);
}


/* eslint-enable */
