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
import {
    MessageTransferEnvelope,
    _decode_MessageTransferEnvelope,
    _encode_MessageTransferEnvelope,
} from '../MTAAbstractService/MessageTransferEnvelope.ta';
export {
    MessageTransferEnvelope,
    _decode_MessageTransferEnvelope,
    _encode_MessageTransferEnvelope,
} from '../MTAAbstractService/MessageTransferEnvelope.ta';
import {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta';
export {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta';

/* START_OF_SYMBOL_DEFINITION Message */
/**
 * @summary Message
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Message ::= SEQUENCE {envelope  MessageTransferEnvelope,
 *                       content   Content
 * }
 * ```
 *
 * @class
 */
export class Message {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageTransferEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: Content
    ) {}

    /**
     * @summary Restructures an object into a Message
     * @description
     *
     * This takes an `object` and converts it to a `Message`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Message`.
     * @returns {Message}
     */
    public static _from_object(
        _o: { [_K in keyof Message]: Message[_K] }
    ): Message {
        return new Message(_o.envelope, _o.content);
    }
}
/* END_OF_SYMBOL_DEFINITION Message */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Message */
/**
 * @summary The Leading Root Component Types of Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Message: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'envelope',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Message */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Message */
/**
 * @summary The Trailing Root Component Types of Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Message: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Message */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Message */
/**
 * @summary The Extension Addition Component Types of Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Message: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Message */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Message */
let _cached_decoder_for_Message: $.ASN1Decoder<Message> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Message */

/* START_OF_SYMBOL_DEFINITION _decode_Message */
/**
 * @summary Decodes an ASN.1 element into a(n) Message
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Message} The decoded data structure.
 */
export function _decode_Message(el: _Element) {
    if (!_cached_decoder_for_Message) {
        _cached_decoder_for_Message = function (el: _Element): Message {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Message contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'envelope';
            sequence[1].name = 'content';
            let envelope!: MessageTransferEnvelope;
            let content!: Content;
            envelope = _decode_MessageTransferEnvelope(sequence[0]);
            content = _decode_Content(sequence[1]);
            return new Message(envelope, content);
        };
    }
    return _cached_decoder_for_Message(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Message */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Message */
let _cached_encoder_for_Message: $.ASN1Encoder<Message> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Message */

/* START_OF_SYMBOL_DEFINITION _encode_Message */
/**
 * @summary Encodes a(n) Message into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Message, encoded as an ASN.1 Element.
 */
export function _encode_Message(
    value: Message,
    elGetter: $.ASN1Encoder<Message>
) {
    if (!_cached_encoder_for_Message) {
        _cached_encoder_for_Message = function (
            value: Message,
            elGetter: $.ASN1Encoder<Message>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageTransferEnvelope(
                            value.envelope,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Content(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Message(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Message */

/* eslint-enable */
