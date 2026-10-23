/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta.mjs";
/**
 * @summary SuperiorToSubordinateModification
 * @description
 *
 * `SuperiorToSubordinate` with `entryInfo` ABSENT. Superior-initiated
 * HOB modify does not re-send CP entry content. Other components same
 * as establishment; a changed component is sent in full.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuperiorToSubordinateModification  ::=  SuperiorToSubordinate (
 *   WITH COMPONENTS {..., entryInfo  ABSENT } )
 * ```
 */
export type SuperiorToSubordinateModification = SuperiorToSubordinate; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SuperiorToSubordinateModification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuperiorToSubordinateModification} The decoded data structure.
 */
export const _decode_SuperiorToSubordinateModification: $.ASN1Decoder<SuperiorToSubordinateModification> = _decode_SuperiorToSubordinate;

/**
 * @summary Encodes a(n) SuperiorToSubordinateModification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuperiorToSubordinateModification, encoded as an ASN.1 Element.
 */
export const _encode_SuperiorToSubordinateModification: $.ASN1Encoder<SuperiorToSubordinateModification> = _encode_SuperiorToSubordinate;


/* eslint-enable */
