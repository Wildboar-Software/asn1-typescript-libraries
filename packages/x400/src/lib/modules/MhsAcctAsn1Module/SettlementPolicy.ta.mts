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
 * @summary SettlementPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SettlementPolicy  ::=  CHOICE {globalForm  OBJECT IDENTIFIER,
 *                              localForm   INTEGER
 * }
 * ```
 */
export type SettlementPolicy =
    | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SettlementPolicy: $.ASN1Decoder<SettlementPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SettlementPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SettlementPolicy} The decoded data structure.
 */
export function _decode_SettlementPolicy(el: _Element) {
    if (!_cached_decoder_for_SettlementPolicy) {
        _cached_decoder_for_SettlementPolicy = $._decode_inextensible_choice<SettlementPolicy>(
            {
                'UNIVERSAL 6': ['globalForm', $._decodeObjectIdentifier],
                'UNIVERSAL 2': ['localForm', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_SettlementPolicy(el);
}

let _cached_encoder_for_SettlementPolicy: $.ASN1Encoder<SettlementPolicy> | null = null;

/**
 * @summary Encodes a(n) SettlementPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SettlementPolicy, encoded as an ASN.1 Element.
 */
export function _encode_SettlementPolicy(
    value: SettlementPolicy,
    elGetter: $.ASN1Encoder<SettlementPolicy>
) {
    if (!_cached_encoder_for_SettlementPolicy) {
        _cached_encoder_for_SettlementPolicy = $._encode_choice<SettlementPolicy>(
            {
                globalForm: $._encodeObjectIdentifier,
                localForm: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SettlementPolicy(value, elGetter);
}


/* eslint-enable */
