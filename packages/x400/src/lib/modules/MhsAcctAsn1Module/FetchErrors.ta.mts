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
    RetrievalError,
    _decode_RetrievalError,
    _encode_RetrievalError,
} from '../MhsAcctAsn1Module/RetrievalError.ta.mjs';
/**
 * @summary FetchErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchErrors  ::=
 *   RetrievalError(INCLUDES SummarizeErrors | fetch-restriction-error)
 * ```
 */
export type FetchErrors = RetrievalError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) FetchErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchErrors} The decoded data structure.
 */
export const _decode_FetchErrors: $.ASN1Decoder<FetchErrors> = _decode_RetrievalError;

/**
 * @summary Encodes a(n) FetchErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchErrors, encoded as an ASN.1 Element.
 */
export const _encode_FetchErrors: $.ASN1Encoder<FetchErrors> = _encode_RetrievalError;


/* eslint-enable */
