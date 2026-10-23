/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RefreshInformation, _decode_RefreshInformation, _encode_RefreshInformation } from "../DirectoryShadowAbstractService/RefreshInformation.ta.mjs";
// export { RefreshInformation, _decode_RefreshInformation, _encode_RefreshInformation } from "../DirectoryShadowAbstractService/RefreshInformation.ta.mjs";


/**
 * @summary IN_RefreshInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-RefreshInformation  ::= 
 *   RefreshInformation(WITH COMPONENTS {
 *                        ...,
 *                        otherStrategy  ABSENT
 *                      })
 * ```
 */
export
type IN_RefreshInformation = RefreshInformation; // DefinedType

let _cached_decoder_for_IN_RefreshInformation: $.ASN1Decoder<IN_RefreshInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_RefreshInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_RefreshInformation (el: _Element): IN_RefreshInformation {
    if (!_cached_decoder_for_IN_RefreshInformation) { _cached_decoder_for_IN_RefreshInformation = _decode_RefreshInformation; }
    return _cached_decoder_for_IN_RefreshInformation(el);
}

let _cached_encoder_for_IN_RefreshInformation: $.ASN1Encoder<IN_RefreshInformation> | null = null;

/**
 * @summary Encodes a(n) IN_RefreshInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_RefreshInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IN_RefreshInformation (value: IN_RefreshInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_RefreshInformation) { _cached_encoder_for_IN_RefreshInformation = _encode_RefreshInformation; }
    return _cached_encoder_for_IN_RefreshInformation(value, elGetter);
}


/* eslint-enable */
