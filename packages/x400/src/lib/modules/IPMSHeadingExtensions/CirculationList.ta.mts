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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CirculationMember,
    _decode_CirculationMember,
    _encode_CirculationMember,
} from '../IPMSHeadingExtensions/CirculationMember.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CirculationList */
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
/* END_OF_SYMBOL_DEFINITION CirculationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationList */
let _cached_decoder_for_CirculationList: $.ASN1Decoder<CirculationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationList */

/* START_OF_SYMBOL_DEFINITION _decode_CirculationList */
/**
 * @summary Decodes an ASN.1 element into a(n) CirculationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationList} The decoded data structure.
 */
export function _decode_CirculationList(el: _Element) {
    if (!_cached_decoder_for_CirculationList) {
        _cached_decoder_for_CirculationList = $._decodeSequenceOf<CirculationMember>(
            () => _decode_CirculationMember
        );
    }
    return _cached_decoder_for_CirculationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CirculationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationList */
let _cached_encoder_for_CirculationList: $.ASN1Encoder<CirculationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationList */

/* START_OF_SYMBOL_DEFINITION _encode_CirculationList */
/**
 * @summary Encodes a(n) CirculationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationList, encoded as an ASN.1 Element.
 */
export function _encode_CirculationList(
    value: CirculationList,
    elGetter: $.ASN1Encoder<CirculationList>
) {
    if (!_cached_encoder_for_CirculationList) {
        _cached_encoder_for_CirculationList = $._encodeSequenceOf<CirculationMember>(
            () => _encode_CirculationMember,
            $.BER
        );
    }
    return _cached_encoder_for_CirculationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CirculationList */

/* eslint-enable */
