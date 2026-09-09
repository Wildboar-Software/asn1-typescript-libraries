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
 * @summary TriggerType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerType  ::=  ENUMERATED {
 *   featureActivation(0), verticalServiceCode(1), customizedAccess(2),
 *   customizedIntercom(3), emergencyService(12), aFR(13), sharedIOTrunk(14),
 *   offHookDelay(17), channelSetupPRI(18), tNoAnswer(25), tBusy(26),
 *   oCalledPartyBusy(27), oNoAnswer(29), originationAttemptAuthorized(30),
 *   oAnswer(31), oDisconnect(32), termAttemptAuthorized(33), tAnswer(34),
 *   tDisconnect(35)
 *   -- Private (ffs)
 *   }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TriggerType {
    featureActivation = 0,
    verticalServiceCode = 1,
    customizedAccess = 2,
    customizedIntercom = 3,
    emergencyService = 12,
    aFR = 13,
    sharedIOTrunk = 14,
    offHookDelay = 17,
    channelSetupPRI = 18,
    tNoAnswer = 25,
    tBusy = 26,
    oCalledPartyBusy = 27,
    oNoAnswer = 29,
    originationAttemptAuthorized = 30,
    oAnswer = 31,
    oDisconnect = 32,
    termAttemptAuthorized = 33,
    tAnswer = 34,
    tDisconnect = 35,
}

/**
 * @summary TriggerType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerType  ::=  ENUMERATED {
 *   featureActivation(0), verticalServiceCode(1), customizedAccess(2),
 *   customizedIntercom(3), emergencyService(12), aFR(13), sharedIOTrunk(14),
 *   offHookDelay(17), channelSetupPRI(18), tNoAnswer(25), tBusy(26),
 *   oCalledPartyBusy(27), oNoAnswer(29), originationAttemptAuthorized(30),
 *   oAnswer(31), oDisconnect(32), termAttemptAuthorized(33), tAnswer(34),
 *   tDisconnect(35)
 *   -- Private (ffs)
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type TriggerType = _enum_for_TriggerType;

/**
 * @summary TriggerType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerType  ::=  ENUMERATED {
 *   featureActivation(0), verticalServiceCode(1), customizedAccess(2),
 *   customizedIntercom(3), emergencyService(12), aFR(13), sharedIOTrunk(14),
 *   offHookDelay(17), channelSetupPRI(18), tNoAnswer(25), tBusy(26),
 *   oCalledPartyBusy(27), oNoAnswer(29), originationAttemptAuthorized(30),
 *   oAnswer(31), oDisconnect(32), termAttemptAuthorized(33), tAnswer(34),
 *   tDisconnect(35)
 *   -- Private (ffs)
 *   }
 * ```
 * 
 * @enum {number}
 */
export
const TriggerType = _enum_for_TriggerType;

/**
 * @summary TriggerType_featureActivation
 * @constant
 * @type {number}
 */
export
const TriggerType_featureActivation: TriggerType = TriggerType.featureActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureActivation
 * @constant
 * @type {number}
 */
export
const featureActivation: TriggerType = TriggerType.featureActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_verticalServiceCode
 * @constant
 * @type {number}
 */
export
const TriggerType_verticalServiceCode: TriggerType = TriggerType.verticalServiceCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verticalServiceCode
 * @constant
 * @type {number}
 */
export
const verticalServiceCode: TriggerType = TriggerType.verticalServiceCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedAccess
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedAccess: TriggerType = TriggerType.customizedAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedAccess
 * @constant
 * @type {number}
 */
export
const customizedAccess: TriggerType = TriggerType.customizedAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedIntercom
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedIntercom: TriggerType = TriggerType.customizedIntercom; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedIntercom
 * @constant
 * @type {number}
 */
export
const customizedIntercom: TriggerType = TriggerType.customizedIntercom; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_emergencyService
 * @constant
 * @type {number}
 */
export
const TriggerType_emergencyService: TriggerType = TriggerType.emergencyService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyService
 * @constant
 * @type {number}
 */
export
const emergencyService: TriggerType = TriggerType.emergencyService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_aFR
 * @constant
 * @type {number}
 */
export
const TriggerType_aFR: TriggerType = TriggerType.aFR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aFR
 * @constant
 * @type {number}
 */
export
const aFR: TriggerType = TriggerType.aFR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const TriggerType_sharedIOTrunk: TriggerType = TriggerType.sharedIOTrunk; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const sharedIOTrunk: TriggerType = TriggerType.sharedIOTrunk; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_offHookDelay
 * @constant
 * @type {number}
 */
export
const TriggerType_offHookDelay: TriggerType = TriggerType.offHookDelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary offHookDelay
 * @constant
 * @type {number}
 */
export
const offHookDelay: TriggerType = TriggerType.offHookDelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_channelSetupPRI
 * @constant
 * @type {number}
 */
export
const TriggerType_channelSetupPRI: TriggerType = TriggerType.channelSetupPRI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelSetupPRI
 * @constant
 * @type {number}
 */
export
const channelSetupPRI: TriggerType = TriggerType.channelSetupPRI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tNoAnswer: TriggerType = TriggerType.tNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer: TriggerType = TriggerType.tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_tBusy: TriggerType = TriggerType.tBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy: TriggerType = TriggerType.tBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_oCalledPartyBusy: TriggerType = TriggerType.oCalledPartyBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy: TriggerType = TriggerType.oCalledPartyBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oNoAnswer: TriggerType = TriggerType.oNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer: TriggerType = TriggerType.oNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_originationAttemptAuthorized: TriggerType = TriggerType.originationAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const originationAttemptAuthorized: TriggerType = TriggerType.originationAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oAnswer: TriggerType = TriggerType.oAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer: TriggerType = TriggerType.oAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_oDisconnect: TriggerType = TriggerType.oDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect: TriggerType = TriggerType.oDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_termAttemptAuthorized: TriggerType = TriggerType.termAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized: TriggerType = TriggerType.termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tAnswer: TriggerType = TriggerType.tAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer: TriggerType = TriggerType.tAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_tDisconnect: TriggerType = TriggerType.tDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect: TriggerType = TriggerType.tDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TriggerType: $.ASN1Decoder<TriggerType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerType (el: _Element): TriggerType {
    if (!_cached_decoder_for_TriggerType) { _cached_decoder_for_TriggerType = $._decodeEnumerated; }
    return _cached_decoder_for_TriggerType(el);
}

let _cached_encoder_for_TriggerType: $.ASN1Encoder<TriggerType> | null = null;

/**
 * @summary Encodes a(n) TriggerType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerType, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerType (value: TriggerType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerType) { _cached_encoder_for_TriggerType = $._encodeEnumerated; }
    return _cached_encoder_for_TriggerType(value, elGetter);
}


/* eslint-enable */
