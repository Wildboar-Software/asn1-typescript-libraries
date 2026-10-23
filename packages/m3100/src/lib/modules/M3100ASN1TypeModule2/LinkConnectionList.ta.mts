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
    ConnectionList,
    _decode_ConnectionList,
    _encode_ConnectionList,
} from '../M3100ASN1TypeModule2/ConnectionList.ta.mjs';

/**
 * @summary LinkConnectionList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkConnectionList  ::=  ConnectionList
 * ```
 */
export type LinkConnectionList = ConnectionList; // DefinedType


let _cached_decoder_for_LinkConnectionList: $.ASN1Decoder<LinkConnectionList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LinkConnectionList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkConnectionList} The decoded data structure.
 */
export function _decode_LinkConnectionList(el: _Element): LinkConnectionList {
    if (!_cached_decoder_for_LinkConnectionList) {
        _cached_decoder_for_LinkConnectionList = _decode_ConnectionList;
    }
    return _cached_decoder_for_LinkConnectionList(el);
}


let _cached_encoder_for_LinkConnectionList: $.ASN1Encoder<LinkConnectionList> | null = null;


/**
 * @summary Encodes a(n) LinkConnectionList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkConnectionList, encoded as an ASN.1 Element.
 */
export function _encode_LinkConnectionList(
    value: LinkConnectionList,
    elGetter: $.ASN1Encoder<LinkConnectionList>
): _Element {
    if (!_cached_encoder_for_LinkConnectionList) {
        _cached_encoder_for_LinkConnectionList = _encode_ConnectionList;
    }
    return _cached_encoder_for_LinkConnectionList(value, elGetter);
}


/* eslint-enable */
