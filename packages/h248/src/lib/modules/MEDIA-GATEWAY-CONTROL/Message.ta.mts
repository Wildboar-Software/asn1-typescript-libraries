/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MId, _decode_MId, _encode_MId } from "../MEDIA-GATEWAY-CONTROL/MId.ta.mjs";
// export { MId, _decode_MId, _encode_MId } from "../MEDIA-GATEWAY-CONTROL/MId.ta.mjs";
import { Message_messageBody, _decode_Message_messageBody, _encode_Message_messageBody } from "../MEDIA-GATEWAY-CONTROL/Message-messageBody.ta.mjs";
// export { Message_messageBody, _decode_Message_messageBody, _encode_Message_messageBody } from "../MEDIA-GATEWAY-CONTROL/Message-messageBody.ta.mjs";


/**
 * @summary Message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message ::= SEQUENCE
 *     {
 *         version            [0] INTEGER(0..99),
 *         -- The version of the protocol defined here is equal to 3.
 *         mId                [1] MId, -- Name/address of message originator
 *         messageBody        [2] CHOICE
 *         {
 *             messageError    [0] ErrorDescriptor,
 *             transactions    [1] SEQUENCE OF Transaction
 *         },
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class Message {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary `mId`.
         * @public
         * @readonly
         */
        readonly mId: MId,
        /**
         * @summary `messageBody`.
         * @public
         * @readonly
         */
        readonly messageBody: Message_messageBody,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
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
    public static _from_object (_o: { [_K in keyof (Message)]: (Message)[_K] }): Message {
        return new Message(_o.version, _o.mId, _o.messageBody, _o._unrecognizedExtensionsList);
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
export
const _root_component_type_list_1_spec_for_Message: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageBody", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Message
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Message: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Message
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Message: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Message: $.ASN1Decoder<Message> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Message
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Message (el: _Element): Message {
    if (!_cached_decoder_for_Message) { _cached_decoder_for_Message = function (el: _Element): Message {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("Message contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "mId";
    sequence[2].name = "messageBody";
    let version!: INTEGER;
    let mId!: MId;
    let messageBody!: Message_messageBody;
    version = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    mId = $._decode_explicit<MId>(() => _decode_MId)(sequence[1]);
    messageBody = $._decode_explicit<Message_messageBody>(() => _decode_Message_messageBody)(sequence[2]);
    return new Message(
        version,
        mId,
        messageBody,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_Message(el);
}

let _cached_encoder_for_Message: $.ASN1Encoder<Message> | null = null;

/**
 * @summary Encodes a(n) Message into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Message, encoded as an ASN.1 Element.
 */
export
function _encode_Message (value: Message, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Message) { _cached_encoder_for_Message = function (value: Message, elGetter: $.ASN1Encoder<Message>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MId, $.BER)(value.mId, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Message_messageBody, $.BER)(value.messageBody, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Message(value, elGetter);
}


/* eslint-enable */
