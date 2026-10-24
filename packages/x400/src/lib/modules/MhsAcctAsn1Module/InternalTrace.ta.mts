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
    type InternalTraceInformation,
    _decode_InternalTraceInformation,
    _encode_InternalTraceInformation,
} from '../MTAAbstractService/InternalTraceInformation.ta.mjs';
/**
 * @summary InternalTrace
 * @description
 *
 * Trace-information documents the actions taken on a message, probe or report by each MD
 * through which it passes as it is transferred through the MTS. Internal-trace-information
 * documents the actions taken on a message, probe or report by each MTA through which it
 * passes as it is transferred through an MD. See ITU-T X.411 (1999), §12.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalTrace  ::=  InternalTraceInformation
 * ```
 */
export type InternalTrace = InternalTraceInformation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InternalTrace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalTrace} The decoded data structure.
 */
export const _decode_InternalTrace: $.ASN1Decoder<InternalTrace> = _decode_InternalTraceInformation;

/**
 * @summary Encodes a(n) InternalTrace into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalTrace, encoded as an ASN.1 Element.
 */
export const _encode_InternalTrace: $.ASN1Encoder<InternalTrace> = _encode_InternalTraceInformation;


/* eslint-enable */
