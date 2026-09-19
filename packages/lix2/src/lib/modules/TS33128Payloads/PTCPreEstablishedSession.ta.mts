/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { RTPSetting, _decode_RTPSetting, _encode_RTPSetting } from "../TS33128Payloads/RTPSetting.ta.mjs";
// export { RTPSetting, _decode_RTPSetting, _encode_RTPSetting } from "../TS33128Payloads/RTPSetting.ta.mjs";
import { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
// export { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
import { PTCPreEstStatus, _decode_PTCPreEstStatus, _encode_PTCPreEstStatus, _enum_for_PTCPreEstStatus } from "../TS33128Payloads/PTCPreEstStatus.ta.mjs";
// export { PTCPreEstStatus, _enum_for_PTCPreEstStatus, PTCPreEstStatus_established /* IMPORTED_LONG_ENUMERATION_ITEM */, established /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCPreEstStatus_modified /* IMPORTED_LONG_ENUMERATION_ITEM */, modified /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCPreEstStatus_released /* IMPORTED_LONG_ENUMERATION_ITEM */, released /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCPreEstStatus, _encode_PTCPreEstStatus } from "../TS33128Payloads/PTCPreEstStatus.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { PTCFailureCode, _decode_PTCFailureCode, _encode_PTCFailureCode, _enum_for_PTCFailureCode } from "../TS33128Payloads/PTCFailureCode.ta.mjs";
// export { PTCFailureCode, _enum_for_PTCFailureCode, PTCFailureCode_sessionCannotBeEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionCannotBeEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFailureCode_sessionCannotBeModified /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionCannotBeModified /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCFailureCode, _encode_PTCFailureCode } from "../TS33128Payloads/PTCFailureCode.ta.mjs";


/**
 * @summary PTCPreEstablishedSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstablishedSession ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCServerURI                  [2] UTF8String,
 *     rTPSetting                    [3] RTPSetting,
 *     pTCMediaCapability            [4] UTF8String,
 *     pTCPreEstSessionID            [5] PTCSessionInfo,
 *     pTCPreEstStatus               [6] PTCPreEstStatus,
 *     pTCMediaStreamAvail           [7] BOOLEAN OPTIONAL,
 *     location                      [8] Location OPTIONAL,
 *     pTCFailureCode                [9] PTCFailureCode OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCPreEstablishedSession {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCServerURI`.
         * @public
         * @readonly
         */
        readonly pTCServerURI: UTF8String,
        /**
         * @summary `rTPSetting`.
         * @public
         * @readonly
         */
        readonly rTPSetting: RTPSetting,
        /**
         * @summary `pTCMediaCapability`.
         * @public
         * @readonly
         */
        readonly pTCMediaCapability: UTF8String,
        /**
         * @summary `pTCPreEstSessionID`.
         * @public
         * @readonly
         */
        readonly pTCPreEstSessionID: PTCSessionInfo,
        /**
         * @summary `pTCPreEstStatus`.
         * @public
         * @readonly
         */
        readonly pTCPreEstStatus: PTCPreEstStatus,
        /**
         * @summary `pTCMediaStreamAvail`.
         * @public
         * @readonly
         */
        readonly pTCMediaStreamAvail: OPTIONAL<BOOLEAN>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `pTCFailureCode`.
         * @public
         * @readonly
         */
        readonly pTCFailureCode: OPTIONAL<PTCFailureCode>
    ) {}

    /**
     * @summary Restructures an object into a PTCPreEstablishedSession
     * @description
     * 
     * This takes an `object` and converts it to a `PTCPreEstablishedSession`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCPreEstablishedSession`.
     * @returns {PTCPreEstablishedSession}
     */
    public static _from_object (_o: { [_K in keyof (PTCPreEstablishedSession)]: (PTCPreEstablishedSession)[_K] }): PTCPreEstablishedSession {
        return new PTCPreEstablishedSession(_o.pTCTargetInformation, _o.pTCServerURI, _o.rTPSetting, _o.pTCMediaCapability, _o.pTCPreEstSessionID, _o.pTCPreEstStatus, _o.pTCMediaStreamAvail, _o.location, _o.pTCFailureCode);
    }

        /**
         * @summary The enum used as the type of the component `pTCPreEstStatus`
         * @public
         * @static
         */

    public static _enum_for_pTCPreEstStatus = _enum_for_PTCPreEstStatus;        /**
         * @summary The enum used as the type of the component `pTCFailureCode`
         * @public
         * @static
         */

    public static _enum_for_pTCFailureCode = _enum_for_PTCFailureCode;
}

