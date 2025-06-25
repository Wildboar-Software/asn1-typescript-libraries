/* eslint-disable */
import {
    INTEGER,
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

/**
 * @summary SecurityLabel_Item_initiatorLabel_clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabel-Item-initiatorLabel-clearance ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SecurityLabel_Item_initiatorLabel_clearance =
    | { localForm: INTEGER } /* CHOICE_ALT_ROOT */
    | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance: $.ASN1Decoder<SecurityLabel_Item_initiatorLabel_clearance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabel_Item_initiatorLabel_clearance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabel_Item_initiatorLabel_clearance} The decoded data structure.
 */
export function _decode_SecurityLabel_Item_initiatorLabel_clearance(
    el: _Element
): SecurityLabel_Item_initiatorLabel_clearance {
    if (!_cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance) {
        _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance = $._decode_inextensible_choice<SecurityLabel_Item_initiatorLabel_clearance>(
            {
                'CONTEXT 0': [
                    'localForm',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'globalForm',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SecurityLabel_Item_initiatorLabel_clearance(el);
}

let _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance: $.ASN1Encoder<SecurityLabel_Item_initiatorLabel_clearance> | null = null;

/**
 * @summary Encodes a(n) SecurityLabel_Item_initiatorLabel_clearance into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabel_Item_initiatorLabel_clearance, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabel_Item_initiatorLabel_clearance(
    value: SecurityLabel_Item_initiatorLabel_clearance,
    elGetter: $.ASN1Encoder<SecurityLabel_Item_initiatorLabel_clearance>
): _Element {
    if (!_cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance) {
        _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance = $._encode_choice<SecurityLabel_Item_initiatorLabel_clearance>(
            {
                localForm: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                globalForm: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SecurityLabel_Item_initiatorLabel_clearance(
        value,
        elGetter
    );
}


/* eslint-enable */
