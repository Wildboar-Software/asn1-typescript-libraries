/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSCauseForRecClosing
 * @description
 *
 * Reason an MBMS BM-SC CDR was released. On the S-BMSC-CDR and the
 * C-BMSC-CDR the same integers are embedded as
 * `causeForRecClosing`. The CDR field is bound from the
 * Change-Condition AVP. `diagnostics` may carry a more detailed
 * reason for release of the MBMS bearer.
 *
 * Both records close on service deactivation and on Charging Data
 * Request [Stop]. Partial records also close for OAM&P reasons.
 * Thresholds are defined per charging-characteristics profile.
 * Clause 5.2.3.1.3 lists the S-BMSC-CDR reasons. Clause 5.2.3.2.3
 * lists the C-BMSC-CDR reasons, which add a change of downstream
 * nodes, the MBMS service area, and the access indicator, and which
 * do not list the maximum number of charging-condition changes.
 * Service area and access indicator have no named value here.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3,
 * tables 6.1.3.1.1 and 6.1.3.2.1, and table 6.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSCauseForRecClosing  ::=  INTEGER {
 *    normalRelease                 ( 0 ),
 *    abnormalRelease               ( 4 ),
 *    volumeLimit                   ( 16 ),
 *    timeLimit                     ( 17 ),
 *    maxChangeCond                 ( 19 ),
 *    managementIntervention        ( 20 ),
 *    listofDownstreamNodeChange    ( 59 )}
 * ```
 */
export
type MBMSCauseForRecClosing = INTEGER;

/**
 * @summary MBMSCauseForRecClosing_normalRelease
 * @description
 *
 * Service deactivation other than abnormal release. For an
 * S-BMSC-CDR, clause 5.2.3.1.3 lists UE-initiated deactivation and
 * termination of the MBMS user service. For a C-BMSC-CDR, clause
 * 5.2.3.2.3 lists MBMS Session Stop and termination of the MBMS
 * user service.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_normalRelease: MBMSCauseForRecClosing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_normalRelease
 * @description
 *
 * Service deactivation other than abnormal release. For an
 * S-BMSC-CDR, clause 5.2.3.1.3 lists UE-initiated deactivation and
 * termination of the MBMS user service. For a C-BMSC-CDR, clause
 * 5.2.3.2.3 lists MBMS Session Stop and termination of the MBMS
 * user service.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const normalRelease: MBMSCauseForRecClosing = MBMSCauseForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_abnormalRelease
 * @description
 *
 * Any abnormal release. Both the S-BMSC-CDR and the C-BMSC-CDR
 * close on abnormal release as part of service deactivation.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_abnormalRelease: MBMSCauseForRecClosing = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_abnormalRelease
 * @description
 *
 * Any abnormal release. Both the S-BMSC-CDR and the C-BMSC-CDR
 * close on abnormal release as part of service deactivation.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.1.3 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const abnormalRelease: MBMSCauseForRecClosing = MBMSCauseForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_volumeLimit
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
const MBMSCauseForRecClosing_volumeLimit: MBMSCauseForRecClosing = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_volumeLimit
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
const volumeLimit: MBMSCauseForRecClosing = MBMSCauseForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_timeLimit
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
const MBMSCauseForRecClosing_timeLimit: MBMSCauseForRecClosing = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_timeLimit
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
const timeLimit: MBMSCauseForRecClosing = MBMSCauseForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_maxChangeCond
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
const MBMSCauseForRecClosing_maxChangeCond: MBMSCauseForRecClosing = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_maxChangeCond
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
const maxChangeCond: MBMSCauseForRecClosing = MBMSCauseForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_managementIntervention
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
const MBMSCauseForRecClosing_managementIntervention: MBMSCauseForRecClosing = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_managementIntervention
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
const managementIntervention: MBMSCauseForRecClosing = MBMSCauseForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_listofDownstreamNodeChange
 * @description
 *
 * Partial-record closure because the list of downstream nodes
 * changed. Listed for the C-BMSC-CDR, whose contents can change as
 * packet-switched nodes register and deregister to the MBMS bearer
 * context. Not listed for the S-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.2.1 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_listofDownstreamNodeChange: MBMSCauseForRecClosing = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_listofDownstreamNodeChange
 * @description
 *
 * Partial-record closure because the list of downstream nodes
 * changed. Listed for the C-BMSC-CDR, whose contents can change as
 * packet-switched nodes register and deregister to the MBMS bearer
 * context. Not listed for the S-BMSC-CDR.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3.2.1 and 5.2.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange: MBMSCauseForRecClosing = MBMSCauseForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MBMSCauseForRecClosing: $.ASN1Decoder<MBMSCauseForRecClosing> = $._decodeInteger;

export
const _encode_MBMSCauseForRecClosing: $.ASN1Encoder<MBMSCauseForRecClosing> = $._encodeInteger;

/* eslint-enable */
