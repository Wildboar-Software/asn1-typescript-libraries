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
 * @summary GetMicrophoneMuteArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMicrophoneMuteArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     auditoryApparatus        AuditoryApparatusID            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetMicrophoneMuteArgument {
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
        readonly auditoryApparatus: OPTIONAL<AuditoryApparatusID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetMicrophoneMuteArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetMicrophoneMuteArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetMicrophoneMuteArgument`.
     * @returns {GetMicrophoneMuteArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetMicrophoneMuteArgument)]: (GetMicrophoneMuteArgument)[_K] }): GetMicrophoneMuteArgument {
        return new GetMicrophoneMuteArgument(_o.device, _o.auditoryApparatus, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetMicrophoneMuteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetMicrophoneMuteArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auditoryApparatus", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetMicrophoneMuteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetMicrophoneMuteArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetMicrophoneMuteArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetMicrophoneMuteArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetMicrophoneMuteArgument: $.ASN1Decoder<GetMicrophoneMuteArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMicrophoneMuteArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMicrophoneMuteArgument (el: _Element): GetMicrophoneMuteArgument {
    if (!_cached_decoder_for_GetMicrophoneMuteArgument) { _cached_decoder_for_GetMicrophoneMuteArgument = function (el: _Element): GetMicrophoneMuteArgument {
    let device!: DeviceID;
    let auditoryApparatus: OPTIONAL<AuditoryApparatusID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetMicrophoneMuteArgument,
        _extension_additions_list_spec_for_GetMicrophoneMuteArgument,
        _root_component_type_list_2_spec_for_GetMicrophoneMuteArgument,
        undefined,
    );
    return new GetMicrophoneMuteArgument(
        device,
        auditoryApparatus,
        extensions
    );
}; }
    return _cached_decoder_for_GetMicrophoneMuteArgument(el);
}

let _cached_encoder_for_GetMicrophoneMuteArgument: $.ASN1Encoder<GetMicrophoneMuteArgument> | null = null;

/**
 * @summary Encodes a(n) GetMicrophoneMuteArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMicrophoneMuteArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetMicrophoneMuteArgument (value: GetMicrophoneMuteArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMicrophoneMuteArgument) { _cached_encoder_for_GetMicrophoneMuteArgument = function (value: GetMicrophoneMuteArgument, elGetter: $.ASN1Encoder<GetMicrophoneMuteArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.auditoryApparatus === undefined) ? undefined : _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetMicrophoneMuteArgument(value, elGetter);
}


/* eslint-enable */
