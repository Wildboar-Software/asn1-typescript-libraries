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
    SystemType,
    _enum_for_SystemType,
    _decode_SystemType,
    _encode_SystemType,
} from '../NLM/SystemType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SystemTypes */
/**
 * @summary SystemTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTypes  ::=  SET OF SystemType
 * ```
 */
export type SystemTypes = SystemType[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SystemTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTypes */
let _cached_decoder_for_SystemTypes: $.ASN1Decoder<SystemTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTypes */

/* START_OF_SYMBOL_DEFINITION _decode_SystemTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemTypes} The decoded data structure.
 */
export function _decode_SystemTypes(el: _Element) {
    if (!_cached_decoder_for_SystemTypes) {
        _cached_decoder_for_SystemTypes = $._decodeSetOf<SystemType>(
            () => _decode_SystemType
        );
    }
    return _cached_decoder_for_SystemTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTypes */
let _cached_encoder_for_SystemTypes: $.ASN1Encoder<SystemTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTypes */

/* START_OF_SYMBOL_DEFINITION _encode_SystemTypes */
/**
 * @summary Encodes a(n) SystemTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemTypes, encoded as an ASN.1 Element.
 */
export function _encode_SystemTypes(
    value: SystemTypes,
    elGetter: $.ASN1Encoder<SystemTypes>
) {
    if (!_cached_encoder_for_SystemTypes) {
        _cached_encoder_for_SystemTypes = $._encodeSetOf<SystemType>(
            () => _encode_SystemType,
            $.BER
        );
    }
    return _cached_encoder_for_SystemTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemTypes */

/* eslint-enable */
