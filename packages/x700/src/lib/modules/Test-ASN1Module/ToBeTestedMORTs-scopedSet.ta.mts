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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import { Scope, _decode_Scope, _encode_Scope } from '@wildboar/cmip/src/lib/modules/CMIP-1/Scope.ta.mjs';
import { Scope_namedNumbers_baseObject } from '@wildboar/cmip/src/lib/modules/CMIP-1/Scope-namedNumbers.ta.mjs';
import {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ToBeTestedMORTs_scopedSet */
/**
 * @summary ToBeTestedMORTs_scopedSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeTestedMORTs-scopedSet ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ToBeTestedMORTs_scopedSet {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: ObjectInstance,
        /**
         * @summary `mORTsScope0`.
         * @public
         * @readonly
         */
        readonly mORTsScope0: OPTIONAL<Scope>,
        /**
         * @summary `mORTsFilter`.
         * @public
         * @readonly
         */
        readonly mORTsFilter: OPTIONAL<CMISFilter>
    ) {}

    /**
     * @summary Restructures an object into a ToBeTestedMORTs_scopedSet
     * @description
     *
     * This takes an `object` and converts it to a `ToBeTestedMORTs_scopedSet`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ToBeTestedMORTs_scopedSet`.
     * @returns {ToBeTestedMORTs_scopedSet}
     */
    public static _from_object(
        _o: {
            [_K in keyof ToBeTestedMORTs_scopedSet]: ToBeTestedMORTs_scopedSet[_K];
        }
    ): ToBeTestedMORTs_scopedSet {
        return new ToBeTestedMORTs_scopedSet(
            _o.base,
            _o.mORTsScope0,
            _o.mORTsFilter
        );
    }

    /**
     * @summary Getter that returns the default value for `mORTsScope0`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mORTsScope0() {
        return { namedNumbers: Scope_namedNumbers_baseObject };
    }
    /**
     * @summary Getter that returns the default value for `mORTsFilter`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mORTsFilter(): CMISFilter {
        return { and: [] };
    }
}
/* END_OF_SYMBOL_DEFINITION ToBeTestedMORTs_scopedSet */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ToBeTestedMORTs_scopedSet */
/**
 * @summary The Leading Root Component Types of ToBeTestedMORTs_scopedSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ToBeTestedMORTs_scopedSet: $.ComponentSpec[] = [
    new $.ComponentSpec('base', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('mORTsScope0', true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'mORTsFilter',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ToBeTestedMORTs_scopedSet */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ToBeTestedMORTs_scopedSet */
/**
 * @summary The Trailing Root Component Types of ToBeTestedMORTs_scopedSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ToBeTestedMORTs_scopedSet: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ToBeTestedMORTs_scopedSet */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ToBeTestedMORTs_scopedSet */
/**
 * @summary The Extension Addition Component Types of ToBeTestedMORTs_scopedSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ToBeTestedMORTs_scopedSet: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ToBeTestedMORTs_scopedSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeTestedMORTs_scopedSet */
let _cached_decoder_for_ToBeTestedMORTs_scopedSet: $.ASN1Decoder<ToBeTestedMORTs_scopedSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeTestedMORTs_scopedSet */

/* START_OF_SYMBOL_DEFINITION _decode_ToBeTestedMORTs_scopedSet */
/**
 * @summary Decodes an ASN.1 element into a(n) ToBeTestedMORTs_scopedSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeTestedMORTs_scopedSet} The decoded data structure.
 */
export function _decode_ToBeTestedMORTs_scopedSet(el: _Element) {
    if (!_cached_decoder_for_ToBeTestedMORTs_scopedSet) {
        _cached_decoder_for_ToBeTestedMORTs_scopedSet = function (
            el: _Element
        ): ToBeTestedMORTs_scopedSet {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base!: ObjectInstance;
            let mORTsScope0: OPTIONAL<Scope> =
                ToBeTestedMORTs_scopedSet._default_value_for_mORTsScope0;
            let mORTsFilter: OPTIONAL<CMISFilter> =
                ToBeTestedMORTs_scopedSet._default_value_for_mORTsFilter;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = _decode_ObjectInstance(_el);
                },
                mORTsScope0: (_el: _Element): void => {
                    mORTsScope0 = _decode_Scope(_el);
                },
                mORTsFilter: (_el: _Element): void => {
                    mORTsFilter = $._decode_explicit<CMISFilter>(
                        () => _decode_CMISFilter
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ToBeTestedMORTs_scopedSet,
                _extension_additions_list_spec_for_ToBeTestedMORTs_scopedSet,
                _root_component_type_list_2_spec_for_ToBeTestedMORTs_scopedSet,
                undefined
            );
            return new ToBeTestedMORTs_scopedSet /* SEQUENCE_CONSTRUCTOR_CALL */(
                base,
                mORTsScope0,
                mORTsFilter
            );
        };
    }
    return _cached_decoder_for_ToBeTestedMORTs_scopedSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ToBeTestedMORTs_scopedSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeTestedMORTs_scopedSet */
let _cached_encoder_for_ToBeTestedMORTs_scopedSet: $.ASN1Encoder<ToBeTestedMORTs_scopedSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeTestedMORTs_scopedSet */

/* START_OF_SYMBOL_DEFINITION _encode_ToBeTestedMORTs_scopedSet */
/**
 * @summary Encodes a(n) ToBeTestedMORTs_scopedSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeTestedMORTs_scopedSet, encoded as an ASN.1 Element.
 */
export function _encode_ToBeTestedMORTs_scopedSet(
    value: ToBeTestedMORTs_scopedSet,
    elGetter: $.ASN1Encoder<ToBeTestedMORTs_scopedSet>
) {
    if (!_cached_encoder_for_ToBeTestedMORTs_scopedSet) {
        _cached_encoder_for_ToBeTestedMORTs_scopedSet = function (
            value: ToBeTestedMORTs_scopedSet        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.base,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.mORTsScope0 === undefined ||
                        $.deepEq(
                            value.mORTsScope0,
                            ToBeTestedMORTs_scopedSet._default_value_for_mORTsScope0
                        )
                            ? undefined
                            : _encode_Scope(value.mORTsScope0, $.BER),
                        /* IF_DEFAULT */ value.mORTsFilter === undefined ||
                        $.deepEq(
                            value.mORTsFilter,
                            ToBeTestedMORTs_scopedSet._default_value_for_mORTsFilter
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_CMISFilter,
                                  $.BER
                              )(value.mORTsFilter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ToBeTestedMORTs_scopedSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ToBeTestedMORTs_scopedSet */

/* eslint-enable */
