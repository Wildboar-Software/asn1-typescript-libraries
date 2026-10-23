/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta.mjs";
/**
 * @summary NHOBSuperiorToSubordinate
 * @description
 *
 * `SuperiorToSubordinate` with `entryInfo` ABSENT. NHOB does not
 * establish a single named subordinate entry. On modify, a changed
 * component is sent in full.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NHOBSuperiorToSubordinate  ::=  SuperiorToSubordinate (
 *   WITH COMPONENTS {..., entryInfo  ABSENT } )
 * ```
 */
export type NHOBSuperiorToSubordinate = SuperiorToSubordinate; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NHOBSuperiorToSubordinate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NHOBSuperiorToSubordinate} The decoded data structure.
 */
export const _decode_NHOBSuperiorToSubordinate: $.ASN1Decoder<NHOBSuperiorToSubordinate> = _decode_SuperiorToSubordinate;

/**
 * @summary Encodes a(n) NHOBSuperiorToSubordinate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NHOBSuperiorToSubordinate, encoded as an ASN.1 Element.
 */
export const _encode_NHOBSuperiorToSubordinate: $.ASN1Encoder<NHOBSuperiorToSubordinate> = _encode_SuperiorToSubordinate;


/* eslint-enable */
