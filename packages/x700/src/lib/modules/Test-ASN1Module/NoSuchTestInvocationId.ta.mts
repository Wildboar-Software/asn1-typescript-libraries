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
    type TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
/**
 * @summary NoSuchTestInvocationId
 * @description
 *
 * Specific error on suspend/resume/terminate: no test with this invocation id
 * exists. Syntax is that TestInvocationId. ITU-T Rec. X.745 (11/93) §8.4.4.9,
 * A.6.
 * [§8.4.4.9](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchTestInvocationId  ::=  TestInvocationId
 * ```
 */
export type NoSuchTestInvocationId = TestInvocationId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchTestInvocationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchTestInvocationId} The decoded data structure.
 */
export const _decode_NoSuchTestInvocationId: $.ASN1Decoder<NoSuchTestInvocationId> = _decode_TestInvocationId;

/**
 * @summary Encodes a(n) NoSuchTestInvocationId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchTestInvocationId, encoded as an ASN.1 Element.
 */
export const _encode_NoSuchTestInvocationId: $.ASN1Encoder<NoSuchTestInvocationId> = _encode_TestInvocationId;


/* eslint-enable */
