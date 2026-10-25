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
const TriggerType = _enum_for_TriggerType;

/**
 * @summary TriggerType_featureActivation
 * @constant
 * @type {number}
 */
export
const TriggerType_featureActivation = TriggerType.featureActivation satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureActivation
 * @constant
 * @type {number}
 */
export
const featureActivation = TriggerType.featureActivation satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_verticalServiceCode
 * @constant
 * @type {number}
 */
export
const TriggerType_verticalServiceCode = TriggerType.verticalServiceCode satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verticalServiceCode
 * @constant
 * @type {number}
 */
export
const verticalServiceCode = TriggerType.verticalServiceCode satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedAccess
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedAccess = TriggerType.customizedAccess satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedAccess
 * @constant
 * @type {number}
 */
export
const customizedAccess = TriggerType.customizedAccess satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_customizedIntercom
 * @constant
 * @type {number}
 */
export
const TriggerType_customizedIntercom = TriggerType.customizedIntercom satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customizedIntercom
 * @constant
 * @type {number}
 */
export
const customizedIntercom = TriggerType.customizedIntercom satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_emergencyService
 * @constant
 * @type {number}
 */
export
const TriggerType_emergencyService = TriggerType.emergencyService satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyService
 * @constant
 * @type {number}
 */
export
const emergencyService = TriggerType.emergencyService satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_aFR
 * @constant
 * @type {number}
 */
export
const TriggerType_aFR = TriggerType.aFR satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aFR
 * @constant
 * @type {number}
 */
export
const aFR = TriggerType.aFR satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const TriggerType_sharedIOTrunk = TriggerType.sharedIOTrunk satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sharedIOTrunk
 * @constant
 * @type {number}
 */
export
const sharedIOTrunk = TriggerType.sharedIOTrunk satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_offHookDelay
 * @constant
 * @type {number}
 */
export
const TriggerType_offHookDelay = TriggerType.offHookDelay satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary offHookDelay
 * @constant
 * @type {number}
 */
export
const offHookDelay = TriggerType.offHookDelay satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_channelSetupPRI
 * @constant
 * @type {number}
 */
export
const TriggerType_channelSetupPRI = TriggerType.channelSetupPRI satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelSetupPRI
 * @constant
 * @type {number}
 */
export
const channelSetupPRI = TriggerType.channelSetupPRI satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tNoAnswer = TriggerType.tNoAnswer satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer = TriggerType.tNoAnswer satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_tBusy = TriggerType.tBusy satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy = TriggerType.tBusy satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const TriggerType_oCalledPartyBusy = TriggerType.oCalledPartyBusy satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy = TriggerType.oCalledPartyBusy satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oNoAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oNoAnswer = TriggerType.oNoAnswer satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer = TriggerType.oNoAnswer satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_originationAttemptAuthorized = TriggerType.originationAttemptAuthorized satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originationAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const originationAttemptAuthorized = TriggerType.originationAttemptAuthorized satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_oAnswer = TriggerType.oAnswer satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer = TriggerType.oAnswer satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_oDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_oDisconnect = TriggerType.oDisconnect satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect = TriggerType.oDisconnect satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const TriggerType_termAttemptAuthorized = TriggerType.termAttemptAuthorized satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized = TriggerType.termAttemptAuthorized satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tAnswer
 * @constant
 * @type {number}
 */
export
const TriggerType_tAnswer = TriggerType.tAnswer satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer = TriggerType.tAnswer satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerType_tDisconnect
 * @constant
 * @type {number}
 */
export
const TriggerType_tDisconnect = TriggerType.tDisconnect satisfies TriggerType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect = TriggerType.tDisconnect satisfies TriggerType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TriggerType = $._decodeEnumerated;
export const _encode_TriggerType = $._encodeEnumerated;


/* eslint-enable */
