/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../X790ASN1Module/TimeInterval.ta.mjs';
import {
    ActivityType,
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';

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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'billable',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'type',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of ActivityDuration_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActivityDuration_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ActivityDuration_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActivityDuration_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_ActivityDuration_Item: $.ASN1Decoder<ActivityDuration_Item> | null = null;


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


let _cached_encoder_for_ActivityDuration_Item: $.ASN1Encoder<ActivityDuration_Item> | null = null;


/**
 * @summary Encodes a(n) ActivityDuration_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityDuration_Item, encoded as an ASN.1 Element.
 */
export function _encode_ActivityDuration_Item(
    value: ActivityDuration_Item,
    elGetter: $.ASN1Encoder<ActivityDuration_Item>
) {
    if (!_cached_encoder_for_ActivityDuration_Item) {
        _cached_encoder_for_ActivityDuration_Item = function (
            value: ActivityDuration_Item        ): _Element {
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


/* eslint-enable */
