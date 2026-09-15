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

import { ButtonID, _decode_ButtonID, _encode_ButtonID } from "../CSTA-physical-device-feature/ButtonID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetButtonInformationArgument
 * @description
 *
 * Get Button Information request (ECMA-269 §21.1.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetButtonInformationArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     button                 ButtonID                OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetButtonInformationArgument {
    constructor (
        /**
         * @summary `device`.
         * @description
         *
         * Physical-element DeviceID; other IDs are rejected (ECMA-269 §21 FR
         * 1).
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `button`.
         * @description
         *
         * Button to query. Absent: all buttons. Reserved ButtonIDs in Table
         * 12-3: `0`–`9`, `*`=10, `#`=11 (ECMA-269 §12.3.5).
         * @public
         * @readonly
         */
        readonly button: OPTIONAL<ButtonID>,
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
     * @summary Restructures an object into a GetButtonInformationArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetButtonInformationArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetButtonInformationArgument`.
     * @returns {GetButtonInformationArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetButtonInformationArgument)]: (GetButtonInformationArgument)[_K] }): GetButtonInformationArgument {
        return new GetButtonInformationArgument(_o.device, _o.button, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetButtonInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetButtonInformationArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("button", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetButtonInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetButtonInformationArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetButtonInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetButtonInformationArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetButtonInformationArgument: $.ASN1Decoder<GetButtonInformationArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetButtonInformationArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetButtonInformationArgument (el: _Element): GetButtonInformationArgument {
    if (!_cached_decoder_for_GetButtonInformationArgument) { _cached_decoder_for_GetButtonInformationArgument = function (el: _Element): GetButtonInformationArgument {
    let device!: DeviceID;
    let button: OPTIONAL<ButtonID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "button": (_el: _Element): void => { button = _decode_ButtonID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetButtonInformationArgument,
        _extension_additions_list_spec_for_GetButtonInformationArgument,
        _root_component_type_list_2_spec_for_GetButtonInformationArgument,
        undefined,
    );
    return new GetButtonInformationArgument(
        device,
        button,
        extensions
    );
}; }
    return _cached_decoder_for_GetButtonInformationArgument(el);
}

let _cached_encoder_for_GetButtonInformationArgument: $.ASN1Encoder<GetButtonInformationArgument> | null = null;

/**
 * @summary Encodes a(n) GetButtonInformationArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetButtonInformationArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetButtonInformationArgument (value: GetButtonInformationArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetButtonInformationArgument) { _cached_encoder_for_GetButtonInformationArgument = function (value: GetButtonInformationArgument, elGetter: $.ASN1Encoder<GetButtonInformationArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.button === undefined) ? undefined : _encode_ButtonID(value.button, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetButtonInformationArgument(value, elGetter);
}


/* eslint-enable */
