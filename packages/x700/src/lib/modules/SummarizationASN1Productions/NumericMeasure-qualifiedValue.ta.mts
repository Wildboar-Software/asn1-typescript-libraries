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
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ObservedValue.ta.mjs';
export {
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ObservedValue.ta.mjs';
import {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.mjs';
export {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NumericMeasure_qualifiedValue */
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
 * @class
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
    public static get _default_value_for_suspectFlag() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION NumericMeasure_qualifiedValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NumericMeasure_qualifiedValue */
/**
 * @summary The Leading Root Component Types of NumericMeasure_qualifiedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NumericMeasure_qualifiedValue: $.ComponentSpec[] = [
    new $.ComponentSpec('value', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('timeStamp', true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'suspectFlag',
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NumericMeasure_qualifiedValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NumericMeasure_qualifiedValue */
/**
 * @summary The Trailing Root Component Types of NumericMeasure_qualifiedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NumericMeasure_qualifiedValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NumericMeasure_qualifiedValue */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NumericMeasure_qualifiedValue */
/**
 * @summary The Extension Addition Component Types of NumericMeasure_qualifiedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NumericMeasure_qualifiedValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NumericMeasure_qualifiedValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericMeasure_qualifiedValue */
let _cached_decoder_for_NumericMeasure_qualifiedValue: $.ASN1Decoder<NumericMeasure_qualifiedValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericMeasure_qualifiedValue */

/* START_OF_SYMBOL_DEFINITION _decode_NumericMeasure_qualifiedValue */
/**
 * @summary Decodes an ASN.1 element into a(n) NumericMeasure_qualifiedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericMeasure_qualifiedValue} The decoded data structure.
 */
export function _decode_NumericMeasure_qualifiedValue(el: _Element) {
    if (!_cached_decoder_for_NumericMeasure_qualifiedValue) {
        _cached_decoder_for_NumericMeasure_qualifiedValue = function (
            el: _Element
        ): NumericMeasure_qualifiedValue {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObservedValue;
            let timeStamp: OPTIONAL<TimePeriod>;
            let suspectFlag: OPTIONAL<BOOLEAN> =
                NumericMeasure_qualifiedValue._default_value_for_suspectFlag;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumericMeasure_qualifiedValue,
                _extension_additions_list_spec_for_NumericMeasure_qualifiedValue,
                _root_component_type_list_2_spec_for_NumericMeasure_qualifiedValue,
                undefined
            );
            return new NumericMeasure_qualifiedValue /* SEQUENCE_CONSTRUCTOR_CALL */(
                value,
                timeStamp,
                suspectFlag
            );
        };
    }
    return _cached_decoder_for_NumericMeasure_qualifiedValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumericMeasure_qualifiedValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericMeasure_qualifiedValue */
let _cached_encoder_for_NumericMeasure_qualifiedValue: $.ASN1Encoder<NumericMeasure_qualifiedValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericMeasure_qualifiedValue */

/* START_OF_SYMBOL_DEFINITION _encode_NumericMeasure_qualifiedValue */
/**
 * @summary Encodes a(n) NumericMeasure_qualifiedValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericMeasure_qualifiedValue, encoded as an ASN.1 Element.
 */
export function _encode_NumericMeasure_qualifiedValue(
    value: NumericMeasure_qualifiedValue,
    elGetter: $.ASN1Encoder<NumericMeasure_qualifiedValue>
) {
    if (!_cached_encoder_for_NumericMeasure_qualifiedValue) {
        _cached_encoder_for_NumericMeasure_qualifiedValue = function (
            value: NumericMeasure_qualifiedValue,
            elGetter: $.ASN1Encoder<NumericMeasure_qualifiedValue>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_NumericMeasure_qualifiedValue */

/* eslint-enable */
