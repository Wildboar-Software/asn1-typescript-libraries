/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv,
    _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv,
    _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv,
} from "../OSIProtocolSpecification/OsiBindError-normal-mode-parameters-user-data-fully-encoded-data-Item-pdv.ta.mjs";
import {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from "../OSIProtocolSpecification/Presentation-context-identifier.ta.mjs";
import {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from "../OSIProtocolSpecification/Transfer-syntax-name.ta.mjs";
/**
 * @summary OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-user-data-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: OPTIONAL<Transfer_syntax_name>,
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
        readonly presentation_data_values: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv
    ) {}

    /**
     * @summary Restructures an object into a OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     * @returns {OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item]: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[_K];
        }
    ): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
        return new OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
            _o.transfer_syntax_name,
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}

/**
 * @summary The Leading Root Component Types of OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "transfer-syntax-name",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
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
 * @summary The Trailing Root Component Types of OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Decoder<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: _Element
): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: _Element
        ): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv;
            const callbacks: $.DecodingMap = {
                "transfer-syntax-name": (_el: _Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (_el: _Element): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: _Element): void => {
                    presentation_data_values = _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
                transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}

let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item> | null = null;

/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item>
): _Element {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  $.DER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv(
                            value.presentation_data_values,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
