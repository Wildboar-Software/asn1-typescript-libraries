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
const ParameterName_acquisitionSequenceLength = 201 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const acquisitionSequenceLength = ParameterName_acquisitionSequenceLength satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_apidList = 2 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const apidList = ParameterName_apidList satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_bitLockRequired = 3 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const bitLockRequired = ParameterName_bitLockRequired satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_blockingTimeoutPeriod = 0 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const blockingTimeoutPeriod = ParameterName_blockingTimeoutPeriod satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_blockingUsage = 1 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const blockingUsage = ParameterName_blockingUsage satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_bufferSize = 4 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const bufferSize = ParameterName_bufferSize satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_clcwGlobalVcId = 202 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const clcwGlobalVcId = ParameterName_clcwGlobalVcId satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_clcwPhysicalChannel = 203 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const clcwPhysicalChannel = ParameterName_clcwPhysicalChannel satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_copCntrFramesRepetition = 300 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const copCntrFramesRepetition = ParameterName_copCntrFramesRepetition satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_deliveryMode = 6 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const deliveryMode = ParameterName_deliveryMode satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_directiveInvocation = 7 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const directiveInvocation = ParameterName_directiveInvocation satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_directiveInvocationOnline = 108 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const directiveInvocationOnline = ParameterName_directiveInvocationOnline satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_expectedDirectiveIdentification = 8 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const expectedDirectiveIdentification = ParameterName_expectedDirectiveIdentification satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_expectedEventInvocationIdentification = 9 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const expectedEventInvocationIdentification = ParameterName_expectedEventInvocationIdentification satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_expectedSlduIdentification = 10 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const expectedSlduIdentification = ParameterName_expectedSlduIdentification satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_fopSlidingWindow = 11 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const fopSlidingWindow = ParameterName_fopSlidingWindow satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_fopState = 12 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const fopState = ParameterName_fopState satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_latencyLimit = 15 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const latencyLimit = ParameterName_latencyLimit satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_mapList = 16 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const mapList = ParameterName_mapList satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_mapMuxControl = 17 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const mapMuxControl = ParameterName_mapMuxControl satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_mapMuxScheme = 18 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const mapMuxScheme = ParameterName_mapMuxScheme satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_maximumFrameLength = 19 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const maximumFrameLength = ParameterName_maximumFrameLength satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_maximumPacketLength = 20 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const maximumPacketLength = ParameterName_maximumPacketLength satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_maximumSlduLength = 21 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const maximumSlduLength = ParameterName_maximumSlduLength satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_minimumDelayTime = 204 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const minimumDelayTime = ParameterName_minimumDelayTime satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_minReportingCycle = 301 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const minReportingCycle = ParameterName_minReportingCycle satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_modulationFrequency = 22 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const modulationFrequency = ParameterName_modulationFrequency satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_modulationIndex = 23 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const modulationIndex = ParameterName_modulationIndex satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_notificationMode = 205 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const notificationMode = ParameterName_notificationMode satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedControlWordTypeSet = 101 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedControlWordTypeSet = ParameterName_permittedControlWordTypeSet satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedFrameQuality = 302 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedFrameQuality
 * @description
 * 
 * Frame-quality criteria the RAF user may select (CCSDS 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedFrameQuality = ParameterName_permittedFrameQuality satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedGvcidSet = 24 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedGvcidSet = ParameterName_permittedGvcidSet satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedTcVcidSet = 102 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedTcVcidSet = ParameterName_permittedTcVcidSet satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedTransmissionMode = 107 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedTransmissionMode = ParameterName_permittedTransmissionMode satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedUpdateModeSet = 103 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedUpdateModeSet = ParameterName_permittedUpdateModeSet satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_plop1IdleSequenceLength = 206 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const plop1IdleSequenceLength = ParameterName_plop1IdleSequenceLength satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_plopInEffect = 25 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const plopInEffect = ParameterName_plopInEffect satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_protocolAbortMode = 207 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const protocolAbortMode = ParameterName_protocolAbortMode satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_reportingCycle = 26 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const reportingCycle = ParameterName_reportingCycle satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedControlWordType = 104 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedControlWordType = ParameterName_requestedControlWordType satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedFrameQuality = 27 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedFrameQuality = ParameterName_requestedFrameQuality satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedGvcid = 28 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedGvcid = ParameterName_requestedGvcid satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedTcVcid = 105 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedTcVcid = ParameterName_requestedTcVcid satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedUpdateMode = 106 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedUpdateMode = ParameterName_requestedUpdateMode satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_returnTimeoutPeriod = 29 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const returnTimeoutPeriod = ParameterName_returnTimeoutPeriod satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_rfAvailable = 30 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const rfAvailable = ParameterName_rfAvailable satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_rfAvailableRequired = 31 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const rfAvailableRequired = ParameterName_rfAvailableRequired satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_segmentHeader = 32 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const segmentHeader = ParameterName_segmentHeader satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_sequCntrFramesRepetition = 303 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const sequCntrFramesRepetition = ParameterName_sequCntrFramesRepetition satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_subcarrierToBitRateRatio = 34 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const subcarrierToBitRateRatio = ParameterName_subcarrierToBitRateRatio satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_throwEventOperation = 304 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const throwEventOperation = ParameterName_throwEventOperation satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_timeoutType = 35 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const timeoutType = ParameterName_timeoutType satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_timerInitial = 36 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const timerInitial = ParameterName_timerInitial satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_transmissionLimit = 37 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const transmissionLimit = ParameterName_transmissionLimit satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_transmitterFrameSequenceNumber = 38 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const transmitterFrameSequenceNumber = ParameterName_transmitterFrameSequenceNumber satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_vcMuxControl = 39 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const vcMuxControl = ParameterName_vcMuxControl satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_vcMuxScheme = 40 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const vcMuxScheme = ParameterName_vcMuxScheme satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_virtualChannel = 41 satisfies ParameterName; /* LONG_NAMED_INTEGER_VALUE */

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
const virtualChannel = ParameterName_virtualChannel satisfies ParameterName; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterName: $.ASN1Decoder<ParameterName> = $._decodeInteger;
export const _encode_ParameterName: $.ASN1Encoder<ParameterName> = $._encodeInteger;


/* eslint-enable */
