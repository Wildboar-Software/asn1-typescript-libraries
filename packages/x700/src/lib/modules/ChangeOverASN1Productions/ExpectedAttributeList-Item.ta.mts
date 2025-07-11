/* eslint-disable */
import {
    OPTIONAL,
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
    ModifyOperator,
    replace /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ModifyOperator,
    _encode_ModifyOperator,
} from '@wildboar/cmip';
import { AttributeId, _encode_AttributeId, _decode_AttributeId } from '@wildboar/cmip';

/**
 * @summary ExpectedAttributeList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpectedAttributeList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class ExpectedAttributeList_Item {
    constructor(
        /**
         * @summary `modifyOperator`.
         * @public
         * @readonly
         */
        readonly modifyOperator: OPTIONAL<ModifyOperator>,
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: AttributeId,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a ExpectedAttributeList_Item
     * @description
     *
     * This takes an `object` and converts it to a `ExpectedAttributeList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExpectedAttributeList_Item`.
     * @returns {ExpectedAttributeList_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof ExpectedAttributeList_Item]: ExpectedAttributeList_Item[_K];
        }
    ): ExpectedAttributeList_Item {
        return new ExpectedAttributeList_Item(
            _o.modifyOperator,
            _o.attributeId,
            _o.attributeValue
        );
    }

    /**
     * @summary Getter that returns the default value for `modifyOperator`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_modifyOperator(): ModifyOperator {
        return replace;
    }
}

/**
 * @summary The Leading Root Component Types of ExpectedAttributeList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExpectedAttributeList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'modifyOperator',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'attributeId',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'attributeValue',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ExpectedAttributeList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExpectedAttributeList_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ExpectedAttributeList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExpectedAttributeList_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_ExpectedAttributeList_Item: $.ASN1Decoder<ExpectedAttributeList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpectedAttributeList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpectedAttributeList_Item} The decoded data structure.
 */
export function _decode_ExpectedAttributeList_Item(el: _Element): ExpectedAttributeList_Item {
    if (!_cached_decoder_for_ExpectedAttributeList_Item) {
        _cached_decoder_for_ExpectedAttributeList_Item = function (
            el: _Element
        ): ExpectedAttributeList_Item {
            let modifyOperator: OPTIONAL<ModifyOperator> =
                ExpectedAttributeList_Item._default_value_for_modifyOperator;
            let attributeId!: AttributeId;
            let attributeValue: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                modifyOperator: (_el: _Element): void => {
                    modifyOperator = $._decode_implicit<ModifyOperator>(
                        () => _decode_ModifyOperator
                    )(_el);
                },
                attributeId: (_el: _Element): void => {
                    attributeId = $._decode_explicit<AttributeId>(
                        () => _decode_AttributeId
                    )(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExpectedAttributeList_Item,
                _extension_additions_list_spec_for_ExpectedAttributeList_Item,
                _root_component_type_list_2_spec_for_ExpectedAttributeList_Item,
                undefined
            );
            return new ExpectedAttributeList_Item (
                modifyOperator,
                attributeId,
                attributeValue
            );
        };
    }
    return _cached_decoder_for_ExpectedAttributeList_Item(el);
}

let _cached_encoder_for_ExpectedAttributeList_Item: $.ASN1Encoder<ExpectedAttributeList_Item> | null = null;

/**
 * @summary Encodes a(n) ExpectedAttributeList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpectedAttributeList_Item, encoded as an ASN.1 Element.
 */
export function _encode_ExpectedAttributeList_Item(
    value: ExpectedAttributeList_Item,
    elGetter: $.ASN1Encoder<ExpectedAttributeList_Item>
): _Element {
    if (!_cached_encoder_for_ExpectedAttributeList_Item) {
        _cached_encoder_for_ExpectedAttributeList_Item = function (
            value: ExpectedAttributeList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.modifyOperator === undefined ||
                        $.deepEq(
                            value.modifyOperator,
                            ExpectedAttributeList_Item._default_value_for_modifyOperator
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ModifyOperator,
                                  $.BER
                              )(value.modifyOperator, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_AttributeId,
                            $.BER
                        )(value.attributeId, $.BER),
                        /* IF_ABSENT  */ value.attributeValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.attributeValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExpectedAttributeList_Item(value, elGetter);
}


/* eslint-enable */
