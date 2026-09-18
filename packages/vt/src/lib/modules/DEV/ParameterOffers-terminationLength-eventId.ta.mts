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


/**
 * @summary ParameterOffers_terminationLength_eventId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-terminationLength-eventId ::= SEQUENCE {
 *     integer G.IntegerOffer OPTIONAL,
 *     nul     NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers_terminationLength_eventId {
    constructor (
        /**
         * @summary `integer`.
         * @public
         * @readonly
         */
        readonly integer: OPTIONAL<G.IntegerOffer>,
        /**
         * @summary `nul`.
         * @public
         * @readonly
         */
        readonly nul: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers_terminationLength_eventId
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers_terminationLength_eventId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers_terminationLength_eventId`.
     * @returns {ParameterOffers_terminationLength_eventId}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers_terminationLength_eventId)]: (ParameterOffers_terminationLength_eventId)[_K] }): ParameterOffers_terminationLength_eventId {
        return new ParameterOffers_terminationLength_eventId(_o.integer, _o.nul);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers_terminationLength_eventId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers_terminationLength_eventId: $.ComponentSpec[] = [
    new $.ComponentSpec("integer", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("nul", true, $.hasTag(_TagClass.universal, 5))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers_terminationLength_eventId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers_terminationLength_eventId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers_terminationLength_eventId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers_terminationLength_eventId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers_terminationLength_eventId: $.ASN1Decoder<ParameterOffers_terminationLength_eventId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_terminationLength_eventId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_terminationLength_eventId (el: _Element): ParameterOffers_terminationLength_eventId {
    if (!_cached_decoder_for_ParameterOffers_terminationLength_eventId) { _cached_decoder_for_ParameterOffers_terminationLength_eventId = function (el: _Element): ParameterOffers_terminationLength_eventId {
    let integer: OPTIONAL<G.IntegerOffer>;
    let nul: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "integer": (_el: _Element): void => { integer = G._decode_IntegerOffer(_el); },
        "nul": (_el: _Element): void => { nul = $._decodeNull(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterOffers_terminationLength_eventId,
        _extension_additions_list_spec_for_ParameterOffers_terminationLength_eventId,
        _root_component_type_list_2_spec_for_ParameterOffers_terminationLength_eventId,
        undefined,
    );
    return new ParameterOffers_terminationLength_eventId(
        integer,
        nul
    );
}; }
    return _cached_decoder_for_ParameterOffers_terminationLength_eventId(el);
}

let _cached_encoder_for_ParameterOffers_terminationLength_eventId: $.ASN1Encoder<ParameterOffers_terminationLength_eventId> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_terminationLength_eventId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_terminationLength_eventId, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_terminationLength_eventId (value: ParameterOffers_terminationLength_eventId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_terminationLength_eventId) { _cached_encoder_for_ParameterOffers_terminationLength_eventId = function (value: ParameterOffers_terminationLength_eventId, elGetter: $.ASN1Encoder<ParameterOffers_terminationLength_eventId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.integer === undefined) ? undefined : G._encode_IntegerOffer(value.integer, $.BER)),
            /* IF_ABSENT  */ ((value.nul === undefined) ? undefined : $._encodeNull(value.nul, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers_terminationLength_eventId(value, elGetter);
}


/* eslint-enable */
