/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspTransferData_specific
 * @description
 * 
 * FSP-specific rejection codes for FSP-TRANSFER-DATA. Duplicate invoke-ID and
 * other reason are carried in the `common` alternative.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspTransferData-specific ::= INTEGER
 *    {  unableToProcess                     (0)
 *    ,  unableToStore                       (1)
 *    ,  packetIdentificationOutOfSequence   (2)
 *    ,  duplicatePacketIdentification       (3)
 * ,  inconsistentTimeRange                  (4)
 *    ,  invalidTime                         (5)
 *    ,  conflictingProductionTimeIntervals  (6)
 *    ,  lateSldu                            (7)
 *    ,  invalidDelayTime                    (8)
 *    ,  invalidTransmissionMode             (9)
 *    ,  invalidMap                          (10)
 *    ,  invalidNotificationRequest          (11)
 *    ,  packetTooLong                       (12)
 *    ,  unsupportedPacketVersion            (13)
 *    ,  incorrectPacketType                 (14)
 *    ,  invalidPacketApid                   (15)
 *    }
 * ```
 */
export
type DiagnosticFspTransferData_specific = INTEGER;

/**
 * @summary DiagnosticFspTransferData_specific_unableToProcess
 * @description
 * 
 * The provider cannot process Space Packets. Production status is not
 * operational, already reported as production interrupted or halted; or
 * production is operational but the provider is still blocked after an earlier
 * fault that was reported and then cleared through CLTU notifications; or the
 * instance is blocked after `slduExpired`; or production is operational but
 * temporarily suspended to process an FSP-THROW-EVENT, with no fault reported.
 * The user clears the `slduExpired` and production-interrupted blocks with
 * FSP-STOP.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_unableToProcess: DiagnosticFspTransferData_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unableToProcess
 * @description
 * 
 * The provider cannot process Space Packets (CCSDS 912.3-B-3, section
 * 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const unableToProcess: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_unableToProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unableToStore
 * @description
 * 
 * The request queue of this service instance does not have enough free octets
 * to store this Space Packet.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_unableToStore: DiagnosticFspTransferData_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unableToStore
 * @description
 * 
 * The request queue cannot store this Packet (CCSDS 912.3-B-3, section
 * 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const unableToStore: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_unableToStore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence
 * @description
 * 
 * The packet identification is not the value the provider expected: the
 * FSP-START first-packet identification on the first transfer after that start,
 * otherwise one greater than the last accepted identification. Section 3.6.2.18
 * names this condition `out of sequence`.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence: DiagnosticFspTransferData_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence
 * @description
 * 
 * The packet identification is not the expected value (CCSDS 912.3-B-3, section
 * 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const packetIdentificationOutOfSequence: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_duplicatePacketIdentification
 * @description
 * 
 * The packet identification equals that of a Packet still buffered or in
 * process for this service instance. This can occur after FSP-STOP and
 * FSP-START when the new first-packet identification allows the duplication.
 * The returned expected identification is still set as section 3.6.2.5.2
 * specifies.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.18.1 and 3.6.2.5.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_duplicatePacketIdentification: DiagnosticFspTransferData_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_duplicatePacketIdentification
 * @description
 * 
 * This identification is still in use for the instance (CCSDS 912.3-B-3,
 * section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const duplicatePacketIdentification: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_duplicatePacketIdentification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_inconsistentTimeRange
 * @description
 * 
 * The earliest production time is later than the latest production time.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_inconsistentTimeRange: DiagnosticFspTransferData_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_inconsistentTimeRange
 * @description
 * 
 * The earliest production time is later than the latest (CCSDS 912.3-B-3,
 * section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const inconsistentTimeRange: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_inconsistentTimeRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTime
 * @description
 * 
 * The production window does not overlap the times for which service production
 * is scheduled, or it does not overlap the service instance provision period.
 * Production may be scheduled to end before the provision period, so that the
 * production engine can be released while users still retrieve a final status
 * report.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidTime: DiagnosticFspTransferData_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTime
 * @description
 * 
 * The production window misses the scheduled production or provision period
 * (CCSDS 912.3-B-3, section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const invalidTime: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals
 * @description
 * 
 * The earliest or latest production time of this Packet is earlier than the
 * corresponding time of a Packet already accepted. The invocation is rejected
 * so the user can change the conflicting time to unspecified and avoid an
 * `slduExpired` exception that would discard Packets already buffered.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals: DiagnosticFspTransferData_specific = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals
 * @description
 * 
 * The production interval starts or ends before an accepted Packet
 * (CCSDS 912.3-B-3, section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const conflictingProductionTimeIntervals: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_lateSldu
 * @description
 * 
 * The latest production time is earlier than the time the provider received the
 * invocation.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_lateSldu: DiagnosticFspTransferData_specific = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_lateSldu
 * @description
 * 
 * The latest production time is already past (CCSDS 912.3-B-3, section
 * 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const lateSldu: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_lateSldu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidDelayTime
 * @description
 * 
 * The delay is outside the range supported by the configured Forward TC Space
 * Link Processing functional group.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidDelayTime: DiagnosticFspTransferData_specific = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidDelayTime
 * @description
 * 
 * The delay is outside the configured space-link range (CCSDS 912.3-B-3,
 * section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const invalidDelayTime: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidDelayTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTransmissionMode
 * @description
 * 
 * The transmission mode is not allowed for this service instance, or AD mode is
 * blocked and the request is sequence-controlled, or AD mode is not blocked and
 * the request is sequence-controlled with unblock.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.18.1 and 3.6.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidTransmissionMode: DiagnosticFspTransferData_specific = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTransmissionMode
 * @description
 * 
 * The transmission mode is not allowed in the current AD state
 * (CCSDS 912.3-B-3, section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const invalidTransmissionMode: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidTransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidMap
 * @description
 * 
 * The MAP identifier is not in the set permitted for this service instance, or
 * it is not `none` although no Segment Headers are generated.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidMap: DiagnosticFspTransferData_specific = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidMap
 * @description
 * 
 * The MAP is not permitted, or is set while Segment Headers are absent
 * (CCSDS 912.3-B-3, section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const invalidMap: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidMap; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidNotificationRequest
 * @description
 * 
 * Acknowledged notification is requested and the transmission mode is
 * expedited. Acknowledgement applies only to sequence-controlled transmission.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.18.1 and 3.6.2.14.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidNotificationRequest: DiagnosticFspTransferData_specific = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidNotificationRequest
 * @description
 * 
 * Acknowledgement was requested for an expedited Packet (CCSDS 912.3-B-3,
 * section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const invalidNotificationRequest: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidNotificationRequest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetTooLong
 * @description
 * 
 * The Space Packet exceeds the maximum Packet Data Length allowed for this
 * service instance.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1. Table 3-11 defines
 * maximum-packet-length.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_packetTooLong: DiagnosticFspTransferData_specific = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetTooLong
 * @description
 * 
 * The Packet exceeds the instance maximum Packet Data Length (CCSDS 912.3-B-3,
 * section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const packetTooLong: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_packetTooLong; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unsupportedPacketVersion
 * @description
 * 
 * The packet version is not supported by CCSDS, or CCSDS supports it and this
 * service instance does not specify it. This issue does not list the version
 * numbers.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_unsupportedPacketVersion: DiagnosticFspTransferData_specific = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unsupportedPacketVersion
 * @description
 * 
 * The packet version is unsupported or not specified for this instance
 * (CCSDS 912.3-B-3, section 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const unsupportedPacketVersion: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_unsupportedPacketVersion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_incorrectPacketType
 * @description
 * 
 * The Packet Type does not specify telecommand. This issue does not list the
 * Packet Type codes.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_incorrectPacketType: DiagnosticFspTransferData_specific = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_incorrectPacketType
 * @description
 * 
 * The Packet Type does not specify telecommand (CCSDS 912.3-B-3, section
 * 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const incorrectPacketType: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_incorrectPacketType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidPacketApid
 * @description
 * 
 * The Application Process Identifier in the Packet Primary Header is not one
 * specified for this service instance. When `apidList` is `any`, every APID is
 * accepted.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.18.1.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidPacketApid: DiagnosticFspTransferData_specific = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidPacketApid
 * @description
 * 
 * The APID is not one specified for this instance (CCSDS 912.3-B-3, section
 * 3.6.2.18.1).
 * @constant
 * @type {number}
 */
export
const invalidPacketApid: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidPacketApid; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspTransferData_specific: $.ASN1Decoder<DiagnosticFspTransferData_specific> = $._decodeInteger;
export const _encode_DiagnosticFspTransferData_specific: $.ASN1Encoder<DiagnosticFspTransferData_specific> = $._encodeInteger;


/* eslint-enable */
