/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta.mjs";
/**
 * @summary RemoteDSAList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoteDSAList  ::=  SET OF AccessPoint
 * ```
 */
export type RemoteDSAList = AccessPoint[]; // SetOfType

let _cached_decoder_for_RemoteDSAList: $.ASN1Decoder<RemoteDSAList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteDSAList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoteDSAList} The decoded data structure.
 */
export function _decode_RemoteDSAList(el: _Element) {
    if (!_cached_decoder_for_RemoteDSAList) {
        _cached_decoder_for_RemoteDSAList = $._decodeSetOf<AccessPoint>(
            () => _decode_AccessPoint
        );
    }
    return _cached_decoder_for_RemoteDSAList(el);
}

let _cached_encoder_for_RemoteDSAList: $.ASN1Encoder<RemoteDSAList> | null = null;

/**
 * @summary Encodes a(n) RemoteDSAList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteDSAList, encoded as an ASN.1 Element.
 */
export function _encode_RemoteDSAList(
    value: RemoteDSAList,
    elGetter: $.ASN1Encoder<RemoteDSAList>
) {
    if (!_cached_encoder_for_RemoteDSAList) {
        _cached_encoder_for_RemoteDSAList = $._encodeSetOf<AccessPoint>(
            () => _encode_AccessPoint,
            $.DER
        );
    }
    return _cached_encoder_for_RemoteDSAList(value, elGetter);
}


/* eslint-enable */
