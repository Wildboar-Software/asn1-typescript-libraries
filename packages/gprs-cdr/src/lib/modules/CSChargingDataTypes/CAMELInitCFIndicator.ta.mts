/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELInitCFIndicator
 * @description
 *
 * Whether the CAMEL server initiated call forwarding. On a forwarding MOC
 * the field is conditional and present only if CAMEL is applied. On a CPH
 * forwarding record it is operator-provisionable conditional, and it is not
 * available for GSM call forwarding. The CPH terminating-CAMEL leg tables
 * record it on the outgoing leg.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.3 and 6.1.3.27.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInitCFIndicator  ::=  ENUMERATED {
 *    noCAMELCallForwarding    ( 0 ),
 *    cAMELCallForwarding      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CAMELInitCFIndicator {
    noCAMELCallForwarding = 0,
    cAMELCallForwarding = 1,
}

/**
 * @summary CAMELInitCFIndicator
 * @description
 *
 * Whether the CAMEL server initiated call forwarding. On a forwarding MOC
 * the field is conditional and present only if CAMEL is applied. On a CPH
 * forwarding record it is operator-provisionable conditional, and it is not
 * available for GSM call forwarding. The CPH terminating-CAMEL leg tables
 * record it on the outgoing leg.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.3 and 6.1.3.27.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInitCFIndicator  ::=  ENUMERATED {
 *    noCAMELCallForwarding    ( 0 ),
 *    cAMELCallForwarding      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;

/**
 * @summary CAMELInitCFIndicator
 * @description
 *
 * Whether the CAMEL server initiated call forwarding. On a forwarding MOC
 * the field is conditional and present only if CAMEL is applied. On a CPH
 * forwarding record it is operator-provisionable conditional, and it is not
 * available for GSM call forwarding. The CPH terminating-CAMEL leg tables
 * record it on the outgoing leg.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.3 and 6.1.3.27.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInitCFIndicator  ::=  ENUMERATED {
 *    noCAMELCallForwarding    ( 0 ),
 *    cAMELCallForwarding      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;

/**
 * @summary CAMELInitCFIndicator_noCAMELCallForwarding
 * @description
 *
 * Call forwarding was not initiated by the CAMEL server. 3GPP TS 32.250
 * V19.0.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const CAMELInitCFIndicator_noCAMELCallForwarding = CAMELInitCFIndicator.noCAMELCallForwarding satisfies CAMELInitCFIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCAMELCallForwarding
 * @description
 *
 * Call forwarding was not initiated by the CAMEL server. 3GPP TS 32.250
 * V19.0.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const noCAMELCallForwarding = CAMELInitCFIndicator.noCAMELCallForwarding satisfies CAMELInitCFIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAMELInitCFIndicator_cAMELCallForwarding
 * @description
 *
 * The CAMEL server initiated call forwarding. On a non-CPH forwarding MOC
 * this field is present only if CAMEL is applied. 3GPP TS 32.250 V19.0.0
 * clauses 6.1.3.3 and 6.1.3.26.
 *
 * @constant
 * @type {number}
 */
export
const CAMELInitCFIndicator_cAMELCallForwarding = CAMELInitCFIndicator.cAMELCallForwarding satisfies CAMELInitCFIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cAMELCallForwarding
 * @description
 *
 * The CAMEL server initiated call forwarding. On a non-CPH forwarding MOC
 * this field is present only if CAMEL is applied. 3GPP TS 32.250 V19.0.0
 * clauses 6.1.3.3 and 6.1.3.26.
 *
 * @constant
 * @type {number}
 */
export
const cAMELCallForwarding = CAMELInitCFIndicator.cAMELCallForwarding satisfies CAMELInitCFIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CAMELInitCFIndicator: $.ASN1Decoder<CAMELInitCFIndicator> = $._decodeEnumerated;

export
const _encode_CAMELInitCFIndicator: $.ASN1Encoder<CAMELInitCFIndicator> = $._encodeEnumerated;

/* eslint-enable */
