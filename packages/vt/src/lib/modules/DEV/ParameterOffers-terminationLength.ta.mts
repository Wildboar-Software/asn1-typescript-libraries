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
import { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
import { ParameterOffers_terminationLength_eventId, _decode_ParameterOffers_terminationLength_eventId, _encode_ParameterOffers_terminationLength_eventId } from "../DEV/ParameterOffers-terminationLength-eventId.ta.mjs";
// export { ParameterOffers_terminationLength_eventId, _decode_ParameterOffers_terminationLength_eventId, _encode_ParameterOffers_terminationLength_eventId } from "../DEV/ParameterOffers-terminationLength-eventId.ta.mjs";


/**
 * @summary ParameterOffers_terminationLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-terminationLength ::= SEQUENCE {
 *     length      [0] IMPLICIT G.IntegerOffer,
 *     eventId     [1] IMPLICIT SEQUENCE {
 *         integer G.IntegerOffer OPTIONAL,
 *         nul     NULL OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers_terminationLength {
    constructor (
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: G.IntegerOffer,
        /**
         * @summary `eventId`.
         * @public
         * @readonly
         */
        readonly eventId: ParameterOffers_terminationLength_eventId
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers_terminationLength
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers_terminationLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers_terminationLength`.
     * @returns {ParameterOffers_terminationLength}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers_terminationLength)]: (ParameterOffers_terminationLength)[_K] }): ParameterOffers_terminationLength {
        return new ParameterOffers_terminationLength(_o.length, _o.eventId);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers_terminationLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers_terminationLength: $.ComponentSpec[] = [
    new $.ComponentSpec("length", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventId", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers_terminationLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers_terminationLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers_terminationLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers_terminationLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers_terminationLength: $.ASN1Decoder<ParameterOffers_terminationLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_terminationLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_terminationLength (el: _Element): ParameterOffers_terminationLength {
    if (!_cached_decoder_for_ParameterOffers_terminationLength) { _cached_decoder_for_ParameterOffers_terminationLength = function (el: _Element): ParameterOffers_terminationLength {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ParameterOffers-terminationLength contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "length";
    sequence[1].name = "eventId";
    let length!: G.IntegerOffer;
    let eventId!: ParameterOffers_terminationLength_eventId;
    length = $._decode_implicit<G.IntegerOffer>(() => G._decode_IntegerOffer)(sequence[0]);
    eventId = $._decode_implicit<ParameterOffers_terminationLength_eventId>(() => _decode_ParameterOffers_terminationLength_eventId)(sequence[1]);
    return new ParameterOffers_terminationLength(
        length,
        eventId,

    );
}; }
    return _cached_decoder_for_ParameterOffers_terminationLength(el);
}

let _cached_encoder_for_ParameterOffers_terminationLength: $.ASN1Encoder<ParameterOffers_terminationLength> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_terminationLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_terminationLength, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_terminationLength (value: ParameterOffers_terminationLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_terminationLength) { _cached_encoder_for_ParameterOffers_terminationLength = function (value: ParameterOffers_terminationLength, elGetter: $.ASN1Encoder<ParameterOffers_terminationLength>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => G._encode_IntegerOffer, $.BER)(value.length, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ParameterOffers_terminationLength_eventId, $.BER)(value.eventId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers_terminationLength(value, elGetter);
}


/* eslint-enable */
