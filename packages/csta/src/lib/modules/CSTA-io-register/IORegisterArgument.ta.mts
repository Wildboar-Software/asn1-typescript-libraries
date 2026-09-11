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
 * @summary IORegisterArgument
 * @description
 *
 * I/O Register request. Omit `ioDevice` to register for all devices if the
 * switching function supports that option (ECMA-269 §24.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IORegisterArgument ::= SEQUENCE
 * {    ioDevice            DeviceID                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class IORegisterArgument {
    constructor (
        /**
         * @summary `ioDevice`.
         * @description
         *
         * Device for which the computing function requests to be the I/O
         * server. Mandatory if the switching function does not support
         * registering for all devices; absent means all devices in the
         * switching sub-domain (ECMA-269 §24.1.1.1).
         *
         * @public
         * @readonly
         */
        readonly ioDevice: OPTIONAL<DeviceID>,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a IORegisterArgument
     * @description
     * 
     * This takes an `object` and converts it to a `IORegisterArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IORegisterArgument`.
     * @returns {IORegisterArgument}
     */
    public static _from_object (_o: { [_K in keyof (IORegisterArgument)]: (IORegisterArgument)[_K] }): IORegisterArgument {
        return new IORegisterArgument(_o.ioDevice, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of IORegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IORegisterArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioDevice", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of IORegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IORegisterArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IORegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IORegisterArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IORegisterArgument: $.ASN1Decoder<IORegisterArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IORegisterArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IORegisterArgument (el: _Element): IORegisterArgument {
    if (!_cached_decoder_for_IORegisterArgument) { _cached_decoder_for_IORegisterArgument = function (el: _Element): IORegisterArgument {
    let ioDevice: OPTIONAL<DeviceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioDevice": (_el: _Element): void => { ioDevice = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IORegisterArgument,
        _extension_additions_list_spec_for_IORegisterArgument,
        _root_component_type_list_2_spec_for_IORegisterArgument,
        undefined,
    );
    return new IORegisterArgument(
        ioDevice,
        extensions
    );
}; }
    return _cached_decoder_for_IORegisterArgument(el);
}

let _cached_encoder_for_IORegisterArgument: $.ASN1Encoder<IORegisterArgument> | null = null;

/**
 * @summary Encodes a(n) IORegisterArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IORegisterArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IORegisterArgument (value: IORegisterArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IORegisterArgument) { _cached_encoder_for_IORegisterArgument = function (value: IORegisterArgument, elGetter: $.ASN1Encoder<IORegisterArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ioDevice === undefined) ? undefined : _encode_DeviceID(value.ioDevice, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IORegisterArgument(value, elGetter);
}


/* eslint-enable */
