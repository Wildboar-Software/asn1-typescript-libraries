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
    MessageGroupRegistrations_Item,
    _decode_MessageGroupRegistrations_Item,
    _encode_MessageGroupRegistrations_Item,
} from '../MSAbstractService/MessageGroupRegistrations-Item.ta.mjs';
/**
 * @summary MessageGroupRegistrations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupRegistrations  ::=
 *   SEQUENCE SIZE (1..ub-default-registrations) OF
 *     CHOICE {register-group      [0]  MessageGroupNameAndDescriptor,
 *             deregister-group    [1]  MessageGroupName,
 *             change-descriptors  [2]  MessageGroupNameAndDescriptor}
 * ```
 */
export type MessageGroupRegistrations = MessageGroupRegistrations_Item[]; // SequenceOfType

let _cached_decoder_for_MessageGroupRegistrations: $.ASN1Decoder<MessageGroupRegistrations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupRegistrations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupRegistrations} The decoded data structure.
 */
export function _decode_MessageGroupRegistrations(el: _Element): MessageGroupRegistrations {
    if (!_cached_decoder_for_MessageGroupRegistrations) {
        _cached_decoder_for_MessageGroupRegistrations = $._decodeSequenceOf<MessageGroupRegistrations_Item>(
            () => _decode_MessageGroupRegistrations_Item
        );
    }
    return _cached_decoder_for_MessageGroupRegistrations(el);
}

let _cached_encoder_for_MessageGroupRegistrations: $.ASN1Encoder<MessageGroupRegistrations> | null = null;

/**
 * @summary Encodes a(n) MessageGroupRegistrations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupRegistrations, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupRegistrations(
    value: MessageGroupRegistrations,
    elGetter: $.ASN1Encoder<MessageGroupRegistrations>
): _Element {
    if (!_cached_encoder_for_MessageGroupRegistrations) {
        _cached_encoder_for_MessageGroupRegistrations = $._encodeSequenceOf<MessageGroupRegistrations_Item>(
            () => _encode_MessageGroupRegistrations_Item,
            $.BER
        );
    }
    return _cached_encoder_for_MessageGroupRegistrations(value, elGetter);
}


/* eslint-enable */
