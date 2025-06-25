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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    EMailMtsUserName,
    _decode_EMailMtsUserName,
    _encode_EMailMtsUserName,
} from '../MhsMTAAsn1Module/EMailMtsUserName.ta.mjs';
/**
 * @summary EMailRedirections_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailRedirections-address ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EMailRedirections_address =
    | { none: NULL } /* CHOICE_ALT_ROOT */
    | { email_addr: EMailMtsUserName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailRedirections_address: $.ASN1Decoder<EMailRedirections_address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailRedirections_address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailRedirections_address} The decoded data structure.
 */
export function _decode_EMailRedirections_address(el: _Element): EMailRedirections_address {
    if (!_cached_decoder_for_EMailRedirections_address) {
        _cached_decoder_for_EMailRedirections_address = $._decode_inextensible_choice<EMailRedirections_address>(
            {
                'UNIVERSAL 5': ['none', $._decodeNull],
                'CONTEXT 0': ['email_addr', _decode_EMailMtsUserName],
                'CONTEXT 1': ['email_addr', _decode_EMailMtsUserName],
            }
        );
    }
    return _cached_decoder_for_EMailRedirections_address(el);
}

let _cached_encoder_for_EMailRedirections_address: $.ASN1Encoder<EMailRedirections_address> | null = null;

/**
 * @summary Encodes a(n) EMailRedirections_address into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailRedirections_address, encoded as an ASN.1 Element.
 */
export function _encode_EMailRedirections_address(
    value: EMailRedirections_address,
    elGetter: $.ASN1Encoder<EMailRedirections_address>
): _Element {
    if (!_cached_encoder_for_EMailRedirections_address) {
        _cached_encoder_for_EMailRedirections_address = $._encode_choice<EMailRedirections_address>(
            {
                none: $._encodeNull,
                email_addr: _encode_EMailMtsUserName,
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailRedirections_address(value, elGetter);
}


/* eslint-enable */
