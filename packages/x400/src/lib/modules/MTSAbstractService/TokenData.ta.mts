/* eslint-disable */
import {
    INTEGER,
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
/* START_OF_SYMBOL_DEFINITION TokenData */
/**
 * @summary TokenData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenData ::= SEQUENCE {
 *   type   [0]  TOKEN-DATA.&id({TokenDataTable}),
 *   value  [1]  TOKEN-DATA.&Type({TokenDataTable}{@type})
 * }
 * ```
 *
 * @class
 */
export class TokenData {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: INTEGER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a TokenData
     * @description
     *
     * This takes an `object` and converts it to a `TokenData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TokenData`.
     * @returns {TokenData}
     */
    public static _from_object(
        _o: { [_K in keyof TokenData]: TokenData[_K] }
    ): TokenData {
        return new TokenData(_o.type_, _o.value);
    }
}
/* END_OF_SYMBOL_DEFINITION TokenData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenData */
/**
 * @summary The Leading Root Component Types of TokenData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TokenData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'value',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenData */
/**
 * @summary The Trailing Root Component Types of TokenData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TokenData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenData */
/**
 * @summary The Extension Addition Component Types of TokenData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TokenData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenData */
let _cached_decoder_for_TokenData: $.ASN1Decoder<TokenData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenData */

/* START_OF_SYMBOL_DEFINITION _decode_TokenData */
/**
 * @summary Decodes an ASN.1 element into a(n) TokenData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenData} The decoded data structure.
 */
export function _decode_TokenData(el: _Element) {
    if (!_cached_decoder_for_TokenData) {
        _cached_decoder_for_TokenData = function (el: _Element): TokenData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TokenData contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'type';
            sequence[1].name = 'value';
            let type_!: INTEGER;
            let value!: _Element;
            type_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[0]
            );
            value = $._decode_implicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new TokenData(type_, value);
        };
    }
    return _cached_decoder_for_TokenData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TokenData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenData */
let _cached_encoder_for_TokenData: $.ASN1Encoder<TokenData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenData */

/* START_OF_SYMBOL_DEFINITION _encode_TokenData */
/**
 * @summary Encodes a(n) TokenData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenData, encoded as an ASN.1 Element.
 */
export function _encode_TokenData(
    value: TokenData,
    elGetter: $.ASN1Encoder<TokenData>
) {
    if (!_cached_encoder_for_TokenData) {
        _cached_encoder_for_TokenData = function (
            value: TokenData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.type_, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeAny,
                            $.BER
                        )(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TokenData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TokenData */

/* eslint-enable */
