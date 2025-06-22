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
    ExplicitTP,
    _decode_ExplicitTP,
    _encode_ExplicitTP,
} from '../ASN1DefinedTypesModule/ExplicitTP.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary ToTermSpecifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToTermSpecifier  ::=  CHOICE {
 *   toTpOrGTP  [0]  ExplicitTP,
 *   toPool     [1]  ObjectInstance
 * }
 * ```
 */
export type ToTermSpecifier =
    | { toTpOrGTP: ExplicitTP } /* CHOICE_ALT_ROOT */
    | { toPool: ObjectInstance } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ToTermSpecifier: $.ASN1Decoder<ToTermSpecifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ToTermSpecifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToTermSpecifier} The decoded data structure.
 */
export function _decode_ToTermSpecifier(el: _Element) {
    if (!_cached_decoder_for_ToTermSpecifier) {
        _cached_decoder_for_ToTermSpecifier = $._decode_inextensible_choice<ToTermSpecifier>(
            {
                'CONTEXT 0': [
                    'toTpOrGTP',
                    $._decode_explicit<ExplicitTP>(() => _decode_ExplicitTP),
                ],
                'CONTEXT 1': [
                    'toPool',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ToTermSpecifier(el);
}


let _cached_encoder_for_ToTermSpecifier: $.ASN1Encoder<ToTermSpecifier> | null = null;


/**
 * @summary Encodes a(n) ToTermSpecifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToTermSpecifier, encoded as an ASN.1 Element.
 */
export function _encode_ToTermSpecifier(
    value: ToTermSpecifier,
    elGetter: $.ASN1Encoder<ToTermSpecifier>
) {
    if (!_cached_encoder_for_ToTermSpecifier) {
        _cached_encoder_for_ToTermSpecifier = $._encode_choice<ToTermSpecifier>(
            {
                toTpOrGTP: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExplicitTP,
                    $.BER
                ),
                toPool: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ToTermSpecifier(value, elGetter);
}


/* eslint-enable */
