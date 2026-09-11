/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import {
    DigitMode,
    _enum_for_DigitMode,
    _decode_DigitMode,
    _encode_DigitMode
} from "../CSTA-generate-digits/DigitMode.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GenerateDigitsArgument
 * @description
 *
 * Service request (ECMA-269 Table 18-14).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenerateDigitsArgument ::= SEQUENCE
 * {    connectionToSendDigits        ConnectionID,
 *     digitMode            DigitMode            OPTIONAL,
 *     charactersToSend        IA5String,
 *     toneDuration            [0] IMPLICIT INTEGER        OPTIONAL,
 *     pulseRate            [1] IMPLICIT INTEGER        OPTIONAL,
 *     pauseDuration            [2] IMPLICIT INTEGER        OPTIONAL,
 *     extensions            CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GenerateDigitsArgument {
    constructor (
        /**
         * @summary `connectionToSendDigits`.
         * @description
         *
         * Connection on whose behalf digits are generated.
         * @public
         * @readonly
         */
        readonly connectionToSendDigits: ConnectionID,
        /**
         * @summary `digitMode`.
         * @description
         *
         * rotaryPulse or dTMF. SF default if omitted.
         * @public
         * @readonly
         */
        readonly digitMode: OPTIONAL<DigitMode>,
        /**
         * @summary `charactersToSend`.
         * @description
         *
         * Digit string to generate (max length from capabilities).
         * @public
         * @readonly
         */
        readonly charactersToSend: IA5String,
        /**
         * @summary `toneDuration`.
         * @description
         *
         * Tone duration for DTMF generation, if applicable.
         * @public
         * @readonly
         */
        readonly toneDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `pulseRate`.
         * @description
         *
         * Pulse rate for rotary generation, if applicable.
         * @public
         * @readonly
         */
        readonly pulseRate: OPTIONAL<INTEGER>,
        /**
         * @summary `pauseDuration`.
         * @description
         *
         * Pause duration between digits, if applicable.
         * @public
         * @readonly
         */
        readonly pauseDuration: OPTIONAL<INTEGER>,
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
     * @summary Restructures an object into a GenerateDigitsArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GenerateDigitsArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenerateDigitsArgument`.
     * @returns {GenerateDigitsArgument}
     */
    public static _from_object (_o: { [_K in keyof (GenerateDigitsArgument)]: (GenerateDigitsArgument)[_K] }): GenerateDigitsArgument {
        return new GenerateDigitsArgument(_o.connectionToSendDigits, _o.digitMode, _o.charactersToSend, _o.toneDuration, _o.pulseRate, _o.pauseDuration, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `digitMode`
         * @public
         * @static
         */

    public static _enum_for_digitMode = _enum_for_DigitMode;
}

/**
 * @summary The Leading Root Component Types of GenerateDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenerateDigitsArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionToSendDigits", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("digitMode", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("charactersToSend", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("toneDuration", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pulseRate", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pauseDuration", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GenerateDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenerateDigitsArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenerateDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenerateDigitsArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenerateDigitsArgument: $.ASN1Decoder<GenerateDigitsArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenerateDigitsArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenerateDigitsArgument (el: _Element): GenerateDigitsArgument {
    if (!_cached_decoder_for_GenerateDigitsArgument) { _cached_decoder_for_GenerateDigitsArgument = function (el: _Element): GenerateDigitsArgument {
    let connectionToSendDigits!: ConnectionID;
    let digitMode: OPTIONAL<DigitMode>;
    let charactersToSend!: IA5String;
    let toneDuration: OPTIONAL<INTEGER>;
    let pulseRate: OPTIONAL<INTEGER>;
    let pauseDuration: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connectionToSendDigits": (_el: _Element): void => { connectionToSendDigits = _decode_ConnectionID(_el); },
        "digitMode": (_el: _Element): void => { digitMode = _decode_DigitMode(_el); },
        "charactersToSend": (_el: _Element): void => { charactersToSend = $._decodeIA5String(_el); },
        "toneDuration": (_el: _Element): void => { toneDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pulseRate": (_el: _Element): void => { pulseRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pauseDuration": (_el: _Element): void => { pauseDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GenerateDigitsArgument,
        _extension_additions_list_spec_for_GenerateDigitsArgument,
        _root_component_type_list_2_spec_for_GenerateDigitsArgument,
        undefined,
    );
    return new GenerateDigitsArgument(
        connectionToSendDigits,
        digitMode,
        charactersToSend,
        toneDuration,
        pulseRate,
        pauseDuration,
        extensions
    );
}; }
    return _cached_decoder_for_GenerateDigitsArgument(el);
}

let _cached_encoder_for_GenerateDigitsArgument: $.ASN1Encoder<GenerateDigitsArgument> | null = null;

/**
 * @summary Encodes a(n) GenerateDigitsArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenerateDigitsArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GenerateDigitsArgument (value: GenerateDigitsArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenerateDigitsArgument) { _cached_encoder_for_GenerateDigitsArgument = function (value: GenerateDigitsArgument, elGetter: $.ASN1Encoder<GenerateDigitsArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connectionToSendDigits, $.BER),
            /* IF_ABSENT  */ ((value.digitMode === undefined) ? undefined : _encode_DigitMode(value.digitMode, $.BER)),
            /* REQUIRED   */ $._encodeIA5String(value.charactersToSend, $.BER),
            /* IF_ABSENT  */ ((value.toneDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.toneDuration, $.BER)),
            /* IF_ABSENT  */ ((value.pulseRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.pulseRate, $.BER)),
            /* IF_ABSENT  */ ((value.pauseDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.pauseDuration, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenerateDigitsArgument(value, elGetter);
}


/* eslint-enable */
