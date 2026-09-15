/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    ForwardingType,
    _enum_for_ForwardingType,
    _decode_ForwardingType,
    _encode_ForwardingType
} from "../CSTA-device-feature-types/ForwardingType.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetForwardingArgument
 * @description
 *
 * Set Forwarding request (ECMA-269 §22.1.20.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetForwardingArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     forwardingType             ForwardingType                OPTIONAL,
 *     activateForward            BOOLEAN,
 *     forwardDN             DeviceID                OPTIONAL,
 *     ringCount             INTEGER (1..100)            OPTIONAL,
 *     ringDuration            [3] IMPLICIT INTEGER            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetForwardingArgument {
    constructor (
        /**
         * @summary `device`.
         * @description
         *
         * Device on which to set forwarding.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `forwardingType`.
         * @description
         *
         * Required for user-specified settings; omit for SF default settings.
         * Values: forwardImmediate, forwardBusy, forwardDND, forwardNoAns, and
         * Int/Ext variants (§6.7.1).
         * @public
         * @readonly
         */
        readonly forwardingType: OPTIONAL<ForwardingType>,
        /**
         * @summary `activateForward`.
         * @description
         *
         * FALSE = deactivate; TRUE = activate.
         * @public
         * @readonly
         */
        readonly activateForward: BOOLEAN,
        /**
         * @summary `forwardDN`.
         * @description
         *
         * Forward destination. Required for user settings when activating; omit
         * for SF default settings.
         * @public
         * @readonly
         */
        readonly forwardDN: OPTIONAL<DeviceID>,
        /**
         * @summary `ringCount`.
         * @description
         *
         * Rings (1...100) before forward-no-answer. Only with activateForward
         * TRUE and forwardNoAns{,Int,Ext}.
         * @public
         * @readonly
         */
        readonly ringCount: OPTIONAL<INTEGER>,
        /**
         * @summary `ringDuration`.
         * @description
         *
         * Seconds before forward-no-answer. Omit if `ringCount` is provided.
         * @public
         * @readonly
         */
        readonly ringDuration: OPTIONAL<INTEGER>,
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
     * @summary Restructures an object into a SetForwardingArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetForwardingArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetForwardingArgument`.
     * @returns {SetForwardingArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetForwardingArgument)]: (SetForwardingArgument)[_K] }): SetForwardingArgument {
        return new SetForwardingArgument(_o.device, _o.forwardingType, _o.activateForward, _o.forwardDN, _o.ringCount, _o.ringDuration, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `forwardingType`
         * @public
         * @static
         */

    public static _enum_for_forwardingType = _enum_for_ForwardingType;
}

/**
 * @summary The Leading Root Component Types of SetForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetForwardingArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("forwardingType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("activateForward", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("forwardDN", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ringCount", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("ringDuration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetForwardingArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetForwardingArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetForwardingArgument: $.ASN1Decoder<SetForwardingArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetForwardingArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetForwardingArgument (el: _Element): SetForwardingArgument {
    if (!_cached_decoder_for_SetForwardingArgument) { _cached_decoder_for_SetForwardingArgument = function (el: _Element): SetForwardingArgument {
    let device!: DeviceID;
    let forwardingType: OPTIONAL<ForwardingType>;
    let activateForward!: BOOLEAN;
    let forwardDN: OPTIONAL<DeviceID>;
    let ringCount: OPTIONAL<INTEGER>;
    let ringDuration: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "forwardingType": (_el: _Element): void => { forwardingType = _decode_ForwardingType(_el); },
        "activateForward": (_el: _Element): void => { activateForward = $._decodeBoolean(_el); },
        "forwardDN": (_el: _Element): void => { forwardDN = _decode_DeviceID(_el); },
        "ringCount": (_el: _Element): void => { ringCount = $._decodeInteger(_el); },
        "ringDuration": (_el: _Element): void => { ringDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetForwardingArgument,
        _extension_additions_list_spec_for_SetForwardingArgument,
        _root_component_type_list_2_spec_for_SetForwardingArgument,
        undefined,
    );
    return new SetForwardingArgument(
        device,
        forwardingType,
        activateForward,
        forwardDN,
        ringCount,
        ringDuration,
        extensions
    );
}; }
    return _cached_decoder_for_SetForwardingArgument(el);
}

let _cached_encoder_for_SetForwardingArgument: $.ASN1Encoder<SetForwardingArgument> | null = null;

/**
 * @summary Encodes a(n) SetForwardingArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetForwardingArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetForwardingArgument (value: SetForwardingArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetForwardingArgument) { _cached_encoder_for_SetForwardingArgument = function (value: SetForwardingArgument, elGetter: $.ASN1Encoder<SetForwardingArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.forwardingType === undefined) ? undefined : _encode_ForwardingType(value.forwardingType, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.activateForward, $.BER),
            /* IF_ABSENT  */ ((value.forwardDN === undefined) ? undefined : _encode_DeviceID(value.forwardDN, $.BER)),
            /* IF_ABSENT  */ ((value.ringCount === undefined) ? undefined : $._encodeInteger(value.ringCount, $.BER)),
            /* IF_ABSENT  */ ((value.ringDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.ringDuration, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetForwardingArgument(value, elGetter);
}


/* eslint-enable */
