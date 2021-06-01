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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta';
export {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta';
import {
    BilateralDomain_domain_private_domain,
    _decode_BilateralDomain_domain_private_domain,
    _encode_BilateralDomain_domain_private_domain,
} from '../MTAAbstractService/BilateralDomain-domain-private-domain.ta';
export {
    BilateralDomain_domain_private_domain,
    _decode_BilateralDomain_domain_private_domain,
    _encode_BilateralDomain_domain_private_domain,
} from '../MTAAbstractService/BilateralDomain-domain-private-domain.ta';

/* START_OF_SYMBOL_DEFINITION BilateralDomain_domain */
/**
 * @summary BilateralDomain_domain
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilateralDomain-domain ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BilateralDomain_domain =
    | {
          administration_domain_name: AdministrationDomainName;
      } /* CHOICE_ALT_ROOT */
    | {
          private_domain: BilateralDomain_domain_private_domain;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BilateralDomain_domain */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDomain_domain */
let _cached_decoder_for_BilateralDomain_domain: $.ASN1Decoder<BilateralDomain_domain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDomain_domain */

/* START_OF_SYMBOL_DEFINITION _decode_BilateralDomain_domain */
/**
 * @summary Decodes an ASN.1 element into a(n) BilateralDomain_domain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BilateralDomain_domain} The decoded data structure.
 */
export function _decode_BilateralDomain_domain(el: _Element) {
    if (!_cached_decoder_for_BilateralDomain_domain) {
        _cached_decoder_for_BilateralDomain_domain = $._decode_inextensible_choice<BilateralDomain_domain>(
            {
                'APPLICATION 2': [
                    'administration_domain_name',
                    _decode_AdministrationDomainName,
                ],
                'UNIVERSAL 16': [
                    'private_domain',
                    _decode_BilateralDomain_domain_private_domain,
                ],
            }
        );
    }
    return _cached_decoder_for_BilateralDomain_domain(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BilateralDomain_domain */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDomain_domain */
let _cached_encoder_for_BilateralDomain_domain: $.ASN1Encoder<BilateralDomain_domain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDomain_domain */

/* START_OF_SYMBOL_DEFINITION _encode_BilateralDomain_domain */
/**
 * @summary Encodes a(n) BilateralDomain_domain into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BilateralDomain_domain, encoded as an ASN.1 Element.
 */
export function _encode_BilateralDomain_domain(
    value: BilateralDomain_domain,
    elGetter: $.ASN1Encoder<BilateralDomain_domain>
) {
    if (!_cached_encoder_for_BilateralDomain_domain) {
        _cached_encoder_for_BilateralDomain_domain = $._encode_choice<BilateralDomain_domain>(
            {
                administration_domain_name: _encode_AdministrationDomainName,
                private_domain: _encode_BilateralDomain_domain_private_domain,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BilateralDomain_domain(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BilateralDomain_domain */

/* eslint-enable */
