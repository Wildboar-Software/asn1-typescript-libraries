/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParameterName
 * @description
 * 
 * Name of a service parameter that GET-PARAMETER may read. Table 3-11 defines
 * the RAF parameters. Annex A2.1 also assigns numbers used by other SLE
 * services. Section 3 does not define those other names.
 * 
 * CCSDS 911.1-B-5, section 3.10, table 3-11, and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterName                       ::=       INTEGER
 * { acquisitionSequenceLength                 (201)
 * , apidList                                  (2)
 * , bitLockRequired                           (3)
 * , blockingTimeoutPeriod                     (0)
 * , blockingUsage                             (1)
 * , bufferSize                                (4)
 * , clcwGlobalVcId                            (202)
 * , clcwPhysicalChannel                       (203)
 * , copCntrFramesRepetition                   (300)
 * , deliveryMode                              (6)
 * , directiveInvocation                       (7)
 * , directiveInvocationOnline                 (108)
 * , expectedDirectiveIdentification           (8)
 * , expectedEventInvocationIdentification     (9)
 * , expectedSlduIdentification                (10)
 * , fopSlidingWindow                          (11)
 * , fopState                                  (12)
 * , latencyLimit                              (15)
 * , mapList                                   (16)
 * , mapMuxControl                             (17)
 * , mapMuxScheme                              (18)
 * , maximumFrameLength                        (19)
 * , maximumPacketLength                       (20)
 * , maximumSlduLength                         (21)
 * , minimumDelayTime                          (204)
 * , minReportingCycle                         (301)
 * , modulationFrequency                       (22)
 * , modulationIndex                           (23)
 * , notificationMode                          (205)
 * , permittedControlWordTypeSet               (101)
 * , permittedFrameQuality                     (302)
 * , permittedGvcidSet                         (24)
 * , permittedTcVcidSet                        (102)
 * , permittedTransmissionMode                 (107)
 * , permittedUpdateModeSet                    (103)
 * , plop1IdleSequenceLength                   (206)
 * , plopInEffect                              (25)
 * , protocolAbortMode                         (207)
 * , reportingCycle                            (26)
 * , requestedControlWordType                  (104)
 * , requestedFrameQuality                     (27)
 * , requestedGvcid                            (28)
 * , requestedTcVcid                           (105)
 * , requestedUpdateMode                       (106)
 * , returnTimeoutPeriod                       (29)
 * , rfAvailable                               (30)
 * , rfAvailableRequired                       (31)
 * , segmentHeader                             (32)
 * , sequCntrFramesRepetition                  (303)
 * , subcarrierToBitRateRatio                  (34)
 * , throwEventOperation                       (304)
 * , timeoutType                               (35)
 * , timerInitial                              (36)
 * , transmissionLimit                         (37)
 * , transmitterFrameSequenceNumber            (38)
 * , vcMuxControl                              (39)
 * , vcMuxScheme                               (40)
 * , virtualChannel                            (41)
 * }
 * ```
 */
export
type ParameterName = INTEGER;

/**
 * @summary ParameterName_acquisitionSequenceLength
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_acquisitionSequenceLength: 201 = 201 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_acquisitionSequenceLength
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const acquisitionSequenceLength: 201 = ParameterName_acquisitionSequenceLength; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_apidList
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_apidList: 2 = 2 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_apidList
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const apidList: 2 = ParameterName_apidList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_bitLockRequired
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_bitLockRequired: 3 = 3 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_bitLockRequired
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const bitLockRequired: 3 = ParameterName_bitLockRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_blockingTimeoutPeriod
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_blockingTimeoutPeriod: 0 = 0 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_blockingTimeoutPeriod
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const blockingTimeoutPeriod: 0 = ParameterName_blockingTimeoutPeriod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_blockingUsage
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_blockingUsage: 1 = 1 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_blockingUsage
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const blockingUsage: 1 = ParameterName_blockingUsage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_bufferSize
 * @description
 * 
 * Transfer-buffer size for this RAF instance: the number of RAF-TRANSFER-DATA
 * and RAF-SYNC-NOTIFY invocations the transfer buffer can hold. Service
 * management sets it. Annex A2.5 returns the value as that invocation count.
 * 
 * CCSDS 911.1-B-5, table 3-11, section 3.1.9, and annex A2.5.
 * @constant
 * @type {number}
 */
export
const ParameterName_bufferSize: 4 = 4 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_bufferSize
 * @description
 * 
 * How many transfer-data and sync-notify invocations the RAF transfer buffer
 * holds (CCSDS 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const bufferSize: 4 = ParameterName_bufferSize; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_clcwGlobalVcId
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_clcwGlobalVcId: 202 = 202 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_clcwGlobalVcId
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const clcwGlobalVcId: 202 = ParameterName_clcwGlobalVcId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_clcwPhysicalChannel
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_clcwPhysicalChannel: 203 = 203 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_clcwPhysicalChannel
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const clcwPhysicalChannel: 203 = ParameterName_clcwPhysicalChannel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_copCntrFramesRepetition
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_copCntrFramesRepetition: 300 = 300 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_copCntrFramesRepetition
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const copCntrFramesRepetition: 300 = ParameterName_copCntrFramesRepetition; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_deliveryMode
 * @description
 * 
 * Delivery mode of this RAF instance, set by service management. The value is
 * timely online, complete online, or offline.
 * 
 * CCSDS 911.1-B-5, table 3-11 and section 3.1.9.
 * @constant
 * @type {number}
 */
export
const ParameterName_deliveryMode: 6 = 6 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_deliveryMode
 * @description
 * 
 * RAF delivery mode set by service management (CCSDS 911.1-B-5, table 3-11 and
 * section 3.1.9).
 * @constant
 * @type {number}
 */
export
const deliveryMode: 6 = ParameterName_deliveryMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_directiveInvocation
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_directiveInvocation: 7 = 7 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_directiveInvocation
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const directiveInvocation: 7 = ParameterName_directiveInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_directiveInvocationOnline
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_directiveInvocationOnline: 108 = 108 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_directiveInvocationOnline
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const directiveInvocationOnline: 108 = ParameterName_directiveInvocationOnline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_expectedDirectiveIdentification
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_expectedDirectiveIdentification: 8 = 8 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_expectedDirectiveIdentification
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const expectedDirectiveIdentification: 8 = ParameterName_expectedDirectiveIdentification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_expectedEventInvocationIdentification
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_expectedEventInvocationIdentification: 9 = 9 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_expectedEventInvocationIdentification
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const expectedEventInvocationIdentification: 9 = ParameterName_expectedEventInvocationIdentification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_expectedSlduIdentification
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_expectedSlduIdentification: 10 = 10 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_expectedSlduIdentification
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const expectedSlduIdentification: 10 = ParameterName_expectedSlduIdentification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_fopSlidingWindow
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_fopSlidingWindow: 11 = 11 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_fopSlidingWindow
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const fopSlidingWindow: 11 = ParameterName_fopSlidingWindow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_fopState
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_fopState: 12 = 12 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_fopState
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const fopState: 12 = ParameterName_fopState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_latencyLimit
 * @description
 * 
 * Maximum online delivery latency, in seconds: the maximum delay from
 * acquisition of a frame until the RAF-TRANSFER-DATA PDU is delivered to the
 * user. The value is null when the delivery mode is offline. Annex A2.5 returns
 * an online integer in seconds or a null offline alternative.
 * 
 * CCSDS 911.1-B-5, table 3-11, section 3.1.9.1, and annex A2.5.
 * @constant
 * @type {number}
 */
export
const ParameterName_latencyLimit: 15 = 15 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_latencyLimit
 * @description
 * 
 * Online delivery latency limit in seconds; null when offline (CCSDS 911.1-B-5,
 * table 3-11).
 * @constant
 * @type {number}
 */
export
const latencyLimit: 15 = ParameterName_latencyLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_mapList
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_mapList: 16 = 16 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_mapList
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const mapList: 16 = ParameterName_mapList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_mapMuxControl
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_mapMuxControl: 17 = 17 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_mapMuxControl
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const mapMuxControl: 17 = ParameterName_mapMuxControl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_mapMuxScheme
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_mapMuxScheme: 18 = 18 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_mapMuxScheme
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const mapMuxScheme: 18 = ParameterName_mapMuxScheme; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_maximumFrameLength
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_maximumFrameLength: 19 = 19 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_maximumFrameLength
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const maximumFrameLength: 19 = ParameterName_maximumFrameLength; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_maximumPacketLength
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_maximumPacketLength: 20 = 20 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_maximumPacketLength
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const maximumPacketLength: 20 = ParameterName_maximumPacketLength; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_maximumSlduLength
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_maximumSlduLength: 21 = 21 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_maximumSlduLength
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const maximumSlduLength: 21 = ParameterName_maximumSlduLength; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_minimumDelayTime
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_minimumDelayTime: 204 = 204 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_minimumDelayTime
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const minimumDelayTime: 204 = ParameterName_minimumDelayTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_minReportingCycle
 * @description
 * 
 * Minimum reporting cycle, in seconds, that the user may request in
 * SCHEDULE-STATUS-REPORT. Service management sets it. Annex A2.5 constrains the
 * returned value to 1 through 600.
 * 
 * CCSDS 911.1-B-5, table 3-11 and annex A2.5.
 * @constant
 * @type {number}
 */
export
const ParameterName_minReportingCycle: 301 = 301 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_minReportingCycle
 * @description
 * 
 * Minimum status-report period, in seconds, the user may request (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const minReportingCycle: 301 = ParameterName_minReportingCycle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_modulationFrequency
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_modulationFrequency: 22 = 22 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_modulationFrequency
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const modulationFrequency: 22 = ParameterName_modulationFrequency; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_modulationIndex
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_modulationIndex: 23 = 23 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_modulationIndex
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const modulationIndex: 23 = ParameterName_modulationIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_notificationMode
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_notificationMode: 205 = 205 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_notificationMode
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const notificationMode: 205 = ParameterName_notificationMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedControlWordTypeSet
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_permittedControlWordTypeSet: 101 = 101 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedControlWordTypeSet
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedControlWordTypeSet: 101 = ParameterName_permittedControlWordTypeSet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedFrameQuality
 * @description
 * 
 * Frame-quality criteria the user may select for delivery. The set contains at
 * least one of 'good frames only', 'erred frames only', and 'all frames'.
 * 
 * CCSDS 911.1-B-5, table 3-11.
 * @constant
 * @type {number}
 */
export
const ParameterName_permittedFrameQuality: 302 = 302 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedFrameQuality
 * @description
 * 
 * Frame-quality criteria the RAF user may select (CCSDS 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedFrameQuality: 302 = ParameterName_permittedFrameQuality; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedGvcidSet
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_permittedGvcidSet: 24 = 24 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedGvcidSet
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedGvcidSet: 24 = ParameterName_permittedGvcidSet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedTcVcidSet
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_permittedTcVcidSet: 102 = 102 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedTcVcidSet
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedTcVcidSet: 102 = ParameterName_permittedTcVcidSet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedTransmissionMode
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_permittedTransmissionMode: 107 = 107 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedTransmissionMode
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedTransmissionMode: 107 = ParameterName_permittedTransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedUpdateModeSet
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_permittedUpdateModeSet: 103 = 103 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedUpdateModeSet
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedUpdateModeSet: 103 = ParameterName_permittedUpdateModeSet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_plop1IdleSequenceLength
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_plop1IdleSequenceLength: 206 = 206 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_plop1IdleSequenceLength
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const plop1IdleSequenceLength: 206 = ParameterName_plop1IdleSequenceLength; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_plopInEffect
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_plopInEffect: 25 = 25 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_plopInEffect
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const plopInEffect: 25 = ParameterName_plopInEffect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_protocolAbortMode
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_protocolAbortMode: 207 = 207 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_protocolAbortMode
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const protocolAbortMode: 207 = ParameterName_protocolAbortMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_reportingCycle
 * @description
 * 
 * Current status-report cycle. The value is null when cyclic reporting is off,
 * which is also the value until a successful SCHEDULE-STATUS-REPORT enables it.
 * Otherwise it is the seconds between successive STATUS-REPORT invocations.
 * 
 * CCSDS 911.1-B-5, table 3-11 and section 3.8.
 * @constant
 * @type {number}
 */
export
const ParameterName_reportingCycle: 26 = 26 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_reportingCycle
 * @description
 * 
 * Seconds between status reports, or null when cyclic reporting is off (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const reportingCycle: 26 = ParameterName_reportingCycle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedControlWordType
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_requestedControlWordType: 104 = 104 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedControlWordType
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const requestedControlWordType: 104 = ParameterName_requestedControlWordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedFrameQuality
 * @description
 * 
 * Frame-quality criterion, set by START, that selects which frames are
 * delivered. Until a successful START, the value is the first element of the
 * permitted-frame-quality set.
 * 
 * CCSDS 911.1-B-5, table 3-11 and section 3.4.2.7.
 * @constant
 * @type {number}
 */
export
const ParameterName_requestedFrameQuality: 27 = 27 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedFrameQuality
 * @description
 * 
 * Frame quality START uses to select frames (CCSDS 911.1-B-5, table 3-11 and
 * section 3.4.2.7).
 * @constant
 * @type {number}
 */
export
const requestedFrameQuality: 27 = ParameterName_requestedFrameQuality; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedGvcid
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_requestedGvcid: 28 = 28 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedGvcid
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const requestedGvcid: 28 = ParameterName_requestedGvcid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedTcVcid
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_requestedTcVcid: 105 = 105 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedTcVcid
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const requestedTcVcid: 105 = ParameterName_requestedTcVcid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedUpdateMode
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_requestedUpdateMode: 106 = 106 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_requestedUpdateMode
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const requestedUpdateMode: 106 = ParameterName_requestedUpdateMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_returnTimeoutPeriod
 * @description
 * 
 * Maximum time, in seconds, from invocation of a confirmed operation until the
 * invoker receives the return. If the return is missing, the invoker
 * PEER-ABORTs with `returnTimeout`. Annex A2.5 measures the value in seconds,
 * from 1 through 600.
 * 
 * CCSDS 911.1-B-5, table 3-11, section 4.1.3, and annex A2.5.
 * @constant
 * @type {number}
 */
export
const ParameterName_returnTimeoutPeriod: 29 = 29 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_returnTimeoutPeriod
 * @description
 * 
 * Seconds allowed for a confirmed-operation return before PEER-ABORT
 * `returnTimeout` (CCSDS 911.1-B-5, section 4.1.3).
 * @constant
 * @type {number}
 */
export
const returnTimeoutPeriod: 29 = ParameterName_returnTimeoutPeriod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_rfAvailable
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_rfAvailable: 30 = 30 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_rfAvailable
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const rfAvailable: 30 = ParameterName_rfAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_rfAvailableRequired
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_rfAvailableRequired: 31 = 31 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_rfAvailableRequired
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const rfAvailableRequired: 31 = ParameterName_rfAvailableRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_segmentHeader
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_segmentHeader: 32 = 32 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_segmentHeader
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const segmentHeader: 32 = ParameterName_segmentHeader; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_sequCntrFramesRepetition
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_sequCntrFramesRepetition: 303 = 303 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_sequCntrFramesRepetition
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const sequCntrFramesRepetition: 303 = ParameterName_sequCntrFramesRepetition; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_subcarrierToBitRateRatio
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_subcarrierToBitRateRatio: 34 = 34 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_subcarrierToBitRateRatio
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const subcarrierToBitRateRatio: 34 = ParameterName_subcarrierToBitRateRatio; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_throwEventOperation
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_throwEventOperation: 304 = 304 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_throwEventOperation
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const throwEventOperation: 304 = ParameterName_throwEventOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_timeoutType
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_timeoutType: 35 = 35 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_timeoutType
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const timeoutType: 35 = ParameterName_timeoutType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_timerInitial
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_timerInitial: 36 = 36 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_timerInitial
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const timerInitial: 36 = ParameterName_timerInitial; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_transmissionLimit
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_transmissionLimit: 37 = 37 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_transmissionLimit
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const transmissionLimit: 37 = ParameterName_transmissionLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_transmitterFrameSequenceNumber
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_transmitterFrameSequenceNumber: 38 = 38 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_transmitterFrameSequenceNumber
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const transmitterFrameSequenceNumber: 38 = ParameterName_transmitterFrameSequenceNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_vcMuxControl
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_vcMuxControl: 39 = 39 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_vcMuxControl
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const vcMuxControl: 39 = ParameterName_vcMuxControl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_vcMuxScheme
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_vcMuxScheme: 40 = 40 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_vcMuxScheme
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const vcMuxScheme: 40 = ParameterName_vcMuxScheme; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_virtualChannel
 * @description
 * 
 * Annex A2.1 assigns this number. Table 3-11 lists the RAF parameters that
 * section 3 defines. This name is not among them, and section 3 does not define
 * it.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.10.
 * @constant
 * @type {number}
 */
export
const ParameterName_virtualChannel: 41 = 41 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_virtualChannel
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define it (CCSDS
 * 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const virtualChannel: 41 = ParameterName_virtualChannel; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterName: $.ASN1Decoder<ParameterName> = $._decodeInteger;
export const _encode_ParameterName: $.ASN1Encoder<ParameterName> = $._encodeInteger;


/* eslint-enable */
