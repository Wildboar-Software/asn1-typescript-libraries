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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'second',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of TestConditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestConditions: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestConditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestConditions: $.ComponentSpec[] = [];

let _cached_decoder_for_TestConditions: $.ASN1Decoder<TestConditions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestConditions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestConditions} The decoded data structure.
 */
export function _decode_TestConditions(el: _Element): TestConditions {
    if (!_cached_decoder_for_TestConditions) {
        _cached_decoder_for_TestConditions = function (
            el: _Element
        ): TestConditions {
            let first!: TestConditions_first;
            let second: OPTIONAL<TestConditions_second>;
            const callbacks: $.DecodingMap = {
                first: (_el: _Element): void => {
                    first = _decode_TestConditions_first(_el);
                },
                second: (_el: _Element): void => {
                    second = _decode_TestConditions_second(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestConditions,
                _extension_additions_list_spec_for_TestConditions,
                _root_component_type_list_2_spec_for_TestConditions,
                undefined
            );
            return new TestConditions (
                first,
                second
            );
        };
    }
    return _cached_decoder_for_TestConditions(el);
}

let _cached_encoder_for_TestConditions: $.ASN1Encoder<TestConditions> | null = null;

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
): _Element {
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


/* eslint-enable */
