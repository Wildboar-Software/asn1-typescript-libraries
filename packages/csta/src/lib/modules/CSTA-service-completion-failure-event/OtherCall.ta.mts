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
 * @summary OtherCall
 * @description
 *
 * Other device/connection on the primary or secondary call.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherCall ::= SEQUENCE
 * {    deviceID             DeviceID,
 *     connectionID            ConnectionID,
 *     localConnectionState        LocalConnectionState            OPTIONAL,
 *     connectionInfo            ConnectionInformation            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class OtherCall {
    constructor (
        /**
         * @summary `deviceID`.
         * @description
         *
         * Other device on the call.
         * @public
         * @readonly
         */
        readonly deviceID: DeviceID,
        /**
         * @summary `connectionID`.
         * @description
         *
         * That device's connection.
         * @public
         * @readonly
         */
        readonly connectionID: ConnectionID,
        /**
         * @summary `localConnectionState`.
         * @description
         *
         * Local connection state, if known.
         * @public
         * @readonly
         */
        readonly localConnectionState: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `connectionInfo`.
         * @description
         *
         * Connection information, if provided.
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>
    ) {}

    /**
     * @summary Restructures an object into a OtherCall
     * @description
     * 
     * This takes an `object` and converts it to a `OtherCall`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherCall`.
     * @returns {OtherCall}
     */
    public static _from_object (_o: { [_K in keyof (OtherCall)]: (OtherCall)[_K] }): OtherCall {
        return new OtherCall(_o.deviceID, _o.connectionID, _o.localConnectionState, _o.connectionInfo);
    }


}

/**
 * @summary The Leading Root Component Types of OtherCall
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherCall: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceID", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("connectionID", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("localConnectionState", true, $.hasTag(_TagClass.application, 14)),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of OtherCall
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherCall: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OtherCall
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherCall: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OtherCall: $.ASN1Decoder<OtherCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherCall (el: _Element): OtherCall {
    if (!_cached_decoder_for_OtherCall) { _cached_decoder_for_OtherCall = function (el: _Element): OtherCall {
    let deviceID!: DeviceID;
    let connectionID!: ConnectionID;
    let localConnectionState: OPTIONAL<LocalConnectionState>;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    const callbacks: $.DecodingMap = {
        "deviceID": (_el: _Element): void => { deviceID = _decode_DeviceID(_el); },
        "connectionID": (_el: _Element): void => { connectionID = _decode_ConnectionID(_el); },
        "localConnectionState": (_el: _Element): void => { localConnectionState = _decode_LocalConnectionState(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = _decode_ConnectionInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherCall,
        _extension_additions_list_spec_for_OtherCall,
        _root_component_type_list_2_spec_for_OtherCall,
        undefined,
    );
    return new OtherCall(
        deviceID,
        connectionID,
        localConnectionState,
        connectionInfo
    );
}; }
    return _cached_decoder_for_OtherCall(el);
}

let _cached_encoder_for_OtherCall: $.ASN1Encoder<OtherCall> | null = null;

/**
 * @summary Encodes a(n) OtherCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherCall, encoded as an ASN.1 Element.
 */
export
function _encode_OtherCall (value: OtherCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherCall) { _cached_encoder_for_OtherCall = function (value: OtherCall, elGetter: $.ASN1Encoder<OtherCall>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.deviceID, $.BER),
            /* REQUIRED   */ _encode_ConnectionID(value.connectionID, $.BER),
            /* IF_ABSENT  */ ((value.localConnectionState === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionState, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : _encode_ConnectionInformation(value.connectionInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherCall(value, elGetter);
}


/* eslint-enable */
