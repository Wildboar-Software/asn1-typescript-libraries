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
    TestConditions_first,
    TestConditions_first_testIfBusy /* IMPORTED_LONG_NAMED_INTEGER */,
    testIfBusy /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestConditions_first_rejectIfBusy /* IMPORTED_LONG_NAMED_INTEGER */,
    rejectIfBusy /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestConditions_first_waitIfBusy /* IMPORTED_LONG_NAMED_INTEGER */,
    waitIfBusy /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestConditions_first,
    _encode_TestConditions_first,
} from '../TestCategories-ASN1Module/TestConditions-first.ta';
export {
    TestConditions_first,
    TestConditions_first_testIfBusy /* IMPORTED_LONG_NAMED_INTEGER */,
    testIfBusy /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestConditions_first_rejectIfBusy /* IMPORTED_LONG_NAMED_INTEGER */,
    rejectIfBusy /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestConditions_first_waitIfBusy /* IMPORTED_LONG_NAMED_INTEGER */,
    waitIfBusy /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestConditions_first,
    _encode_TestConditions_first,
} from '../TestCategories-ASN1Module/TestConditions-first.ta';
import {
    TestConditions_second,
    TestConditions_second_customerOverrideTest /* IMPORTED_LONG_NAMED_INTEGER */,
    customerOverrideTest /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestConditions_second_noCustomerOverrideTest /* IMPORTED_LONG_NAMED_INTEGER */,
    noCustomerOverrideTest /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestConditions_second,
    _encode_TestConditions_second,
} from '../TestCategories-ASN1Module/TestConditions-second.ta';
export {
    TestConditions_second,
    TestConditions_second_customerOverrideTest /* IMPORTED_LONG_NAMED_INTEGER */,
    customerOverrideTest /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestConditions_second_noCustomerOverrideTest /* IMPORTED_LONG_NAMED_INTEGER */,
    noCustomerOverrideTest /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestConditions_second,
    _encode_TestConditions_second,
} from '../TestCategories-ASN1Module/TestConditions-second.ta';

/* START_OF_SYMBOL_DEFINITION TestConditions */
/**
 * @summary TestConditions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestConditions ::= SEQUENCE {
 *   first   INTEGER {testIfBusy(0), rejectIfBusy(1), waitIfBusy(2)},
 *   second  INTEGER {customerOverrideTest(0), noCustomerOverrideTest(1)} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class TestConditions {
    constructor(
        /**
         * @summary `first`.
         * @public
         * @readonly
         */
        readonly first: TestConditions_first,
        /**
         * @summary `second`.
         * @public
         * @readonly
         */
        readonly second: OPTIONAL<TestConditions_second>
    ) {}

    /**
     * @summary Restructures an object into a TestConditions
     * @description
     *
     * This takes an `object` and converts it to a `TestConditions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestConditions`.
     * @returns {TestConditions}
     */
    public static _from_object(
        _o: { [_K in keyof TestConditions]: TestConditions[_K] }
    ): TestConditions {
        return new TestConditions(_o.first, _o.second);
    }
}
/* END_OF_SYMBOL_DEFINITION TestConditions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestConditions */
/**
 * @summary The Leading Root Component Types of TestConditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestConditions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'first',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'second',
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestConditions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestConditions */
/**
 * @summary The Trailing Root Component Types of TestConditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestConditions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestConditions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestConditions */
/**
 * @summary The Extension Addition Component Types of TestConditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestConditions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestConditions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions */
let _cached_decoder_for_TestConditions: $.ASN1Decoder<TestConditions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions */

/* START_OF_SYMBOL_DEFINITION _decode_TestConditions */
/**
 * @summary Decodes an ASN.1 element into a(n) TestConditions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestConditions} The decoded data structure.
 */
export function _decode_TestConditions(el: _Element) {
    if (!_cached_decoder_for_TestConditions) {
        _cached_decoder_for_TestConditions = function (
            el: _Element
        ): TestConditions {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let first!: TestConditions_first;
            let second: OPTIONAL<TestConditions_second>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                first: (_el: _Element): void => {
                    first = _decode_TestConditions_first(_el);
                },
                second: (_el: _Element): void => {
                    second = _decode_TestConditions_second(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestConditions,
                _extension_additions_list_spec_for_TestConditions,
                _root_component_type_list_2_spec_for_TestConditions,
                undefined
            );
            return new TestConditions /* SEQUENCE_CONSTRUCTOR_CALL */(
                first,
                second
            );
        };
    }
    return _cached_decoder_for_TestConditions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestConditions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions */
let _cached_encoder_for_TestConditions: $.ASN1Encoder<TestConditions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions */

/* START_OF_SYMBOL_DEFINITION _encode_TestConditions */
/**
 * @summary Encodes a(n) TestConditions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestConditions, encoded as an ASN.1 Element.
 */
export function _encode_TestConditions(
    value: TestConditions,
    elGetter: $.ASN1Encoder<TestConditions>
) {
    if (!_cached_encoder_for_TestConditions) {
        _cached_encoder_for_TestConditions = function (
            value: TestConditions,
            elGetter: $.ASN1Encoder<TestConditions>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TestConditions_first(
                            value.first,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.second === undefined
                            ? undefined
                            : _encode_TestConditions_second(
                                  value.second,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestConditions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestConditions */

/* eslint-enable */
