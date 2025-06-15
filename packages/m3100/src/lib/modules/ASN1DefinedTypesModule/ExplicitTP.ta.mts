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

/**
 * @summary ExplicitTP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExplicitTP  ::=  CHOICE {
 *   oneTPorGTP  ObjectInstance,
 *   listofTPs   SEQUENCE OF ObjectInstance
 * }
 * ```
 */
export type ExplicitTP =
    | { oneTPorGTP: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { listofTPs: ObjectInstance[] } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ExplicitTP: $.ASN1Decoder<ExplicitTP> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExplicitTP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExplicitTP} The decoded data structure.
 */
export function _decode_ExplicitTP(el: _Element) {
    if (!_cached_decoder_for_ExplicitTP) {
        _cached_decoder_for_ExplicitTP = $._decode_inextensible_choice<ExplicitTP>(
            {
                'CONTEXT 2': ['oneTPorGTP', _decode_ObjectInstance],
                'CONTEXT 3': ['oneTPorGTP', _decode_ObjectInstance],
                'CONTEXT 4': ['oneTPorGTP', _decode_ObjectInstance],
                'UNIVERSAL 16': [
                    'listofTPs',
                    $._decodeSequenceOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExplicitTP(el);
}


let _cached_encoder_for_ExplicitTP: $.ASN1Encoder<ExplicitTP> | null = null;


/**
 * @summary Encodes a(n) ExplicitTP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExplicitTP, encoded as an ASN.1 Element.
 */
export function _encode_ExplicitTP(
    value: ExplicitTP,
    elGetter: $.ASN1Encoder<ExplicitTP>
) {
    if (!_cached_encoder_for_ExplicitTP) {
        _cached_encoder_for_ExplicitTP = $._encode_choice<ExplicitTP>(
            {
                oneTPorGTP: _encode_ObjectInstance,
                listofTPs: $._encodeSequenceOf<ObjectInstance>(
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExplicitTP(value, elGetter);
}


/* eslint-enable */
