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
    ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose';
/**
 * @summary MessageDeliveryPDUs88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryPDUs88  ::=  ROS-SingleAS{{MTSInvokeIds}, delivery-88}
 * ```
 */
export type MessageDeliveryPDUs88 = ROS_SingleAS; // DefinedType

let _cached_decoder_for_MessageDeliveryPDUs88: $.ASN1Decoder<MessageDeliveryPDUs88> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryPDUs88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryPDUs88} The decoded data structure.
 */
export function _decode_MessageDeliveryPDUs88(el: _Element): MessageDeliveryPDUs88 {
    if (!_cached_decoder_for_MessageDeliveryPDUs88) {
        _cached_decoder_for_MessageDeliveryPDUs88 = _decode_ROS_SingleAS;
    }
    return _cached_decoder_for_MessageDeliveryPDUs88(el);
}

let _cached_encoder_for_MessageDeliveryPDUs88: $.ASN1Encoder<MessageDeliveryPDUs88> | null = null;

/**
 * @summary Encodes a(n) MessageDeliveryPDUs88 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryPDUs88, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryPDUs88(
    value: MessageDeliveryPDUs88,
    elGetter: $.ASN1Encoder<MessageDeliveryPDUs88>
): _Element {
    if (!_cached_encoder_for_MessageDeliveryPDUs88) {
        _cached_encoder_for_MessageDeliveryPDUs88 = _encode_ROS_SingleAS;
    }
    return _cached_encoder_for_MessageDeliveryPDUs88(value, elGetter);
}


/* eslint-enable */
