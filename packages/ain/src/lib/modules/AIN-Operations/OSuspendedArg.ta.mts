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
import { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
// export { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
// export { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";


/**
 * @summary OSuspendedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OSuspendedArg ::= SEQUENCE{
 *             userID                        UserID,
 *             bearerCapability              BearerCapability,
 *             notificationIndicator         [111] IMPLICIT NotificationIndicator OPTIONAL,
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             legID                         LegID OPTIONAL,
 *             pointInCall                   PointInCall OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class OSuspendedArg {
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
        readonly pointInCall: OPTIONAL<PointInCall>
    ) {}

    /**
     * @summary Restructures an object into a OSuspendedArg
     * @description
     * 
     * This takes an `object` and converts it to a `OSuspendedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OSuspendedArg`.
     * @returns {OSuspendedArg}
     */
    public static _from_object (_o: { [_K in keyof (OSuspendedArg)]: (OSuspendedArg)[_K] }): OSuspendedArg {
        return new OSuspendedArg(_o.userID, _o.bearerCapability, _o.notificationIndicator, _o.amp1, _o.amp2, _o.extensionParameter, _o.legID, _o.pointInCall);
    }


}

/**
 * @summary The Leading Root Component Types of OSuspendedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OSuspendedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("notificationIndicator", true, $.hasTag(_TagClass.context, 111)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("pointInCall", true, $.hasTag(_TagClass.context, 135))
];

/**
 * @summary The Trailing Root Component Types of OSuspendedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OSuspendedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OSuspendedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OSuspendedArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OSuspendedArg: $.ASN1Decoder<OSuspendedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OSuspendedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OSuspendedArg (el: _Element): OSuspendedArg {
    if (!_cached_decoder_for_OSuspendedArg) { _cached_decoder_for_OSuspendedArg = function (el: _Element): OSuspendedArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let notificationIndicator: OPTIONAL<NotificationIndicator>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let legID: OPTIONAL<LegID>;
    let pointInCall: OPTIONAL<PointInCall>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "notificationIndicator": (_el: _Element): void => { notificationIndicator = $._decode_implicit<NotificationIndicator>(() => _decode_NotificationIndicator)(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "pointInCall": (_el: _Element): void => { pointInCall = _decode_PointInCall(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OSuspendedArg,
        _extension_additions_list_spec_for_OSuspendedArg,
        _root_component_type_list_2_spec_for_OSuspendedArg,
        undefined,
    );
    return new OSuspendedArg(
        userID,
        bearerCapability,
        notificationIndicator,
        amp1,
        amp2,
        extensionParameter,
        legID,
        pointInCall
    );
}; }
    return _cached_decoder_for_OSuspendedArg(el);
}

let _cached_encoder_for_OSuspendedArg: $.ASN1Encoder<OSuspendedArg> | null = null;

/**
 * @summary Encodes a(n) OSuspendedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OSuspendedArg, encoded as an ASN.1 Element.
 */
export
function _encode_OSuspendedArg (value: OSuspendedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OSuspendedArg) { _cached_encoder_for_OSuspendedArg = function (value: OSuspendedArg, elGetter: $.ASN1Encoder<OSuspendedArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.notificationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 111, () => _encode_NotificationIndicator, $.BER)(value.notificationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : _encode_LegID(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.pointInCall === undefined) ? undefined : _encode_PointInCall(value.pointInCall, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OSuspendedArg(value, elGetter);
}


/* eslint-enable */
