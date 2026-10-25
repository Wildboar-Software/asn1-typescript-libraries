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
    type IndicatedTests,
    _decode_IndicatedTests,
    _encode_IndicatedTests,
} from '../Test-ASN1Module/IndicatedTests.ta.mjs';
/**
 * @summary TestTerminateInfo
 * @description
 *
 * M-ACTION information of testTerminateAction (confirmed): the session or
 * invocation ids to terminate. Directed at the original TARR. Controlled tests
 * only. Successful terminate runs each TO's termination sequence (possible
 * result reports with premature-termination if outcome not concluded, then
 * cleanup of MORT/AO test activity) and then deletes the TOs. Distinct from
 * abort (PT-DELETE of TOs, which emits no further result reports). ITU-T Rec.
 * X.745 (11/93) §9.8, 7.2.5, A.4.
 * [§9.8](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestTerminateInfo  ::=  IndicatedTests
 * ```
 */
export type TestTerminateInfo = IndicatedTests; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TestTerminateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestTerminateInfo} The decoded data structure.
 */
export const _decode_TestTerminateInfo: $.ASN1Decoder<TestTerminateInfo> = _decode_IndicatedTests;

/**
 * @summary Encodes a(n) TestTerminateInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestTerminateInfo, encoded as an ASN.1 Element.
 */
export const _encode_TestTerminateInfo: $.ASN1Encoder<TestTerminateInfo> = _encode_IndicatedTests;


/* eslint-enable */
