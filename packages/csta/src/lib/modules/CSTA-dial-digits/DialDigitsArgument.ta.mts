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

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DialDigitsArgument
 * @description
 *
 * Service request for Dial Digits (ECMA-269 §17.1.12 / ECMA-285
 * §15.1.12). Continues or completes outbound dialling on an
 * initiated connection. Other calls at the device are unaffected
 * (FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialDigitsArgument ::= SEQUENCE
 * {     diallingConnection         ConnectionID,
 *     diallingSequence         DeviceID,
 *     correlatorData             CorrelatorData             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DialDigitsArgument {
    constructor (
        /**
         * @summary `diallingConnection`.
         * @description
         *
         * Mandatory. Connection on which digits are dialled.
         * Initial state Initiated; final Initiated or Connected
         * (§17.1.12.3.1).
         *
         * @public
         * @readonly
         */
        readonly diallingConnection: ConnectionID,
        /**
         * @summary `diallingSequence`.
         * @description
         *
         * Mandatory. Digits to dial. Any DeviceID format if no
         * digits have been dialled yet; otherwise Diallable Digits.
         * A trailing `;` means more digits will follow (FR 3–4).
         * If the switching function treats dialling as complete it
         * ignores later digits (FR 7).
         *
         * @public
         * @readonly
         */
        readonly diallingSequence: DeviceID,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Optional correlator data attached before resulting state
         * transitions (§12.2.10).
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
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
     * @summary Restructures an object into a DialDigitsArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DialDigitsArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DialDigitsArgument`.
     * @returns {DialDigitsArgument}
     */
    public static _from_object (_o: { [_K in keyof (DialDigitsArgument)]: (DialDigitsArgument)[_K] }): DialDigitsArgument {
        return new DialDigitsArgument(_o.diallingConnection, _o.diallingSequence, _o.correlatorData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DialDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DialDigitsArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("diallingConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("diallingSequence", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DialDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DialDigitsArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DialDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DialDigitsArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DialDigitsArgument: $.ASN1Decoder<DialDigitsArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialDigitsArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialDigitsArgument (el: _Element): DialDigitsArgument {
    if (!_cached_decoder_for_DialDigitsArgument) { _cached_decoder_for_DialDigitsArgument = function (el: _Element): DialDigitsArgument {
    let diallingConnection!: ConnectionID;
    let diallingSequence!: DeviceID;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "diallingConnection": (_el: _Element): void => { diallingConnection = _decode_ConnectionID(_el); },
        "diallingSequence": (_el: _Element): void => { diallingSequence = _decode_DeviceID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = _decode_CorrelatorData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DialDigitsArgument,
        _extension_additions_list_spec_for_DialDigitsArgument,
        _root_component_type_list_2_spec_for_DialDigitsArgument,
        undefined,
    );
    return new DialDigitsArgument(
        diallingConnection,
        diallingSequence,
        correlatorData,
        extensions
    );
}; }
    return _cached_decoder_for_DialDigitsArgument(el);
}

let _cached_encoder_for_DialDigitsArgument: $.ASN1Encoder<DialDigitsArgument> | null = null;

/**
 * @summary Encodes a(n) DialDigitsArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialDigitsArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DialDigitsArgument (value: DialDigitsArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialDigitsArgument) { _cached_encoder_for_DialDigitsArgument = function (value: DialDigitsArgument, elGetter: $.ASN1Encoder<DialDigitsArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.diallingConnection, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.diallingSequence, $.BER),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : _encode_CorrelatorData(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DialDigitsArgument(value, elGetter);
}


/* eslint-enable */
