/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type IA5String,
    type OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageID_text
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageID-text ::=
 * SEQUENCE {
 *   messageContent [0] IA5String(SIZE(minMessageContentLength..maxMessageContentLength)),
 *   attributes [1] OCTET STRING(SIZE(minAttributesLength..maxAttributesLength)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MessageID_text {
    /**
     * @summary `messageContent`.
     * @public
     * @readonly
     */
    readonly messageContent: IA5String;
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: OPTIONAL<OCTET_STRING>;

    constructor (
        messageContent: IA5String,
        attributes?: OPTIONAL<OCTET_STRING>
    ) {
        this.messageContent = messageContent;
        this.attributes = attributes;
    }

    /**
     * @summary Restructures an object into a MessageID_text
     * @description
     * 
     * This takes an `object` and converts it to a `MessageID_text`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageID_text`.
     * @returns {MessageID_text}
     */
    public static _from_object (_o: { [_K in keyof (MessageID_text)]: (MessageID_text)[_K] }): MessageID_text {
        return new MessageID_text(_o.messageContent, _o.attributes);
    }


}

/**
 * @summary The Leading Root Component Types of MessageID_text
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessageID_text: $.ComponentSpec[] = [
    new $.ComponentSpec("messageContent", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MessageID_text
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessageID_text: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessageID_text
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessageID_text: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessageID_text: $.ASN1Decoder<MessageID_text> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageID_text
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageID_text (el: _Element): MessageID_text {
    if (!_cached_decoder_for_MessageID_text) { _cached_decoder_for_MessageID_text = function (el: _Element): MessageID_text {
    let messageContent!: IA5String;
    let attributes: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "messageContent": (_el: _Element): void => { messageContent = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessageID_text,
        _extension_additions_list_spec_for_MessageID_text,
        _root_component_type_list_2_spec_for_MessageID_text,
        undefined,
    );
    return new MessageID_text(
        messageContent,
        attributes
    );
}; }
    return _cached_decoder_for_MessageID_text(el);
}

let _cached_encoder_for_MessageID_text: $.ASN1Encoder<MessageID_text> | null = null;

/**
 * @summary Encodes a(n) MessageID_text into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID_text, encoded as an ASN.1 Element.
 */
export
function _encode_MessageID_text (value: MessageID_text, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageID_text) { _cached_encoder_for_MessageID_text = function (value: MessageID_text, elGetter: $.ASN1Encoder<MessageID_text>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.messageContent, $.BER));
    if (value.attributes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.attributes, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MessageID_text(value, elGetter);
}


/* eslint-enable */
