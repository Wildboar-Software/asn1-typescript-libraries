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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/pki-stub';
import {
    LastAttemptResult,
    _decode_LastAttemptResult,
    _encode_LastAttemptResult,
} from '../SDHProtASN1/LastAttemptResult.ta.mjs';

/**
 * @summary InvokeExerciseReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeExerciseReply-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class InvokeExerciseReply_Item {
    constructor(
        /**
         * @summary `protectionUnit`.
         * @public
         * @readonly
         */
        readonly protectionUnit: RelativeDistinguishedName,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: LastAttemptResult
    ) {}

    /**
     * @summary Restructures an object into a InvokeExerciseReply_Item
     * @description
     *
     * This takes an `object` and converts it to a `InvokeExerciseReply_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InvokeExerciseReply_Item`.
     * @returns {InvokeExerciseReply_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof InvokeExerciseReply_Item]: InvokeExerciseReply_Item[_K];
        }
    ): InvokeExerciseReply_Item {
        return new InvokeExerciseReply_Item(_o.protectionUnit, _o.result);
    }
}


/**
 * @summary The Leading Root Component Types of InvokeExerciseReply_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InvokeExerciseReply_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protectionUnit',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec('result', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of InvokeExerciseReply_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InvokeExerciseReply_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of InvokeExerciseReply_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InvokeExerciseReply_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_InvokeExerciseReply_Item: $.ASN1Decoder<InvokeExerciseReply_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InvokeExerciseReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeExerciseReply_Item} The decoded data structure.
 */
export function _decode_InvokeExerciseReply_Item(el: _Element): InvokeExerciseReply_Item {
    if (!_cached_decoder_for_InvokeExerciseReply_Item) {
        _cached_decoder_for_InvokeExerciseReply_Item = function (
            el: _Element
        ): InvokeExerciseReply_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'InvokeExerciseReply-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'protectionUnit';
            sequence[1].name = 'result';
            let protectionUnit!: RelativeDistinguishedName;
            let result!: LastAttemptResult;
            protectionUnit = _decode_RelativeDistinguishedName(sequence[0]);
            result = _decode_LastAttemptResult(sequence[1]);
            return new InvokeExerciseReply_Item(protectionUnit, result);
        };
    }
    return _cached_decoder_for_InvokeExerciseReply_Item(el);
}


let _cached_encoder_for_InvokeExerciseReply_Item: $.ASN1Encoder<InvokeExerciseReply_Item> | null = null;


/**
 * @summary Encodes a(n) InvokeExerciseReply_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeExerciseReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_InvokeExerciseReply_Item(
    value: InvokeExerciseReply_Item,
    elGetter: $.ASN1Encoder<InvokeExerciseReply_Item>
): _Element {
    if (!_cached_encoder_for_InvokeExerciseReply_Item) {
        _cached_encoder_for_InvokeExerciseReply_Item = function (
            value: InvokeExerciseReply_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RelativeDistinguishedName(
                            value.protectionUnit,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_LastAttemptResult(
                            value.result,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InvokeExerciseReply_Item(value, elGetter);
}


/* eslint-enable */
