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
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";
// export { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";


/**
 * @summary PTCTargetPresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTargetPresence ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCTargetPresenceStatus       [2] PTCParticipantPresenceStatus
 * }
 * ```
 * 
 * @class
 */
export
class PTCTargetPresence {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCTargetPresenceStatus`.
         * @public
         * @readonly
         */
        readonly pTCTargetPresenceStatus: PTCParticipantPresenceStatus
    ) {}

    /**
     * @summary Restructures an object into a PTCTargetPresence
     * @description
     * 
     * This takes an `object` and converts it to a `PTCTargetPresence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCTargetPresence`.
     * @returns {PTCTargetPresence}
     */
    public static _from_object (_o: { [_K in keyof (PTCTargetPresence)]: (PTCTargetPresence)[_K] }): PTCTargetPresence {
        return new PTCTargetPresence(_o.pTCTargetInformation, _o.pTCTargetPresenceStatus);
    }


}

/**
 * @summary The Leading Root Component Types of PTCTargetPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCTargetPresence: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCTargetPresenceStatus", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PTCTargetPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCTargetPresence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCTargetPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCTargetPresence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCTargetPresence: $.ASN1Decoder<PTCTargetPresence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCTargetPresence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCTargetPresence (el: _Element): PTCTargetPresence {
    if (!_cached_decoder_for_PTCTargetPresence) { _cached_decoder_for_PTCTargetPresence = function (el: _Element): PTCTargetPresence {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PTCTargetPresence contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCTargetInformation";
    sequence[1].name = "pTCTargetPresenceStatus";
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCTargetPresenceStatus!: PTCParticipantPresenceStatus;
    pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCTargetPresenceStatus = $._decode_implicit<PTCParticipantPresenceStatus>(() => _decode_PTCParticipantPresenceStatus)(sequence[1]);
    return new PTCTargetPresence(
        pTCTargetInformation,
        pTCTargetPresenceStatus,

    );
}; }
    return _cached_decoder_for_PTCTargetPresence(el);
}

let _cached_encoder_for_PTCTargetPresence: $.ASN1Encoder<PTCTargetPresence> | null = null;

/**
 * @summary Encodes a(n) PTCTargetPresence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCTargetPresence, encoded as an ASN.1 Element.
 */
export
function _encode_PTCTargetPresence (value: PTCTargetPresence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCTargetPresence) { _cached_encoder_for_PTCTargetPresence = function (value: PTCTargetPresence, elGetter: $.ASN1Encoder<PTCTargetPresence>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCParticipantPresenceStatus, $.BER)(value.pTCTargetPresenceStatus, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCTargetPresence(value, elGetter);
}


/* eslint-enable */
