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
import * as $ from '@wildboar/asn1/functional';
import {
    ConnectResult_Item,
    _decode_ConnectResult_Item,
    _encode_ConnectResult_Item,
} from '../ASN1DefinedTypesModule/ConnectResult-Item.ta.mjs';

/**
 * @summary ConnectResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectResult  ::=  SEQUENCE OF CHOICE {failed     Failed,
 *                                       connected  Connected}
 * ```
 */
export type ConnectResult = ConnectResult_Item[]; // SequenceOfType


let _cached_decoder_for_ConnectResult: $.ASN1Decoder<ConnectResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConnectResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectResult} The decoded data structure.
 */
export function _decode_ConnectResult(el: _Element) {
    if (!_cached_decoder_for_ConnectResult) {
        _cached_decoder_for_ConnectResult = $._decodeSequenceOf<ConnectResult_Item>(
            () => _decode_ConnectResult_Item
        );
    }
    return _cached_decoder_for_ConnectResult(el);
}


let _cached_encoder_for_ConnectResult: $.ASN1Encoder<ConnectResult> | null = null;


/**
 * @summary Encodes a(n) ConnectResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectResult, encoded as an ASN.1 Element.
 */
export function _encode_ConnectResult(
    value: ConnectResult,
    elGetter: $.ASN1Encoder<ConnectResult>
) {
    if (!_cached_encoder_for_ConnectResult) {
        _cached_encoder_for_ConnectResult = $._encodeSequenceOf<ConnectResult_Item>(
            () => _encode_ConnectResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConnectResult(value, elGetter);
}


/* eslint-enable */
