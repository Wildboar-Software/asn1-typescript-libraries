/* eslint-disable */
import {
    type ASN1Element as _Element,
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
const TriggerType: typeof _enum_for_TriggerType = _enum_for_TriggerType;

/**
 * @summary TriggerType_featureActivation
 * @constant
 * @type {number}
 */
export
const TriggerType_featureActivation: _enum_for_TriggerType.featureActivation = TriggerType.featureActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureActivation
 * @constant
 * @type {number}
 */
export
const featureActivation: _enum_for_TriggerType.featureActivation = TriggerType.featureActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_verticalServiceCode
 * @constant
 * @type {number}
 */
export
const TriggerType_verticalServiceCode: _enum_for_TriggerType.verticalServiceCode = TriggerType.verticalServiceCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verticalServiceCode
 * @constant
 * @type {number}
 */
export
const verticalServiceCode: _enum_for_TriggerType.verticalServiceCode = TriggerType.verticalServiceCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedAccess
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedAccess: _enum_for_TriggerType.customizedAccess = TriggerType.customizedAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedAccess
 * @constant
 * @type {number}
 */
export
const customizedAccess: _enum_for_TriggerType.customizedAccess = TriggerType.customizedAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedIntercom
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedIntercom: _enum_for_TriggerType.customizedIntercom = TriggerType.customizedIntercom; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedIntercom
 * @constant
 * @type {number}
 */
export
const customizedIntercom: _enum_for_TriggerType.customizedIntercom = TriggerType.customizedIntercom; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_emergencyService
 * @constant
 * @type {number}
 */
export
const TriggerType_emergencyService: _enum_for_TriggerType.emergencyService = TriggerType.emergencyService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyService
 * @constant
 * @type {number}
 */
export
const emergencyService: _enum_for_TriggerType.emergencyService = TriggerType.emergencyService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_aFR
 * @constant
 * @type {number}
 */
export
const TriggerType_aFR: _enum_for_TriggerType.aFR = TriggerType.aFR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aFR
 * @constant
 * @type {number}
 */
export
const aFR: _enum_for_TriggerType.aFR = TriggerType.aFR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const TriggerType_sharedIOTrunk: _enum_for_TriggerType.sharedIOTrunk = TriggerType.sharedIOTrunk; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const sharedIOTrunk: _enum_for_TriggerType.sharedIOTrunk = TriggerType.sharedIOTrunk; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_offHookDelay
 * @constant
 * @type {number}
 */
export
const TriggerType_offHookDelay: _enum_for_TriggerType.offHookDelay = TriggerType.offHookDelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary offHookDelay
 * @constant
 * @type {number}
 */
export
const offHookDelay: _enum_for_TriggerType.offHookDelay = TriggerType.offHookDelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_channelSetupPRI
 * @constant
 * @type {number}
 */
export
const TriggerType_channelSetupPRI: _enum_for_TriggerType.channelSetupPRI = TriggerType.channelSetupPRI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelSetupPRI
 * @constant
 * @type {number}
 */
export
const channelSetupPRI: _enum_for_TriggerType.channelSetupPRI = TriggerType.channelSetupPRI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tNoAnswer: _enum_for_TriggerType.tNoAnswer = TriggerType.tNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer: _enum_for_TriggerType.tNoAnswer = TriggerType.tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_tBusy: _enum_for_TriggerType.tBusy = TriggerType.tBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy: _enum_for_TriggerType.tBusy = TriggerType.tBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_oCalledPartyBusy: _enum_for_TriggerType.oCalledPartyBusy = TriggerType.oCalledPartyBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy: _enum_for_TriggerType.oCalledPartyBusy = TriggerType.oCalledPartyBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oNoAnswer: _enum_for_TriggerType.oNoAnswer = TriggerType.oNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer: _enum_for_TriggerType.oNoAnswer = TriggerType.oNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_originationAttemptAuthorized: _enum_for_TriggerType.originationAttemptAuthorized = TriggerType.originationAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const originationAttemptAuthorized: _enum_for_TriggerType.originationAttemptAuthorized = TriggerType.originationAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oAnswer: _enum_for_TriggerType.oAnswer = TriggerType.oAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer: _enum_for_TriggerType.oAnswer = TriggerType.oAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_oDisconnect: _enum_for_TriggerType.oDisconnect = TriggerType.oDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect: _enum_for_TriggerType.oDisconnect = TriggerType.oDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_termAttemptAuthorized: _enum_for_TriggerType.termAttemptAuthorized = TriggerType.termAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized: _enum_for_TriggerType.termAttemptAuthorized = TriggerType.termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tAnswer: _enum_for_TriggerType.tAnswer = TriggerType.tAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer: _enum_for_TriggerType.tAnswer = TriggerType.tAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_tDisconnect: _enum_for_TriggerType.tDisconnect = TriggerType.tDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect: _enum_for_TriggerType.tDisconnect = TriggerType.tDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TriggerType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_TriggerType: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
