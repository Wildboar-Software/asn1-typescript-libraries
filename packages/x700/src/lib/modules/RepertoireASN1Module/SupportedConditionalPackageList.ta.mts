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
    Packages,
    _decode_Packages,
    _encode_Packages,
} from '@wildboar/attribute-asn1module';
/**
 * @summary SupportedConditionalPackageList
 * @description
 *
 * Conditional packages supported in the implementation of a particular
 * managed object class. Mandatory, read-only on a managed-object-class
 * repertoire object. Matches for set-comparison and set-intersection.
 * ITU-T Rec. X.750 (10/96)
 * [§8.1.1.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * A.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedConditionalPackageList  ::=  Packages
 * ```
 */
export type SupportedConditionalPackageList = Packages; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedConditionalPackageList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedConditionalPackageList} The decoded data structure.
 */
export const _decode_SupportedConditionalPackageList: $.ASN1Decoder<SupportedConditionalPackageList> = _decode_Packages;

/**
 * @summary Encodes a(n) SupportedConditionalPackageList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedConditionalPackageList, encoded as an ASN.1 Element.
 */
export const _encode_SupportedConditionalPackageList: $.ASN1Encoder<SupportedConditionalPackageList> = _encode_Packages;


/* eslint-enable */
