/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary X520LocalityName
 * @description
 *
 * DirectoryString CHOICE for the X.520 `localityName` attribute type ([RFC 5280 Appendix A](https://datatracker.ietf.org/doc/html/rfc5280#appendix-A); [RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520LocalityName  ::=  DirectoryString {ub-locality-name}
 * ```
 */
export type X520LocalityName = DirectoryString; // DefinedType


let _cached_decoder_for_X520LocalityName: $.ASN1Decoder<X520LocalityName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X520LocalityName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520LocalityName} The decoded data structure.
 */
export function _decode_X520LocalityName(el: _Element): X520LocalityName {
    if (!_cached_decoder_for_X520LocalityName) {
        _cached_decoder_for_X520LocalityName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520LocalityName(el);
}


let _cached_encoder_for_X520LocalityName: $.ASN1Encoder<X520LocalityName> | null = null;


/**
 * @summary Encodes a(n) X520LocalityName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520LocalityName, encoded as an ASN.1 Element.
 */
export function _encode_X520LocalityName(
    value: X520LocalityName,
    elGetter: $.ASN1Encoder<X520LocalityName>
): _Element {
    if (!_cached_encoder_for_X520LocalityName) {
        _cached_encoder_for_X520LocalityName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520LocalityName(value, elGetter);
}


/* eslint-enable */
