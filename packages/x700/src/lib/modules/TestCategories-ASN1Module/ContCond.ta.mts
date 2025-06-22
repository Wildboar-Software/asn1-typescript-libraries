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
import * as $ from '@wildboar/asn1/functional';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
import {
    PDUReception,
    _decode_PDUReception,
    _encode_PDUReception,
} from '../TestCategories-ASN1Module/PDUReception.ta.mjs';
/**
 * @summary ContCond
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContCond  ::=  CHOICE {intervalTime  Timespec,
 *                      pDUReception  PDUReception
 * }
 * ```
 */
export type ContCond =
    | { intervalTime: Timespec } /* CHOICE_ALT_ROOT */
    | { pDUReception: PDUReception } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ContCond: $.ASN1Decoder<ContCond> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContCond
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContCond} The decoded data structure.
 */
export function _decode_ContCond(el: _Element) {
    if (!_cached_decoder_for_ContCond) {
        _cached_decoder_for_ContCond = $._decode_inextensible_choice<ContCond>({
            'CONTEXT 22': ['intervalTime', _decode_Timespec],
            'CONTEXT 23': ['intervalTime', _decode_Timespec],
            'CONTEXT 24': ['intervalTime', _decode_Timespec],
            'CONTEXT 25': ['intervalTime', _decode_Timespec],
            'CONTEXT 26': ['intervalTime', _decode_Timespec],
            'CONTEXT 27': ['intervalTime', _decode_Timespec],
            'CONTEXT 28': ['intervalTime', _decode_Timespec],
            'UNIVERSAL 16': ['pDUReception', _decode_PDUReception],
        });
    }
    return _cached_decoder_for_ContCond(el);
}

let _cached_encoder_for_ContCond: $.ASN1Encoder<ContCond> | null = null;

/**
 * @summary Encodes a(n) ContCond into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContCond, encoded as an ASN.1 Element.
 */
export function _encode_ContCond(
    value: ContCond,
    elGetter: $.ASN1Encoder<ContCond>
) {
    if (!_cached_encoder_for_ContCond) {
        _cached_encoder_for_ContCond = $._encode_choice<ContCond>(
            {
                intervalTime: _encode_Timespec,
                pDUReception: _encode_PDUReception,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContCond(value, elGetter);
}


/* eslint-enable */
