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



export
enum _enum_for_BioAPI_GUI_RESPONSE {
    default_ = 0,
    opComplete = 1,
    opCancel = 2,
    cycleStart = 3,
    cycleRestart = 4,
    subopStart = 5,
    subopNext = 6,
    progressContinue = 7,
    progressCancel = 8,
    recapture = 9,
}

/**
 * @summary BioAPI_GUI_RESPONSE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-GUI-RESPONSE  ::=  ENUMERATED {
 *   default, opComplete, opCancel, cycleStart, cycleRestart, subopStart,
 *   subopNext, progressContinue, progressCancel, recapture, ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type BioAPI_GUI_RESPONSE = _enum_for_BioAPI_GUI_RESPONSE | ENUMERATED;

/**
 * @summary BioAPI_GUI_RESPONSE_default_
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_default_: BioAPI_GUI_RESPONSE = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary default_
 * @constant
 * @type {number}
 */
export
const default_: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_default_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_opComplete
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_opComplete: BioAPI_GUI_RESPONSE = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary opComplete
 * @constant
 * @type {number}
 */
export
const opComplete: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_opComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_opCancel
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_opCancel: BioAPI_GUI_RESPONSE = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary opCancel
 * @constant
 * @type {number}
 */
export
const opCancel: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_opCancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_cycleStart
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_cycleStart: BioAPI_GUI_RESPONSE = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cycleStart
 * @constant
 * @type {number}
 */
export
const cycleStart: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_cycleStart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_cycleRestart
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_cycleRestart: BioAPI_GUI_RESPONSE = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cycleRestart
 * @constant
 * @type {number}
 */
export
const cycleRestart: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_cycleRestart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_subopStart
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_subopStart: BioAPI_GUI_RESPONSE = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subopStart
 * @constant
 * @type {number}
 */
export
const subopStart: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_subopStart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_subopNext
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_subopNext: BioAPI_GUI_RESPONSE = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subopNext
 * @constant
 * @type {number}
 */
export
const subopNext: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_subopNext; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_progressContinue
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_progressContinue: BioAPI_GUI_RESPONSE = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary progressContinue
 * @constant
 * @type {number}
 */
export
const progressContinue: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_progressContinue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_progressCancel
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_progressCancel: BioAPI_GUI_RESPONSE = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary progressCancel
 * @constant
 * @type {number}
 */
export
const progressCancel: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_progressCancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_GUI_RESPONSE_recapture
 * @constant
 * @type {number}
 */
export
const BioAPI_GUI_RESPONSE_recapture: BioAPI_GUI_RESPONSE = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recapture
 * @constant
 * @type {number}
 */
export
const recapture: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_recapture; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BioAPI_GUI_RESPONSE: $.ASN1Decoder<BioAPI_GUI_RESPONSE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_RESPONSE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_GUI_RESPONSE (el: _Element): BioAPI_GUI_RESPONSE {
    if (!_cached_decoder_for_BioAPI_GUI_RESPONSE) { _cached_decoder_for_BioAPI_GUI_RESPONSE = $._decodeEnumerated; }
    return _cached_decoder_for_BioAPI_GUI_RESPONSE(el);
}

let _cached_encoder_for_BioAPI_GUI_RESPONSE: $.ASN1Encoder<BioAPI_GUI_RESPONSE> | null = null;

/**
 * @summary Encodes a(n) BioAPI_GUI_RESPONSE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_RESPONSE, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_GUI_RESPONSE (value: BioAPI_GUI_RESPONSE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_GUI_RESPONSE) { _cached_encoder_for_BioAPI_GUI_RESPONSE = $._encodeEnumerated; }
    return _cached_encoder_for_BioAPI_GUI_RESPONSE(value, elGetter);
}


/* eslint-enable */
