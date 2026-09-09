/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { GetCSTAFeatures, _decode_GetCSTAFeatures, _encode_GetCSTAFeatures } from "../CSTA-capability-exchange/GetCSTAFeatures.ta.mjs";

import { GetLogicalDeviceInformation, _decode_GetLogicalDeviceInformation, _encode_GetLogicalDeviceInformation } from "../CSTA-capability-exchange/GetLogicalDeviceInformation.ta.mjs";

import { GetPhysicalDeviceInformation, _decode_GetPhysicalDeviceInformation, _encode_GetPhysicalDeviceInformation } from "../CSTA-capability-exchange/GetPhysicalDeviceInformation.ta.mjs";

import {
    GetSwitchingFunctionCapabilities,
    _decode_GetSwitchingFunctionCapabilities,
    _encode_GetSwitchingFunctionCapabilities
} from "../CSTA-capability-exchange/GetSwitchingFunctionCapabilities.ta.mjs";

import { GetSwitchingFunctionDevices, _decode_GetSwitchingFunctionDevices, _encode_GetSwitchingFunctionDevices } from "../CSTA-capability-exchange/GetSwitchingFunctionDevices.ta.mjs";

import { SwitchingFunctionDevices, _decode_SwitchingFunctionDevices, _encode_SwitchingFunctionDevices } from "../CSTA-capability-exchange/SwitchingFunctionDevices.ta.mjs";



/**
 * @summary CapExchangeServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CapExchangeServList ::= SEQUENCE
 * {     getCSTAFeatures            [5] IMPLICIT GetCSTAFeatures            OPTIONAL,
 *     getLogicalDeviceInformation     [0] IMPLICIT GetLogicalDeviceInformation     OPTIONAL,
 *     getPhysicalDeviceInformation     [1] IMPLICIT GetPhysicalDeviceInformation     OPTIONAL,
 *     getSwitchingFunctionCaps    [4] IMPLICIT GetSwitchingFunctionCapabilities    OPTIONAL,
 *     getSwitchingFunctionDevices     [2] IMPLICIT GetSwitchingFunctionDevices     OPTIONAL,
 *     switchingFunctionDevices     [3] IMPLICIT SwitchingFunctionDevices         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CapExchangeServList {
    constructor (
        /**
         * @summary `getCSTAFeatures`.
         * @public
         * @readonly
         */
        readonly getCSTAFeatures: OPTIONAL<GetCSTAFeatures>,
        /**
         * @summary `getLogicalDeviceInformation`.
         * @public
         * @readonly
         */
        readonly getLogicalDeviceInformation: OPTIONAL<GetLogicalDeviceInformation>,
        /**
         * @summary `getPhysicalDeviceInformation`.
         * @public
         * @readonly
         */
        readonly getPhysicalDeviceInformation: OPTIONAL<GetPhysicalDeviceInformation>,
        /**
         * @summary `getSwitchingFunctionCaps`.
         * @public
         * @readonly
         */
        readonly getSwitchingFunctionCaps: OPTIONAL<GetSwitchingFunctionCapabilities>,
        /**
         * @summary `getSwitchingFunctionDevices`.
         * @public
         * @readonly
         */
        readonly getSwitchingFunctionDevices: OPTIONAL<GetSwitchingFunctionDevices>,
        /**
         * @summary `switchingFunctionDevices`.
         * @public
         * @readonly
         */
        readonly switchingFunctionDevices: OPTIONAL<SwitchingFunctionDevices>
    ) {}

    /**
     * @summary Restructures an object into a CapExchangeServList
     * @description
     * 
     * This takes an `object` and converts it to a `CapExchangeServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CapExchangeServList`.
     * @returns {CapExchangeServList}
     */
    public static _from_object (_o: { [_K in keyof (CapExchangeServList)]: (CapExchangeServList)[_K] }): CapExchangeServList {
        return new CapExchangeServList(_o.getCSTAFeatures, _o.getLogicalDeviceInformation, _o.getPhysicalDeviceInformation, _o.getSwitchingFunctionCaps, _o.getSwitchingFunctionDevices, _o.switchingFunctionDevices);
    }


}

