/* eslint-disable */
import {
    INTEGER
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
const ParameterName_acquisitionSequenceLength: ParameterName = 201; /* LONG_NAMED_INTEGER_VALUE */

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
const acquisitionSequenceLength: ParameterName = ParameterName_acquisitionSequenceLength; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_apidList: ParameterName = 2; /* LONG_NAMED_INTEGER_VALUE */

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
const apidList: ParameterName = ParameterName_apidList; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_bitLockRequired: ParameterName = 3; /* LONG_NAMED_INTEGER_VALUE */

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
const bitLockRequired: ParameterName = ParameterName_bitLockRequired; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_blockingTimeoutPeriod: ParameterName = 0; /* LONG_NAMED_INTEGER_VALUE */

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
const blockingTimeoutPeriod: ParameterName = ParameterName_blockingTimeoutPeriod; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_blockingUsage: ParameterName = 1; /* LONG_NAMED_INTEGER_VALUE */

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
const blockingUsage: ParameterName = ParameterName_blockingUsage; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_bufferSize: ParameterName = 4; /* LONG_NAMED_INTEGER_VALUE */

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
const bufferSize: ParameterName = ParameterName_bufferSize; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_clcwGlobalVcId: ParameterName = 202; /* LONG_NAMED_INTEGER_VALUE */

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
const clcwGlobalVcId: ParameterName = ParameterName_clcwGlobalVcId; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_clcwPhysicalChannel: ParameterName = 203; /* LONG_NAMED_INTEGER_VALUE */

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
const clcwPhysicalChannel: ParameterName = ParameterName_clcwPhysicalChannel; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_copCntrFramesRepetition: ParameterName = 300; /* LONG_NAMED_INTEGER_VALUE */

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
const copCntrFramesRepetition: ParameterName = ParameterName_copCntrFramesRepetition; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_deliveryMode: ParameterName = 6; /* LONG_NAMED_INTEGER_VALUE */

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
const deliveryMode: ParameterName = ParameterName_deliveryMode; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_directiveInvocation: ParameterName = 7; /* LONG_NAMED_INTEGER_VALUE */

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
const directiveInvocation: ParameterName = ParameterName_directiveInvocation; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_directiveInvocationOnline: ParameterName = 108; /* LONG_NAMED_INTEGER_VALUE */

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
const directiveInvocationOnline: ParameterName = ParameterName_directiveInvocationOnline; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_expectedDirectiveIdentification: ParameterName = 8; /* LONG_NAMED_INTEGER_VALUE */

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
const expectedDirectiveIdentification: ParameterName = ParameterName_expectedDirectiveIdentification; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_expectedEventInvocationIdentification: ParameterName = 9; /* LONG_NAMED_INTEGER_VALUE */

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
const expectedEventInvocationIdentification: ParameterName = ParameterName_expectedEventInvocationIdentification; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_expectedSlduIdentification: ParameterName = 10; /* LONG_NAMED_INTEGER_VALUE */

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
const expectedSlduIdentification: ParameterName = ParameterName_expectedSlduIdentification; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_fopSlidingWindow: ParameterName = 11; /* LONG_NAMED_INTEGER_VALUE */

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
const fopSlidingWindow: ParameterName = ParameterName_fopSlidingWindow; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_fopState: ParameterName = 12; /* LONG_NAMED_INTEGER_VALUE */

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
const fopState: ParameterName = ParameterName_fopState; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_latencyLimit: ParameterName = 15; /* LONG_NAMED_INTEGER_VALUE */

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
const latencyLimit: ParameterName = ParameterName_latencyLimit; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_mapList: ParameterName = 16; /* LONG_NAMED_INTEGER_VALUE */

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
const mapList: ParameterName = ParameterName_mapList; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_mapMuxControl: ParameterName = 17; /* LONG_NAMED_INTEGER_VALUE */

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
const mapMuxControl: ParameterName = ParameterName_mapMuxControl; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_mapMuxScheme: ParameterName = 18; /* LONG_NAMED_INTEGER_VALUE */

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
const mapMuxScheme: ParameterName = ParameterName_mapMuxScheme; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_maximumFrameLength: ParameterName = 19; /* LONG_NAMED_INTEGER_VALUE */

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
const maximumFrameLength: ParameterName = ParameterName_maximumFrameLength; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_maximumPacketLength: ParameterName = 20; /* LONG_NAMED_INTEGER_VALUE */

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
const maximumPacketLength: ParameterName = ParameterName_maximumPacketLength; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_maximumSlduLength: ParameterName = 21; /* LONG_NAMED_INTEGER_VALUE */

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
const maximumSlduLength: ParameterName = ParameterName_maximumSlduLength; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_minimumDelayTime: ParameterName = 204; /* LONG_NAMED_INTEGER_VALUE */

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
const minimumDelayTime: ParameterName = ParameterName_minimumDelayTime; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_minReportingCycle: ParameterName = 301; /* LONG_NAMED_INTEGER_VALUE */

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
const minReportingCycle: ParameterName = ParameterName_minReportingCycle; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_modulationFrequency: ParameterName = 22; /* LONG_NAMED_INTEGER_VALUE */

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
const modulationFrequency: ParameterName = ParameterName_modulationFrequency; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_modulationIndex: ParameterName = 23; /* LONG_NAMED_INTEGER_VALUE */

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
const modulationIndex: ParameterName = ParameterName_modulationIndex; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_notificationMode: ParameterName = 205; /* LONG_NAMED_INTEGER_VALUE */

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
const notificationMode: ParameterName = ParameterName_notificationMode; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedControlWordTypeSet: ParameterName = 101; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedControlWordTypeSet: ParameterName = ParameterName_permittedControlWordTypeSet; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedFrameQuality: ParameterName = 302; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterName_permittedFrameQuality
 * @description
 * 
 * Frame-quality criteria the RAF user may select (CCSDS 911.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const permittedFrameQuality: ParameterName = ParameterName_permittedFrameQuality; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedGvcidSet: ParameterName = 24; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedGvcidSet: ParameterName = ParameterName_permittedGvcidSet; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedTcVcidSet: ParameterName = 102; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedTcVcidSet: ParameterName = ParameterName_permittedTcVcidSet; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedTransmissionMode: ParameterName = 107; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedTransmissionMode: ParameterName = ParameterName_permittedTransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_permittedUpdateModeSet: ParameterName = 103; /* LONG_NAMED_INTEGER_VALUE */

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
const permittedUpdateModeSet: ParameterName = ParameterName_permittedUpdateModeSet; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_plop1IdleSequenceLength: ParameterName = 206; /* LONG_NAMED_INTEGER_VALUE */

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
const plop1IdleSequenceLength: ParameterName = ParameterName_plop1IdleSequenceLength; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_plopInEffect: ParameterName = 25; /* LONG_NAMED_INTEGER_VALUE */

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
const plopInEffect: ParameterName = ParameterName_plopInEffect; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_protocolAbortMode: ParameterName = 207; /* LONG_NAMED_INTEGER_VALUE */

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
const protocolAbortMode: ParameterName = ParameterName_protocolAbortMode; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_reportingCycle: ParameterName = 26; /* LONG_NAMED_INTEGER_VALUE */

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
const reportingCycle: ParameterName = ParameterName_reportingCycle; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedControlWordType: ParameterName = 104; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedControlWordType: ParameterName = ParameterName_requestedControlWordType; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedFrameQuality: ParameterName = 27; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedFrameQuality: ParameterName = ParameterName_requestedFrameQuality; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedGvcid: ParameterName = 28; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedGvcid: ParameterName = ParameterName_requestedGvcid; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedTcVcid: ParameterName = 105; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedTcVcid: ParameterName = ParameterName_requestedTcVcid; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_requestedUpdateMode: ParameterName = 106; /* LONG_NAMED_INTEGER_VALUE */

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
const requestedUpdateMode: ParameterName = ParameterName_requestedUpdateMode; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_returnTimeoutPeriod: ParameterName = 29; /* LONG_NAMED_INTEGER_VALUE */

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
const returnTimeoutPeriod: ParameterName = ParameterName_returnTimeoutPeriod; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_rfAvailable: ParameterName = 30; /* LONG_NAMED_INTEGER_VALUE */

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
const rfAvailable: ParameterName = ParameterName_rfAvailable; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_rfAvailableRequired: ParameterName = 31; /* LONG_NAMED_INTEGER_VALUE */

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
const rfAvailableRequired: ParameterName = ParameterName_rfAvailableRequired; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_segmentHeader: ParameterName = 32; /* LONG_NAMED_INTEGER_VALUE */

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
const segmentHeader: ParameterName = ParameterName_segmentHeader; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_sequCntrFramesRepetition: ParameterName = 303; /* LONG_NAMED_INTEGER_VALUE */

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
const sequCntrFramesRepetition: ParameterName = ParameterName_sequCntrFramesRepetition; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_subcarrierToBitRateRatio: ParameterName = 34; /* LONG_NAMED_INTEGER_VALUE */

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
const subcarrierToBitRateRatio: ParameterName = ParameterName_subcarrierToBitRateRatio; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_throwEventOperation: ParameterName = 304; /* LONG_NAMED_INTEGER_VALUE */

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
const throwEventOperation: ParameterName = ParameterName_throwEventOperation; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_timeoutType: ParameterName = 35; /* LONG_NAMED_INTEGER_VALUE */

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
const timeoutType: ParameterName = ParameterName_timeoutType; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_timerInitial: ParameterName = 36; /* LONG_NAMED_INTEGER_VALUE */

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
const timerInitial: ParameterName = ParameterName_timerInitial; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_transmissionLimit: ParameterName = 37; /* LONG_NAMED_INTEGER_VALUE */

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
const transmissionLimit: ParameterName = ParameterName_transmissionLimit; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_transmitterFrameSequenceNumber: ParameterName = 38; /* LONG_NAMED_INTEGER_VALUE */

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
const transmitterFrameSequenceNumber: ParameterName = ParameterName_transmitterFrameSequenceNumber; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_vcMuxControl: ParameterName = 39; /* LONG_NAMED_INTEGER_VALUE */

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
const vcMuxControl: ParameterName = ParameterName_vcMuxControl; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_vcMuxScheme: ParameterName = 40; /* LONG_NAMED_INTEGER_VALUE */

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
const vcMuxScheme: ParameterName = ParameterName_vcMuxScheme; /* SHORT_NAMED_INTEGER_VALUE */

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
const ParameterName_virtualChannel: ParameterName = 41; /* LONG_NAMED_INTEGER_VALUE */

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
const virtualChannel: ParameterName = ParameterName_virtualChannel; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterName: $.ASN1Decoder<ParameterName> = $._decodeInteger;
export const _encode_ParameterName: $.ASN1Encoder<ParameterName> = $._encodeInteger;


/* eslint-enable */
