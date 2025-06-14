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
import { Name, _decode_Name, _encode_Name } from '../X790ASN1Module/Name.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Names */
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
/* END_OF_SYMBOL_DEFINITION Names */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Names */
let _cached_decoder_for_Names: $.ASN1Decoder<Names> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Names */

/* START_OF_SYMBOL_DEFINITION _decode_Names */
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
/* END_OF_SYMBOL_DEFINITION _decode_Names */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Names */
let _cached_encoder_for_Names: $.ASN1Encoder<Names> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Names */

/* START_OF_SYMBOL_DEFINITION _encode_Names */
/**
 * @summary Encodes a(n) Names into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_Names */

/* eslint-enable */
