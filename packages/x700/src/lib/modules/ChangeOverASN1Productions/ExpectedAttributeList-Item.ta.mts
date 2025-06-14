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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ModifyOperator,
    replace /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ModifyOperator,
    _encode_ModifyOperator,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ModifyOperator.ta.mjs';
import { AttributeId, _encode_AttributeId, _decode_AttributeId } from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ExpectedAttributeList_Item */
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
 * @class
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
    public static get _default_value_for_modifyOperator() {
        return replace;
    }
}
/* END_OF_SYMBOL_DEFINITION ExpectedAttributeList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExpectedAttributeList_Item */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributeId',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributeValue',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExpectedAttributeList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExpectedAttributeList_Item */
/**
 * @summary The Trailing Root Component Types of ExpectedAttributeList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExpectedAttributeList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExpectedAttributeList_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExpectedAttributeList_Item */
/**
 * @summary The Extension Addition Component Types of ExpectedAttributeList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExpectedAttributeList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExpectedAttributeList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpectedAttributeList_Item */
let _cached_decoder_for_ExpectedAttributeList_Item: $.ASN1Decoder<ExpectedAttributeList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpectedAttributeList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ExpectedAttributeList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ExpectedAttributeList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpectedAttributeList_Item} The decoded data structure.
 */
export function _decode_ExpectedAttributeList_Item(el: _Element) {
    if (!_cached_decoder_for_ExpectedAttributeList_Item) {
        _cached_decoder_for_ExpectedAttributeList_Item = function (
            el: _Element
        ): ExpectedAttributeList_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let modifyOperator: OPTIONAL<ModifyOperator> =
                ExpectedAttributeList_Item._default_value_for_modifyOperator;
            let attributeId!: AttributeId;
            let attributeValue: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExpectedAttributeList_Item,
                _extension_additions_list_spec_for_ExpectedAttributeList_Item,
                _root_component_type_list_2_spec_for_ExpectedAttributeList_Item,
                undefined
            );
            return new ExpectedAttributeList_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                modifyOperator,
                attributeId,
                attributeValue
            );
        };
    }
    return _cached_decoder_for_ExpectedAttributeList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExpectedAttributeList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpectedAttributeList_Item */
let _cached_encoder_for_ExpectedAttributeList_Item: $.ASN1Encoder<ExpectedAttributeList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpectedAttributeList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ExpectedAttributeList_Item */
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
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_ExpectedAttributeList_Item */

/* eslint-enable */
