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
import { PTCFloorActivity, _enum_for_PTCFloorActivity, PTCFloorActivity_tBCPRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPDeny /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPDeny /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPIdle /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPIdle /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPTaken /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPTaken /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPRevoke /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRevoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPQueued /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPQueued /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCFloorActivity, _encode_PTCFloorActivity } from "../TS33128Payloads/PTCFloorActivity.ta.mjs";
// export { PTCFloorActivity, _enum_for_PTCFloorActivity, PTCFloorActivity_tBCPRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPDeny /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPDeny /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPIdle /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPIdle /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPTaken /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPTaken /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPRevoke /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRevoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPQueued /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPQueued /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCFloorActivity, _encode_PTCFloorActivity } from "../TS33128Payloads/PTCFloorActivity.ta.mjs";
import { PTCTBPriorityLevel, _enum_for_PTCTBPriorityLevel, PTCTBPriorityLevel_preEmptive /* IMPORTED_LONG_ENUMERATION_ITEM */, preEmptive /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_highPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, highPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_normalPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, normalPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_listenOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_PTCTBPriorityLevel, _encode_PTCTBPriorityLevel } from "../TS33128Payloads/PTCTBPriorityLevel.ta.mjs";
// export { PTCTBPriorityLevel, _enum_for_PTCTBPriorityLevel, PTCTBPriorityLevel_preEmptive /* IMPORTED_LONG_ENUMERATION_ITEM */, preEmptive /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_highPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, highPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_normalPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, normalPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_listenOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_PTCTBPriorityLevel, _encode_PTCTBPriorityLevel } from "../TS33128Payloads/PTCTBPriorityLevel.ta.mjs";
import { PTCTBReasonCode, _enum_for_PTCTBReasonCode, PTCTBReasonCode_noQueuingAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueuingAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_oneParticipantSession /* IMPORTED_LONG_ENUMERATION_ITEM */, oneParticipantSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_listenOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, PTCTBReasonCode_exceededMaxDuration /* IMPORTED_LONG_ENUMERATION_ITEM */, exceededMaxDuration /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_tBPrevented /* IMPORTED_LONG_ENUMERATION_ITEM */, tBPrevented /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCTBReasonCode, _encode_PTCTBReasonCode } from "../TS33128Payloads/PTCTBReasonCode.ta.mjs";
// export { PTCTBReasonCode, _enum_for_PTCTBReasonCode, PTCTBReasonCode_noQueuingAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueuingAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_oneParticipantSession /* IMPORTED_LONG_ENUMERATION_ITEM */, oneParticipantSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_listenOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, PTCTBReasonCode_exceededMaxDuration /* IMPORTED_LONG_ENUMERATION_ITEM */, exceededMaxDuration /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_tBPrevented /* IMPORTED_LONG_ENUMERATION_ITEM */, tBPrevented /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCTBReasonCode, _encode_PTCTBReasonCode } from "../TS33128Payloads/PTCTBReasonCode.ta.mjs";


/**
 * @summary PTCFloorControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorControl ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCSessioninfo                [3] PTCSessionInfo,
 *     pTCFloorActivity              [4] SEQUENCE OF PTCFloorActivity,
 *     pTCFloorSpeakerID             [5] PTCTargetInformation OPTIONAL,
 *     pTCMaxTBTime                  [6] INTEGER OPTIONAL,
 *     pTCQueuedFloorControl         [7] BOOLEAN OPTIONAL,
 *     pTCQueuedPosition             [8] INTEGER OPTIONAL,
 *     pTCTalkBurstPriority          [9] PTCTBPriorityLevel OPTIONAL,
 *     pTCTalkBurstReason            [10] PTCTBReasonCode OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCFloorControl {
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
         * @summary `pTCSessioninfo`.
         * @public
         * @readonly
         */
        readonly pTCSessioninfo: PTCSessionInfo,
        /**
         * @summary `pTCFloorActivity`.
         * @public
         * @readonly
         */
        readonly pTCFloorActivity: PTCFloorActivity[],
        /**
         * @summary `pTCFloorSpeakerID`.
         * @public
         * @readonly
         */
        readonly pTCFloorSpeakerID: OPTIONAL<PTCTargetInformation>,
        /**
         * @summary `pTCMaxTBTime`.
         * @public
         * @readonly
         */
        readonly pTCMaxTBTime: OPTIONAL<INTEGER>,
        /**
         * @summary `pTCQueuedFloorControl`.
         * @public
         * @readonly
         */
        readonly pTCQueuedFloorControl: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pTCQueuedPosition`.
         * @public
         * @readonly
         */
        readonly pTCQueuedPosition: OPTIONAL<INTEGER>,
        /**
         * @summary `pTCTalkBurstPriority`.
         * @public
         * @readonly
         */
        readonly pTCTalkBurstPriority: OPTIONAL<PTCTBPriorityLevel>,
        /**
         * @summary `pTCTalkBurstReason`.
         * @public
         * @readonly
         */
        readonly pTCTalkBurstReason: OPTIONAL<PTCTBReasonCode>
    ) {}

    /**
     * @summary Restructures an object into a PTCFloorControl
     * @description
     * 
     * This takes an `object` and converts it to a `PTCFloorControl`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCFloorControl`.
     * @returns {PTCFloorControl}
     */
    public static _from_object (_o: { [_K in keyof (PTCFloorControl)]: (PTCFloorControl)[_K] }): PTCFloorControl {
        return new PTCFloorControl(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCSessioninfo, _o.pTCFloorActivity, _o.pTCFloorSpeakerID, _o.pTCMaxTBTime, _o.pTCQueuedFloorControl, _o.pTCQueuedPosition, _o.pTCTalkBurstPriority, _o.pTCTalkBurstReason);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `pTCTalkBurstPriority`
         * @public
         * @static
         */

    public static _enum_for_pTCTalkBurstPriority = _enum_for_PTCTBPriorityLevel;        /**
         * @summary The enum used as the type of the component `pTCTalkBurstReason`
         * @public
         * @static
         */

    public static _enum_for_pTCTalkBurstReason = _enum_for_PTCTBReasonCode;
}

