/* eslint-disable */
import { ASN1Element, ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "@wildboar/x500/AuthenticationFramework";
import { Attributes } from "../PKCS7/Attributes.ta.mjs";

type ToBeHashed =
    | { content: _Element }
    | { authenticated_attributes: Attributes };


/**
 * @summary Digest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Digest  ::=
 *     HASH
 *         {CHOICE {content
 *                 [1]  PKCS7-CONTENT-TYPE.&Type({PKCS7ContentTable}),
 *                 authenticated-attributes  [0] EXPLICIT Attributes}}
 * ```
 */
export type Digest = HASH<ToBeHashed>; // DefinedType


let _cached_decoder_for_Digest: $.ASN1Decoder<Digest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Digest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Digest} The decoded data structure.
 */
export function _decode_Digest(el: _Element): Digest {
    if (!_cached_decoder_for_Digest) {
        _cached_decoder_for_Digest = _get_decoder_for_HASH<_Element>(
            $._decodeAny
        );
    }
    return _cached_decoder_for_Digest(el);
}


let _cached_encoder_for_Digest: $.ASN1Encoder<Digest> | null = null;


/**
 * @summary Encodes a(n) Digest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Digest, encoded as an ASN.1 Element.
 */
export function _encode_Digest(
    value: Digest,
    elGetter: $.ASN1Encoder<Digest>
): _Element {
    if (!_cached_encoder_for_Digest) {
        _cached_encoder_for_Digest = _get_encoder_for_HASH<ASN1Element>(
            $._encodeAny
        );
    }
    return _cached_encoder_for_Digest(value, elGetter);
}


/* eslint-enable */
