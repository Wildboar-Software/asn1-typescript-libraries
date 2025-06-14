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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta.mjs';
import {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs';
import {
    BuiltInStandardAttributes,
    _decode_BuiltInStandardAttributes,
    _encode_BuiltInStandardAttributes,
} from '../MTSAbstractService/BuiltInStandardAttributes.ta.mjs';
import {
    BuiltInDomainDefinedAttributes,
    _decode_BuiltInDomainDefinedAttributes,
    _encode_BuiltInDomainDefinedAttributes,
} from '../MTSAbstractService/BuiltInDomainDefinedAttributes.ta.mjs';
import {
    ExtensionAttributes,
    _decode_ExtensionAttributes,
    _encode_ExtensionAttributes,
} from '../MTSAbstractService/ExtensionAttributes.ta.mjs';
import {
    _root_component_type_list_1_spec_for_ORAddress,
    _root_component_type_list_2_spec_for_ORAddress,
    _extension_additions_list_spec_for_ORAddress,
} from '../MTSAbstractService/ORAddress.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ORName */
/**
 * @summary ORName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORName ::= [APPLICATION 0]  SEQUENCE {
 *   COMPONENTS OF ORAddress,
 *   directory-name  [0]  Name OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ORName implements ORAddress {
    constructor(
        /**
         * @summary `built_in_standard_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_standard_attributes: BuiltInStandardAttributes /* REPLICATED_COMPONENT */,
        /**
         * @summary `built_in_domain_defined_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_domain_defined_attributes: OPTIONAL<BuiltInDomainDefinedAttributes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `extension_attributes`.
         * @public
         * @readonly
         */
        readonly extension_attributes: OPTIONAL<ExtensionAttributes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `directory_name`.
         * @public
         * @readonly
         */
        readonly directory_name: OPTIONAL<Name>
    ) {}

    /**
     * @summary Restructures an object into a ORName
     * @description
     *
     * This takes an `object` and converts it to a `ORName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ORName`.
     * @returns {ORName}
     */
    public static _from_object(
        _o: { [_K in keyof ORName]: ORName[_K] }
    ): ORName {
        return new ORName(
            _o.built_in_standard_attributes,
            _o.built_in_domain_defined_attributes,
            _o.extension_attributes,
            _o.directory_name
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ORName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ORName */
/**
 * @summary The Leading Root Component Types of ORName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ORName: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_ORAddress,
    new $.ComponentSpec(
        'directory-name',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ORName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ORName */
/**
 * @summary The Trailing Root Component Types of ORName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ORName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ORName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ORName */
/**
 * @summary The Extension Addition Component Types of ORName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ORName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ORName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ORName */
let _cached_decoder_for_ORName: $.ASN1Decoder<ORName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ORName */

/* START_OF_SYMBOL_DEFINITION _decode_ORName */
/**
 * @summary Decodes an ASN.1 element into a(n) ORName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORName} The decoded data structure.
 */
export function _decode_ORName(el: _Element) {
    if (!_cached_decoder_for_ORName) {
        _cached_decoder_for_ORName = $._decode_implicit<ORName>(
            () =>
                function (el: _Element): ORName {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let built_in_standard_attributes!: BuiltInStandardAttributes;
                    let built_in_domain_defined_attributes: OPTIONAL<BuiltInDomainDefinedAttributes>;
                    let extension_attributes: OPTIONAL<ExtensionAttributes>;
                    let directory_name: OPTIONAL<Name>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        'built-in-standard-attributes': (
                            _el: _Element
                        ): void => {
                            built_in_standard_attributes = _decode_BuiltInStandardAttributes(
                                _el
                            );
                        },
                        'built-in-domain-defined-attributes': (
                            _el: _Element
                        ): void => {
                            built_in_domain_defined_attributes = _decode_BuiltInDomainDefinedAttributes(
                                _el
                            );
                        },
                        'extension-attributes': (_el: _Element): void => {
                            extension_attributes = _decode_ExtensionAttributes(
                                _el
                            );
                        },
                        'directory-name': (_el: _Element): void => {
                            directory_name = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_ORName,
                        _extension_additions_list_spec_for_ORName,
                        _root_component_type_list_2_spec_for_ORName,
                        undefined
                    );
                    return new ORName /* SEQUENCE_CONSTRUCTOR_CALL */(
                        built_in_standard_attributes,
                        built_in_domain_defined_attributes,
                        extension_attributes,
                        directory_name
                    );
                }
        );
    }
    return _cached_decoder_for_ORName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ORName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ORName */
let _cached_encoder_for_ORName: $.ASN1Encoder<ORName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ORName */

/* START_OF_SYMBOL_DEFINITION _encode_ORName */
/**
 * @summary Encodes a(n) ORName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORName, encoded as an ASN.1 Element.
 */
export function _encode_ORName(value: ORName, elGetter: $.ASN1Encoder<ORName>) {
    if (!_cached_encoder_for_ORName) {
        _cached_encoder_for_ORName = $._encode_implicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: ORName                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_BuiltInStandardAttributes(
                                    value.built_in_standard_attributes,
                                    $.BER
                                ),
                                /* IF_ABSENT  */ value.built_in_domain_defined_attributes ===
                                undefined
                                    ? undefined
                                    : _encode_BuiltInDomainDefinedAttributes(
                                          value.built_in_domain_defined_attributes,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.extension_attributes ===
                                undefined
                                    ? undefined
                                    : _encode_ExtensionAttributes(
                                          value.extension_attributes,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.directory_name ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          0,
                                          () => _encode_Name,
                                          $.BER
                                      )(value.directory_name, $.BER),
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
    return _cached_encoder_for_ORName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ORName */

/* eslint-enable */
