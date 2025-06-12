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
    RenameResult_result,
    _decode_RenameResult_result,
    _encode_RenameResult_result,
} from '../Pbact-access/RenameResult-result.ta.mjs';
export {
    RenameResult_result,
    _decode_RenameResult_result,
    _encode_RenameResult_result,
} from '../Pbact-access/RenameResult-result.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RenameResult */
/**
 * @summary RenameResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RenameResult ::= SEQUENCE {
 *   result    CHOICE {
 *     success   [0] NULL,
 *     failure   [1] AccessdErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class RenameResult {
    constructor(
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: RenameResult_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RenameResult
     * @description
     *
     * This takes an `object` and converts it to a `RenameResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RenameResult`.
     * @returns {RenameResult}
     */
    public static _from_object(
        _o: { [_K in keyof RenameResult]: RenameResult[_K] }
    ): RenameResult {
        return new RenameResult(_o.result, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION RenameResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RenameResult */
/**
 * @summary The Leading Root Component Types of RenameResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RenameResult: $.ComponentSpec[] = [
    new $.ComponentSpec('result', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RenameResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RenameResult */
/**
 * @summary The Trailing Root Component Types of RenameResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RenameResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RenameResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RenameResult */
/**
 * @summary The Extension Addition Component Types of RenameResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RenameResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RenameResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RenameResult */
let _cached_decoder_for_RenameResult: $.ASN1Decoder<RenameResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RenameResult */

/* START_OF_SYMBOL_DEFINITION _decode_RenameResult */
/**
 * @summary Decodes an ASN.1 element into a(n) RenameResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RenameResult} The decoded data structure.
 */
export function _decode_RenameResult(el: _Element) {
    if (!_cached_decoder_for_RenameResult) {
        _cached_decoder_for_RenameResult = function (
            el: _Element
        ): RenameResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    'RenameResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'result';
            let result!: RenameResult_result;
            result = _decode_RenameResult_result(sequence[0]);
            return new RenameResult(result, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RenameResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RenameResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RenameResult */
let _cached_encoder_for_RenameResult: $.ASN1Encoder<RenameResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RenameResult */

/* START_OF_SYMBOL_DEFINITION _encode_RenameResult */
/**
 * @summary Encodes a(n) RenameResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RenameResult, encoded as an ASN.1 Element.
 */
export function _encode_RenameResult(
    value: RenameResult,
    elGetter: $.ASN1Encoder<RenameResult>
) {
    if (!_cached_encoder_for_RenameResult) {
        _cached_encoder_for_RenameResult = function (
            value: RenameResult,
            elGetter: $.ASN1Encoder<RenameResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RenameResult_result(
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
    return _cached_encoder_for_RenameResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RenameResult */

/* eslint-enable */
