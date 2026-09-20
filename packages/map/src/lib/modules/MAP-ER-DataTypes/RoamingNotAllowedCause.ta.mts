/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingNotAllowedCause
 * @description
 * 
 * Cause on `RoamingNotAllowedParam` for a location updating attempt in an area
 * not covered by the subscription (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and
 * 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNotAllowedCause  ::=  ENUMERATED {
 *     plmnRoamingNotAllowed  (0),
 *     operatorDeterminedBarring  (3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoamingNotAllowedCause {
    plmnRoamingNotAllowed = 0,
    operatorDeterminedBarring = 3,
}

/**
 * @summary RoamingNotAllowedCause
 * @description
 * 
 * Cause on `RoamingNotAllowedParam` for a location updating attempt in an area
 * not covered by the subscription (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and
 * 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNotAllowedCause  ::=  ENUMERATED {
 *     plmnRoamingNotAllowed  (0),
 *     operatorDeterminedBarring  (3)}
 * ```
 * 
 * @enum {number}
 */
export
type RoamingNotAllowedCause = _enum_for_RoamingNotAllowedCause;

/**
 * @summary RoamingNotAllowedCause
 * @description
 * 
 * Cause on `RoamingNotAllowedParam` for a location updating attempt in an area
 * not covered by the subscription (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and
 * 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNotAllowedCause  ::=  ENUMERATED {
 *     plmnRoamingNotAllowed  (0),
 *     operatorDeterminedBarring  (3)}
 * ```
 * 
 * @enum {number}
 */
export
const RoamingNotAllowedCause = _enum_for_RoamingNotAllowedCause;

/**
 * @summary RoamingNotAllowedCause_plmnRoamingNotAllowed
 * @description
 *
 * `plmnRoamingNotAllowed` (0) (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const RoamingNotAllowedCause_plmnRoamingNotAllowed: RoamingNotAllowedCause = RoamingNotAllowedCause.plmnRoamingNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmnRoamingNotAllowed
 * @description
 *
 * `plmnRoamingNotAllowed` (0) (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const plmnRoamingNotAllowed: RoamingNotAllowedCause = RoamingNotAllowedCause.plmnRoamingNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoamingNotAllowedCause_operatorDeterminedBarring
 * @description
 *
 * `operatorDeterminedBarring` (3) (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const RoamingNotAllowedCause_operatorDeterminedBarring: RoamingNotAllowedCause = RoamingNotAllowedCause.operatorDeterminedBarring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operatorDeterminedBarring
 * @description
 *
 * `operatorDeterminedBarring` (3) (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const operatorDeterminedBarring: RoamingNotAllowedCause = RoamingNotAllowedCause.operatorDeterminedBarring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingNotAllowedCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RoamingNotAllowedCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RoamingNotAllowedCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingNotAllowedCause, encoded as an ASN.1 Element.
 */
export const _encode_RoamingNotAllowedCause = $._encodeEnumerated;


/* eslint-enable */
