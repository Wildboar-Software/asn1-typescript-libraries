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
import { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
// export { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
// export { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
import { DisconnectCause, _decode_DisconnectCause, _encode_DisconnectCause } from "../AIN-Parameters/DisconnectCause.ta.mjs";
// export { DisconnectCause, _decode_DisconnectCause, _encode_DisconnectCause } from "../AIN-Parameters/DisconnectCause.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
// export { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
import { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
// export { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";


/**
 * @summary TDisconnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TDisconnectArg ::= SEQUENCE{
 *             userID                        UserID,
 *             bearerCapability              BearerCapability,
 *             ccID                          CcID OPTIONAL,
 *             legID                         LegID OPTIONAL,
 *             pointInCall                   PointInCall OPTIONAL,
 *             disconnectCause               DisconnectCause OPTIONAL,
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             notificationIndicator         [111] IMPLICIT NotificationIndicator OPTIONAL,
 *             aMASequenceNumber             AMASequenceNumber OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class TDisconnectArg {
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
         * @summary `ccID`.
         * @public
         * @readonly
         */
        readonly ccID: OPTIONAL<CcID>,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `pointInCall`.
         * @public
         * @readonly
         */
        readonly pointInCall: OPTIONAL<PointInCall>,
        /**
         * @summary `disconnectCause`.
         * @public
         * @readonly
         */
        readonly disconnectCause: OPTIONAL<DisconnectCause>,
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
        readonly notificationIndicator: OPTIONAL<NotificationIndicator>,
        /**
         * @summary `aMASequenceNumber`.
         * @public
         * @readonly
         */
        readonly aMASequenceNumber: OPTIONAL<AMASequenceNumber>
    ) {}

    /**
     * @summary Restructures an object into a TDisconnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `TDisconnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TDisconnectArg`.
     * @returns {TDisconnectArg}
     */
    public static _from_object (_o: { [_K in keyof (TDisconnectArg)]: (TDisconnectArg)[_K] }): TDisconnectArg {
        return new TDisconnectArg(_o.userID, _o.bearerCapability, _o.ccID, _o.legID, _o.pointInCall, _o.disconnectCause, _o.amp1, _o.amp2, _o.extensionParameter, _o.notificationIndicator, _o.aMASequenceNumber);
    }


}

/**
 * @summary The Leading Root Component Types of TDisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TDisconnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("ccID", true, $.hasTag(_TagClass.context, 133)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("pointInCall", true, $.hasTag(_TagClass.context, 135)),
    new $.ComponentSpec("disconnectCause", true, $.hasTag(_TagClass.context, 116)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("notificationIndicator", true, $.hasTag(_TagClass.context, 111)),
    new $.ComponentSpec("aMASequenceNumber", true, $.hasTag(_TagClass.context, 89))
];

/**
 * @summary The Trailing Root Component Types of TDisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TDisconnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TDisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TDisconnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TDisconnectArg: $.ASN1Decoder<TDisconnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TDisconnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TDisconnectArg (el: _Element): TDisconnectArg {
    if (!_cached_decoder_for_TDisconnectArg) { _cached_decoder_for_TDisconnectArg = function (el: _Element): TDisconnectArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let ccID: OPTIONAL<CcID>;
    let legID: OPTIONAL<LegID>;
    let pointInCall: OPTIONAL<PointInCall>;
    let disconnectCause: OPTIONAL<DisconnectCause>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let notificationIndicator: OPTIONAL<NotificationIndicator>;
    let aMASequenceNumber: OPTIONAL<AMASequenceNumber>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "ccID": (_el: _Element): void => { ccID = _decode_CcID(_el); },
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "pointInCall": (_el: _Element): void => { pointInCall = _decode_PointInCall(_el); },
        "disconnectCause": (_el: _Element): void => { disconnectCause = _decode_DisconnectCause(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "notificationIndicator": (_el: _Element): void => { notificationIndicator = $._decode_implicit<NotificationIndicator>(() => _decode_NotificationIndicator)(_el); },
        "aMASequenceNumber": (_el: _Element): void => { aMASequenceNumber = _decode_AMASequenceNumber(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TDisconnectArg,
        _extension_additions_list_spec_for_TDisconnectArg,
        _root_component_type_list_2_spec_for_TDisconnectArg,
        undefined,
    );
    return new TDisconnectArg(
        userID,
        bearerCapability,
        ccID,
        legID,
        pointInCall,
        disconnectCause,
        amp1,
        amp2,
        extensionParameter,
        notificationIndicator,
        aMASequenceNumber
    );
}; }
    return _cached_decoder_for_TDisconnectArg(el);
}

let _cached_encoder_for_TDisconnectArg: $.ASN1Encoder<TDisconnectArg> | null = null;

/**
 * @summary Encodes a(n) TDisconnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TDisconnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_TDisconnectArg (value: TDisconnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TDisconnectArg) { _cached_encoder_for_TDisconnectArg = function (value: TDisconnectArg, elGetter: $.ASN1Encoder<TDisconnectArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.ccID === undefined) ? undefined : _encode_CcID(value.ccID, $.BER)),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : _encode_LegID(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.pointInCall === undefined) ? undefined : _encode_PointInCall(value.pointInCall, $.BER)),
            /* IF_ABSENT  */ ((value.disconnectCause === undefined) ? undefined : _encode_DisconnectCause(value.disconnectCause, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.notificationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 111, () => _encode_NotificationIndicator, $.BER)(value.notificationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.aMASequenceNumber === undefined) ? undefined : _encode_AMASequenceNumber(value.aMASequenceNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TDisconnectArg(value, elGetter);
}


/* eslint-enable */
