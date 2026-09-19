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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TypeMessage, TypeMessage_exercise /* IMPORTED_LONG_NAMED_INTEGER */, exercise /* IMPORTED_SHORT_NAMED_INTEGER */, TypeMessage_operation /* IMPORTED_LONG_NAMED_INTEGER */, operation /* IMPORTED_SHORT_NAMED_INTEGER */, TypeMessage_project /* IMPORTED_LONG_NAMED_INTEGER */, project /* IMPORTED_SHORT_NAMED_INTEGER */, TypeMessage_drill /* IMPORTED_LONG_NAMED_INTEGER */, drill /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TypeMessage, _encode_TypeMessage } from "../MMSHeadingExtensions/TypeMessage.ta.mjs";
// export { TypeMessage, TypeMessage_exercise /* IMPORTED_LONG_NAMED_INTEGER */, exercise /* IMPORTED_SHORT_NAMED_INTEGER */, TypeMessage_operation /* IMPORTED_LONG_NAMED_INTEGER */, operation /* IMPORTED_SHORT_NAMED_INTEGER */, TypeMessage_project /* IMPORTED_LONG_NAMED_INTEGER */, project /* IMPORTED_SHORT_NAMED_INTEGER */, TypeMessage_drill /* IMPORTED_LONG_NAMED_INTEGER */, drill /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TypeMessage, _encode_TypeMessage } from "../MMSHeadingExtensions/TypeMessage.ta.mjs";
import { MessageIdentifier, _decode_MessageIdentifier, _encode_MessageIdentifier } from "../MMSHeadingExtensions/MessageIdentifier.ta.mjs";
// export { MessageIdentifier, _decode_MessageIdentifier, _encode_MessageIdentifier } from "../MMSHeadingExtensions/MessageIdentifier.ta.mjs";


/**
 * @summary MessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageType ::= SET {
 *   type        [0]  TypeMessage,
 *   identifier  [1]  MessageIdentifier OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MessageType {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: TypeMessage,
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OPTIONAL<MessageIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a MessageType
     * @description
     * 
     * This takes an `object` and converts it to a `MessageType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageType`.
     * @returns {MessageType}
     */
    public static _from_object (_o: { [_K in keyof (MessageType)]: (MessageType)[_K] }): MessageType {
        return new MessageType(_o.type_, _o.identifier);
    }


}

/**
 * @summary The Leading Root Component Types of MessageType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessageType: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("identifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MessageType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessageType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessageType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessageType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessageType: $.ASN1Decoder<MessageType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageType (el: _Element): MessageType {
    if (!_cached_decoder_for_MessageType) { _cached_decoder_for_MessageType = function (el: _Element): MessageType {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let type_!: TypeMessage;
    let identifier: OPTIONAL<MessageIdentifier>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<TypeMessage>(() => _decode_TypeMessage)(_el); },
        "identifier": (_el: _Element): void => { identifier = $._decode_implicit<MessageIdentifier>(() => _decode_MessageIdentifier)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MessageType,
        _extension_additions_list_spec_for_MessageType,
        _root_component_type_list_2_spec_for_MessageType,
        undefined,
    );
    return new MessageType( /* SET_CONSTRUCTOR_CALL */
        type_,
        identifier
    );
}; }
    return _cached_decoder_for_MessageType(el);
}

let _cached_encoder_for_MessageType: $.ASN1Encoder<MessageType> | null = null;

/**
 * @summary Encodes a(n) MessageType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageType, encoded as an ASN.1 Element.
 */
export
function _encode_MessageType (value: MessageType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageType) { _cached_encoder_for_MessageType = function (value: MessageType, elGetter: $.ASN1Encoder<MessageType>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TypeMessage, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.identifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MessageIdentifier, $.BER)(value.identifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MessageType(value, elGetter);
}


/* eslint-enable */
