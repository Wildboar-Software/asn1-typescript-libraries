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
    TypeOfDaysMaskWps_Item,
    _decode_TypeOfDaysMaskWps_Item,
    _encode_TypeOfDaysMaskWps_Item,
} from '../Schedulerev1-ASN1Module/TypeOfDaysMaskWps-Item.ta.mjs';

/**
 * @summary TypeOfDaysMaskWps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfDaysMaskWps  ::=
 *   SET OF SEQUENCE {typeOfDay   TypeOfDay,
 *                    timesOfDay  TimesOfDayWps}
 * ```
 */
export type TypeOfDaysMaskWps = TypeOfDaysMaskWps_Item[]; // SetOfType


let _cached_decoder_for_TypeOfDaysMaskWps: $.ASN1Decoder<TypeOfDaysMaskWps> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfDaysMaskWps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfDaysMaskWps} The decoded data structure.
 */
export function _decode_TypeOfDaysMaskWps(el: _Element) {
    if (!_cached_decoder_for_TypeOfDaysMaskWps) {
        _cached_decoder_for_TypeOfDaysMaskWps = $._decodeSetOf<TypeOfDaysMaskWps_Item>(
            () => _decode_TypeOfDaysMaskWps_Item
        );
    }
    return _cached_decoder_for_TypeOfDaysMaskWps(el);
}


let _cached_encoder_for_TypeOfDaysMaskWps: $.ASN1Encoder<TypeOfDaysMaskWps> | null = null;


/**
 * @summary Encodes a(n) TypeOfDaysMaskWps into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfDaysMaskWps, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfDaysMaskWps(
    value: TypeOfDaysMaskWps,
    elGetter: $.ASN1Encoder<TypeOfDaysMaskWps>
) {
    if (!_cached_encoder_for_TypeOfDaysMaskWps) {
        _cached_encoder_for_TypeOfDaysMaskWps = $._encodeSetOf<TypeOfDaysMaskWps_Item>(
            () => _encode_TypeOfDaysMaskWps_Item,
            $.BER
        );
    }
    return _cached_encoder_for_TypeOfDaysMaskWps(value, elGetter);
}


/* eslint-enable */