/**
 * @summary The Leading Root Component Types of PTCFloorControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCFloorControl: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCSessioninfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCFloorActivity", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCFloorSpeakerID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCMaxTBTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCQueuedFloorControl", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pTCQueuedPosition", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pTCTalkBurstPriority", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("pTCTalkBurstReason", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PTCFloorControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCFloorControl: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCFloorControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCFloorControl: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCFloorControl: $.ASN1Decoder<PTCFloorControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCFloorControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCFloorControl (el: _Element): PTCFloorControl {
    if (!_cached_decoder_for_PTCFloorControl) { _cached_decoder_for_PTCFloorControl = function (el: _Element): PTCFloorControl {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCSessioninfo!: PTCSessionInfo;
    let pTCFloorActivity!: PTCFloorActivity[];
    let pTCFloorSpeakerID: OPTIONAL<PTCTargetInformation>;
    let pTCMaxTBTime: OPTIONAL<INTEGER>;
    let pTCQueuedFloorControl: OPTIONAL<BOOLEAN>;
    let pTCQueuedPosition: OPTIONAL<INTEGER>;
    let pTCTalkBurstPriority: OPTIONAL<PTCTBPriorityLevel>;
    let pTCTalkBurstReason: OPTIONAL<PTCTBReasonCode>;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCSessioninfo": (_el: _Element): void => { pTCSessioninfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCFloorActivity": (_el: _Element): void => { pTCFloorActivity = $._decode_implicit<PTCFloorActivity[]>(() => $._decodeSequenceOf<PTCFloorActivity>(() => _decode_PTCFloorActivity))(_el); },
        "pTCFloorSpeakerID": (_el: _Element): void => { pTCFloorSpeakerID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCMaxTBTime": (_el: _Element): void => { pTCMaxTBTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pTCQueuedFloorControl": (_el: _Element): void => { pTCQueuedFloorControl = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pTCQueuedPosition": (_el: _Element): void => { pTCQueuedPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pTCTalkBurstPriority": (_el: _Element): void => { pTCTalkBurstPriority = $._decode_implicit<PTCTBPriorityLevel>(() => _decode_PTCTBPriorityLevel)(_el); },
        "pTCTalkBurstReason": (_el: _Element): void => { pTCTalkBurstReason = $._decode_implicit<PTCTBReasonCode>(() => _decode_PTCTBReasonCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCFloorControl,
        _extension_additions_list_spec_for_PTCFloorControl,
        _root_component_type_list_2_spec_for_PTCFloorControl,
        undefined,
    );
    return new PTCFloorControl(
        pTCTargetInformation,
        pTCDirection,
        pTCSessioninfo,
        pTCFloorActivity,
        pTCFloorSpeakerID,
        pTCMaxTBTime,
        pTCQueuedFloorControl,
        pTCQueuedPosition,
        pTCTalkBurstPriority,
        pTCTalkBurstReason
    );
}; }
    return _cached_decoder_for_PTCFloorControl(el);
}

let _cached_encoder_for_PTCFloorControl: $.ASN1Encoder<PTCFloorControl> | null = null;

/**
 * @summary Encodes a(n) PTCFloorControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCFloorControl, encoded as an ASN.1 Element.
 */
export
function _encode_PTCFloorControl (value: PTCFloorControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCFloorControl) { _cached_encoder_for_PTCFloorControl = function (value: PTCFloorControl, elGetter: $.ASN1Encoder<PTCFloorControl>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessioninfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<PTCFloorActivity>(() => _encode_PTCFloorActivity, $.BER), $.BER)(value.pTCFloorActivity, $.BER),
            /* IF_ABSENT  */ ((value.pTCFloorSpeakerID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PTCTargetInformation, $.BER)(value.pTCFloorSpeakerID, $.BER)),
            /* IF_ABSENT  */ ((value.pTCMaxTBTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.pTCMaxTBTime, $.BER)),
            /* IF_ABSENT  */ ((value.pTCQueuedFloorControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.pTCQueuedFloorControl, $.BER)),
            /* IF_ABSENT  */ ((value.pTCQueuedPosition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.pTCQueuedPosition, $.BER)),
            /* IF_ABSENT  */ ((value.pTCTalkBurstPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_PTCTBPriorityLevel, $.BER)(value.pTCTalkBurstPriority, $.BER)),
            /* IF_ABSENT  */ ((value.pTCTalkBurstReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_PTCTBReasonCode, $.BER)(value.pTCTalkBurstReason, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCFloorControl(value, elGetter);
}


/* eslint-enable */
