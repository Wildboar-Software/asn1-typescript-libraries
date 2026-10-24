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
    type MessageDeliveryErrors,
    _decode_MessageDeliveryErrors,
    _encode_MessageDeliveryErrors,
} from '../MhsAcctAsn1Module/MessageDeliveryErrors.ta.mjs';
/**
 * @summary ReportDeliveryErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryErrors  ::=  MessageDeliveryErrors
 * ```
 */
export type ReportDeliveryErrors = MessageDeliveryErrors; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReportDeliveryErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDeliveryErrors} The decoded data structure.
 */
export const _decode_ReportDeliveryErrors: $.ASN1Decoder<ReportDeliveryErrors> = _decode_MessageDeliveryErrors;

/**
 * @summary Encodes a(n) ReportDeliveryErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDeliveryErrors, encoded as an ASN.1 Element.
 */
export const _encode_ReportDeliveryErrors: $.ASN1Encoder<ReportDeliveryErrors> = _encode_MessageDeliveryErrors;


/* eslint-enable */
