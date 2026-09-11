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

import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetMicrophoneGainArgument
 * @description
 *
 * Get Microphone Gain request (ECMA-269 §21.1.9.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMicrophoneGainArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     auditoryApparatus        AuditoryApparatusID            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetMicrophoneGainArgument {
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
         * @summary `auditoryApparatus`.
         * @description
         *
         * Auditory apparatus to query. Absent: all apparatuses on the device.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: OPTIONAL<AuditoryApparatusID>,
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
     * @summary Restructures an object into a GetMicrophoneGainArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetMicrophoneGainArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetMicrophoneGainArgument`.
     * @returns {GetMicrophoneGainArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetMicrophoneGainArgument)]: (GetMicrophoneGainArgument)[_K] }): GetMicrophoneGainArgument {
        return new GetMicrophoneGainArgument(_o.device, _o.auditoryApparatus, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetMicrophoneGainArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetMicrophoneGainArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("auditoryApparatus", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetMicrophoneGainArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetMicrophoneGainArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetMicrophoneGainArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetMicrophoneGainArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetMicrophoneGainArgument: $.ASN1Decoder<GetMicrophoneGainArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMicrophoneGainArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMicrophoneGainArgument (el: _Element): GetMicrophoneGainArgument {
    if (!_cached_decoder_for_GetMicrophoneGainArgument) { _cached_decoder_for_GetMicrophoneGainArgument = function (el: _Element): GetMicrophoneGainArgument {
    let device!: DeviceID;
    let auditoryApparatus: OPTIONAL<AuditoryApparatusID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetMicrophoneGainArgument,
        _extension_additions_list_spec_for_GetMicrophoneGainArgument,
        _root_component_type_list_2_spec_for_GetMicrophoneGainArgument,
        undefined,
    );
    return new GetMicrophoneGainArgument(
        device,
        auditoryApparatus,
        extensions
    );
}; }
    return _cached_decoder_for_GetMicrophoneGainArgument(el);
}

let _cached_encoder_for_GetMicrophoneGainArgument: $.ASN1Encoder<GetMicrophoneGainArgument> | null = null;

/**
 * @summary Encodes a(n) GetMicrophoneGainArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMicrophoneGainArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetMicrophoneGainArgument (value: GetMicrophoneGainArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMicrophoneGainArgument) { _cached_encoder_for_GetMicrophoneGainArgument = function (value: GetMicrophoneGainArgument, elGetter: $.ASN1Encoder<GetMicrophoneGainArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.auditoryApparatus === undefined) ? undefined : _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetMicrophoneGainArgument(value, elGetter);
}


/* eslint-enable */
