/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RadioResourcesIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioResourcesIndicator  ::=  INTEGER {
 *    operatorProvided    ( 1 ),
 *    configured          ( 2 )}
 * ```
 */
export
type RadioResourcesIndicator = INTEGER;

/**
 * @summary RadioResourcesIndicator_operatorProvided
 * @constant
 * @type {number}
 */
export
const RadioResourcesIndicator_operatorProvided: RadioResourcesIndicator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RadioResourcesIndicator_operatorProvided
 * @constant
 * @type {number}
 */
export
const operatorProvided: RadioResourcesIndicator = RadioResourcesIndicator_operatorProvided; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RadioResourcesIndicator_configured
 * @constant
 * @type {number}
 */
export
const RadioResourcesIndicator_configured: RadioResourcesIndicator = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RadioResourcesIndicator_configured
 * @constant
 * @type {number}
 */
export
const configured: RadioResourcesIndicator = RadioResourcesIndicator_configured; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RadioResourcesIndicator: $.ASN1Decoder<RadioResourcesIndicator> = $._decodeInteger;

export
const _encode_RadioResourcesIndicator: $.ASN1Encoder<RadioResourcesIndicator> = $._encodeInteger;

/* eslint-enable */
