/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Octet4, _decode_Octet4, _encode_Octet4 } from "../RSPDefinitions/Octet4.ta.mjs";
import { DeviceCapabilities, _decode_DeviceCapabilities, _encode_DeviceCapabilities } from "../RSPDefinitions/DeviceCapabilities.ta.mjs";
import { Octet8, _decode_Octet8, _encode_Octet8 } from "../RSPDefinitions/Octet8.ta.mjs";


/**
 * @summary DeviceInfo
 * @description
 * 
 * Device identity and capabilities sent to the SM-DP+ for an eligibility check.
 * The server may use or ignore them. The LPA should not send fields marked
 * device-info-extensible to an eUICC that did not set
 * `deviceInfoExtensibilitySupport`. SGP.22 v3.1 §4.2. This module's
 * `DeviceInfo` is the earlier structure: TAC, capabilities, and optional IMEI.
 * v3.1 adds preferred languages, Device Test Mode, and `LpaRspCapability`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceInfo ::= SEQUENCE {
 *     tac Octet4,
 *     deviceCapabilities DeviceCapabilities,
 *     imei Octet8 OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DeviceInfo {
    constructor (
        /**
         * @summary `tac`.
         * @description
         * 
         * Type Allocation Code, four octets, telephony BCD. The first eight
         * digits of the IMEI. SGP.22 v3.1 §4.2.
         * 
         * @public
         * @readonly
         */
        readonly tac: Octet4,
        /**
         * @summary `deviceCapabilities`.
         * @description
         * 
         * Access technologies and other device features the SM-DP+ may use for
         * eligibility. SGP.22 v3.1 §4.2.
         * 
         * @public
         * @readonly
         */
        readonly deviceCapabilities: DeviceCapabilities,
        /**
         * @summary `imei`.
         * @description
         * 
         * Optional IMEI, eight octets, telephony BCD, check digit in the low
         * nibble of the last octet and `'F'` in the high nibble. Should be
         * present for a non-removable eUICC. v2 and v3 nibble order of that
         * last octet differ; v3.1 §4.2 warns servers about the v2 encoding.
         * 
         * @public
         * @readonly
         */
        readonly imei: OPTIONAL<Octet8>
    ) {}

    /**
     * @summary Restructures an object into a DeviceInfo
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceInfo`.
     * @returns {DeviceInfo}
     */
    public static _from_object (_o: { [_K in keyof (DeviceInfo)]: (DeviceInfo)[_K] }): DeviceInfo {
        return new DeviceInfo(_o.tac, _o.deviceCapabilities, _o.imei);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("tac", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deviceCapabilities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DeviceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceInfo: $.ASN1Decoder<DeviceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceInfo (el: _Element): DeviceInfo {
    if (!_cached_decoder_for_DeviceInfo) { _cached_decoder_for_DeviceInfo = function (el: _Element): DeviceInfo {
    let tac!: Octet4;
    let deviceCapabilities!: DeviceCapabilities;
    let imei: OPTIONAL<Octet8>;
    const callbacks: $.DecodingMap = {
        "tac": (_el: _Element): void => { tac = _decode_Octet4(_el); },
        "deviceCapabilities": (_el: _Element): void => { deviceCapabilities = _decode_DeviceCapabilities(_el); },
        "imei": (_el: _Element): void => { imei = _decode_Octet8(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceInfo,
        _extension_additions_list_spec_for_DeviceInfo,
        _root_component_type_list_2_spec_for_DeviceInfo,
        undefined,
    );
    return new DeviceInfo(
        tac,
        deviceCapabilities,
        imei
    );
}; }
    return _cached_decoder_for_DeviceInfo(el);
}

let _cached_encoder_for_DeviceInfo: $.ASN1Encoder<DeviceInfo> | null = null;

/**
 * @summary Encodes a(n) DeviceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceInfo (value: DeviceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceInfo) { _cached_encoder_for_DeviceInfo = function (value: DeviceInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Octet4(value.tac, $.BER),
            /* REQUIRED   */ _encode_DeviceCapabilities(value.deviceCapabilities, $.BER),
            /* IF_ABSENT  */ ((value.imei === undefined) ? undefined : _encode_Octet8(value.imei, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceInfo(value, elGetter);
}


/* eslint-enable */
