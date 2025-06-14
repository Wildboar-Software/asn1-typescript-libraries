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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION LinkEnd */
/**
 * @summary LinkEnd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkEnd  ::=  CHOICE {
 *   subnetwork   [0]  ObjectInstance,
 *   accessGroup  [1]  ObjectInstance,
 *   linkEnd      [2]  ObjectInstance
 * }
 * ```
 */
export type LinkEnd =
    | { subnetwork: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { accessGroup: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { linkEnd: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION LinkEnd */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkEnd */
let _cached_decoder_for_LinkEnd: $.ASN1Decoder<LinkEnd> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkEnd */

/* START_OF_SYMBOL_DEFINITION _decode_LinkEnd */
/**
 * @summary Decodes an ASN.1 element into a(n) LinkEnd
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkEnd} The decoded data structure.
 */
export function _decode_LinkEnd(el: _Element) {
    if (!_cached_decoder_for_LinkEnd) {
        _cached_decoder_for_LinkEnd = $._decode_inextensible_choice<LinkEnd>({
            'CONTEXT 0': [
                'subnetwork',
                $._decode_explicit<ObjectInstance>(
                    () => _decode_ObjectInstance
                ),
            ],
            'CONTEXT 1': [
                'accessGroup',
                $._decode_explicit<ObjectInstance>(
                    () => _decode_ObjectInstance
                ),
            ],
            'CONTEXT 2': [
                'linkEnd',
                $._decode_explicit<ObjectInstance>(
                    () => _decode_ObjectInstance
                ),
            ],
        });
    }
    return _cached_decoder_for_LinkEnd(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LinkEnd */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkEnd */
let _cached_encoder_for_LinkEnd: $.ASN1Encoder<LinkEnd> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkEnd */

/* START_OF_SYMBOL_DEFINITION _encode_LinkEnd */
/**
 * @summary Encodes a(n) LinkEnd into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkEnd, encoded as an ASN.1 Element.
 */
export function _encode_LinkEnd(
    value: LinkEnd,
    elGetter: $.ASN1Encoder<LinkEnd>
) {
    if (!_cached_encoder_for_LinkEnd) {
        _cached_encoder_for_LinkEnd = $._encode_choice<LinkEnd>(
            {
                subnetwork: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                accessGroup: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                linkEnd: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_LinkEnd(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LinkEnd */

/* eslint-enable */
