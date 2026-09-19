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
import { NotifyMessageType, _decode_NotifyMessageType, _encode_NotifyMessageType } from "../GDT/NotifyMessageType.ta.mjs";
// export { NotifyMessageType, _decode_NotifyMessageType, _encode_NotifyMessageType } from "../GDT/NotifyMessageType.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary NotifyMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyMessage ::= SEQUENCE {
 *     message-type    NotifyMessageType,
 *     message         OCTET STRING OPTIONAL,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class NotifyMessage {
    constructor (
        /**
         * @summary `message_type`.
         * @public
         * @readonly
         */
        readonly message_type: NotifyMessageType,
        /**
         * @summary `message`.
         * @public
         * @readonly
         */
        readonly message: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NotifyMessage
     * @description
     * 
     * This takes an `object` and converts it to a `NotifyMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotifyMessage`.
     * @returns {NotifyMessage}
     */
    public static _from_object (_o: { [_K in keyof (NotifyMessage)]: (NotifyMessage)[_K] }): NotifyMessage {
        return new NotifyMessage(_o.message_type, _o.message, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotifyMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotifyMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("message-type", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("message", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of NotifyMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotifyMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotifyMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotifyMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotifyMessage: $.ASN1Decoder<NotifyMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotifyMessage (el: _Element): NotifyMessage {
    if (!_cached_decoder_for_NotifyMessage) { _cached_decoder_for_NotifyMessage = function (el: _Element): NotifyMessage {
    let message_type!: NotifyMessageType;
    let message: OPTIONAL<OCTET_STRING>;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "message-type": (_el: _Element): void => { message_type = _decode_NotifyMessageType(_el); },
        "message": (_el: _Element): void => { message = $._decodeOctetString(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotifyMessage,
        _extension_additions_list_spec_for_NotifyMessage,
        _root_component_type_list_2_spec_for_NotifyMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotifyMessage(
        message_type,
        message,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotifyMessage(el);
}

let _cached_encoder_for_NotifyMessage: $.ASN1Encoder<NotifyMessage> | null = null;

/**
 * @summary Encodes a(n) NotifyMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyMessage, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyMessage (value: NotifyMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotifyMessage) { _cached_encoder_for_NotifyMessage = function (value: NotifyMessage, elGetter: $.ASN1Encoder<NotifyMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NotifyMessageType(value.message_type, $.BER),
            /* IF_ABSENT  */ ((value.message === undefined) ? undefined : $._encodeOctetString(value.message, $.BER)),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotifyMessage(value, elGetter);
}


/* eslint-enable */
