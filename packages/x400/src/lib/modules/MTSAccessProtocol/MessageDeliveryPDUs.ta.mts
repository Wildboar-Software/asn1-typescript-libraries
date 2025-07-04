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
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/ROS-SingleAS.ta.mjs';
/**
 * @summary MessageDeliveryPDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryPDUs  ::=  ROS-SingleAS{{MTSInvokeIds}, delivery}
 * ```
 */
export type MessageDeliveryPDUs = ROS_SingleAS; // DefinedType

let _cached_decoder_for_MessageDeliveryPDUs: $.ASN1Decoder<MessageDeliveryPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryPDUs} The decoded data structure.
 */
export function _decode_MessageDeliveryPDUs(el: _Element): MessageDeliveryPDUs {
    if (!_cached_decoder_for_MessageDeliveryPDUs) {
        _cached_decoder_for_MessageDeliveryPDUs = _decode_ROS_SingleAS;
    }
    return _cached_decoder_for_MessageDeliveryPDUs(el);
}

let _cached_encoder_for_MessageDeliveryPDUs: $.ASN1Encoder<MessageDeliveryPDUs> | null = null;

/**
 * @summary Encodes a(n) MessageDeliveryPDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryPDUs, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryPDUs(
    value: MessageDeliveryPDUs,
    elGetter: $.ASN1Encoder<MessageDeliveryPDUs>
): _Element {
    if (!_cached_encoder_for_MessageDeliveryPDUs) {
        _cached_encoder_for_MessageDeliveryPDUs = _encode_ROS_SingleAS;
    }
    return _cached_encoder_for_MessageDeliveryPDUs(value, elGetter);
}


/* eslint-enable */
