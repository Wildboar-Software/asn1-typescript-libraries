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
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from '../ISO8823-PRESENTATION/Transfer-syntax-name.ta.mjs';

/**
 * @summary Presentation_context_identifier_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Presentation_context_identifier_list_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}

    /**
     * @summary Restructures an object into a Presentation_context_identifier_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `Presentation_context_identifier_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Presentation_context_identifier_list_Item`.
     * @returns {Presentation_context_identifier_list_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof Presentation_context_identifier_list_Item]: Presentation_context_identifier_list_Item[_K];
        }
    ): Presentation_context_identifier_list_Item {
        return new Presentation_context_identifier_list_Item(
            _o.presentation_context_identifier,
            _o.transfer_syntax_name
        );
    }
}


/**
 * @summary The Leading Root Component Types of Presentation_context_identifier_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Presentation_context_identifier_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'presentation-context-identifier',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'transfer-syntax-name',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
];


/**
 * @summary The Trailing Root Component Types of Presentation_context_identifier_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Presentation_context_identifier_list_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Presentation_context_identifier_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Presentation_context_identifier_list_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_Presentation_context_identifier_list_Item: $.ASN1Decoder<Presentation_context_identifier_list_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_identifier_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_identifier_list_Item} The decoded data structure.
 */
export function _decode_Presentation_context_identifier_list_Item(
    el: _Element
): Presentation_context_identifier_list_Item {
    if (!_cached_decoder_for_Presentation_context_identifier_list_Item) {
        _cached_decoder_for_Presentation_context_identifier_list_Item = function (
            el: _Element
        ): Presentation_context_identifier_list_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Presentation-context-identifier-list-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'presentation-context-identifier';
            sequence[1].name = 'transfer-syntax-name';
            let presentation_context_identifier!: Presentation_context_identifier;
            let transfer_syntax_name!: Transfer_syntax_name;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            transfer_syntax_name = _decode_Transfer_syntax_name(sequence[1]);
            return new Presentation_context_identifier_list_Item(
                presentation_context_identifier,
                transfer_syntax_name
            );
        };
    }
    return _cached_decoder_for_Presentation_context_identifier_list_Item(el);
}


let _cached_encoder_for_Presentation_context_identifier_list_Item: $.ASN1Encoder<Presentation_context_identifier_list_Item> | null = null;


/**
 * @summary Encodes a(n) Presentation_context_identifier_list_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_identifier_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_identifier_list_Item(
    value: Presentation_context_identifier_list_Item,
    elGetter: $.ASN1Encoder<Presentation_context_identifier_list_Item>
): _Element {
    if (!_cached_encoder_for_Presentation_context_identifier_list_Item) {
        _cached_encoder_for_Presentation_context_identifier_list_Item = function (
            value: Presentation_context_identifier_list_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Transfer_syntax_name(
                            value.transfer_syntax_name,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Presentation_context_identifier_list_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
