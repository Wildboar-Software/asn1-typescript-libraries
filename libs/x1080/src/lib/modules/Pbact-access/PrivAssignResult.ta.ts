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
    PrivAssignResult_result,
    _decode_PrivAssignResult_result,
    _encode_PrivAssignResult_result,
} from '../Pbact-access/PrivAssignResult-result.ta';
export {
    PrivAssignResult_result,
    _decode_PrivAssignResult_result,
    _encode_PrivAssignResult_result,
} from '../Pbact-access/PrivAssignResult-result.ta';

/* START_OF_SYMBOL_DEFINITION PrivAssignResult */
/**
 * @summary PrivAssignResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivAssignResult ::= SEQUENCE {
 *   result  CHOICE {
 *     success  NULL,
 *     failure  PrivAssignErr },
 *   ... }
 * ```
 *
 * @class
 */
export class PrivAssignResult {
    constructor(
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: PrivAssignResult_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivAssignResult
     * @description
     *
     * This takes an `object` and converts it to a `PrivAssignResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivAssignResult`.
     * @returns {PrivAssignResult}
     */
    public static _from_object(
        _o: { [_K in keyof PrivAssignResult]: PrivAssignResult[_K] }
    ): PrivAssignResult {
        return new PrivAssignResult(_o.result, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION PrivAssignResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivAssignResult */
/**
 * @summary The Leading Root Component Types of PrivAssignResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivAssignResult: $.ComponentSpec[] = [
    new $.ComponentSpec('result', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivAssignResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivAssignResult */
/**
 * @summary The Trailing Root Component Types of PrivAssignResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivAssignResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivAssignResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivAssignResult */
/**
 * @summary The Extension Addition Component Types of PrivAssignResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivAssignResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivAssignResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignResult */
let _cached_decoder_for_PrivAssignResult: $.ASN1Decoder<PrivAssignResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignResult */

/* START_OF_SYMBOL_DEFINITION _decode_PrivAssignResult */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignResult} The decoded data structure.
 */
export function _decode_PrivAssignResult(el: _Element) {
    if (!_cached_decoder_for_PrivAssignResult) {
        _cached_decoder_for_PrivAssignResult = function (
            el: _Element
        ): PrivAssignResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    'PrivAssignResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'result';
            let result!: PrivAssignResult_result;
            result = _decode_PrivAssignResult_result(sequence[0]);
            return new PrivAssignResult(result, sequence.slice(1));
        };
    }
    return _cached_decoder_for_PrivAssignResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivAssignResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignResult */
let _cached_encoder_for_PrivAssignResult: $.ASN1Encoder<PrivAssignResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignResult */

/* START_OF_SYMBOL_DEFINITION _encode_PrivAssignResult */
/**
 * @summary Encodes a(n) PrivAssignResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivAssignResult, encoded as an ASN.1 Element.
 */
export function _encode_PrivAssignResult(
    value: PrivAssignResult,
    elGetter: $.ASN1Encoder<PrivAssignResult>
) {
    if (!_cached_encoder_for_PrivAssignResult) {
        _cached_encoder_for_PrivAssignResult = function (
            value: PrivAssignResult,
            elGetter: $.ASN1Encoder<PrivAssignResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_PrivAssignResult_result(
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
    return _cached_encoder_for_PrivAssignResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivAssignResult */

/* eslint-enable */
