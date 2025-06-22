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
import { Name, _decode_Name, _encode_Name } from '../X790ASN1Module/Name.ta.mjs';

/**
 * @summary Names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Names  ::=  SET OF Name
 * ```
 */
export type Names = Name[]; // SetOfType


let _cached_decoder_for_Names: $.ASN1Decoder<Names> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Names
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Names} The decoded data structure.
 */
export function _decode_Names(el: _Element) {
    if (!_cached_decoder_for_Names) {
        _cached_decoder_for_Names = $._decodeSetOf<Name>(() => _decode_Name);
    }
    return _cached_decoder_for_Names(el);
}


let _cached_encoder_for_Names: $.ASN1Encoder<Names> | null = null;


/**
 * @summary Encodes a(n) Names into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Names, encoded as an ASN.1 Element.
 */
export function _encode_Names(value: Names, elGetter: $.ASN1Encoder<Names>) {
    if (!_cached_encoder_for_Names) {
        _cached_encoder_for_Names = $._encodeSetOf<Name>(
            () => _encode_Name,
            $.BER
        );
    }
    return _cached_encoder_for_Names(value, elGetter);
}


/* eslint-enable */
