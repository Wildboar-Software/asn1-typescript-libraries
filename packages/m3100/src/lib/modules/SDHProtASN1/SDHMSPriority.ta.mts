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
    Integer,
    _decode_Integer,
    _encode_Integer,
} from '../SDHProtASN1/Integer.ta.mjs';

/**
 * @summary SDHMSPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDHMSPriority  ::=  Integer(1..2)
 * ```
 */
export type SDHMSPriority = Integer; // DefinedType


let _cached_decoder_for_SDHMSPriority: $.ASN1Decoder<SDHMSPriority> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SDHMSPriority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDHMSPriority} The decoded data structure.
 */
export function _decode_SDHMSPriority(el: _Element): SDHMSPriority {
    if (!_cached_decoder_for_SDHMSPriority) {
        _cached_decoder_for_SDHMSPriority = _decode_Integer;
    }
    return _cached_decoder_for_SDHMSPriority(el);
}


let _cached_encoder_for_SDHMSPriority: $.ASN1Encoder<SDHMSPriority> | null = null;


/**
 * @summary Encodes a(n) SDHMSPriority into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDHMSPriority, encoded as an ASN.1 Element.
 */
export function _encode_SDHMSPriority(
    value: SDHMSPriority,
    elGetter: $.ASN1Encoder<SDHMSPriority>
): _Element {
    if (!_cached_encoder_for_SDHMSPriority) {
        _cached_encoder_for_SDHMSPriority = _encode_Integer;
    }
    return _cached_encoder_for_SDHMSPriority(value, elGetter);
}


/* eslint-enable */
