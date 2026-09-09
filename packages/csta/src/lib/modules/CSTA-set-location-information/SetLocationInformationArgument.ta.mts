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

import { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../CSTA-call-control/LocationInfo.ta.mjs";

import {
    ReplaceMode,
    _enum_for_ReplaceMode,
    _decode_ReplaceMode,
    _encode_ReplaceMode
} from "../CSTA-set-location-information/ReplaceMode.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetLocationInformationArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetLocationInformationArgument ::= SEQUENCE
 * {    device                DeviceID,
 *     locationInfo            LocationInfo                OPTIONAL,
 *     replaceMode            ReplaceMode                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetLocationInformationArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `locationInfo`.
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfo>,
        /**
         * @summary `replaceMode`.
         * @public
         * @readonly
         */
        readonly replaceMode: OPTIONAL<ReplaceMode>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetLocationInformationArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetLocationInformationArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetLocationInformationArgument`.
     * @returns {SetLocationInformationArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetLocationInformationArgument)]: (SetLocationInformationArgument)[_K] }): SetLocationInformationArgument {
        return new SetLocationInformationArgument(_o.device, _o.locationInfo, _o.replaceMode, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `replaceMode`
         * @public
         * @static
         */

    public static _enum_for_replaceMode = _enum_for_ReplaceMode;
}

/**
 * @summary The Leading Root Component Types of SetLocationInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetLocationInformationArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("replaceMode", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetLocationInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetLocationInformationArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetLocationInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetLocationInformationArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetLocationInformationArgument: $.ASN1Decoder<SetLocationInformationArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetLocationInformationArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetLocationInformationArgument (el: _Element): SetLocationInformationArgument {
    if (!_cached_decoder_for_SetLocationInformationArgument) { _cached_decoder_for_SetLocationInformationArgument = function (el: _Element): SetLocationInformationArgument {
    let device!: DeviceID;
    let locationInfo: OPTIONAL<LocationInfo>;
    let replaceMode: OPTIONAL<ReplaceMode>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = _decode_LocationInfo(_el); },
        "replaceMode": (_el: _Element): void => { replaceMode = _decode_ReplaceMode(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetLocationInformationArgument,
        _extension_additions_list_spec_for_SetLocationInformationArgument,
        _root_component_type_list_2_spec_for_SetLocationInformationArgument,
        undefined,
    );
    return new SetLocationInformationArgument(
        device,
        locationInfo,
        replaceMode,
        extensions
    );
}; }
    return _cached_decoder_for_SetLocationInformationArgument(el);
}

let _cached_encoder_for_SetLocationInformationArgument: $.ASN1Encoder<SetLocationInformationArgument> | null = null;

/**
 * @summary Encodes a(n) SetLocationInformationArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetLocationInformationArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetLocationInformationArgument (value: SetLocationInformationArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetLocationInformationArgument) { _cached_encoder_for_SetLocationInformationArgument = function (value: SetLocationInformationArgument, elGetter: $.ASN1Encoder<SetLocationInformationArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : _encode_LocationInfo(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.replaceMode === undefined) ? undefined : _encode_ReplaceMode(value.replaceMode, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetLocationInformationArgument(value, elGetter);
}


/* eslint-enable */
