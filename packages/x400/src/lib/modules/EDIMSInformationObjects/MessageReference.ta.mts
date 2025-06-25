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
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
/**
 * @summary MessageReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageReference  ::=  EDIMIdentifier
 * ```
 */
export type MessageReference = EDIMIdentifier; // DefinedType

let _cached_decoder_for_MessageReference: $.ASN1Decoder<MessageReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageReference} The decoded data structure.
 */
export function _decode_MessageReference(el: _Element): MessageReference {
    if (!_cached_decoder_for_MessageReference) {
        _cached_decoder_for_MessageReference = _decode_EDIMIdentifier;
    }
    return _cached_decoder_for_MessageReference(el);
}

let _cached_encoder_for_MessageReference: $.ASN1Encoder<MessageReference> | null = null;

/**
 * @summary Encodes a(n) MessageReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageReference, encoded as an ASN.1 Element.
 */
export function _encode_MessageReference(
    value: MessageReference,
    elGetter: $.ASN1Encoder<MessageReference>
): _Element {
    if (!_cached_encoder_for_MessageReference) {
        _cached_encoder_for_MessageReference = _encode_EDIMIdentifier;
    }
    return _cached_encoder_for_MessageReference(value, elGetter);
}


/* eslint-enable */
