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

let _cached_decoder_for_IN_RemoveEntryArgument: $.ASN1Decoder<IN_RemoveEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_RemoveEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_RemoveEntryArgument (el: _Element): IN_RemoveEntryArgument {
    if (!_cached_decoder_for_IN_RemoveEntryArgument) { _cached_decoder_for_IN_RemoveEntryArgument = _decode_RemoveEntryArgument; }
    return _cached_decoder_for_IN_RemoveEntryArgument(el);
}

let _cached_encoder_for_IN_RemoveEntryArgument: $.ASN1Encoder<IN_RemoveEntryArgument> | null = null;

/**
 * @summary Encodes a(n) IN_RemoveEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_RemoveEntryArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IN_RemoveEntryArgument (value: IN_RemoveEntryArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_RemoveEntryArgument) { _cached_encoder_for_IN_RemoveEntryArgument = _encode_RemoveEntryArgument; }
    return _cached_encoder_for_IN_RemoveEntryArgument(value, elGetter);
}


/* eslint-enable */
