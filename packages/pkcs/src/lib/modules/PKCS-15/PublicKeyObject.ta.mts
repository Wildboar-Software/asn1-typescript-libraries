/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CommonKeyAttributes,
    _decode_CommonKeyAttributes,
    _encode_CommonKeyAttributes,
} from "../PKCS-15/CommonKeyAttributes.ta.mjs";
import {
    CommonPublicKeyAttributes,
    _decode_CommonPublicKeyAttributes,
    _encode_CommonPublicKeyAttributes,
} from "../PKCS-15/CommonPublicKeyAttributes.ta.mjs";
import {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta.mjs";

/**
 * @summary PublicKeyObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeyObject {KeyAttributes}  ::=  PKCS15Object {CommonKeyAttributes, CommonPublicKeyAttributes, KeyAttributes}
 * ```
 */
export type PublicKeyObject<KeyAttributes> = PKCS15Object<
    CommonKeyAttributes,
    CommonPublicKeyAttributes,
    KeyAttributes
>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PublicKeyObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PublicKeyObject<KeyAttributes>(
    _decode_KeyAttributes: $.ASN1Decoder<KeyAttributes>
) {
    return _get_decoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonPublicKeyAttributes,
        KeyAttributes
    >(
        _decode_CommonKeyAttributes,
        _decode_CommonPublicKeyAttributes,
        _decode_KeyAttributes
    );
}


/**
 * @summary Returns a function that will encode a(n) PublicKeyObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PublicKeyObject as an ASN.1 element.
 */
export function _get_encoder_for_PublicKeyObject<KeyAttributes>(
    _encode_KeyAttributes: $.ASN1Encoder<KeyAttributes>
) {
    return _get_encoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonPublicKeyAttributes,
        KeyAttributes
    >(
        _encode_CommonKeyAttributes,
        _encode_CommonPublicKeyAttributes,
        _encode_KeyAttributes
    );
}

/* eslint-enable */
