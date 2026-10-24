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
    type TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.mjs';
/**
 * @summary Trace
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Trace  ::=  TraceInformation
 * ```
 */
export type Trace = TraceInformation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Trace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Trace} The decoded data structure.
 */
export const _decode_Trace: $.ASN1Decoder<Trace> = _decode_TraceInformation;

/**
 * @summary Encodes a(n) Trace into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Trace, encoded as an ASN.1 Element.
 */
export const _encode_Trace: $.ASN1Encoder<Trace> = _encode_TraceInformation;


/* eslint-enable */
