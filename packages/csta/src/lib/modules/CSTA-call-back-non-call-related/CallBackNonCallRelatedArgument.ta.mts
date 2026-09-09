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
 * @summary CallBackNonCallRelatedArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackNonCallRelatedArgument ::= SEQUENCE
 * {    originatingDevice         DeviceID,
 *     targetDevice             DeviceID,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallBackNonCallRelatedArgument {
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
     * @summary Restructures an object into a CallBackNonCallRelatedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CallBackNonCallRelatedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBackNonCallRelatedArgument`.
     * @returns {CallBackNonCallRelatedArgument}
     */
    public static _from_object (_o: { [_K in keyof (CallBackNonCallRelatedArgument)]: (CallBackNonCallRelatedArgument)[_K] }): CallBackNonCallRelatedArgument {
        return new CallBackNonCallRelatedArgument(_o.originatingDevice, _o.targetDevice, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallBackNonCallRelatedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBackNonCallRelatedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingDevice", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetDevice", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CallBackNonCallRelatedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBackNonCallRelatedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBackNonCallRelatedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBackNonCallRelatedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBackNonCallRelatedArgument: $.ASN1Decoder<CallBackNonCallRelatedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackNonCallRelatedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackNonCallRelatedArgument (el: _Element): CallBackNonCallRelatedArgument {
    if (!_cached_decoder_for_CallBackNonCallRelatedArgument) { _cached_decoder_for_CallBackNonCallRelatedArgument = function (el: _Element): CallBackNonCallRelatedArgument {
    let originatingDevice!: DeviceID;
    let targetDevice!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "originatingDevice": (_el: _Element): void => { originatingDevice = _decode_DeviceID(_el); },
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBackNonCallRelatedArgument,
        _extension_additions_list_spec_for_CallBackNonCallRelatedArgument,
        _root_component_type_list_2_spec_for_CallBackNonCallRelatedArgument,
        undefined,
    );
    return new CallBackNonCallRelatedArgument(
        originatingDevice,
        targetDevice,
        extensions
    );
}; }
    return _cached_decoder_for_CallBackNonCallRelatedArgument(el);
}

let _cached_encoder_for_CallBackNonCallRelatedArgument: $.ASN1Encoder<CallBackNonCallRelatedArgument> | null = null;

/**
 * @summary Encodes a(n) CallBackNonCallRelatedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackNonCallRelatedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackNonCallRelatedArgument (value: CallBackNonCallRelatedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackNonCallRelatedArgument) { _cached_encoder_for_CallBackNonCallRelatedArgument = function (value: CallBackNonCallRelatedArgument, elGetter: $.ASN1Encoder<CallBackNonCallRelatedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.originatingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.targetDevice, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBackNonCallRelatedArgument(value, elGetter);
}


/* eslint-enable */
