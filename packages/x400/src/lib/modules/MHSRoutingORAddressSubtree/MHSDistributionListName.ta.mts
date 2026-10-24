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
    type DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/dn';
/**
 * @summary MHSDistributionListName
 * @description
 *
 * Defined in ITU-T X.412 (1999) (§12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MHSDistributionListName  ::=  DistinguishedName
 * ```
 */
export type MHSDistributionListName = DistinguishedName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MHSDistributionListName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MHSDistributionListName} The decoded data structure.
 */
export const _decode_MHSDistributionListName: $.ASN1Decoder<MHSDistributionListName> = _decode_DistinguishedName;

/**
 * @summary Encodes a(n) MHSDistributionListName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MHSDistributionListName, encoded as an ASN.1 Element.
 */
export const _encode_MHSDistributionListName: $.ASN1Encoder<MHSDistributionListName> = _encode_DistinguishedName;


/* eslint-enable */
