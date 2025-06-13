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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../X790ASN1Module/TimeInterval.ta.mjs';
export {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../X790ASN1Module/TimeInterval.ta.mjs';
import {
    ActivityType,
    ActivityType_after_hours_repair /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_repair /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_standby /* IMPORTED_LONG_NAMED_BIT */,
    standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_after_hours_standby /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_test /* IMPORTED_LONG_NAMED_BIT */,
    test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_manager_initiated_test /* IMPORTED_LONG_NAMED_BIT */,
    manager_initiated_test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_dispatch /* IMPORTED_LONG_NAMED_BIT */,
    dispatch /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_no_access /* IMPORTED_LONG_NAMED_BIT */,
    no_access /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_delayed_maintenance /* IMPORTED_LONG_NAMED_BIT */,
    delayed_maintenance /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_release /* IMPORTED_LONG_NAMED_BIT */,
    release /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';
export {
    ActivityType,
    ActivityType_after_hours_repair /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_repair /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_standby /* IMPORTED_LONG_NAMED_BIT */,
    standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_after_hours_standby /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_test /* IMPORTED_LONG_NAMED_BIT */,
    test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_manager_initiated_test /* IMPORTED_LONG_NAMED_BIT */,
    manager_initiated_test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_dispatch /* IMPORTED_LONG_NAMED_BIT */,
    dispatch /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_no_access /* IMPORTED_LONG_NAMED_BIT */,
    no_access /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_delayed_maintenance /* IMPORTED_LONG_NAMED_BIT */,
    delayed_maintenance /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_release /* IMPORTED_LONG_NAMED_BIT */,
    release /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ActivityDuration_Item */
/**
 * @summary ActivityDuration_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityDuration-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ActivityDuration_Item {
    constructor(
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: TimeInterval,
        /**
         * @summary `billable`.
         * @public
         * @readonly
         */
        readonly billable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<ActivityType>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ActivityDuration_Item
     * @description
     *
     * This takes an `object` and converts it to a `ActivityDuration_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivityDuration_Item`.
     * @returns {ActivityDuration_Item}
     */
    public static _from_object(
        _o: { [_K in keyof ActivityDuration_Item]: ActivityDuration_Item[_K] }
    ): ActivityDuration_Item {
        return new ActivityDuration_Item(
            _o.duration,
            _o.billable,
            _o.type_,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `billable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_billable(): boolean {
        return true;
    }
}
/* END_OF_SYMBOL_DEFINITION ActivityDuration_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActivityDuration_Item */
/**
 * @summary The Leading Root Component Types of ActivityDuration_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActivityDuration_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'duration',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'billable',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'type',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActivityDuration_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActivityDuration_Item */
/**
 * @summary The Trailing Root Component Types of ActivityDuration_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActivityDuration_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActivityDuration_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActivityDuration_Item */
/**
 * @summary The Extension Addition Component Types of ActivityDuration_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActivityDuration_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActivityDuration_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityDuration_Item */
let _cached_decoder_for_ActivityDuration_Item: $.ASN1Decoder<ActivityDuration_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityDuration_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityDuration_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivityDuration_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityDuration_Item} The decoded data structure.
 */
export function _decode_ActivityDuration_Item(el: _Element) {
    if (!_cached_decoder_for_ActivityDuration_Item) {
        _cached_decoder_for_ActivityDuration_Item = function (
            el: _Element
        ): ActivityDuration_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let duration!: TimeInterval;
            let billable: OPTIONAL<BOOLEAN> =
                ActivityDuration_Item._default_value_for_billable;
            let type_: OPTIONAL<ActivityType>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                duration: (_el: _Element): void => {
                    duration = $._decode_implicit<TimeInterval>(
                        () => _decode_TimeInterval
                    )(_el);
                },
                billable: (_el: _Element): void => {
                    billable = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_implicit<ActivityType>(
                        () => _decode_ActivityType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ActivityDuration_Item,
                _extension_additions_list_spec_for_ActivityDuration_Item,
                _root_component_type_list_2_spec_for_ActivityDuration_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ActivityDuration_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                duration,
                billable,
                type_,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ActivityDuration_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivityDuration_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityDuration_Item */
let _cached_encoder_for_ActivityDuration_Item: $.ASN1Encoder<ActivityDuration_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityDuration_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityDuration_Item */
/**
 * @summary Encodes a(n) ActivityDuration_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityDuration_Item, encoded as an ASN.1 Element.
 */
export function _encode_ActivityDuration_Item(
    value: ActivityDuration_Item,
    elGetter: $.ASN1Encoder<ActivityDuration_Item>
) {
    if (!_cached_encoder_for_ActivityDuration_Item) {
        _cached_encoder_for_ActivityDuration_Item = function (
            value: ActivityDuration_Item,
            elGetter: $.ASN1Encoder<ActivityDuration_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_TimeInterval,
                                $.BER
                            )(value.duration, $.BER),
                            /* IF_DEFAULT */ value.billable === undefined ||
                            $.deepEq(
                                value.billable,
                                ActivityDuration_Item._default_value_for_billable
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.billable, $.BER),
                            /* IF_ABSENT  */ value.type_ === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_ActivityType,
                                      $.BER
                                  )(value.type_, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ActivityDuration_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivityDuration_Item */

/* eslint-enable */
