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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MhsAcctAsn1Module/RecipientName.ta.mjs';
/**
 * @summary RecipientsOnResponsibilityList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientsOnResponsibilityList  ::=  RecipientName
 * ```
 */
export type RecipientsOnResponsibilityList = RecipientName; // DefinedType

let _cached_decoder_for_RecipientsOnResponsibilityList: $.ASN1Decoder<RecipientsOnResponsibilityList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientsOnResponsibilityList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientsOnResponsibilityList} The decoded data structure.
 */
export function _decode_RecipientsOnResponsibilityList(el: _Element) {
    if (!_cached_decoder_for_RecipientsOnResponsibilityList) {
        _cached_decoder_for_RecipientsOnResponsibilityList = _decode_RecipientName;
    }
    return _cached_decoder_for_RecipientsOnResponsibilityList(el);
}

let _cached_encoder_for_RecipientsOnResponsibilityList: $.ASN1Encoder<RecipientsOnResponsibilityList> | null = null;

/**
 * @summary Encodes a(n) RecipientsOnResponsibilityList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientsOnResponsibilityList, encoded as an ASN.1 Element.
 */
export function _encode_RecipientsOnResponsibilityList(
    value: RecipientsOnResponsibilityList,
    elGetter: $.ASN1Encoder<RecipientsOnResponsibilityList>
) {
    if (!_cached_encoder_for_RecipientsOnResponsibilityList) {
        _cached_encoder_for_RecipientsOnResponsibilityList = _encode_RecipientName;
    }
    return _cached_encoder_for_RecipientsOnResponsibilityList(value, elGetter);
}


/* eslint-enable */
