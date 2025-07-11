/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
/**
 * @summary ModificationList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModificationList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class ModificationList_Item {
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
        readonly attributeId: OBJECT_IDENTIFIER,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a ModificationList_Item
     * @description
     *
     * This takes an `object` and converts it to a `ModificationList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationList_Item`.
     * @returns {ModificationList_Item}
     */
    public static _from_object(
        _o: { [_K in keyof ModificationList_Item]: ModificationList_Item[_K] }
    ): ModificationList_Item {
        return new ModificationList_Item(
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
 * @summary The Leading Root Component Types of ModificationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModificationList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'modifyOperator',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'attributeId',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'attributeValue',
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of ModificationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModificationList_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ModificationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModificationList_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_ModificationList_Item: $.ASN1Decoder<ModificationList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModificationList_Item} The decoded data structure.
 */
export function _decode_ModificationList_Item(el: _Element): ModificationList_Item {
    if (!_cached_decoder_for_ModificationList_Item) {
        _cached_decoder_for_ModificationList_Item = function (
            el: _Element
        ): ModificationList_Item {
            let modifyOperator: OPTIONAL<ModifyOperator> =
                ModificationList_Item._default_value_for_modifyOperator;
            let attributeId!: OBJECT_IDENTIFIER;
            let attributeValue: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                modifyOperator: (_el: _Element): void => {
                    modifyOperator = $._decode_implicit<ModifyOperator>(
                        () => _decode_ModifyOperator
                    )(_el);
                },
                attributeId: (_el: _Element): void => {
                    attributeId = $._decodeObjectIdentifier(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModificationList_Item,
                _extension_additions_list_spec_for_ModificationList_Item,
                _root_component_type_list_2_spec_for_ModificationList_Item,
                undefined
            );
            return new ModificationList_Item (
                modifyOperator,
                attributeId,
                attributeValue
            );
        };
    }
    return _cached_decoder_for_ModificationList_Item(el);
}

let _cached_encoder_for_ModificationList_Item: $.ASN1Encoder<ModificationList_Item> | null = null;

/**
 * @summary Encodes a(n) ModificationList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_ModificationList_Item(
    value: ModificationList_Item,
    elGetter: $.ASN1Encoder<ModificationList_Item>
): _Element {
    if (!_cached_encoder_for_ModificationList_Item) {
        _cached_encoder_for_ModificationList_Item = function (
            value: ModificationList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.modifyOperator === undefined ||
                        $.deepEq(
                            value.modifyOperator,
                            ModificationList_Item._default_value_for_modifyOperator
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ModifyOperator,
                                  $.BER
                              )(value.modifyOperator, $.BER),
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.attributeId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.attributeValue === undefined
                            ? undefined
                            : $._encodeAny(value.attributeValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModificationList_Item(value, elGetter);
}


/* eslint-enable */
