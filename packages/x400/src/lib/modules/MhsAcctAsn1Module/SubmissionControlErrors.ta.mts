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
    type SubmissionError,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta.mjs';
/**
 * @summary SubmissionControlErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControlErrors  ::=  SubmissionError(security-error | remote-bind-error)
 * ```
 */
export type SubmissionControlErrors = SubmissionError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControlErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControlErrors} The decoded data structure.
 */
export const _decode_SubmissionControlErrors: $.ASN1Decoder<SubmissionControlErrors> = _decode_SubmissionError;

/**
 * @summary Encodes a(n) SubmissionControlErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControlErrors, encoded as an ASN.1 Element.
 */
export const _encode_SubmissionControlErrors: $.ASN1Encoder<SubmissionControlErrors> = _encode_SubmissionError;


/* eslint-enable */
