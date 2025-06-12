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
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.mjs';
export {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.mjs';
import {
    OptionalIdentifier,
    _decode_OptionalIdentifier,
    _encode_OptionalIdentifier,
} from '../GrmAttributeDefinitionModule/OptionalIdentifier.ta.mjs';
export {
    OptionalIdentifier,
    _decode_OptionalIdentifier,
    _encode_OptionalIdentifier,
} from '../GrmAttributeDefinitionModule/OptionalIdentifier.ta.mjs';
import {
    OptionallyRegisteredAs,
    _decode_OptionallyRegisteredAs,
    _encode_OptionallyRegisteredAs,
} from '../DefinitionASN1Module/OptionallyRegisteredAs.ta.mjs';
export {
    OptionallyRegisteredAs,
    _decode_OptionallyRegisteredAs,
    _encode_OptionallyRegisteredAs,
} from '../DefinitionASN1Module/OptionallyRegisteredAs.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RoleSpecifier */
/**
 * @summary RoleSpecifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleSpecifier ::= SEQUENCE {
 *   role                              Identifier,
 *   compatibleWith                    [0]  TemplateLabel OPTIONAL,
 *   permittedRoleCardinality          [1]  DefinedType OPTIONAL,
 *   requiredRoleCardinality           [2]  DefinedType OPTIONAL,
 *   bindingSupport                    [3] EXPLICIT OptionalIdentifier OPTIONAL,
 *   unbindingSupport                  [4] EXPLICIT OptionalIdentifier OPTIONAL,
 *   permittedRelationshipCardinality  [5]  DefinedType OPTIONAL,
 *   optionalRegisteredAs              OptionallyRegisteredAs
 * }
 * ```
 *
 * @class
 */
export class RoleSpecifier {
    constructor(
        /**
         * @summary `role`.
         * @public
         * @readonly
         */
        readonly role: Identifier,
        /**
         * @summary `compatibleWith`.
         * @public
         * @readonly
         */
        readonly compatibleWith: OPTIONAL<TemplateLabel>,
        /**
         * @summary `permittedRoleCardinality`.
         * @public
         * @readonly
         */
        readonly permittedRoleCardinality: OPTIONAL<DefinedType>,
        /**
         * @summary `requiredRoleCardinality`.
         * @public
         * @readonly
         */
        readonly requiredRoleCardinality: OPTIONAL<DefinedType>,
        /**
         * @summary `bindingSupport`.
         * @public
         * @readonly
         */
        readonly bindingSupport: OPTIONAL<OptionalIdentifier>,
        /**
         * @summary `unbindingSupport`.
         * @public
         * @readonly
         */
        readonly unbindingSupport: OPTIONAL<OptionalIdentifier>,
        /**
         * @summary `permittedRelationshipCardinality`.
         * @public
         * @readonly
         */
        readonly permittedRelationshipCardinality: OPTIONAL<DefinedType>,
        /**
         * @summary `optionalRegisteredAs`.
         * @public
         * @readonly
         */
        readonly optionalRegisteredAs: OptionallyRegisteredAs
    ) {}

    /**
     * @summary Restructures an object into a RoleSpecifier
     * @description
     *
     * This takes an `object` and converts it to a `RoleSpecifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoleSpecifier`.
     * @returns {RoleSpecifier}
     */
    public static _from_object(
        _o: { [_K in keyof RoleSpecifier]: RoleSpecifier[_K] }
    ): RoleSpecifier {
        return new RoleSpecifier(
            _o.role,
            _o.compatibleWith,
            _o.permittedRoleCardinality,
            _o.requiredRoleCardinality,
            _o.bindingSupport,
            _o.unbindingSupport,
            _o.permittedRelationshipCardinality,
            _o.optionalRegisteredAs
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RoleSpecifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RoleSpecifier */
/**
 * @summary The Leading Root Component Types of RoleSpecifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RoleSpecifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'role',
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'compatibleWith',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permittedRoleCardinality',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'requiredRoleCardinality',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bindingSupport',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'unbindingSupport',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permittedRelationshipCardinality',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'optionalRegisteredAs',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RoleSpecifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RoleSpecifier */
/**
 * @summary The Trailing Root Component Types of RoleSpecifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RoleSpecifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RoleSpecifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RoleSpecifier */
/**
 * @summary The Extension Addition Component Types of RoleSpecifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RoleSpecifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RoleSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleSpecifier */
let _cached_decoder_for_RoleSpecifier: $.ASN1Decoder<RoleSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleSpecifier */

/* START_OF_SYMBOL_DEFINITION _decode_RoleSpecifier */
/**
 * @summary Decodes an ASN.1 element into a(n) RoleSpecifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleSpecifier} The decoded data structure.
 */
export function _decode_RoleSpecifier(el: _Element) {
    if (!_cached_decoder_for_RoleSpecifier) {
        _cached_decoder_for_RoleSpecifier = function (
            el: _Element
        ): RoleSpecifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let role!: Identifier;
            let compatibleWith: OPTIONAL<TemplateLabel>;
            let permittedRoleCardinality: OPTIONAL<DefinedType>;
            let requiredRoleCardinality: OPTIONAL<DefinedType>;
            let bindingSupport: OPTIONAL<OptionalIdentifier>;
            let unbindingSupport: OPTIONAL<OptionalIdentifier>;
            let permittedRelationshipCardinality: OPTIONAL<DefinedType>;
            let optionalRegisteredAs!: OptionallyRegisteredAs;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                role: (_el: _Element): void => {
                    role = _decode_Identifier(_el);
                },
                compatibleWith: (_el: _Element): void => {
                    compatibleWith = $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    )(_el);
                },
                permittedRoleCardinality: (_el: _Element): void => {
                    permittedRoleCardinality = $._decode_implicit<DefinedType>(
                        () => _decode_DefinedType
                    )(_el);
                },
                requiredRoleCardinality: (_el: _Element): void => {
                    requiredRoleCardinality = $._decode_implicit<DefinedType>(
                        () => _decode_DefinedType
                    )(_el);
                },
                bindingSupport: (_el: _Element): void => {
                    bindingSupport = $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    )(_el);
                },
                unbindingSupport: (_el: _Element): void => {
                    unbindingSupport = $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    )(_el);
                },
                permittedRelationshipCardinality: (_el: _Element): void => {
                    permittedRelationshipCardinality = $._decode_implicit<DefinedType>(
                        () => _decode_DefinedType
                    )(_el);
                },
                optionalRegisteredAs: (_el: _Element): void => {
                    optionalRegisteredAs = _decode_OptionallyRegisteredAs(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RoleSpecifier,
                _extension_additions_list_spec_for_RoleSpecifier,
                _root_component_type_list_2_spec_for_RoleSpecifier,
                undefined
            );
            return new RoleSpecifier /* SEQUENCE_CONSTRUCTOR_CALL */(
                role,
                compatibleWith,
                permittedRoleCardinality,
                requiredRoleCardinality,
                bindingSupport,
                unbindingSupport,
                permittedRelationshipCardinality,
                optionalRegisteredAs
            );
        };
    }
    return _cached_decoder_for_RoleSpecifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoleSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleSpecifier */
let _cached_encoder_for_RoleSpecifier: $.ASN1Encoder<RoleSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleSpecifier */

/* START_OF_SYMBOL_DEFINITION _encode_RoleSpecifier */
/**
 * @summary Encodes a(n) RoleSpecifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSpecifier, encoded as an ASN.1 Element.
 */
export function _encode_RoleSpecifier(
    value: RoleSpecifier,
    elGetter: $.ASN1Encoder<RoleSpecifier>
) {
    if (!_cached_encoder_for_RoleSpecifier) {
        _cached_encoder_for_RoleSpecifier = function (
            value: RoleSpecifier,
            elGetter: $.ASN1Encoder<RoleSpecifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Identifier(value.role, $.BER),
                        /* IF_ABSENT  */ value.compatibleWith === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_TemplateLabel,
                                  $.BER
                              )(value.compatibleWith, $.BER),
                        /* IF_ABSENT  */ value.permittedRoleCardinality ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DefinedType,
                                  $.BER
                              )(value.permittedRoleCardinality, $.BER),
                        /* IF_ABSENT  */ value.requiredRoleCardinality ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_DefinedType,
                                  $.BER
                              )(value.requiredRoleCardinality, $.BER),
                        /* IF_ABSENT  */ value.bindingSupport === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_OptionalIdentifier,
                                  $.BER
                              )(value.bindingSupport, $.BER),
                        /* IF_ABSENT  */ value.unbindingSupport === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_OptionalIdentifier,
                                  $.BER
                              )(value.unbindingSupport, $.BER),
                        /* IF_ABSENT  */ value.permittedRelationshipCardinality ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_DefinedType,
                                  $.BER
                              )(value.permittedRelationshipCardinality, $.BER),
                        /* REQUIRED   */ _encode_OptionallyRegisteredAs(
                            value.optionalRegisteredAs,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RoleSpecifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoleSpecifier */

/* eslint-enable */
