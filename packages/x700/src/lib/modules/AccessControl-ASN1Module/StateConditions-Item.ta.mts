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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip';
/**
 * @summary StateConditions_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StateConditions-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class StateConditions_Item {
    constructor(
        /**
         * @summary `conditionalObject`.
         * @public
         * @readonly
         */
        readonly conditionalObject: ObjectInstance,
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: CMISFilter
    ) {}

    /**
     * @summary Restructures an object into a StateConditions_Item
     * @description
     *
     * This takes an `object` and converts it to a `StateConditions_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StateConditions_Item`.
     * @returns {StateConditions_Item}
     */
    public static _from_object(
        _o: { [_K in keyof StateConditions_Item]: StateConditions_Item[_K] }
    ): StateConditions_Item {
        return new StateConditions_Item(_o.conditionalObject, _o.state);
    }
}

/**
 * @summary The Leading Root Component Types of StateConditions_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_StateConditions_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'conditionalObject',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec('state', false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of StateConditions_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_StateConditions_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of StateConditions_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_StateConditions_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_StateConditions_Item: $.ASN1Decoder<StateConditions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StateConditions_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StateConditions_Item} The decoded data structure.
 */
export function _decode_StateConditions_Item(el: _Element): StateConditions_Item {
    if (!_cached_decoder_for_StateConditions_Item) {
        _cached_decoder_for_StateConditions_Item = function (
            el: _Element
        ): StateConditions_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'StateConditions-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'conditionalObject';
            sequence[1].name = 'state';
            let conditionalObject!: ObjectInstance;
            let state!: CMISFilter;
            conditionalObject = _decode_ObjectInstance(sequence[0]);
            state = _decode_CMISFilter(sequence[1]);
            return new StateConditions_Item(conditionalObject, state);
        };
    }
    return _cached_decoder_for_StateConditions_Item(el);
}

let _cached_encoder_for_StateConditions_Item: $.ASN1Encoder<StateConditions_Item> | null = null;

/**
 * @summary Encodes a(n) StateConditions_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateConditions_Item, encoded as an ASN.1 Element.
 */
export function _encode_StateConditions_Item(
    value: StateConditions_Item,
    elGetter: $.ASN1Encoder<StateConditions_Item>
): _Element {
    if (!_cached_encoder_for_StateConditions_Item) {
        _cached_encoder_for_StateConditions_Item = function (
            value: StateConditions_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.conditionalObject,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_CMISFilter(value.state, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_StateConditions_Item(value, elGetter);
}


/* eslint-enable */
