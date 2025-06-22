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
    FunctionalUnitPackage,
    _decode_FunctionalUnitPackage,
    _encode_FunctionalUnitPackage,
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackage.ta.mjs';

/**
 * @summary SmaseFunctionalUnits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SmaseFunctionalUnits  ::=  SET OF FunctionalUnitPackage
 * ```
 */
export type SmaseFunctionalUnits = FunctionalUnitPackage[]; // SetOfType

let _cached_decoder_for_SmaseFunctionalUnits: $.ASN1Decoder<SmaseFunctionalUnits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmaseFunctionalUnits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SmaseFunctionalUnits} The decoded data structure.
 */
export function _decode_SmaseFunctionalUnits(el: _Element) {
    if (!_cached_decoder_for_SmaseFunctionalUnits) {
        _cached_decoder_for_SmaseFunctionalUnits = $._decodeSetOf<FunctionalUnitPackage>(
            () => _decode_FunctionalUnitPackage
        );
    }
    return _cached_decoder_for_SmaseFunctionalUnits(el);
}

let _cached_encoder_for_SmaseFunctionalUnits: $.ASN1Encoder<SmaseFunctionalUnits> | null = null;

/**
 * @summary Encodes a(n) SmaseFunctionalUnits into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmaseFunctionalUnits, encoded as an ASN.1 Element.
 */
export function _encode_SmaseFunctionalUnits(
    value: SmaseFunctionalUnits,
    elGetter: $.ASN1Encoder<SmaseFunctionalUnits>
) {
    if (!_cached_encoder_for_SmaseFunctionalUnits) {
        _cached_encoder_for_SmaseFunctionalUnits = $._encodeSetOf<FunctionalUnitPackage>(
            () => _encode_FunctionalUnitPackage,
            $.BER
        );
    }
    return _cached_encoder_for_SmaseFunctionalUnits(value, elGetter);
}


/* eslint-enable */
