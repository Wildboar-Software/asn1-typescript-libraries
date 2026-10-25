/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CONTENTBMSCRecord_causeForRecClosing
 * @description
 *
 * Reason the C-BMSC-CDR was released. Mandatory. Bound from the
 * Change-Condition AVP. `diagnostics` may carry a more detailed
 * reason for release of the MBMS bearer.
 *
 * The record closes on service deactivation (MBMS Session Stop,
 * termination of the MBMS user service, or any abnormal release)
 * and on Charging Data Request [Stop]. OAM&P partial-record reasons
 * are data volume limit, time (duration) limit, a change in the
 * list of downstream nodes, management intervention, the MBMS
 * service area, and the access indicator. Thresholds are defined
 * per charging-characteristics profile. Service area and access
 * indicator have no named value in this INTEGER.
 *
 * `maxChangeCond` is in this INTEGER but is not a C-BMSC-CDR
 * closure trigger. Clause 5.2.3.1.3 lists it for the S-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clause 5.2.3.2.3, table 6.1.3.2.1, and
 * table 6.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CONTENTBMSCRecord-causeForRecClosing ::= INTEGER {
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
type CONTENTBMSCRecord_causeForRecClosing = INTEGER;

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_normalRelease
 * @description
 *
 * Service deactivation other than abnormal release. Clause 5.2.3.2.3
 * lists MBMS Session Stop and termination of the MBMS user service.
 * For an S-BMSC-CDR, clause 5.2.3.1.3 lists UE-initiated
 * deactivation and termination of the MBMS user service.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_normalRelease = 0 satisfies CONTENTBMSCRecord_causeForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_normalRelease
 * @description
 *
 * Service deactivation other than abnormal release. Clause 5.2.3.2.3
 * lists MBMS Session Stop and termination of the MBMS user service.
 * For an S-BMSC-CDR, clause 5.2.3.1.3 lists UE-initiated
 * deactivation and termination of the MBMS user service.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const normalRelease = CONTENTBMSCRecord_causeForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_abnormalRelease
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
const CONTENTBMSCRecord_causeForRecClosing_abnormalRelease = 4 satisfies CONTENTBMSCRecord_causeForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_abnormalRelease
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
const abnormalRelease = CONTENTBMSCRecord_causeForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_volumeLimit
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
const CONTENTBMSCRecord_causeForRecClosing_volumeLimit = 16 satisfies CONTENTBMSCRecord_causeForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_volumeLimit
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
const volumeLimit = CONTENTBMSCRecord_causeForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_timeLimit
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
const CONTENTBMSCRecord_causeForRecClosing_timeLimit = 17 satisfies CONTENTBMSCRecord_causeForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_timeLimit
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
const timeLimit = CONTENTBMSCRecord_causeForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_maxChangeCond
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
const CONTENTBMSCRecord_causeForRecClosing_maxChangeCond = 19 satisfies CONTENTBMSCRecord_causeForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_maxChangeCond
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
const maxChangeCond = CONTENTBMSCRecord_causeForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_managementIntervention
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
const CONTENTBMSCRecord_causeForRecClosing_managementIntervention = 20 satisfies CONTENTBMSCRecord_causeForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_managementIntervention
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
const managementIntervention = CONTENTBMSCRecord_causeForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @description
 *
 * Partial-record closure because the list of downstream nodes
 * changed. Charging information on a C-BMSC-CDR can change as
 * packet-switched nodes register and deregister to the MBMS bearer
 * context. Not listed as an S-BMSC-CDR closure trigger.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.2.1 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange = 59 satisfies CONTENTBMSCRecord_causeForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @description
 *
 * Partial-record closure because the list of downstream nodes
 * changed. Charging information on a C-BMSC-CDR can change as
 * packet-switched nodes register and deregister to the MBMS bearer
 * context. Not listed as an S-BMSC-CDR closure trigger.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.2.1 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange = CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CONTENTBMSCRecord_causeForRecClosing: $.ASN1Decoder<CONTENTBMSCRecord_causeForRecClosing> = $._decodeInteger;

export
const _encode_CONTENTBMSCRecord_causeForRecClosing: $.ASN1Encoder<CONTENTBMSCRecord_causeForRecClosing> = $._encodeInteger;

/* eslint-enable */
