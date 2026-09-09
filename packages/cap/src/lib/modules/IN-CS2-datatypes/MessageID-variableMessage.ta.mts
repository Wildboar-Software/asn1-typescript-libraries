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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
import { VariablePart, _decode_VariablePart, _encode_VariablePart } from "../IN-CS2-datatypes/VariablePart.ta.mjs";
// export { VariablePart, _decode_VariablePart, _encode_VariablePart } from "../IN-CS2-datatypes/VariablePart.ta.mjs";


/**
 * @summary MessageID_variableMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageID-variableMessage ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class MessageID_variableMessage {
    constructor (
        /**
         * @summary `elementaryMessageID`.
         * @public
         * @readonly
         */
        readonly elementaryMessageID: Integer4,
        /**
         * @summary `variableParts`.
         * @public
         * @readonly
         */
        readonly variableParts: VariablePart[]
    ) {}

    /**
     * @summary Restructures an object into a MessageID_variableMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MessageID_variableMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageID_variableMessage`.
     * @returns {MessageID_variableMessage}
     */
    public static _from_object (_o: { [_K in keyof (MessageID_variableMessage)]: (MessageID_variableMessage)[_K] }): MessageID_variableMessage {
        return new MessageID_variableMessage(_o.elementaryMessageID, _o.variableParts);
    }


}

/**
 * @summary The Leading Root Component Types of MessageID_variableMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessageID_variableMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("elementaryMessageID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("variableParts", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MessageID_variableMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessageID_variableMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessageID_variableMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessageID_variableMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessageID_variableMessage: $.ASN1Decoder<MessageID_variableMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageID_variableMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageID_variableMessage (el: _Element): MessageID_variableMessage {
    if (!_cached_decoder_for_MessageID_variableMessage) { _cached_decoder_for_MessageID_variableMessage = function (el: _Element): MessageID_variableMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MessageID-variableMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "elementaryMessageID";
    sequence[1].name = "variableParts";
    let elementaryMessageID!: Integer4;
    let variableParts!: VariablePart[];
    elementaryMessageID = $._decode_implicit<Integer4>(() => _decode_Integer4)(sequence[0]);
    variableParts = $._decode_implicit<VariablePart[]>(() => $._decodeSequenceOf<VariablePart>(() => _decode_VariablePart))(sequence[1]);
    return new MessageID_variableMessage(
        elementaryMessageID,
        variableParts,

    );
}; }
    return _cached_decoder_for_MessageID_variableMessage(el);
}

let _cached_encoder_for_MessageID_variableMessage: $.ASN1Encoder<MessageID_variableMessage> | null = null;

/**
 * @summary Encodes a(n) MessageID_variableMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID_variableMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MessageID_variableMessage (value: MessageID_variableMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageID_variableMessage) { _cached_encoder_for_MessageID_variableMessage = function (value: MessageID_variableMessage, elGetter: $.ASN1Encoder<MessageID_variableMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER)(value.elementaryMessageID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<VariablePart>(() => _encode_VariablePart, $.BER), $.BER)(value.variableParts, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MessageID_variableMessage(value, elGetter);
}


/* eslint-enable */
