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
    Mode_selector_mode_value,
    _decode_Mode_selector_mode_value,
    _encode_Mode_selector_mode_value,
} from '../ISO8823-PRESENTATION/Mode-selector-mode-value.ta.mjs';

/**
 * @summary Mode_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mode-selector ::= SET {
 *   mode-value  [0] IMPLICIT INTEGER {x410-1984-mode(0), normal-mode(1)}
 * }
 * ```
 *
 */
export class Mode_selector {
    constructor(
        /**
         * @summary `mode_value`.
         * @public
         * @readonly
         */
        readonly mode_value: Mode_selector_mode_value
    ) {}

    /**
     * @summary Restructures an object into a Mode_selector
     * @description
     *
     * This takes an `object` and converts it to a `Mode_selector`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Mode_selector`.
     * @returns {Mode_selector}
     */
    public static _from_object(
        _o: { [_K in keyof Mode_selector]: Mode_selector[_K] }
    ): Mode_selector {
        return new Mode_selector(_o.mode_value);
    }
}


/**
 * @summary The Leading Root Component Types of Mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Mode_selector: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'mode-value',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of Mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Mode_selector: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Mode_selector: $.ComponentSpec[] = [];


let _cached_decoder_for_Mode_selector: $.ASN1Decoder<Mode_selector> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Mode_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mode_selector} The decoded data structure.
 */
export function _decode_Mode_selector(el: _Element): Mode_selector {
    if (!_cached_decoder_for_Mode_selector) {
        _cached_decoder_for_Mode_selector = function (
            el: _Element
        ): Mode_selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_value!: Mode_selector_mode_value;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'mode-value': (_el: _Element): void => {
                    mode_value = $._decode_implicit<Mode_selector_mode_value>(
                        () => _decode_Mode_selector_mode_value
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Mode_selector,
                _extension_additions_list_spec_for_Mode_selector,
                _root_component_type_list_2_spec_for_Mode_selector,
                undefined
            );
            return new Mode_selector /* SET_CONSTRUCTOR_CALL */(mode_value);
        };
    }
    return _cached_decoder_for_Mode_selector(el);
}


let _cached_encoder_for_Mode_selector: $.ASN1Encoder<Mode_selector> | null = null;


/**
 * @summary Encodes a(n) Mode_selector into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mode_selector, encoded as an ASN.1 Element.
 */
export function _encode_Mode_selector(
    value: Mode_selector,
    elGetter: $.ASN1Encoder<Mode_selector>
): _Element {
    if (!_cached_encoder_for_Mode_selector) {
        _cached_encoder_for_Mode_selector = function (
            value: Mode_selector        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_Mode_selector_mode_value,
                            $.BER
                        )(value.mode_value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Mode_selector(value, elGetter);
}


/* eslint-enable */
