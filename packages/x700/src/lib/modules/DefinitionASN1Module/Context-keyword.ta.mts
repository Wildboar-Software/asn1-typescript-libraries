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
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.mjs';
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';

/**
 * @summary Context_keyword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-keyword ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Context_keyword {
    constructor(
        /**
         * @summary `type_reference`.
         * @public
         * @readonly
         */
        readonly type_reference: DefinedType,
        /**
         * @summary `field`.
         * @public
         * @readonly
         */
        readonly field: Identifier
    ) {}

    /**
     * @summary Restructures an object into a Context_keyword
     * @description
     *
     * This takes an `object` and converts it to a `Context_keyword`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context_keyword`.
     * @returns {Context_keyword}
     */
    public static _from_object(
        _o: { [_K in keyof Context_keyword]: Context_keyword[_K] }
    ): Context_keyword {
        return new Context_keyword(_o.type_reference, _o.field);
    }
}


/**
 * @summary The Leading Root Component Types of Context_keyword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context_keyword: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type-reference',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'field',
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
];


/**
 * @summary The Trailing Root Component Types of Context_keyword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context_keyword: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Context_keyword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context_keyword: $.ComponentSpec[] = [];


let _cached_decoder_for_Context_keyword: $.ASN1Decoder<Context_keyword> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Context_keyword
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_keyword} The decoded data structure.
 */
export function _decode_Context_keyword(el: _Element): Context_keyword {
    if (!_cached_decoder_for_Context_keyword) {
        _cached_decoder_for_Context_keyword = function (
            el: _Element
        ): Context_keyword {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Context-keyword contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'type-reference';
            sequence[1].name = 'field';
            let type_reference!: DefinedType;
            let field!: Identifier;
            type_reference = _decode_DefinedType(sequence[0]);
            field = _decode_Identifier(sequence[1]);
            return new Context_keyword(type_reference, field);
        };
    }
    return _cached_decoder_for_Context_keyword(el);
}


let _cached_encoder_for_Context_keyword: $.ASN1Encoder<Context_keyword> | null = null;


/**
 * @summary Encodes a(n) Context_keyword into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_keyword, encoded as an ASN.1 Element.
 */
export function _encode_Context_keyword(
    value: Context_keyword,
    elGetter: $.ASN1Encoder<Context_keyword>
): _Element {
    if (!_cached_encoder_for_Context_keyword) {
        _cached_encoder_for_Context_keyword = function (
            value: Context_keyword        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DefinedType(
                            value.type_reference,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Identifier(value.field, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Context_keyword(value, elGetter);
}


/* eslint-enable */
