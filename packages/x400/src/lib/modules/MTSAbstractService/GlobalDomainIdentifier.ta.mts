/* eslint-disable */
import {
    OPTIONAL,
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
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.mjs';
import {
    PrivateDomainIdentifier,
    _decode_PrivateDomainIdentifier,
    _encode_PrivateDomainIdentifier,
} from '../MTSAbstractService/PrivateDomainIdentifier.ta.mjs';
/**
 * @summary GlobalDomainIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GlobalDomainIdentifier ::= [APPLICATION 3]  SEQUENCE {
 *   country-name                CountryName,
 *   administration-domain-name  AdministrationDomainName,
 *   private-domain-identifier   PrivateDomainIdentifier OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class GlobalDomainIdentifier {
    constructor(
        /**
         * @summary `country_name`.
         * @public
         * @readonly
         */
        readonly country_name: CountryName,
        /**
         * @summary `administration_domain_name`.
         * @public
         * @readonly
         */
        readonly administration_domain_name: AdministrationDomainName,
        /**
         * @summary `private_domain_identifier`.
         * @public
         * @readonly
         */
        readonly private_domain_identifier: OPTIONAL<PrivateDomainIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a GlobalDomainIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `GlobalDomainIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GlobalDomainIdentifier`.
     * @returns {GlobalDomainIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof GlobalDomainIdentifier]: GlobalDomainIdentifier[_K] }
    ): GlobalDomainIdentifier {
        return new GlobalDomainIdentifier(
            _o.country_name,
            _o.administration_domain_name,
            _o.private_domain_identifier
        );
    }
}

/**
 * @summary The Leading Root Component Types of GlobalDomainIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GlobalDomainIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'country-name',
        false,
        $.hasTag(_TagClass.application, 1)
    ),
    new $.ComponentSpec(
        'administration-domain-name',
        false,
        $.hasTag(_TagClass.application, 2)
    ),
    new $.ComponentSpec(
        'private-domain-identifier',
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of GlobalDomainIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GlobalDomainIdentifier: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of GlobalDomainIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GlobalDomainIdentifier: $.ComponentSpec[] = [];

let _cached_decoder_for_GlobalDomainIdentifier: $.ASN1Decoder<GlobalDomainIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GlobalDomainIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GlobalDomainIdentifier} The decoded data structure.
 */
export function _decode_GlobalDomainIdentifier(el: _Element): GlobalDomainIdentifier {
    if (!_cached_decoder_for_GlobalDomainIdentifier) {
        _cached_decoder_for_GlobalDomainIdentifier = $._decode_implicit<GlobalDomainIdentifier>(
            () =>
                function (el: _Element): GlobalDomainIdentifier {
                    let country_name!: CountryName;
                    let administration_domain_name!: AdministrationDomainName;
                    let private_domain_identifier: OPTIONAL<PrivateDomainIdentifier>;
                    const callbacks: $.DecodingMap = {
                        'country-name': (_el: _Element): void => {
                            country_name = _decode_CountryName(_el);
                        },
                        'administration-domain-name': (_el: _Element): void => {
                            administration_domain_name = _decode_AdministrationDomainName(
                                _el
                            );
                        },
                        'private-domain-identifier': (_el: _Element): void => {
                            private_domain_identifier = _decode_PrivateDomainIdentifier(
                                _el
                            );
                        },
                    };
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_GlobalDomainIdentifier,
                        _extension_additions_list_spec_for_GlobalDomainIdentifier,
                        _root_component_type_list_2_spec_for_GlobalDomainIdentifier,
                        undefined
                    );
                    return new GlobalDomainIdentifier (
                        country_name,
                        administration_domain_name,
                        private_domain_identifier
                    );
                }
        );
    }
    return _cached_decoder_for_GlobalDomainIdentifier(el);
}

let _cached_encoder_for_GlobalDomainIdentifier: $.ASN1Encoder<GlobalDomainIdentifier> | null = null;

/**
 * @summary Encodes a(n) GlobalDomainIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalDomainIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_GlobalDomainIdentifier(
    value: GlobalDomainIdentifier,
    elGetter: $.ASN1Encoder<GlobalDomainIdentifier>
): _Element {
    if (!_cached_encoder_for_GlobalDomainIdentifier) {
        _cached_encoder_for_GlobalDomainIdentifier = $._encode_implicit(
            _TagClass.application,
            3,
            () =>
                function (
                    value: GlobalDomainIdentifier                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_CountryName(
                                    value.country_name,
                                    $.BER
                                ),
                                /* REQUIRED   */ _encode_AdministrationDomainName(
                                    value.administration_domain_name,
                                    $.BER
                                ),
                                /* IF_ABSENT  */ value.private_domain_identifier ===
                                undefined
                                    ? undefined
                                    : _encode_PrivateDomainIdentifier(
                                          value.private_domain_identifier,
                                          $.BER
                                      ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_GlobalDomainIdentifier(value, elGetter);
}


/* eslint-enable */
