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
    type SubmissionControls,
    _decode_SubmissionControls,
    _encode_SubmissionControls,
} from '../MTSAbstractService/SubmissionControls.ta.mjs';
/**
 * @summary SubmissionControlArgument
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControlArgument  ::=  SubmissionControls
 * ```
 */
export type SubmissionControlArgument = SubmissionControls; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControlArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControlArgument} The decoded data structure.
 */
export const _decode_SubmissionControlArgument: $.ASN1Decoder<SubmissionControlArgument> = _decode_SubmissionControls;

/**
 * @summary Encodes a(n) SubmissionControlArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControlArgument, encoded as an ASN.1 Element.
 */
export const _encode_SubmissionControlArgument: $.ASN1Encoder<SubmissionControlArgument> = _encode_SubmissionControls;


/* eslint-enable */
