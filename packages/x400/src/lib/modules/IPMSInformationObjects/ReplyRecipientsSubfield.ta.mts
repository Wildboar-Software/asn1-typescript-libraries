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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
/**
 * @summary ReplyRecipientsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyRecipientsSubfield  ::=
 *   ORDescriptor(WITH COMPONENTS {
 *                  ...,
 *                  formal-name  PRESENT
 *                })
 * ```
 */
export type ReplyRecipientsSubfield = ORDescriptor; // DefinedType

let _cached_decoder_for_ReplyRecipientsSubfield: $.ASN1Decoder<ReplyRecipientsSubfield> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyRecipientsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyRecipientsSubfield} The decoded data structure.
 */
export function _decode_ReplyRecipientsSubfield(el: _Element): ReplyRecipientsSubfield {
    if (!_cached_decoder_for_ReplyRecipientsSubfield) {
        _cached_decoder_for_ReplyRecipientsSubfield = _decode_ORDescriptor;
    }
    return _cached_decoder_for_ReplyRecipientsSubfield(el);
}

let _cached_encoder_for_ReplyRecipientsSubfield: $.ASN1Encoder<ReplyRecipientsSubfield> | null = null;

/**
 * @summary Encodes a(n) ReplyRecipientsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyRecipientsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_ReplyRecipientsSubfield(
    value: ReplyRecipientsSubfield,
    elGetter: $.ASN1Encoder<ReplyRecipientsSubfield>
): _Element {
    if (!_cached_encoder_for_ReplyRecipientsSubfield) {
        _cached_encoder_for_ReplyRecipientsSubfield = _encode_ORDescriptor;
    }
    return _cached_encoder_for_ReplyRecipientsSubfield(value, elGetter);
}


/* eslint-enable */
