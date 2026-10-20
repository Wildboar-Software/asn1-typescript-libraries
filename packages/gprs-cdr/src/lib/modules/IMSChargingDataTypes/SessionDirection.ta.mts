/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionDirection
 * @description
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
 * @constant
 * @type {number}
 */
export
const SessionDirection_inbound: SessionDirection = SessionDirection.inbound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inbound
 * @constant
 * @type {number}
 */
export
const inbound: SessionDirection = SessionDirection.inbound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_outbound
 * @constant
 * @type {number}
 */
export
const SessionDirection_outbound: SessionDirection = SessionDirection.outbound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outbound
 * @constant
 * @type {number}
 */
export
const outbound: SessionDirection = SessionDirection.outbound; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SessionDirection: $.ASN1Decoder<SessionDirection> = $._decodeEnumerated;

export
const _encode_SessionDirection: $.ASN1Encoder<SessionDirection> = $._encodeEnumerated;

/* eslint-enable */
