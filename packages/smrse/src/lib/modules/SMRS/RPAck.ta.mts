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
import { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";
// export { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";


/**
 * @summary RPAck
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPAck ::= SEQUENCE {
 *     message-reference RP-MR,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RPAck {
    constructor (
        /**
         * @summary `message_reference`.
         * @public
         * @readonly
         */
        readonly message_reference: RP_MR,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RPAck
     * @description
     * 
     * This takes an `object` and converts it to a `RPAck`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RPAck`.
     * @returns {RPAck}
     */
    public static _from_object (_o: { [_K in keyof (RPAck)]: (RPAck)[_K] }): RPAck {
        return new RPAck(_o.message_reference, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RPAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RPAck: $.ComponentSpec[] = [
    new $.ComponentSpec("message-reference", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RPAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RPAck: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RPAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RPAck: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RPAck: $.ASN1Decoder<RPAck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPAck
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPAck (el: _Element): RPAck {
    if (!_cached_decoder_for_RPAck) { _cached_decoder_for_RPAck = function (el: _Element): RPAck {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("RPAck contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "message-reference";
    let message_reference!: RP_MR;
    message_reference = _decode_RP_MR(sequence[0]);
    return new RPAck(
        message_reference,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_RPAck(el);
}

let _cached_encoder_for_RPAck: $.ASN1Encoder<RPAck> | null = null;

/**
 * @summary Encodes a(n) RPAck into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPAck, encoded as an ASN.1 Element.
 */
export
function _encode_RPAck (value: RPAck, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPAck) { _cached_encoder_for_RPAck = function (value: RPAck, elGetter: $.ASN1Encoder<RPAck>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RP_MR(value.message_reference, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RPAck(value, elGetter);
}


/* eslint-enable */
