/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CancellationType {
    updateProcedure = 0,
    subscriptionWithdraw = 1,
    initialAttachProcedure = 2,
}

/**
 * @summary CancellationType
 * @description
 *
 * Reason for location cancellation, defined in 3GPP TS 23.060. Mandatory when
 * Cancel Location is sent to the SGSN or IWF. The HLR shall not send values
 * other than those listed. The HLR shall not send `initialAttachProcedure` to
 * an SGSN unless that SGSN indicated support in UpdateGprsLocation or the HLR
 * knows the SGSN supports it; otherwise the HLR shall send `updateProcedure`
 * and delete the stored SGSN-Number (3GPP TS 29.002 V19.1.0 clauses 7.6.3.52,
 * 8.1.3.3 and 17.7.1).
 *
 * If the VLR receives this parameter and does not understand it, it shall
 * ignore it and should assume an Update procedure. If the SGSN receives
 * `initialAttachProcedure`, it shall follow 3GPP TS 23.060 and shall not delete
 * the subscription data (3GPP TS 29.002 V19.1.0 clause 8.1.3.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancellationType  ::=  ENUMERATED {
 *     updateProcedure    (0),
 *     subscriptionWithdraw    (1),
 *     ...,
 *     initialAttachProcedure               (2)}
 * ```
 * 
 * @enum {number}
 */
export
type CancellationType = _enum_for_CancellationType | ENUMERATED;

/**
 * @summary CancellationType_updateProcedure
 * @constant
 * @type {number}
 */
export
const CancellationType_updateProcedure: CancellationType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateProcedure
 * @constant
 * @type {number}
 */
export
const updateProcedure: CancellationType = CancellationType_updateProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancellationType_subscriptionWithdraw
 * @constant
 * @type {number}
 */
export
const CancellationType_subscriptionWithdraw: CancellationType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionWithdraw
 * @constant
 * @type {number}
 */
export
const subscriptionWithdraw: CancellationType = CancellationType_subscriptionWithdraw; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancellationType_initialAttachProcedure
 * @constant
 * @type {number}
 */
export
const CancellationType_initialAttachProcedure: CancellationType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialAttachProcedure
 * @constant
 * @type {number}
 */
export
const initialAttachProcedure: CancellationType = CancellationType_initialAttachProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CancellationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CancellationType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CancellationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancellationType, encoded as an ASN.1 Element.
 */
export const _encode_CancellationType = $._encodeEnumerated;


/* eslint-enable */
