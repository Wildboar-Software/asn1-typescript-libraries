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
    IndicatedTests,
    _decode_IndicatedTests,
    _encode_IndicatedTests,
} from '../Test-ASN1Module/IndicatedTests.ta';
export {
    IndicatedTests,
    _decode_IndicatedTests,
    _encode_IndicatedTests,
} from '../Test-ASN1Module/IndicatedTests.ta';
import {
    SuspendResumeChoice,
    _enum_for_SuspendResumeChoice,
    SuspendResumeChoice_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */,
    suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SuspendResumeChoice_resume /* IMPORTED_LONG_ENUMERATION_ITEM */,
    resume /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SuspendResumeChoice,
    _encode_SuspendResumeChoice,
} from '../Test-ASN1Module/SuspendResumeChoice.ta';
export {
    SuspendResumeChoice,
    _enum_for_SuspendResumeChoice,
    SuspendResumeChoice_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */,
    suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SuspendResumeChoice_resume /* IMPORTED_LONG_ENUMERATION_ITEM */,
    resume /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SuspendResumeChoice,
    _encode_SuspendResumeChoice,
} from '../Test-ASN1Module/SuspendResumeChoice.ta';

/* START_OF_SYMBOL_DEFINITION TestSuspendResumeInfo */
/**
 * @summary TestSuspendResumeInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSuspendResumeInfo ::= SEQUENCE {
 *   indicatedTests       IndicatedTests,
 *   suspendResumeChoice  SuspendResumeChoice
 * }
 * ```
 *
 * @class
 */
export class TestSuspendResumeInfo {
    constructor(
        /**
         * @summary `indicatedTests`.
         * @public
         * @readonly
         */
        readonly indicatedTests: IndicatedTests,
        /**
         * @summary `suspendResumeChoice`.
         * @public
         * @readonly
         */
        readonly suspendResumeChoice: SuspendResumeChoice
    ) {}

    /**
     * @summary Restructures an object into a TestSuspendResumeInfo
     * @description
     *
     * This takes an `object` and converts it to a `TestSuspendResumeInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestSuspendResumeInfo`.
     * @returns {TestSuspendResumeInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TestSuspendResumeInfo]: TestSuspendResumeInfo[_K] }
    ): TestSuspendResumeInfo {
        return new TestSuspendResumeInfo(
            _o.indicatedTests,
            _o.suspendResumeChoice
        );
    }

    /**
     * @summary The enum used as the type of the component `suspendResumeChoice`
     * @public
     * @static
     */

    public static _enum_for_suspendResumeChoice = _enum_for_SuspendResumeChoice;
}
/* END_OF_SYMBOL_DEFINITION TestSuspendResumeInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestSuspendResumeInfo */
/**
 * @summary The Leading Root Component Types of TestSuspendResumeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestSuspendResumeInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'indicatedTests',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'suspendResumeChoice',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestSuspendResumeInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestSuspendResumeInfo */
/**
 * @summary The Trailing Root Component Types of TestSuspendResumeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestSuspendResumeInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestSuspendResumeInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestSuspendResumeInfo */
/**
 * @summary The Extension Addition Component Types of TestSuspendResumeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestSuspendResumeInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestSuspendResumeInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeInfo */
let _cached_decoder_for_TestSuspendResumeInfo: $.ASN1Decoder<TestSuspendResumeInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TestSuspendResumeInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSuspendResumeInfo} The decoded data structure.
 */
export function _decode_TestSuspendResumeInfo(el: _Element) {
    if (!_cached_decoder_for_TestSuspendResumeInfo) {
        _cached_decoder_for_TestSuspendResumeInfo = function (
            el: _Element
        ): TestSuspendResumeInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TestSuspendResumeInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'indicatedTests';
            sequence[1].name = 'suspendResumeChoice';
            let indicatedTests!: IndicatedTests;
            let suspendResumeChoice!: SuspendResumeChoice;
            indicatedTests = _decode_IndicatedTests(sequence[0]);
            suspendResumeChoice = _decode_SuspendResumeChoice(sequence[1]);
            return new TestSuspendResumeInfo(
                indicatedTests,
                suspendResumeChoice
            );
        };
    }
    return _cached_decoder_for_TestSuspendResumeInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeInfo */
let _cached_encoder_for_TestSuspendResumeInfo: $.ASN1Encoder<TestSuspendResumeInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeInfo */
/**
 * @summary Encodes a(n) TestSuspendResumeInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSuspendResumeInfo, encoded as an ASN.1 Element.
 */
export function _encode_TestSuspendResumeInfo(
    value: TestSuspendResumeInfo,
    elGetter: $.ASN1Encoder<TestSuspendResumeInfo>
) {
    if (!_cached_encoder_for_TestSuspendResumeInfo) {
        _cached_encoder_for_TestSuspendResumeInfo = function (
            value: TestSuspendResumeInfo,
            elGetter: $.ASN1Encoder<TestSuspendResumeInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IndicatedTests(
                            value.indicatedTests,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SuspendResumeChoice(
                            value.suspendResumeChoice,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestSuspendResumeInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeInfo */

/* eslint-enable */
