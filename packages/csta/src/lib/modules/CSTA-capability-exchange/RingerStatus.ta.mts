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
 * @summary RingerStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingerStatus  ::=  BIT STRING
 * {     ringerModeRinging             ( 0),     -- optional parameters
 *     ringerModeNotRinging             ( 1),     -- optional parameters
 *     ringCount                 ( 2),     -- optional parameters
 *     ringPattern                 ( 3),     -- optional parameters
 *     ringVolumeAbs                 ( 4),     -- optional parameters
 *     ringVolumeInc                 ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type RingerStatus = BIT_STRING;

/**
 * @summary RingerStatus_ringerModeRinging
 * @constant
 */
export
const RingerStatus_ringerModeRinging: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ringerModeRinging
 * @constant
 */
export
const ringerModeRinging: number = RingerStatus_ringerModeRinging; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringerModeNotRinging
 * @constant
 */
export
const RingerStatus_ringerModeNotRinging: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ringerModeNotRinging
 * @constant
 */
export
const ringerModeNotRinging: number = RingerStatus_ringerModeNotRinging; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringCount
 * @constant
 */
export
const RingerStatus_ringCount: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ringCount
 * @constant
 */
export
const ringCount: number = RingerStatus_ringCount; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringPattern
 * @constant
 */
export
const RingerStatus_ringPattern: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ringPattern
 * @constant
 */
export
const ringPattern: number = RingerStatus_ringPattern; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringVolumeAbs
 * @constant
 */
export
const RingerStatus_ringVolumeAbs: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeAbs
 * @constant
 */
export
const ringVolumeAbs: number = RingerStatus_ringVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringVolumeInc
 * @constant
 */
export
const RingerStatus_ringVolumeInc: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeInc
 * @constant
 */
export
const ringVolumeInc: number = RingerStatus_ringVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_privateData
 * @constant
 */
export
const RingerStatus_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RingerStatus_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RingerStatus: $.ASN1Decoder<RingerStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingerStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingerStatus (el: _Element): RingerStatus {
    if (!_cached_decoder_for_RingerStatus) { _cached_decoder_for_RingerStatus = $._decodeBitString; }
    return _cached_decoder_for_RingerStatus(el);
}

let _cached_encoder_for_RingerStatus: $.ASN1Encoder<RingerStatus> | null = null;

/**
 * @summary Encodes a(n) RingerStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingerStatus, encoded as an ASN.1 Element.
 */
export
function _encode_RingerStatus (value: RingerStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingerStatus) { _cached_encoder_for_RingerStatus = $._encodeBitString; }
    return _cached_encoder_for_RingerStatus(value, elGetter);
}


/* eslint-enable */
