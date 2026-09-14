/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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

let _cached_decoder_for_DataContainerObject: $.ASN1Decoder<DataContainerObject<DataObjectAttributes>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) DataContainerObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_DataContainerObject<DataObjectAttributes>(_decode_DataObjectAttributes: $.ASN1Decoder<DataObjectAttributes>): $.ASN1Decoder<DataContainerObject<DataObjectAttributes>> {
    return _get_decoder_for_CIO<CommonDataContainerObjectAttributes, NULL, DataObjectAttributes>(_decode_CommonDataContainerObjectAttributes, $._decodeNull, _decode_DataObjectAttributes);
}

let _cached_encoder_for_DataContainerObject: $.ASN1Encoder<DataContainerObject<DataObjectAttributes>> | null = null;

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
