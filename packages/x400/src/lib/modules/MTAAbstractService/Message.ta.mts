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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    MessageTransferEnvelope,
    _decode_MessageTransferEnvelope,
    _encode_MessageTransferEnvelope,
} from '../MTAAbstractService/MessageTransferEnvelope.ta.mjs';
import {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
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
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Message: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Message: $.ComponentSpec[] = [];

let _cached_decoder_for_Message: $.ASN1Decoder<Message> | null = null;

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

let _cached_encoder_for_Message: $.ASN1Encoder<Message> | null = null;

/**
 * @summary Encodes a(n) Message into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Message, encoded as an ASN.1 Element.
 */
export function _encode_Message(
    value: Message,
    elGetter: $.ASN1Encoder<Message>
) {
    if (!_cached_encoder_for_Message) {
        _cached_encoder_for_Message = function (
            value: Message        ): _Element {
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


/* eslint-enable */
