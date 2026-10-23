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

let _cached_decoder_for_IN_AddEntryArgument: $.ASN1Decoder<IN_AddEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_AddEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_AddEntryArgument (el: _Element): IN_AddEntryArgument {
    if (!_cached_decoder_for_IN_AddEntryArgument) { _cached_decoder_for_IN_AddEntryArgument = _decode_AddEntryArgument; }
    return _cached_decoder_for_IN_AddEntryArgument(el);
}

let _cached_encoder_for_IN_AddEntryArgument: $.ASN1Encoder<IN_AddEntryArgument> | null = null;

/**
 * @summary Encodes a(n) IN_AddEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_AddEntryArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IN_AddEntryArgument (value: IN_AddEntryArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_AddEntryArgument) { _cached_encoder_for_IN_AddEntryArgument = _encode_AddEntryArgument; }
    return _cached_encoder_for_IN_AddEntryArgument(value, elGetter);
}


/* eslint-enable */
