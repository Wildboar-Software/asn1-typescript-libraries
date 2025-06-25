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
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from '../ISO8823-PRESENTATION/Transfer-syntax-name.ta.mjs';
import {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta.mjs';
import {
    PDV_list_presentation_data_values,
    _decode_PDV_list_presentation_data_values,
    _encode_PDV_list_presentation_data_values,
} from '../ISO8823-PRESENTATION/PDV-list-presentation-data-values.ta.mjs';

/**
 * @summary PDV_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDV-list ::= SEQUENCE {
 *   transfer-syntax-name             Transfer-syntax-name OPTIONAL,
 *   presentation-context-identifier  Presentation-context-identifier,
 *   presentation-data-values
 *     CHOICE {single-ASN1-type
 *               [0]  ABSTRACT-SYNTAX.&Type
 *                      (CONSTRAINED BY {
 *
 *                         --  Type corresponding to presentation context identifier -- }),
 *             octet-aligned     [1] IMPLICIT OCTET STRING,
 *             arbitrary         [2] IMPLICIT BIT STRING}
 *   --  Contains one or more presentation data values from the same
 *   --  presentation context.
 *   --  See 8.4.2.
 * }
 * ```
 *
 * @class
 */
export class PDV_list {
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
        readonly presentation_data_values: PDV_list_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a PDV_list
     * @description
     *
     * This takes an `object` and converts it to a `PDV_list`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDV_list`.
     * @returns {PDV_list}
     */
    public static _from_object(
        _o: { [_K in keyof PDV_list]: PDV_list[_K] }
    ): PDV_list {
        return new PDV_list(
            _o.transfer_syntax_name,
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}


/**
 * @summary The Leading Root Component Types of PDV_list
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PDV_list: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'transfer-syntax-name',
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'presentation-context-identifier',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'presentation-data-values',
        false,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of PDV_list
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PDV_list: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PDV_list
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PDV_list: $.ComponentSpec[] = [];


let _cached_decoder_for_PDV_list: $.ASN1Decoder<PDV_list> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PDV_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDV_list} The decoded data structure.
 */
export function _decode_PDV_list(el: _Element): PDV_list {
    if (!_cached_decoder_for_PDV_list) {
        _cached_decoder_for_PDV_list = function (el: _Element): PDV_list {
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: PDV_list_presentation_data_values;
            const callbacks: $.DecodingMap = {
                'transfer-syntax-name': (_el: _Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                'presentation-context-identifier': (_el: _Element): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                'presentation-data-values': (_el: _Element): void => {
                    presentation_data_values = _decode_PDV_list_presentation_data_values(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PDV_list,
                _extension_additions_list_spec_for_PDV_list,
                _root_component_type_list_2_spec_for_PDV_list,
                undefined
            );
            return new PDV_list (
                transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_PDV_list(el);
}


let _cached_encoder_for_PDV_list: $.ASN1Encoder<PDV_list> | null = null;


/**
 * @summary Encodes a(n) PDV_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDV_list, encoded as an ASN.1 Element.
 */
export function _encode_PDV_list(
    value: PDV_list,
    elGetter: $.ASN1Encoder<PDV_list>
): _Element {
    if (!_cached_encoder_for_PDV_list) {
        _cached_encoder_for_PDV_list = function (
            value: PDV_list        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_PDV_list_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PDV_list(value, elGetter);
}


/* eslint-enable */
