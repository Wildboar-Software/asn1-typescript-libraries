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
 * @summary InstructionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstructionMode  ::=  ENUMERATED {
 *     written-manual  (1),
 *     poster          (2),
 *     video           (3),
 *     personal        (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InstructionMode {
    written_manual = 1,
    poster = 2,
    video = 3,
    personal = 4,
}

/**
 * @summary InstructionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstructionMode  ::=  ENUMERATED {
 *     written-manual  (1),
 *     poster          (2),
 *     video           (3),
 *     personal        (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InstructionMode = _enum_for_InstructionMode;

/**
 * @summary InstructionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstructionMode  ::=  ENUMERATED {
 *     written-manual  (1),
 *     poster          (2),
 *     video           (3),
 *     personal        (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const InstructionMode = _enum_for_InstructionMode;

/**
 * @summary InstructionMode_written_manual
 * @constant
 * @type {number}
 */
export
const InstructionMode_written_manual: InstructionMode = InstructionMode.written_manual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary written_manual
 * @constant
 * @type {number}
 */
export
const written_manual: InstructionMode = InstructionMode.written_manual; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InstructionMode_poster
 * @constant
 * @type {number}
 */
export
const InstructionMode_poster: InstructionMode = InstructionMode.poster; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary poster
 * @constant
 * @type {number}
 */
export
const poster: InstructionMode = InstructionMode.poster; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InstructionMode_video
 * @constant
 * @type {number}
 */
export
const InstructionMode_video: InstructionMode = InstructionMode.video; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video
 * @constant
 * @type {number}
 */
export
const video: InstructionMode = InstructionMode.video; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InstructionMode_personal
 * @constant
 * @type {number}
 */
export
const InstructionMode_personal: InstructionMode = InstructionMode.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: InstructionMode = InstructionMode.personal; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InstructionMode: $.ASN1Decoder<InstructionMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InstructionMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InstructionMode (el: _Element): InstructionMode {
    if (!_cached_decoder_for_InstructionMode) { _cached_decoder_for_InstructionMode = $._decodeEnumerated; }
    return _cached_decoder_for_InstructionMode(el);
}

let _cached_encoder_for_InstructionMode: $.ASN1Encoder<InstructionMode> | null = null;

/**
 * @summary Encodes a(n) InstructionMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InstructionMode, encoded as an ASN.1 Element.
 */
export
function _encode_InstructionMode (value: InstructionMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InstructionMode) { _cached_encoder_for_InstructionMode = $._encodeEnumerated; }
    return _cached_encoder_for_InstructionMode(value, elGetter);
}


/* eslint-enable */
