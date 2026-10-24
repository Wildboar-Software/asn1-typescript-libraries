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
    SubmissionError,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta.mjs';
/**
 * @summary MessageSubmissionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionErrors  ::=
 *   SubmissionError
 *     (submission-control-violated | element-of-service-not-subscribed |
 *      originator-invalid | recipient-improperly-specified | inconsistent-request
 *      | security-error | unsupported-critical-function | remote-bind-error)
 * ```
 */
export type MessageSubmissionErrors = SubmissionError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionErrors} The decoded data structure.
 */
export const _decode_MessageSubmissionErrors: $.ASN1Decoder<MessageSubmissionErrors> = _decode_SubmissionError;

/**
 * @summary Encodes a(n) MessageSubmissionErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionErrors, encoded as an ASN.1 Element.
 */
export const _encode_MessageSubmissionErrors: $.ASN1Encoder<MessageSubmissionErrors> = _encode_SubmissionError;


/* eslint-enable */
