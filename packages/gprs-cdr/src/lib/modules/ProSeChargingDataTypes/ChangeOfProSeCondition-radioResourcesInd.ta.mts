/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeOfProSeCondition_radioResourcesInd
 * @description
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
 * @constant
 * @type {number}
 */
export
const ChangeOfProSeCondition_radioResourcesInd_operatorProvided: ChangeOfProSeCondition_radioResourcesInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ChangeOfProSeCondition_radioResourcesInd_operatorProvided
 * @constant
 * @type {number}
 */
export
const operatorProvided: ChangeOfProSeCondition_radioResourcesInd = ChangeOfProSeCondition_radioResourcesInd_operatorProvided; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ChangeOfProSeCondition_radioResourcesInd_configured
 * @constant
 * @type {number}
 */
export
const ChangeOfProSeCondition_radioResourcesInd_configured: ChangeOfProSeCondition_radioResourcesInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ChangeOfProSeCondition_radioResourcesInd_configured
 * @constant
 * @type {number}
 */
export
const configured: ChangeOfProSeCondition_radioResourcesInd = ChangeOfProSeCondition_radioResourcesInd_configured; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ChangeOfProSeCondition_radioResourcesInd: $.ASN1Decoder<ChangeOfProSeCondition_radioResourcesInd> = $._decodeInteger;

export
const _encode_ChangeOfProSeCondition_radioResourcesInd: $.ASN1Encoder<ChangeOfProSeCondition_radioResourcesInd> = $._encodeInteger;

/* eslint-enable */
