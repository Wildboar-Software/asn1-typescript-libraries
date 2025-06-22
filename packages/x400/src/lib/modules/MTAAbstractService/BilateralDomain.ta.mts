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
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from '../MTSAbstractService/CountryName.ta.mjs';
import {
    BilateralDomain_domain,
    _decode_BilateralDomain_domain,
    _encode_BilateralDomain_domain,
} from '../MTAAbstractService/BilateralDomain-domain.ta.mjs';
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
        $.hasTag(_TagClass.application, 1)
    ),
    new $.ComponentSpec('domain', false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of BilateralDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BilateralDomain: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BilateralDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BilateralDomain: $.ComponentSpec[] = [];

let _cached_decoder_for_BilateralDomain: $.ASN1Decoder<BilateralDomain> | null = null;

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

let _cached_encoder_for_BilateralDomain: $.ASN1Encoder<BilateralDomain> | null = null;

/**
 * @summary Encodes a(n) BilateralDomain into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BilateralDomain, encoded as an ASN.1 Element.
 */
export function _encode_BilateralDomain(
    value: BilateralDomain,
    elGetter: $.ASN1Encoder<BilateralDomain>
) {
    if (!_cached_encoder_for_BilateralDomain) {
        _cached_encoder_for_BilateralDomain = function (
            value: BilateralDomain        ): _Element {
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


/* eslint-enable */
