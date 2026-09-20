/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TypeOfUpdate {
    sgsn_change = 0,
    mme_change = 1,
}

/**
 * @summary TypeOfUpdate
 * @description
 *
 * Whether Cancel Location is due to SGSN change or MME change. Shall be absent
 * if CancellationType is other than `updateProcedure` or
 * `initialAttachProcedure`.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.52 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfUpdate  ::=  ENUMERATED {
 *     sgsn-change (0),
 *     mme-change (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfUpdate = _enum_for_TypeOfUpdate | ENUMERATED;

/**
 * @summary TypeOfUpdate_sgsn_change
 * @constant
 * @type {number}
 */
export
const TypeOfUpdate_sgsn_change: TypeOfUpdate = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn_change
 * @constant
 * @type {number}
 */
export
const sgsn_change: TypeOfUpdate = TypeOfUpdate_sgsn_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfUpdate_mme_change
 * @constant
 * @type {number}
 */
export
const TypeOfUpdate_mme_change: TypeOfUpdate = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme_change
 * @constant
 * @type {number}
 */
export
const mme_change: TypeOfUpdate = TypeOfUpdate_mme_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TypeOfUpdate = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TypeOfUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfUpdate, encoded as an ASN.1 Element.
 */
export const _encode_TypeOfUpdate = $._encodeEnumerated;


/* eslint-enable */
