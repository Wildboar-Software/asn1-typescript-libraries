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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.mjs';
/**
 * @summary CopyRecipientsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CopyRecipientsSubfield  ::=  RecipientSpecifier
 * ```
 */
export type CopyRecipientsSubfield = RecipientSpecifier; // DefinedType

let _cached_decoder_for_CopyRecipientsSubfield: $.ASN1Decoder<CopyRecipientsSubfield> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CopyRecipientsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CopyRecipientsSubfield} The decoded data structure.
 */
export function _decode_CopyRecipientsSubfield(el: _Element) {
    if (!_cached_decoder_for_CopyRecipientsSubfield) {
        _cached_decoder_for_CopyRecipientsSubfield = _decode_RecipientSpecifier;
    }
    return _cached_decoder_for_CopyRecipientsSubfield(el);
}

let _cached_encoder_for_CopyRecipientsSubfield: $.ASN1Encoder<CopyRecipientsSubfield> | null = null;

/**
 * @summary Encodes a(n) CopyRecipientsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CopyRecipientsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_CopyRecipientsSubfield(
    value: CopyRecipientsSubfield,
    elGetter: $.ASN1Encoder<CopyRecipientsSubfield>
) {
    if (!_cached_encoder_for_CopyRecipientsSubfield) {
        _cached_encoder_for_CopyRecipientsSubfield = _encode_RecipientSpecifier;
    }
    return _cached_encoder_for_CopyRecipientsSubfield(value, elGetter);
}


/* eslint-enable */
