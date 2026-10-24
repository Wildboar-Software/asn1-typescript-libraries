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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module';
/**
 * @summary TestActionPerformerId
 * @description
 *
 * Naming / identifying attribute of a testActionPerformer support object
 * (optional TARR). Syntax SimpleNameType; added in Cor.1. MATCHES FOR EQUALITY
 * (Cor.1 A.3.9, replacing SET-COMPARISON / SET-INTERSECTION). ITU-T Rec. X.745
 * (11/93) §8.5.2.3, A.3.9.
 * [§8.5.2.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
 * X.745 Cor.1 (08/97) A.3.9, A.7.1.
 * https://www.itu.int/rec/T-REC-X.745-199708-I_Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestActionPerformerId  ::=  SimpleNameType
 * ```
 */
export type TestActionPerformerId = SimpleNameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TestActionPerformerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestActionPerformerId} The decoded data structure.
 */
export const _decode_TestActionPerformerId: $.ASN1Decoder<TestActionPerformerId> = _decode_SimpleNameType;

/**
 * @summary Encodes a(n) TestActionPerformerId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestActionPerformerId, encoded as an ASN.1 Element.
 */
export const _encode_TestActionPerformerId: $.ASN1Encoder<TestActionPerformerId> = _encode_SimpleNameType;


/* eslint-enable */
