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
    PDUHeader,
    _decode_PDUHeader,
    _encode_PDUHeader,
} from '../NLM/PDUHeader.ta.mjs';

/**
 * @summary PDUFormatErrorSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUFormatErrorSyntax  ::=  PDUHeader
 * ```
 */
export type PDUFormatErrorSyntax = PDUHeader; // DefinedType


let _cached_decoder_for_PDUFormatErrorSyntax: $.ASN1Decoder<PDUFormatErrorSyntax> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PDUFormatErrorSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUFormatErrorSyntax} The decoded data structure.
 */
export function _decode_PDUFormatErrorSyntax(el: _Element): PDUFormatErrorSyntax {
    if (!_cached_decoder_for_PDUFormatErrorSyntax) {
        _cached_decoder_for_PDUFormatErrorSyntax = _decode_PDUHeader;
    }
    return _cached_decoder_for_PDUFormatErrorSyntax(el);
}


let _cached_encoder_for_PDUFormatErrorSyntax: $.ASN1Encoder<PDUFormatErrorSyntax> | null = null;


/**
 * @summary Encodes a(n) PDUFormatErrorSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUFormatErrorSyntax, encoded as an ASN.1 Element.
 */
export function _encode_PDUFormatErrorSyntax(
    value: PDUFormatErrorSyntax,
    elGetter: $.ASN1Encoder<PDUFormatErrorSyntax>
): _Element {
    if (!_cached_encoder_for_PDUFormatErrorSyntax) {
        _cached_encoder_for_PDUFormatErrorSyntax = _encode_PDUHeader;
    }
    return _cached_encoder_for_PDUFormatErrorSyntax(value, elGetter);
}


/* eslint-enable */
