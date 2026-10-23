/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";
// export { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";


/**
 * @summary IN_EntryInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-EntryInformation  ::= 
 *   EntryInformation
 *     (WITH COMPONENTS {
 *        ...,
 *        fromEntry    (TRUE),
 *        information  (WITH COMPONENT
 *                        (WITH COMPONENTS {
 *                           ...,
 *                           attributeType  ABSENT
 *                         })) OPTIONAL
 *      })
 * ```
 */
export
type IN_EntryInformation = EntryInformation; // DefinedType

let _cached_decoder_for_IN_EntryInformation: $.ASN1Decoder<IN_EntryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_EntryInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_EntryInformation (el: _Element): IN_EntryInformation {
    if (!_cached_decoder_for_IN_EntryInformation) { _cached_decoder_for_IN_EntryInformation = _decode_EntryInformation; }
    return _cached_decoder_for_IN_EntryInformation(el);
}

let _cached_encoder_for_IN_EntryInformation: $.ASN1Encoder<IN_EntryInformation> | null = null;

/**
 * @summary Encodes a(n) IN_EntryInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_EntryInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IN_EntryInformation (value: IN_EntryInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_EntryInformation) { _cached_encoder_for_IN_EntryInformation = _encode_EntryInformation; }
    return _cached_encoder_for_IN_EntryInformation(value, elGetter);
}


/* eslint-enable */
