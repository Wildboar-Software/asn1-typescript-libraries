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
    WeekMask,
    _decode_WeekMask,
    _encode_WeekMask,
} from '../X790ASN1Module/WeekMask.ta.mjs';

/**
 * @summary LocationAccessHours
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocationAccessHours  ::=  SET OF WeekMask
 * ```
 */
export type LocationAccessHours = WeekMask[]; // SetOfType


let _cached_decoder_for_LocationAccessHours: $.ASN1Decoder<LocationAccessHours> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LocationAccessHours
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocationAccessHours} The decoded data structure.
 */
export function _decode_LocationAccessHours(el: _Element): LocationAccessHours {
    if (!_cached_decoder_for_LocationAccessHours) {
        _cached_decoder_for_LocationAccessHours = $._decodeSetOf<WeekMask>(
            () => _decode_WeekMask
        );
    }
    return _cached_decoder_for_LocationAccessHours(el);
}


let _cached_encoder_for_LocationAccessHours: $.ASN1Encoder<LocationAccessHours> | null = null;


/**
 * @summary Encodes a(n) LocationAccessHours into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAccessHours, encoded as an ASN.1 Element.
 */
export function _encode_LocationAccessHours(
    value: LocationAccessHours,
    elGetter: $.ASN1Encoder<LocationAccessHours>
): _Element {
    if (!_cached_encoder_for_LocationAccessHours) {
        _cached_encoder_for_LocationAccessHours = $._encodeSetOf<WeekMask>(
            () => _encode_WeekMask,
            $.BER
        );
    }
    return _cached_encoder_for_LocationAccessHours(value, elGetter);
}


/* eslint-enable */
