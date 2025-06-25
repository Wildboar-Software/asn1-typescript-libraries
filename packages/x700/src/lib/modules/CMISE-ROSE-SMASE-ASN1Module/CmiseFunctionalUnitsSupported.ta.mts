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
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/FunctionalUnits.ta.mjs';
/**
 * @summary CmiseFunctionalUnitsSupported
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmiseFunctionalUnitsSupported  ::=  FunctionalUnits
 * ```
 */
export type CmiseFunctionalUnitsSupported = FunctionalUnits; // DefinedType

let _cached_decoder_for_CmiseFunctionalUnitsSupported: $.ASN1Decoder<CmiseFunctionalUnitsSupported> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CmiseFunctionalUnitsSupported
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmiseFunctionalUnitsSupported} The decoded data structure.
 */
export function _decode_CmiseFunctionalUnitsSupported(el: _Element): CmiseFunctionalUnitsSupported {
    if (!_cached_decoder_for_CmiseFunctionalUnitsSupported) {
        _cached_decoder_for_CmiseFunctionalUnitsSupported = _decode_FunctionalUnits;
    }
    return _cached_decoder_for_CmiseFunctionalUnitsSupported(el);
}

let _cached_encoder_for_CmiseFunctionalUnitsSupported: $.ASN1Encoder<CmiseFunctionalUnitsSupported> | null = null;

/**
 * @summary Encodes a(n) CmiseFunctionalUnitsSupported into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmiseFunctionalUnitsSupported, encoded as an ASN.1 Element.
 */
export function _encode_CmiseFunctionalUnitsSupported(
    value: CmiseFunctionalUnitsSupported,
    elGetter: $.ASN1Encoder<CmiseFunctionalUnitsSupported>
): _Element {
    if (!_cached_encoder_for_CmiseFunctionalUnitsSupported) {
        _cached_encoder_for_CmiseFunctionalUnitsSupported = _encode_FunctionalUnits;
    }
    return _cached_encoder_for_CmiseFunctionalUnitsSupported(value, elGetter);
}


/* eslint-enable */
