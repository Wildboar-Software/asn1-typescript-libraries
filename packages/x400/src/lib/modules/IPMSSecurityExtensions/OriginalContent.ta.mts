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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    type Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
/**
 * @summary OriginalContent
 * @description
 *
 * A secondary object that submits a message containing an IPM or IPN shall supply as the
 * octets of the Octet String that constitutes the content of the message the result of
 * encoding the InformationObject of section two in accordance with the Basic Encoding
 * Rules of 20.2 Content Type A secondary object that submits a message containing an IPM
 * or IPN shall select its content type as follows. See ITU-T X.420 (1999), §20.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalContent  ::=  Content
 * ```
 */
export type OriginalContent = Content; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalContent} The decoded data structure.
 */
export const _decode_OriginalContent: $.ASN1Decoder<OriginalContent> = _decode_Content;

/**
 * @summary Encodes a(n) OriginalContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalContent, encoded as an ASN.1 Element.
 */
export const _encode_OriginalContent: $.ASN1Encoder<OriginalContent> = _encode_Content;


/* eslint-enable */
