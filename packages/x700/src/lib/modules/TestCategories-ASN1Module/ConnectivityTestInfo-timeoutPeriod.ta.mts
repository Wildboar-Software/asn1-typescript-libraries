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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip';
/**
 * @summary ConnectivityTestInfo_timeoutPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityTestInfo-timeoutPeriod ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConnectivityTestInfo_timeoutPeriod =
    | { timeUnits: Timespec } /* CHOICE_ALT_ROOT */
    | { attributeId: AttributeId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod: $.ASN1Decoder<ConnectivityTestInfo_timeoutPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityTestInfo_timeoutPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityTestInfo_timeoutPeriod} The decoded data structure.
 */
export function _decode_ConnectivityTestInfo_timeoutPeriod(el: _Element): ConnectivityTestInfo_timeoutPeriod {
    if (!_cached_decoder_for_ConnectivityTestInfo_timeoutPeriod) {
        _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod = $._decode_inextensible_choice<ConnectivityTestInfo_timeoutPeriod>(
            {
                'CONTEXT 22': ['timeUnits', _decode_Timespec],
                'CONTEXT 23': ['timeUnits', _decode_Timespec],
                'CONTEXT 24': ['timeUnits', _decode_Timespec],
                'CONTEXT 25': ['timeUnits', _decode_Timespec],
                'CONTEXT 26': ['timeUnits', _decode_Timespec],
                'CONTEXT 27': ['timeUnits', _decode_Timespec],
                'CONTEXT 28': ['timeUnits', _decode_Timespec],
                'CONTEXT 0': ['attributeId', _decode_AttributeId],
                'CONTEXT 1': ['attributeId', _decode_AttributeId],
            }
        );
    }
    return _cached_decoder_for_ConnectivityTestInfo_timeoutPeriod(el);
}

let _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod: $.ASN1Encoder<ConnectivityTestInfo_timeoutPeriod> | null = null;

/**
 * @summary Encodes a(n) ConnectivityTestInfo_timeoutPeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityTestInfo_timeoutPeriod, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityTestInfo_timeoutPeriod(
    value: ConnectivityTestInfo_timeoutPeriod,
    elGetter: $.ASN1Encoder<ConnectivityTestInfo_timeoutPeriod>
): _Element {
    if (!_cached_encoder_for_ConnectivityTestInfo_timeoutPeriod) {
        _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod = $._encode_choice<ConnectivityTestInfo_timeoutPeriod>(
            {
                timeUnits: _encode_Timespec,
                attributeId: _encode_AttributeId,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectivityTestInfo_timeoutPeriod(
        value,
        elGetter
    );
}


/* eslint-enable */
