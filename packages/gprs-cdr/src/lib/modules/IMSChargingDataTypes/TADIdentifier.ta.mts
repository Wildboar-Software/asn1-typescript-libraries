/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TADIdentifier
 * @description
 *
 * This field indicates the type of access network (CS or PS) through which
 * the session shall be terminated.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TADIdentifier  ::=  ENUMERATED {
 *    cS          ( 0 ),
 *    pS          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TADIdentifier {
    cS = 0,
    pS = 1,
}

/**
 * @summary TADIdentifier
 * @description
 *
 * This field indicates the type of access network (CS or PS) through which
 * the session shall be terminated.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TADIdentifier  ::=  ENUMERATED {
 *    cS          ( 0 ),
 *    pS          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TADIdentifier = _enum_for_TADIdentifier;

/**
 * @summary TADIdentifier
 * @description
 *
 * This field indicates the type of access network (CS or PS) through which
 * the session shall be terminated.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TADIdentifier  ::=  ENUMERATED {
 *    cS          ( 0 ),
 *    pS          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TADIdentifier = _enum_for_TADIdentifier;

/**
 * @summary TADIdentifier_cS
 * @description
 *
 * Terminate the session through the circuit-switched access network
 * (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const TADIdentifier_cS = TADIdentifier.cS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cS
 * @description
 *
 * Terminate the session through the circuit-switched access network
 * (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const cS = TADIdentifier.cS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TADIdentifier_pS
 * @description
 *
 * Terminate the session through the packet-switched access network (clause
 * 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const TADIdentifier_pS = TADIdentifier.pS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pS
 * @description
 *
 * Terminate the session through the packet-switched access network (clause
 * 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const pS = TADIdentifier.pS; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TADIdentifier: $.ASN1Decoder<TADIdentifier> = $._decodeEnumerated;

export
const _encode_TADIdentifier: $.ASN1Encoder<TADIdentifier> = $._encodeEnumerated;

/* eslint-enable */
