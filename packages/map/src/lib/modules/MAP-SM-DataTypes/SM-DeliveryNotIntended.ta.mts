/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SM_DeliveryNotIntended {
    onlyIMSI_requested = 0,
    onlyMCC_MNC_requested = 1,
}

/**
 * @summary SM_DeliveryNotIntended
 * @description
 *
 * SRI-for-SM when delivery is not intended (3GPP TS 29.002 V19.1.0 clause
 * 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryNotIntended  ::=  ENUMERATED {
 *     onlyIMSI-requested  (0),
 *     onlyMCC-MNC-requested  (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type SM_DeliveryNotIntended = _enum_for_SM_DeliveryNotIntended | ENUMERATED;

/**
 * @summary SM_DeliveryNotIntended_onlyIMSI_requested
 * @description
 *
 * `onlyIMSI-requested (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const SM_DeliveryNotIntended_onlyIMSI_requested: SM_DeliveryNotIntended = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlyIMSI_requested
 * @description
 *
 * `onlyIMSI-requested (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const onlyIMSI_requested: SM_DeliveryNotIntended = SM_DeliveryNotIntended_onlyIMSI_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_DeliveryNotIntended_onlyMCC_MNC_requested
 * @description
 *
 * `onlyMCC-MNC-requested (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const SM_DeliveryNotIntended_onlyMCC_MNC_requested: SM_DeliveryNotIntended = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlyMCC_MNC_requested
 * @description
 *
 * `onlyMCC-MNC-requested (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const onlyMCC_MNC_requested: SM_DeliveryNotIntended = SM_DeliveryNotIntended_onlyMCC_MNC_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SM_DeliveryNotIntended
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SM_DeliveryNotIntended = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SM_DeliveryNotIntended into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_DeliveryNotIntended, encoded as an ASN.1 Element.
 */
export const _encode_SM_DeliveryNotIntended = $._encodeEnumerated;


/* eslint-enable */
