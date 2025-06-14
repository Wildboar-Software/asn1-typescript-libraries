/* eslint-disable */
import {
    OCTET_STRING,
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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DomainIdentity */
/**
 * @summary DomainIdentity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainIdentity  ::=  CHOICE {
 *   domainName   DistinguishedName,
 *   privateName  OCTET STRING
 * }
 * ```
 */
export type DomainIdentity =
    | { domainName: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { privateName: OCTET_STRING } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DomainIdentity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainIdentity */
let _cached_decoder_for_DomainIdentity: $.ASN1Decoder<DomainIdentity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainIdentity */

/* START_OF_SYMBOL_DEFINITION _decode_DomainIdentity */
/**
 * @summary Decodes an ASN.1 element into a(n) DomainIdentity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainIdentity} The decoded data structure.
 */
export function _decode_DomainIdentity(el: _Element) {
    if (!_cached_decoder_for_DomainIdentity) {
        _cached_decoder_for_DomainIdentity = $._decode_inextensible_choice<DomainIdentity>(
            {
                'UNIVERSAL 16': ['domainName', _decode_DistinguishedName],
                'UNIVERSAL 4': ['privateName', $._decodeOctetString],
            }
        );
    }
    return _cached_decoder_for_DomainIdentity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DomainIdentity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainIdentity */
let _cached_encoder_for_DomainIdentity: $.ASN1Encoder<DomainIdentity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainIdentity */

/* START_OF_SYMBOL_DEFINITION _encode_DomainIdentity */
/**
 * @summary Encodes a(n) DomainIdentity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainIdentity, encoded as an ASN.1 Element.
 */
export function _encode_DomainIdentity(
    value: DomainIdentity,
    elGetter: $.ASN1Encoder<DomainIdentity>
) {
    if (!_cached_encoder_for_DomainIdentity) {
        _cached_encoder_for_DomainIdentity = $._encode_choice<DomainIdentity>(
            {
                domainName: _encode_DistinguishedName,
                privateName: $._encodeOctetString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DomainIdentity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DomainIdentity */

/* eslint-enable */
