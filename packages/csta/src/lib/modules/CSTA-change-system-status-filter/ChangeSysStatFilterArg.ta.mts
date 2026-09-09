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
 * @summary ChangeSysStatFilterArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeSysStatFilterArg ::= SEQUENCE
 * {     sysStatRegisterID         SysStatRegisterID,
 *     requestedStatusFilter         SystemStatus,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ChangeSysStatFilterArg {
    constructor (
        /**
         * @summary `sysStatRegisterID`.
         * @public
         * @readonly
         */
        readonly sysStatRegisterID: SysStatRegisterID,
        /**
         * @summary `requestedStatusFilter`.
         * @public
         * @readonly
         */
        readonly requestedStatusFilter: SystemStatus,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ChangeSysStatFilterArg
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeSysStatFilterArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeSysStatFilterArg`.
     * @returns {ChangeSysStatFilterArg}
     */
    public static _from_object (_o: { [_K in keyof (ChangeSysStatFilterArg)]: (ChangeSysStatFilterArg)[_K] }): ChangeSysStatFilterArg {
        return new ChangeSysStatFilterArg(_o.sysStatRegisterID, _o.requestedStatusFilter, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `requestedStatusFilter`
         * @public
         * @static
         */

    public static _enum_for_requestedStatusFilter = _enum_for_SystemStatus;
}

/**
 * @summary The Leading Root Component Types of ChangeSysStatFilterArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeSysStatFilterArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sysStatRegisterID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("requestedStatusFilter", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ChangeSysStatFilterArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeSysStatFilterArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeSysStatFilterArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeSysStatFilterArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeSysStatFilterArg: $.ASN1Decoder<ChangeSysStatFilterArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeSysStatFilterArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeSysStatFilterArg (el: _Element): ChangeSysStatFilterArg {
    if (!_cached_decoder_for_ChangeSysStatFilterArg) { _cached_decoder_for_ChangeSysStatFilterArg = function (el: _Element): ChangeSysStatFilterArg {
    let sysStatRegisterID!: SysStatRegisterID;
    let requestedStatusFilter!: SystemStatus;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "sysStatRegisterID": (_el: _Element): void => { sysStatRegisterID = _decode_SysStatRegisterID(_el); },
        "requestedStatusFilter": (_el: _Element): void => { requestedStatusFilter = _decode_SystemStatus(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeSysStatFilterArg,
        _extension_additions_list_spec_for_ChangeSysStatFilterArg,
        _root_component_type_list_2_spec_for_ChangeSysStatFilterArg,
        undefined,
    );
    return new ChangeSysStatFilterArg(
        sysStatRegisterID,
        requestedStatusFilter,
        extensions
    );
}; }
    return _cached_decoder_for_ChangeSysStatFilterArg(el);
}

let _cached_encoder_for_ChangeSysStatFilterArg: $.ASN1Encoder<ChangeSysStatFilterArg> | null = null;

/**
 * @summary Encodes a(n) ChangeSysStatFilterArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeSysStatFilterArg, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeSysStatFilterArg (value: ChangeSysStatFilterArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeSysStatFilterArg) { _cached_encoder_for_ChangeSysStatFilterArg = function (value: ChangeSysStatFilterArg, elGetter: $.ASN1Encoder<ChangeSysStatFilterArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SysStatRegisterID(value.sysStatRegisterID, $.BER),
            /* REQUIRED   */ _encode_SystemStatus(value.requestedStatusFilter, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeSysStatFilterArg(value, elGetter);
}


/* eslint-enable */
