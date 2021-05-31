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
import * as $ from 'asn1-ts/dist/node/functional';
import { SIMPLE_MESSAGE } from '../E-health-send-and-ack/SIMPLE-MESSAGE.oca';
export { SIMPLE_MESSAGE } from '../E-health-send-and-ack/SIMPLE-MESSAGE.oca';
import { Simple_Messages } from '../E-health-send-and-ack/Simple-Messages.osa';
export { Simple_Messages } from '../E-health-send-and-ack/Simple-Messages.osa';

/* START_OF_SYMBOL_DEFINITION Identified_Simple_Message */
/**
 * @summary Identified_Simple_Message
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identified-Simple-Message ::= SEQUENCE {
 *   sm-Identifier  SIMPLE-MESSAGE.&id({Simple-Messages}),
 *   sm-Content     SIMPLE-MESSAGE.&Type({Simple-Messages}{@sm-Identifier})
 * }
 * ```
 *
 * @class
 */
export class Identified_Simple_Message {
    constructor(
        /**
         * @summary `sm_Identifier`.
         * @public
         * @readonly
         */
        readonly sm_Identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `sm_Content`.
         * @public
         * @readonly
         */
        readonly sm_Content: _Element
    ) {}

    /**
     * @summary Restructures an object into a Identified_Simple_Message
     * @description
     *
     * This takes an `object` and converts it to a `Identified_Simple_Message`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Identified_Simple_Message`.
     * @returns {Identified_Simple_Message}
     */
    public static _from_object(
        _o: {
            [_K in keyof Identified_Simple_Message]: Identified_Simple_Message[_K];
        }
    ): Identified_Simple_Message {
        return new Identified_Simple_Message(_o.sm_Identifier, _o.sm_Content);
    }
}
/* END_OF_SYMBOL_DEFINITION Identified_Simple_Message */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Identified_Simple_Message */
/**
 * @summary The Leading Root Component Types of Identified_Simple_Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Identified_Simple_Message: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sm-Identifier',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'sm-Content',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Identified_Simple_Message */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Identified_Simple_Message */
/**
 * @summary The Trailing Root Component Types of Identified_Simple_Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Identified_Simple_Message: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Identified_Simple_Message */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Identified_Simple_Message */
/**
 * @summary The Extension Addition Component Types of Identified_Simple_Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Identified_Simple_Message: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Identified_Simple_Message */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identified_Simple_Message */
let _cached_decoder_for_Identified_Simple_Message: $.ASN1Decoder<Identified_Simple_Message> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identified_Simple_Message */

/* START_OF_SYMBOL_DEFINITION _decode_Identified_Simple_Message */
/**
 * @summary Decodes an ASN.1 element into a(n) Identified_Simple_Message
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identified_Simple_Message} The decoded data structure.
 */
export function _decode_Identified_Simple_Message(el: _Element) {
    if (!_cached_decoder_for_Identified_Simple_Message) {
        _cached_decoder_for_Identified_Simple_Message = function (
            el: _Element
        ): Identified_Simple_Message {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Identified-Simple-Message contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'sm-Identifier';
            sequence[1].name = 'sm-Content';
            let sm_Identifier!: OBJECT_IDENTIFIER;
            let sm_Content!: _Element;
            sm_Identifier = $._decodeObjectIdentifier(sequence[0]);
            sm_Content = $._decodeAny(sequence[1]);
            return new Identified_Simple_Message(sm_Identifier, sm_Content);
        };
    }
    return _cached_decoder_for_Identified_Simple_Message(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Identified_Simple_Message */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identified_Simple_Message */
let _cached_encoder_for_Identified_Simple_Message: $.ASN1Encoder<Identified_Simple_Message> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identified_Simple_Message */

/* START_OF_SYMBOL_DEFINITION _encode_Identified_Simple_Message */
/**
 * @summary Encodes a(n) Identified_Simple_Message into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identified_Simple_Message, encoded as an ASN.1 Element.
 */
export function _encode_Identified_Simple_Message(
    value: Identified_Simple_Message,
    elGetter: $.ASN1Encoder<Identified_Simple_Message>
) {
    if (!_cached_encoder_for_Identified_Simple_Message) {
        _cached_encoder_for_Identified_Simple_Message = function (
            value: Identified_Simple_Message,
            elGetter: $.ASN1Encoder<Identified_Simple_Message>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.sm_Identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.sm_Content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Identified_Simple_Message(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Identified_Simple_Message */

/* eslint-enable */
