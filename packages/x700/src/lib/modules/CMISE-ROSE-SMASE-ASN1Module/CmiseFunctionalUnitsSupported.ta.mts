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
    FunctionalUnits,
    _decode_FunctionalUnits,
    _encode_FunctionalUnits,
} from '@wildboar/cmip';
/**
 * @summary CmiseFunctionalUnitsSupported
 * @description
 *
 * Syntax of the X.727 `cmiseFunctionalUnitsSupported`
 * attribute (`{crsAttribute 4}`) on `cmise`: CMISE functional
 * units supported by the ASE. ITU-T Rec. X.727 (03/99)
 * [§7.4](https://www.itu.int/rec/T-REC-X.727-199903-I),
 * Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmiseFunctionalUnitsSupported  ::=  FunctionalUnits
 * ```
 */
export type CmiseFunctionalUnitsSupported = FunctionalUnits; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CmiseFunctionalUnitsSupported
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmiseFunctionalUnitsSupported} The decoded data structure.
 */
export const _decode_CmiseFunctionalUnitsSupported: $.ASN1Decoder<CmiseFunctionalUnitsSupported> = _decode_FunctionalUnits;

/**
 * @summary Encodes a(n) CmiseFunctionalUnitsSupported into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmiseFunctionalUnitsSupported, encoded as an ASN.1 Element.
 */
export const _encode_CmiseFunctionalUnitsSupported: $.ASN1Encoder<CmiseFunctionalUnitsSupported> = _encode_FunctionalUnits;


/* eslint-enable */
