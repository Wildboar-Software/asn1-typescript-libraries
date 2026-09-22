/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDSParameter, _decode_PDSParameter, _encode_PDSParameter } from "../PKIX1Explicit88/PDSParameter.ta.mjs";
// export { PDSParameter, _decode_PDSParameter, _encode_PDSParameter } from "../PKIX1Explicit88/PDSParameter.ta.mjs";


/**
 * @summary ExtensionORAddressComponents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionORAddressComponents  ::=  PDSParameter
 * ```
 */
export
type ExtensionORAddressComponents = PDSParameter; // DefinedType

let _cached_decoder_for_ExtensionORAddressComponents: $.ASN1Decoder<ExtensionORAddressComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionORAddressComponents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionORAddressComponents (el: _Element): ExtensionORAddressComponents {
    if (!_cached_decoder_for_ExtensionORAddressComponents) { _cached_decoder_for_ExtensionORAddressComponents = _decode_PDSParameter; }
    return _cached_decoder_for_ExtensionORAddressComponents(el);
}

let _cached_encoder_for_ExtensionORAddressComponents: $.ASN1Encoder<ExtensionORAddressComponents> | null = null;

/**
 * @summary Encodes a(n) ExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionORAddressComponents (value: ExtensionORAddressComponents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionORAddressComponents) { _cached_encoder_for_ExtensionORAddressComponents = _encode_PDSParameter; }
    return _cached_encoder_for_ExtensionORAddressComponents(value, elGetter);
}


/* eslint-enable */
