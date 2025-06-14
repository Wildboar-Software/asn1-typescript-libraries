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
    TestConditions_first,
    _decode_TestConditions_first,
    _encode_TestConditions_first,
} from '../TestCategories-ASN1Module/TestConditions-first.ta.mjs';
import {
    TestConditions_second,
    _decode_TestConditions_second,
    _encode_TestConditions_second,
} from '../TestCategories-ASN1Module/TestConditions-second.ta.mjs';
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
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestConditions, encoded as an ASN.1 Element.
 */
export function _encode_TestConditions(
    value: TestConditions,
    elGetter: $.ASN1Encoder<TestConditions>
) {
    if (!_cached_encoder_for_TestConditions) {
        _cached_encoder_for_TestConditions = function (
            value: TestConditions        ): _Element {
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
