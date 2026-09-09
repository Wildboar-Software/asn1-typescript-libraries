/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetMicrophoneMuteArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMicrophoneMuteArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     auditoryApparatus        AuditoryApparatusID,
 *     microphoneMuteOn        BOOLEAN,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetMicrophoneMuteArgument {
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
         * @summary `microphoneMuteOn`.
         * @public
         * @readonly
         */
        readonly microphoneMuteOn: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetMicrophoneMuteArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetMicrophoneMuteArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetMicrophoneMuteArgument`.
     * @returns {SetMicrophoneMuteArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetMicrophoneMuteArgument)]: (SetMicrophoneMuteArgument)[_K] }): SetMicrophoneMuteArgument {
        return new SetMicrophoneMuteArgument(_o.device, _o.auditoryApparatus, _o.microphoneMuteOn, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetMicrophoneMuteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetMicrophoneMuteArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("microphoneMuteOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetMicrophoneMuteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetMicrophoneMuteArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetMicrophoneMuteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetMicrophoneMuteArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetMicrophoneMuteArgument: $.ASN1Decoder<SetMicrophoneMuteArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMicrophoneMuteArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMicrophoneMuteArgument (el: _Element): SetMicrophoneMuteArgument {
    if (!_cached_decoder_for_SetMicrophoneMuteArgument) { _cached_decoder_for_SetMicrophoneMuteArgument = function (el: _Element): SetMicrophoneMuteArgument {
    let device!: DeviceID;
    let auditoryApparatus!: AuditoryApparatusID;
    let microphoneMuteOn!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "microphoneMuteOn": (_el: _Element): void => { microphoneMuteOn = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetMicrophoneMuteArgument,
        _extension_additions_list_spec_for_SetMicrophoneMuteArgument,
        _root_component_type_list_2_spec_for_SetMicrophoneMuteArgument,
        undefined,
    );
    return new SetMicrophoneMuteArgument(
        device,
        auditoryApparatus,
        microphoneMuteOn,
        extensions
    );
}; }
    return _cached_decoder_for_SetMicrophoneMuteArgument(el);
}

let _cached_encoder_for_SetMicrophoneMuteArgument: $.ASN1Encoder<SetMicrophoneMuteArgument> | null = null;

/**
 * @summary Encodes a(n) SetMicrophoneMuteArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMicrophoneMuteArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetMicrophoneMuteArgument (value: SetMicrophoneMuteArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMicrophoneMuteArgument) { _cached_encoder_for_SetMicrophoneMuteArgument = function (value: SetMicrophoneMuteArgument, elGetter: $.ASN1Encoder<SetMicrophoneMuteArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.microphoneMuteOn, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetMicrophoneMuteArgument(value, elGetter);
}


/* eslint-enable */
