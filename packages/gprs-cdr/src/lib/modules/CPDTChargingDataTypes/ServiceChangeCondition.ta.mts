/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceChangeCondition
 * @description
 *
 * Reason a NIDD submission container was added to the CDR. The same
 * bits are encoded on `NIDDsubmission.serviceChangeCondition`. More
 * than one bit may be set. Which reasons each CPCN records:
 *
 * - SCEF: response receipt, response sending, submission timeout
 *   (clause 5.2.3.2.2).
 * - IWK-SCEF: response receipt, response sending (clause 5.2.3.3.2).
 * - MME: response receipt, delivery to the UE, submission timeout,
 *   and delivery-from-UE error (clause 5.2.3.4.2).
 *
 * Table 6.4.1 binds this field to the Change-Condition AVP of the NIDD
 * submission. That AVP is not the PS-Information Change-Condition that
 * becomes `CPCauseForRecClosing`.
 *
 * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1 and table 6.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeCondition  ::=  BIT STRING {
 *    nIDDsubmissionResponseReceipt  (0 ), 
 *    nIDDsubmissionResponseSending  (1 ), 
 *    nIDDdeliveryToUE  (2 ), 
 *    nIDDdeliveryFromUEerror  (3 ), 
 *    nIDDsubmissionTimeout  (4 )}
 * ```
 */
export
type ServiceChangeCondition = BIT_STRING;

/**
 * @summary ServiceChangeCondition_nIDDsubmissionResponseReceipt
 * @description
 *
 * Bit 0. On receipt of a NIDD submit response to a NIDD submit
 * request, the container is added. Recorded by the SCEF, the
 * IWK-SCEF, and the MME.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.2, 5.2.3.3.2, and 5.2.3.4.2.
 *
 * @constant
 */
export
const ServiceChangeCondition_nIDDsubmissionResponseReceipt: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseReceipt
 * @description
 *
 * Bit 0. See `ServiceChangeCondition_nIDDsubmissionResponseReceipt`.
 *
 * @constant
 */
export
const nIDDsubmissionResponseReceipt: number = ServiceChangeCondition_nIDDsubmissionResponseReceipt; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDsubmissionResponseSending
 * @description
 *
 * Bit 1. On sending a NIDD submit response to a received NIDD submit
 * request, the container is added. Recorded by the SCEF and the
 * IWK-SCEF.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.2 and 5.2.3.3.2.
 *
 * @constant
 */
export
const ServiceChangeCondition_nIDDsubmissionResponseSending: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseSending
 * @description
 *
 * Bit 1. See `ServiceChangeCondition_nIDDsubmissionResponseSending`.
 *
 * @constant
 */
export
const nIDDsubmissionResponseSending: number = ServiceChangeCondition_nIDDsubmissionResponseSending; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDdeliveryToUE
 * @description
 *
 * Bit 2. On NIDD delivery to the UE, the container is added. Recorded
 * by the MME.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.3.4.2.
 *
 * @constant
 */
export
const ServiceChangeCondition_nIDDdeliveryToUE: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryToUE
 * @description
 *
 * Bit 2. See `ServiceChangeCondition_nIDDdeliveryToUE`.
 *
 * @constant
 */
export
const nIDDdeliveryToUE: number = ServiceChangeCondition_nIDDdeliveryToUE; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDdeliveryFromUEerror
 * @description
 *
 * Bit 3. Error cases on receipt of NIDD delivery from the UE.
 * Recorded by the MME. TS 32.253 does not define the error cases.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.3.4.2.
 *
 * @constant
 */
export
const ServiceChangeCondition_nIDDdeliveryFromUEerror: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryFromUEerror
 * @description
 *
 * Bit 3. See `ServiceChangeCondition_nIDDdeliveryFromUEerror`.
 *
 * @constant
 */
export
const nIDDdeliveryFromUEerror: number = ServiceChangeCondition_nIDDdeliveryFromUEerror; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDsubmissionTimeout
 * @description
 *
 * Bit 4. The container is added when a timer expires because no NIDD
 * submit response arrived for a NIDD submit request. Recorded by the
 * SCEF and the MME.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.2 and 5.2.3.4.2.
 *
 * @constant
 */
export
const ServiceChangeCondition_nIDDsubmissionTimeout: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionTimeout
 * @description
 *
 * Bit 4. See `ServiceChangeCondition_nIDDsubmissionTimeout`.
 *
 * @constant
 */
export
const nIDDsubmissionTimeout: number = ServiceChangeCondition_nIDDsubmissionTimeout; /* SHORT_NAMED_BIT */

export
const _decode_ServiceChangeCondition: $.ASN1Decoder<ServiceChangeCondition> = $._decodeBitString;

export
const _encode_ServiceChangeCondition: $.ASN1Encoder<ServiceChangeCondition> = $._encodeBitString;

/* eslint-enable */
