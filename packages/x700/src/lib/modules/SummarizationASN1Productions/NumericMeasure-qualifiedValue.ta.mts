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
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module';
import {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.mjs';
/**
 * @summary NumericMeasure_qualifiedValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericMeasure-qualifiedValue ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class NumericMeasure_qualifiedValue {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObservedValue,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: OPTIONAL<TimePeriod>,
        /**
         * @summary `suspectFlag`.
         * @public
         * @readonly
         */
        readonly suspectFlag: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a NumericMeasure_qualifiedValue
     * @description
     *
     * This takes an `object` and converts it to a `NumericMeasure_qualifiedValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumericMeasure_qualifiedValue`.
     * @returns {NumericMeasure_qualifiedValue}
     */
    public static _from_object(
        _o: {
            [_K in keyof NumericMeasure_qualifiedValue]: NumericMeasure_qualifiedValue[_K];
        }
    ): NumericMeasure_qualifiedValue {
        return new NumericMeasure_qualifiedValue(
            _o.value,
            _o.timeStamp,
            _o.suspectFlag
        );
    }

    /**
     * @summary Getter that returns the default value for `suspectFlag`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_suspectFlag(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of NumericMeasure_qualifiedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NumericMeasure_qualifiedValue: $.ComponentSpec[] = [
    new $.ComponentSpec('value', false, $.hasAnyTag),
    new $.ComponentSpec('timeStamp', true, $.hasAnyTag),
    new $.ComponentSpec(
        'suspectFlag',
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of NumericMeasure_qualifiedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NumericMeasure_qualifiedValue: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NumericMeasure_qualifiedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NumericMeasure_qualifiedValue: $.ComponentSpec[] = [];

let _cached_decoder_for_NumericMeasure_qualifiedValue: $.ASN1Decoder<NumericMeasure_qualifiedValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumericMeasure_qualifiedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericMeasure_qualifiedValue} The decoded data structure.
 */
export function _decode_NumericMeasure_qualifiedValue(el: _Element): NumericMeasure_qualifiedValue {
    if (!_cached_decoder_for_NumericMeasure_qualifiedValue) {
        _cached_decoder_for_NumericMeasure_qualifiedValue = function (
            el: _Element
        ): NumericMeasure_qualifiedValue {
            let value!: ObservedValue;
            let timeStamp: OPTIONAL<TimePeriod>;
            let suspectFlag: OPTIONAL<BOOLEAN> =
                NumericMeasure_qualifiedValue._default_value_for_suspectFlag;
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _decode_ObservedValue(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = _decode_TimePeriod(_el);
                },
                suspectFlag: (_el: _Element): void => {
                    suspectFlag = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumericMeasure_qualifiedValue,
                _extension_additions_list_spec_for_NumericMeasure_qualifiedValue,
                _root_component_type_list_2_spec_for_NumericMeasure_qualifiedValue,
                undefined
            );
            return new NumericMeasure_qualifiedValue (
                value,
                timeStamp,
                suspectFlag
            );
        };
    }
    return _cached_decoder_for_NumericMeasure_qualifiedValue(el);
}

let _cached_encoder_for_NumericMeasure_qualifiedValue: $.ASN1Encoder<NumericMeasure_qualifiedValue> | null = null;

/**
 * @summary Encodes a(n) NumericMeasure_qualifiedValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericMeasure_qualifiedValue, encoded as an ASN.1 Element.
 */
export function _encode_NumericMeasure_qualifiedValue(
    value: NumericMeasure_qualifiedValue,
    elGetter: $.ASN1Encoder<NumericMeasure_qualifiedValue>
): _Element {
    if (!_cached_encoder_for_NumericMeasure_qualifiedValue) {
        _cached_encoder_for_NumericMeasure_qualifiedValue = function (
            value: NumericMeasure_qualifiedValue        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObservedValue(
                            value.value,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.timeStamp === undefined
                            ? undefined
                            : _encode_TimePeriod(value.timeStamp, $.BER),
                        /* IF_DEFAULT */ value.suspectFlag === undefined ||
                        $.deepEq(
                            value.suspectFlag,
                            NumericMeasure_qualifiedValue._default_value_for_suspectFlag
                        )
                            ? undefined
                            : $._encodeBoolean(value.suspectFlag, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NumericMeasure_qualifiedValue(value, elGetter);
}


/* eslint-enable */
