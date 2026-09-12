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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary Reset_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reset-Request ::= SEQUENCE {
 *    programInvocationName      [0] IMPLICIT Identifier    }
 * ```
 * 
 * @class
 */
export
class Reset_Request {
    constructor (
        /**
         * @summary `programInvocationName`.
         * @public
         * @readonly
         */
        readonly programInvocationName: Identifier
    ) {}

    /**
     * @summary Restructures an object into a Reset_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Reset_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Reset_Request`.
     * @returns {Reset_Request}
     */
    public static _from_object (_o: { [_K in keyof (Reset_Request)]: (Reset_Request)[_K] }): Reset_Request {
        return new Reset_Request(_o.programInvocationName);
    }


}

/**
 * @summary The Leading Root Component Types of Reset_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Reset_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationName", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Reset_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Reset_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Reset_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Reset_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Reset_Request: $.ASN1Decoder<Reset_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reset_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reset_Request (el: _Element): Reset_Request {
    if (!_cached_decoder_for_Reset_Request) { _cached_decoder_for_Reset_Request = function (el: _Element): Reset_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Reset-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "programInvocationName";
    let programInvocationName!: Identifier;
    programInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    return new Reset_Request(
        programInvocationName,

    );
}; }
    return _cached_decoder_for_Reset_Request(el);
}

let _cached_encoder_for_Reset_Request: $.ASN1Encoder<Reset_Request> | null = null;

/**
 * @summary Encodes a(n) Reset_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reset_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Reset_Request (value: Reset_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reset_Request) { _cached_encoder_for_Reset_Request = function (value: Reset_Request, elGetter: $.ASN1Encoder<Reset_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocationName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Reset_Request(value, elGetter);
}


/* eslint-enable */
