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
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta.mjs';
import {
    Abstract_syntax_name,
    _decode_Abstract_syntax_name,
    _encode_Abstract_syntax_name,
} from '../ISO8823-PRESENTATION/Abstract-syntax-name.ta.mjs';
import {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from '../ISO8823-PRESENTATION/Transfer-syntax-name.ta.mjs';

/**
 * @summary Context_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Context_list_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `abstract_syntax_name`.
         * @public
         * @readonly
         */
        readonly abstract_syntax_name: Abstract_syntax_name,
        /**
         * @summary `transfer_syntax_name_list`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name_list: Transfer_syntax_name[]
    ) {}

    /**
     * @summary Restructures an object into a Context_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `Context_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context_list_Item`.
     * @returns {Context_list_Item}
     */
    public static _from_object(
        _o: { [_K in keyof Context_list_Item]: Context_list_Item[_K] }
    ): Context_list_Item {
        return new Context_list_Item(
            _o.presentation_context_identifier,
            _o.abstract_syntax_name,
            _o.transfer_syntax_name_list
        );
    }
}


/**
 * @summary The Leading Root Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'presentation-context-identifier',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'abstract-syntax-name',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'transfer-syntax-name-list',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context_list_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context_list_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_Context_list_Item: $.ASN1Decoder<Context_list_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Context_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_list_Item} The decoded data structure.
 */
export function _decode_Context_list_Item(el: _Element): Context_list_Item {
    if (!_cached_decoder_for_Context_list_Item) {
        _cached_decoder_for_Context_list_Item = function (
            el: _Element
        ): Context_list_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'Context-list-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'presentation-context-identifier';
            sequence[1].name = 'abstract-syntax-name';
            sequence[2].name = 'transfer-syntax-name-list';
            let presentation_context_identifier!: Presentation_context_identifier;
            let abstract_syntax_name!: Abstract_syntax_name;
            let transfer_syntax_name_list!: Transfer_syntax_name[];
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            abstract_syntax_name = _decode_Abstract_syntax_name(sequence[1]);
            transfer_syntax_name_list = $._decodeSequenceOf<Transfer_syntax_name>(
                () => _decode_Transfer_syntax_name
            )(sequence[2]);
            return new Context_list_Item(
                presentation_context_identifier,
                abstract_syntax_name,
                transfer_syntax_name_list
            );
        };
    }
    return _cached_decoder_for_Context_list_Item(el);
}


let _cached_encoder_for_Context_list_Item: $.ASN1Encoder<Context_list_Item> | null = null;


/**
 * @summary Encodes a(n) Context_list_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Context_list_Item(
    value: Context_list_Item,
    elGetter: $.ASN1Encoder<Context_list_Item>
): _Element {
    if (!_cached_encoder_for_Context_list_Item) {
        _cached_encoder_for_Context_list_Item = function (
            value: Context_list_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Abstract_syntax_name(
                            value.abstract_syntax_name,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<Transfer_syntax_name>(
                            () => _encode_Transfer_syntax_name,
                            $.BER
                        )(value.transfer_syntax_name_list, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Context_list_Item(value, elGetter);
}


/* eslint-enable */
