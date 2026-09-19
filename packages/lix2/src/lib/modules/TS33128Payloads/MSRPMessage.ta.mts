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
import { EncapsulatedMSRP, _decode_EncapsulatedMSRP, _encode_EncapsulatedMSRP } from "../TS33128Payloads/EncapsulatedMSRP.ta.mjs";
// export { EncapsulatedMSRP, _decode_EncapsulatedMSRP, _encode_EncapsulatedMSRP } from "../TS33128Payloads/EncapsulatedMSRP.ta.mjs";


/**
 * @summary MSRPMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSRPMessage ::= SEQUENCE
 * {
 *     encapsulatedMSRP [1] EncapsulatedMSRP
 * }
 * ```
 * 
 * @class
 */
export
class MSRPMessage {
    constructor (
        /**
         * @summary `encapsulatedMSRP`.
         * @public
         * @readonly
         */
        readonly encapsulatedMSRP: EncapsulatedMSRP
    ) {}

    /**
     * @summary Restructures an object into a MSRPMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MSRPMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSRPMessage`.
     * @returns {MSRPMessage}
     */
    public static _from_object (_o: { [_K in keyof (MSRPMessage)]: (MSRPMessage)[_K] }): MSRPMessage {
        return new MSRPMessage(_o.encapsulatedMSRP);
    }


}

/**
 * @summary The Leading Root Component Types of MSRPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MSRPMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("encapsulatedMSRP", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MSRPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MSRPMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MSRPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MSRPMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MSRPMessage: $.ASN1Decoder<MSRPMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSRPMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSRPMessage (el: _Element): MSRPMessage {
    if (!_cached_decoder_for_MSRPMessage) { _cached_decoder_for_MSRPMessage = function (el: _Element): MSRPMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MSRPMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "encapsulatedMSRP";
    let encapsulatedMSRP!: EncapsulatedMSRP;
    encapsulatedMSRP = $._decode_implicit<EncapsulatedMSRP>(() => _decode_EncapsulatedMSRP)(sequence[0]);
    return new MSRPMessage(
        encapsulatedMSRP,

    );
}; }
    return _cached_decoder_for_MSRPMessage(el);
}

let _cached_encoder_for_MSRPMessage: $.ASN1Encoder<MSRPMessage> | null = null;

/**
 * @summary Encodes a(n) MSRPMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSRPMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MSRPMessage (value: MSRPMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSRPMessage) { _cached_encoder_for_MSRPMessage = function (value: MSRPMessage, elGetter: $.ASN1Encoder<MSRPMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EncapsulatedMSRP, $.BER)(value.encapsulatedMSRP, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MSRPMessage(value, elGetter);
}


/* eslint-enable */
