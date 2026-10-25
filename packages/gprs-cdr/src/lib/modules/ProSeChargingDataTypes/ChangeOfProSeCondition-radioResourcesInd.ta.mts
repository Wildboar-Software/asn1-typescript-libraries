/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeOfProSeCondition_radioResourcesInd
 * @description
 *
 * Which radio resources were used for the ProSe Direct Communication in this
 * container. Same values as `RadioResourcesIndicator`.
 *
 * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2 and clause 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfProSeCondition-radioResourcesInd ::= INTEGER {
 *    operatorProvided    ( 1 ),
 *    configured          ( 2 )
 * }
 * ```
 */
export
type ChangeOfProSeCondition_radioResourcesInd = INTEGER;

/**
 * @summary ChangeOfProSeCondition_radioResourcesInd_operatorProvided
 * @description
 *
 * Operator-provided radio resources. Clause 5.1.2.3 describes these as the
 * resources used while the UE is in E-UTRAN coverage. Integer value 1.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const ChangeOfProSeCondition_radioResourcesInd_operatorProvided: 1 = 1 satisfies ChangeOfProSeCondition_radioResourcesInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ChangeOfProSeCondition_radioResourcesInd_operatorProvided
 * @description
 *
 * Operator-provided radio resources. Clause 5.1.2.3 describes these as the
 * resources used while the UE is in E-UTRAN coverage. Integer value 1.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const operatorProvided: 1 = ChangeOfProSeCondition_radioResourcesInd_operatorProvided; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ChangeOfProSeCondition_radioResourcesInd_configured
 * @description
 *
 * Configured radio resources. Integer value 2.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const ChangeOfProSeCondition_radioResourcesInd_configured: 2 = 2 satisfies ChangeOfProSeCondition_radioResourcesInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ChangeOfProSeCondition_radioResourcesInd_configured
 * @description
 *
 * Configured radio resources. Integer value 2.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const configured: 2 = ChangeOfProSeCondition_radioResourcesInd_configured; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ChangeOfProSeCondition_radioResourcesInd: $.ASN1Decoder<ChangeOfProSeCondition_radioResourcesInd> = $._decodeInteger;

export
const _encode_ChangeOfProSeCondition_radioResourcesInd: $.ASN1Encoder<ChangeOfProSeCondition_radioResourcesInd> = $._encodeInteger;

/* eslint-enable */
