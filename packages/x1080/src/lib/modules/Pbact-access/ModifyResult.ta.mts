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
import * as $ from '@wildboar/asn1/functional';
import {
    ModifyResult_result,
    _decode_ModifyResult_result,
    _encode_ModifyResult_result,
} from '../Pbact-access/ModifyResult-result.ta.mjs';

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


/**
 * @summary The Leading Root Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyResult: $.ComponentSpec[] = [
    new $.ComponentSpec('result', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyResult: $.ComponentSpec[] = [];


let _cached_decoder_for_ModifyResult: $.ASN1Decoder<ModifyResult> | null = null;


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


let _cached_encoder_for_ModifyResult: $.ASN1Encoder<ModifyResult> | null = null;


/**
 * @summary Encodes a(n) ModifyResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyResult(
    value: ModifyResult,
    elGetter: $.ASN1Encoder<ModifyResult>
) {
    if (!_cached_encoder_for_ModifyResult) {
        _cached_encoder_for_ModifyResult = function (
            value: ModifyResult        ): _Element {
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


/* eslint-enable */
