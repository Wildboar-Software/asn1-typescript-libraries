/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DirectedPickupCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectedPickupCallArgument ::= SEQUENCE
 * {     callToBePickedUp         ConnectionID,
 *     requestingDevice         DeviceID,
 *     correlatorData             CorrelatorData             OPTIONAL,
 *     userData             UserData             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DirectedPickupCallArgument {
    constructor (
        /**
         * @summary `callToBePickedUp`.
         * @public
         * @readonly
         */
        readonly callToBePickedUp: ConnectionID,
        /**
         * @summary `requestingDevice`.
         * @public
         * @readonly
         */
        readonly requestingDevice: DeviceID,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DirectedPickupCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DirectedPickupCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectedPickupCallArgument`.
     * @returns {DirectedPickupCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (DirectedPickupCallArgument)]: (DirectedPickupCallArgument)[_K] }): DirectedPickupCallArgument {
        return new DirectedPickupCallArgument(_o.callToBePickedUp, _o.requestingDevice, _o.correlatorData, _o.userData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DirectedPickupCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DirectedPickupCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callToBePickedUp", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("requestingDevice", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DirectedPickupCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DirectedPickupCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DirectedPickupCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DirectedPickupCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DirectedPickupCallArgument: $.ASN1Decoder<DirectedPickupCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectedPickupCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectedPickupCallArgument (el: _Element): DirectedPickupCallArgument {
    if (!_cached_decoder_for_DirectedPickupCallArgument) { _cached_decoder_for_DirectedPickupCallArgument = function (el: _Element): DirectedPickupCallArgument {
    let callToBePickedUp!: ConnectionID;
    let requestingDevice!: DeviceID;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callToBePickedUp": (_el: _Element): void => { callToBePickedUp = _decode_ConnectionID(_el); },
        "requestingDevice": (_el: _Element): void => { requestingDevice = _decode_DeviceID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = _decode_CorrelatorData(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DirectedPickupCallArgument,
        _extension_additions_list_spec_for_DirectedPickupCallArgument,
        _root_component_type_list_2_spec_for_DirectedPickupCallArgument,
        undefined,
    );
    return new DirectedPickupCallArgument(
        callToBePickedUp,
        requestingDevice,
        correlatorData,
        userData,
        extensions
    );
}; }
    return _cached_decoder_for_DirectedPickupCallArgument(el);
}

let _cached_encoder_for_DirectedPickupCallArgument: $.ASN1Encoder<DirectedPickupCallArgument> | null = null;

/**
 * @summary Encodes a(n) DirectedPickupCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectedPickupCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DirectedPickupCallArgument (value: DirectedPickupCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectedPickupCallArgument) { _cached_encoder_for_DirectedPickupCallArgument = function (value: DirectedPickupCallArgument, elGetter: $.ASN1Encoder<DirectedPickupCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.callToBePickedUp, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.requestingDevice, $.BER),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : _encode_CorrelatorData(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DirectedPickupCallArgument(value, elGetter);
}


/* eslint-enable */
