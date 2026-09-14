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
import { CommonCertificateAttributes, _decode_CommonCertificateAttributes, _encode_CommonCertificateAttributes } from "../CryptographicInformationFramework/CommonCertificateAttributes.ta.mjs";
// export { CommonCertificateAttributes, _decode_CommonCertificateAttributes, _encode_CommonCertificateAttributes } from "../CryptographicInformationFramework/CommonCertificateAttributes.ta.mjs";


/**
 * @summary CertificateObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateObject {CertAttributes}  ::=  CIO {
 *     CommonCertificateAttributes,
 *     NULL,
 *     CertAttributes
 * }
 * ```
 */
export
type CertificateObject <CertAttributes> = CIO<CommonCertificateAttributes, NULL, CertAttributes>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) CertificateObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_CertificateObject<CertAttributes>(_decode_CertAttributes: $.ASN1Decoder<CertAttributes>): $.ASN1Decoder<CertificateObject<CertAttributes>> {
    return _get_decoder_for_CIO<CommonCertificateAttributes, NULL, CertAttributes>(_decode_CommonCertificateAttributes, $._decodeNull, _decode_CertAttributes);
}


/**
 * @summary Returns a function that will encode a(n) CertificateObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) CertificateObject as an ASN.1 element.
 */
export
function _get_encoder_for_CertificateObject<CertAttributes>(_encode_CertAttributes: $.ASN1Encoder<CertAttributes>): $.ASN1Encoder<CertificateObject<CertAttributes>> {
    return _get_encoder_for_CIO<CommonCertificateAttributes, NULL, CertAttributes>(_encode_CommonCertificateAttributes, $._encodeNull, _encode_CertAttributes);
}

/* eslint-enable */
