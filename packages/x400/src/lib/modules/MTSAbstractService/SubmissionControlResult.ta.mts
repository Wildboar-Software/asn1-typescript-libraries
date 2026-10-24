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
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.mjs';
/**
 * @summary SubmissionControlResult
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControlResult  ::=  Waiting
 * ```
 */
export type SubmissionControlResult = Waiting; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControlResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControlResult} The decoded data structure.
 */
export const _decode_SubmissionControlResult: $.ASN1Decoder<SubmissionControlResult> = _decode_Waiting;

/**
 * @summary Encodes a(n) SubmissionControlResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControlResult, encoded as an ASN.1 Element.
 */
export const _encode_SubmissionControlResult: $.ASN1Encoder<SubmissionControlResult> = _encode_Waiting;


/* eslint-enable */
