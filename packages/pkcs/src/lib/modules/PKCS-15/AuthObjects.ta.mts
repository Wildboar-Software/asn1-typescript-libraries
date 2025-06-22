/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthenticationType,
    _decode_AuthenticationType,
    _encode_AuthenticationType,
} from "../PKCS-15/AuthenticationType.ta.mjs";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta.mjs";

/**
 * @summary AuthObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthObjects   ::=  PathOrObjects {AuthenticationType}
 * ```
 */
export type AuthObjects = PathOrObjects<AuthenticationType>; // DefinedType


let _cached_decoder_for_AuthObjects: $.ASN1Decoder<AuthObjects> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthObjects} The decoded data structure.
 */
export function _decode_AuthObjects(el: _Element) {
    if (!_cached_decoder_for_AuthObjects) {
        _cached_decoder_for_AuthObjects = _get_decoder_for_PathOrObjects<AuthenticationType>(
            _decode_AuthenticationType
        );
    }
    return _cached_decoder_for_AuthObjects(el);
}


let _cached_encoder_for_AuthObjects: $.ASN1Encoder<AuthObjects> | null = null;


/**
 * @summary Encodes a(n) AuthObjects into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthObjects, encoded as an ASN.1 Element.
 */
export function _encode_AuthObjects(
    value: AuthObjects,
    elGetter: $.ASN1Encoder<AuthObjects>
) {
    if (!_cached_encoder_for_AuthObjects) {
        _cached_encoder_for_AuthObjects = _get_encoder_for_PathOrObjects<AuthenticationType>(
            _encode_AuthenticationType
        );
    }
    return _cached_encoder_for_AuthObjects(value, elGetter);
}


/* eslint-enable */
