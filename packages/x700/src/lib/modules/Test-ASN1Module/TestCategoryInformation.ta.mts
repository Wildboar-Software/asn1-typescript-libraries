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
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module';
/**
 * @summary TestCategoryInformation
 * @description
 *
 * Test-specific input whose syntax is a GDMO parameter of the test category
 * (alias of X.721 AdditionalInformation; added as a named type by Cor.2). May
 * include data needed to execute but not held in TO attributes. Optional on
 * controlled requests; mandatory on uncontrolled requests. ITU-T Rec. X.745
 * (11/93) §8.4.2.4.
 * [§8.4.2.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 * X.745 Cor.2 (06/98) A.7.2.
 * https://www.itu.int/rec/T-REC-X.745-199806-I_Cor2
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestCategoryInformation  ::=  AdditionalInformation
 * ```
 */
export type TestCategoryInformation = AdditionalInformation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TestCategoryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestCategoryInformation} The decoded data structure.
 */
export const _decode_TestCategoryInformation: $.ASN1Decoder<TestCategoryInformation> = _decode_AdditionalInformation;

/**
 * @summary Encodes a(n) TestCategoryInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestCategoryInformation, encoded as an ASN.1 Element.
 */
export const _encode_TestCategoryInformation: $.ASN1Encoder<TestCategoryInformation> = _encode_AdditionalInformation;


/* eslint-enable */
