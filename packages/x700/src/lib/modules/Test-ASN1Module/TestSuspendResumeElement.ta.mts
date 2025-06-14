/* eslint-disable */
import {
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
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
import {
    TOsState,
    _decode_TOsState,
    _encode_TOsState,
} from '../Test-ASN1Module/TOsState.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TestSuspendResumeElement */
/**
 * @summary TestSuspendResumeElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSuspendResumeElement ::= SEQUENCE {
 *   testInvocationId  [0]  TestInvocationId,
 *   tOsStates         [1]  SET OF TOsState
 * }
 * ```
 *
 * @class
 */
export class TestSuspendResumeElement {
    constructor(
        /**
         * @summary `testInvocationId`.
         * @public
         * @readonly
         */
        readonly testInvocationId: TestInvocationId,
        /**
         * @summary `tOsStates`.
         * @public
         * @readonly
         */
        readonly tOsStates: TOsState[]
    ) {}

    /**
     * @summary Restructures an object into a TestSuspendResumeElement
     * @description
     *
     * This takes an `object` and converts it to a `TestSuspendResumeElement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestSuspendResumeElement`.
     * @returns {TestSuspendResumeElement}
     */
    public static _from_object(
        _o: {
            [_K in keyof TestSuspendResumeElement]: TestSuspendResumeElement[_K];
        }
    ): TestSuspendResumeElement {
        return new TestSuspendResumeElement(_o.testInvocationId, _o.tOsStates);
    }
}
/* END_OF_SYMBOL_DEFINITION TestSuspendResumeElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestSuspendResumeElement */
/**
 * @summary The Leading Root Component Types of TestSuspendResumeElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestSuspendResumeElement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testInvocationId',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'tOsStates',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestSuspendResumeElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestSuspendResumeElement */
/**
 * @summary The Trailing Root Component Types of TestSuspendResumeElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestSuspendResumeElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestSuspendResumeElement */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestSuspendResumeElement */
/**
 * @summary The Extension Addition Component Types of TestSuspendResumeElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestSuspendResumeElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestSuspendResumeElement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeElement */
let _cached_decoder_for_TestSuspendResumeElement: $.ASN1Decoder<TestSuspendResumeElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeElement */

/* START_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeElement */
/**
 * @summary Decodes an ASN.1 element into a(n) TestSuspendResumeElement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSuspendResumeElement} The decoded data structure.
 */
export function _decode_TestSuspendResumeElement(el: _Element) {
    if (!_cached_decoder_for_TestSuspendResumeElement) {
        _cached_decoder_for_TestSuspendResumeElement = function (
            el: _Element
        ): TestSuspendResumeElement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TestSuspendResumeElement contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'testInvocationId';
            sequence[1].name = 'tOsStates';
            let testInvocationId!: TestInvocationId;
            let tOsStates!: TOsState[];
            testInvocationId = $._decode_explicit<TestInvocationId>(
                () => _decode_TestInvocationId
            )(sequence[0]);
            tOsStates = $._decode_implicit<TOsState[]>(() =>
                $._decodeSetOf<TOsState>(() => _decode_TOsState)
            )(sequence[1]);
            return new TestSuspendResumeElement(testInvocationId, tOsStates);
        };
    }
    return _cached_decoder_for_TestSuspendResumeElement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeElement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeElement */
let _cached_encoder_for_TestSuspendResumeElement: $.ASN1Encoder<TestSuspendResumeElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeElement */

/* START_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeElement */
/**
 * @summary Encodes a(n) TestSuspendResumeElement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSuspendResumeElement, encoded as an ASN.1 Element.
 */
export function _encode_TestSuspendResumeElement(
    value: TestSuspendResumeElement,
    elGetter: $.ASN1Encoder<TestSuspendResumeElement>
) {
    if (!_cached_encoder_for_TestSuspendResumeElement) {
        _cached_encoder_for_TestSuspendResumeElement = function (
            value: TestSuspendResumeElement        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_TestInvocationId,
                            $.BER
                        )(value.testInvocationId, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () =>
                                $._encodeSetOf<TOsState>(
                                    () => _encode_TOsState,
                                    $.BER
                                ),
                            $.BER
                        )(value.tOsStates, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestSuspendResumeElement(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeElement */

/* eslint-enable */
