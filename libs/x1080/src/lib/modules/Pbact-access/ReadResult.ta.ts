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
import {
    ReadResult_result,
    _decode_ReadResult_result,
    _encode_ReadResult_result,
} from '../Pbact-access/ReadResult-result.ta';
export {
    ReadResult_result,
    _decode_ReadResult_result,
    _encode_ReadResult_result,
} from '../Pbact-access/ReadResult-result.ta';

/* START_OF_SYMBOL_DEFINITION ReadResult */
/**
 * @summary ReadResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReadResult ::= SEQUENCE {
 *   object    DistinguishedName,
 *   result    CHOICE {
 *     success   [0] ObjectInformation,
 *     failure   [1] AccessdErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ReadResult {
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
        readonly result: ReadResult_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReadResult
     * @description
     *
     * This takes an `object` and converts it to a `ReadResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReadResult`.
     * @returns {ReadResult}
     */
    public static _from_object(
        _o: { [_K in keyof ReadResult]: ReadResult[_K] }
    ): ReadResult {
        return new ReadResult(
            _o.object,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ReadResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReadResult */
/**
 * @summary The Leading Root Component Types of ReadResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReadResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'object',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec('result', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReadResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReadResult */
/**
 * @summary The Trailing Root Component Types of ReadResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReadResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReadResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReadResult */
/**
 * @summary The Extension Addition Component Types of ReadResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReadResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReadResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadResult */
let _cached_decoder_for_ReadResult: $.ASN1Decoder<ReadResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadResult */

/* START_OF_SYMBOL_DEFINITION _decode_ReadResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ReadResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReadResult} The decoded data structure.
 */
export function _decode_ReadResult(el: _Element) {
    if (!_cached_decoder_for_ReadResult) {
        _cached_decoder_for_ReadResult = function (el: _Element): ReadResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ReadResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'object';
            sequence[1].name = 'result';
            let object!: DistinguishedName;
            let result!: ReadResult_result;
            object = _decode_DistinguishedName(sequence[0]);
            result = _decode_ReadResult_result(sequence[1]);
            return new ReadResult(object, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ReadResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReadResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadResult */
let _cached_encoder_for_ReadResult: $.ASN1Encoder<ReadResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadResult */

/* START_OF_SYMBOL_DEFINITION _encode_ReadResult */
/**
 * @summary Encodes a(n) ReadResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadResult, encoded as an ASN.1 Element.
 */
export function _encode_ReadResult(
    value: ReadResult,
    elGetter: $.ASN1Encoder<ReadResult>
) {
    if (!_cached_encoder_for_ReadResult) {
        _cached_encoder_for_ReadResult = function (
            value: ReadResult,
            elGetter: $.ASN1Encoder<ReadResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.object,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ReadResult_result(
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
    return _cached_encoder_for_ReadResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReadResult */

/* eslint-enable */
