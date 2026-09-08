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
 * @summary VoiceUnitServicesC2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceUnitServicesC2  ::=  BIT STRING
 *     {concatenateMessage             (0),
 *      deleteMessage                  (1),
 *      playMessage                    (2),
 *      queryVoiceAttribute            (3),
 *      recordMessage              (4),
 *      reposition                     (5),
 *      resume                     (6),
 *      review                         (7),
 *      setVoiceAttribute              (8),
 *      stop                           (9),
 *      suspend                        (10),
 *      synthesizeMessage              (11)    }
 * ```
 */
export
type VoiceUnitServicesC2 = BIT_STRING;

/**
 * @summary VoiceUnitServicesC2_concatenateMessage
 * @constant
 */
export
const VoiceUnitServicesC2_concatenateMessage: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary concatenateMessage
 * @constant
 */
export
const concatenateMessage: number = VoiceUnitServicesC2_concatenateMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_deleteMessage
 * @constant
 */
export
const VoiceUnitServicesC2_deleteMessage: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deleteMessage
 * @constant
 */
export
const deleteMessage: number = VoiceUnitServicesC2_deleteMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_playMessage
 * @constant
 */
export
const VoiceUnitServicesC2_playMessage: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary playMessage
 * @constant
 */
export
const playMessage: number = VoiceUnitServicesC2_playMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_queryVoiceAttribute
 * @constant
 */
export
const VoiceUnitServicesC2_queryVoiceAttribute: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queryVoiceAttribute
 * @constant
 */
export
const queryVoiceAttribute: number = VoiceUnitServicesC2_queryVoiceAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_recordMessage
 * @constant
 */
export
const VoiceUnitServicesC2_recordMessage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary recordMessage
 * @constant
 */
export
const recordMessage: number = VoiceUnitServicesC2_recordMessage; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_reposition
 * @constant
 */
export
const VoiceUnitServicesC2_reposition: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary reposition
 * @constant
 */
export
const reposition: number = VoiceUnitServicesC2_reposition; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_resume
 * @constant
 */
export
const VoiceUnitServicesC2_resume: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resume
 * @constant
 */
export
const resume: number = VoiceUnitServicesC2_resume; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_review
 * @constant
 */
export
const VoiceUnitServicesC2_review: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary review
 * @constant
 */
export
const review: number = VoiceUnitServicesC2_review; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_setVoiceAttribute
 * @constant
 */
export
const VoiceUnitServicesC2_setVoiceAttribute: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary setVoiceAttribute
 * @constant
 */
export
const setVoiceAttribute: number = VoiceUnitServicesC2_setVoiceAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_stop
 * @constant
 */
export
const VoiceUnitServicesC2_stop: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary stop
 * @constant
 */
export
const stop: number = VoiceUnitServicesC2_stop; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_suspend
 * @constant
 */
export
const VoiceUnitServicesC2_suspend: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary suspend
 * @constant
 */
export
const suspend: number = VoiceUnitServicesC2_suspend; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitServicesC2_synthesizeMessage
 * @constant
 */
export
const VoiceUnitServicesC2_synthesizeMessage: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary synthesizeMessage
 * @constant
 */
export
const synthesizeMessage: number = VoiceUnitServicesC2_synthesizeMessage; /* SHORT_NAMED_BIT */

let _cached_decoder_for_VoiceUnitServicesC2: $.ASN1Decoder<VoiceUnitServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceUnitServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceUnitServicesC2 (el: _Element): VoiceUnitServicesC2 {
    if (!_cached_decoder_for_VoiceUnitServicesC2) { _cached_decoder_for_VoiceUnitServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_VoiceUnitServicesC2(el);
}

let _cached_encoder_for_VoiceUnitServicesC2: $.ASN1Encoder<VoiceUnitServicesC2> | null = null;

/**
 * @summary Encodes a(n) VoiceUnitServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceUnitServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceUnitServicesC2 (value: VoiceUnitServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceUnitServicesC2) { _cached_encoder_for_VoiceUnitServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_VoiceUnitServicesC2(value, elGetter);
}


/* eslint-enable */
