/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddEntryArgument, _decode_AddEntryArgument, _encode_AddEntryArgument } from "../DirectoryAbstractService/AddEntryArgument.ta.mjs";
// export { AddEntryArgument, _decode_AddEntryArgument, _encode_AddEntryArgument } from "../DirectoryAbstractService/AddEntryArgument.ta.mjs";


/**
 * @summary IN_AddEntryArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-AddEntryArgument  ::= 
 *   AddEntryArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          serviceControls  (IN-ServiceControls),
 *                          aliasedRDNs      ABSENT
 *                        })
 *      })
 * ```
 */
export
type IN_AddEntryArgument = AddEntryArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_AddEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_AddEntryArgument: $.ASN1Decoder<IN_AddEntryArgument> = _decode_AddEntryArgument;

/**
 * @summary Encodes a(n) IN_AddEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_AddEntryArgument, encoded as an ASN.1 Element.
 */
export const _encode_IN_AddEntryArgument: (value: IN_AddEntryArgument, elGetter: $.ASN1Encoder<any>) => _Element = _encode_AddEntryArgument;


/* eslint-enable */
