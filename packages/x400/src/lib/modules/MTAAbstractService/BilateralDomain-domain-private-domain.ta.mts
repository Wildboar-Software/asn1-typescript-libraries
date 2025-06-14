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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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
/* START_OF_SYMBOL_DEFINITION BilateralDomain_domain_private_domain */
/**
 * @summary BilateralDomain_domain_private_domain
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilateralDomain-domain-private-domain ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class BilateralDomain_domain_private_domain {
    constructor(
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
        readonly private_domain_identifier: PrivateDomainIdentifier
    ) {}

    /**
     * @summary Restructures an object into a BilateralDomain_domain_private_domain
     * @description
     *
     * This takes an `object` and converts it to a `BilateralDomain_domain_private_domain`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BilateralDomain_domain_private_domain`.
     * @returns {BilateralDomain_domain_private_domain}
     */
    public static _from_object(
        _o: {
            [_K in keyof BilateralDomain_domain_private_domain]: BilateralDomain_domain_private_domain[_K];
        }
    ): BilateralDomain_domain_private_domain {
        return new BilateralDomain_domain_private_domain(
            _o.administration_domain_name,
            _o.private_domain_identifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION BilateralDomain_domain_private_domain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BilateralDomain_domain_private_domain */
/**
 * @summary The Leading Root Component Types of BilateralDomain_domain_private_domain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BilateralDomain_domain_private_domain: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'administration-domain-name',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'private-domain-identifier',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BilateralDomain_domain_private_domain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BilateralDomain_domain_private_domain */
/**
 * @summary The Trailing Root Component Types of BilateralDomain_domain_private_domain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BilateralDomain_domain_private_domain: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BilateralDomain_domain_private_domain */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BilateralDomain_domain_private_domain */
/**
 * @summary The Extension Addition Component Types of BilateralDomain_domain_private_domain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BilateralDomain_domain_private_domain: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BilateralDomain_domain_private_domain */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDomain_domain_private_domain */
let _cached_decoder_for_BilateralDomain_domain_private_domain: $.ASN1Decoder<BilateralDomain_domain_private_domain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDomain_domain_private_domain */

/* START_OF_SYMBOL_DEFINITION _decode_BilateralDomain_domain_private_domain */
/**
 * @summary Decodes an ASN.1 element into a(n) BilateralDomain_domain_private_domain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BilateralDomain_domain_private_domain} The decoded data structure.
 */
export function _decode_BilateralDomain_domain_private_domain(el: _Element) {
    if (!_cached_decoder_for_BilateralDomain_domain_private_domain) {
        _cached_decoder_for_BilateralDomain_domain_private_domain = function (
            el: _Element
        ): BilateralDomain_domain_private_domain {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BilateralDomain-domain-private-domain contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'administration-domain-name';
            sequence[1].name = 'private-domain-identifier';
            let administration_domain_name!: AdministrationDomainName;
            let private_domain_identifier!: PrivateDomainIdentifier;
            administration_domain_name = $._decode_implicit<AdministrationDomainName>(
                () => _decode_AdministrationDomainName
            )(sequence[0]);
            private_domain_identifier = $._decode_explicit<PrivateDomainIdentifier>(
                () => _decode_PrivateDomainIdentifier
            )(sequence[1]);
            return new BilateralDomain_domain_private_domain(
                administration_domain_name,
                private_domain_identifier
            );
        };
    }
    return _cached_decoder_for_BilateralDomain_domain_private_domain(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BilateralDomain_domain_private_domain */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDomain_domain_private_domain */
let _cached_encoder_for_BilateralDomain_domain_private_domain: $.ASN1Encoder<BilateralDomain_domain_private_domain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDomain_domain_private_domain */

/* START_OF_SYMBOL_DEFINITION _encode_BilateralDomain_domain_private_domain */
/**
 * @summary Encodes a(n) BilateralDomain_domain_private_domain into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BilateralDomain_domain_private_domain, encoded as an ASN.1 Element.
 */
export function _encode_BilateralDomain_domain_private_domain(
    value: BilateralDomain_domain_private_domain,
    elGetter: $.ASN1Encoder<BilateralDomain_domain_private_domain>
) {
    if (!_cached_encoder_for_BilateralDomain_domain_private_domain) {
        _cached_encoder_for_BilateralDomain_domain_private_domain = function (
            value: BilateralDomain_domain_private_domain        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_AdministrationDomainName,
                            $.BER
                        )(value.administration_domain_name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_PrivateDomainIdentifier,
                            $.BER
                        )(value.private_domain_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BilateralDomain_domain_private_domain(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_BilateralDomain_domain_private_domain */

/* eslint-enable */
