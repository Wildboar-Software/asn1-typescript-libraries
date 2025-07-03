/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary ObjectIdName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectIdName  ::=  DirectoryString{ubObjectIdNameLength}
 * ```
 */
export type ObjectIdName = DirectoryString; // DefinedType


let _cached_decoder_for_ObjectIdName: $.ASN1Decoder<ObjectIdName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectIdName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectIdName} The decoded data structure.
 */
export function _decode_ObjectIdName(el: _Element): ObjectIdName {
    if (!_cached_decoder_for_ObjectIdName) {
        _cached_decoder_for_ObjectIdName = _decode_DirectoryString;
    }
    return _cached_decoder_for_ObjectIdName(el);
}


let _cached_encoder_for_ObjectIdName: $.ASN1Encoder<ObjectIdName> | null = null;


/**
 * @summary Encodes a(n) ObjectIdName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectIdName, encoded as an ASN.1 Element.
 */
export function _encode_ObjectIdName(
    value: ObjectIdName,
    elGetter: $.ASN1Encoder<ObjectIdName>
): _Element {
    if (!_cached_encoder_for_ObjectIdName) {
        _cached_encoder_for_ObjectIdName = _encode_DirectoryString;
    }
    return _cached_encoder_for_ObjectIdName(value, elGetter);
}


/* eslint-enable */
