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
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadTriggerResult-profileDownloadTriggerResultData-profileDownloadError-profileDownloadErrorReason ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = INTEGER;

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive
 * @constant
 * @type {number}
 */
export
const ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive
 * @constant
 * @type {number}
 */
export
const ecallActive: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError
 * @constant
 * @type {number}
 */
export
const ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason: $.ASN1Decoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason (el: _Element): ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason {
    if (!_cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason) { _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = $._decodeInteger; }
    return _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason(el);
}

let _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason: $.ASN1Encoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason> | null = null;

/**
 * @summary Encodes a(n) ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason (value: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason) { _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = $._encodeInteger; }
    return _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason(value, elGetter);
}


/* eslint-enable */
