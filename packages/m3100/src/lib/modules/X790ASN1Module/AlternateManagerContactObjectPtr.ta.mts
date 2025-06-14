/* eslint-disable */
import {
    NULL,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AlternateManagerContactObjectPtr */
/**
 * @summary AlternateManagerContactObjectPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlternateManagerContactObjectPtr  ::=  CHOICE {
 *   noContact  NULL,
 *   contact    ObjectInstance,
 *   ...
 * }
 * ```
 */
export type AlternateManagerContactObjectPtr =
    | { noContact: NULL } /* CHOICE_ALT_ROOT */
    | { contact: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AlternateManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlternateManagerContactObjectPtr */
let _cached_decoder_for_AlternateManagerContactObjectPtr: $.ASN1Decoder<AlternateManagerContactObjectPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlternateManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _decode_AlternateManagerContactObjectPtr */
/**
 * @summary Decodes an ASN.1 element into a(n) AlternateManagerContactObjectPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlternateManagerContactObjectPtr} The decoded data structure.
 */
export function _decode_AlternateManagerContactObjectPtr(el: _Element) {
    if (!_cached_decoder_for_AlternateManagerContactObjectPtr) {
        _cached_decoder_for_AlternateManagerContactObjectPtr = $._decode_extensible_choice<AlternateManagerContactObjectPtr>(
            {
                'UNIVERSAL 5': ['noContact', $._decodeNull],
                'CONTEXT 2': ['contact', _decode_ObjectInstance],
                'CONTEXT 3': ['contact', _decode_ObjectInstance],
                'CONTEXT 4': ['contact', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_AlternateManagerContactObjectPtr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlternateManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlternateManagerContactObjectPtr */
let _cached_encoder_for_AlternateManagerContactObjectPtr: $.ASN1Encoder<AlternateManagerContactObjectPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlternateManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _encode_AlternateManagerContactObjectPtr */
/**
 * @summary Encodes a(n) AlternateManagerContactObjectPtr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateManagerContactObjectPtr, encoded as an ASN.1 Element.
 */
export function _encode_AlternateManagerContactObjectPtr(
    value: AlternateManagerContactObjectPtr,
    elGetter: $.ASN1Encoder<AlternateManagerContactObjectPtr>
) {
    if (!_cached_encoder_for_AlternateManagerContactObjectPtr) {
        _cached_encoder_for_AlternateManagerContactObjectPtr = $._encode_choice<AlternateManagerContactObjectPtr>(
            {
                noContact: $._encodeNull,
                contact: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AlternateManagerContactObjectPtr(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AlternateManagerContactObjectPtr */

/* eslint-enable */
