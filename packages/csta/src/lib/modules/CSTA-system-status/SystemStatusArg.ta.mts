/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SysStatRegisterID, _decode_SysStatRegisterID, _encode_SysStatRegisterID } from "../CSTA-device-feature-types/SysStatRegisterID.ta.mjs";

import {
    SystemStatus,
    _enum_for_SystemStatus,
    _decode_SystemStatus,
    _encode_SystemStatus
} from "../CSTA-device-feature-types/SystemStatus.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SystemStatusArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatusArg ::= SEQUENCE
 * {     sysStatRegisterID         SysStatRegisterID         OPTIONAL,
 *     systemStatus             SystemStatus,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SystemStatusArg {
    constructor (
        /**
         * @summary `sysStatRegisterID`.
         * @public
         * @readonly
         */
        readonly sysStatRegisterID: OPTIONAL<SysStatRegisterID>,
        /**
         * @summary `systemStatus`.
         * @public
         * @readonly
         */
        readonly systemStatus: SystemStatus,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SystemStatusArg
     * @description
     * 
     * This takes an `object` and converts it to a `SystemStatusArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SystemStatusArg`.
     * @returns {SystemStatusArg}
     */
    public static _from_object (_o: { [_K in keyof (SystemStatusArg)]: (SystemStatusArg)[_K] }): SystemStatusArg {
        return new SystemStatusArg(_o.sysStatRegisterID, _o.systemStatus, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `systemStatus`
         * @public
         * @static
         */

    public static _enum_for_systemStatus = _enum_for_SystemStatus;
}

/**
 * @summary The Leading Root Component Types of SystemStatusArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SystemStatusArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sysStatRegisterID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("systemStatus", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SystemStatusArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SystemStatusArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SystemStatusArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SystemStatusArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SystemStatusArg: $.ASN1Decoder<SystemStatusArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatusArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatusArg (el: _Element): SystemStatusArg {
    if (!_cached_decoder_for_SystemStatusArg) { _cached_decoder_for_SystemStatusArg = function (el: _Element): SystemStatusArg {
    let sysStatRegisterID: OPTIONAL<SysStatRegisterID>;
    let systemStatus!: SystemStatus;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "sysStatRegisterID": (_el: _Element): void => { sysStatRegisterID = _decode_SysStatRegisterID(_el); },
        "systemStatus": (_el: _Element): void => { systemStatus = _decode_SystemStatus(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SystemStatusArg,
        _extension_additions_list_spec_for_SystemStatusArg,
        _root_component_type_list_2_spec_for_SystemStatusArg,
        undefined,
    );
    return new SystemStatusArg(
        sysStatRegisterID,
        systemStatus,
        extensions
    );
}; }
    return _cached_decoder_for_SystemStatusArg(el);
}

let _cached_encoder_for_SystemStatusArg: $.ASN1Encoder<SystemStatusArg> | null = null;

/**
 * @summary Encodes a(n) SystemStatusArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatusArg, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatusArg (value: SystemStatusArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatusArg) { _cached_encoder_for_SystemStatusArg = function (value: SystemStatusArg, elGetter: $.ASN1Encoder<SystemStatusArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sysStatRegisterID === undefined) ? undefined : _encode_SysStatRegisterID(value.sysStatRegisterID, $.BER)),
            /* REQUIRED   */ _encode_SystemStatus(value.systemStatus, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SystemStatusArg(value, elGetter);
}


/* eslint-enable */
