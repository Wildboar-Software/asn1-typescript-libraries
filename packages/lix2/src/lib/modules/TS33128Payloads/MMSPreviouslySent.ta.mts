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
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary MMSPreviouslySent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPreviouslySent ::= SEQUENCE
 * {
 *     previouslySentByParty [1] MMSParty,
 *     sequenceNumber        [2] INTEGER,
 *     previousSendDateTime  [3] Timestamp
 * }
 * ```
 * 
 * @class
 */
export
class MMSPreviouslySent {
    constructor (
        /**
         * @summary `previouslySentByParty`.
         * @public
         * @readonly
         */
        readonly previouslySentByParty: MMSParty,
        /**
         * @summary `sequenceNumber`.
         * @public
         * @readonly
         */
        readonly sequenceNumber: INTEGER,
        /**
         * @summary `previousSendDateTime`.
         * @public
         * @readonly
         */
        readonly previousSendDateTime: Timestamp
    ) {}

    /**
     * @summary Restructures an object into a MMSPreviouslySent
     * @description
     * 
     * This takes an `object` and converts it to a `MMSPreviouslySent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSPreviouslySent`.
     * @returns {MMSPreviouslySent}
     */
    public static _from_object (_o: { [_K in keyof (MMSPreviouslySent)]: (MMSPreviouslySent)[_K] }): MMSPreviouslySent {
        return new MMSPreviouslySent(_o.previouslySentByParty, _o.sequenceNumber, _o.previousSendDateTime);
    }


}

/**
 * @summary The Leading Root Component Types of MMSPreviouslySent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSPreviouslySent: $.ComponentSpec[] = [
    new $.ComponentSpec("previouslySentByParty", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sequenceNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("previousSendDateTime", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MMSPreviouslySent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSPreviouslySent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSPreviouslySent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSPreviouslySent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSPreviouslySent: $.ASN1Decoder<MMSPreviouslySent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSPreviouslySent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSPreviouslySent (el: _Element): MMSPreviouslySent {
    if (!_cached_decoder_for_MMSPreviouslySent) { _cached_decoder_for_MMSPreviouslySent = function (el: _Element): MMSPreviouslySent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MMSPreviouslySent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "previouslySentByParty";
    sequence[1].name = "sequenceNumber";
    sequence[2].name = "previousSendDateTime";
    let previouslySentByParty!: MMSParty;
    let sequenceNumber!: INTEGER;
    let previousSendDateTime!: Timestamp;
    previouslySentByParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(sequence[0]);
    sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    previousSendDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(sequence[2]);
    return new MMSPreviouslySent(
        previouslySentByParty,
        sequenceNumber,
        previousSendDateTime,

    );
}; }
    return _cached_decoder_for_MMSPreviouslySent(el);
}

let _cached_encoder_for_MMSPreviouslySent: $.ASN1Encoder<MMSPreviouslySent> | null = null;

/**
 * @summary Encodes a(n) MMSPreviouslySent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSPreviouslySent, encoded as an ASN.1 Element.
 */
export
function _encode_MMSPreviouslySent (value: MMSPreviouslySent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSPreviouslySent) { _cached_encoder_for_MMSPreviouslySent = function (value: MMSPreviouslySent, elGetter: $.ASN1Encoder<MMSPreviouslySent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSParty, $.BER)(value.previouslySentByParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.previousSendDateTime, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSPreviouslySent(value, elGetter);
}


/* eslint-enable */
