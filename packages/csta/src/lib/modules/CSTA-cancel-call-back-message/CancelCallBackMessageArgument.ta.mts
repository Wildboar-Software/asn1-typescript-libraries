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
 * @summary CancelCallBackMessageArgument
 * @description
 *
 * Cancel Call Back Message request (ECMA-269 §22.1.4.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelCallBackMessageArgument ::= SEQUENCE
 * {    originatingDevice        DeviceID,
 *     targetDevice             DeviceID,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CancelCallBackMessageArgument {
    constructor (
        /**
         * @summary `originatingDevice`.
         * @description
         *
         * Party that initiated the original Call Back Message.
         * @public
         * @readonly
         */
        readonly originatingDevice: DeviceID,
        /**
         * @summary `targetDevice`.
         * @description
         *
         * Target of the original Call Back Message. Empty DeviceID cancels all
         * at the originator if supported.
         * @public
         * @readonly
         */
        readonly targetDevice: DeviceID,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a CancelCallBackMessageArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CancelCallBackMessageArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelCallBackMessageArgument`.
     * @returns {CancelCallBackMessageArgument}
     */
    public static _from_object (_o: { [_K in keyof (CancelCallBackMessageArgument)]: (CancelCallBackMessageArgument)[_K] }): CancelCallBackMessageArgument {
        return new CancelCallBackMessageArgument(_o.originatingDevice, _o.targetDevice, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CancelCallBackMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelCallBackMessageArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("targetDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CancelCallBackMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelCallBackMessageArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelCallBackMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelCallBackMessageArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelCallBackMessageArgument: $.ASN1Decoder<CancelCallBackMessageArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBackMessageArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBackMessageArgument (el: _Element): CancelCallBackMessageArgument {
    if (!_cached_decoder_for_CancelCallBackMessageArgument) { _cached_decoder_for_CancelCallBackMessageArgument = function (el: _Element): CancelCallBackMessageArgument {
    let originatingDevice!: DeviceID;
    let targetDevice!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "originatingDevice": (_el: _Element): void => { originatingDevice = _decode_DeviceID(_el); },
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelCallBackMessageArgument,
        _extension_additions_list_spec_for_CancelCallBackMessageArgument,
        _root_component_type_list_2_spec_for_CancelCallBackMessageArgument,
        undefined,
    );
    return new CancelCallBackMessageArgument(
        originatingDevice,
        targetDevice,
        extensions
    );
}; }
    return _cached_decoder_for_CancelCallBackMessageArgument(el);
}

let _cached_encoder_for_CancelCallBackMessageArgument: $.ASN1Encoder<CancelCallBackMessageArgument> | null = null;

/**
 * @summary Encodes a(n) CancelCallBackMessageArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBackMessageArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBackMessageArgument (value: CancelCallBackMessageArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBackMessageArgument) { _cached_encoder_for_CancelCallBackMessageArgument = function (value: CancelCallBackMessageArgument, elGetter: $.ASN1Encoder<CancelCallBackMessageArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.originatingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.targetDevice, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelCallBackMessageArgument(value, elGetter);
}


/* eslint-enable */
