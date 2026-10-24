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
    type MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta.mjs';
/**
 * @summary CancelDeferredDeliveryArgument
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelDeferredDeliveryArgument  ::=  MessageSubmissionIdentifier
 * ```
 */
export type CancelDeferredDeliveryArgument = MessageSubmissionIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CancelDeferredDeliveryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CancelDeferredDeliveryArgument} The decoded data structure.
 */
export const _decode_CancelDeferredDeliveryArgument: $.ASN1Decoder<CancelDeferredDeliveryArgument> = _decode_MessageSubmissionIdentifier;

/**
 * @summary Encodes a(n) CancelDeferredDeliveryArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelDeferredDeliveryArgument, encoded as an ASN.1 Element.
 */
export const _encode_CancelDeferredDeliveryArgument: $.ASN1Encoder<CancelDeferredDeliveryArgument> = _encode_MessageSubmissionIdentifier;


/* eslint-enable */
