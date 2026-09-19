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
 * @summary EuiccPackageErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageErrorCode  ::=  INTEGER {
 *     invalidEid(3),
 *     replayError(4),
 *     counterValueOutOfRange(6),
 *     sizeOverflow(15),
 *     ecallActive(104),
 *     undefinedError(127)}
 * ```
 */
export
type EuiccPackageErrorCode = INTEGER;

/**
 * @summary EuiccPackageErrorCode_invalidEid
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_invalidEid: EuiccPackageErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_invalidEid
 * @constant
 * @type {number}
 */
export
const invalidEid: EuiccPackageErrorCode = EuiccPackageErrorCode_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_replayError
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_replayError: EuiccPackageErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_replayError
 * @constant
 * @type {number}
 */
export
const replayError: EuiccPackageErrorCode = EuiccPackageErrorCode_replayError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_counterValueOutOfRange: EuiccPackageErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange: EuiccPackageErrorCode = EuiccPackageErrorCode_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_sizeOverflow
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_sizeOverflow: EuiccPackageErrorCode = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_sizeOverflow
 * @constant
 * @type {number}
 */
export
const sizeOverflow: EuiccPackageErrorCode = EuiccPackageErrorCode_sizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_ecallActive
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_ecallActive: EuiccPackageErrorCode = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_ecallActive
 * @constant
 * @type {number}
 */
export
const ecallActive: EuiccPackageErrorCode = EuiccPackageErrorCode_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_undefinedError: EuiccPackageErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccPackageErrorCode = EuiccPackageErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EuiccPackageErrorCode: $.ASN1Decoder<EuiccPackageErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageErrorCode (el: _Element): EuiccPackageErrorCode {
    if (!_cached_decoder_for_EuiccPackageErrorCode) { _cached_decoder_for_EuiccPackageErrorCode = $._decodeInteger; }
    return _cached_decoder_for_EuiccPackageErrorCode(el);
}

let _cached_encoder_for_EuiccPackageErrorCode: $.ASN1Encoder<EuiccPackageErrorCode> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageErrorCode (value: EuiccPackageErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageErrorCode) { _cached_encoder_for_EuiccPackageErrorCode = $._encodeInteger; }
    return _cached_encoder_for_EuiccPackageErrorCode(value, elGetter);
}


/* eslint-enable */
