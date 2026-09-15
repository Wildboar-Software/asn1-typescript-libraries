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

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ClearConnectionArgument
 * @description
 *
 * Service request for Clear Connection (ECMA-269 §17.1.8 /
 * ECMA-285 §15.1.8). Names the single connection to release.
 * Capability exchange indicates whether clearing a conference
 * party may dissolve the whole conference (FR 3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearConnectionArgument ::= SEQUENCE
 * {    connectionToBeCleared         ConnectionID,
 *     correlatorData             CorrelatorData             OPTIONAL,
 *     userData             UserData             OPTIONAL,
 *     reason                EventCause            OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ClearConnectionArgument {
    constructor (
        /**
         * @summary `connectionToBeCleared`.
         * @description
         *
         * Mandatory. Connection to release. Final state Hold,
         * Queued, or Null depending on configuration.
         *
         * @public
         * @readonly
         */
        readonly connectionToBeCleared: ConnectionID,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Optional correlator data to attach before resulting
         * state transitions (§12.2.10). A null string clears
         * existing data.
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @description
         *
         * Optional user data sent to parties in the call
         * (§12.2.30).
         *
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `reason`.
         * @description
         *
         * Optional `EventCause` explaining the clear, for
         * underlying signalling (e.g. busy when rejecting an
         * offered call) (FR 4, §12.2.15).
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
     * @summary Restructures an object into a ClearConnectionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ClearConnectionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClearConnectionArgument`.
     * @returns {ClearConnectionArgument}
     */
    public static _from_object (_o: { [_K in keyof (ClearConnectionArgument)]: (ClearConnectionArgument)[_K] }): ClearConnectionArgument {
        return new ClearConnectionArgument(_o.connectionToBeCleared, _o.correlatorData, _o.userData, _o.reason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ClearConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClearConnectionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionToBeCleared", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ClearConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClearConnectionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClearConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClearConnectionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClearConnectionArgument: $.ASN1Decoder<ClearConnectionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearConnectionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearConnectionArgument (el: _Element): ClearConnectionArgument {
    if (!_cached_decoder_for_ClearConnectionArgument) { _cached_decoder_for_ClearConnectionArgument = function (el: _Element): ClearConnectionArgument {
    let connectionToBeCleared!: ConnectionID;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let reason: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connectionToBeCleared": (_el: _Element): void => { connectionToBeCleared = _decode_ConnectionID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = _decode_CorrelatorData(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "reason": (_el: _Element): void => { reason = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClearConnectionArgument,
        _extension_additions_list_spec_for_ClearConnectionArgument,
        _root_component_type_list_2_spec_for_ClearConnectionArgument,
        undefined,
    );
    return new ClearConnectionArgument(
        connectionToBeCleared,
        correlatorData,
        userData,
        reason,
        extensions
    );
}; }
    return _cached_decoder_for_ClearConnectionArgument(el);
}

let _cached_encoder_for_ClearConnectionArgument: $.ASN1Encoder<ClearConnectionArgument> | null = null;

/**
 * @summary Encodes a(n) ClearConnectionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearConnectionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ClearConnectionArgument (value: ClearConnectionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearConnectionArgument) { _cached_encoder_for_ClearConnectionArgument = function (value: ClearConnectionArgument, elGetter: $.ASN1Encoder<ClearConnectionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connectionToBeCleared, $.BER),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : _encode_CorrelatorData(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : _encode_EventCause(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ClearConnectionArgument(value, elGetter);
}


/* eslint-enable */
