/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition
 * @description
 *
 * ProSe-specific reason this transmission or reception data container was
 * closed. Same bits as `ServiceChangeCondition`. Table 6.1.3.4.2 gives a cell
 * change, going out of coverage, and coming back to coverage as examples.
 *
 * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2 and clause 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfProSeCondition-serviceChangeCondition ::= BIT STRING {
 *    pLMNchange  (0 ),
 *    coverageStatusChange  (1 ),
 *    locationChange  (2 )
 * }
 * ```
 */
export
type ChangeOfProSeCondition_serviceChangeCondition = BIT_STRING;

/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition_pLMNchange
 * @description
 *
 * PLMN change. Table 6.1.3.4.2's examples of a container closure do not name a
 * PLMN change; this bit is the ASN.1 name for that condition.
 *
 * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
 *
 * @constant
 */
export
const ChangeOfProSeCondition_serviceChangeCondition_pLMNchange: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pLMNchange
 * @description
 *
 * PLMN change. Table 6.1.3.4.2's examples of a container closure do not name a
 * PLMN change; this bit is the ASN.1 name for that condition.
 *
 * @constant
 */
export
const pLMNchange: number = ChangeOfProSeCondition_serviceChangeCondition_pLMNchange; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition_coverageStatusChange
 * @description
 *
 * The UE's E-UTRAN coverage status changed. Table 6.1.3.4.2 gives going out of
 * coverage and coming back to coverage as reasons for closing the container.
 *
 * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
 *
 * @constant
 */
export
const ChangeOfProSeCondition_serviceChangeCondition_coverageStatusChange: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary coverageStatusChange
 * @description
 *
 * The UE's E-UTRAN coverage status changed. Table 6.1.3.4.2 gives going out of
 * coverage and coming back to coverage as reasons for closing the container.
 *
 * @constant
 */
export
const coverageStatusChange: number = ChangeOfProSeCondition_serviceChangeCondition_coverageStatusChange; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition_locationChange
 * @description
 *
 * The UE's location changed. Table 6.1.3.4.2 gives a cell change as a reason
 * for closing the container.
 *
 * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
 *
 * @constant
 */
export
const ChangeOfProSeCondition_serviceChangeCondition_locationChange: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary locationChange
 * @description
 *
 * The UE's location changed. Table 6.1.3.4.2 gives a cell change as a reason
 * for closing the container.
 *
 * @constant
 */
export
const locationChange: number = ChangeOfProSeCondition_serviceChangeCondition_locationChange; /* SHORT_NAMED_BIT */

export
const _decode_ChangeOfProSeCondition_serviceChangeCondition: $.ASN1Decoder<ChangeOfProSeCondition_serviceChangeCondition> = $._decodeBitString;

export
const _encode_ChangeOfProSeCondition_serviceChangeCondition: $.ASN1Encoder<ChangeOfProSeCondition_serviceChangeCondition> = $._encodeBitString;

/* eslint-enable */
