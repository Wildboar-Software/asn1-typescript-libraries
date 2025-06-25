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
    BilateralDomain,
    _decode_BilateralDomain,
    _encode_BilateralDomain,
} from '../MTAAbstractService/BilateralDomain.ta.mjs';
import {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from '../MTSAbstractService/CountryName.ta.mjs';
import {
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.mjs';
import {
    _decode_PrivateDomainIdentifier,
    _encode_PrivateDomainIdentifier,
} from '../MTSAbstractService/PrivateDomainIdentifier.ta.mjs';
import {
    _root_component_type_list_1_spec_for_BilateralDomain,
} from '../MTAAbstractService/BilateralDomain.ta.mjs';
import {
    BilateralDomain_domain,
    _decode_BilateralDomain_domain,
    _encode_BilateralDomain_domain,
} from '../MTAAbstractService/BilateralDomain-domain.ta.mjs';

// Manually edited.

/**
 * @summary PerDomainBilateralInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerDomainBilateralInformation ::= SEQUENCE {
 *   COMPONENTS OF BilateralDomain,
 *   bilateral-information  BILATERAL.&Type
 * }
 * ```
 *
 * @class
 */
export class PerDomainBilateralInformation implements BilateralDomain {
    constructor(
        /**
         * @summary `country_name`.
         * @public
         * @readonly
         */
        readonly country_name: CountryName /* REPLICATED_COMPONENT */,
        /**
         * @summary `domain`.
         * @public
         * @readonly
         */
        readonly domain: BilateralDomain_domain /* REPLICATED_COMPONENT */,
        /**
         * @summary `bilateral_information`.
         * @public
         * @readonly
         */
        readonly bilateral_information: _Element
    ) {}

    /**
     * @summary Restructures an object into a PerDomainBilateralInformation
     * @description
     *
     * This takes an `object` and converts it to a `PerDomainBilateralInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerDomainBilateralInformation`.
     * @returns {PerDomainBilateralInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerDomainBilateralInformation]: PerDomainBilateralInformation[_K];
        }
    ): PerDomainBilateralInformation {
        return new PerDomainBilateralInformation(
            _o.country_name,
            _o.domain,
            _o.bilateral_information
        );
    }
}

/**
 * @summary The Leading Root Component Types of PerDomainBilateralInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerDomainBilateralInformation: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_BilateralDomain,
    new $.ComponentSpec(
        'bilateral-information',
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of PerDomainBilateralInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerDomainBilateralInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerDomainBilateralInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerDomainBilateralInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_PerDomainBilateralInformation: $.ASN1Decoder<PerDomainBilateralInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerDomainBilateralInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerDomainBilateralInformation} The decoded data structure.
 */
export function _decode_PerDomainBilateralInformation(el: _Element): PerDomainBilateralInformation {
    if (!_cached_decoder_for_PerDomainBilateralInformation) {
        _cached_decoder_for_PerDomainBilateralInformation = function (
            el: _Element
        ): PerDomainBilateralInformation {
            let country_name!: CountryName;
            let domain!: BilateralDomain_domain
            let bilateral_information!: _Element;
            const callbacks: $.DecodingMap = {
                'country-name': (_el: _Element): void => {
                    country_name = _decode_CountryName(_el);
                },
                domain: (_el: _Element): void => {
                    domain = _decode_BilateralDomain_domain(_el);
                },
                'bilateral-information': (_el: _Element): void => {
                    bilateral_information = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerDomainBilateralInformation,
                _extension_additions_list_spec_for_PerDomainBilateralInformation,
                _root_component_type_list_2_spec_for_PerDomainBilateralInformation,
                undefined
            );
            return new PerDomainBilateralInformation (
                country_name,
                domain,
                bilateral_information
            );
        };
    }
    return _cached_decoder_for_PerDomainBilateralInformation(el);
}

let _cached_encoder_for_PerDomainBilateralInformation: $.ASN1Encoder<PerDomainBilateralInformation> | null = null;

/**
 * @summary Encodes a(n) PerDomainBilateralInformation into an ASN.1 Element.
 * @function
 * @param {PerDomainBilateralInformation} value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerDomainBilateralInformation, encoded as an ASN.1 Element.
 */
export function _encode_PerDomainBilateralInformation(
    value: PerDomainBilateralInformation,
    elGetter: $.ASN1Encoder<PerDomainBilateralInformation>
): _Element {
    if (!_cached_encoder_for_PerDomainBilateralInformation) {
        _cached_encoder_for_PerDomainBilateralInformation = function (
            value: PerDomainBilateralInformation        ): _Element {
            return $._encodeSequence(
                [
                    /* REQUIRED   */ _encode_CountryName(
                        value.country_name,
                        $.BER
                    ),
                    /* REQUIRED   */ _encode_BilateralDomain_domain(
                        value.domain,
                        $.BER
                    ),
                    /* REQUIRED   */ $._encodeAny(
                        value.bilateral_information,
                        $.BER
                    ),
                ], $.BER
            );
        };
    }
    return _cached_encoder_for_PerDomainBilateralInformation(value, elGetter);
}


/* eslint-enable */
