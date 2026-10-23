/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RadioResourcesIndicator
 * @description
 *
 * Which radio resources carried this ProSe Direct Communication:
 * operator-provided resources or configured resources. The UE reports the
 * indicator with transmitted and received volume when configured to do so.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3, 5.1.2.4, and table 6.1.3.4.2.
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
const RadioResourcesIndicator_operatorProvided: RadioResourcesIndicator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RadioResourcesIndicator_operatorProvided
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
const operatorProvided: RadioResourcesIndicator = RadioResourcesIndicator_operatorProvided; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RadioResourcesIndicator_configured
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
const RadioResourcesIndicator_configured: RadioResourcesIndicator = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RadioResourcesIndicator_configured
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
const configured: RadioResourcesIndicator = RadioResourcesIndicator_configured; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RadioResourcesIndicator: $.ASN1Decoder<RadioResourcesIndicator> = $._decodeInteger;

export
const _encode_RadioResourcesIndicator: $.ASN1Encoder<RadioResourcesIndicator> = $._encodeInteger;

/* eslint-enable */
