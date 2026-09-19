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
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../AIN-Parameters/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../AIN-Parameters/Timestamp.ta.mjs";


/**
 * @summary Outgoing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Outgoing ::= SEQUENCE{
 *         aINDigits AINDigits,
 *         timestamp Timestamp--See GR-246-CORE for values of this field.
 *     }
 * ```
 * 
 * @class
 */
export
class Outgoing {
    constructor (
        /**
         * @summary `aINDigits`.
         * @public
         * @readonly
         */
        readonly aINDigits: AINDigits,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: Timestamp
    ) {}

    /**
     * @summary Restructures an object into a Outgoing
     * @description
     * 
     * This takes an `object` and converts it to a `Outgoing`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Outgoing`.
     * @returns {Outgoing}
     */
    public static _from_object (_o: { [_K in keyof (Outgoing)]: (Outgoing)[_K] }): Outgoing {
        return new Outgoing(_o.aINDigits, _o.timestamp);
    }


}

/**
 * @summary The Leading Root Component Types of Outgoing
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Outgoing: $.ComponentSpec[] = [
    new $.ComponentSpec("aINDigits", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Outgoing
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Outgoing: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Outgoing
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Outgoing: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Outgoing: $.ASN1Decoder<Outgoing> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Outgoing
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Outgoing (el: _Element): Outgoing {
    if (!_cached_decoder_for_Outgoing) { _cached_decoder_for_Outgoing = function (el: _Element): Outgoing {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Outgoing contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aINDigits";
    sequence[1].name = "timestamp";
    let aINDigits!: AINDigits;
    let timestamp!: Timestamp;
    aINDigits = _decode_AINDigits(sequence[0]);
    timestamp = _decode_Timestamp(sequence[1]);
    return new Outgoing(
        aINDigits,
        timestamp,

    );
}; }
    return _cached_decoder_for_Outgoing(el);
}

let _cached_encoder_for_Outgoing: $.ASN1Encoder<Outgoing> | null = null;

/**
 * @summary Encodes a(n) Outgoing into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Outgoing, encoded as an ASN.1 Element.
 */
export
function _encode_Outgoing (value: Outgoing, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Outgoing) { _cached_encoder_for_Outgoing = function (value: Outgoing, elGetter: $.ASN1Encoder<Outgoing>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AINDigits(value.aINDigits, $.BER),
            /* REQUIRED   */ _encode_Timestamp(value.timestamp, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Outgoing(value, elGetter);
}


/* eslint-enable */
