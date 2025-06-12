/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.mjs';
import {
    Proxy,
    _decode_Proxy,
    _encode_Proxy,
} from '../AccessControl-ASN1Module/Proxy.ta.mjs';
export {
    Proxy,
    _decode_Proxy,
    _encode_Proxy,
} from '../AccessControl-ASN1Module/Proxy.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SecurityDomainAuthorityName */
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
/* END_OF_SYMBOL_DEFINITION SecurityDomainAuthorityName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityDomainAuthorityName */
let _cached_decoder_for_SecurityDomainAuthorityName: $.ASN1Decoder<SecurityDomainAuthorityName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityDomainAuthorityName */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityDomainAuthorityName */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityDomainAuthorityName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityDomainAuthorityName} The decoded data structure.
 */
export function _decode_SecurityDomainAuthorityName(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_SecurityDomainAuthorityName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityDomainAuthorityName */
let _cached_encoder_for_SecurityDomainAuthorityName: $.ASN1Encoder<SecurityDomainAuthorityName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityDomainAuthorityName */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityDomainAuthorityName */
/**
 * @summary Encodes a(n) SecurityDomainAuthorityName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityDomainAuthorityName, encoded as an ASN.1 Element.
 */
export function _encode_SecurityDomainAuthorityName(
    value: SecurityDomainAuthorityName,
    elGetter: $.ASN1Encoder<SecurityDomainAuthorityName>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_SecurityDomainAuthorityName */

/* eslint-enable */
