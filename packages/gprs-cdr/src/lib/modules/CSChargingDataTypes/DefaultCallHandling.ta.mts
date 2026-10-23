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
 * Present only when the CAMEL call encountered default call handling. The
 * unsuffixed field is the first service. The field suffixed 2 is a second
 * service, such as a dialled service, and is present only when default call
 * handling was applied for that service. TS 32.250 does not define which
 * enumerated value continues the call and which releases it; the names are
 * `continueCall` and `releaseCall`.
 *
 * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
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
 * @description
 *
 * Default call handling is to continue the call. The CDR field is present
 * only when default call handling was applied. TS 32.250 does not define
 * this value beyond the enumerated name. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_continueCall: DefaultCallHandling = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueCall
 * @description
 *
 * Default call handling is to continue the call. The CDR field is present
 * only when default call handling was applied. TS 32.250 does not define
 * this value beyond the enumerated name. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const continueCall: DefaultCallHandling = DefaultCallHandling_continueCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultCallHandling_releaseCall
 * @description
 *
 * Default call handling is to release the call. The CDR field is present
 * only when default call handling was applied. TS 32.250 does not define
 * this value beyond the enumerated name. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_releaseCall: DefaultCallHandling = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCall
 * @description
 *
 * Default call handling is to release the call. The CDR field is present
 * only when default call handling was applied. TS 32.250 does not define
 * this value beyond the enumerated name. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.1.
 *
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
