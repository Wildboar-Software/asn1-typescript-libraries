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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CancelCallBackArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelCallBackArgument ::= SEQUENCE
 * {    originatingDevice        DeviceID,
 *     targetDevice             DeviceID, 
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CancelCallBackArgument {
    constructor (
        /**
         * @summary `originatingDevice`.
         * @public
         * @readonly
         */
        readonly originatingDevice: DeviceID,
        /**
         * @summary `targetDevice`.
         * @public
         * @readonly
         */
        readonly targetDevice: DeviceID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a CancelCallBackArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CancelCallBackArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelCallBackArgument`.
     * @returns {CancelCallBackArgument}
     */
    public static _from_object (_o: { [_K in keyof (CancelCallBackArgument)]: (CancelCallBackArgument)[_K] }): CancelCallBackArgument {
        return new CancelCallBackArgument(_o.originatingDevice, _o.targetDevice, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CancelCallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelCallBackArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("targetDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CancelCallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelCallBackArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelCallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelCallBackArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelCallBackArgument: $.ASN1Decoder<CancelCallBackArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBackArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBackArgument (el: _Element): CancelCallBackArgument {
    if (!_cached_decoder_for_CancelCallBackArgument) { _cached_decoder_for_CancelCallBackArgument = function (el: _Element): CancelCallBackArgument {
    let originatingDevice!: DeviceID;
    let targetDevice!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "originatingDevice": (_el: _Element): void => { originatingDevice = _decode_DeviceID(_el); },
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelCallBackArgument,
        _extension_additions_list_spec_for_CancelCallBackArgument,
        _root_component_type_list_2_spec_for_CancelCallBackArgument,
        undefined,
    );
    return new CancelCallBackArgument(
        originatingDevice,
        targetDevice,
        extensions
    );
}; }
    return _cached_decoder_for_CancelCallBackArgument(el);
}

let _cached_encoder_for_CancelCallBackArgument: $.ASN1Encoder<CancelCallBackArgument> | null = null;

/**
 * @summary Encodes a(n) CancelCallBackArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBackArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBackArgument (value: CancelCallBackArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBackArgument) { _cached_encoder_for_CancelCallBackArgument = function (value: CancelCallBackArgument, elGetter: $.ASN1Encoder<CancelCallBackArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.originatingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.targetDevice, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelCallBackArgument(value, elGetter);
}


/* eslint-enable */
