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
    NormalValue_value,
    _decode_NormalValue_value,
    _encode_NormalValue_value,
} from '../E-health-Data-Message/NormalValue-value.ta.mjs';
export {
    NormalValue_value,
    _decode_NormalValue_value,
    _encode_NormalValue_value,
} from '../E-health-Data-Message/NormalValue-value.ta.mjs';
import {
    Condition,
    _decode_Condition,
    _encode_Condition,
} from '../E-health-Data-Message/Condition.ta.mjs';
export {
    Condition,
    _decode_Condition,
    _encode_Condition,
} from '../E-health-Data-Message/Condition.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NormalValue */
/**
 * @summary NormalValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NormalValue ::= SEQUENCE {
 *   value
 *     CHOICE {range       SEQUENCE {minimum  REAL,
 *                                   maximum  REAL},
 *             low-limit   REAL,
 *             high-limit  REAL},
 *   conditions  SEQUENCE OF Condition OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NormalValue {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: NormalValue_value,
        /**
         * @summary `conditions`.
         * @public
         * @readonly
         */
        readonly conditions: OPTIONAL<Condition[]>
    ) {}

    /**
     * @summary Restructures an object into a NormalValue
     * @description
     *
     * This takes an `object` and converts it to a `NormalValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NormalValue`.
     * @returns {NormalValue}
     */
    public static _from_object(
        _o: { [_K in keyof NormalValue]: NormalValue[_K] }
    ): NormalValue {
        return new NormalValue(_o.value, _o.conditions);
    }
}
/* END_OF_SYMBOL_DEFINITION NormalValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NormalValue */
/**
 * @summary The Leading Root Component Types of NormalValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NormalValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'value',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'conditions',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NormalValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NormalValue */
/**
 * @summary The Trailing Root Component Types of NormalValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NormalValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NormalValue */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NormalValue */
/**
 * @summary The Extension Addition Component Types of NormalValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NormalValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NormalValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NormalValue */
let _cached_decoder_for_NormalValue: $.ASN1Decoder<NormalValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NormalValue */

/* START_OF_SYMBOL_DEFINITION _decode_NormalValue */
/**
 * @summary Decodes an ASN.1 element into a(n) NormalValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NormalValue} The decoded data structure.
 */
export function _decode_NormalValue(el: _Element) {
    if (!_cached_decoder_for_NormalValue) {
        _cached_decoder_for_NormalValue = function (el: _Element): NormalValue {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: NormalValue_value;
            let conditions: OPTIONAL<Condition[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _decode_NormalValue_value(_el);
                },
                conditions: (_el: _Element): void => {
                    conditions = $._decodeSequenceOf<Condition>(
                        () => _decode_Condition
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NormalValue,
                _extension_additions_list_spec_for_NormalValue,
                _root_component_type_list_2_spec_for_NormalValue,
                undefined
            );
            return new NormalValue /* SEQUENCE_CONSTRUCTOR_CALL */(
                value,
                conditions
            );
        };
    }
    return _cached_decoder_for_NormalValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NormalValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NormalValue */
let _cached_encoder_for_NormalValue: $.ASN1Encoder<NormalValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NormalValue */

/* START_OF_SYMBOL_DEFINITION _encode_NormalValue */
/**
 * @summary Encodes a(n) NormalValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NormalValue, encoded as an ASN.1 Element.
 */
export function _encode_NormalValue(
    value: NormalValue,
    elGetter: $.ASN1Encoder<NormalValue>
) {
    if (!_cached_encoder_for_NormalValue) {
        _cached_encoder_for_NormalValue = function (
            value: NormalValue,
            elGetter: $.ASN1Encoder<NormalValue>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_NormalValue_value(
                            value.value,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.conditions === undefined
                            ? undefined
                            : $._encodeSequenceOf<Condition>(
                                  () => _encode_Condition,
                                  $.BER
                              )(value.conditions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NormalValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NormalValue */

/* eslint-enable */
