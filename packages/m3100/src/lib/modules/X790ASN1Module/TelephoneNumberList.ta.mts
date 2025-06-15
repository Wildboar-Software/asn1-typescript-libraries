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
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from '../X790ASN1Module/TelephoneNumber.ta.mjs';

/**
 * @summary TelephoneNumberList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephoneNumberList  ::=  SET SIZE (0..64) OF TelephoneNumber
 * ```
 */
export type TelephoneNumberList = TelephoneNumber[]; // SetOfType


let _cached_decoder_for_TelephoneNumberList: $.ASN1Decoder<TelephoneNumberList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TelephoneNumberList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TelephoneNumberList} The decoded data structure.
 */
export function _decode_TelephoneNumberList(el: _Element) {
    if (!_cached_decoder_for_TelephoneNumberList) {
        _cached_decoder_for_TelephoneNumberList = $._decodeSetOf<TelephoneNumber>(
            () => _decode_TelephoneNumber
        );
    }
    return _cached_decoder_for_TelephoneNumberList(el);
}


let _cached_encoder_for_TelephoneNumberList: $.ASN1Encoder<TelephoneNumberList> | null = null;


/**
 * @summary Encodes a(n) TelephoneNumberList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephoneNumberList, encoded as an ASN.1 Element.
 */
export function _encode_TelephoneNumberList(
    value: TelephoneNumberList,
    elGetter: $.ASN1Encoder<TelephoneNumberList>
) {
    if (!_cached_encoder_for_TelephoneNumberList) {
        _cached_encoder_for_TelephoneNumberList = $._encodeSetOf<TelephoneNumber>(
            () => _encode_TelephoneNumber,
            $.BER
        );
    }
    return _cached_encoder_for_TelephoneNumberList(value, elGetter);
}


/* eslint-enable */
