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
    ValueSpecifier,
    _decode_ValueSpecifier,
    _encode_ValueSpecifier,
} from '../DefinitionASN1Module/ValueSpecifier.ta';
export {
    ValueSpecifier,
    _decode_ValueSpecifier,
    _encode_ValueSpecifier,
} from '../DefinitionASN1Module/ValueSpecifier.ta';
import {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta';
export {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta';
import {
    PropertyList_getReplace,
    _enum_for_PropertyList_getReplace,
    PropertyList_getReplace_gET /* IMPORTED_LONG_ENUMERATION_ITEM */,
    gET /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_getReplace_rEPLACE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    rEPLACE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_getReplace_gET_REPLACE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    gET_REPLACE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PropertyList_getReplace,
    _encode_PropertyList_getReplace,
} from '../DefinitionASN1Module/PropertyList-getReplace.ta';
export {
    PropertyList_getReplace,
    _enum_for_PropertyList_getReplace,
    PropertyList_getReplace_gET /* IMPORTED_LONG_ENUMERATION_ITEM */,
    gET /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_getReplace_rEPLACE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    rEPLACE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_getReplace_gET_REPLACE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    gET_REPLACE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PropertyList_getReplace,
    _encode_PropertyList_getReplace,
} from '../DefinitionASN1Module/PropertyList-getReplace.ta';
import {
    PropertyList_addRemove,
    _enum_for_PropertyList_addRemove,
    PropertyList_addRemove_aDD /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aDD /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_addRemove_rEMOVE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    rEMOVE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_addRemove_aDD_REMOVE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aDD_REMOVE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PropertyList_addRemove,
    _encode_PropertyList_addRemove,
} from '../DefinitionASN1Module/PropertyList-addRemove.ta';
export {
    PropertyList_addRemove,
    _enum_for_PropertyList_addRemove,
    PropertyList_addRemove_aDD /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aDD /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_addRemove_rEMOVE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    rEMOVE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PropertyList_addRemove_aDD_REMOVE /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aDD_REMOVE /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PropertyList_addRemove,
    _encode_PropertyList_addRemove,
} from '../DefinitionASN1Module/PropertyList-addRemove.ta';
import {
    AdditionalProperties,
    _decode_AdditionalProperties,
    _encode_AdditionalProperties,
} from '../DefinitionASN1Module/AdditionalProperties.ta';
export {
    AdditionalProperties,
    _decode_AdditionalProperties,
    _encode_AdditionalProperties,
} from '../DefinitionASN1Module/AdditionalProperties.ta';

/* START_OF_SYMBOL_DEFINITION PropertyList */
/**
 * @summary PropertyList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList ::= SEQUENCE {
 *   replaceWithDefault    [0]  BOOLEAN DEFAULT FALSE,
 *   defaultValue          [1] EXPLICIT ValueSpecifier OPTIONAL,
 *   initialValue          [2] EXPLICIT ValueSpecifier OPTIONAL,
 *   permittedValues       [3]  DefinedType OPTIONAL,
 *   requiredValues        [4]  DefinedType OPTIONAL,
 *   getReplace
 *     [5]  ENUMERATED {gET(0), rEPLACE(1), gET-REPLACE(2)} OPTIONAL,
 *   addRemove
 *     [6]  ENUMERATED {aDD(0), rEMOVE(1), aDD-REMOVE(2)} OPTIONAL,
 *   setByCreate           [7]  BOOLEAN DEFAULT FALSE,
 *   additionalProperties  [8]  AdditionalProperties OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PropertyList {
    constructor(
        /**
         * @summary `replaceWithDefault`.
         * @public
         * @readonly
         */
        readonly replaceWithDefault: OPTIONAL<BOOLEAN>,
        /**
         * @summary `defaultValue`.
         * @public
         * @readonly
         */
        readonly defaultValue: OPTIONAL<ValueSpecifier>,
        /**
         * @summary `initialValue`.
         * @public
         * @readonly
         */
        readonly initialValue: OPTIONAL<ValueSpecifier>,
        /**
         * @summary `permittedValues`.
         * @public
         * @readonly
         */
        readonly permittedValues: OPTIONAL<DefinedType>,
        /**
         * @summary `requiredValues`.
         * @public
         * @readonly
         */
        readonly requiredValues: OPTIONAL<DefinedType>,
        /**
         * @summary `getReplace`.
         * @public
         * @readonly
         */
        readonly getReplace: OPTIONAL<PropertyList_getReplace>,
        /**
         * @summary `addRemove`.
         * @public
         * @readonly
         */
        readonly addRemove: OPTIONAL<PropertyList_addRemove>,
        /**
         * @summary `setByCreate`.
         * @public
         * @readonly
         */
        readonly setByCreate: OPTIONAL<BOOLEAN>,
        /**
         * @summary `additionalProperties`.
         * @public
         * @readonly
         */
        readonly additionalProperties: OPTIONAL<AdditionalProperties>
    ) {}

    /**
     * @summary Restructures an object into a PropertyList
     * @description
     *
     * This takes an `object` and converts it to a `PropertyList`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PropertyList`.
     * @returns {PropertyList}
     */
    public static _from_object(
        _o: { [_K in keyof PropertyList]: PropertyList[_K] }
    ): PropertyList {
        return new PropertyList(
            _o.replaceWithDefault,
            _o.defaultValue,
            _o.initialValue,
            _o.permittedValues,
            _o.requiredValues,
            _o.getReplace,
            _o.addRemove,
            _o.setByCreate,
            _o.additionalProperties
        );
    }

    /**
     * @summary Getter that returns the default value for `replaceWithDefault`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_replaceWithDefault() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `setByCreate`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_setByCreate() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `getReplace`
     * @public
     * @static
     */

    public static _enum_for_getReplace = _enum_for_PropertyList_getReplace;
    /**
     * @summary The enum used as the type of the component `addRemove`
     * @public
     * @static
     */

    public static _enum_for_addRemove = _enum_for_PropertyList_addRemove;
}
/* END_OF_SYMBOL_DEFINITION PropertyList */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PropertyList */
/**
 * @summary The Leading Root Component Types of PropertyList
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PropertyList: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'replaceWithDefault',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'defaultValue',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'initialValue',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permittedValues',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'requiredValues',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'getReplace',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'addRemove',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'setByCreate',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalProperties',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PropertyList */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PropertyList */
/**
 * @summary The Trailing Root Component Types of PropertyList
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PropertyList: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PropertyList */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PropertyList */
/**
 * @summary The Extension Addition Component Types of PropertyList
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PropertyList: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PropertyList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PropertyList */
let _cached_decoder_for_PropertyList: $.ASN1Decoder<PropertyList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PropertyList */

