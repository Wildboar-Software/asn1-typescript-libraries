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
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary EstablishmentTime
 * @description
 *
 * Time to establish connectivity between two protocol
 * entities (MORT request until AO confirmation). Alias of
 * `Timespec`. ITU-T Rec. X.737 (11/95)
 * [§3.9.1](https://www.itu.int/rec/T-REC-X.737-199511-I),
 * §8.1.9, A.6.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishmentTime  ::=  Timespec
 * ```
 */
export type EstablishmentTime = Timespec; // DefinedType

let _cached_decoder_for_EstablishmentTime: $.ASN1Decoder<EstablishmentTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishmentTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishmentTime} The decoded data structure.
 */
export function _decode_EstablishmentTime(el: _Element): EstablishmentTime {
    if (!_cached_decoder_for_EstablishmentTime) {
        _cached_decoder_for_EstablishmentTime = _decode_Timespec;
    }
    return _cached_decoder_for_EstablishmentTime(el);
}

let _cached_encoder_for_EstablishmentTime: $.ASN1Encoder<EstablishmentTime> | null = null;

/**
 * @summary Encodes a(n) EstablishmentTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishmentTime, encoded as an ASN.1 Element.
 */
export function _encode_EstablishmentTime(
    value: EstablishmentTime,
    elGetter: $.ASN1Encoder<EstablishmentTime>
): _Element {
    if (!_cached_encoder_for_EstablishmentTime) {
        _cached_encoder_for_EstablishmentTime = _encode_Timespec;
    }
    return _cached_encoder_for_EstablishmentTime(value, elGetter);
}


/* eslint-enable */
