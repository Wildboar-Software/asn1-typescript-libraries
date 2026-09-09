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

import { MicrophoneGain, _decode_MicrophoneGain, _encode_MicrophoneGain } from "../CSTA-physical-device-feature/MicrophoneGain.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetMicrophoneGainArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMicrophoneGainArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     auditoryApparatus        AuditoryApparatusID,
 *     microphoneGain            MicrophoneGain,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetMicrophoneGainArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `auditoryApparatus`.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `microphoneGain`.
         * @public
         * @readonly
         */
        readonly microphoneGain: MicrophoneGain,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetMicrophoneGainArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetMicrophoneGainArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetMicrophoneGainArgument`.
     * @returns {SetMicrophoneGainArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetMicrophoneGainArgument)]: (SetMicrophoneGainArgument)[_K] }): SetMicrophoneGainArgument {
        return new SetMicrophoneGainArgument(_o.device, _o.auditoryApparatus, _o.microphoneGain, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetMicrophoneGainArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetMicrophoneGainArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("microphoneGain", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetMicrophoneGainArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetMicrophoneGainArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetMicrophoneGainArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetMicrophoneGainArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetMicrophoneGainArgument: $.ASN1Decoder<SetMicrophoneGainArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMicrophoneGainArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMicrophoneGainArgument (el: _Element): SetMicrophoneGainArgument {
    if (!_cached_decoder_for_SetMicrophoneGainArgument) { _cached_decoder_for_SetMicrophoneGainArgument = function (el: _Element): SetMicrophoneGainArgument {
    let device!: DeviceID;
    let auditoryApparatus!: AuditoryApparatusID;
    let microphoneGain!: MicrophoneGain;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "microphoneGain": (_el: _Element): void => { microphoneGain = _decode_MicrophoneGain(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetMicrophoneGainArgument,
        _extension_additions_list_spec_for_SetMicrophoneGainArgument,
        _root_component_type_list_2_spec_for_SetMicrophoneGainArgument,
        undefined,
    );
    return new SetMicrophoneGainArgument(
        device,
        auditoryApparatus,
        microphoneGain,
        extensions
    );
}; }
    return _cached_decoder_for_SetMicrophoneGainArgument(el);
}

let _cached_encoder_for_SetMicrophoneGainArgument: $.ASN1Encoder<SetMicrophoneGainArgument> | null = null;

/**
 * @summary Encodes a(n) SetMicrophoneGainArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMicrophoneGainArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetMicrophoneGainArgument (value: SetMicrophoneGainArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMicrophoneGainArgument) { _cached_encoder_for_SetMicrophoneGainArgument = function (value: SetMicrophoneGainArgument, elGetter: $.ASN1Encoder<SetMicrophoneGainArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ _encode_MicrophoneGain(value.microphoneGain, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetMicrophoneGainArgument(value, elGetter);
}


/* eslint-enable */
