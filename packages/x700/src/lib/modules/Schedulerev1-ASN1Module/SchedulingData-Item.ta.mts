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
    IndexOrOperSpec,
    _decode_IndexOrOperSpec,
    _encode_IndexOrOperSpec,
} from '../Schedulerev1-ASN1Module/IndexOrOperSpec.ta.mjs';
export {
    IndexOrOperSpec,
    _decode_IndexOrOperSpec,
    _encode_IndexOrOperSpec,
} from '../Schedulerev1-ASN1Module/IndexOrOperSpec.ta.mjs';
import {
    Schedule,
    _decode_Schedule,
    _encode_Schedule,
} from '../Schedulerev1-ASN1Module/Schedule.ta.mjs';
export {
    Schedule,
    _decode_Schedule,
    _encode_Schedule,
} from '../Schedulerev1-ASN1Module/Schedule.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SchedulingData_Item */
/**
 * @summary SchedulingData_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchedulingData-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SchedulingData_Item {
    constructor(
        /**
         * @summary `indexOrOperSpec`.
         * @public
         * @readonly
         */
        readonly indexOrOperSpec: IndexOrOperSpec,
        /**
         * @summary `schedule`.
         * @public
         * @readonly
         */
        readonly schedule: Schedule,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a SchedulingData_Item
     * @description
     *
     * This takes an `object` and converts it to a `SchedulingData_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchedulingData_Item`.
     * @returns {SchedulingData_Item}
     */
    public static _from_object(
        _o: { [_K in keyof SchedulingData_Item]: SchedulingData_Item[_K] }
    ): SchedulingData_Item {
        return new SchedulingData_Item(
            _o.indexOrOperSpec,
            _o.schedule,
            _o.priority
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SchedulingData_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchedulingData_Item */
/**
 * @summary The Leading Root Component Types of SchedulingData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SchedulingData_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'indexOrOperSpec',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'schedule',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'priority',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchedulingData_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchedulingData_Item */
/**
 * @summary The Trailing Root Component Types of SchedulingData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SchedulingData_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchedulingData_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchedulingData_Item */
/**
 * @summary The Extension Addition Component Types of SchedulingData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SchedulingData_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchedulingData_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingData_Item */
let _cached_decoder_for_SchedulingData_Item: $.ASN1Decoder<SchedulingData_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingData_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SchedulingData_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingData_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingData_Item} The decoded data structure.
 */
export function _decode_SchedulingData_Item(el: _Element) {
    if (!_cached_decoder_for_SchedulingData_Item) {
        _cached_decoder_for_SchedulingData_Item = function (
            el: _Element
        ): SchedulingData_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let indexOrOperSpec!: IndexOrOperSpec;
            let schedule!: Schedule;
            let priority: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                indexOrOperSpec: (_el: _Element): void => {
                    indexOrOperSpec = $._decode_explicit<IndexOrOperSpec>(
                        () => _decode_IndexOrOperSpec
                    )(_el);
                },
                schedule: (_el: _Element): void => {
                    schedule = $._decode_explicit<Schedule>(
                        () => _decode_Schedule
                    )(_el);
                },
                priority: (_el: _Element): void => {
                    priority = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SchedulingData_Item,
                _extension_additions_list_spec_for_SchedulingData_Item,
                _root_component_type_list_2_spec_for_SchedulingData_Item,
                undefined
            );
            return new SchedulingData_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                indexOrOperSpec,
                schedule,
                priority
            );
        };
    }
    return _cached_decoder_for_SchedulingData_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchedulingData_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingData_Item */
let _cached_encoder_for_SchedulingData_Item: $.ASN1Encoder<SchedulingData_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingData_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SchedulingData_Item */
/**
 * @summary Encodes a(n) SchedulingData_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingData_Item, encoded as an ASN.1 Element.
 */
export function _encode_SchedulingData_Item(
    value: SchedulingData_Item,
    elGetter: $.ASN1Encoder<SchedulingData_Item>
) {
    if (!_cached_encoder_for_SchedulingData_Item) {
        _cached_encoder_for_SchedulingData_Item = function (
            value: SchedulingData_Item,
            elGetter: $.ASN1Encoder<SchedulingData_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_IndexOrOperSpec,
                            $.BER
                        )(value.indexOrOperSpec, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Schedule,
                            $.BER
                        )(value.schedule, $.BER),
                        /* IF_ABSENT  */ value.priority === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.priority, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SchedulingData_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchedulingData_Item */

/* eslint-enable */
