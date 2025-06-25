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
    LocalDistinguishedName,
    _decode_LocalDistinguishedName,
    _encode_LocalDistinguishedName,
} from '../NLM/LocalDistinguishedName.ta.mjs';

/**
 * @summary LocalDistinguishedNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalDistinguishedNames  ::=  SET OF LocalDistinguishedName
 * ```
 */
export type LocalDistinguishedNames = LocalDistinguishedName[]; // SetOfType


let _cached_decoder_for_LocalDistinguishedNames: $.ASN1Decoder<LocalDistinguishedNames> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LocalDistinguishedNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalDistinguishedNames} The decoded data structure.
 */
export function _decode_LocalDistinguishedNames(el: _Element): LocalDistinguishedNames {
    if (!_cached_decoder_for_LocalDistinguishedNames) {
        _cached_decoder_for_LocalDistinguishedNames = $._decodeSetOf<LocalDistinguishedName>(
            () => _decode_LocalDistinguishedName
        );
    }
    return _cached_decoder_for_LocalDistinguishedNames(el);
}


let _cached_encoder_for_LocalDistinguishedNames: $.ASN1Encoder<LocalDistinguishedNames> | null = null;


/**
 * @summary Encodes a(n) LocalDistinguishedNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalDistinguishedNames, encoded as an ASN.1 Element.
 */
export function _encode_LocalDistinguishedNames(
    value: LocalDistinguishedNames,
    elGetter: $.ASN1Encoder<LocalDistinguishedNames>
): _Element {
    if (!_cached_encoder_for_LocalDistinguishedNames) {
        _cached_encoder_for_LocalDistinguishedNames = $._encodeSetOf<LocalDistinguishedName>(
            () => _encode_LocalDistinguishedName,
            $.BER
        );
    }
    return _cached_encoder_for_LocalDistinguishedNames(value, elGetter);
}


/* eslint-enable */
