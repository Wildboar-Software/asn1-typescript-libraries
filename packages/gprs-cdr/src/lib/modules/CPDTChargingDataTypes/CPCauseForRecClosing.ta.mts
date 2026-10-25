/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CPCauseForRecClosing
 * @description
 *
 * Reason the CPCN closed this CDR. When Rf is used, table 6.4.1 binds
 * it to the PS-Information Change-Condition AVP. `Diagnostics` may
 * carry one more detailed cause for release of the PDN connection.
 *
 * PDN connection release is normal termination or abnormal release on
 * every CPCN. On the IWK-SCEF it also includes PLMN change. On the MME
 * it also includes MME change.
 *
 * A partial-record reason also closes the CDR. If the PDN connection
 * stays active, another CDR is opened with the next record sequence
 * number. Thresholds come from the Charging Characteristics profile
 * (Annex A). Partial reasons on the SCEF, IWK-SCEF, and MME are data
 * volume limit, time limit, maximum number of NIDD submissions,
 * Serving PLMN Rate Control change, RAT type change, and management
 * intervention. The SCEF and the IWK-SCEF also use MME change. The
 * SCEF also uses APN Rate Control change and PLMN change.
 *
 * Inter-RAT mobility between NB-IoT and another RAT is not supported
 * in this release.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.1, 5.2.3.2.3, 5.2.3.3.3, and
 * 5.2.3.4.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPCauseForRecClosing  ::=  INTEGER {
 *    normalRelease                   ( 0 ), 
 *    abnormalRelease                 ( 1 ), 
 *    volumeLimit                     ( 2 ), 
 *    timeLimit                       ( 3 ), 
 *    maxNIDDsubmissions              ( 4 ), 
 *    servingNodeChange               ( 5 ), 
 *    pLMNChange                      ( 6 ), 
 *    servingPLMNRateControlChange    ( 7 ), 
 *    aPNRateControlChange            ( 8 ), 
 *    rATTypeChange                   ( 9 ), 
 *    managementIntervention          ( 10 )}
 * ```
 */
export
type CPCauseForRecClosing = INTEGER;

/**
 * @summary CPCauseForRecClosing_normalRelease
 * @description
 *
 * Termination of the PDN connection. Closes the CDR on the SCEF, the
 * IWK-SCEF, and the MME. Corresponds to "Normal Release" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.3, 5.2.3.3.3, and 5.2.3.4.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_normalRelease: 0 = 0 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_normalRelease
 * @description
 *
 * Termination of the PDN connection. Closes the CDR on the SCEF, the
 * IWK-SCEF, and the MME. Corresponds to "Normal Release" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.3, 5.2.3.3.3, and 5.2.3.4.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const normalRelease: 0 = CPCauseForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_abnormalRelease
 * @description
 *
 * Abnormal release of the PDN connection. Closes the CDR on the SCEF,
 * the IWK-SCEF, and the MME. Corresponds to "Abnormal Release" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.3, 5.2.3.3.3, and 5.2.3.4.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_abnormalRelease: 1 = 1 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_abnormalRelease
 * @description
 *
 * Abnormal release of the PDN connection. Closes the CDR on the SCEF,
 * the IWK-SCEF, and the MME. Corresponds to "Abnormal Release" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.3, 5.2.3.3.3, and 5.2.3.4.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const abnormalRelease: 1 = CPCauseForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_volumeLimit
 * @description
 *
 * Operator-configured data volume limit per PDN connection.
 * Partial-record reason on the SCEF, the IWK-SCEF, and the MME. A new
 * CDR is opened if the PDN connection stays active. Corresponds to
 * "Volume Limit" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and Annex A.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_volumeLimit: 2 = 2 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_volumeLimit
 * @description
 *
 * Operator-configured data volume limit per PDN connection.
 * Partial-record reason on the SCEF, the IWK-SCEF, and the MME. A new
 * CDR is opened if the PDN connection stays active. Corresponds to
 * "Volume Limit" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and Annex A.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const volumeLimit: 2 = CPCauseForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_timeLimit
 * @description
 *
 * Operator-configured time limit per PDN connection. Partial-record
 * reason on the SCEF, the IWK-SCEF, and the MME. A new CDR is opened
 * if the PDN connection stays active. Corresponds to "Time Limit" in
 * the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and Annex A.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_timeLimit: 3 = 3 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_timeLimit
 * @description
 *
 * Operator-configured time limit per PDN connection. Partial-record
 * reason on the SCEF, the IWK-SCEF, and the MME. A new CDR is opened
 * if the PDN connection stays active. Corresponds to "Time Limit" in
 * the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and Annex A.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const timeLimit: 3 = CPCauseForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_maxNIDDsubmissions
 * @description
 *
 * Operator-configured maximum number of NIDD submissions per PDN
 * connection. Partial-record reason on the SCEF, the IWK-SCEF, and
 * the MME. A new CDR is opened if the PDN connection stays active.
 * Corresponds to "Maximum number of NIDD submissions" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and Annex A.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_maxNIDDsubmissions: 4 = 4 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_maxNIDDsubmissions
 * @description
 *
 * Operator-configured maximum number of NIDD submissions per PDN
 * connection. Partial-record reason on the SCEF, the IWK-SCEF, and
 * the MME. A new CDR is opened if the PDN connection stays active.
 * Corresponds to "Maximum number of NIDD submissions" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and Annex A.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const maxNIDDsubmissions: 4 = CPCauseForRecClosing_maxNIDDsubmissions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingNodeChange
 * @description
 *
 * MME change. Partial-record reason on the SCEF and the IWK-SCEF; a
 * new CDR is opened there if the PDN connection stays active. On the
 * MME, MME change is a PDN-connection release, and the new MME creates
 * the CDR. Corresponds to "Serving Node Change" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1, clause 5.2.3.2.3, clause
 * 5.2.3.3.3, and clause 5.2.3.4.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_servingNodeChange: 5 = 5 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingNodeChange
 * @description
 *
 * MME change. Partial-record reason on the SCEF and the IWK-SCEF; a
 * new CDR is opened there if the PDN connection stays active. On the
 * MME, MME change is a PDN-connection release, and the new MME creates
 * the CDR. Corresponds to "Serving Node Change" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1, clause 5.2.3.2.3, clause
 * 5.2.3.3.3, and clause 5.2.3.4.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const servingNodeChange: 5 = CPCauseForRecClosing_servingNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_pLMNChange
 * @description
 *
 * PLMN change. Partial-record reason on the SCEF; a new SCEF CDR is
 * opened if the PDN connection stays active. PDN-connection release
 * on the IWK-SCEF, which opens its CDR on mobility to the new
 * IWK-SCEF. Not a listed MME closure reason. Corresponds to "PLMN
 * Change" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1, clause 5.2.3.2.3, and
 * clause 5.2.3.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_pLMNChange: 6 = 6 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_pLMNChange
 * @description
 *
 * PLMN change. Partial-record reason on the SCEF; a new SCEF CDR is
 * opened if the PDN connection stays active. PDN-connection release
 * on the IWK-SCEF, which opens its CDR on mobility to the new
 * IWK-SCEF. Not a listed MME closure reason. Corresponds to "PLMN
 * Change" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1, clause 5.2.3.2.3, and
 * clause 5.2.3.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const pLMNChange: 6 = CPCauseForRecClosing_pLMNChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingPLMNRateControlChange
 * @description
 *
 * Serving PLMN Rate Control change. Partial-record reason on the
 * SCEF, the IWK-SCEF, and the MME. A new CDR is opened if the PDN
 * connection stays active. Corresponds to "Serving PLMN Rate Control
 * Change" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_servingPLMNRateControlChange: 7 = 7 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingPLMNRateControlChange
 * @description
 *
 * Serving PLMN Rate Control change. Partial-record reason on the
 * SCEF, the IWK-SCEF, and the MME. A new CDR is opened if the PDN
 * connection stays active. Corresponds to "Serving PLMN Rate Control
 * Change" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const servingPLMNRateControlChange: 7 = CPCauseForRecClosing_servingPLMNRateControlChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_aPNRateControlChange
 * @description
 *
 * APN Rate Control change. SCEF only. Closes the SCEF CDR, and a new
 * one is opened if the PDN connection stays active. Corresponds to
 * "APN Rate Control Change" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and clause 5.2.3.2.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_aPNRateControlChange: 8 = 8 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_aPNRateControlChange
 * @description
 *
 * APN Rate Control change. SCEF only. Closes the SCEF CDR, and a new
 * one is opened if the PDN connection stays active. Corresponds to
 * "APN Rate Control Change" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and clause 5.2.3.2.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const aPNRateControlChange: 8 = CPCauseForRecClosing_aPNRateControlChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_rATTypeChange
 * @description
 *
 * RAT type change. Partial-record reason on the SCEF, the IWK-SCEF,
 * and the MME. A new CDR is opened if the PDN connection stays
 * active. Inter-RAT mobility between NB-IoT and another RAT is not
 * supported in this release. Corresponds to "RAT Change" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_rATTypeChange: 9 = 9 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_rATTypeChange
 * @description
 *
 * RAT type change. Partial-record reason on the SCEF, the IWK-SCEF,
 * and the MME. A new CDR is opened if the PDN connection stays
 * active. Inter-RAT mobility between NB-IoT and another RAT is not
 * supported in this release. Corresponds to "RAT Change" in the
 * Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const rATTypeChange: 9 = CPCauseForRecClosing_rATTypeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_managementIntervention
 * @description
 *
 * Management intervention. Partial-record reason on the SCEF, the
 * IWK-SCEF, and the MME. Clause 5.2.1 also allows management
 * intervention to force a chargeable event. Corresponds to
 * "Management Intervention" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_managementIntervention: 10 = 10 satisfies CPCauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_managementIntervention
 * @description
 *
 * Management intervention. Partial-record reason on the SCEF, the
 * IWK-SCEF, and the MME. Clause 5.2.1 also allows management
 * intervention to force a chargeable event. Corresponds to
 * "Management Intervention" in the Change-Condition AVP.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
 *
 * @constant
 * @type {number}
 */
export
const managementIntervention: 10 = CPCauseForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CPCauseForRecClosing: $.ASN1Decoder<CPCauseForRecClosing> = $._decodeInteger;

export
const _encode_CPCauseForRecClosing: $.ASN1Encoder<CPCauseForRecClosing> = $._encodeInteger;

/* eslint-enable */
