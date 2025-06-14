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
    EntryClass,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta.mjs';
import {
    EntryModification,
    _decode_EntryModification,
    _encode_EntryModification,
} from '../MSAbstractService/EntryModification.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AutoModifyRegistrationParameter */
/**
 * @summary AutoModifyRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoModifyRegistrationParameter ::= SET {
 *   entry-class    [0]  EntryClass DEFAULT delivery,
 *   filter         [1]  Filter OPTIONAL,
 *   modifications  [2]  SEQUENCE SIZE (1..ub-modifications) OF EntryModification
 * }
 * ```
 *
 * @class
 */
export class AutoModifyRegistrationParameter {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: OPTIONAL<EntryClass>,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `modifications`.
         * @public
         * @readonly
         */
        readonly modifications: EntryModification[]
    ) {}

    /**
     * @summary Restructures an object into a AutoModifyRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `AutoModifyRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoModifyRegistrationParameter`.
     * @returns {AutoModifyRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof AutoModifyRegistrationParameter]: AutoModifyRegistrationParameter[_K];
        }
    ): AutoModifyRegistrationParameter {
        return new AutoModifyRegistrationParameter(
            _o.entry_class,
            _o.filter,
            _o.modifications
        );
    }

    /**
     * @summary Getter that returns the default value for `entry_class`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entry_class() {
        return delivery;
    }
}
/* END_OF_SYMBOL_DEFINITION AutoModifyRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoModifyRegistrationParameter */
/**
 * @summary The Leading Root Component Types of AutoModifyRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoModifyRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'modifications',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoModifyRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoModifyRegistrationParameter */
/**
 * @summary The Trailing Root Component Types of AutoModifyRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoModifyRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoModifyRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoModifyRegistrationParameter */
/**
 * @summary The Extension Addition Component Types of AutoModifyRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoModifyRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoModifyRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoModifyRegistrationParameter */
let _cached_decoder_for_AutoModifyRegistrationParameter: $.ASN1Decoder<AutoModifyRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoModifyRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _decode_AutoModifyRegistrationParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoModifyRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoModifyRegistrationParameter} The decoded data structure.
 */
export function _decode_AutoModifyRegistrationParameter(el: _Element) {
    if (!_cached_decoder_for_AutoModifyRegistrationParameter) {
        _cached_decoder_for_AutoModifyRegistrationParameter = function (
            el: _Element
        ): AutoModifyRegistrationParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class: OPTIONAL<EntryClass> =
                AutoModifyRegistrationParameter._default_value_for_entry_class;
            let filter: OPTIONAL<Filter>;
            let modifications!: EntryModification[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                modifications: (_el: _Element): void => {
                    modifications = $._decode_explicit<EntryModification[]>(
                        () =>
                            $._decodeSequenceOf<EntryModification>(
                                () => _decode_EntryModification
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoModifyRegistrationParameter,
                _extension_additions_list_spec_for_AutoModifyRegistrationParameter,
                _root_component_type_list_2_spec_for_AutoModifyRegistrationParameter,
                undefined
            );
            return new AutoModifyRegistrationParameter /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                filter,
                modifications
            );
        };
    }
    return _cached_decoder_for_AutoModifyRegistrationParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoModifyRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoModifyRegistrationParameter */
let _cached_encoder_for_AutoModifyRegistrationParameter: $.ASN1Encoder<AutoModifyRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoModifyRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _encode_AutoModifyRegistrationParameter */
/**
 * @summary Encodes a(n) AutoModifyRegistrationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoModifyRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_AutoModifyRegistrationParameter(
    value: AutoModifyRegistrationParameter,
    elGetter: $.ASN1Encoder<AutoModifyRegistrationParameter>
) {
    if (!_cached_encoder_for_AutoModifyRegistrationParameter) {
        _cached_encoder_for_AutoModifyRegistrationParameter = function (
            value: AutoModifyRegistrationParameter        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.entry_class === undefined ||
                        $.deepEq(
                            value.entry_class,
                            AutoModifyRegistrationParameter._default_value_for_entry_class
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryClass,
                                  $.BER
                              )(value.entry_class, $.BER),
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Filter,
                                  $.BER
                              )(value.filter, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () =>
                                $._encodeSequenceOf<EntryModification>(
                                    () => _encode_EntryModification,
                                    $.BER
                                ),
                            $.BER
                        )(value.modifications, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoModifyRegistrationParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoModifyRegistrationParameter */

/* eslint-enable */
