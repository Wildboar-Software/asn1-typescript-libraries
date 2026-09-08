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
 * @summary DeviceIDFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceIDFormat  ::=  BIT STRING
 * {    dialableDigitsAsterix             ( 0),
 *     dialableDigitsHash             ( 1),
 *     dialableDigitsABCD             ( 2),
 *     dialableDigitsExclamation         ( 3),
 *     dialableDigitsP             ( 4),
 *     dialableDigitsT             ( 5),
 *     dialableDigitsComma             ( 6),
 *     dialableDigitsW             ( 7),
 *     dialableDigitsAt             ( 8),
 *     dialableDigitsDollar             ( 9),
 *     dialableDigitsSemicolon         (10),
 *     sFReprExclamation             (11),
 *     sFReprEt                 (12),
 *     sFReprSlash                 (13),
 *     sFReprPercent                 (14),
 *     sFReprNM                 (15),
 *     sFReprGeneric                 (16),
 *     sFReprImplicitTON             (17),
 *     sFReprPubTONUnkown             (18),
 *     sFReprPubTONInternal             (19),
 *     sFReprPubTONNational             (20),
 *     sFReprPubTONSubscriber             (21),
 *     sFReprPubTONAbbreviated         (22),
 *     sFReprPriTONUnknown             (23),
 *     sFReprPriTONLevel3             (24),
 *     sFReprPriTONLevel2             (25),
 *     sFReprPriTONLevel1             (26),
 *     sFReprPriTONLocal             (27),
 *     sFReprPriTONAbbreviated         (28),
 *     sFReprOther                 (29),
 *     sFRResourceID                (31),
 *     privateNumber                (32),
 *     privateName                (33),
 *     deviceNumber                 (30) }
 * ```
 */
export
type DeviceIDFormat = BIT_STRING;

/**
 * @summary DeviceIDFormat_dialableDigitsAsterix
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsAsterix: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsAsterix
 * @constant
 */
export
const dialableDigitsAsterix: number = DeviceIDFormat_dialableDigitsAsterix; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsHash
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsHash: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsHash
 * @constant
 */
export
const dialableDigitsHash: number = DeviceIDFormat_dialableDigitsHash; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsABCD
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsABCD: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsABCD
 * @constant
 */
export
const dialableDigitsABCD: number = DeviceIDFormat_dialableDigitsABCD; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsExclamation
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsExclamation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsExclamation
 * @constant
 */
export
const dialableDigitsExclamation: number = DeviceIDFormat_dialableDigitsExclamation; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsP
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsP: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsP
 * @constant
 */
export
const dialableDigitsP: number = DeviceIDFormat_dialableDigitsP; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsT
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsT: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsT
 * @constant
 */
export
const dialableDigitsT: number = DeviceIDFormat_dialableDigitsT; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsComma
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsComma: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsComma
 * @constant
 */
export
const dialableDigitsComma: number = DeviceIDFormat_dialableDigitsComma; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsW
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsW: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsW
 * @constant
 */
export
const dialableDigitsW: number = DeviceIDFormat_dialableDigitsW; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsAt
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsAt: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsAt
 * @constant
 */
export
const dialableDigitsAt: number = DeviceIDFormat_dialableDigitsAt; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsDollar
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsDollar: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsDollar
 * @constant
 */
export
const dialableDigitsDollar: number = DeviceIDFormat_dialableDigitsDollar; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsSemicolon
 * @constant
 */
export
const DeviceIDFormat_dialableDigitsSemicolon: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsSemicolon
 * @constant
 */
export
const dialableDigitsSemicolon: number = DeviceIDFormat_dialableDigitsSemicolon; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprExclamation
 * @constant
 */
export
const DeviceIDFormat_sFReprExclamation: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary sFReprExclamation
 * @constant
 */
export
const sFReprExclamation: number = DeviceIDFormat_sFReprExclamation; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprEt
 * @constant
 */
export
const DeviceIDFormat_sFReprEt: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary sFReprEt
 * @constant
 */
export
const sFReprEt: number = DeviceIDFormat_sFReprEt; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprSlash
 * @constant
 */
export
const DeviceIDFormat_sFReprSlash: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary sFReprSlash
 * @constant
 */
export
const sFReprSlash: number = DeviceIDFormat_sFReprSlash; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPercent
 * @constant
 */
export
const DeviceIDFormat_sFReprPercent: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPercent
 * @constant
 */
export
const sFReprPercent: number = DeviceIDFormat_sFReprPercent; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprNM
 * @constant
 */
export
const DeviceIDFormat_sFReprNM: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary sFReprNM
 * @constant
 */
export
const sFReprNM: number = DeviceIDFormat_sFReprNM; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprGeneric
 * @constant
 */
export
const DeviceIDFormat_sFReprGeneric: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary sFReprGeneric
 * @constant
 */
export
const sFReprGeneric: number = DeviceIDFormat_sFReprGeneric; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprImplicitTON
 * @constant
 */
export
const DeviceIDFormat_sFReprImplicitTON: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary sFReprImplicitTON
 * @constant
 */
export
const sFReprImplicitTON: number = DeviceIDFormat_sFReprImplicitTON; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONUnkown
 * @constant
 */
export
const DeviceIDFormat_sFReprPubTONUnkown: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONUnkown
 * @constant
 */
export
const sFReprPubTONUnkown: number = DeviceIDFormat_sFReprPubTONUnkown; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONInternal
 * @constant
 */
export
const DeviceIDFormat_sFReprPubTONInternal: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONInternal
 * @constant
 */
export
const sFReprPubTONInternal: number = DeviceIDFormat_sFReprPubTONInternal; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONNational
 * @constant
 */
export
const DeviceIDFormat_sFReprPubTONNational: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONNational
 * @constant
 */
export
const sFReprPubTONNational: number = DeviceIDFormat_sFReprPubTONNational; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONSubscriber
 * @constant
 */
export
const DeviceIDFormat_sFReprPubTONSubscriber: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONSubscriber
 * @constant
 */
export
const sFReprPubTONSubscriber: number = DeviceIDFormat_sFReprPubTONSubscriber; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONAbbreviated
 * @constant
 */
export
const DeviceIDFormat_sFReprPubTONAbbreviated: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONAbbreviated
 * @constant
 */
export
const sFReprPubTONAbbreviated: number = DeviceIDFormat_sFReprPubTONAbbreviated; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONUnknown
 * @constant
 */
export
const DeviceIDFormat_sFReprPriTONUnknown: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONUnknown
 * @constant
 */
export
const sFReprPriTONUnknown: number = DeviceIDFormat_sFReprPriTONUnknown; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLevel3
 * @constant
 */
export
const DeviceIDFormat_sFReprPriTONLevel3: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLevel3
 * @constant
 */
export
const sFReprPriTONLevel3: number = DeviceIDFormat_sFReprPriTONLevel3; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLevel2
 * @constant
 */
export
const DeviceIDFormat_sFReprPriTONLevel2: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLevel2
 * @constant
 */
export
const sFReprPriTONLevel2: number = DeviceIDFormat_sFReprPriTONLevel2; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLevel1
 * @constant
 */
export
const DeviceIDFormat_sFReprPriTONLevel1: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLevel1
 * @constant
 */
export
const sFReprPriTONLevel1: number = DeviceIDFormat_sFReprPriTONLevel1; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLocal
 * @constant
 */
export
const DeviceIDFormat_sFReprPriTONLocal: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLocal
 * @constant
 */
export
const sFReprPriTONLocal: number = DeviceIDFormat_sFReprPriTONLocal; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONAbbreviated
 * @constant
 */
export
const DeviceIDFormat_sFReprPriTONAbbreviated: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONAbbreviated
 * @constant
 */
export
const sFReprPriTONAbbreviated: number = DeviceIDFormat_sFReprPriTONAbbreviated; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprOther
 * @constant
 */
export
const DeviceIDFormat_sFReprOther: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary sFReprOther
 * @constant
 */
export
const sFReprOther: number = DeviceIDFormat_sFReprOther; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFRResourceID
 * @constant
 */
export
const DeviceIDFormat_sFRResourceID: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary sFRResourceID
 * @constant
 */
export
const sFRResourceID: number = DeviceIDFormat_sFRResourceID; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_privateNumber
 * @constant
 */
export
const DeviceIDFormat_privateNumber: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary privateNumber
 * @constant
 */
export
const privateNumber: number = DeviceIDFormat_privateNumber; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_privateName
 * @constant
 */
export
const DeviceIDFormat_privateName: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary privateName
 * @constant
 */
export
const privateName: number = DeviceIDFormat_privateName; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_deviceNumber
 * @constant
 */
export
const DeviceIDFormat_deviceNumber: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary deviceNumber
 * @constant
 */
export
const deviceNumber: number = DeviceIDFormat_deviceNumber; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeviceIDFormat: $.ASN1Decoder<DeviceIDFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceIDFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceIDFormat (el: _Element): DeviceIDFormat {
    if (!_cached_decoder_for_DeviceIDFormat) { _cached_decoder_for_DeviceIDFormat = $._decodeBitString; }
    return _cached_decoder_for_DeviceIDFormat(el);
}

let _cached_encoder_for_DeviceIDFormat: $.ASN1Encoder<DeviceIDFormat> | null = null;

/**
 * @summary Encodes a(n) DeviceIDFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceIDFormat, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceIDFormat (value: DeviceIDFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceIDFormat) { _cached_encoder_for_DeviceIDFormat = $._encodeBitString; }
    return _cached_encoder_for_DeviceIDFormat(value, elGetter);
}


/* eslint-enable */
