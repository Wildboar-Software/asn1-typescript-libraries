/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUBBMSCRecord_causeForRecClosing
 * @description
 *
 * Reason the S-BMSC-CDR was released. Mandatory. Bound from the
 * Change-Condition AVP. `diagnostics` may carry a more detailed
 * reason for release of the MBMS bearer.
 *
 * The record closes on service deactivation (UE-initiated
 * deactivation, termination of the MBMS user service, or any
 * abnormal release) and on Charging Data Request [Stop]. OAM&P
 * partial-record reasons are data volume limit, time (duration)
 * limit, maximum number of charging-condition changes, and
 * management intervention. Thresholds are those of the charging
 * characteristics, defined per charging-characteristics profile.
 *
 * `listofDownstreamNodeChange` is in this INTEGER but is not an
 * S-BMSC-CDR closure trigger. Clause 5.2.3.2.3 lists it for the
 * C-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clause 5.2.3.1.3, table 6.1.3.1.1, and
 * table 6.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUBBMSCRecord-causeForRecClosing ::= INTEGER {
 *    normalRelease                 ( 0 ),
 *    abnormalRelease               ( 4 ),
 *    volumeLimit                   ( 16 ),
 *    timeLimit                     ( 17 ),
 *    maxChangeCond                 ( 19 ),
 *    managementIntervention        ( 20 ),
 *    listofDownstreamNodeChange    ( 59 )
 * }
 * ```
 */
export
type SUBBMSCRecord_causeForRecClosing = INTEGER;

/**
 * @summary SUBBMSCRecord_causeForRecClosing_normalRelease
 * @description
 *
 * Service deactivation other than abnormal release. Clause 5.2.3.1.3
 * lists UE-initiated deactivation and termination of the MBMS user
 * service. For a C-BMSC-CDR, clause 5.2.3.2.3 lists MBMS Session
 * Stop and termination of the MBMS user service.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_normalRelease: SUBBMSCRecord_causeForRecClosing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_normalRelease
 * @description
 *
 * Service deactivation other than abnormal release. Clause 5.2.3.1.3
 * lists UE-initiated deactivation and termination of the MBMS user
 * service. For a C-BMSC-CDR, clause 5.2.3.2.3 lists MBMS Session
 * Stop and termination of the MBMS user service.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const normalRelease: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_abnormalRelease
 * @description
 *
 * Any abnormal release of the MBMS service in the BM-SC. Listed
 * under service deactivation for both the S-BMSC-CDR and the
 * C-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_abnormalRelease: SUBBMSCRecord_causeForRecClosing = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_abnormalRelease
 * @description
 *
 * Any abnormal release of the MBMS service in the BM-SC. Listed
 * under service deactivation for both the S-BMSC-CDR and the
 * C-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const abnormalRelease: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_volumeLimit
 * @description
 *
 * Partial-record closure because the data volume limit was reached.
 * The limit is an OAM&P parameter of the charging-characteristics
 * profile.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_volumeLimit: SUBBMSCRecord_causeForRecClosing = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_volumeLimit
 * @description
 *
 * Partial-record closure because the data volume limit was reached.
 * The limit is an OAM&P parameter of the charging-characteristics
 * profile.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const volumeLimit: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_timeLimit
 * @description
 *
 * Partial-record closure because the time (duration) limit was
 * reached. The limit is an OAM&P parameter of the
 * charging-characteristics profile.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_timeLimit: SUBBMSCRecord_causeForRecClosing = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_timeLimit
 * @description
 *
 * Partial-record closure because the time (duration) limit was
 * reached. The limit is an OAM&P parameter of the
 * charging-characteristics profile.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const timeLimit: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_maxChangeCond
 * @description
 *
 * Partial-record closure because the maximum number of
 * charging-condition changes was reached. Listed for the
 * S-BMSC-CDR. Not listed for the C-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clause 5.2.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_maxChangeCond: SUBBMSCRecord_causeForRecClosing = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_maxChangeCond
 * @description
 *
 * Partial-record closure because the maximum number of
 * charging-condition changes was reached. Listed for the
 * S-BMSC-CDR. Not listed for the C-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clause 5.2.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const maxChangeCond: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_managementIntervention
 * @description
 *
 * Partial-record closure on management intervention. The trigger
 * is an OAM&P reason on both the S-BMSC-CDR and the C-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_managementIntervention: SUBBMSCRecord_causeForRecClosing = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_managementIntervention
 * @description
 *
 * Partial-record closure on management intervention. The trigger
 * is an OAM&P reason on both the S-BMSC-CDR and the C-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const managementIntervention: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @description
 *
 * Partial-record closure because the list of downstream nodes
 * changed. Listed for the C-BMSC-CDR. Not listed as an S-BMSC-CDR
 * closure trigger.
 *
 * 3GPP TS 32.273 V19.0.0 clause 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange: SUBBMSCRecord_causeForRecClosing = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @description
 *
 * Partial-record closure because the list of downstream nodes
 * changed. Listed for the C-BMSC-CDR. Not listed as an S-BMSC-CDR
 * closure trigger.
 *
 * 3GPP TS 32.273 V19.0.0 clause 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SUBBMSCRecord_causeForRecClosing: $.ASN1Decoder<SUBBMSCRecord_causeForRecClosing> = $._decodeInteger;

export
const _encode_SUBBMSCRecord_causeForRecClosing: $.ASN1Encoder<SUBBMSCRecord_causeForRecClosing> = $._encodeInteger;

/* eslint-enable */
