/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { TOKEN } from '../MTSAbstractService/TOKEN.oca.js';
export { TOKEN } from '../MTSAbstractService/TOKEN.oca.js';
import { TokensTable } from '../MTSAbstractService/TokensTable.osa.js';
export { TokensTable } from '../MTSAbstractService/TokensTable.osa.js';

/* START_OF_SYMBOL_DEFINITION Token */
/**
 * @summary Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Token ::= SEQUENCE {
 *   token-type-identifier  [0]  TOKEN.&id({TokensTable}),
 *   token
 *     [1]  TOKEN.&Type({TokensTable}{@token-type-identifier})
 * }
 * ```
 *
 * @class
 */
export class Token {
    constructor(
        /**
         * @summary `token_type_identifier`.
         * @public
         * @readonly
         */
        readonly token_type_identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `token`.
         * @public
         * @readonly
         */
        readonly token: _Element
    ) {}

    /**
     * @summary Restructures an object into a Token
     * @description
     *
     * This takes an `object` and converts it to a `Token`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Token`.
     * @returns {Token}
     */
    public static _from_object(_o: { [_K in keyof Token]: Token[_K] }): Token {
        return new Token(_o.token_type_identifier, _o.token);
    }
}
/* END_OF_SYMBOL_DEFINITION Token */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Token */
/**
 * @summary The Leading Root Component Types of Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Token: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'token-type-identifier',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'token',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Token */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Token */
/**
 * @summary The Trailing Root Component Types of Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Token: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Token */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Token */
/**
 * @summary The Extension Addition Component Types of Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Token: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Token */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Token */
let _cached_decoder_for_Token: $.ASN1Decoder<Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Token */

/* START_OF_SYMBOL_DEFINITION _decode_Token */
/**
 * @summary Decodes an ASN.1 element into a(n) Token
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Token} The decoded data structure.
 */
export function _decode_Token(el: _Element) {
    if (!_cached_decoder_for_Token) {
        _cached_decoder_for_Token = function (el: _Element): Token {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Token contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'token-type-identifier';
            sequence[1].name = 'token';
            let token_type_identifier!: OBJECT_IDENTIFIER;
            let token!: _Element;
            token_type_identifier = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            token = $._decode_implicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new Token(token_type_identifier, token);
        };
    }
    return _cached_decoder_for_Token(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Token */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Token */
let _cached_encoder_for_Token: $.ASN1Encoder<Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Token */

/* START_OF_SYMBOL_DEFINITION _encode_Token */
/**
 * @summary Encodes a(n) Token into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Token, encoded as an ASN.1 Element.
 */
export function _encode_Token(value: Token, elGetter: $.ASN1Encoder<Token>) {
    if (!_cached_encoder_for_Token) {
        _cached_encoder_for_Token = function (
            value: Token,
            elGetter: $.ASN1Encoder<Token>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.token_type_identifier, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeAny,
                            $.BER
                        )(value.token, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Token(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Token */

/* eslint-enable */
