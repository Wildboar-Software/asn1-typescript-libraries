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
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
import { PayloadModifications, _decode_PayloadModifications, _encode_PayloadModifications } from "../TS33128Payloads/PayloadModifications.ta.mjs";
// export { PayloadModifications, _decode_PayloadModifications, _encode_PayloadModifications } from "../TS33128Payloads/PayloadModifications.ta.mjs";


/**
 * @summary ModifiedSIPMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifiedSIPMessage ::= SEQUENCE
 * {
 *     modifiedSIPContent [1] SIPMessage,
 *     modifications      [2] PayloadModifications
 * }
 * ```
 * 
 * @class
 */
export
class ModifiedSIPMessage {
    constructor (
        /**
         * @summary `modifiedSIPContent`.
         * @public
         * @readonly
         */
        readonly modifiedSIPContent: SIPMessage,
        /**
         * @summary `modifications`.
         * @public
         * @readonly
         */
        readonly modifications: PayloadModifications
    ) {}

    /**
     * @summary Restructures an object into a ModifiedSIPMessage
     * @description
     * 
     * This takes an `object` and converts it to a `ModifiedSIPMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifiedSIPMessage`.
     * @returns {ModifiedSIPMessage}
     */
    public static _from_object (_o: { [_K in keyof (ModifiedSIPMessage)]: (ModifiedSIPMessage)[_K] }): ModifiedSIPMessage {
        return new ModifiedSIPMessage(_o.modifiedSIPContent, _o.modifications);
    }


}

/**
 * @summary The Leading Root Component Types of ModifiedSIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModifiedSIPMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("modifiedSIPContent", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modifications", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ModifiedSIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModifiedSIPMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModifiedSIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModifiedSIPMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModifiedSIPMessage: $.ASN1Decoder<ModifiedSIPMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedSIPMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifiedSIPMessage (el: _Element): ModifiedSIPMessage {
    if (!_cached_decoder_for_ModifiedSIPMessage) { _cached_decoder_for_ModifiedSIPMessage = function (el: _Element): ModifiedSIPMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ModifiedSIPMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modifiedSIPContent";
    sequence[1].name = "modifications";
    let modifiedSIPContent!: SIPMessage;
    let modifications!: PayloadModifications;
    modifiedSIPContent = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(sequence[0]);
    modifications = $._decode_implicit<PayloadModifications>(() => _decode_PayloadModifications)(sequence[1]);
    return new ModifiedSIPMessage(
        modifiedSIPContent,
        modifications,

    );
}; }
    return _cached_decoder_for_ModifiedSIPMessage(el);
}

let _cached_encoder_for_ModifiedSIPMessage: $.ASN1Encoder<ModifiedSIPMessage> | null = null;

/**
 * @summary Encodes a(n) ModifiedSIPMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedSIPMessage, encoded as an ASN.1 Element.
 */
export
function _encode_ModifiedSIPMessage (value: ModifiedSIPMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifiedSIPMessage) { _cached_encoder_for_ModifiedSIPMessage = function (value: ModifiedSIPMessage, elGetter: $.ASN1Encoder<ModifiedSIPMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SIPMessage, $.BER)(value.modifiedSIPContent, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PayloadModifications, $.BER)(value.modifications, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModifiedSIPMessage(value, elGetter);
}


/* eslint-enable */
