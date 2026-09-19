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
import { PTCPresenceType, _enum_for_PTCPresenceType, PTCPresenceType_pTCClient /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCPresenceType_pTCGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCPresenceType, _encode_PTCPresenceType } from "../TS33128Payloads/PTCPresenceType.ta.mjs";
// export { PTCPresenceType, _enum_for_PTCPresenceType, PTCPresenceType_pTCClient /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCPresenceType_pTCGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCPresenceType, _encode_PTCPresenceType } from "../TS33128Payloads/PTCPresenceType.ta.mjs";


/**
 * @summary PTCParticipantPresenceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCParticipantPresenceStatus ::= SEQUENCE
 * {
 *     presenceID                 [1] PTCTargetInformation,
 *     presenceType               [2] PTCPresenceType,
 *     presenceStatus             [3] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class PTCParticipantPresenceStatus {
    constructor (
        /**
         * @summary `presenceID`.
         * @public
         * @readonly
         */
        readonly presenceID: PTCTargetInformation,
        /**
         * @summary `presenceType`.
         * @public
         * @readonly
         */
        readonly presenceType: PTCPresenceType,
        /**
         * @summary `presenceStatus`.
         * @public
         * @readonly
         */
        readonly presenceStatus: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a PTCParticipantPresenceStatus
     * @description
     * 
     * This takes an `object` and converts it to a `PTCParticipantPresenceStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCParticipantPresenceStatus`.
     * @returns {PTCParticipantPresenceStatus}
     */
    public static _from_object (_o: { [_K in keyof (PTCParticipantPresenceStatus)]: (PTCParticipantPresenceStatus)[_K] }): PTCParticipantPresenceStatus {
        return new PTCParticipantPresenceStatus(_o.presenceID, _o.presenceType, _o.presenceStatus);
    }

        /**
         * @summary The enum used as the type of the component `presenceType`
         * @public
         * @static
         */

    public static _enum_for_presenceType = _enum_for_PTCPresenceType;
}

/**
 * @summary The Leading Root Component Types of PTCParticipantPresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCParticipantPresenceStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("presenceType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("presenceStatus", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PTCParticipantPresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCParticipantPresenceStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCParticipantPresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCParticipantPresenceStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCParticipantPresenceStatus: $.ASN1Decoder<PTCParticipantPresenceStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCParticipantPresenceStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCParticipantPresenceStatus (el: _Element): PTCParticipantPresenceStatus {
    if (!_cached_decoder_for_PTCParticipantPresenceStatus) { _cached_decoder_for_PTCParticipantPresenceStatus = function (el: _Element): PTCParticipantPresenceStatus {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PTCParticipantPresenceStatus contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "presenceID";
    sequence[1].name = "presenceType";
    sequence[2].name = "presenceStatus";
    let presenceID!: PTCTargetInformation;
    let presenceType!: PTCPresenceType;
    let presenceStatus!: BOOLEAN;
    presenceID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    presenceType = $._decode_implicit<PTCPresenceType>(() => _decode_PTCPresenceType)(sequence[1]);
    presenceStatus = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    return new PTCParticipantPresenceStatus(
        presenceID,
        presenceType,
        presenceStatus,

    );
}; }
    return _cached_decoder_for_PTCParticipantPresenceStatus(el);
}

let _cached_encoder_for_PTCParticipantPresenceStatus: $.ASN1Encoder<PTCParticipantPresenceStatus> | null = null;

/**
 * @summary Encodes a(n) PTCParticipantPresenceStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCParticipantPresenceStatus, encoded as an ASN.1 Element.
 */
export
function _encode_PTCParticipantPresenceStatus (value: PTCParticipantPresenceStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCParticipantPresenceStatus) { _cached_encoder_for_PTCParticipantPresenceStatus = function (value: PTCParticipantPresenceStatus, elGetter: $.ASN1Encoder<PTCParticipantPresenceStatus>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.presenceID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCPresenceType, $.BER)(value.presenceType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.presenceStatus, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCParticipantPresenceStatus(value, elGetter);
}


/* eslint-enable */
