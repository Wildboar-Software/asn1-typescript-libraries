/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    REAL,
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
 * @summary DataRate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataRate  ::=  CHOICE {real  REAL,
 *                      oi    OBJECT IDENTIFIER
 * }
 * ```
 */
export type DataRate =
    | { real: REAL } /* CHOICE_ALT_ROOT */
    | { oi: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DataRate: $.ASN1Decoder<DataRate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataRate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataRate} The decoded data structure.
 */
export function _decode_DataRate(el: _Element): DataRate {
    if (!_cached_decoder_for_DataRate) {
        _cached_decoder_for_DataRate = $._decode_inextensible_choice<DataRate>({
            'UNIVERSAL 9': ['real', $._decodeReal],
            'UNIVERSAL 6': ['oi', $._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_DataRate(el);
}

let _cached_encoder_for_DataRate: $.ASN1Encoder<DataRate> | null = null;

/**
 * @summary Encodes a(n) DataRate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataRate, encoded as an ASN.1 Element.
 */
export function _encode_DataRate(
    value: DataRate,
    elGetter: $.ASN1Encoder<DataRate>
): _Element {
    if (!_cached_encoder_for_DataRate) {
        _cached_encoder_for_DataRate = $._encode_choice<DataRate>(
            {
                real: $._encodeReal,
                oi: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataRate(value, elGetter);
}


/* eslint-enable */
