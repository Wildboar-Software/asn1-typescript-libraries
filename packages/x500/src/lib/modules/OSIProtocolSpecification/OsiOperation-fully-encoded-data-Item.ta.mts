/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OsiOperation_fully_encoded_data_Item_presentation_data_values,
    _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values,
    _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values,
} from "../OSIProtocolSpecification/OsiOperation-fully-encoded-data-Item-presentation-data-values.ta.mjs";
import {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from "../OSIProtocolSpecification/Presentation-context-identifier.ta.mjs";
/**
 * @summary OsiOperation_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiOperation-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class OsiOperation_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiOperation_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiOperation_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiOperation_fully_encoded_data_Item`.
     * @returns {OsiOperation_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof OsiOperation_fully_encoded_data_Item]: OsiOperation_fully_encoded_data_Item[_K];
        }
    ): OsiOperation_fully_encoded_data_Item {
        return new OsiOperation_fully_encoded_data_Item(
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}

/**
 * @summary The Leading Root Component Types of OsiOperation_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiOperation_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of OsiOperation_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiOperation_fully_encoded_data_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiOperation_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiOperation_fully_encoded_data_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiOperation_fully_encoded_data_Item: $.ASN1Decoder<OsiOperation_fully_encoded_data_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiOperation_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiOperation_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiOperation_fully_encoded_data_Item(el: _Element): OsiOperation_fully_encoded_data_Item {
    if (!_cached_decoder_for_OsiOperation_fully_encoded_data_Item) {
        _cached_decoder_for_OsiOperation_fully_encoded_data_Item = function (
            el: _Element
        ): OsiOperation_fully_encoded_data_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiOperation-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiOperation_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            return new OsiOperation_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiOperation_fully_encoded_data_Item(el);
}

let _cached_encoder_for_OsiOperation_fully_encoded_data_Item: $.ASN1Encoder<OsiOperation_fully_encoded_data_Item> | null = null;

/**
 * @summary Encodes a(n) OsiOperation_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiOperation_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiOperation_fully_encoded_data_Item(
    value: OsiOperation_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<OsiOperation_fully_encoded_data_Item>
): _Element {
    if (!_cached_encoder_for_OsiOperation_fully_encoded_data_Item) {
        _cached_encoder_for_OsiOperation_fully_encoded_data_Item = function (
            value: OsiOperation_fully_encoded_data_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OsiOperation_fully_encoded_data_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
