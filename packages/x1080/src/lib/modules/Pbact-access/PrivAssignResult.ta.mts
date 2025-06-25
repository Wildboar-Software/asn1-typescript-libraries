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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    PrivAssignResult_result,
    _decode_PrivAssignResult_result,
    _encode_PrivAssignResult_result,
} from '../Pbact-access/PrivAssignResult-result.ta.mjs';

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


/**
 * @summary The Leading Root Component Types of PrivAssignResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivAssignResult: $.ComponentSpec[] = [
    new $.ComponentSpec('result', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PrivAssignResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivAssignResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PrivAssignResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivAssignResult: $.ComponentSpec[] = [];


let _cached_decoder_for_PrivAssignResult: $.ASN1Decoder<PrivAssignResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignResult} The decoded data structure.
 */
export function _decode_PrivAssignResult(el: _Element): PrivAssignResult {
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


let _cached_encoder_for_PrivAssignResult: $.ASN1Encoder<PrivAssignResult> | null = null;


/**
 * @summary Encodes a(n) PrivAssignResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivAssignResult, encoded as an ASN.1 Element.
 */
export function _encode_PrivAssignResult(
    value: PrivAssignResult,
    elGetter: $.ASN1Encoder<PrivAssignResult>
): _Element {
    if (!_cached_encoder_for_PrivAssignResult) {
        _cached_encoder_for_PrivAssignResult = function (
            value: PrivAssignResult        ): _Element {
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


/* eslint-enable */
