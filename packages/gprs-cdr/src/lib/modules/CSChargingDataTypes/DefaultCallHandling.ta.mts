/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DefaultCallHandling {
    continueCall = 0,
    releaseCall = 1,
}

/**
 * @summary DefaultCallHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultCallHandling  ::=  ENUMERATED {
 *    continueCall    ( 0 ),
 *    releaseCall     ( 1 ),
 *    ...  }
 * ```
 * 
 * @enum {number}
 */
export
type DefaultCallHandling = _enum_for_DefaultCallHandling | ENUMERATED;

/**
 * @summary DefaultCallHandling_continueCall
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_continueCall: DefaultCallHandling = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueCall
 * @constant
 * @type {number}
 */
export
const continueCall: DefaultCallHandling = DefaultCallHandling_continueCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultCallHandling_releaseCall
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_releaseCall: DefaultCallHandling = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCall
 * @constant
 * @type {number}
 */
export
const releaseCall: DefaultCallHandling = DefaultCallHandling_releaseCall; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DefaultCallHandling: $.ASN1Decoder<DefaultCallHandling> = $._decodeEnumerated;

export
const _encode_DefaultCallHandling: $.ASN1Encoder<DefaultCallHandling> = $._encodeEnumerated;

/* eslint-enable */
