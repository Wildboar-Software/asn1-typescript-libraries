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
    Range,
    _decode_Range,
    _encode_Range,
} from '../MSAbstractService/Range.ta';
export {
    Range,
    _decode_Range,
    _encode_Range,
} from '../MSAbstractService/Range.ta';
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta';
export {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta';
import {
    OverrideRestrictions,
    OverrideRestrictions_override_content_types_restriction /* IMPORTED_LONG_NAMED_BIT */,
    override_content_types_restriction /* IMPORTED_SHORT_NAMED_BIT */,
    OverrideRestrictions_override_EITs_restriction /* IMPORTED_LONG_NAMED_BIT */,
    override_EITs_restriction /* IMPORTED_SHORT_NAMED_BIT */,
    OverrideRestrictions_override_attribute_length_restriction /* IMPORTED_LONG_NAMED_BIT */,
    override_attribute_length_restriction /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_OverrideRestrictions,
    _encode_OverrideRestrictions,
} from '../MSAbstractService/OverrideRestrictions.ta';
export {
    OverrideRestrictions,
    OverrideRestrictions_override_content_types_restriction /* IMPORTED_LONG_NAMED_BIT */,
    override_content_types_restriction /* IMPORTED_SHORT_NAMED_BIT */,
    OverrideRestrictions_override_EITs_restriction /* IMPORTED_LONG_NAMED_BIT */,
    override_EITs_restriction /* IMPORTED_SHORT_NAMED_BIT */,
    OverrideRestrictions_override_attribute_length_restriction /* IMPORTED_LONG_NAMED_BIT */,
    override_attribute_length_restriction /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_OverrideRestrictions,
    _encode_OverrideRestrictions,
} from '../MSAbstractService/OverrideRestrictions.ta';

/* START_OF_SYMBOL_DEFINITION Selector */
/**
 * @summary Selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Selector ::= SET {
 *   child-entries  [0]  BOOLEAN DEFAULT FALSE,
 *   range          [1]  Range OPTIONAL -- default is unbounded --,
 *   filter
 *     [2]  Filter
 *       OPTIONAL -- default is all entries within the specified range --,
 *   limit          [3]  INTEGER(1..ub-messages) OPTIONAL,
 *   override       [4]  OverrideRestrictions OPTIONAL -- by default, --
 *   -- any fetch-restrictions in force apply
 * }
 * ```
 *
 * @class
 */
export class Selector {
    constructor(
        /**
         * @summary `child_entries`.
         * @public
         * @readonly
         */
        readonly child_entries: OPTIONAL<BOOLEAN>,
        /**
         * @summary `range`.
         * @public
         * @readonly
         */
        readonly range: OPTIONAL<Range>,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `limit`.
         * @public
         * @readonly
         */
        readonly limit: OPTIONAL<INTEGER>,
        /**
         * @summary `override`.
         * @public
         * @readonly
         */
        readonly override: OPTIONAL<OverrideRestrictions>
    ) {}

    /**
     * @summary Restructures an object into a Selector
     * @description
     *
     * This takes an `object` and converts it to a `Selector`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Selector`.
     * @returns {Selector}
     */
    public static _from_object(
        _o: { [_K in keyof Selector]: Selector[_K] }
    ): Selector {
        return new Selector(
            _o.child_entries,
            _o.range,
            _o.filter,
            _o.limit,
            _o.override
        );
    }

    /**
     * @summary Getter that returns the default value for `child_entries`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_child_entries() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION Selector */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Selector */
/**
 * @summary The Leading Root Component Types of Selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Selector: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'child-entries',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'range',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'limit',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'override',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Selector */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Selector */
/**
 * @summary The Trailing Root Component Types of Selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Selector: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Selector */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Selector */
/**
 * @summary The Extension Addition Component Types of Selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Selector: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Selector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Selector */
let _cached_decoder_for_Selector: $.ASN1Decoder<Selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Selector */

/* START_OF_SYMBOL_DEFINITION _decode_Selector */
/**
 * @summary Decodes an ASN.1 element into a(n) Selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Selector} The decoded data structure.
 */
export function _decode_Selector(el: _Element) {
    if (!_cached_decoder_for_Selector) {
        _cached_decoder_for_Selector = function (el: _Element): Selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let child_entries: OPTIONAL<BOOLEAN> =
                Selector._default_value_for_child_entries;
            let range: OPTIONAL<Range>;
            let filter: OPTIONAL<Filter>;
            let limit: OPTIONAL<INTEGER>;
            let override: OPTIONAL<OverrideRestrictions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'child-entries': (_el: _Element): void => {
                    child_entries = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                range: (_el: _Element): void => {
                    range = $._decode_explicit<Range>(() => _decode_Range)(_el);
                },
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                limit: (_el: _Element): void => {
                    limit = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                override: (_el: _Element): void => {
                    override = $._decode_explicit<OverrideRestrictions>(
                        () => _decode_OverrideRestrictions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Selector,
                _extension_additions_list_spec_for_Selector,
                _root_component_type_list_2_spec_for_Selector,
                undefined
            );
            return new Selector /* SET_CONSTRUCTOR_CALL */(
                child_entries,
                range,
                filter,
                limit,
                override
            );
        };
    }
    return _cached_decoder_for_Selector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Selector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Selector */
let _cached_encoder_for_Selector: $.ASN1Encoder<Selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Selector */

/* START_OF_SYMBOL_DEFINITION _encode_Selector */
/**
 * @summary Encodes a(n) Selector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Selector, encoded as an ASN.1 Element.
 */
export function _encode_Selector(
    value: Selector,
    elGetter: $.ASN1Encoder<Selector>
) {
    if (!_cached_encoder_for_Selector) {
        _cached_encoder_for_Selector = function (
            value: Selector,
            elGetter: $.ASN1Encoder<Selector>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.child_entries === undefined ||
                        $.deepEq(
                            value.child_entries,
                            Selector._default_value_for_child_entries
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.child_entries, $.BER),
                        /* IF_ABSENT  */ value.range === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Range,
                                  $.BER
                              )(value.range, $.BER),
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Filter,
                                  $.BER
                              )(value.filter, $.BER),
                        /* IF_ABSENT  */ value.limit === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.limit, $.BER),
                        /* IF_ABSENT  */ value.override === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_OverrideRestrictions,
                                  $.BER
                              )(value.override, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Selector(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Selector */

/* eslint-enable */
