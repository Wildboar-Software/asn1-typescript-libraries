/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OsiBindResult_mode_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-mode-selector ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class OsiBindResult_mode_selector {
    constructor(
        /**
         * @summary `mode_value`.
         * @public
         * @readonly
         */
        readonly mode_value: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult_mode_selector
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult_mode_selector`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult_mode_selector`.
     * @returns {OsiBindResult_mode_selector}
     */
    public static _from_object(
        _o: {
            [_K in keyof OsiBindResult_mode_selector]: OsiBindResult_mode_selector[_K];
        }
    ): OsiBindResult_mode_selector {
        return new OsiBindResult_mode_selector(_o.mode_value);
    }
}

/**
 * @summary The Leading Root Component Types of OsiBindResult_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult_mode_selector: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode-value",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of OsiBindResult_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult_mode_selector: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiBindResult_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult_mode_selector: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiBindResult_mode_selector: $.ASN1Decoder<OsiBindResult_mode_selector> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_mode_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_mode_selector} The decoded data structure.
 */
export function _decode_OsiBindResult_mode_selector(el: _Element): OsiBindResult_mode_selector {
    if (!_cached_decoder_for_OsiBindResult_mode_selector) {
        _cached_decoder_for_OsiBindResult_mode_selector = function (
            el: _Element
        ): OsiBindResult_mode_selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_value!: INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                "mode-value": (_el: _Element): void => {
                    mode_value = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_mode_selector,
                _extension_additions_list_spec_for_OsiBindResult_mode_selector,
                _root_component_type_list_2_spec_for_OsiBindResult_mode_selector,
                undefined
            );
            return new OsiBindResult_mode_selector(
                /* SET_CONSTRUCTOR_CALL */ mode_value
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_mode_selector(el);
}

let _cached_encoder_for_OsiBindResult_mode_selector: $.ASN1Encoder<OsiBindResult_mode_selector> | null = null;

/**
 * @summary Encodes a(n) OsiBindResult_mode_selector into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_mode_selector, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_mode_selector(
    value: OsiBindResult_mode_selector,
    elGetter: $.ASN1Encoder<OsiBindResult_mode_selector>
): _Element {
    if (!_cached_encoder_for_OsiBindResult_mode_selector) {
        _cached_encoder_for_OsiBindResult_mode_selector = function (
            value: OsiBindResult_mode_selector        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.DER
                        )(value.mode_value, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_mode_selector(value, elGetter);
}


/* eslint-enable */
