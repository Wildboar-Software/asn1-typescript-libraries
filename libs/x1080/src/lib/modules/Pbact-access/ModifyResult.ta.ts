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
    ModifyResult_result,
    _decode_ModifyResult_result,
    _encode_ModifyResult_result,
} from '../Pbact-access/ModifyResult-result.ta';
export {
    ModifyResult_result,
    _decode_ModifyResult_result,
    _encode_ModifyResult_result,
} from '../Pbact-access/ModifyResult-result.ta';

/* START_OF_SYMBOL_DEFINITION ModifyResult */
/**
 * @summary ModifyResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyResult ::= SEQUENCE {
 *   result    CHOICE {
 *     success   [0] ObjectInformation,
 *     failure   [1] AccessdErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ModifyResult {
    constructor(
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: ModifyResult_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyResult
     * @description
     *
     * This takes an `object` and converts it to a `ModifyResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyResult`.
     * @returns {ModifyResult}
     */
    public static _from_object(
        _o: { [_K in keyof ModifyResult]: ModifyResult[_K] }
    ): ModifyResult {
        return new ModifyResult(_o.result, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION ModifyResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyResult */
/**
 * @summary The Leading Root Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyResult: $.ComponentSpec[] = [
    new $.ComponentSpec('result', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyResult */
/**
 * @summary The Trailing Root Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyResult */
/**
 * @summary The Extension Addition Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyResult */
let _cached_decoder_for_ModifyResult: $.ASN1Decoder<ModifyResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyResult} The decoded data structure.
 */
export function _decode_ModifyResult(el: _Element) {
    if (!_cached_decoder_for_ModifyResult) {
        _cached_decoder_for_ModifyResult = function (
            el: _Element
        ): ModifyResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    'ModifyResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'result';
            let result!: ModifyResult_result;
            result = _decode_ModifyResult_result(sequence[0]);
            return new ModifyResult(result, sequence.slice(1));
        };
    }
    return _cached_decoder_for_ModifyResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyResult */
let _cached_encoder_for_ModifyResult: $.ASN1Encoder<ModifyResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyResult */
/**
 * @summary Encodes a(n) ModifyResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyResult(
    value: ModifyResult,
    elGetter: $.ASN1Encoder<ModifyResult>
) {
    if (!_cached_encoder_for_ModifyResult) {
        _cached_encoder_for_ModifyResult = function (
            value: ModifyResult,
            elGetter: $.ASN1Encoder<ModifyResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ModifyResult_result(
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
    return _cached_encoder_for_ModifyResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyResult */

/* eslint-enable */
