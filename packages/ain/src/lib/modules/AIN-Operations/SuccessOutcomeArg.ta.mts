/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
// export { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
import { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
// export { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
// export { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
import { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
// export { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary SuccessOutcomeArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuccessOutcomeArg ::= SEQUENCE{
 *             userID                        UserID,
 *             bearerCapability              BearerCapability,
 *             notificationIndicator         [111] IMPLICIT NotificationIndicator OPTIONAL,
 *             ccID                          CcID OPTIONAL,
 *             legID                         LegID OPTIONAL,
 *             bCMType                       BCMType OPTIONAL,
 *             pointInCall                   PointInCall OPTIONAL,
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class SuccessOutcomeArg {
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
         * @summary `notificationIndicator`.
         * @public
         * @readonly
         */
        readonly notificationIndicator: OPTIONAL<NotificationIndicator>,
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
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a SuccessOutcomeArg
     * @description
     * 
     * This takes an `object` and converts it to a `SuccessOutcomeArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuccessOutcomeArg`.
     * @returns {SuccessOutcomeArg}
     */
    public static _from_object (_o: { [_K in keyof (SuccessOutcomeArg)]: (SuccessOutcomeArg)[_K] }): SuccessOutcomeArg {
        return new SuccessOutcomeArg(_o.userID, _o.bearerCapability, _o.notificationIndicator, _o.ccID, _o.legID, _o.bCMType, _o.pointInCall, _o.amp1, _o.amp2, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of SuccessOutcomeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SuccessOutcomeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("notificationIndicator", true, $.hasTag(_TagClass.context, 111)),
    new $.ComponentSpec("ccID", true, $.hasTag(_TagClass.context, 133)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("bCMType", true, $.hasTag(_TagClass.context, 134)),
    new $.ComponentSpec("pointInCall", true, $.hasTag(_TagClass.context, 135)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of SuccessOutcomeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SuccessOutcomeArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SuccessOutcomeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SuccessOutcomeArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SuccessOutcomeArg: $.ASN1Decoder<SuccessOutcomeArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuccessOutcomeArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuccessOutcomeArg (el: _Element): SuccessOutcomeArg {
    if (!_cached_decoder_for_SuccessOutcomeArg) { _cached_decoder_for_SuccessOutcomeArg = function (el: _Element): SuccessOutcomeArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let notificationIndicator: OPTIONAL<NotificationIndicator>;
    let ccID: OPTIONAL<CcID>;
    let legID: OPTIONAL<LegID>;
    let bCMType: OPTIONAL<BCMType>;
    let pointInCall: OPTIONAL<PointInCall>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "notificationIndicator": (_el: _Element): void => { notificationIndicator = $._decode_implicit<NotificationIndicator>(() => _decode_NotificationIndicator)(_el); },
        "ccID": (_el: _Element): void => { ccID = _decode_CcID(_el); },
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "bCMType": (_el: _Element): void => { bCMType = _decode_BCMType(_el); },
        "pointInCall": (_el: _Element): void => { pointInCall = _decode_PointInCall(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SuccessOutcomeArg,
        _extension_additions_list_spec_for_SuccessOutcomeArg,
        _root_component_type_list_2_spec_for_SuccessOutcomeArg,
        undefined,
    );
    return new SuccessOutcomeArg(
        userID,
        bearerCapability,
        notificationIndicator,
        ccID,
        legID,
        bCMType,
        pointInCall,
        amp1,
        amp2,
        extensionParameter
    );
}; }
    return _cached_decoder_for_SuccessOutcomeArg(el);
}

let _cached_encoder_for_SuccessOutcomeArg: $.ASN1Encoder<SuccessOutcomeArg> | null = null;

/**
 * @summary Encodes a(n) SuccessOutcomeArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuccessOutcomeArg, encoded as an ASN.1 Element.
 */
export
function _encode_SuccessOutcomeArg (value: SuccessOutcomeArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuccessOutcomeArg) { _cached_encoder_for_SuccessOutcomeArg = function (value: SuccessOutcomeArg, elGetter: $.ASN1Encoder<SuccessOutcomeArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.notificationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 111, () => _encode_NotificationIndicator, $.BER)(value.notificationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.ccID === undefined) ? undefined : _encode_CcID(value.ccID, $.BER)),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : _encode_LegID(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.bCMType === undefined) ? undefined : _encode_BCMType(value.bCMType, $.BER)),
            /* IF_ABSENT  */ ((value.pointInCall === undefined) ? undefined : _encode_PointInCall(value.pointInCall, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SuccessOutcomeArg(value, elGetter);
}


/* eslint-enable */
