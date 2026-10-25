/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionDirection
 * @description
 *
 * This field indicates whether the NNI is used for an inbound or outbound
 * service request on the control plane in case of interconnection and
 * roaming.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.58B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED {
 *    inbound     ( 0 ),
 *    outbound    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SessionDirection {
    inbound = 0,
    outbound = 1,
}

/**
 * @summary SessionDirection
 * @description
 *
 * This field indicates whether the NNI is used for an inbound or outbound
 * service request on the control plane in case of interconnection and
 * roaming.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.58B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED {
 *    inbound     ( 0 ),
 *    outbound    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection
 * @description
 *
 * This field indicates whether the NNI is used for an inbound or outbound
 * service request on the control plane in case of interconnection and
 * roaming.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.58B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED {
 *    inbound     ( 0 ),
 *    outbound    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection_inbound
 * @description
 *
 * The NNI carries an inbound service request (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const SessionDirection_inbound = SessionDirection.inbound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inbound
 * @description
 *
 * The NNI carries an inbound service request (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const inbound = SessionDirection.inbound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_outbound
 * @description
 *
 * The NNI carries an outbound service request (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const SessionDirection_outbound = SessionDirection.outbound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outbound
 * @description
 *
 * The NNI carries an outbound service request (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const outbound = SessionDirection.outbound; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SessionDirection: $.ASN1Decoder<SessionDirection> = $._decodeEnumerated;

export
const _encode_SessionDirection: $.ASN1Encoder<SessionDirection> = $._encodeEnumerated;

/* eslint-enable */
