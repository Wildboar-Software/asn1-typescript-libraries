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
 * @summary EuiccResultData_processingTerminated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccResultData-processingTerminated ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccResultData_processingTerminated = INTEGER;

/**
 * @summary EuiccResultData_processingTerminated_resultSizeOverflow
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_resultSizeOverflow: EuiccResultData_processingTerminated = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_resultSizeOverflow
 * @constant
 * @type {number}
 */
export
const resultSizeOverflow: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_resultSizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_unknownOrDamagedCommand
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_unknownOrDamagedCommand: EuiccResultData_processingTerminated = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_unknownOrDamagedCommand
 * @constant
 * @type {number}
 */
export
const unknownOrDamagedCommand: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_unknownOrDamagedCommand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_interruption
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_interruption: EuiccResultData_processingTerminated = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_interruption
 * @constant
 * @type {number}
 */
export
const interruption: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_interruption; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_undefinedError: EuiccResultData_processingTerminated = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EuiccResultData_processingTerminated: $.ASN1Decoder<EuiccResultData_processingTerminated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccResultData_processingTerminated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccResultData_processingTerminated (el: _Element): EuiccResultData_processingTerminated {
    if (!_cached_decoder_for_EuiccResultData_processingTerminated) { _cached_decoder_for_EuiccResultData_processingTerminated = $._decodeInteger; }
    return _cached_decoder_for_EuiccResultData_processingTerminated(el);
}

let _cached_encoder_for_EuiccResultData_processingTerminated: $.ASN1Encoder<EuiccResultData_processingTerminated> | null = null;

/**
 * @summary Encodes a(n) EuiccResultData_processingTerminated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccResultData_processingTerminated, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccResultData_processingTerminated (value: EuiccResultData_processingTerminated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccResultData_processingTerminated) { _cached_encoder_for_EuiccResultData_processingTerminated = $._encodeInteger; }
    return _cached_encoder_for_EuiccResultData_processingTerminated(value, elGetter);
}


/* eslint-enable */
