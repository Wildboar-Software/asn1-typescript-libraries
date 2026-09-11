/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ClearCallArgument
 * @description
 *
 * Service request for Clear Call (ECMA-269 §17.1.7 / ECMA-285
 * §15.1.7). Any connection in the call may be supplied; the whole
 * call is released.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearCallArgument ::= SEQUENCE
 * {     callToBeCleared         ConnectionID,
 *     userData             UserData             OPTIONAL,
 *     reason                EventCause            OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ClearCallArgument {
    constructor (
        /**
         * @summary `callToBeCleared`.
         * @description
         *
         * Mandatory. Any connection in the call to clear, or a
         * Call-ID-only ConnectionID (FR 2).
         *
         * @public
         * @readonly
         */
        readonly callToBeCleared: ConnectionID,
        /**
         * @summary `userData`.
         * @description
         *
         * Optional user data sent to parties in the call
         * (§12.2.30). Not retained on a later conference or
         * transferred call.
         *
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `reason`.
         * @description
         *
         * Optional `EventCause` for underlying signalling
         * (§12.2.15).
         *
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<EventCause>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and
         * privateData parameters from the ECMA-269 service table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ClearCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ClearCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClearCallArgument`.
     * @returns {ClearCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (ClearCallArgument)]: (ClearCallArgument)[_K] }): ClearCallArgument {
        return new ClearCallArgument(_o.callToBeCleared, _o.userData, _o.reason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ClearCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClearCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callToBeCleared", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ClearCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClearCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClearCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClearCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClearCallArgument: $.ASN1Decoder<ClearCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearCallArgument (el: _Element): ClearCallArgument {
    if (!_cached_decoder_for_ClearCallArgument) { _cached_decoder_for_ClearCallArgument = function (el: _Element): ClearCallArgument {
    let callToBeCleared!: ConnectionID;
    let userData: OPTIONAL<UserData>;
    let reason: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callToBeCleared": (_el: _Element): void => { callToBeCleared = _decode_ConnectionID(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "reason": (_el: _Element): void => { reason = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClearCallArgument,
        _extension_additions_list_spec_for_ClearCallArgument,
        _root_component_type_list_2_spec_for_ClearCallArgument,
        undefined,
    );
    return new ClearCallArgument(
        callToBeCleared,
        userData,
        reason,
        extensions
    );
}; }
    return _cached_decoder_for_ClearCallArgument(el);
}

let _cached_encoder_for_ClearCallArgument: $.ASN1Encoder<ClearCallArgument> | null = null;

/**
 * @summary Encodes a(n) ClearCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ClearCallArgument (value: ClearCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearCallArgument) { _cached_encoder_for_ClearCallArgument = function (value: ClearCallArgument, elGetter: $.ASN1Encoder<ClearCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.callToBeCleared, $.BER),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : _encode_EventCause(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ClearCallArgument(value, elGetter);
}


/* eslint-enable */
