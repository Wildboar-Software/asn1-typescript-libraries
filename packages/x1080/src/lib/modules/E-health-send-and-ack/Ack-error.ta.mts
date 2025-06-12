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
import { ERROR } from '../E-health-send-and-ack/ERROR.oca.mjs';
export { ERROR } from '../E-health-send-and-ack/ERROR.oca.mjs';
import { Simple_Message_Errors } from '../E-health-send-and-ack/Simple-Message-Errors.osa.mjs';
export { Simple_Message_Errors } from '../E-health-send-and-ack/Simple-Message-Errors.osa.mjs';

/* START_OF_SYMBOL_DEFINITION Ack_error */
/**
 * @summary Ack_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ack-error ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Ack_error {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: INTEGER,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: _Element
    ) {}

    /**
     * @summary Restructures an object into a Ack_error
     * @description
     *
     * This takes an `object` and converts it to a `Ack_error`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ack_error`.
     * @returns {Ack_error}
     */
    public static _from_object(
        _o: { [_K in keyof Ack_error]: Ack_error[_K] }
    ): Ack_error {
        return new Ack_error(_o.code, _o.parameter);
    }
}
/* END_OF_SYMBOL_DEFINITION Ack_error */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Ack_error */
/**
 * @summary The Leading Root Component Types of Ack_error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Ack_error: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameter',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Ack_error */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Ack_error */
/**
 * @summary The Trailing Root Component Types of Ack_error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Ack_error: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Ack_error */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Ack_error */
/**
 * @summary The Extension Addition Component Types of Ack_error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Ack_error: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Ack_error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Ack_error */
let _cached_decoder_for_Ack_error: $.ASN1Decoder<Ack_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ack_error */

/* START_OF_SYMBOL_DEFINITION _decode_Ack_error */
/**
 * @summary Decodes an ASN.1 element into a(n) Ack_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ack_error} The decoded data structure.
 */
export function _decode_Ack_error(el: _Element) {
    if (!_cached_decoder_for_Ack_error) {
        _cached_decoder_for_Ack_error = function (el: _Element): Ack_error {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Ack-error contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'code';
            sequence[1].name = 'parameter';
            let code!: INTEGER;
            let parameter!: _Element;
            code = $._decodeInteger(sequence[0]);
            parameter = $._decodeAny(sequence[1]);
            return new Ack_error(code, parameter);
        };
    }
    return _cached_decoder_for_Ack_error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Ack_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ack_error */
let _cached_encoder_for_Ack_error: $.ASN1Encoder<Ack_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ack_error */

/* START_OF_SYMBOL_DEFINITION _encode_Ack_error */
/**
 * @summary Encodes a(n) Ack_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ack_error, encoded as an ASN.1 Element.
 */
export function _encode_Ack_error(
    value: Ack_error,
    elGetter: $.ASN1Encoder<Ack_error>
) {
    if (!_cached_encoder_for_Ack_error) {
        _cached_encoder_for_Ack_error = function (
            value: Ack_error,
            elGetter: $.ASN1Encoder<Ack_error>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.code, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Ack_error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Ack_error */

/* eslint-enable */
