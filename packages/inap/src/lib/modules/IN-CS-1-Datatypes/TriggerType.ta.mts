/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const TriggerType = _enum_for_TriggerType;

/**
 * @summary TriggerType_featureActivation
 * @constant
 * @type {number}
 */
export
const TriggerType_featureActivation = TriggerType.featureActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureActivation
 * @constant
 * @type {number}
 */
export
const featureActivation = TriggerType.featureActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_verticalServiceCode
 * @constant
 * @type {number}
 */
export
const TriggerType_verticalServiceCode = TriggerType.verticalServiceCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verticalServiceCode
 * @constant
 * @type {number}
 */
export
const verticalServiceCode = TriggerType.verticalServiceCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedAccess
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedAccess = TriggerType.customizedAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedAccess
 * @constant
 * @type {number}
 */
export
const customizedAccess = TriggerType.customizedAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedIntercom
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedIntercom = TriggerType.customizedIntercom; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedIntercom
 * @constant
 * @type {number}
 */
export
const customizedIntercom = TriggerType.customizedIntercom; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_emergencyService
 * @constant
 * @type {number}
 */
export
const TriggerType_emergencyService = TriggerType.emergencyService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyService
 * @constant
 * @type {number}
 */
export
const emergencyService = TriggerType.emergencyService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_aFR
 * @constant
 * @type {number}
 */
export
const TriggerType_aFR = TriggerType.aFR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aFR
 * @constant
 * @type {number}
 */
export
const aFR = TriggerType.aFR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const TriggerType_sharedIOTrunk = TriggerType.sharedIOTrunk; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const sharedIOTrunk = TriggerType.sharedIOTrunk; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_offHookDelay
 * @constant
 * @type {number}
 */
export
const TriggerType_offHookDelay = TriggerType.offHookDelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary offHookDelay
 * @constant
 * @type {number}
 */
export
const offHookDelay = TriggerType.offHookDelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_channelSetupPRI
 * @constant
 * @type {number}
 */
export
const TriggerType_channelSetupPRI = TriggerType.channelSetupPRI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelSetupPRI
 * @constant
 * @type {number}
 */
export
const channelSetupPRI = TriggerType.channelSetupPRI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tNoAnswer = TriggerType.tNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer = TriggerType.tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_tBusy = TriggerType.tBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy = TriggerType.tBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_oCalledPartyBusy = TriggerType.oCalledPartyBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy = TriggerType.oCalledPartyBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oNoAnswer = TriggerType.oNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer = TriggerType.oNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_originationAttemptAuthorized = TriggerType.originationAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const originationAttemptAuthorized = TriggerType.originationAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oAnswer = TriggerType.oAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer = TriggerType.oAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_oDisconnect = TriggerType.oDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect = TriggerType.oDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_termAttemptAuthorized = TriggerType.termAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized = TriggerType.termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tAnswer = TriggerType.tAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer = TriggerType.tAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_tDisconnect = TriggerType.tDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect = TriggerType.tDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_TriggerType(el: _Element): TriggerType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case TriggerType.featureActivation: return TriggerType.featureActivation;
        case TriggerType.verticalServiceCode: return TriggerType.verticalServiceCode;
        case TriggerType.customizedAccess: return TriggerType.customizedAccess;
        case TriggerType.customizedIntercom: return TriggerType.customizedIntercom;
        case TriggerType.emergencyService: return TriggerType.emergencyService;
        case TriggerType.aFR: return TriggerType.aFR;
        case TriggerType.sharedIOTrunk: return TriggerType.sharedIOTrunk;
        case TriggerType.offHookDelay: return TriggerType.offHookDelay;
        case TriggerType.channelSetupPRI: return TriggerType.channelSetupPRI;
        case TriggerType.tNoAnswer: return TriggerType.tNoAnswer;
        case TriggerType.tBusy: return TriggerType.tBusy;
        case TriggerType.oCalledPartyBusy: return TriggerType.oCalledPartyBusy;
        case TriggerType.oNoAnswer: return TriggerType.oNoAnswer;
        case TriggerType.originationAttemptAuthorized: return TriggerType.originationAttemptAuthorized;
        case TriggerType.oAnswer: return TriggerType.oAnswer;
        case TriggerType.oDisconnect: return TriggerType.oDisconnect;
        case TriggerType.termAttemptAuthorized: return TriggerType.termAttemptAuthorized;
        case TriggerType.tAnswer: return TriggerType.tAnswer;
        case TriggerType.tDisconnect: return TriggerType.tDisconnect;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for TriggerType.",
                el,
            );
    }
}

export
const _encode_TriggerType: $.ASN1Encoder<TriggerType> = $._encodeEnumerated as $.ASN1Encoder<TriggerType>;

/* eslint-enable */
