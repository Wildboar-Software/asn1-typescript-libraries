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
    TestPattern,
    _decode_TestPattern,
    _encode_TestPattern,
} from '../TestCategories-ASN1Module/TestPattern.ta';
export {
    TestPattern,
    _decode_TestPattern,
    _encode_TestPattern,
} from '../TestCategories-ASN1Module/TestPattern.ta';
import {
    TestDirection,
    TestDirection_atoZ /* IMPORTED_LONG_NAMED_INTEGER */,
    atoZ /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_ztoA /* IMPORTED_LONG_NAMED_INTEGER */,
    ztoA /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_bothDirections /* IMPORTED_LONG_NAMED_INTEGER */,
    bothDirections /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_transmitFromNearEnd /* IMPORTED_LONG_NAMED_INTEGER */,
    transmitFromNearEnd /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_receiveFromNearEnd /* IMPORTED_LONG_NAMED_INTEGER */,
    receiveFromNearEnd /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestDirection,
    _encode_TestDirection,
} from '../TestCategories-ASN1Module/TestDirection.ta';
export {
    TestDirection,
    TestDirection_atoZ /* IMPORTED_LONG_NAMED_INTEGER */,
    atoZ /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_ztoA /* IMPORTED_LONG_NAMED_INTEGER */,
    ztoA /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_bothDirections /* IMPORTED_LONG_NAMED_INTEGER */,
    bothDirections /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_transmitFromNearEnd /* IMPORTED_LONG_NAMED_INTEGER */,
    transmitFromNearEnd /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestDirection_receiveFromNearEnd /* IMPORTED_LONG_NAMED_INTEGER */,
    receiveFromNearEnd /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestDirection,
    _encode_TestDirection,
} from '../TestCategories-ASN1Module/TestDirection.ta';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta';
export {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta';

/* START_OF_SYMBOL_DEFINITION ConnectionTestResults */
/**
 * @summary ConnectionTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionTestResults ::= SEQUENCE {
 *   receivedTestPattern  [0] EXPLICIT TestPattern OPTIONAL,
 *   errorRatio           [1]  REAL OPTIONAL,
 *   testDirection        [2]  TestDirection OPTIONAL,
 *   testDurationMade     [3]  Timespec OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ConnectionTestResults {
    constructor(
        /**
         * @summary `receivedTestPattern`.
         * @public
         * @readonly
         */
        readonly receivedTestPattern: OPTIONAL<TestPattern>,
        /**
         * @summary `errorRatio`.
         * @public
         * @readonly
         */
        readonly errorRatio: OPTIONAL<REAL>,
        /**
         * @summary `testDirection`.
         * @public
         * @readonly
         */
        readonly testDirection: OPTIONAL<TestDirection>,
        /**
         * @summary `testDurationMade`.
         * @public
         * @readonly
         */
        readonly testDurationMade: OPTIONAL<Timespec>
    ) {}

    /**
     * @summary Restructures an object into a ConnectionTestResults
     * @description
     *
     * This takes an `object` and converts it to a `ConnectionTestResults`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionTestResults`.
     * @returns {ConnectionTestResults}
     */
    public static _from_object(
        _o: { [_K in keyof ConnectionTestResults]: ConnectionTestResults[_K] }
    ): ConnectionTestResults {
        return new ConnectionTestResults(
            _o.receivedTestPattern,
            _o.errorRatio,
            _o.testDirection,
            _o.testDurationMade
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectionTestResults */
/**
 * @summary The Leading Root Component Types of ConnectionTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectionTestResults: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'receivedTestPattern',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'errorRatio',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'testDirection',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'testDurationMade',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectionTestResults */
/**
 * @summary The Trailing Root Component Types of ConnectionTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectionTestResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectionTestResults */
/**
 * @summary The Extension Addition Component Types of ConnectionTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectionTestResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionTestResults */
let _cached_decoder_for_ConnectionTestResults: $.ASN1Decoder<ConnectionTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectionTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionTestResults} The decoded data structure.
 */
export function _decode_ConnectionTestResults(el: _Element) {
    if (!_cached_decoder_for_ConnectionTestResults) {
        _cached_decoder_for_ConnectionTestResults = function (
            el: _Element
        ): ConnectionTestResults {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let receivedTestPattern: OPTIONAL<TestPattern>;
            let errorRatio: OPTIONAL<REAL>;
            let testDirection: OPTIONAL<TestDirection>;
            let testDurationMade: OPTIONAL<Timespec>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                receivedTestPattern: (_el: _Element): void => {
                    receivedTestPattern = $._decode_explicit<TestPattern>(
                        () => _decode_TestPattern
                    )(_el);
                },
                errorRatio: (_el: _Element): void => {
                    errorRatio = $._decode_implicit<REAL>(() => $._decodeReal)(
                        _el
                    );
                },
                testDirection: (_el: _Element): void => {
                    testDirection = $._decode_implicit<TestDirection>(
                        () => _decode_TestDirection
                    )(_el);
                },
                testDurationMade: (_el: _Element): void => {
                    testDurationMade = $._decode_explicit<Timespec>(
                        () => _decode_Timespec
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConnectionTestResults,
                _extension_additions_list_spec_for_ConnectionTestResults,
                _root_component_type_list_2_spec_for_ConnectionTestResults,
                undefined
            );
            return new ConnectionTestResults /* SEQUENCE_CONSTRUCTOR_CALL */(
                receivedTestPattern,
                errorRatio,
                testDirection,
                testDurationMade
            );
        };
    }
    return _cached_decoder_for_ConnectionTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionTestResults */
let _cached_encoder_for_ConnectionTestResults: $.ASN1Encoder<ConnectionTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectionTestResults */
/**
 * @summary Encodes a(n) ConnectionTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionTestResults(
    value: ConnectionTestResults,
    elGetter: $.ASN1Encoder<ConnectionTestResults>
) {
    if (!_cached_encoder_for_ConnectionTestResults) {
        _cached_encoder_for_ConnectionTestResults = function (
            value: ConnectionTestResults,
            elGetter: $.ASN1Encoder<ConnectionTestResults>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.receivedTestPattern === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_TestPattern,
                                  $.BER
                              )(value.receivedTestPattern, $.BER),
                        /* IF_ABSENT  */ value.errorRatio === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeReal,
                                  $.BER
                              )(value.errorRatio, $.BER),
                        /* IF_ABSENT  */ value.testDirection === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TestDirection,
                                  $.BER
                              )(value.testDirection, $.BER),
                        /* IF_ABSENT  */ value.testDurationMade === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Timespec,
                                  $.BER
                              )(value.testDurationMade, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectionTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectionTestResults */

/* eslint-enable */
