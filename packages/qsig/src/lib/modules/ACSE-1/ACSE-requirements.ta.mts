/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACSE_requirements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACSE-requirements  ::=  BIT STRING {
 *   authentication(0), application-context-negotiation(1)}
 * ```
 */
export
type ACSE_requirements = BIT_STRING;

/**
 * @summary ACSE_requirements_authentication
 * @constant
 */
export
const ACSE_requirements_authentication: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary authentication
 * @constant
 */
export
const authentication: number = ACSE_requirements_authentication; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_application_context_negotiation
 * @constant
 */
export
const ACSE_requirements_application_context_negotiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary application_context_negotiation
 * @constant
 */
export
const application_context_negotiation: number = ACSE_requirements_application_context_negotiation; /* SHORT_NAMED_BIT */

export
const _decode_ACSE_requirements: $.ASN1Decoder<ACSE_requirements> = $._decodeBitString;

export
const _encode_ACSE_requirements: $.ASN1Encoder<ACSE_requirements> = $._encodeBitString;

/* eslint-enable */
