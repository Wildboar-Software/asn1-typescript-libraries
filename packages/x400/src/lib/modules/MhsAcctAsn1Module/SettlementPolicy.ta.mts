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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION SettlementPolicy */
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
/* END_OF_SYMBOL_DEFINITION SettlementPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SettlementPolicy */
let _cached_decoder_for_SettlementPolicy: $.ASN1Decoder<SettlementPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SettlementPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_SettlementPolicy */
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
/* END_OF_SYMBOL_DEFINITION _decode_SettlementPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SettlementPolicy */
let _cached_encoder_for_SettlementPolicy: $.ASN1Encoder<SettlementPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SettlementPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_SettlementPolicy */
/**
 * @summary Encodes a(n) SettlementPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_SettlementPolicy */

/* eslint-enable */
