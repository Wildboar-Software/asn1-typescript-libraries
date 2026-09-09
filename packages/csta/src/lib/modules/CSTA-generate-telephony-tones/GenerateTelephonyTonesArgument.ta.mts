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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import {
    TelephonyTone,
    _enum_for_TelephonyTone,
    _decode_TelephonyTone,
    _encode_TelephonyTone
} from "../CSTA-device-feature-types/TelephonyTone.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GenerateTelephonyTonesArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenerateTelephonyTonesArgument ::= SEQUENCE
 * {    connectionToSendTone        ConnectionID,
 *     toneToSend            TelephonyTone,
 *     toneDuration            INTEGER                OPTIONAL,
 *     extensions            CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GenerateTelephonyTonesArgument {
    constructor (
        /**
         * @summary `connectionToSendTone`.
         * @public
         * @readonly
         */
        readonly connectionToSendTone: ConnectionID,
        /**
         * @summary `toneToSend`.
         * @public
         * @readonly
         */
        readonly toneToSend: TelephonyTone,
        /**
         * @summary `toneDuration`.
         * @public
         * @readonly
         */
        readonly toneDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GenerateTelephonyTonesArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GenerateTelephonyTonesArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenerateTelephonyTonesArgument`.
     * @returns {GenerateTelephonyTonesArgument}
     */
    public static _from_object (_o: { [_K in keyof (GenerateTelephonyTonesArgument)]: (GenerateTelephonyTonesArgument)[_K] }): GenerateTelephonyTonesArgument {
        return new GenerateTelephonyTonesArgument(_o.connectionToSendTone, _o.toneToSend, _o.toneDuration, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `toneToSend`
         * @public
         * @static
         */

    public static _enum_for_toneToSend = _enum_for_TelephonyTone;
}

/**
 * @summary The Leading Root Component Types of GenerateTelephonyTonesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenerateTelephonyTonesArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionToSendTone", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("toneToSend", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("toneDuration", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GenerateTelephonyTonesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenerateTelephonyTonesArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenerateTelephonyTonesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenerateTelephonyTonesArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenerateTelephonyTonesArgument: $.ASN1Decoder<GenerateTelephonyTonesArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenerateTelephonyTonesArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenerateTelephonyTonesArgument (el: _Element): GenerateTelephonyTonesArgument {
    if (!_cached_decoder_for_GenerateTelephonyTonesArgument) { _cached_decoder_for_GenerateTelephonyTonesArgument = function (el: _Element): GenerateTelephonyTonesArgument {
    let connectionToSendTone!: ConnectionID;
    let toneToSend!: TelephonyTone;
    let toneDuration: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connectionToSendTone": (_el: _Element): void => { connectionToSendTone = _decode_ConnectionID(_el); },
        "toneToSend": (_el: _Element): void => { toneToSend = _decode_TelephonyTone(_el); },
        "toneDuration": (_el: _Element): void => { toneDuration = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GenerateTelephonyTonesArgument,
        _extension_additions_list_spec_for_GenerateTelephonyTonesArgument,
        _root_component_type_list_2_spec_for_GenerateTelephonyTonesArgument,
        undefined,
    );
    return new GenerateTelephonyTonesArgument(
        connectionToSendTone,
        toneToSend,
        toneDuration,
        extensions
    );
}; }
    return _cached_decoder_for_GenerateTelephonyTonesArgument(el);
}

let _cached_encoder_for_GenerateTelephonyTonesArgument: $.ASN1Encoder<GenerateTelephonyTonesArgument> | null = null;

/**
 * @summary Encodes a(n) GenerateTelephonyTonesArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenerateTelephonyTonesArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GenerateTelephonyTonesArgument (value: GenerateTelephonyTonesArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenerateTelephonyTonesArgument) { _cached_encoder_for_GenerateTelephonyTonesArgument = function (value: GenerateTelephonyTonesArgument, elGetter: $.ASN1Encoder<GenerateTelephonyTonesArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connectionToSendTone, $.BER),
            /* REQUIRED   */ _encode_TelephonyTone(value.toneToSend, $.BER),
            /* IF_ABSENT  */ ((value.toneDuration === undefined) ? undefined : $._encodeInteger(value.toneDuration, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenerateTelephonyTonesArgument(value, elGetter);
}


/* eslint-enable */
