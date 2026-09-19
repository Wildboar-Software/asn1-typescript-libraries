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
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
// export { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
import { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
// export { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
import { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
// export { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
import { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
// export { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
// export { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";


/**
 * @summary TimeoutArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutArg ::= SEQUENCE{
 *             userID                        UserID,
 *             bearerCapability              BearerCapability,
 *             legID                         LegID OPTIONAL,
 *             bCMType                       BCMType OPTIONAL,
 *             pointInCall                   PointInCall OPTIONAL,
 *             ccID                          CcID OPTIONAL,
 *             aCGEncountered                ACGEncountered OPTIONAL,
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             notificationIndicator         [111] IMPLICIT NotificationIndicator OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class TimeoutArg {
    constructor (
        /**
         * @summary `userID`.
         * @public
         * @readonly
         */
        readonly userID: UserID,
        /**
         * @summary `bearerCapability`.
         * @public
         * @readonly
         */
        readonly bearerCapability: BearerCapability,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `bCMType`.
         * @public
         * @readonly
         */
        readonly bCMType: OPTIONAL<BCMType>,
        /**
         * @summary `pointInCall`.
         * @public
         * @readonly
         */
        readonly pointInCall: OPTIONAL<PointInCall>,
        /**
         * @summary `ccID`.
         * @public
         * @readonly
         */
        readonly ccID: OPTIONAL<CcID>,
        /**
         * @summary `aCGEncountered`.
         * @public
         * @readonly
         */
        readonly aCGEncountered: OPTIONAL<ACGEncountered>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `notificationIndicator`.
         * @public
         * @readonly
         */
        readonly notificationIndicator: OPTIONAL<NotificationIndicator>
    ) {}

    /**
     * @summary Restructures an object into a TimeoutArg
     * @description
     * 
     * This takes an `object` and converts it to a `TimeoutArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeoutArg`.
     * @returns {TimeoutArg}
     */
    public static _from_object (_o: { [_K in keyof (TimeoutArg)]: (TimeoutArg)[_K] }): TimeoutArg {
        return new TimeoutArg(_o.userID, _o.bearerCapability, _o.legID, _o.bCMType, _o.pointInCall, _o.ccID, _o.aCGEncountered, _o.amp1, _o.amp2, _o.extensionParameter, _o.notificationIndicator);
    }


}

/**
 * @summary The Leading Root Component Types of TimeoutArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TimeoutArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("bCMType", true, $.hasTag(_TagClass.context, 134)),
    new $.ComponentSpec("pointInCall", true, $.hasTag(_TagClass.context, 135)),
    new $.ComponentSpec("ccID", true, $.hasTag(_TagClass.context, 133)),
    new $.ComponentSpec("aCGEncountered", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("notificationIndicator", true, $.hasTag(_TagClass.context, 111))
];

/**
 * @summary The Trailing Root Component Types of TimeoutArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TimeoutArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TimeoutArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TimeoutArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TimeoutArg: $.ASN1Decoder<TimeoutArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeoutArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeoutArg (el: _Element): TimeoutArg {
    if (!_cached_decoder_for_TimeoutArg) { _cached_decoder_for_TimeoutArg = function (el: _Element): TimeoutArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let legID: OPTIONAL<LegID>;
    let bCMType: OPTIONAL<BCMType>;
    let pointInCall: OPTIONAL<PointInCall>;
    let ccID: OPTIONAL<CcID>;
    let aCGEncountered: OPTIONAL<ACGEncountered>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let notificationIndicator: OPTIONAL<NotificationIndicator>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "bCMType": (_el: _Element): void => { bCMType = _decode_BCMType(_el); },
        "pointInCall": (_el: _Element): void => { pointInCall = _decode_PointInCall(_el); },
        "ccID": (_el: _Element): void => { ccID = _decode_CcID(_el); },
        "aCGEncountered": (_el: _Element): void => { aCGEncountered = _decode_ACGEncountered(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "notificationIndicator": (_el: _Element): void => { notificationIndicator = $._decode_implicit<NotificationIndicator>(() => _decode_NotificationIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TimeoutArg,
        _extension_additions_list_spec_for_TimeoutArg,
        _root_component_type_list_2_spec_for_TimeoutArg,
        undefined,
    );
    return new TimeoutArg(
        userID,
        bearerCapability,
        legID,
        bCMType,
        pointInCall,
        ccID,
        aCGEncountered,
        amp1,
        amp2,
        extensionParameter,
        notificationIndicator
    );
}; }
    return _cached_decoder_for_TimeoutArg(el);
}

let _cached_encoder_for_TimeoutArg: $.ASN1Encoder<TimeoutArg> | null = null;

/**
 * @summary Encodes a(n) TimeoutArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeoutArg, encoded as an ASN.1 Element.
 */
export
function _encode_TimeoutArg (value: TimeoutArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeoutArg) { _cached_encoder_for_TimeoutArg = function (value: TimeoutArg, elGetter: $.ASN1Encoder<TimeoutArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : _encode_LegID(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.bCMType === undefined) ? undefined : _encode_BCMType(value.bCMType, $.BER)),
            /* IF_ABSENT  */ ((value.pointInCall === undefined) ? undefined : _encode_PointInCall(value.pointInCall, $.BER)),
            /* IF_ABSENT  */ ((value.ccID === undefined) ? undefined : _encode_CcID(value.ccID, $.BER)),
            /* IF_ABSENT  */ ((value.aCGEncountered === undefined) ? undefined : _encode_ACGEncountered(value.aCGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.notificationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 111, () => _encode_NotificationIndicator, $.BER)(value.notificationIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TimeoutArg(value, elGetter);
}


/* eslint-enable */
