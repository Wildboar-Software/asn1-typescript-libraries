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
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
/**
 * @summary OriginalContent
 * @description
 *
 * `OriginalContent`. A secondary object that submits a message containing an IPM or IPN
 * shall supply as the octets of the Octet String that constitutes the content of the
 * message the result of encoding the InformationObject of section two in accordance with
 * the Basic Encoding Rules of 20.2 Content Type A secondary object that submits a
 * message containing an IPM or IPN shall select its content type as follows. If the IPM
 * or IPN… See ITU-T X.420 (1999), §20.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalContent  ::=  Content
 * ```
 */
export type OriginalContent = Content; // DefinedType

let _cached_decoder_for_OriginalContent: $.ASN1Decoder<OriginalContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalContent} The decoded data structure.
 */
export function _decode_OriginalContent(el: _Element): OriginalContent {
    if (!_cached_decoder_for_OriginalContent) {
        _cached_decoder_for_OriginalContent = _decode_Content;
    }
    return _cached_decoder_for_OriginalContent(el);
}

let _cached_encoder_for_OriginalContent: $.ASN1Encoder<OriginalContent> | null = null;

/**
 * @summary Encodes a(n) OriginalContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalContent, encoded as an ASN.1 Element.
 */
export function _encode_OriginalContent(
    value: OriginalContent,
    elGetter: $.ASN1Encoder<OriginalContent>
): _Element {
    if (!_cached_encoder_for_OriginalContent) {
        _cached_encoder_for_OriginalContent = _encode_Content;
    }
    return _cached_encoder_for_OriginalContent(value, elGetter);
}


/* eslint-enable */
