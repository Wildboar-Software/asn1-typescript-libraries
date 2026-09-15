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
import { CommonDataContainerObjectAttributes, _decode_CommonDataContainerObjectAttributes, _encode_CommonDataContainerObjectAttributes } from "../CryptographicInformationFramework/CommonDataContainerObjectAttributes.ta.mjs";
// export { CommonDataContainerObjectAttributes, _decode_CommonDataContainerObjectAttributes, _encode_CommonDataContainerObjectAttributes } from "../CryptographicInformationFramework/CommonDataContainerObjectAttributes.ta.mjs";


/**
 * @summary DataContainerObject
 * @description
 * 
 * `CIO` of common object + common data-container + NULL subclass + type
 * attributes. ISO/IEC 7816-15:2016 §8.8.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataContainerObject {DataObjectAttributes}  ::=  CIO {
 *     CommonDataContainerObjectAttributes,
 *     NULL,
 *     DataObjectAttributes
 * }
 * ```
 */
export
type DataContainerObject <DataObjectAttributes> = CIO<CommonDataContainerObjectAttributes, NULL, DataObjectAttributes>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) DataContainerObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_DataContainerObject<DataObjectAttributes>(_decode_DataObjectAttributes: $.ASN1Decoder<DataObjectAttributes>): $.ASN1Decoder<DataContainerObject<DataObjectAttributes>> {
    return _get_decoder_for_CIO<CommonDataContainerObjectAttributes, NULL, DataObjectAttributes>(_decode_CommonDataContainerObjectAttributes, $._decodeNull, _decode_DataObjectAttributes);
}


/**
 * @summary Returns a function that will encode a(n) DataContainerObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) DataContainerObject as an ASN.1 element.
 */
export
function _get_encoder_for_DataContainerObject<DataObjectAttributes>(_encode_DataObjectAttributes: $.ASN1Encoder<DataObjectAttributes>): $.ASN1Encoder<DataContainerObject<DataObjectAttributes>> {
    return _get_encoder_for_CIO<CommonDataContainerObjectAttributes, NULL, DataObjectAttributes>(_encode_CommonDataContainerObjectAttributes, $._encodeNull, _encode_DataObjectAttributes);
}

/* eslint-enable */
