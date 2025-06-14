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
    ManagerSearchString,
    _decode_ManagerSearchString,
    _encode_ManagerSearchString,
} from '../X790ASN1Module/ManagerSearchString.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ManagerSearchKey */
/**
 * @summary ManagerSearchKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagerSearchKey  ::=  CHOICE {
 *   searchString    ManagerSearchString,
 *   objectInstance  ObjectInstance,
 *   ...
 * }
 * ```
 */
export type ManagerSearchKey =
    | { searchString: ManagerSearchString } /* CHOICE_ALT_ROOT */
    | { objectInstance: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ManagerSearchKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchKey */
let _cached_decoder_for_ManagerSearchKey: $.ASN1Decoder<ManagerSearchKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchKey */

/* START_OF_SYMBOL_DEFINITION _decode_ManagerSearchKey */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagerSearchKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagerSearchKey} The decoded data structure.
 */
export function _decode_ManagerSearchKey(el: _Element) {
    if (!_cached_decoder_for_ManagerSearchKey) {
        _cached_decoder_for_ManagerSearchKey = $._decode_extensible_choice<ManagerSearchKey>(
            {
                'UNIVERSAL 25': ['searchString', _decode_ManagerSearchString],
                'CONTEXT 2': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 3': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 4': ['objectInstance', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_ManagerSearchKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagerSearchKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchKey */
let _cached_encoder_for_ManagerSearchKey: $.ASN1Encoder<ManagerSearchKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchKey */

/* START_OF_SYMBOL_DEFINITION _encode_ManagerSearchKey */
/**
 * @summary Encodes a(n) ManagerSearchKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagerSearchKey, encoded as an ASN.1 Element.
 */
export function _encode_ManagerSearchKey(
    value: ManagerSearchKey,
    elGetter: $.ASN1Encoder<ManagerSearchKey>
) {
    if (!_cached_encoder_for_ManagerSearchKey) {
        _cached_encoder_for_ManagerSearchKey = $._encode_choice<ManagerSearchKey>(
            {
                searchString: _encode_ManagerSearchString,
                objectInstance: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ManagerSearchKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagerSearchKey */

/* eslint-enable */
