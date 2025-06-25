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
    Hash,
    _decode_Hash,
    _encode_Hash,
} from '../AuthenticationContextForBiometrics/Hash.ta.mjs';

/**
 * @summary HashList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashList  ::=  SEQUENCE OF Hash
 * ```
 */
export type HashList = Hash[]; // SequenceOfType


let _cached_decoder_for_HashList: $.ASN1Decoder<HashList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HashList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashList} The decoded data structure.
 */
export function _decode_HashList(el: _Element): HashList {
    if (!_cached_decoder_for_HashList) {
        _cached_decoder_for_HashList = $._decodeSequenceOf<Hash>(
            () => _decode_Hash
        );
    }
    return _cached_decoder_for_HashList(el);
}


let _cached_encoder_for_HashList: $.ASN1Encoder<HashList> | null = null;


/**
 * @summary Encodes a(n) HashList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashList, encoded as an ASN.1 Element.
 */
export function _encode_HashList(
    value: HashList,
    elGetter: $.ASN1Encoder<HashList>
): _Element {
    if (!_cached_encoder_for_HashList) {
        _cached_encoder_for_HashList = $._encodeSequenceOf<Hash>(
            () => _encode_Hash,
            $.BER
        );
    }
    return _cached_encoder_for_HashList(value, elGetter);
}


/* eslint-enable */
