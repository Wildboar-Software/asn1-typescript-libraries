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
    ProbeSubmissionEnvelope,
    _decode_ProbeSubmissionEnvelope,
    _encode_ProbeSubmissionEnvelope,
} from '../MTSAbstractService/ProbeSubmissionEnvelope.ta.mjs';
/**
 * @summary ProbeSubmissionArgument
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeSubmissionArgument  ::=  ProbeSubmissionEnvelope
 * ```
 */
export type ProbeSubmissionArgument = ProbeSubmissionEnvelope; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionArgument} The decoded data structure.
 */
export const _decode_ProbeSubmissionArgument: $.ASN1Decoder<ProbeSubmissionArgument> = _decode_ProbeSubmissionEnvelope;

/**
 * @summary Encodes a(n) ProbeSubmissionArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeSubmissionArgument, encoded as an ASN.1 Element.
 */
export const _encode_ProbeSubmissionArgument: $.ASN1Encoder<ProbeSubmissionArgument> = _encode_ProbeSubmissionEnvelope;


/* eslint-enable */
