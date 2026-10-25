/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOCallRecord_levelOfCAMELService
 * @description
 *
 * Complexity of the CAMEL feature used on an MOC. Present only if CAMEL is
 * applied. On a CPH MOC the category is operator-provisionable mandatory
 * rather than operator-provisionable conditional. Clause 5.1.3.2 says this
 * indicator covers one call leg, including every CAMEL service on that leg.
 * TS 32.250 does not define the named bits `basic`,
 * `callDurationSupervision`, and `onlineCharging`.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.2 and 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord-levelOfCAMELService ::= BIT STRING {
 *    basic  (0 ),
 *    callDurationSupervision  (1 ),
 *    onlineCharging  (2 )
 * }
 * ```
 */
export
type MOCallRecord_levelOfCAMELService = BIT_STRING;

/**
 * @summary MOCallRecord_levelOfCAMELService_basic
 * @constant
 */
export
const MOCallRecord_levelOfCAMELService_basic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary basic
 * @constant
 */
export
const basic: number = MOCallRecord_levelOfCAMELService_basic; /* SHORT_NAMED_BIT */

/**
 * @summary MOCallRecord_levelOfCAMELService_callDurationSupervision
 * @constant
 */
export
const MOCallRecord_levelOfCAMELService_callDurationSupervision: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callDurationSupervision
 * @constant
 */
export
const callDurationSupervision: number = MOCallRecord_levelOfCAMELService_callDurationSupervision; /* SHORT_NAMED_BIT */

/**
 * @summary MOCallRecord_levelOfCAMELService_onlineCharging
 * @constant
 */
export
const MOCallRecord_levelOfCAMELService_onlineCharging: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary onlineCharging
 * @constant
 */
export
const onlineCharging: number = MOCallRecord_levelOfCAMELService_onlineCharging; /* SHORT_NAMED_BIT */

export
const _decode_MOCallRecord_levelOfCAMELService: $.ASN1Decoder<MOCallRecord_levelOfCAMELService> = $._decodeBitString;

export
const _encode_MOCallRecord_levelOfCAMELService: $.ASN1Encoder<MOCallRecord_levelOfCAMELService> = $._encodeBitString;

/* eslint-enable */