/* START_OF_SYMBOL_DEFINITION _decode_PropertyList */
/**
 * @summary Decodes an ASN.1 element into a(n) PropertyList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PropertyList} The decoded data structure.
 */
export function _decode_PropertyList(el: _Element) {
    if (!_cached_decoder_for_PropertyList) {
        _cached_decoder_for_PropertyList = function (
            el: _Element
        ): PropertyList {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let replaceWithDefault: OPTIONAL<BOOLEAN> =
                PropertyList._default_value_for_replaceWithDefault;
            let defaultValue: OPTIONAL<ValueSpecifier>;
            let initialValue: OPTIONAL<ValueSpecifier>;
            let permittedValues: OPTIONAL<DefinedType>;
            let requiredValues: OPTIONAL<DefinedType>;
            let getReplace: OPTIONAL<PropertyList_getReplace>;
            let addRemove: OPTIONAL<PropertyList_addRemove>;
            let setByCreate: OPTIONAL<BOOLEAN> =
                PropertyList._default_value_for_setByCreate;
            let additionalProperties: OPTIONAL<AdditionalProperties>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                replaceWithDefault: (_el: _Element): void => {
                    replaceWithDefault = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                defaultValue: (_el: _Element): void => {
                    defaultValue = $._decode_explicit<ValueSpecifier>(
                        () => _decode_ValueSpecifier
                    )(_el);
                },
                initialValue: (_el: _Element): void => {
                    initialValue = $._decode_explicit<ValueSpecifier>(
                        () => _decode_ValueSpecifier
                    )(_el);
                },
                permittedValues: (_el: _Element): void => {
                    permittedValues = $._decode_implicit<DefinedType>(
                        () => _decode_DefinedType
                    )(_el);
                },
                requiredValues: (_el: _Element): void => {
                    requiredValues = $._decode_implicit<DefinedType>(
                        () => _decode_DefinedType
                    )(_el);
                },
                getReplace: (_el: _Element): void => {
                    getReplace = $._decode_implicit<PropertyList_getReplace>(
                        () => _decode_PropertyList_getReplace
                    )(_el);
                },
                addRemove: (_el: _Element): void => {
                    addRemove = $._decode_implicit<PropertyList_addRemove>(
                        () => _decode_PropertyList_addRemove
                    )(_el);
                },
                setByCreate: (_el: _Element): void => {
                    setByCreate = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                additionalProperties: (_el: _Element): void => {
                    additionalProperties = $._decode_implicit<AdditionalProperties>(
                        () => _decode_AdditionalProperties
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PropertyList,
                _extension_additions_list_spec_for_PropertyList,
                _root_component_type_list_2_spec_for_PropertyList,
                undefined
            );
            return new PropertyList /* SEQUENCE_CONSTRUCTOR_CALL */(
                replaceWithDefault,
                defaultValue,
                initialValue,
                permittedValues,
                requiredValues,
                getReplace,
                addRemove,
                setByCreate,
                additionalProperties
            );
        };
    }
    return _cached_decoder_for_PropertyList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PropertyList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PropertyList */
let _cached_encoder_for_PropertyList: $.ASN1Encoder<PropertyList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PropertyList */

/* START_OF_SYMBOL_DEFINITION _encode_PropertyList */
/**
 * @summary Encodes a(n) PropertyList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PropertyList, encoded as an ASN.1 Element.
 */
export function _encode_PropertyList(
    value: PropertyList,
    elGetter: $.ASN1Encoder<PropertyList>
) {
    if (!_cached_encoder_for_PropertyList) {
        _cached_encoder_for_PropertyList = function (
            value: PropertyList,
            elGetter: $.ASN1Encoder<PropertyList>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.replaceWithDefault ===
                            undefined ||
                        $.deepEq(
                            value.replaceWithDefault,
                            PropertyList._default_value_for_replaceWithDefault
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.replaceWithDefault, $.BER),
                        /* IF_ABSENT  */ value.defaultValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ValueSpecifier,
                                  $.BER
                              )(value.defaultValue, $.BER),
                        /* IF_ABSENT  */ value.initialValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ValueSpecifier,
                                  $.BER
                              )(value.initialValue, $.BER),
                        /* IF_ABSENT  */ value.permittedValues === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_DefinedType,
                                  $.BER
                              )(value.permittedValues, $.BER),
                        /* IF_ABSENT  */ value.requiredValues === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_DefinedType,
                                  $.BER
                              )(value.requiredValues, $.BER),
                        /* IF_ABSENT  */ value.getReplace === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_PropertyList_getReplace,
                                  $.BER
                              )(value.getReplace, $.BER),
                        /* IF_ABSENT  */ value.addRemove === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_PropertyList_addRemove,
                                  $.BER
                              )(value.addRemove, $.BER),
                        /* IF_DEFAULT */ value.setByCreate === undefined ||
                        $.deepEq(
                            value.setByCreate,
                            PropertyList._default_value_for_setByCreate
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.setByCreate, $.BER),
                        /* IF_ABSENT  */ value.additionalProperties ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_AdditionalProperties,
                                  $.BER
                              )(value.additionalProperties, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PropertyList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PropertyList */

/* eslint-enable */