/**
 * @summary The Leading Root Component Types of PTCPreEstablishedSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCPreEstablishedSession: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCServerURI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rTPSetting", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCMediaCapability", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCPreEstSessionID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCPreEstStatus", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCMediaStreamAvail", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pTCFailureCode", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of PTCPreEstablishedSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCPreEstablishedSession: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCPreEstablishedSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCPreEstablishedSession: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCPreEstablishedSession: $.ASN1Decoder<PTCPreEstablishedSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCPreEstablishedSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCPreEstablishedSession (el: _Element): PTCPreEstablishedSession {
    if (!_cached_decoder_for_PTCPreEstablishedSession) { _cached_decoder_for_PTCPreEstablishedSession = function (el: _Element): PTCPreEstablishedSession {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCServerURI!: UTF8String;
    let rTPSetting!: RTPSetting;
    let pTCMediaCapability!: UTF8String;
    let pTCPreEstSessionID!: PTCSessionInfo;
    let pTCPreEstStatus!: PTCPreEstStatus;
    let pTCMediaStreamAvail: OPTIONAL<BOOLEAN>;
    let location: OPTIONAL<Location>;
    let pTCFailureCode: OPTIONAL<PTCFailureCode>;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCServerURI": (_el: _Element): void => { pTCServerURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "rTPSetting": (_el: _Element): void => { rTPSetting = $._decode_implicit<RTPSetting>(() => _decode_RTPSetting)(_el); },
        "pTCMediaCapability": (_el: _Element): void => { pTCMediaCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCPreEstSessionID": (_el: _Element): void => { pTCPreEstSessionID = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCPreEstStatus": (_el: _Element): void => { pTCPreEstStatus = $._decode_implicit<PTCPreEstStatus>(() => _decode_PTCPreEstStatus)(_el); },
        "pTCMediaStreamAvail": (_el: _Element): void => { pTCMediaStreamAvail = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "pTCFailureCode": (_el: _Element): void => { pTCFailureCode = $._decode_implicit<PTCFailureCode>(() => _decode_PTCFailureCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCPreEstablishedSession,
        _extension_additions_list_spec_for_PTCPreEstablishedSession,
        _root_component_type_list_2_spec_for_PTCPreEstablishedSession,
        undefined,
    );
    return new PTCPreEstablishedSession(
        pTCTargetInformation,
        pTCServerURI,
        rTPSetting,
        pTCMediaCapability,
        pTCPreEstSessionID,
        pTCPreEstStatus,
        pTCMediaStreamAvail,
        location,
        pTCFailureCode
    );
}; }
    return _cached_decoder_for_PTCPreEstablishedSession(el);
}

let _cached_encoder_for_PTCPreEstablishedSession: $.ASN1Encoder<PTCPreEstablishedSession> | null = null;

/**
 * @summary Encodes a(n) PTCPreEstablishedSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCPreEstablishedSession, encoded as an ASN.1 Element.
 */
export
function _encode_PTCPreEstablishedSession (value: PTCPreEstablishedSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCPreEstablishedSession) { _cached_encoder_for_PTCPreEstablishedSession = function (value: PTCPreEstablishedSession, elGetter: $.ASN1Encoder<PTCPreEstablishedSession>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RTPSetting, $.BER)(value.rTPSetting, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.pTCMediaCapability, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PTCSessionInfo, $.BER)(value.pTCPreEstSessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_PTCPreEstStatus, $.BER)(value.pTCPreEstStatus, $.BER),
            /* IF_ABSENT  */ ((value.pTCMediaStreamAvail === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.pTCMediaStreamAvail, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.pTCFailureCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_PTCFailureCode, $.BER)(value.pTCFailureCode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCPreEstablishedSession(value, elGetter);
}


/* eslint-enable */
