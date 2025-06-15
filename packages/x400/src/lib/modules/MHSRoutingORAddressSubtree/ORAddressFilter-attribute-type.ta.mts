/* eslint-disable */
import {
    INTEGER,
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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary ORAddressFilter_attribute_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressFilter-attribute-type ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ORAddressFilter_attribute_type =
    | { standard_attribute: INTEGER } /* CHOICE_ALT_ROOT */
    | { domain_defined_attribute: UniversalOrBMPString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ORAddressFilter_attribute_type: $.ASN1Decoder<ORAddressFilter_attribute_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressFilter_attribute_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressFilter_attribute_type} The decoded data structure.
 */
export function _decode_ORAddressFilter_attribute_type(el: _Element) {
    if (!_cached_decoder_for_ORAddressFilter_attribute_type) {
        _cached_decoder_for_ORAddressFilter_attribute_type = $._decode_inextensible_choice<ORAddressFilter_attribute_type>(
            {
                'UNIVERSAL 2': ['standard_attribute', $._decodeInteger],
                'UNIVERSAL 17': [
                    'domain_defined_attribute',
                    _decode_UniversalOrBMPString,
                ],
            }
        );
    }
    return _cached_decoder_for_ORAddressFilter_attribute_type(el);
}

let _cached_encoder_for_ORAddressFilter_attribute_type: $.ASN1Encoder<ORAddressFilter_attribute_type> | null = null;

/**
 * @summary Encodes a(n) ORAddressFilter_attribute_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressFilter_attribute_type, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressFilter_attribute_type(
    value: ORAddressFilter_attribute_type,
    elGetter: $.ASN1Encoder<ORAddressFilter_attribute_type>
) {
    if (!_cached_encoder_for_ORAddressFilter_attribute_type) {
        _cached_encoder_for_ORAddressFilter_attribute_type = $._encode_choice<ORAddressFilter_attribute_type>(
            {
                standard_attribute: $._encodeInteger,
                domain_defined_attribute: _encode_UniversalOrBMPString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ORAddressFilter_attribute_type(value, elGetter);
}


/* eslint-enable */
