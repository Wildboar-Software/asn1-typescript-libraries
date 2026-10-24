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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/**
 * @summary SubjectSubmissionIdentifier
 * @description
 *
 * This argument contains the message-submission-identifier or the
 * probe-submission-identifier of the subject of the report. It shall be supplied by the
 * MTS. See ITU-T X.411 (1999), §8.3.1.2.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectSubmissionIdentifier  ::=  MTSIdentifier
 * ```
 */
export type SubjectSubmissionIdentifier = MTSIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectSubmissionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectSubmissionIdentifier} The decoded data structure.
 */
export const _decode_SubjectSubmissionIdentifier: $.ASN1Decoder<SubjectSubmissionIdentifier> = _decode_MTSIdentifier;

/**
 * @summary Encodes a(n) SubjectSubmissionIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectSubmissionIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_SubjectSubmissionIdentifier: $.ASN1Encoder<SubjectSubmissionIdentifier> = _encode_MTSIdentifier;


/* eslint-enable */
