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
    DeliveryError,
    _decode_DeliveryError,
    _encode_DeliveryError,
} from '../MhsAcctAsn1Module/DeliveryError.ta.mjs';
/**
 * @summary DeliveryControlErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControlErrors  ::=
 *   DeliveryError(control-violates-registration | security-error)
 * ```
 */
export type DeliveryControlErrors = DeliveryError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControlErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControlErrors} The decoded data structure.
 */
export const _decode_DeliveryControlErrors: $.ASN1Decoder<DeliveryControlErrors> = _decode_DeliveryError;

/**
 * @summary Encodes a(n) DeliveryControlErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControlErrors, encoded as an ASN.1 Element.
 */
export const _encode_DeliveryControlErrors: $.ASN1Encoder<DeliveryControlErrors> = _encode_DeliveryError;


/* eslint-enable */
