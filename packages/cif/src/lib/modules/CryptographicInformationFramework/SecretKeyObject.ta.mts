/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CIO, _get_decoder_for_CIO, _get_encoder_for_CIO } from "../CryptographicInformationFramework/CIO.ta.mjs";
// export { CIO, _get_decoder_for_CIO, _get_encoder_for_CIO } from "../CryptographicInformationFramework/CIO.ta.mjs";
import { CommonKeyAttributes, _decode_CommonKeyAttributes, _encode_CommonKeyAttributes } from "../CryptographicInformationFramework/CommonKeyAttributes.ta.mjs";
// export { CommonKeyAttributes, _decode_CommonKeyAttributes, _encode_CommonKeyAttributes } from "../CryptographicInformationFramework/CommonKeyAttributes.ta.mjs";
import { CommonSecretKeyAttributes, _decode_CommonSecretKeyAttributes, _encode_CommonSecretKeyAttributes } from "../CryptographicInformationFramework/CommonSecretKeyAttributes.ta.mjs";
// export { CommonSecretKeyAttributes, _decode_CommonSecretKeyAttributes, _encode_CommonSecretKeyAttributes } from "../CryptographicInformationFramework/CommonSecretKeyAttributes.ta.mjs";


/**
 * @summary SecretKeyObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecretKeyObject {KeyAttributes}  ::=  CIO {
 *     CommonKeyAttributes,
 *     CommonSecretKeyAttributes,
 *     KeyAttributes
 * }
 * ```
 */
export
type SecretKeyObject <KeyAttributes> = CIO<CommonKeyAttributes, CommonSecretKeyAttributes, KeyAttributes>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SecretKeyObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_SecretKeyObject<KeyAttributes>(_decode_KeyAttributes: $.ASN1Decoder<KeyAttributes>): $.ASN1Decoder<SecretKeyObject<KeyAttributes>> {
    return _get_decoder_for_CIO<CommonKeyAttributes, CommonSecretKeyAttributes, KeyAttributes>(_decode_CommonKeyAttributes, _decode_CommonSecretKeyAttributes, _decode_KeyAttributes);
}


/**
 * @summary Returns a function that will encode a(n) SecretKeyObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SecretKeyObject as an ASN.1 element.
 */
export
function _get_encoder_for_SecretKeyObject<KeyAttributes>(_encode_KeyAttributes: $.ASN1Encoder<KeyAttributes>): $.ASN1Encoder<SecretKeyObject<KeyAttributes>> {
    return _get_encoder_for_CIO<CommonKeyAttributes, CommonSecretKeyAttributes, KeyAttributes>(_encode_CommonKeyAttributes, _encode_CommonSecretKeyAttributes, _encode_KeyAttributes);
}

/* eslint-enable */
