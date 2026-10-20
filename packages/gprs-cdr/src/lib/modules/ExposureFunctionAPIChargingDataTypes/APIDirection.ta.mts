/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APIDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APIDirection  ::=  ENUMERATED {
 *    invocation      ( 0 ),
 *    notification    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_APIDirection {
    invocation = 0,
    notification = 1,
}

/**
 * @summary APIDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APIDirection  ::=  ENUMERATED {
 *    invocation      ( 0 ),
 *    notification    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type APIDirection = _enum_for_APIDirection;

/**
 * @summary APIDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APIDirection  ::=  ENUMERATED {
 *    invocation      ( 0 ),
 *    notification    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const APIDirection = _enum_for_APIDirection;

/**
 * @summary APIDirection_invocation
 * @constant
 * @type {number}
 */
export
const APIDirection_invocation: APIDirection = APIDirection.invocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invocation
 * @constant
 * @type {number}
 */
export
const invocation: APIDirection = APIDirection.invocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APIDirection_notification
 * @constant
 * @type {number}
 */
export
const APIDirection_notification: APIDirection = APIDirection.notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification
 * @constant
 * @type {number}
 */
export
const notification: APIDirection = APIDirection.notification; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_APIDirection: $.ASN1Decoder<APIDirection> = $._decodeEnumerated;

export
const _encode_APIDirection: $.ASN1Encoder<APIDirection> = $._encodeEnumerated;

/* eslint-enable */
