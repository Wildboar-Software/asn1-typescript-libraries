/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { TerminatingConditions, _decode_TerminatingConditions, _encode_TerminatingConditions } from "../CSTA-device-feature-types/TerminatingConditions.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary PlayMessageArgument
 * @description
 *
 * Message, connection, optional duration and termination (ECMA-269 §26.1.6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlayMessageArgument ::= SEQUENCE
 * {    messageToBePlayed        MessageID,
 *     overConnection            ConnectionID,
 *     duration            INTEGER                    OPTIONAL,
 *     termination            TerminatingConditions            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PlayMessageArgument {
    constructor (
        /**
         * @summary `messageToBePlayed`.
         * @description
         *
         * Message to play (ECMA-269 §26.1.6.1).
         *
         * @public
         * @readonly
         */
        readonly messageToBePlayed: MessageID,
        /**
         * @summary `overConnection`.
         * @description
         *
         * Connection on which to play (ECMA-269 §26.1.6.1).
         *
         * @public
         * @readonly
         */
        readonly overConnection: ConnectionID,
        /**
         * @summary `duration`.
         * @description
         *
         * Play duration, when specified (ECMA-269 §26.1.6.1).
         *
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<INTEGER>,
        /**
         * @summary `termination`.
         * @description
         *
         * Conditions that stop playback (ECMA-269 §26.1.6.1).
         *
         * @public
         * @readonly
         */
        readonly termination: OPTIONAL<TerminatingConditions>,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a PlayMessageArgument
     * @description
     * 
     * This takes an `object` and converts it to a `PlayMessageArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PlayMessageArgument`.
     * @returns {PlayMessageArgument}
     */
    public static _from_object (_o: { [_K in keyof (PlayMessageArgument)]: (PlayMessageArgument)[_K] }): PlayMessageArgument {
        return new PlayMessageArgument(_o.messageToBePlayed, _o.overConnection, _o.duration, _o.termination, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of PlayMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PlayMessageArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("messageToBePlayed", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("overConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("termination", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of PlayMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PlayMessageArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PlayMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PlayMessageArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PlayMessageArgument: $.ASN1Decoder<PlayMessageArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlayMessageArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlayMessageArgument (el: _Element): PlayMessageArgument {
    if (!_cached_decoder_for_PlayMessageArgument) { _cached_decoder_for_PlayMessageArgument = function (el: _Element): PlayMessageArgument {
    let messageToBePlayed!: MessageID;
    let overConnection!: ConnectionID;
    let duration: OPTIONAL<INTEGER>;
    let termination: OPTIONAL<TerminatingConditions>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "messageToBePlayed": (_el: _Element): void => { messageToBePlayed = _decode_MessageID(_el); },
        "overConnection": (_el: _Element): void => { overConnection = _decode_ConnectionID(_el); },
        "duration": (_el: _Element): void => { duration = $._decodeInteger(_el); },
        "termination": (_el: _Element): void => { termination = _decode_TerminatingConditions(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PlayMessageArgument,
        _extension_additions_list_spec_for_PlayMessageArgument,
        _root_component_type_list_2_spec_for_PlayMessageArgument,
        undefined,
    );
    return new PlayMessageArgument(
        messageToBePlayed,
        overConnection,
        duration,
        termination,
        extensions
    );
}; }
    return _cached_decoder_for_PlayMessageArgument(el);
}

let _cached_encoder_for_PlayMessageArgument: $.ASN1Encoder<PlayMessageArgument> | null = null;

/**
 * @summary Encodes a(n) PlayMessageArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlayMessageArgument, encoded as an ASN.1 Element.
 */
export
function _encode_PlayMessageArgument (value: PlayMessageArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlayMessageArgument) { _cached_encoder_for_PlayMessageArgument = function (value: PlayMessageArgument, elGetter: $.ASN1Encoder<PlayMessageArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MessageID(value.messageToBePlayed, $.BER),
            /* REQUIRED   */ _encode_ConnectionID(value.overConnection, $.BER),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encodeInteger(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.termination === undefined) ? undefined : _encode_TerminatingConditions(value.termination, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PlayMessageArgument(value, elGetter);
}


/* eslint-enable */
