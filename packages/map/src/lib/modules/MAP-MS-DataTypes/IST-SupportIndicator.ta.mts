/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IST_SupportIndicator {
    basicISTSupported = 0,
    istCommandSupported = 1,
}

/**
 * @summary IST_SupportIndicator
 * @description
 *
 * Degree of IST functionality supported by the VMSC or GMSC: basic IST, or IST
 * command service (also terminate all calls for the subscriber). Received
 * values greater than 1 shall be mapped to `istCommandSupported`. (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.69 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IST-SupportIndicator  ::=   ENUMERATED {
 *     basicISTSupported    (0),
 *     istCommandSupported    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type IST_SupportIndicator = _enum_for_IST_SupportIndicator | ENUMERATED;

/**
 * @summary IST_SupportIndicator_basicISTSupported
 * @description
 *
 * Basic IST functionality. (3GPP TS 29.002 V19.1.0 clause 7.6.3.69)
 *
 * @constant
 * @type {number}
 */
export
const IST_SupportIndicator_basicISTSupported: IST_SupportIndicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicISTSupported
 * @description
 *
 * Basic IST functionality. (3GPP TS 29.002 V19.1.0 clause 7.6.3.69)
 *
 * @constant
 * @type {number}
 */
export
const basicISTSupported: IST_SupportIndicator = IST_SupportIndicator_basicISTSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IST_SupportIndicator_istCommandSupported
 * @description
 *
 * IST command service in addition to basic IST, including terminating all calls
 * for the identified subscriber. Received values > 1 map to this. (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.69 and 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const IST_SupportIndicator_istCommandSupported: IST_SupportIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary istCommandSupported
 * @description
 *
 * IST command service in addition to basic IST, including terminating all calls
 * for the identified subscriber. Received values > 1 map to this. (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.69 and 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const istCommandSupported: IST_SupportIndicator = IST_SupportIndicator_istCommandSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) IST_SupportIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IST_SupportIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) IST_SupportIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IST_SupportIndicator, encoded as an ASN.1 Element.
 */
export const _encode_IST_SupportIndicator = $._encodeEnumerated;


/* eslint-enable */
