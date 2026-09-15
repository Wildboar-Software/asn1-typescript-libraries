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
import { CommonPublicKeyAttributes, _decode_CommonPublicKeyAttributes, _encode_CommonPublicKeyAttributes } from "../CryptographicInformationFramework/CommonPublicKeyAttributes.ta.mjs";
// export { CommonPublicKeyAttributes, _decode_CommonPublicKeyAttributes, _encode_CommonPublicKeyAttributes } from "../CryptographicInformationFramework/CommonPublicKeyAttributes.ta.mjs";


/**
 * @summary PublicKeyObject
 * @description
 * 
 * `CIO` of common object + common key + common public-key + algorithm-specific
 * attributes. ISO/IEC 7816-15:2016 §8.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKeyObject {KeyAttributes}  ::=  CIO {
 *     CommonKeyAttributes,
 *     CommonPublicKeyAttributes,
 *     KeyAttributes
 * }
 * ```
 */
export
type PublicKeyObject <KeyAttributes> = CIO<CommonKeyAttributes, CommonPublicKeyAttributes, KeyAttributes>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PublicKeyObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_PublicKeyObject<KeyAttributes>(_decode_KeyAttributes: $.ASN1Decoder<KeyAttributes>): $.ASN1Decoder<PublicKeyObject<KeyAttributes>> {
    return _get_decoder_for_CIO<CommonKeyAttributes, CommonPublicKeyAttributes, KeyAttributes>(_decode_CommonKeyAttributes, _decode_CommonPublicKeyAttributes, _decode_KeyAttributes);
}


/**
 * @summary Returns a function that will encode a(n) PublicKeyObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PublicKeyObject as an ASN.1 element.
 */
export
function _get_encoder_for_PublicKeyObject<KeyAttributes>(_encode_KeyAttributes: $.ASN1Encoder<KeyAttributes>): $.ASN1Encoder<PublicKeyObject<KeyAttributes>> {
    return _get_encoder_for_CIO<CommonKeyAttributes, CommonPublicKeyAttributes, KeyAttributes>(_encode_CommonKeyAttributes, _encode_CommonPublicKeyAttributes, _encode_KeyAttributes);
}

/* eslint-enable */
