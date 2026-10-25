/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartialRecordType
 * @description
 *
 * Event that caused this partial record. Clause 5.1.3.6 also closes partial
 * records for radio-link failure followed by call re-establishment, and for
 * CAMEL CPH operations on call legs. Re-establishment is recorded in
 * `causeForTerm` as `partialRecordCallReestablishment`, not as a value of
 * this type. The clause does not assign a value here to CAMEL CPH
 * operations.
 *
 * Every partial record of one connection carries the same call reference and
 * the next sequence number. The previous record's `causeForTerm` is
 * `partialRecord`. The last record carries the true termination cause.
 * Timestamps belong to the partial record, not to the whole connection: the
 * end of one record coincides with the start of the next, except across a
 * re-establishment. A partial record may repeat the unchanged fields, or it
 * may contain only the fields that identify the original record and the
 * fields that changed.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6 and 5.1.3.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordType  ::=  ENUMERATED {
 *    timeLimit                   ( 0 ),
 *    serviceChange               ( 1 ),
 *    locationChange              ( 2 ),
 *    classmarkChange             ( 3 ),
 *    aocParmChange               ( 4 ),
 *    radioChannelChange          ( 5 ),
 *    hSCSDParmChange             ( 6 ),
 *    changeOfCAMELDestination    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartialRecordType {
    timeLimit = 0,
    serviceChange = 1,
    locationChange = 2,
    classmarkChange = 3,
    aocParmChange = 4,
    radioChannelChange = 5,
    hSCSDParmChange = 6,
    changeOfCAMELDestination = 7,
}

/**
 * @summary PartialRecordType
 * @description
 *
 * Event that caused this partial record. Clause 5.1.3.6 also closes partial
 * records for radio-link failure followed by call re-establishment, and for
 * CAMEL CPH operations on call legs. Re-establishment is recorded in
 * `causeForTerm` as `partialRecordCallReestablishment`, not as a value of
 * this type. The clause does not assign a value here to CAMEL CPH
 * operations.
 *
 * Every partial record of one connection carries the same call reference and
 * the next sequence number. The previous record's `causeForTerm` is
 * `partialRecord`. The last record carries the true termination cause.
 * Timestamps belong to the partial record, not to the whole connection: the
 * end of one record coincides with the start of the next, except across a
 * re-establishment. A partial record may repeat the unchanged fields, or it
 * may contain only the fields that identify the original record and the
 * fields that changed.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6 and 5.1.3.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordType  ::=  ENUMERATED {
 *    timeLimit                   ( 0 ),
 *    serviceChange               ( 1 ),
 *    locationChange              ( 2 ),
 *    classmarkChange             ( 3 ),
 *    aocParmChange               ( 4 ),
 *    radioChannelChange          ( 5 ),
 *    hSCSDParmChange             ( 6 ),
 *    changeOfCAMELDestination    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PartialRecordType = _enum_for_PartialRecordType;

/**
 * @summary PartialRecordType
 * @description
 *
 * Event that caused this partial record. Clause 5.1.3.6 also closes partial
 * records for radio-link failure followed by call re-establishment, and for
 * CAMEL CPH operations on call legs. Re-establishment is recorded in
 * `causeForTerm` as `partialRecordCallReestablishment`, not as a value of
 * this type. The clause does not assign a value here to CAMEL CPH
 * operations.
 *
 * Every partial record of one connection carries the same call reference and
 * the next sequence number. The previous record's `causeForTerm` is
 * `partialRecord`. The last record carries the true termination cause.
 * Timestamps belong to the partial record, not to the whole connection: the
 * end of one record coincides with the start of the next, except across a
 * re-establishment. A partial record may repeat the unchanged fields, or it
 * may contain only the fields that identify the original record and the
 * fields that changed.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6 and 5.1.3.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordType  ::=  ENUMERATED {
 *    timeLimit                   ( 0 ),
 *    serviceChange               ( 1 ),
 *    locationChange              ( 2 ),
 *    classmarkChange             ( 3 ),
 *    aocParmChange               ( 4 ),
 *    radioChannelChange          ( 5 ),
 *    hSCSDParmChange             ( 6 ),
 *    changeOfCAMELDestination    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PartialRecordType = _enum_for_PartialRecordType;

/**
 * @summary PartialRecordType_timeLimit
 * @description
 *
 * Expiry of the partial-record timer. Operators generate partial records on
 * a timer so that a long call cannot stay unbilled, and so that loss of one
 * CDR loses only that interval. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_timeLimit = PartialRecordType.timeLimit satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @description
 *
 * Expiry of the partial-record timer. Operators generate partial records on
 * a timer so that a long call cannot stay unbilled, and so that loss of one
 * CDR loses only that interval. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const timeLimit = PartialRecordType.timeLimit satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_serviceChange
 * @description
 *
 * Change of basic service during the connection. 3GPP TS 32.250 V19.0.0
 * clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_serviceChange = PartialRecordType.serviceChange satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @description
 *
 * Change of basic service during the connection. 3GPP TS 32.250 V19.0.0
 * clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const serviceChange = PartialRecordType.serviceChange satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_locationChange
 * @description
 *
 * Change of location during the connection: MCC, MNC, and location area, or
 * the cell identity, or the service area code for UMTS. 3GPP TS 32.250
 * V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_locationChange = PartialRecordType.locationChange satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationChange
 * @description
 *
 * Change of location during the connection: MCC, MNC, and location area, or
 * the cell identity, or the service area code for UMTS. 3GPP TS 32.250
 * V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const locationChange = PartialRecordType.locationChange satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_classmarkChange
 * @description
 *
 * Change of MS classmark during the connection. 3GPP TS 32.250 V19.0.0
 * clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_classmarkChange = PartialRecordType.classmarkChange satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary classmarkChange
 * @description
 *
 * Change of MS classmark during the connection. 3GPP TS 32.250 V19.0.0
 * clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const classmarkChange = PartialRecordType.classmarkChange satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_aocParmChange
 * @description
 *
 * Change of AoC parameters during the call. 3GPP TS 32.250 V19.0.0 clause
 * 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_aocParmChange = PartialRecordType.aocParmChange satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocParmChange
 * @description
 *
 * Change of AoC parameters during the call. 3GPP TS 32.250 V19.0.0 clause
 * 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const aocParmChange = PartialRecordType.aocParmChange satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_radioChannelChange
 * @description
 *
 * Change of radio channel type, full rate or half rate, during the call. The
 * CDR tables mark the radio-channel fields as not applicable to 3G. 3GPP TS
 * 32.250 V19.0.0 clauses 5.1.3.6 and 6.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_radioChannelChange = PartialRecordType.radioChannelChange satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioChannelChange
 * @description
 *
 * Change of radio channel type, full rate or half rate, during the call. The
 * CDR tables mark the radio-channel fields as not applicable to 3G. 3GPP TS
 * 32.250 V19.0.0 clauses 5.1.3.6 and 6.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const radioChannelChange = PartialRecordType.radioChannelChange satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_hSCSDParmChange
 * @description
 *
 * Change of HSCSD parameters during the call. Clause 5.1.3.6 limits this
 * trigger to GSM. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_hSCSDParmChange = PartialRecordType.hSCSDParmChange satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSCSDParmChange
 * @description
 *
 * Change of HSCSD parameters during the call. Clause 5.1.3.6 limits this
 * trigger to GSM. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const hSCSDParmChange = PartialRecordType.hSCSDParmChange satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_changeOfCAMELDestination
 * @description
 *
 * Change of the CAMEL destination, whether CAMEL controlled the change or
 * initiated it. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const PartialRecordType_changeOfCAMELDestination = PartialRecordType.changeOfCAMELDestination satisfies PartialRecordType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeOfCAMELDestination
 * @description
 *
 * Change of the CAMEL destination, whether CAMEL controlled the change or
 * initiated it. 3GPP TS 32.250 V19.0.0 clause 5.1.3.6.
 *
 * @constant
 * @type {number}
 */
export
const changeOfCAMELDestination = PartialRecordType.changeOfCAMELDestination satisfies PartialRecordType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PartialRecordType: $.ASN1Decoder<PartialRecordType> = $._decodeEnumerated;

export
const _encode_PartialRecordType: $.ASN1Encoder<PartialRecordType> = $._encodeEnumerated;

/* eslint-enable */
