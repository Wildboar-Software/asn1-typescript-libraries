/* eslint-disable */
import {
    NULL,
    GeneralizedTime,
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

/**
 * @summary Date
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date  ::=  CHOICE {time               GeneralizedTime,
 *                  noSuchInformation  NULL
 * }
 * ```
 */
export type Date =
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { noSuchInformation: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Date: $.ASN1Decoder<Date> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Date
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Date} The decoded data structure.
 */
export function _decode_Date(el: _Element) {
    if (!_cached_decoder_for_Date) {
        _cached_decoder_for_Date = $._decode_inextensible_choice<Date>({
            'UNIVERSAL 24': ['time', $._decodeGeneralizedTime],
            'UNIVERSAL 5': ['noSuchInformation', $._decodeNull],
        });
    }
    return _cached_decoder_for_Date(el);
}

let _cached_encoder_for_Date: $.ASN1Encoder<Date> | null = null;

/**
 * @summary Encodes a(n) Date into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date, encoded as an ASN.1 Element.
 */
export function _encode_Date(value: Date, elGetter: $.ASN1Encoder<Date>) {
    if (!_cached_encoder_for_Date) {
        _cached_encoder_for_Date = $._encode_choice<Date>(
            {
                time: $._encodeGeneralizedTime,
                noSuchInformation: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Date(value, elGetter);
}


/* eslint-enable */
