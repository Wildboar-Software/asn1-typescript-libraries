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
 * @summary DataCollected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollected  ::=  BIT STRING
 * {     digitsDuration                 ( 0),     -- optional parameters
 *     digitsPauseDuration             ( 1),     -- optional parameters
 *     toneDetectedBeep             ( 2),     -- optional parameters
 *     toneDetectedBilling             ( 3),     -- optional parameters
 *     toneDetectedBusy             ( 4),     -- optional parameters
 *     toneDetectedCarrier             ( 5),     -- optional parameters
 *     toneDetectedConfirmation         ( 6),     -- optional parameters
 *     toneDetectedDial             ( 7),     -- optional parameters
 *     toneDetectedFaxCNG             ( 8),     -- optional parameters
 *     toneDetectedHold             ( 9),     -- optional parameters
 *     toneDetectedHowler             (10),     -- optional parameters
 *     toneDetectedIntrusion             (11),     -- optional parameters
 *     toneDetectedModemCNG             (12),     -- optional parameters
 *     toneDetectedPark             (13),     -- optional parameters
 *     toneDetectedRecordWarning         (14),     -- optional parameters
 *     toneDetectedReorder             (15),     -- optional parameters
 *     toneDetectedRingback             (16),     -- optional parameters
 *     toneDetectedSilence             (17),     -- optional parameters
 *     toneDetectedSitVC             (18),     -- optional parameters
 *     toneDetectedSitIC             (19),     -- optional parameters
 *     toneDetectedSitRO             (20),     -- optional parameters
 *     toneDetectedSitNC             (21),     -- optional parameters
 *     toneDetectedSf0             (22),     -- optional parameters
 *     toneDetectedSf1             (23),     -- optional parameters
 *     toneDetectedSf2             (24),     -- optional parameters
 *     toneDetectedSf3             (25),     -- optional parameters
 *     toneDetectedSf4             (26),     -- optional parameters
 *     toneDetectedSf5             (27),     -- optional parameters
 *     toneDetectedSf6             (28),     -- optional parameters
 *     toneDetectedSf7             (29),     -- optional parameters
 *     toneDetectedSf8             (30),     -- optional parameters
 *     toneDetectedSf9             (31),     -- optional parameters
 *     toneDetectedSf10             (32),     -- optional parameters
 *     toneDetectedOther             (33),     -- optional parameters
 *     toneFrequency                 (34),     -- optional parameters
 *     toneDuration                 (35),     -- optional parameters
 *     tonePauseDuration             (36),    -- optional parameters
 *     connectionInfo                 (37),     -- optional parameters
 *     dcollCauseFushCharReceived         (38),     -- optional parameters
 *     dcollCauseCharCountReached         (39),     -- optional parameters
 *     dcollCauseTimeout             (40),     -- optional parameters
 *     dcollCauseSFTerminated             (41),     -- optional parameters
 *     privateData                 (42),     -- optional parameters
 *     privateDataInAck             (43) }
 * ```
 */
export
type DataCollected = BIT_STRING;

/**
 * @summary DataCollected_digitsDuration
 * @constant
 */
export
const DataCollected_digitsDuration: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary digitsDuration
 * @constant
 */
export
const digitsDuration: number = DataCollected_digitsDuration; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_digitsPauseDuration
 * @constant
 */
export
const DataCollected_digitsPauseDuration: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary digitsPauseDuration
 * @constant
 */
export
const digitsPauseDuration: number = DataCollected_digitsPauseDuration; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedBeep
 * @constant
 */
export
const DataCollected_toneDetectedBeep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedBeep
 * @constant
 */
export
const toneDetectedBeep: number = DataCollected_toneDetectedBeep; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedBilling
 * @constant
 */
export
const DataCollected_toneDetectedBilling: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedBilling
 * @constant
 */
export
const toneDetectedBilling: number = DataCollected_toneDetectedBilling; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedBusy
 * @constant
 */
export
const DataCollected_toneDetectedBusy: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedBusy
 * @constant
 */
export
const toneDetectedBusy: number = DataCollected_toneDetectedBusy; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedCarrier
 * @constant
 */
export
const DataCollected_toneDetectedCarrier: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedCarrier
 * @constant
 */
export
const toneDetectedCarrier: number = DataCollected_toneDetectedCarrier; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedConfirmation
 * @constant
 */
export
const DataCollected_toneDetectedConfirmation: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedConfirmation
 * @constant
 */
export
const toneDetectedConfirmation: number = DataCollected_toneDetectedConfirmation; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedDial
 * @constant
 */
export
const DataCollected_toneDetectedDial: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedDial
 * @constant
 */
export
const toneDetectedDial: number = DataCollected_toneDetectedDial; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedFaxCNG
 * @constant
 */
export
const DataCollected_toneDetectedFaxCNG: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedFaxCNG
 * @constant
 */
export
const toneDetectedFaxCNG: number = DataCollected_toneDetectedFaxCNG; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedHold
 * @constant
 */
export
const DataCollected_toneDetectedHold: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedHold
 * @constant
 */
export
const toneDetectedHold: number = DataCollected_toneDetectedHold; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedHowler
 * @constant
 */
export
const DataCollected_toneDetectedHowler: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedHowler
 * @constant
 */
export
const toneDetectedHowler: number = DataCollected_toneDetectedHowler; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedIntrusion
 * @constant
 */
export
const DataCollected_toneDetectedIntrusion: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedIntrusion
 * @constant
 */
export
const toneDetectedIntrusion: number = DataCollected_toneDetectedIntrusion; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedModemCNG
 * @constant
 */
export
const DataCollected_toneDetectedModemCNG: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedModemCNG
 * @constant
 */
export
const toneDetectedModemCNG: number = DataCollected_toneDetectedModemCNG; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedPark
 * @constant
 */
export
const DataCollected_toneDetectedPark: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedPark
 * @constant
 */
export
const toneDetectedPark: number = DataCollected_toneDetectedPark; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedRecordWarning
 * @constant
 */
export
const DataCollected_toneDetectedRecordWarning: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedRecordWarning
 * @constant
 */
export
const toneDetectedRecordWarning: number = DataCollected_toneDetectedRecordWarning; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedReorder
 * @constant
 */
export
const DataCollected_toneDetectedReorder: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedReorder
 * @constant
 */
export
const toneDetectedReorder: number = DataCollected_toneDetectedReorder; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedRingback
 * @constant
 */
export
const DataCollected_toneDetectedRingback: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedRingback
 * @constant
 */
export
const toneDetectedRingback: number = DataCollected_toneDetectedRingback; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSilence
 * @constant
 */
export
const DataCollected_toneDetectedSilence: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSilence
 * @constant
 */
export
const toneDetectedSilence: number = DataCollected_toneDetectedSilence; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSitVC
 * @constant
 */
export
const DataCollected_toneDetectedSitVC: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSitVC
 * @constant
 */
export
const toneDetectedSitVC: number = DataCollected_toneDetectedSitVC; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSitIC
 * @constant
 */
export
const DataCollected_toneDetectedSitIC: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSitIC
 * @constant
 */
export
const toneDetectedSitIC: number = DataCollected_toneDetectedSitIC; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSitRO
 * @constant
 */
export
const DataCollected_toneDetectedSitRO: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSitRO
 * @constant
 */
export
const toneDetectedSitRO: number = DataCollected_toneDetectedSitRO; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSitNC
 * @constant
 */
export
const DataCollected_toneDetectedSitNC: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSitNC
 * @constant
 */
export
const toneDetectedSitNC: number = DataCollected_toneDetectedSitNC; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf0
 * @constant
 */
export
const DataCollected_toneDetectedSf0: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf0
 * @constant
 */
export
const toneDetectedSf0: number = DataCollected_toneDetectedSf0; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf1
 * @constant
 */
export
const DataCollected_toneDetectedSf1: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf1
 * @constant
 */
export
const toneDetectedSf1: number = DataCollected_toneDetectedSf1; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf2
 * @constant
 */
export
const DataCollected_toneDetectedSf2: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf2
 * @constant
 */
export
const toneDetectedSf2: number = DataCollected_toneDetectedSf2; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf3
 * @constant
 */
export
const DataCollected_toneDetectedSf3: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf3
 * @constant
 */
export
const toneDetectedSf3: number = DataCollected_toneDetectedSf3; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf4
 * @constant
 */
export
const DataCollected_toneDetectedSf4: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf4
 * @constant
 */
export
const toneDetectedSf4: number = DataCollected_toneDetectedSf4; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf5
 * @constant
 */
export
const DataCollected_toneDetectedSf5: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf5
 * @constant
 */
export
const toneDetectedSf5: number = DataCollected_toneDetectedSf5; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf6
 * @constant
 */
export
const DataCollected_toneDetectedSf6: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf6
 * @constant
 */
export
const toneDetectedSf6: number = DataCollected_toneDetectedSf6; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf7
 * @constant
 */
export
const DataCollected_toneDetectedSf7: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf7
 * @constant
 */
export
const toneDetectedSf7: number = DataCollected_toneDetectedSf7; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf8
 * @constant
 */
export
const DataCollected_toneDetectedSf8: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf8
 * @constant
 */
export
const toneDetectedSf8: number = DataCollected_toneDetectedSf8; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf9
 * @constant
 */
export
const DataCollected_toneDetectedSf9: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf9
 * @constant
 */
export
const toneDetectedSf9: number = DataCollected_toneDetectedSf9; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedSf10
 * @constant
 */
export
const DataCollected_toneDetectedSf10: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedSf10
 * @constant
 */
export
const toneDetectedSf10: number = DataCollected_toneDetectedSf10; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDetectedOther
 * @constant
 */
export
const DataCollected_toneDetectedOther: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary toneDetectedOther
 * @constant
 */
export
const toneDetectedOther: number = DataCollected_toneDetectedOther; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneFrequency
 * @constant
 */
export
const DataCollected_toneFrequency: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary toneFrequency
 * @constant
 */
export
const toneFrequency: number = DataCollected_toneFrequency; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_toneDuration
 * @constant
 */
export
const DataCollected_toneDuration: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary toneDuration
 * @constant
 */
export
const toneDuration: number = DataCollected_toneDuration; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_tonePauseDuration
 * @constant
 */
export
const DataCollected_tonePauseDuration: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary tonePauseDuration
 * @constant
 */
export
const tonePauseDuration: number = DataCollected_tonePauseDuration; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_connectionInfo
 * @constant
 */
export
const DataCollected_connectionInfo: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 */
export
const connectionInfo: number = DataCollected_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_dcollCauseFushCharReceived
 * @constant
 */
export
const DataCollected_dcollCauseFushCharReceived: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary dcollCauseFushCharReceived
 * @constant
 */
export
const dcollCauseFushCharReceived: number = DataCollected_dcollCauseFushCharReceived; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_dcollCauseCharCountReached
 * @constant
 */
export
const DataCollected_dcollCauseCharCountReached: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary dcollCauseCharCountReached
 * @constant
 */
export
const dcollCauseCharCountReached: number = DataCollected_dcollCauseCharCountReached; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_dcollCauseTimeout
 * @constant
 */
export
const DataCollected_dcollCauseTimeout: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary dcollCauseTimeout
 * @constant
 */
export
const dcollCauseTimeout: number = DataCollected_dcollCauseTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_dcollCauseSFTerminated
 * @constant
 */
export
const DataCollected_dcollCauseSFTerminated: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary dcollCauseSFTerminated
 * @constant
 */
export
const dcollCauseSFTerminated: number = DataCollected_dcollCauseSFTerminated; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_privateData
 * @constant
 */
export
const DataCollected_privateData: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DataCollected_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollected_privateDataInAck
 * @constant
 */
export
const DataCollected_privateDataInAck: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = DataCollected_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DataCollected: $.ASN1Decoder<DataCollected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollected (el: _Element): DataCollected {
    if (!_cached_decoder_for_DataCollected) { _cached_decoder_for_DataCollected = $._decodeBitString; }
    return _cached_decoder_for_DataCollected(el);
}

let _cached_encoder_for_DataCollected: $.ASN1Encoder<DataCollected> | null = null;

/**
 * @summary Encodes a(n) DataCollected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollected, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollected (value: DataCollected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollected) { _cached_encoder_for_DataCollected = $._encodeBitString; }
    return _cached_encoder_for_DataCollected(value, elGetter);
}


/* eslint-enable */
