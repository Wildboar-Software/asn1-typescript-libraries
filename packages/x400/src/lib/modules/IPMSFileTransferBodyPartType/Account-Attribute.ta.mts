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
import * as $ from '@wildboar/asn1/functional';
import {
    Account,
    _decode_Account,
    _encode_Account,
} from '../IPMSFileTransferBodyPartType/Account.ta.mjs';
/**
 * @summary Account_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Account-Attribute  ::=  CHOICE {
 *   no-value-available  [0]  NULL,
 *   -- Indicates partial support of this attribute
 *   actual-values       Account
 * }
 * ```
 */
export type Account_Attribute =
    | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
    | { actual_values: Account } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Account_Attribute: $.ASN1Decoder<Account_Attribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Account_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Account_Attribute} The decoded data structure.
 */
export function _decode_Account_Attribute(el: _Element) {
    if (!_cached_decoder_for_Account_Attribute) {
        _cached_decoder_for_Account_Attribute = $._decode_inextensible_choice<Account_Attribute>(
            {
                'CONTEXT 0': [
                    'no_value_available',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'UNIVERSAL 25': ['actual_values', _decode_Account],
            }
        );
    }
    return _cached_decoder_for_Account_Attribute(el);
}

let _cached_encoder_for_Account_Attribute: $.ASN1Encoder<Account_Attribute> | null = null;

/**
 * @summary Encodes a(n) Account_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Account_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Account_Attribute(
    value: Account_Attribute,
    elGetter: $.ASN1Encoder<Account_Attribute>
) {
    if (!_cached_encoder_for_Account_Attribute) {
        _cached_encoder_for_Account_Attribute = $._encode_choice<Account_Attribute>(
            {
                no_value_available: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                actual_values: _encode_Account,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Account_Attribute(value, elGetter);
}


/* eslint-enable */
