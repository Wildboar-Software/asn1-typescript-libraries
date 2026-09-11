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

import {
    ReqDeviceCategory,
    _enum_for_ReqDeviceCategory,
    _decode_ReqDeviceCategory,
    _encode_ReqDeviceCategory
} from "../CSTA-get-switching-function-devices/ReqDeviceCategory.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetSwitchingFunctionDevicesArgument
 * @description
 *
 * Service request (ECMA-269 Table 13-10). Omit both filters for
 * all devices in the working domain.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionDevicesArgument ::= SEQUENCE
 * {     requestedDeviceID         DeviceID             OPTIONAL,
 *     requestedDeviceCategory     ReqDeviceCategory         OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSwitchingFunctionDevicesArgument {
    constructor (
        /**
         * @summary `requestedDeviceID`.
         * @description
         *
         * If present, query this device only (still subject to
         * `requestedDeviceCategory`).
         * @public
         * @readonly
         */
        readonly requestedDeviceID: OPTIONAL<DeviceID>,
        /**
         * @summary `requestedDeviceCategory`.
         * @description
         *
         * Restrict the list to this category (group ACD/hunt/pick/user/
         * other, IV variants, station, routeing, etc.).
         * @public
         * @readonly
         */
        readonly requestedDeviceCategory: OPTIONAL<ReqDeviceCategory>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData. ECMA-269 Table 13-10.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetSwitchingFunctionDevicesArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetSwitchingFunctionDevicesArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSwitchingFunctionDevicesArgument`.
     * @returns {GetSwitchingFunctionDevicesArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetSwitchingFunctionDevicesArgument)]: (GetSwitchingFunctionDevicesArgument)[_K] }): GetSwitchingFunctionDevicesArgument {
        return new GetSwitchingFunctionDevicesArgument(_o.requestedDeviceID, _o.requestedDeviceCategory, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `requestedDeviceCategory`
         * @public
         * @static
         */

    public static _enum_for_requestedDeviceCategory = _enum_for_ReqDeviceCategory;
}

/**
 * @summary The Leading Root Component Types of GetSwitchingFunctionDevicesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSwitchingFunctionDevicesArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedDeviceID", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("requestedDeviceCategory", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetSwitchingFunctionDevicesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSwitchingFunctionDevicesArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSwitchingFunctionDevicesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSwitchingFunctionDevicesArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSwitchingFunctionDevicesArgument: $.ASN1Decoder<GetSwitchingFunctionDevicesArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionDevicesArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionDevicesArgument (el: _Element): GetSwitchingFunctionDevicesArgument {
    if (!_cached_decoder_for_GetSwitchingFunctionDevicesArgument) { _cached_decoder_for_GetSwitchingFunctionDevicesArgument = function (el: _Element): GetSwitchingFunctionDevicesArgument {
    let requestedDeviceID: OPTIONAL<DeviceID>;
    let requestedDeviceCategory: OPTIONAL<ReqDeviceCategory>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "requestedDeviceID": (_el: _Element): void => { requestedDeviceID = _decode_DeviceID(_el); },
        "requestedDeviceCategory": (_el: _Element): void => { requestedDeviceCategory = _decode_ReqDeviceCategory(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSwitchingFunctionDevicesArgument,
        _extension_additions_list_spec_for_GetSwitchingFunctionDevicesArgument,
        _root_component_type_list_2_spec_for_GetSwitchingFunctionDevicesArgument,
        undefined,
    );
    return new GetSwitchingFunctionDevicesArgument(
        requestedDeviceID,
        requestedDeviceCategory,
        extensions
    );
}; }
    return _cached_decoder_for_GetSwitchingFunctionDevicesArgument(el);
}

let _cached_encoder_for_GetSwitchingFunctionDevicesArgument: $.ASN1Encoder<GetSwitchingFunctionDevicesArgument> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionDevicesArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionDevicesArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionDevicesArgument (value: GetSwitchingFunctionDevicesArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionDevicesArgument) { _cached_encoder_for_GetSwitchingFunctionDevicesArgument = function (value: GetSwitchingFunctionDevicesArgument, elGetter: $.ASN1Encoder<GetSwitchingFunctionDevicesArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestedDeviceID === undefined) ? undefined : _encode_DeviceID(value.requestedDeviceID, $.BER)),
            /* IF_ABSENT  */ ((value.requestedDeviceCategory === undefined) ? undefined : _encode_ReqDeviceCategory(value.requestedDeviceCategory, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSwitchingFunctionDevicesArgument(value, elGetter);
}


/* eslint-enable */
