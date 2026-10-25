/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NIDDsubmission_serviceChangeCondition
 * @description
 *
 * Inline bit string of `NIDDsubmission.serviceChangeCondition`. The
 * bits and the CPCNs that set them are the same as
 * `ServiceChangeCondition`.
 *
 * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDDsubmission-serviceChangeCondition ::= BIT STRING {
 *    nIDDsubmissionResponseReceipt  (0 ),
 *    nIDDsubmissionResponseSending  (1 ),
 *    nIDDdeliveryToUE  (2 ),
 *    nIDDdeliveryFromUEerror  (3 ),
 *    nIDDsubmissionTimeout  (4 )
 * }
 * ```
 */
export
type NIDDsubmission_serviceChangeCondition = BIT_STRING;

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseReceipt
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
const NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseReceipt: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseReceipt
 * @description
 *
 * Bit 0. See
 * `NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseReceipt`.
 *
 * @constant
 */
export
const nIDDsubmissionResponseReceipt: number = NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseReceipt; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseSending
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
const NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseSending: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseSending
 * @description
 *
 * Bit 1. See
 * `NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseSending`.
 *
 * @constant
 */
export
const nIDDsubmissionResponseSending: number = NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseSending; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDdeliveryToUE
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
const NIDDsubmission_serviceChangeCondition_nIDDdeliveryToUE: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryToUE
 * @description
 *
 * Bit 2. See `NIDDsubmission_serviceChangeCondition_nIDDdeliveryToUE`.
 *
 * @constant
 */
export
const nIDDdeliveryToUE: number = NIDDsubmission_serviceChangeCondition_nIDDdeliveryToUE; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDdeliveryFromUEerror
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
const NIDDsubmission_serviceChangeCondition_nIDDdeliveryFromUEerror: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryFromUEerror
 * @description
 *
 * Bit 3. See
 * `NIDDsubmission_serviceChangeCondition_nIDDdeliveryFromUEerror`.
 *
 * @constant
 */
export
const nIDDdeliveryFromUEerror: number = NIDDsubmission_serviceChangeCondition_nIDDdeliveryFromUEerror; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDsubmissionTimeout
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
const NIDDsubmission_serviceChangeCondition_nIDDsubmissionTimeout: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionTimeout
 * @description
 *
 * Bit 4. See
 * `NIDDsubmission_serviceChangeCondition_nIDDsubmissionTimeout`.
 *
 * @constant
 */
export
const nIDDsubmissionTimeout: number = NIDDsubmission_serviceChangeCondition_nIDDsubmissionTimeout; /* SHORT_NAMED_BIT */

export
const _decode_NIDDsubmission_serviceChangeCondition: $.ASN1Decoder<NIDDsubmission_serviceChangeCondition> = $._decodeBitString;

export
const _encode_NIDDsubmission_serviceChangeCondition: $.ASN1Encoder<NIDDsubmission_serviceChangeCondition> = $._encodeBitString;

/* eslint-enable */
