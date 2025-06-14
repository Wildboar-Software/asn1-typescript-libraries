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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BlindCopyRecipientsSubfield */
/**
 * @summary BlindCopyRecipientsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BlindCopyRecipientsSubfield  ::=  RecipientSpecifier
 * ```
 */
export type BlindCopyRecipientsSubfield = RecipientSpecifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION BlindCopyRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BlindCopyRecipientsSubfield */
let _cached_decoder_for_BlindCopyRecipientsSubfield: $.ASN1Decoder<BlindCopyRecipientsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BlindCopyRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _decode_BlindCopyRecipientsSubfield */
/**
 * @summary Decodes an ASN.1 element into a(n) BlindCopyRecipientsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BlindCopyRecipientsSubfield} The decoded data structure.
 */
export function _decode_BlindCopyRecipientsSubfield(el: _Element) {
    if (!_cached_decoder_for_BlindCopyRecipientsSubfield) {
        _cached_decoder_for_BlindCopyRecipientsSubfield = _decode_RecipientSpecifier;
    }
    return _cached_decoder_for_BlindCopyRecipientsSubfield(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BlindCopyRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BlindCopyRecipientsSubfield */
let _cached_encoder_for_BlindCopyRecipientsSubfield: $.ASN1Encoder<BlindCopyRecipientsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BlindCopyRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _encode_BlindCopyRecipientsSubfield */
/**
 * @summary Encodes a(n) BlindCopyRecipientsSubfield into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlindCopyRecipientsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_BlindCopyRecipientsSubfield(
    value: BlindCopyRecipientsSubfield,
    elGetter: $.ASN1Encoder<BlindCopyRecipientsSubfield>
) {
    if (!_cached_encoder_for_BlindCopyRecipientsSubfield) {
        _cached_encoder_for_BlindCopyRecipientsSubfield = _encode_RecipientSpecifier;
    }
    return _cached_encoder_for_BlindCopyRecipientsSubfield(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BlindCopyRecipientsSubfield */

/* eslint-enable */
