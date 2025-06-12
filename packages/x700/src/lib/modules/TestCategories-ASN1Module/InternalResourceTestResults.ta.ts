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
import { CDTC_TEST_RESULTS } from '../TestCategories-ASN1Module/CDTC-TEST-RESULTS.oca.js';
export { CDTC_TEST_RESULTS } from '../TestCategories-ASN1Module/CDTC-TEST-RESULTS.oca.js';
import { InternalResourceSet } from '../TestCategories-ASN1Module/InternalResourceSet.osa.js';
export { InternalResourceSet } from '../TestCategories-ASN1Module/InternalResourceSet.osa.js';

/* START_OF_SYMBOL_DEFINITION InternalResourceTestResults */
/**
 * @summary InternalResourceTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalResourceTestResults ::= SEQUENCE {
 *   functionTested  CDTC-TEST-RESULTS.&id({InternalResourceSet}),
 *   testResult
 *     CDTC-TEST-RESULTS.&Value({InternalResourceSet}{@.functionTested})
 * }
 * ```
 *
 * @class
 */
export class InternalResourceTestResults {
    constructor(
        /**
         * @summary `functionTested`.
         * @public
         * @readonly
         */
        readonly functionTested: OBJECT_IDENTIFIER,
        /**
         * @summary `testResult`.
         * @public
         * @readonly
         */
        readonly testResult: _Element
    ) {}

    /**
     * @summary Restructures an object into a InternalResourceTestResults
     * @description
     *
     * This takes an `object` and converts it to a `InternalResourceTestResults`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InternalResourceTestResults`.
     * @returns {InternalResourceTestResults}
     */
    public static _from_object(
        _o: {
            [_K in keyof InternalResourceTestResults]: InternalResourceTestResults[_K];
        }
    ): InternalResourceTestResults {
        return new InternalResourceTestResults(
            _o.functionTested,
            _o.testResult
        );
    }
}
/* END_OF_SYMBOL_DEFINITION InternalResourceTestResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InternalResourceTestResults */
/**
 * @summary The Leading Root Component Types of InternalResourceTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InternalResourceTestResults: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'functionTested',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec('testResult', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InternalResourceTestResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InternalResourceTestResults */
/**
 * @summary The Trailing Root Component Types of InternalResourceTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InternalResourceTestResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InternalResourceTestResults */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InternalResourceTestResults */
/**
 * @summary The Extension Addition Component Types of InternalResourceTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InternalResourceTestResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InternalResourceTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalResourceTestResults */
let _cached_decoder_for_InternalResourceTestResults: $.ASN1Decoder<InternalResourceTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalResourceTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_InternalResourceTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) InternalResourceTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalResourceTestResults} The decoded data structure.
 */
export function _decode_InternalResourceTestResults(el: _Element) {
    if (!_cached_decoder_for_InternalResourceTestResults) {
        _cached_decoder_for_InternalResourceTestResults = function (
            el: _Element
        ): InternalResourceTestResults {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'InternalResourceTestResults contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'functionTested';
            sequence[1].name = 'testResult';
            let functionTested!: OBJECT_IDENTIFIER;
            let testResult!: _Element;
            functionTested = $._decodeObjectIdentifier(sequence[0]);
            testResult = $._decodeAny(sequence[1]);
            return new InternalResourceTestResults(functionTested, testResult);
        };
    }
    return _cached_decoder_for_InternalResourceTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InternalResourceTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalResourceTestResults */
let _cached_encoder_for_InternalResourceTestResults: $.ASN1Encoder<InternalResourceTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalResourceTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_InternalResourceTestResults */
/**
 * @summary Encodes a(n) InternalResourceTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalResourceTestResults, encoded as an ASN.1 Element.
 */
export function _encode_InternalResourceTestResults(
    value: InternalResourceTestResults,
    elGetter: $.ASN1Encoder<InternalResourceTestResults>
) {
    if (!_cached_encoder_for_InternalResourceTestResults) {
        _cached_encoder_for_InternalResourceTestResults = function (
            value: InternalResourceTestResults,
            elGetter: $.ASN1Encoder<InternalResourceTestResults>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.functionTested,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.testResult, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InternalResourceTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InternalResourceTestResults */

/* eslint-enable */
