/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ControlData, _decode_ControlData, _encode_ControlData } from "../CSTA-device-feature-types/ControlData.ta.mjs";
// export { ControlData, _decode_ControlData, _encode_ControlData } from "../CSTA-device-feature-types/ControlData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SynthesizeMessageArgument
 * @description
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
         * @public
         * @readonly
         */
        readonly textToBeSynthesized: IA5String,
        /**
         * @summary `control`.
         * @public
         * @readonly
         */
        readonly control: OPTIONAL<ControlData>,
        /**
         * @summary `extensions`.
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
    new $.ComponentSpec("textToBeSynthesized", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("control", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
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
