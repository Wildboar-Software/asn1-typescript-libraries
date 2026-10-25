/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    type ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose';
/**
 * @summary MessageDeliveryPDUs
 * @description
 *
 * Defined in ITU-T X.419 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryPDUs  ::=  ROS-SingleAS{{MTSInvokeIds}, delivery}
 * ```
 */
export type MessageDeliveryPDUs = ROS_SingleAS; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryPDUs} The decoded data structure.
 */
export const _decode_MessageDeliveryPDUs: $.ASN1Decoder<MessageDeliveryPDUs> = _decode_ROS_SingleAS;

/**
 * @summary Encodes a(n) MessageDeliveryPDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryPDUs, encoded as an ASN.1 Element.
 */
export const _encode_MessageDeliveryPDUs: $.ASN1Encoder<MessageDeliveryPDUs> = _encode_ROS_SingleAS;


/* eslint-enable */
