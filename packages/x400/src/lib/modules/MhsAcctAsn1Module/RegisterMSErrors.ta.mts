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
    RetrievalError,
    _decode_RetrievalError,
    _encode_RetrievalError,
} from '../MhsAcctAsn1Module/RetrievalError.ta.mjs';
/**
 * @summary RegisterMSErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterMSErrors  ::=
 *   RetrievalError
 *     (attribute-error | auto-action-request-error | invalid-parameter-error |
 *      security-error | service-error)
 * ```
 */
export type RegisterMSErrors = RetrievalError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterMSErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterMSErrors} The decoded data structure.
 */
export const _decode_RegisterMSErrors: $.ASN1Decoder<RegisterMSErrors> = _decode_RetrievalError;

/**
 * @summary Encodes a(n) RegisterMSErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterMSErrors, encoded as an ASN.1 Element.
 */
export const _encode_RegisterMSErrors: $.ASN1Encoder<RegisterMSErrors> = _encode_RetrievalError;


/* eslint-enable */
