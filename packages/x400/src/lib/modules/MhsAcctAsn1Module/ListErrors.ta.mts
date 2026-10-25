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
    type SummarizeErrors,
    _decode_SummarizeErrors,
    _encode_SummarizeErrors,
} from '../MhsAcctAsn1Module/SummarizeErrors.ta.mjs';
/**
 * @summary ListErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListErrors  ::=  SummarizeErrors
 * ```
 */
export type ListErrors = SummarizeErrors; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ListErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListErrors} The decoded data structure.
 */
export const _decode_ListErrors: $.ASN1Decoder<ListErrors> = _decode_SummarizeErrors;

/**
 * @summary Encodes a(n) ListErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListErrors, encoded as an ASN.1 Element.
 */
export const _encode_ListErrors: $.ASN1Encoder<ListErrors> = _encode_SummarizeErrors;


/* eslint-enable */
