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
const ChangeCondition_qoSChange = ChangeCondition.qoSChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qoSChange
 * @constant
 * @type {number}
 */
export
const qoSChange = ChangeCondition.qoSChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_tariffTime
 * @constant
 * @type {number}
 */
export
const ChangeCondition_tariffTime = ChangeCondition.tariffTime satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tariffTime
 * @constant
 * @type {number}
 */
export
const tariffTime = ChangeCondition.tariffTime satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_recordClosure
 * @constant
 * @type {number}
 */
export
const ChangeCondition_recordClosure = ChangeCondition.recordClosure satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recordClosure
 * @constant
 * @type {number}
 */
export
const recordClosure = ChangeCondition.recordClosure satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_cGI_SAICHange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_cGI_SAICHange = ChangeCondition.cGI_SAICHange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cGI_SAICHange
 * @constant
 * @type {number}
 */
export
const cGI_SAICHange = ChangeCondition.cGI_SAICHange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_rAIChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_rAIChange = ChangeCondition.rAIChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rAIChange
 * @constant
 * @type {number}
 */
export
const rAIChange = ChangeCondition.rAIChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_dT_Establishment
 * @constant
 * @type {number}
 */
export
const ChangeCondition_dT_Establishment = ChangeCondition.dT_Establishment satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dT_Establishment
 * @constant
 * @type {number}
 */
export
const dT_Establishment = ChangeCondition.dT_Establishment satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_dT_Removal
 * @constant
 * @type {number}
 */
export
const ChangeCondition_dT_Removal = ChangeCondition.dT_Removal satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dT_Removal
 * @constant
 * @type {number}
 */
export
const dT_Removal = ChangeCondition.dT_Removal satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_eCGIChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_eCGIChange = ChangeCondition.eCGIChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eCGIChange
 * @constant
 * @type {number}
 */
export
const eCGIChange = ChangeCondition.eCGIChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_tAIChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_tAIChange = ChangeCondition.tAIChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAIChange
 * @constant
 * @type {number}
 */
export
const tAIChange = ChangeCondition.tAIChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_userLocationChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_userLocationChange = ChangeCondition.userLocationChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userLocationChange
 * @constant
 * @type {number}
 */
export
const userLocationChange = ChangeCondition.userLocationChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_userCSGInformationChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_userCSGInformationChange = ChangeCondition.userCSGInformationChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userCSGInformationChange
 * @constant
 * @type {number}
 */
export
const userCSGInformationChange = ChangeCondition.userCSGInformationChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_presenceInPRAChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_presenceInPRAChange = ChangeCondition.presenceInPRAChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInPRAChange
 * @constant
 * @type {number}
 */
export
const presenceInPRAChange = ChangeCondition.presenceInPRAChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_removalOfAccess
 * @constant
 * @type {number}
 */
export
const ChangeCondition_removalOfAccess = ChangeCondition.removalOfAccess satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removalOfAccess
 * @constant
 * @type {number}
 */
export
const removalOfAccess = ChangeCondition.removalOfAccess satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_unusabilityOfAccess
 * @constant
 * @type {number}
 */
export
const ChangeCondition_unusabilityOfAccess = ChangeCondition.unusabilityOfAccess satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unusabilityOfAccess
 * @constant
 * @type {number}
 */
export
const unusabilityOfAccess = ChangeCondition.unusabilityOfAccess satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_indirectChangeCondition
 * @constant
 * @type {number}
 */
export
const ChangeCondition_indirectChangeCondition = ChangeCondition.indirectChangeCondition satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indirectChangeCondition
 * @constant
 * @type {number}
 */
export
const indirectChangeCondition = ChangeCondition.indirectChangeCondition satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_userPlaneToUEChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_userPlaneToUEChange = ChangeCondition.userPlaneToUEChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userPlaneToUEChange
 * @constant
 * @type {number}
 */
export
const userPlaneToUEChange = ChangeCondition.userPlaneToUEChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_servingPLMNRateControlChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_servingPLMNRateControlChange = ChangeCondition.servingPLMNRateControlChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingPLMNRateControlChange
 * @constant
 * @type {number}
 */
export
const servingPLMNRateControlChange = ChangeCondition.servingPLMNRateControlChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_threeGPPPSDataOffStatusChange = ChangeCondition.threeGPPPSDataOffStatusChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const threeGPPPSDataOffStatusChange = ChangeCondition.threeGPPPSDataOffStatusChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_aPNRateControlChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_aPNRateControlChange = ChangeCondition.aPNRateControlChange satisfies ChangeCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aPNRateControlChange
 * @constant
 * @type {number}
 */
export
const aPNRateControlChange = ChangeCondition.aPNRateControlChange satisfies ChangeCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChangeCondition: $.ASN1Decoder<ChangeCondition> = $._decodeEnumerated;

export
const _encode_ChangeCondition: $.ASN1Encoder<ChangeCondition> = $._encodeEnumerated;

/* eslint-enable */
