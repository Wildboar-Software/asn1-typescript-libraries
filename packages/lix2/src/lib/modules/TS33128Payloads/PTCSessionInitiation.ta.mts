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
import { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
// export { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
import { MultipleParticipantPresenceStatus, _decode_MultipleParticipantPresenceStatus, _encode_MultipleParticipantPresenceStatus } from "../TS33128Payloads/MultipleParticipantPresenceStatus.ta.mjs";
// export { MultipleParticipantPresenceStatus, _decode_MultipleParticipantPresenceStatus, _encode_MultipleParticipantPresenceStatus } from "../TS33128Payloads/MultipleParticipantPresenceStatus.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary PTCSessionInitiation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionInitiation ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCServerURI                  [3] UTF8String,
 *     pTCSessionInfo                [4] PTCSessionInfo,
 *     pTCOriginatingID              [5] PTCTargetInformation,
 *     pTCParticipants               [6] SEQUENCE OF PTCTargetInformation OPTIONAL,
 *     pTCParticipantPresenceStatus  [7] MultipleParticipantPresenceStatus OPTIONAL,
 *     location                      [8] Location OPTIONAL,
 *     pTCBearerCapability           [9] UTF8String OPTIONAL,
 *     pTCHost                       [10] PTCTargetInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCSessionInitiation {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCDirection`.
         * @public
         * @readonly
         */
        readonly pTCDirection: Direction,
        /**
         * @summary `pTCServerURI`.
         * @public
         * @readonly
         */
        readonly pTCServerURI: UTF8String,
        /**
         * @summary `pTCSessionInfo`.
         * @public
         * @readonly
         */
        readonly pTCSessionInfo: PTCSessionInfo,
        /**
         * @summary `pTCOriginatingID`.
         * @public
         * @readonly
         */
        readonly pTCOriginatingID: PTCTargetInformation,
        /**
         * @summary `pTCParticipants`.
         * @public
         * @readonly
         */
        readonly pTCParticipants: OPTIONAL<PTCTargetInformation[]>,
        /**
         * @summary `pTCParticipantPresenceStatus`.
         * @public
         * @readonly
         */
        readonly pTCParticipantPresenceStatus: OPTIONAL<MultipleParticipantPresenceStatus>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `pTCBearerCapability`.
         * @public
         * @readonly
         */
        readonly pTCBearerCapability: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCHost`.
         * @public
         * @readonly
         */
        readonly pTCHost: OPTIONAL<PTCTargetInformation>
    ) {}

    /**
     * @summary Restructures an object into a PTCSessionInitiation
     * @description
     * 
     * This takes an `object` and converts it to a `PTCSessionInitiation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCSessionInitiation`.
     * @returns {PTCSessionInitiation}
     */
    public static _from_object (_o: { [_K in keyof (PTCSessionInitiation)]: (PTCSessionInitiation)[_K] }): PTCSessionInitiation {
        return new PTCSessionInitiation(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCServerURI, _o.pTCSessionInfo, _o.pTCOriginatingID, _o.pTCParticipants, _o.pTCParticipantPresenceStatus, _o.location, _o.pTCBearerCapability, _o.pTCHost);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCSessionInitiation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCSessionInitiation: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCServerURI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCOriginatingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCParticipants", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCParticipantPresenceStatus", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pTCBearerCapability", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("pTCHost", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PTCSessionInitiation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCSessionInitiation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCSessionInitiation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCSessionInitiation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCSessionInitiation: $.ASN1Decoder<PTCSessionInitiation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionInitiation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionInitiation (el: _Element): PTCSessionInitiation {
    if (!_cached_decoder_for_PTCSessionInitiation) { _cached_decoder_for_PTCSessionInitiation = function (el: _Element): PTCSessionInitiation {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCServerURI!: UTF8String;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCOriginatingID!: PTCTargetInformation;
    let pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    let pTCParticipantPresenceStatus: OPTIONAL<MultipleParticipantPresenceStatus>;
    let location: OPTIONAL<Location>;
    let pTCBearerCapability: OPTIONAL<UTF8String>;
    let pTCHost: OPTIONAL<PTCTargetInformation>;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCServerURI": (_el: _Element): void => { pTCServerURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCOriginatingID": (_el: _Element): void => { pTCOriginatingID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCParticipants": (_el: _Element): void => { pTCParticipants = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "pTCParticipantPresenceStatus": (_el: _Element): void => { pTCParticipantPresenceStatus = $._decode_implicit<MultipleParticipantPresenceStatus>(() => _decode_MultipleParticipantPresenceStatus)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "pTCBearerCapability": (_el: _Element): void => { pTCBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCHost": (_el: _Element): void => { pTCHost = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCSessionInitiation,
        _extension_additions_list_spec_for_PTCSessionInitiation,
        _root_component_type_list_2_spec_for_PTCSessionInitiation,
        undefined,
    );
    return new PTCSessionInitiation(
        pTCTargetInformation,
        pTCDirection,
        pTCServerURI,
        pTCSessionInfo,
        pTCOriginatingID,
        pTCParticipants,
        pTCParticipantPresenceStatus,
        location,
        pTCBearerCapability,
        pTCHost
    );
}; }
    return _cached_decoder_for_PTCSessionInitiation(el);
}

let _cached_encoder_for_PTCSessionInitiation: $.ASN1Encoder<PTCSessionInitiation> | null = null;

/**
 * @summary Encodes a(n) PTCSessionInitiation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionInitiation, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionInitiation (value: PTCSessionInitiation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionInitiation) { _cached_encoder_for_PTCSessionInitiation = function (value: PTCSessionInitiation, elGetter: $.ASN1Encoder<PTCSessionInitiation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PTCTargetInformation, $.BER)(value.pTCOriginatingID, $.BER),
            /* IF_ABSENT  */ ((value.pTCParticipants === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCParticipants, $.BER)),
            /* IF_ABSENT  */ ((value.pTCParticipantPresenceStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MultipleParticipantPresenceStatus, $.BER)(value.pTCParticipantPresenceStatus, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.pTCBearerCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.pTCBearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.pTCHost === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_PTCTargetInformation, $.BER)(value.pTCHost, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCSessionInitiation(value, elGetter);
}


/* eslint-enable */
