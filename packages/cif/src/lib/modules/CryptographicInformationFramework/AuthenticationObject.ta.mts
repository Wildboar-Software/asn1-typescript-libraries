/* eslint-disable */
import {
    NULL,
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
import { CommonAuthenticationObjectAttributes, _decode_CommonAuthenticationObjectAttributes, _encode_CommonAuthenticationObjectAttributes } from "../CryptographicInformationFramework/CommonAuthenticationObjectAttributes.ta.mjs";
// export { CommonAuthenticationObjectAttributes, _decode_CommonAuthenticationObjectAttributes, _encode_CommonAuthenticationObjectAttributes } from "../CryptographicInformationFramework/CommonAuthenticationObjectAttributes.ta.mjs";


/**
 * @summary AuthenticationObject
 * @description
 * 
 * `CIO` of common object + common authentication + NULL subclass +
 * method-specific attributes. ISO/IEC 7816-15:2016 §8.9.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationObject {AuthObjectAttributes}  ::=  CIO {
 *     CommonAuthenticationObjectAttributes,
 *     NULL,
 *     AuthObjectAttributes
 * }
 * ```
 */
export
type AuthenticationObject <AuthObjectAttributes> = CIO<CommonAuthenticationObjectAttributes, NULL, AuthObjectAttributes>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) AuthenticationObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_AuthenticationObject<AuthObjectAttributes>(_decode_AuthObjectAttributes: $.ASN1Decoder<AuthObjectAttributes>): $.ASN1Decoder<AuthenticationObject<AuthObjectAttributes>> {
    return _get_decoder_for_CIO<CommonAuthenticationObjectAttributes, NULL, AuthObjectAttributes>(_decode_CommonAuthenticationObjectAttributes, $._decodeNull, _decode_AuthObjectAttributes);
}


/**
 * @summary Returns a function that will encode a(n) AuthenticationObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) AuthenticationObject as an ASN.1 element.
 */
export
function _get_encoder_for_AuthenticationObject<AuthObjectAttributes>(_encode_AuthObjectAttributes: $.ASN1Encoder<AuthObjectAttributes>): $.ASN1Encoder<AuthenticationObject<AuthObjectAttributes>> {
    return _get_encoder_for_CIO<CommonAuthenticationObjectAttributes, NULL, AuthObjectAttributes>(_encode_CommonAuthenticationObjectAttributes, $._encodeNull, _encode_AuthObjectAttributes);
}

/* eslint-enable */
