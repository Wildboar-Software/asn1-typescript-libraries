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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary CustomerAcctPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerAcctPolicy  ::=  CHOICE {
 *   globalForm  OBJECT IDENTIFIER,
 *   localForm   INTEGER
 * }
 * ```
 */
export type CustomerAcctPolicy =
    | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CustomerAcctPolicy: $.ASN1Decoder<CustomerAcctPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CustomerAcctPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CustomerAcctPolicy} The decoded data structure.
 */
export function _decode_CustomerAcctPolicy(el: _Element) {
    if (!_cached_decoder_for_CustomerAcctPolicy) {
        _cached_decoder_for_CustomerAcctPolicy = $._decode_inextensible_choice<CustomerAcctPolicy>(
            {
                'UNIVERSAL 6': ['globalForm', $._decodeObjectIdentifier],
                'UNIVERSAL 2': ['localForm', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_CustomerAcctPolicy(el);
}

let _cached_encoder_for_CustomerAcctPolicy: $.ASN1Encoder<CustomerAcctPolicy> | null = null;

/**
 * @summary Encodes a(n) CustomerAcctPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CustomerAcctPolicy, encoded as an ASN.1 Element.
 */
export function _encode_CustomerAcctPolicy(
    value: CustomerAcctPolicy,
    elGetter: $.ASN1Encoder<CustomerAcctPolicy>
) {
    if (!_cached_encoder_for_CustomerAcctPolicy) {
        _cached_encoder_for_CustomerAcctPolicy = $._encode_choice<CustomerAcctPolicy>(
            {
                globalForm: $._encodeObjectIdentifier,
                localForm: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_CustomerAcctPolicy(value, elGetter);
}


/* eslint-enable */
