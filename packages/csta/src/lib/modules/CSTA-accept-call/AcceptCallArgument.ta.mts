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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AcceptCallArgument
 * @description
 *
 * Service request for Accept Call (ECMA-269 §17.1.1 / ECMA-285 §15.1.1). Names
 * the offered connection to accept and optional correlator/user data. To drop
 * an active call first, Clear Connection that call, then Accept Call (FR 1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcceptCallArgument ::= SEQUENCE
 * {     callToBeAccepted         ConnectionID,
 *     correlatorData             CorrelatorData             OPTIONAL,
 *     userData             UserData             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AcceptCallArgument {
    constructor (
        /**
         * @summary `callToBeAccepted`.
         * @description
         *
         * Mandatory. Offered connection to accept. Required initial state is
         * Alerting in Offered mode only (§17.1.1.3.1).
         *
         * @public
         * @readonly
         */
        readonly callToBeAccepted: ConnectionID,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Optional correlator data to attach to this call before any resulting
         * state transitions (ECMA-269 §12.2.10). A null string clears existing
         * data.
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @description
         *
         * Optional user data sent to parties in the call (§12.2.30). Not
         * retained on a later conference or transferred call.
         *
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and privateData
         * parameters from the ECMA-269 service table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AcceptCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `AcceptCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AcceptCallArgument`.
     * @returns {AcceptCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (AcceptCallArgument)]: (AcceptCallArgument)[_K] }): AcceptCallArgument {
        return new AcceptCallArgument(_o.callToBeAccepted, _o.correlatorData, _o.userData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AcceptCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AcceptCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callToBeAccepted", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AcceptCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AcceptCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AcceptCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AcceptCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AcceptCallArgument: $.ASN1Decoder<AcceptCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcceptCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcceptCallArgument (el: _Element): AcceptCallArgument {
    if (!_cached_decoder_for_AcceptCallArgument) { _cached_decoder_for_AcceptCallArgument = function (el: _Element): AcceptCallArgument {
    let callToBeAccepted!: ConnectionID;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callToBeAccepted": (_el: _Element): void => { callToBeAccepted = _decode_ConnectionID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = _decode_CorrelatorData(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AcceptCallArgument,
        _extension_additions_list_spec_for_AcceptCallArgument,
        _root_component_type_list_2_spec_for_AcceptCallArgument,
        undefined,
    );
    return new AcceptCallArgument(
        callToBeAccepted,
        correlatorData,
        userData,
        extensions
    );
}; }
    return _cached_decoder_for_AcceptCallArgument(el);
}

let _cached_encoder_for_AcceptCallArgument: $.ASN1Encoder<AcceptCallArgument> | null = null;

/**
 * @summary Encodes a(n) AcceptCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AcceptCallArgument (value: AcceptCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcceptCallArgument) { _cached_encoder_for_AcceptCallArgument = function (value: AcceptCallArgument, elGetter: $.ASN1Encoder<AcceptCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.callToBeAccepted, $.BER),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : _encode_CorrelatorData(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AcceptCallArgument(value, elGetter);
}


/* eslint-enable */
