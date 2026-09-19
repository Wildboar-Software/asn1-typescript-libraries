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
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { EventEntries, _decode_EventEntries, _encode_EventEntries } from "../RSPDefinitions/EventEntries.ta.mjs";
// export { EventEntries, _decode_EventEntries, _encode_EventEntries } from "../RSPDefinitions/EventEntries.ta.mjs";


/**
 * @summary AuthenticateClientOkEs11
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientOkEs11 ::= SEQUENCE {
 *     transactionId TransactionId,
 *     eventEntries SEQUENCE OF EventEntries
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateClientOkEs11 {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `eventEntries`.
         * @public
         * @readonly
         */
        readonly eventEntries: EventEntries[]
    ) {}

    /**
     * @summary Restructures an object into a AuthenticateClientOkEs11
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticateClientOkEs11`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticateClientOkEs11`.
     * @returns {AuthenticateClientOkEs11}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticateClientOkEs11)]: (AuthenticateClientOkEs11)[_K] }): AuthenticateClientOkEs11 {
        return new AuthenticateClientOkEs11(_o.transactionId, _o.eventEntries);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticateClientOkEs11
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticateClientOkEs11: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventEntries", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AuthenticateClientOkEs11
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticateClientOkEs11: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticateClientOkEs11
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticateClientOkEs11: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticateClientOkEs11: $.ASN1Decoder<AuthenticateClientOkEs11> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientOkEs11
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientOkEs11 (el: _Element): AuthenticateClientOkEs11 {
    if (!_cached_decoder_for_AuthenticateClientOkEs11) { _cached_decoder_for_AuthenticateClientOkEs11 = function (el: _Element): AuthenticateClientOkEs11 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AuthenticateClientOkEs11 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "eventEntries";
    let transactionId!: TransactionId;
    let eventEntries!: EventEntries[];
    transactionId = _decode_TransactionId(sequence[0]);
    eventEntries = $._decodeSequenceOf<EventEntries>(() => _decode_EventEntries)(sequence[1]);
    return new AuthenticateClientOkEs11(
        transactionId,
        eventEntries,

    );
}; }
    return _cached_decoder_for_AuthenticateClientOkEs11(el);
}

let _cached_encoder_for_AuthenticateClientOkEs11: $.ASN1Encoder<AuthenticateClientOkEs11> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientOkEs11 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientOkEs11, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientOkEs11 (value: AuthenticateClientOkEs11, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientOkEs11) { _cached_encoder_for_AuthenticateClientOkEs11 = function (value: AuthenticateClientOkEs11, elGetter: $.ASN1Encoder<AuthenticateClientOkEs11>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TransactionId(value.transactionId, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<EventEntries>(() => _encode_EventEntries, $.BER)(value.eventEntries, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticateClientOkEs11(value, elGetter);
}


/* eslint-enable */
