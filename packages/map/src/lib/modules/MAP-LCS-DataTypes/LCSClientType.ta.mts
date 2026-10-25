/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LCSClientType {
    emergencyServices = 0,
    valueAddedServices = 1,
    plmnOperatorServices = 2,
    lawfulInterceptServices = 3,
}

/**
 * @summary LCSClientType
 * @description
 *
 * Unrecognized values may be ignored if privacy override is used; otherwise
 * unexpected data (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientType  ::=  ENUMERATED {
 *     emergencyServices    (0),
 *     valueAddedServices    (1),
 *     plmnOperatorServices    (2),
 *     lawfulInterceptServices    (3),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type LCSClientType = _enum_for_LCSClientType | ENUMERATED;

/**
 * @summary LCSClientType_emergencyServices
 * @description
 *
 * `emergencyServices (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCSClientType_emergencyServices = _enum_for_LCSClientType.emergencyServices satisfies LCSClientType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyServices
 * @description
 *
 * `emergencyServices (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const emergencyServices = LCSClientType_emergencyServices satisfies LCSClientType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_valueAddedServices
 * @description
 *
 * `valueAddedServices (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCSClientType_valueAddedServices = _enum_for_LCSClientType.valueAddedServices satisfies LCSClientType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary valueAddedServices
 * @description
 *
 * `valueAddedServices (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const valueAddedServices = LCSClientType_valueAddedServices satisfies LCSClientType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_plmnOperatorServices
 * @description
 *
 * `plmnOperatorServices (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCSClientType_plmnOperatorServices = _enum_for_LCSClientType.plmnOperatorServices satisfies LCSClientType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmnOperatorServices
 * @description
 *
 * `plmnOperatorServices (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const plmnOperatorServices = LCSClientType_plmnOperatorServices satisfies LCSClientType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_lawfulInterceptServices
 * @description
 *
 * `lawfulInterceptServices (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCSClientType_lawfulInterceptServices = _enum_for_LCSClientType.lawfulInterceptServices satisfies LCSClientType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lawfulInterceptServices
 * @description
 *
 * `lawfulInterceptServices (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const lawfulInterceptServices = LCSClientType_lawfulInterceptServices satisfies LCSClientType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCSClientType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LCSClientType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientType, encoded as an ASN.1 Element.
 */
export const _encode_LCSClientType = $._encodeEnumerated;


/* eslint-enable */
