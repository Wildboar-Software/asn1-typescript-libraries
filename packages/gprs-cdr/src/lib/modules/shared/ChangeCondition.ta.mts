/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    qoSChange                        ( 0 ),
 *    tariffTime                       ( 1 ),
 *    recordClosure                    ( 2 ),
 *    cGI-SAICHange                    ( 6 ),
 *    rAIChange                        ( 7 ),
 *    dT-Establishment                 ( 8 ),
 *    dT-Removal                       ( 9 ),
 *    eCGIChange                       ( 10 ),
 *    tAIChange                        ( 11 ),
 *    userLocationChange               ( 12 ),
 *    userCSGInformationChange         ( 13 ),
 *    presenceInPRAChange              ( 14 ),
 *    removalOfAccess                  ( 15 ),
 *    unusabilityOfAccess              ( 16 ),
 *    indirectChangeCondition          ( 17 ),
 *    userPlaneToUEChange              ( 18 ),
 *    servingPLMNRateControlChange     ( 19 ),
 *    threeGPPPSDataOffStatusChange    ( 20 ),
 *    aPNRateControlChange             ( 21 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChangeCondition {
    qoSChange = 0,
    tariffTime = 1,
    recordClosure = 2,
    cGI_SAICHange = 6,
    rAIChange = 7,
    dT_Establishment = 8,
    dT_Removal = 9,
    eCGIChange = 10,
    tAIChange = 11,
    userLocationChange = 12,
    userCSGInformationChange = 13,
    presenceInPRAChange = 14,
    removalOfAccess = 15,
    unusabilityOfAccess = 16,
    indirectChangeCondition = 17,
    userPlaneToUEChange = 18,
    servingPLMNRateControlChange = 19,
    threeGPPPSDataOffStatusChange = 20,
    aPNRateControlChange = 21,
}

/**
 * @summary ChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    qoSChange                        ( 0 ),
 *    tariffTime                       ( 1 ),
 *    recordClosure                    ( 2 ),
 *    cGI-SAICHange                    ( 6 ),
 *    rAIChange                        ( 7 ),
 *    dT-Establishment                 ( 8 ),
 *    dT-Removal                       ( 9 ),
 *    eCGIChange                       ( 10 ),
 *    tAIChange                        ( 11 ),
 *    userLocationChange               ( 12 ),
 *    userCSGInformationChange         ( 13 ),
 *    presenceInPRAChange              ( 14 ),
 *    removalOfAccess                  ( 15 ),
 *    unusabilityOfAccess              ( 16 ),
 *    indirectChangeCondition          ( 17 ),
 *    userPlaneToUEChange              ( 18 ),
 *    servingPLMNRateControlChange     ( 19 ),
 *    threeGPPPSDataOffStatusChange    ( 20 ),
 *    aPNRateControlChange             ( 21 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChangeCondition = _enum_for_ChangeCondition;

/**
 * @summary ChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    qoSChange                        ( 0 ),
 *    tariffTime                       ( 1 ),
 *    recordClosure                    ( 2 ),
 *    cGI-SAICHange                    ( 6 ),
 *    rAIChange                        ( 7 ),
 *    dT-Establishment                 ( 8 ),
 *    dT-Removal                       ( 9 ),
 *    eCGIChange                       ( 10 ),
 *    tAIChange                        ( 11 ),
 *    userLocationChange               ( 12 ),
 *    userCSGInformationChange         ( 13 ),
 *    presenceInPRAChange              ( 14 ),
 *    removalOfAccess                  ( 15 ),
 *    unusabilityOfAccess              ( 16 ),
 *    indirectChangeCondition          ( 17 ),
 *    userPlaneToUEChange              ( 18 ),
 *    servingPLMNRateControlChange     ( 19 ),
 *    threeGPPPSDataOffStatusChange    ( 20 ),
 *    aPNRateControlChange             ( 21 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChangeCondition = _enum_for_ChangeCondition;

/**
 * @summary ChangeCondition_qoSChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_qoSChange = ChangeCondition.qoSChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qoSChange
 * @constant
 * @type {number}
 */
export
const qoSChange = ChangeCondition.qoSChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_tariffTime
 * @constant
 * @type {number}
 */
export
const ChangeCondition_tariffTime = ChangeCondition.tariffTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tariffTime
 * @constant
 * @type {number}
 */
export
const tariffTime = ChangeCondition.tariffTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_recordClosure
 * @constant
 * @type {number}
 */
export
const ChangeCondition_recordClosure = ChangeCondition.recordClosure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recordClosure
 * @constant
 * @type {number}
 */
export
const recordClosure = ChangeCondition.recordClosure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_cGI_SAICHange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_cGI_SAICHange = ChangeCondition.cGI_SAICHange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cGI_SAICHange
 * @constant
 * @type {number}
 */
export
const cGI_SAICHange = ChangeCondition.cGI_SAICHange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_rAIChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_rAIChange = ChangeCondition.rAIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rAIChange
 * @constant
 * @type {number}
 */
export
const rAIChange = ChangeCondition.rAIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_dT_Establishment
 * @constant
 * @type {number}
 */
export
const ChangeCondition_dT_Establishment = ChangeCondition.dT_Establishment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dT_Establishment
 * @constant
 * @type {number}
 */
export
const dT_Establishment = ChangeCondition.dT_Establishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_dT_Removal
 * @constant
 * @type {number}
 */
export
const ChangeCondition_dT_Removal = ChangeCondition.dT_Removal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dT_Removal
 * @constant
 * @type {number}
 */
export
const dT_Removal = ChangeCondition.dT_Removal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_eCGIChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_eCGIChange = ChangeCondition.eCGIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eCGIChange
 * @constant
 * @type {number}
 */
export
const eCGIChange = ChangeCondition.eCGIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_tAIChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_tAIChange = ChangeCondition.tAIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAIChange
 * @constant
 * @type {number}
 */
export
const tAIChange = ChangeCondition.tAIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_userLocationChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_userLocationChange = ChangeCondition.userLocationChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userLocationChange
 * @constant
 * @type {number}
 */
export
const userLocationChange = ChangeCondition.userLocationChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_userCSGInformationChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_userCSGInformationChange = ChangeCondition.userCSGInformationChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userCSGInformationChange
 * @constant
 * @type {number}
 */
export
const userCSGInformationChange = ChangeCondition.userCSGInformationChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_presenceInPRAChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_presenceInPRAChange = ChangeCondition.presenceInPRAChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInPRAChange
 * @constant
 * @type {number}
 */
export
const presenceInPRAChange = ChangeCondition.presenceInPRAChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_removalOfAccess
 * @constant
 * @type {number}
 */
export
const ChangeCondition_removalOfAccess = ChangeCondition.removalOfAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removalOfAccess
 * @constant
 * @type {number}
 */
export
const removalOfAccess = ChangeCondition.removalOfAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_unusabilityOfAccess
 * @constant
 * @type {number}
 */
export
const ChangeCondition_unusabilityOfAccess = ChangeCondition.unusabilityOfAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unusabilityOfAccess
 * @constant
 * @type {number}
 */
export
const unusabilityOfAccess = ChangeCondition.unusabilityOfAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_indirectChangeCondition
 * @constant
 * @type {number}
 */
export
const ChangeCondition_indirectChangeCondition = ChangeCondition.indirectChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indirectChangeCondition
 * @constant
 * @type {number}
 */
export
const indirectChangeCondition = ChangeCondition.indirectChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_userPlaneToUEChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_userPlaneToUEChange = ChangeCondition.userPlaneToUEChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userPlaneToUEChange
 * @constant
 * @type {number}
 */
export
const userPlaneToUEChange = ChangeCondition.userPlaneToUEChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_servingPLMNRateControlChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_servingPLMNRateControlChange = ChangeCondition.servingPLMNRateControlChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingPLMNRateControlChange
 * @constant
 * @type {number}
 */
export
const servingPLMNRateControlChange = ChangeCondition.servingPLMNRateControlChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_threeGPPPSDataOffStatusChange = ChangeCondition.threeGPPPSDataOffStatusChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const threeGPPPSDataOffStatusChange = ChangeCondition.threeGPPPSDataOffStatusChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_aPNRateControlChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_aPNRateControlChange = ChangeCondition.aPNRateControlChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aPNRateControlChange
 * @constant
 * @type {number}
 */
export
const aPNRateControlChange = ChangeCondition.aPNRateControlChange; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChangeCondition: $.ASN1Decoder<ChangeCondition> = $._decodeEnumerated;

export
const _encode_ChangeCondition: $.ASN1Encoder<ChangeCondition> = $._encodeEnumerated;

/* eslint-enable */
