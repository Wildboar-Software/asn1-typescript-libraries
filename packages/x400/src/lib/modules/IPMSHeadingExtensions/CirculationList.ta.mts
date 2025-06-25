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
    CirculationMember,
    _decode_CirculationMember,
    _encode_CirculationMember,
} from '../IPMSHeadingExtensions/CirculationMember.ta.mjs';
/**
 * @summary CirculationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationList  ::=
 *   SEQUENCE (SIZE (2..ub-circulation-list-members)) OF CirculationMember
 * ```
 */
export type CirculationList = CirculationMember[]; // SequenceOfType

let _cached_decoder_for_CirculationList: $.ASN1Decoder<CirculationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CirculationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationList} The decoded data structure.
 */
export function _decode_CirculationList(el: _Element): CirculationList {
    if (!_cached_decoder_for_CirculationList) {
        _cached_decoder_for_CirculationList = $._decodeSequenceOf<CirculationMember>(
            () => _decode_CirculationMember
        );
    }
    return _cached_decoder_for_CirculationList(el);
}

let _cached_encoder_for_CirculationList: $.ASN1Encoder<CirculationList> | null = null;

/**
 * @summary Encodes a(n) CirculationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationList, encoded as an ASN.1 Element.
 */
export function _encode_CirculationList(
    value: CirculationList,
    elGetter: $.ASN1Encoder<CirculationList>
): _Element {
    if (!_cached_encoder_for_CirculationList) {
        _cached_encoder_for_CirculationList = $._encodeSequenceOf<CirculationMember>(
            () => _encode_CirculationMember,
            $.BER
        );
    }
    return _cached_encoder_for_CirculationList(value, elGetter);
}


/* eslint-enable */