/**
 * @summary The Leading Root Component Types of CapExchangeServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CapExchangeServList: $.ComponentSpec[] = [
    new $.ComponentSpec("getCSTAFeatures", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("getLogicalDeviceInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("getPhysicalDeviceInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("getSwitchingFunctionCaps", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("getSwitchingFunctionDevices", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("switchingFunctionDevices", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CapExchangeServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CapExchangeServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CapExchangeServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CapExchangeServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CapExchangeServList: $.ASN1Decoder<CapExchangeServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CapExchangeServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CapExchangeServList (el: _Element): CapExchangeServList {
    if (!_cached_decoder_for_CapExchangeServList) { _cached_decoder_for_CapExchangeServList = function (el: _Element): CapExchangeServList {
    let getCSTAFeatures: OPTIONAL<GetCSTAFeatures>;
    let getLogicalDeviceInformation: OPTIONAL<GetLogicalDeviceInformation>;
    let getPhysicalDeviceInformation: OPTIONAL<GetPhysicalDeviceInformation>;
    let getSwitchingFunctionCaps: OPTIONAL<GetSwitchingFunctionCapabilities>;
    let getSwitchingFunctionDevices: OPTIONAL<GetSwitchingFunctionDevices>;
    let switchingFunctionDevices: OPTIONAL<SwitchingFunctionDevices>;
    const callbacks: $.DecodingMap = {
        "getCSTAFeatures": (_el: _Element): void => { getCSTAFeatures = $._decode_implicit<GetCSTAFeatures>(() => _decode_GetCSTAFeatures)(_el); },
        "getLogicalDeviceInformation": (_el: _Element): void => { getLogicalDeviceInformation = $._decode_implicit<GetLogicalDeviceInformation>(() => _decode_GetLogicalDeviceInformation)(_el); },
        "getPhysicalDeviceInformation": (_el: _Element): void => { getPhysicalDeviceInformation = $._decode_implicit<GetPhysicalDeviceInformation>(() => _decode_GetPhysicalDeviceInformation)(_el); },
        "getSwitchingFunctionCaps": (_el: _Element): void => { getSwitchingFunctionCaps = $._decode_implicit<GetSwitchingFunctionCapabilities>(() => _decode_GetSwitchingFunctionCapabilities)(_el); },
        "getSwitchingFunctionDevices": (_el: _Element): void => { getSwitchingFunctionDevices = $._decode_implicit<GetSwitchingFunctionDevices>(() => _decode_GetSwitchingFunctionDevices)(_el); },
        "switchingFunctionDevices": (_el: _Element): void => { switchingFunctionDevices = $._decode_implicit<SwitchingFunctionDevices>(() => _decode_SwitchingFunctionDevices)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CapExchangeServList,
        _extension_additions_list_spec_for_CapExchangeServList,
        _root_component_type_list_2_spec_for_CapExchangeServList,
        undefined,
    );
    return new CapExchangeServList(
        getCSTAFeatures,
        getLogicalDeviceInformation,
        getPhysicalDeviceInformation,
        getSwitchingFunctionCaps,
        getSwitchingFunctionDevices,
        switchingFunctionDevices
    );
}; }
    return _cached_decoder_for_CapExchangeServList(el);
}

let _cached_encoder_for_CapExchangeServList: $.ASN1Encoder<CapExchangeServList> | null = null;

/**
 * @summary Encodes a(n) CapExchangeServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CapExchangeServList, encoded as an ASN.1 Element.
 */
export
function _encode_CapExchangeServList (value: CapExchangeServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CapExchangeServList) { _cached_encoder_for_CapExchangeServList = function (value: CapExchangeServList, elGetter: $.ASN1Encoder<CapExchangeServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.getCSTAFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GetCSTAFeatures, $.BER)(value.getCSTAFeatures, $.BER)),
            /* IF_ABSENT  */ ((value.getLogicalDeviceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GetLogicalDeviceInformation, $.BER)(value.getLogicalDeviceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.getPhysicalDeviceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GetPhysicalDeviceInformation, $.BER)(value.getPhysicalDeviceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.getSwitchingFunctionCaps === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GetSwitchingFunctionCapabilities, $.BER)(value.getSwitchingFunctionCaps, $.BER)),
            /* IF_ABSENT  */ ((value.getSwitchingFunctionDevices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GetSwitchingFunctionDevices, $.BER)(value.getSwitchingFunctionDevices, $.BER)),
            /* IF_ABSENT  */ ((value.switchingFunctionDevices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SwitchingFunctionDevices, $.BER)(value.switchingFunctionDevices, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CapExchangeServList(value, elGetter);
}


/* eslint-enable */
