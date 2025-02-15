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
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from '../MTSAbstractService/CountryName.ta';
export {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from '../MTSAbstractService/CountryName.ta';
import {
    BilateralDomain_domain,
    _decode_BilateralDomain_domain,
    _encode_BilateralDomain_domain,
} from '../MTAAbstractService/BilateralDomain-domain.ta';
export {
    BilateralDomain_domain,
    _decode_BilateralDomain_domain,
    _encode_BilateralDomain_domain,
} from '../MTAAbstractService/BilateralDomain-domain.ta';

/* START_OF_SYMBOL_DEFINITION BilateralDomain */
/**
 * @summary BilateralDomain
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilateralDomain ::= SEQUENCE {
 *   country-name  CountryName,
 *   domain
 *     CHOICE {administration-domain-name  AdministrationDomainName,
 *             private-domain
 *               SEQUENCE {administration-domain-name
 *                           [0]  AdministrationDomainName,
 *                         private-domain-identifier
 *                           [1]  PrivateDomainIdentifier}}
 * }
 * ```
 *
 * @class
 */
export class BilateralDomain {
    constructor(
        /**
         * @summary `country_name`.
         * @public
         * @readonly
         */
        readonly country_name: CountryName,
        /**
         * @summary `domain`.
         * @public
         * @readonly
         */
        readonly domain: BilateralDomain_domain
    ) {}

    /**
     * @summary Restructures an object into a BilateralDomain
     * @description
     *
     * This takes an `object` and converts it to a `BilateralDomain`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BilateralDomain`.
     * @returns {BilateralDomain}
     */
    public static _from_object(
        _o: { [_K in keyof BilateralDomain]: BilateralDomain[_K] }
    ): BilateralDomain {
        return new BilateralDomain(_o.country_name, _o.domain);
    }
}
/* END_OF_SYMBOL_DEFINITION BilateralDomain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BilateralDomain */
/**
 * @summary The Leading Root Component Types of BilateralDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BilateralDomain: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'country-name',
        false,
        $.hasTag(_TagClass.application, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec('domain', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BilateralDomain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BilateralDomain */
/**
 * @summary The Trailing Root Component Types of BilateralDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BilateralDomain: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BilateralDomain */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BilateralDomain */
/**
 * @summary The Extension Addition Component Types of BilateralDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BilateralDomain: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BilateralDomain */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDomain */
let _cached_decoder_for_BilateralDomain: $.ASN1Decoder<BilateralDomain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDomain */

/* START_OF_SYMBOL_DEFINITION _decode_BilateralDomain */
/**
 * @summary Decodes an ASN.1 element into a(n) BilateralDomain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BilateralDomain} The decoded data structure.
 */
export function _decode_BilateralDomain(el: _Element) {
    if (!_cached_decoder_for_BilateralDomain) {
        _cached_decoder_for_BilateralDomain = function (
            el: _Element
        ): BilateralDomain {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BilateralDomain contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'country-name';
            sequence[1].name = 'domain';
            let country_name!: CountryName;
            let domain!: BilateralDomain_domain;
            country_name = _decode_CountryName(sequence[0]);
            domain = _decode_BilateralDomain_domain(sequence[1]);
            return new BilateralDomain(country_name, domain);
        };
    }
    return _cached_decoder_for_BilateralDomain(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BilateralDomain */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDomain */
let _cached_encoder_for_BilateralDomain: $.ASN1Encoder<BilateralDomain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDomain */

/* START_OF_SYMBOL_DEFINITION _encode_BilateralDomain */
/**
 * @summary Encodes a(n) BilateralDomain into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BilateralDomain, encoded as an ASN.1 Element.
 */
export function _encode_BilateralDomain(
    value: BilateralDomain,
    elGetter: $.ASN1Encoder<BilateralDomain>
) {
    if (!_cached_encoder_for_BilateralDomain) {
        _cached_encoder_for_BilateralDomain = function (
            value: BilateralDomain,
            elGetter: $.ASN1Encoder<BilateralDomain>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CountryName(
                            value.country_name,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BilateralDomain_domain(
                            value.domain,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BilateralDomain(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BilateralDomain */

/* eslint-enable */
