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
    DeliveredRecipientField,
    _decode_DeliveredRecipientField,
    _encode_DeliveredRecipientField,
} from '../MhsAcctAsn1Module/DeliveredRecipientField.ta.mjs';
/**
 * @summary DestinationDomainDeliveryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationDomainDeliveryList  ::=  SET OF DeliveredRecipientField
 * ```
 */
export type DestinationDomainDeliveryList = DeliveredRecipientField[]; // SetOfType

let _cached_decoder_for_DestinationDomainDeliveryList: $.ASN1Decoder<DestinationDomainDeliveryList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationDomainDeliveryList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DestinationDomainDeliveryList} The decoded data structure.
 */
export function _decode_DestinationDomainDeliveryList(el: _Element) {
    if (!_cached_decoder_for_DestinationDomainDeliveryList) {
        _cached_decoder_for_DestinationDomainDeliveryList = $._decodeSetOf<DeliveredRecipientField>(
            () => _decode_DeliveredRecipientField
        );
    }
    return _cached_decoder_for_DestinationDomainDeliveryList(el);
}

let _cached_encoder_for_DestinationDomainDeliveryList: $.ASN1Encoder<DestinationDomainDeliveryList> | null = null;

/**
 * @summary Encodes a(n) DestinationDomainDeliveryList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationDomainDeliveryList, encoded as an ASN.1 Element.
 */
export function _encode_DestinationDomainDeliveryList(
    value: DestinationDomainDeliveryList,
    elGetter: $.ASN1Encoder<DestinationDomainDeliveryList>
) {
    if (!_cached_encoder_for_DestinationDomainDeliveryList) {
        _cached_encoder_for_DestinationDomainDeliveryList = $._encodeSetOf<DeliveredRecipientField>(
            () => _encode_DeliveredRecipientField,
            $.BER
        );
    }
    return _cached_encoder_for_DestinationDomainDeliveryList(value, elGetter);
}


/* eslint-enable */
