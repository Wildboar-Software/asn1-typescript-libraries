/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ModifyEntryArgument, _decode_ModifyEntryArgument, _encode_ModifyEntryArgument } from "../DirectoryAbstractService/ModifyEntryArgument.ta.mjs";
// export { ModifyEntryArgument, _decode_ModifyEntryArgument, _encode_ModifyEntryArgument } from "../DirectoryAbstractService/ModifyEntryArgument.ta.mjs";


/**
 * @summary IN_ModifyEntryArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ModifyEntryArgument  ::= 
 *   ModifyEntryArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          selection        (IN-EntryInformationSelection),
 *                          serviceControls  (IN-ServiceControls),
 *                          aliasedRDNs      ABSENT
 *                        })
 *      })
 * ```
 */
export
type IN_ModifyEntryArgument = ModifyEntryArgument; // DefinedType

let _cached_decoder_for_IN_ModifyEntryArgument: $.ASN1Decoder<IN_ModifyEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ModifyEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_ModifyEntryArgument (el: _Element): IN_ModifyEntryArgument {
    if (!_cached_decoder_for_IN_ModifyEntryArgument) { _cached_decoder_for_IN_ModifyEntryArgument = _decode_ModifyEntryArgument; }
    return _cached_decoder_for_IN_ModifyEntryArgument(el);
}

let _cached_encoder_for_IN_ModifyEntryArgument: $.ASN1Encoder<IN_ModifyEntryArgument> | null = null;

/**
 * @summary Encodes a(n) IN_ModifyEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ModifyEntryArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IN_ModifyEntryArgument (value: IN_ModifyEntryArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_ModifyEntryArgument) { _cached_encoder_for_IN_ModifyEntryArgument = _encode_ModifyEntryArgument; }
    return _cached_encoder_for_IN_ModifyEntryArgument(value, elGetter);
}


/* eslint-enable */
