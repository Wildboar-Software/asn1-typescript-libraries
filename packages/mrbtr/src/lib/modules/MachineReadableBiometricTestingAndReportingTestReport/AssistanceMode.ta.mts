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
 * @summary AssistanceMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistanceMode  ::=  ENUMERATED {
 *     physical        (1),
 *     audio-only      (2),
 *     audio-video     (3),
 *     none            (4),
 *     video-only      (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AssistanceMode {
    physical = 1,
    audio_only = 2,
    audio_video = 3,
    none = 4,
    video_only = 5,
}

/**
 * @summary AssistanceMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistanceMode  ::=  ENUMERATED {
 *     physical        (1),
 *     audio-only      (2),
 *     audio-video     (3),
 *     none            (4),
 *     video-only      (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AssistanceMode = _enum_for_AssistanceMode;

/**
 * @summary AssistanceMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistanceMode  ::=  ENUMERATED {
 *     physical        (1),
 *     audio-only      (2),
 *     audio-video     (3),
 *     none            (4),
 *     video-only      (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AssistanceMode = _enum_for_AssistanceMode;

/**
 * @summary AssistanceMode_physical
 * @constant
 * @type {number}
 */
export
const AssistanceMode_physical: AssistanceMode = AssistanceMode.physical; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary physical
 * @constant
 * @type {number}
 */
export
const physical: AssistanceMode = AssistanceMode.physical; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AssistanceMode_audio_only
 * @constant
 * @type {number}
 */
export
const AssistanceMode_audio_only: AssistanceMode = AssistanceMode.audio_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio_only
 * @constant
 * @type {number}
 */
export
const audio_only: AssistanceMode = AssistanceMode.audio_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AssistanceMode_audio_video
 * @constant
 * @type {number}
 */
export
const AssistanceMode_audio_video: AssistanceMode = AssistanceMode.audio_video; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio_video
 * @constant
 * @type {number}
 */
export
const audio_video: AssistanceMode = AssistanceMode.audio_video; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AssistanceMode_none
 * @constant
 * @type {number}
 */
export
const AssistanceMode_none: AssistanceMode = AssistanceMode.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: AssistanceMode = AssistanceMode.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AssistanceMode_video_only
 * @constant
 * @type {number}
 */
export
const AssistanceMode_video_only: AssistanceMode = AssistanceMode.video_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video_only
 * @constant
 * @type {number}
 */
export
const video_only: AssistanceMode = AssistanceMode.video_only; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) AssistanceMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AssistanceMode = $._decodeEnumerated;


/**
 * @summary Encodes a(n) AssistanceMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistanceMode, encoded as an ASN.1 Element.
 */
export const _encode_AssistanceMode = $._encodeEnumerated;


/* eslint-enable */
