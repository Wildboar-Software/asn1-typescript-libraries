/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CommonKeyAttributes,
    _decode_CommonKeyAttributes,
    _encode_CommonKeyAttributes,
} from "../PKCS-15/CommonKeyAttributes.ta.mjs";
import {
    CommonPrivateKeyAttributes,
    _decode_CommonPrivateKeyAttributes,
    _encode_CommonPrivateKeyAttributes,
} from "../PKCS-15/CommonPrivateKeyAttributes.ta.mjs";
import {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta.mjs";

/**
 * @summary PrivateKeyObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyObject {KeyAttributes}  ::=  PKCS15Object {
 *     CommonKeyAttributes,
 *     CommonPrivateKeyAttributes,
 *     KeyAttributes
 * }
 * ```
 */
export type PrivateKeyObject<KeyAttributes> = PKCS15Object<
    CommonKeyAttributes,
    CommonPrivateKeyAttributes,
    KeyAttributes
>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PrivateKeyObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PrivateKeyObject<KeyAttributes>(
    _decode_KeyAttributes: $.ASN1Decoder<KeyAttributes>
): $.ASN1Decoder<PrivateKeyObject<KeyAttributes>> {
    return _get_decoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonPrivateKeyAttributes,
        KeyAttributes
    >(
        _decode_CommonKeyAttributes,
        _decode_CommonPrivateKeyAttributes,
        _decode_KeyAttributes
    );
}


/**
 * @summary Returns a function that will encode a(n) PrivateKeyObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PrivateKeyObject as an ASN.1 element.
 */
export function _get_encoder_for_PrivateKeyObject<KeyAttributes>(
    _encode_KeyAttributes: $.ASN1Encoder<KeyAttributes>
): $.ASN1Encoder<PrivateKeyObject<KeyAttributes>> {
    return _get_encoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonPrivateKeyAttributes,
        KeyAttributes
    >(
        _encode_CommonKeyAttributes,
        _encode_CommonPrivateKeyAttributes,
        _encode_KeyAttributes
    );
}

/* eslint-enable */
