/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    BuiltInDomainDefinedAttributes,
    _decode_BuiltInDomainDefinedAttributes,
    _encode_BuiltInDomainDefinedAttributes,
} from "../MTSAbstractService/BuiltInDomainDefinedAttributes.ta.mjs";
import {
    BuiltInStandardAttributes,
    _decode_BuiltInStandardAttributes,
    _encode_BuiltInStandardAttributes,
} from "../MTSAbstractService/BuiltInStandardAttributes.ta.mjs";
import {
    ExtensionAttributes,
    _decode_ExtensionAttributes,
    _encode_ExtensionAttributes,
} from "../MTSAbstractService/ExtensionAttributes.ta.mjs";
/**
 * @summary ORAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddress ::= SEQUENCE {
 *   built-in-standard-attributes        BuiltInStandardAttributes,
 *   built-in-domain-defined-attributes  BuiltInDomainDefinedAttributes OPTIONAL,
 *   -- see also teletex-domain-defined-attributes
 *   extension-attributes                ExtensionAttributes OPTIONAL
 * }
 * ```
 *
 */
export class ORAddress {
    constructor(
        /**
         * @summary `built_in_standard_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_standard_attributes: BuiltInStandardAttributes,
        /**
         * @summary `built_in_domain_defined_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_domain_defined_attributes: OPTIONAL<BuiltInDomainDefinedAttributes>,
        /**
         * @summary `extension_attributes`.
         * @public
         * @readonly
         */
        readonly extension_attributes: OPTIONAL<ExtensionAttributes>
    ) {}

    /**
     * @summary Restructures an object into a ORAddress
     * @description
     *
     * This takes an `object` and converts it to a `ORAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ORAddress`.
     * @returns {ORAddress}
     */
    public static _from_object(
        _o: { [_K in keyof ORAddress]: ORAddress[_K] }
    ): ORAddress {
        return new ORAddress(
            _o.built_in_standard_attributes,
            _o.built_in_domain_defined_attributes,
            _o.extension_attributes
        );
    }
}

/**
 * @summary The Leading Root Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ORAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "built-in-standard-attributes",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "built-in-domain-defined-attributes",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "extension-attributes",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ORAddress: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ORAddress: $.ComponentSpec[] = [];

let _cached_decoder_for_ORAddress: $.ASN1Decoder<ORAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddress} The decoded data structure.
 */
export function _decode_ORAddress(el: _Element): ORAddress {
    if (!_cached_decoder_for_ORAddress) {
        _cached_decoder_for_ORAddress = function (el: _Element): ORAddress {
            let built_in_standard_attributes!: BuiltInStandardAttributes;
            let built_in_domain_defined_attributes: OPTIONAL<BuiltInDomainDefinedAttributes>;
            let extension_attributes: OPTIONAL<ExtensionAttributes>;
            const callbacks: $.DecodingMap = {
                "built-in-standard-attributes": (_el: _Element): void => {
                    built_in_standard_attributes = _decode_BuiltInStandardAttributes(
                        _el
                    );
                },
                "built-in-domain-defined-attributes": (_el: _Element): void => {
                    built_in_domain_defined_attributes = _decode_BuiltInDomainDefinedAttributes(
                        _el
                    );
                },
                "extension-attributes": (_el: _Element): void => {
                    extension_attributes = _decode_ExtensionAttributes(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ORAddress,
                _extension_additions_list_spec_for_ORAddress,
                _root_component_type_list_2_spec_for_ORAddress,
                undefined
            );
            return new ORAddress(
                built_in_standard_attributes,
                built_in_domain_defined_attributes,
                extension_attributes
            );
        };
    }
    return _cached_decoder_for_ORAddress(el);
}

let _cached_encoder_for_ORAddress: $.ASN1Encoder<ORAddress> | null = null;

/**
 * @summary Encodes a(n) ORAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddress, encoded as an ASN.1 Element.
 */
export function _encode_ORAddress(
    value: ORAddress,
    elGetter: $.ASN1Encoder<ORAddress>
): _Element {
    if (!_cached_encoder_for_ORAddress) {
        _cached_encoder_for_ORAddress = function (
            value: ORAddress        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_BuiltInStandardAttributes(
                            value.built_in_standard_attributes,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.built_in_domain_defined_attributes ===
                        undefined
                            ? undefined
                            : _encode_BuiltInDomainDefinedAttributes(
                                  value.built_in_domain_defined_attributes,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.extension_attributes ===
                        undefined
                            ? undefined
                            : _encode_ExtensionAttributes(
                                  value.extension_attributes,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ORAddress(value, elGetter);
}


/* eslint-enable */
