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
    type DeliveryError,
    _decode_DeliveryError,
    _encode_DeliveryError,
} from '../MhsAcctAsn1Module/DeliveryError.ta.mjs';
/**
 * @summary MessageDeliveryErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryErrors  ::=
 *   DeliveryError
 *     (delivery-control-violation | security-error |
 *      unsupported-critical-function)
 * ```
 */
export type MessageDeliveryErrors = DeliveryError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryErrors} The decoded data structure.
 */
export const _decode_MessageDeliveryErrors: $.ASN1Decoder<MessageDeliveryErrors> = _decode_DeliveryError;

/**
 * @summary Encodes a(n) MessageDeliveryErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryErrors, encoded as an ASN.1 Element.
 */
export const _encode_MessageDeliveryErrors: $.ASN1Encoder<MessageDeliveryErrors> = _encode_DeliveryError;


/* eslint-enable */
