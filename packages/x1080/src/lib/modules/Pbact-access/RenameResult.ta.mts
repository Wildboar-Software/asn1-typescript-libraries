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
    RenameResult_result,
    _decode_RenameResult_result,
    _encode_RenameResult_result,
} from '../Pbact-access/RenameResult-result.ta.mjs';

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


/**
 * @summary The Leading Root Component Types of RenameResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RenameResult: $.ComponentSpec[] = [
    new $.ComponentSpec('result', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of RenameResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RenameResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RenameResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RenameResult: $.ComponentSpec[] = [];


let _cached_decoder_for_RenameResult: $.ASN1Decoder<RenameResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RenameResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RenameResult} The decoded data structure.
 */
export function _decode_RenameResult(el: _Element): RenameResult {
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


let _cached_encoder_for_RenameResult: $.ASN1Encoder<RenameResult> | null = null;


/**
 * @summary Encodes a(n) RenameResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RenameResult, encoded as an ASN.1 Element.
 */
export function _encode_RenameResult(
    value: RenameResult,
    elGetter: $.ASN1Encoder<RenameResult>
): _Element {
    if (!_cached_encoder_for_RenameResult) {
        _cached_encoder_for_RenameResult = function (
            value: RenameResult        ): _Element {
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


/* eslint-enable */
