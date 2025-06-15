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
    NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta.mjs';

/**
 * @summary CTPList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CTPList  ::=  NWTPList
 * ```
 */
export type CTPList = NWTPList; // DefinedType


let _cached_decoder_for_CTPList: $.ASN1Decoder<CTPList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CTPList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CTPList} The decoded data structure.
 */
export function _decode_CTPList(el: _Element) {
    if (!_cached_decoder_for_CTPList) {
        _cached_decoder_for_CTPList = _decode_NWTPList;
    }
    return _cached_decoder_for_CTPList(el);
}


let _cached_encoder_for_CTPList: $.ASN1Encoder<CTPList> | null = null;


/**
 * @summary Encodes a(n) CTPList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTPList, encoded as an ASN.1 Element.
 */
export function _encode_CTPList(
    value: CTPList,
    elGetter: $.ASN1Encoder<CTPList>
) {
    if (!_cached_encoder_for_CTPList) {
        _cached_encoder_for_CTPList = _encode_NWTPList;
    }
    return _cached_encoder_for_CTPList(value, elGetter);
}


/* eslint-enable */
