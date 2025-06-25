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
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
import {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
/**
 * @summary MessageSubmissionArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionArgument ::= SEQUENCE {
 *   envelope  MessageSubmissionEnvelope,
 *   content   Content
 * }
 * ```
 *
 * @class
 */
export class MessageSubmissionArgument {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageSubmissionEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: Content
    ) {}

    /**
     * @summary Restructures an object into a MessageSubmissionArgument
     * @description
     *
     * This takes an `object` and converts it to a `MessageSubmissionArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageSubmissionArgument`.
     * @returns {MessageSubmissionArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageSubmissionArgument]: MessageSubmissionArgument[_K];
        }
    ): MessageSubmissionArgument {
        return new MessageSubmissionArgument(_o.envelope, _o.content);
    }
}

/**
 * @summary The Leading Root Component Types of MessageSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageSubmissionArgument: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of MessageSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageSubmissionArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageSubmissionArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageSubmissionArgument: $.ASN1Decoder<MessageSubmissionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionArgument} The decoded data structure.
 */
export function _decode_MessageSubmissionArgument(el: _Element): MessageSubmissionArgument {
    if (!_cached_decoder_for_MessageSubmissionArgument) {
        _cached_decoder_for_MessageSubmissionArgument = function (
            el: _Element
        ): MessageSubmissionArgument {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MessageSubmissionArgument contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'envelope';
            sequence[1].name = 'content';
            let envelope!: MessageSubmissionEnvelope;
            let content!: Content;
            envelope = _decode_MessageSubmissionEnvelope(sequence[0]);
            content = _decode_Content(sequence[1]);
            return new MessageSubmissionArgument(envelope, content);
        };
    }
    return _cached_decoder_for_MessageSubmissionArgument(el);
}

let _cached_encoder_for_MessageSubmissionArgument: $.ASN1Encoder<MessageSubmissionArgument> | null = null;

/**
 * @summary Encodes a(n) MessageSubmissionArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionArgument, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionArgument(
    value: MessageSubmissionArgument,
    elGetter: $.ASN1Encoder<MessageSubmissionArgument>
): _Element {
    if (!_cached_encoder_for_MessageSubmissionArgument) {
        _cached_encoder_for_MessageSubmissionArgument = function (
            value: MessageSubmissionArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageSubmissionEnvelope(
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
    return _cached_encoder_for_MessageSubmissionArgument(value, elGetter);
}


/* eslint-enable */
