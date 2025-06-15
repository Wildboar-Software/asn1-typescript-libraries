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
    ToTPPools_Item,
    _decode_ToTPPools_Item,
    _encode_ToTPPools_Item,
} from '../ASN1DefinedTypesModule/ToTPPools-Item.ta.mjs';

/**
 * @summary ToTPPools
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToTPPools  ::=
 *   SET OF SEQUENCE {tpPoolId     ObjectInstance,
 *                    numberOfTPs  INTEGER}
 * ```
 */
export type ToTPPools = ToTPPools_Item[]; // SetOfType


let _cached_decoder_for_ToTPPools: $.ASN1Decoder<ToTPPools> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ToTPPools
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToTPPools} The decoded data structure.
 */
export function _decode_ToTPPools(el: _Element) {
    if (!_cached_decoder_for_ToTPPools) {
        _cached_decoder_for_ToTPPools = $._decodeSetOf<ToTPPools_Item>(
            () => _decode_ToTPPools_Item
        );
    }
    return _cached_decoder_for_ToTPPools(el);
}


let _cached_encoder_for_ToTPPools: $.ASN1Encoder<ToTPPools> | null = null;


/**
 * @summary Encodes a(n) ToTPPools into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToTPPools, encoded as an ASN.1 Element.
 */
export function _encode_ToTPPools(
    value: ToTPPools,
    elGetter: $.ASN1Encoder<ToTPPools>
) {
    if (!_cached_encoder_for_ToTPPools) {
        _cached_encoder_for_ToTPPools = $._encodeSetOf<ToTPPools_Item>(
            () => _encode_ToTPPools_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ToTPPools(value, elGetter);
}


/* eslint-enable */
