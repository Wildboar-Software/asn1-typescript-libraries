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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.mjs';
import {
    Proxy,
    _decode_Proxy,
    _encode_Proxy,
} from '../AccessControl-ASN1Module/Proxy.ta.mjs';
/**
 * @summary SecurityDomainAuthorityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityDomainAuthorityName  ::=  CHOICE {
 *   domainAuthorityName       [1] IMPLICIT DistinguishedName,
 *   alternativeAuthorityName  [2] IMPLICIT Proxy
 * }
 * ```
 */
export type SecurityDomainAuthorityName =
    | { domainAuthorityName: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { alternativeAuthorityName: Proxy } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SecurityDomainAuthorityName: $.ASN1Decoder<SecurityDomainAuthorityName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityDomainAuthorityName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityDomainAuthorityName} The decoded data structure.
 */
export function _decode_SecurityDomainAuthorityName(el: _Element): SecurityDomainAuthorityName {
    if (!_cached_decoder_for_SecurityDomainAuthorityName) {
        _cached_decoder_for_SecurityDomainAuthorityName = $._decode_inextensible_choice<SecurityDomainAuthorityName>(
            {
                'CONTEXT 1': [
                    'domainAuthorityName',
                    $._decode_implicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    ),
                ],
                'CONTEXT 2': [
                    'alternativeAuthorityName',
                    $._decode_implicit<Proxy>(() => _decode_Proxy),
                ],
            }
        );
    }
    return _cached_decoder_for_SecurityDomainAuthorityName(el);
}

let _cached_encoder_for_SecurityDomainAuthorityName: $.ASN1Encoder<SecurityDomainAuthorityName> | null = null;

/**
 * @summary Encodes a(n) SecurityDomainAuthorityName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityDomainAuthorityName, encoded as an ASN.1 Element.
 */
export function _encode_SecurityDomainAuthorityName(
    value: SecurityDomainAuthorityName,
    elGetter: $.ASN1Encoder<SecurityDomainAuthorityName>
): _Element {
    if (!_cached_encoder_for_SecurityDomainAuthorityName) {
        _cached_encoder_for_SecurityDomainAuthorityName = $._encode_choice<SecurityDomainAuthorityName>(
            {
                domainAuthorityName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DistinguishedName,
                    $.BER
                ),
                alternativeAuthorityName: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_Proxy,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SecurityDomainAuthorityName(value, elGetter);
}


/* eslint-enable */
