/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoveEntryArgument, _decode_RemoveEntryArgument, _encode_RemoveEntryArgument } from "../DirectoryAbstractService/RemoveEntryArgument.ta.mjs";
// export { RemoveEntryArgument, _decode_RemoveEntryArgument, _encode_RemoveEntryArgument } from "../DirectoryAbstractService/RemoveEntryArgument.ta.mjs";


/**
 * @summary IN_RemoveEntryArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-RemoveEntryArgument  ::= 
 *   RemoveEntryArgument
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
type IN_RemoveEntryArgument = RemoveEntryArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_RemoveEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_RemoveEntryArgument: $.ASN1Decoder<IN_RemoveEntryArgument> = _decode_RemoveEntryArgument;

/**
 * @summary Encodes a(n) IN_RemoveEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_RemoveEntryArgument, encoded as an ASN.1 Element.
 */
export const _encode_IN_RemoveEntryArgument: $.ASN1Encoder<IN_RemoveEntryArgument> = _encode_RemoveEntryArgument;


/* eslint-enable */
