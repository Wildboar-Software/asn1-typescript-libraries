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
 * @summary RelatedIPMsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedIPMsSubfield  ::=  IPMIdentifier
 * ```
 */
export type RelatedIPMsSubfield = IPMIdentifier; // DefinedType

let _cached_decoder_for_RelatedIPMsSubfield: $.ASN1Decoder<RelatedIPMsSubfield> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedIPMsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedIPMsSubfield} The decoded data structure.
 */
export function _decode_RelatedIPMsSubfield(el: _Element): RelatedIPMsSubfield {
    if (!_cached_decoder_for_RelatedIPMsSubfield) {
        _cached_decoder_for_RelatedIPMsSubfield = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_RelatedIPMsSubfield(el);
}

let _cached_encoder_for_RelatedIPMsSubfield: $.ASN1Encoder<RelatedIPMsSubfield> | null = null;

/**
 * @summary Encodes a(n) RelatedIPMsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedIPMsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_RelatedIPMsSubfield(
    value: RelatedIPMsSubfield,
    elGetter: $.ASN1Encoder<RelatedIPMsSubfield>
): _Element {
    if (!_cached_encoder_for_RelatedIPMsSubfield) {
        _cached_encoder_for_RelatedIPMsSubfield = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_RelatedIPMsSubfield(value, elGetter);
}


/* eslint-enable */
