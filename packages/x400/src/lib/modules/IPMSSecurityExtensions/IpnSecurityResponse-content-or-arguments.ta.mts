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
    OriginalContent,
    _decode_OriginalContent,
    _encode_OriginalContent,
} from '../IPMSSecurityExtensions/OriginalContent.ta.mjs';
import {
    IpnSecurityResponse_content_or_arguments_original_security_arguments,
    _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
    _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
} from '../IPMSSecurityExtensions/IpnSecurityResponse-content-or-arguments-original-security-arguments.ta.mjs';
/**
 * @summary IpnSecurityResponse_content_or_arguments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IpnSecurityResponse-content-or-arguments ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IpnSecurityResponse_content_or_arguments =
    | { original_content: OriginalContent } /* CHOICE_ALT_ROOT */
    | {
          original_security_arguments: IpnSecurityResponse_content_or_arguments_original_security_arguments;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IpnSecurityResponse_content_or_arguments: $.ASN1Decoder<IpnSecurityResponse_content_or_arguments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpnSecurityResponse_content_or_arguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IpnSecurityResponse_content_or_arguments} The decoded data structure.
 */
export function _decode_IpnSecurityResponse_content_or_arguments(el: _Element): IpnSecurityResponse_content_or_arguments {
    if (!_cached_decoder_for_IpnSecurityResponse_content_or_arguments) {
        _cached_decoder_for_IpnSecurityResponse_content_or_arguments = $._decode_inextensible_choice<IpnSecurityResponse_content_or_arguments>(
            {
                'UNIVERSAL 4': ['original_content', _decode_OriginalContent],
                'UNIVERSAL 17': [
                    'original_security_arguments',
                    _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
                ],
            }
        );
    }
    return _cached_decoder_for_IpnSecurityResponse_content_or_arguments(el);
}

let _cached_encoder_for_IpnSecurityResponse_content_or_arguments: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments> | null = null;

/**
 * @summary Encodes a(n) IpnSecurityResponse_content_or_arguments into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpnSecurityResponse_content_or_arguments, encoded as an ASN.1 Element.
 */
export function _encode_IpnSecurityResponse_content_or_arguments(
    value: IpnSecurityResponse_content_or_arguments,
    elGetter: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments>
): _Element {
    if (!_cached_encoder_for_IpnSecurityResponse_content_or_arguments) {
        _cached_encoder_for_IpnSecurityResponse_content_or_arguments = $._encode_choice<IpnSecurityResponse_content_or_arguments>(
            {
                original_content: _encode_OriginalContent,
                original_security_arguments: _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments,
            },
            $.BER
        );
    }
    return _cached_encoder_for_IpnSecurityResponse_content_or_arguments(
        value,
        elGetter
    );
}


/* eslint-enable */
