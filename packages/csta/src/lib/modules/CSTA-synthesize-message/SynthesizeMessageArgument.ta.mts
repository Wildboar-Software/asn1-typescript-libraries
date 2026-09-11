/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ControlData, _decode_ControlData, _encode_ControlData } from "../CSTA-device-feature-types/ControlData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SynthesizeMessageArgument
 * @description
 *
 * Text and optional control data (ECMA-269 §26.1.17.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SynthesizeMessageArgument ::= SEQUENCE
 * {    textToBeSynthesized        IA5String,
 *     control                ControlData                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SynthesizeMessageArgument {
    constructor (
        /**
         * @summary `textToBeSynthesized`.
         * @description
         *
         * Source text (ECMA-269 §26.1.17.1).
         *
         * @public
         * @readonly
         */
        readonly textToBeSynthesized: IA5String,
        /**
         * @summary `control`.
         * @description
         *
         * Optional synthesis control (ECMA-269 §26.1.17.1).
         *
         * @public
         * @readonly
         */
        readonly control: OPTIONAL<ControlData>,
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
     * @summary Restructures an object into a SynthesizeMessageArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SynthesizeMessageArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SynthesizeMessageArgument`.
     * @returns {SynthesizeMessageArgument}
     */
    public static _from_object (_o: { [_K in keyof (SynthesizeMessageArgument)]: (SynthesizeMessageArgument)[_K] }): SynthesizeMessageArgument {
        return new SynthesizeMessageArgument(_o.textToBeSynthesized, _o.control, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SynthesizeMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SynthesizeMessageArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("textToBeSynthesized", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("control", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SynthesizeMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SynthesizeMessageArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SynthesizeMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SynthesizeMessageArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SynthesizeMessageArgument: $.ASN1Decoder<SynthesizeMessageArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SynthesizeMessageArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SynthesizeMessageArgument (el: _Element): SynthesizeMessageArgument {
    if (!_cached_decoder_for_SynthesizeMessageArgument) { _cached_decoder_for_SynthesizeMessageArgument = function (el: _Element): SynthesizeMessageArgument {
    let textToBeSynthesized!: IA5String;
    let control: OPTIONAL<ControlData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "textToBeSynthesized": (_el: _Element): void => { textToBeSynthesized = $._decodeIA5String(_el); },
        "control": (_el: _Element): void => { control = _decode_ControlData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SynthesizeMessageArgument,
        _extension_additions_list_spec_for_SynthesizeMessageArgument,
        _root_component_type_list_2_spec_for_SynthesizeMessageArgument,
        undefined,
    );
    return new SynthesizeMessageArgument(
        textToBeSynthesized,
        control,
        extensions
    );
}; }
    return _cached_decoder_for_SynthesizeMessageArgument(el);
}

let _cached_encoder_for_SynthesizeMessageArgument: $.ASN1Encoder<SynthesizeMessageArgument> | null = null;

/**
 * @summary Encodes a(n) SynthesizeMessageArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynthesizeMessageArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SynthesizeMessageArgument (value: SynthesizeMessageArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SynthesizeMessageArgument) { _cached_encoder_for_SynthesizeMessageArgument = function (value: SynthesizeMessageArgument, elGetter: $.ASN1Encoder<SynthesizeMessageArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.textToBeSynthesized, $.BER),
            /* IF_ABSENT  */ ((value.control === undefined) ? undefined : _encode_ControlData(value.control, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SynthesizeMessageArgument(value, elGetter);
}


/* eslint-enable */
