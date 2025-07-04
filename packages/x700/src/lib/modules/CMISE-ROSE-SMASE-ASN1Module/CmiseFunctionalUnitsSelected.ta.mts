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
 * @summary CmiseFunctionalUnitsSelected
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmiseFunctionalUnitsSelected  ::=  FunctionalUnits
 * ```
 */
export type CmiseFunctionalUnitsSelected = FunctionalUnits; // DefinedType

let _cached_decoder_for_CmiseFunctionalUnitsSelected: $.ASN1Decoder<CmiseFunctionalUnitsSelected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CmiseFunctionalUnitsSelected
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmiseFunctionalUnitsSelected} The decoded data structure.
 */
export function _decode_CmiseFunctionalUnitsSelected(el: _Element): CmiseFunctionalUnitsSelected {
    if (!_cached_decoder_for_CmiseFunctionalUnitsSelected) {
        _cached_decoder_for_CmiseFunctionalUnitsSelected = _decode_FunctionalUnits;
    }
    return _cached_decoder_for_CmiseFunctionalUnitsSelected(el);
}

let _cached_encoder_for_CmiseFunctionalUnitsSelected: $.ASN1Encoder<CmiseFunctionalUnitsSelected> | null = null;

/**
 * @summary Encodes a(n) CmiseFunctionalUnitsSelected into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmiseFunctionalUnitsSelected, encoded as an ASN.1 Element.
 */
export function _encode_CmiseFunctionalUnitsSelected(
    value: CmiseFunctionalUnitsSelected,
    elGetter: $.ASN1Encoder<CmiseFunctionalUnitsSelected>
): _Element {
    if (!_cached_encoder_for_CmiseFunctionalUnitsSelected) {
        _cached_encoder_for_CmiseFunctionalUnitsSelected = _encode_FunctionalUnits;
    }
    return _cached_encoder_for_CmiseFunctionalUnitsSelected(value, elGetter);
}


/* eslint-enable */
