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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
/**
 * @summary DerivedFrom
 * @description
 *
 * GDMO `DERIVED FROM` construct: immediate superclasses of a managed
 * object class. Syntax of `derivedFrom` on a managed-object-class
 * template. (Amd.1 also uses this type for GRM relationship-class
 * superclasses, in a different module.) ITU-T Rec. X.750 (10/96)
 * [§8.1.2.7](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
 * Amd.1 (10/97) [item 11](https://www.itu.int/rec/T-REC-X.750-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DerivedFrom  ::=  TemplateList
 * ```
 */
export type DerivedFrom = TemplateList; // DefinedType

let _cached_decoder_for_DerivedFrom: $.ASN1Decoder<DerivedFrom> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DerivedFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DerivedFrom} The decoded data structure.
 */
export function _decode_DerivedFrom(el: _Element): DerivedFrom {
    if (!_cached_decoder_for_DerivedFrom) {
        _cached_decoder_for_DerivedFrom = _decode_TemplateList;
    }
    return _cached_decoder_for_DerivedFrom(el);
}

let _cached_encoder_for_DerivedFrom: $.ASN1Encoder<DerivedFrom> | null = null;

/**
 * @summary Encodes a(n) DerivedFrom into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DerivedFrom, encoded as an ASN.1 Element.
 */
export function _encode_DerivedFrom(
    value: DerivedFrom,
    elGetter: $.ASN1Encoder<DerivedFrom>
): _Element {
    if (!_cached_encoder_for_DerivedFrom) {
        _cached_encoder_for_DerivedFrom = _encode_TemplateList;
    }
    return _cached_encoder_for_DerivedFrom(value, elGetter);
}


/* eslint-enable */
