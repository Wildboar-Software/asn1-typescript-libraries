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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta';
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta';
import {
    CompareResult_result,
    _decode_CompareResult_result,
    _encode_CompareResult_result,
} from '../Pbact-access/CompareResult-result.ta';
export {
    CompareResult_result,
    _decode_CompareResult_result,
    _encode_CompareResult_result,
} from '../Pbact-access/CompareResult-result.ta';

/* START_OF_SYMBOL_DEFINITION CompareResult */
/**
 * @summary CompareResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareResult ::= SEQUENCE {
 *   object    DistinguishedName,
 *   result    CHOICE {
 *     success   [0] CompareOK,
 *     failure   [1] AccessdErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CompareResult {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: DistinguishedName,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CompareResult_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CompareResult
     * @description
     *
     * This takes an `object` and converts it to a `CompareResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompareResult`.
     * @returns {CompareResult}
     */
    public static _from_object(
        _o: { [_K in keyof CompareResult]: CompareResult[_K] }
    ): CompareResult {
        return new CompareResult(
            _o.object,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CompareResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompareResult */
/**
 * @summary The Leading Root Component Types of CompareResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompareResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'object',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec('result', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompareResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompareResult */
/**
 * @summary The Trailing Root Component Types of CompareResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompareResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompareResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompareResult */
/**
 * @summary The Extension Addition Component Types of CompareResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompareResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompareResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResult */
let _cached_decoder_for_CompareResult: $.ASN1Decoder<CompareResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResult */

/* START_OF_SYMBOL_DEFINITION _decode_CompareResult */
/**
 * @summary Decodes an ASN.1 element into a(n) CompareResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareResult} The decoded data structure.
 */
export function _decode_CompareResult(el: _Element) {
    if (!_cached_decoder_for_CompareResult) {
        _cached_decoder_for_CompareResult = function (
            el: _Element
        ): CompareResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'CompareResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'object';
            sequence[1].name = 'result';
            let object!: DistinguishedName;
            let result!: CompareResult_result;
            object = _decode_DistinguishedName(sequence[0]);
            result = _decode_CompareResult_result(sequence[1]);
            return new CompareResult(object, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CompareResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompareResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResult */
let _cached_encoder_for_CompareResult: $.ASN1Encoder<CompareResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResult */

/* START_OF_SYMBOL_DEFINITION _encode_CompareResult */
/**
 * @summary Encodes a(n) CompareResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResult, encoded as an ASN.1 Element.
 */
export function _encode_CompareResult(
    value: CompareResult,
    elGetter: $.ASN1Encoder<CompareResult>
) {
    if (!_cached_encoder_for_CompareResult) {
        _cached_encoder_for_CompareResult = function (
            value: CompareResult,
            elGetter: $.ASN1Encoder<CompareResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.object,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CompareResult_result(
                                value.result,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CompareResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompareResult */

/* eslint-enable */
