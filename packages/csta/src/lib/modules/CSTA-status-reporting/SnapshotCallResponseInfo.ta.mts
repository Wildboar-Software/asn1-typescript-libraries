/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CallMediaInfoList, _decode_CallMediaInfoList, _encode_CallMediaInfoList } from "../CSTA-status-reporting/CallMediaInfoList.ta.mjs";

import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";



/**
 * @summary SnapshotCallResponseInfo
 * @description
 *
 * One endpoint in a Snapshot Call: device, connection, local connection state,
 * services permitted, bound media, and location. ECMA-269 §16.1.3.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotCallResponseInfo ::= SEQUENCE
 * {     deviceOnCall             SubjectDeviceID,
 *     callIdentifier             ConnectionID                 OPTIONAL,
 *     localConnectionState         LocalConnectionState             OPTIONAL,
 *     servicesPermitted         [0] IMPLICIT ServicesPermitted         OPTIONAL,
 *     mediaServiceInfoList         [1] IMPLICIT CallMediaInfoList        OPTIONAL,
 *     locationInfo             [2] IMPLICIT LocationInfoList        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SnapshotCallResponseInfo {
    constructor (
        /**
         * @summary `deviceOnCall`.
         * @description
         *
         * Device at this endpoint. ECMA-269 §16.1.3.
         *
         * @public
         * @readonly
         */
        readonly deviceOnCall: SubjectDeviceID,
        /**
         * @summary `callIdentifier`.
         * @description
         *
         * Connection of the endpoint. Mandatory if the endpoint is in the
         * switching sub-domain. ECMA-269 §16.1.3.
         *
         * @public
         * @readonly
         */
        readonly callIdentifier: OPTIONAL<ConnectionID>,
        /**
         * @summary `localConnectionState`.
         * @description
         *
         * Local connection state of this endpoint. ECMA-269 §16.1.3.
         *
         * @public
         * @readonly
         */
        readonly localConnectionState: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `servicesPermitted`.
         * @description
         *
         * Mandatory if Dynamic Feature Availability is supported. ECMA-269
         * §16.1.3, §12.2.25.
         *
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `mediaServiceInfoList`.
         * @description
         *
         * Media services bound to this connection. ECMA-269 §16.1.3.
         *
         * @public
         * @readonly
         */
        readonly mediaServiceInfoList: OPTIONAL<CallMediaInfoList>,
        /**
         * @summary `locationInfo`.
         * @description
         *
         * PIDF-LO location for the endpoint. ECMA-269 §16.1.3, §12.2.18.
         *
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfoList>
    ) {}

    /**
     * @summary Restructures an object into a SnapshotCallResponseInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotCallResponseInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotCallResponseInfo`.
     * @returns {SnapshotCallResponseInfo}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotCallResponseInfo)]: (SnapshotCallResponseInfo)[_K] }): SnapshotCallResponseInfo {
        return new SnapshotCallResponseInfo(_o.deviceOnCall, _o.callIdentifier, _o.localConnectionState, _o.servicesPermitted, _o.mediaServiceInfoList, _o.locationInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotCallResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotCallResponseInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceOnCall", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("callIdentifier", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("localConnectionState", true, $.hasTag(_TagClass.application, 14)),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaServiceInfoList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SnapshotCallResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotCallResponseInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotCallResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotCallResponseInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotCallResponseInfo: $.ASN1Decoder<SnapshotCallResponseInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotCallResponseInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotCallResponseInfo (el: _Element): SnapshotCallResponseInfo {
    if (!_cached_decoder_for_SnapshotCallResponseInfo) { _cached_decoder_for_SnapshotCallResponseInfo = function (el: _Element): SnapshotCallResponseInfo {
    let deviceOnCall!: SubjectDeviceID;
    let callIdentifier: OPTIONAL<ConnectionID>;
    let localConnectionState: OPTIONAL<LocalConnectionState>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let mediaServiceInfoList: OPTIONAL<CallMediaInfoList>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    const callbacks: $.DecodingMap = {
        "deviceOnCall": (_el: _Element): void => { deviceOnCall = _decode_SubjectDeviceID(_el); },
        "callIdentifier": (_el: _Element): void => { callIdentifier = _decode_ConnectionID(_el); },
        "localConnectionState": (_el: _Element): void => { localConnectionState = _decode_LocalConnectionState(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "mediaServiceInfoList": (_el: _Element): void => { mediaServiceInfoList = $._decode_implicit<CallMediaInfoList>(() => _decode_CallMediaInfoList)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SnapshotCallResponseInfo,
        _extension_additions_list_spec_for_SnapshotCallResponseInfo,
        _root_component_type_list_2_spec_for_SnapshotCallResponseInfo,
        undefined,
    );
    return new SnapshotCallResponseInfo(
        deviceOnCall,
        callIdentifier,
        localConnectionState,
        servicesPermitted,
        mediaServiceInfoList,
        locationInfo
    );
}; }
    return _cached_decoder_for_SnapshotCallResponseInfo(el);
}

let _cached_encoder_for_SnapshotCallResponseInfo: $.ASN1Encoder<SnapshotCallResponseInfo> | null = null;

/**
 * @summary Encodes a(n) SnapshotCallResponseInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotCallResponseInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotCallResponseInfo (value: SnapshotCallResponseInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotCallResponseInfo) { _cached_encoder_for_SnapshotCallResponseInfo = function (value: SnapshotCallResponseInfo, elGetter: $.ASN1Encoder<SnapshotCallResponseInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.deviceOnCall, $.BER),
            /* IF_ABSENT  */ ((value.callIdentifier === undefined) ? undefined : _encode_ConnectionID(value.callIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.localConnectionState === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionState, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInfoList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallMediaInfoList, $.BER)(value.mediaServiceInfoList, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotCallResponseInfo(value, elGetter);
}


/* eslint-enable */
