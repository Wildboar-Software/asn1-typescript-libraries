/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";



/**
 * @summary PrimaryOrSecondaryCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryOrSecondaryCall ::= SEQUENCE
 * {    deviceID             DeviceID,
 *     connectionID            ConnectionID,
 *     localConnectionState        LocalConnectionState,
 *     connectionInfo            ConnectionInformation            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PrimaryOrSecondaryCall {
    constructor (
        /**
         * @summary `deviceID`.
         * @public
         * @readonly
         */
        readonly deviceID: DeviceID,
        /**
         * @summary `connectionID`.
         * @public
         * @readonly
         */
        readonly connectionID: ConnectionID,
        /**
         * @summary `localConnectionState`.
         * @public
         * @readonly
         */
        readonly localConnectionState: LocalConnectionState,
        /**
         * @summary `connectionInfo`.
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>
    ) {}

    /**
     * @summary Restructures an object into a PrimaryOrSecondaryCall
     * @description
     * 
     * This takes an `object` and converts it to a `PrimaryOrSecondaryCall`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrimaryOrSecondaryCall`.
     * @returns {PrimaryOrSecondaryCall}
     */
    public static _from_object (_o: { [_K in keyof (PrimaryOrSecondaryCall)]: (PrimaryOrSecondaryCall)[_K] }): PrimaryOrSecondaryCall {
        return new PrimaryOrSecondaryCall(_o.deviceID, _o.connectionID, _o.localConnectionState, _o.connectionInfo);
    }


}

/**
 * @summary The Leading Root Component Types of PrimaryOrSecondaryCall
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrimaryOrSecondaryCall: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceID", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("connectionID", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("localConnectionState", false, $.hasTag(_TagClass.application, 14)),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PrimaryOrSecondaryCall
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrimaryOrSecondaryCall: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrimaryOrSecondaryCall
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrimaryOrSecondaryCall: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrimaryOrSecondaryCall: $.ASN1Decoder<PrimaryOrSecondaryCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryOrSecondaryCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrimaryOrSecondaryCall (el: _Element): PrimaryOrSecondaryCall {
    if (!_cached_decoder_for_PrimaryOrSecondaryCall) { _cached_decoder_for_PrimaryOrSecondaryCall = function (el: _Element): PrimaryOrSecondaryCall {
    let deviceID!: DeviceID;
    let connectionID!: ConnectionID;
    let localConnectionState!: LocalConnectionState;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    const callbacks: $.DecodingMap = {
        "deviceID": (_el: _Element): void => { deviceID = _decode_DeviceID(_el); },
        "connectionID": (_el: _Element): void => { connectionID = _decode_ConnectionID(_el); },
        "localConnectionState": (_el: _Element): void => { localConnectionState = _decode_LocalConnectionState(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = _decode_ConnectionInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrimaryOrSecondaryCall,
        _extension_additions_list_spec_for_PrimaryOrSecondaryCall,
        _root_component_type_list_2_spec_for_PrimaryOrSecondaryCall,
        undefined,
    );
    return new PrimaryOrSecondaryCall(
        deviceID,
        connectionID,
        localConnectionState,
        connectionInfo
    );
}; }
    return _cached_decoder_for_PrimaryOrSecondaryCall(el);
}

let _cached_encoder_for_PrimaryOrSecondaryCall: $.ASN1Encoder<PrimaryOrSecondaryCall> | null = null;

/**
 * @summary Encodes a(n) PrimaryOrSecondaryCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryOrSecondaryCall, encoded as an ASN.1 Element.
 */
export
function _encode_PrimaryOrSecondaryCall (value: PrimaryOrSecondaryCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrimaryOrSecondaryCall) { _cached_encoder_for_PrimaryOrSecondaryCall = function (value: PrimaryOrSecondaryCall, elGetter: $.ASN1Encoder<PrimaryOrSecondaryCall>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.deviceID, $.BER),
            /* REQUIRED   */ _encode_ConnectionID(value.connectionID, $.BER),
            /* REQUIRED   */ _encode_LocalConnectionState(value.localConnectionState, $.BER),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : _encode_ConnectionInformation(value.connectionInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrimaryOrSecondaryCall(value, elGetter);
}


/* eslint-enable */
