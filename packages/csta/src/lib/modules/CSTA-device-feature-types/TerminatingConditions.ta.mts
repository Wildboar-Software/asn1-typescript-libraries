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
 * @summary TerminatingConditions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminatingConditions  ::=  BIT STRING
 * {     durationExceeded         ( 0),
 *     dTMFDigitDetected         ( 1),
 *     endOfMessageDetected         ( 2),
 *     speechDetected             ( 3) }
 * ```
 */
export
type TerminatingConditions = BIT_STRING;

/**
 * @summary TerminatingConditions_durationExceeded
 * @constant
 */
export
const TerminatingConditions_durationExceeded: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary durationExceeded
 * @constant
 */
export
const durationExceeded: number = TerminatingConditions_durationExceeded; /* SHORT_NAMED_BIT */

/**
 * @summary TerminatingConditions_dTMFDigitDetected
 * @constant
 */
export
const TerminatingConditions_dTMFDigitDetected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dTMFDigitDetected
 * @constant
 */
export
const dTMFDigitDetected: number = TerminatingConditions_dTMFDigitDetected; /* SHORT_NAMED_BIT */

/**
 * @summary TerminatingConditions_endOfMessageDetected
 * @constant
 */
export
const TerminatingConditions_endOfMessageDetected: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary endOfMessageDetected
 * @constant
 */
export
const endOfMessageDetected: number = TerminatingConditions_endOfMessageDetected; /* SHORT_NAMED_BIT */

/**
 * @summary TerminatingConditions_speechDetected
 * @constant
 */
export
const TerminatingConditions_speechDetected: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary speechDetected
 * @constant
 */
export
const speechDetected: number = TerminatingConditions_speechDetected; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TerminatingConditions: $.ASN1Decoder<TerminatingConditions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminatingConditions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminatingConditions (el: _Element): TerminatingConditions {
    if (!_cached_decoder_for_TerminatingConditions) { _cached_decoder_for_TerminatingConditions = $._decodeBitString; }
    return _cached_decoder_for_TerminatingConditions(el);
}

let _cached_encoder_for_TerminatingConditions: $.ASN1Encoder<TerminatingConditions> | null = null;

/**
 * @summary Encodes a(n) TerminatingConditions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminatingConditions, encoded as an ASN.1 Element.
 */
export
function _encode_TerminatingConditions (value: TerminatingConditions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminatingConditions) { _cached_encoder_for_TerminatingConditions = $._encodeBitString; }
    return _cached_encoder_for_TerminatingConditions(value, elGetter);
}


/* eslint-enable */
