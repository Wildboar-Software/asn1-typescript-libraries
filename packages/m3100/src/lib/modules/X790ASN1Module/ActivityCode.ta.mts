/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
    ActivityCode_number,
    _decode_ActivityCode_number,
    _encode_ActivityCode_number,
} from '../X790ASN1Module/ActivityCode-number.ta.mjs';

/**
 * @summary ActivityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityCode  ::=  CHOICE {
 *   number
 *     INTEGER {approved(0), assign(1), cancel(2), clear(3), close(4), defer(5),
 *              dispatch(6), refer(7), release(8), re-open(9), repair(10),
 *              test(11), transfer(12)},
 *   identifier  OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type ActivityCode =
    | { number_: ActivityCode_number } /* CHOICE_ALT_ROOT */
    | { identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ActivityCode: $.ASN1Decoder<ActivityCode> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActivityCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityCode} The decoded data structure.
 */
export function _decode_ActivityCode(el: _Element): ActivityCode {
    if (!_cached_decoder_for_ActivityCode) {
        _cached_decoder_for_ActivityCode = $._decode_extensible_choice<ActivityCode>(
            {
                'UNIVERSAL 2': ['number_', _decode_ActivityCode_number],
                'UNIVERSAL 6': ['identifier', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ActivityCode(el);
}


let _cached_encoder_for_ActivityCode: $.ASN1Encoder<ActivityCode> | null = null;


/**
 * @summary Encodes a(n) ActivityCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityCode, encoded as an ASN.1 Element.
 */
export function _encode_ActivityCode(
    value: ActivityCode,
    elGetter: $.ASN1Encoder<ActivityCode>
): _Element {
    if (!_cached_encoder_for_ActivityCode) {
        _cached_encoder_for_ActivityCode = $._encode_choice<ActivityCode>(
            {
                number_: _encode_ActivityCode_number,
                identifier: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ActivityCode(value, elGetter);
}


/* eslint-enable */
