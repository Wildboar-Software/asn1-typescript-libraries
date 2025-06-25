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
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.mjs';
/**
 * @summary RepliedToIPMField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepliedToIPMField  ::=  IPMIdentifier
 * ```
 */
export type RepliedToIPMField = IPMIdentifier; // DefinedType

let _cached_decoder_for_RepliedToIPMField: $.ASN1Decoder<RepliedToIPMField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepliedToIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepliedToIPMField} The decoded data structure.
 */
export function _decode_RepliedToIPMField(el: _Element): RepliedToIPMField {
    if (!_cached_decoder_for_RepliedToIPMField) {
        _cached_decoder_for_RepliedToIPMField = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_RepliedToIPMField(el);
}

let _cached_encoder_for_RepliedToIPMField: $.ASN1Encoder<RepliedToIPMField> | null = null;

/**
 * @summary Encodes a(n) RepliedToIPMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepliedToIPMField, encoded as an ASN.1 Element.
 */
export function _encode_RepliedToIPMField(
    value: RepliedToIPMField,
    elGetter: $.ASN1Encoder<RepliedToIPMField>
): _Element {
    if (!_cached_encoder_for_RepliedToIPMField) {
        _cached_encoder_for_RepliedToIPMField = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_RepliedToIPMField(value, elGetter);
}


/* eslint-enable */
