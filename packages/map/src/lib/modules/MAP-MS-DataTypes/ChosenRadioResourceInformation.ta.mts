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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChosenChannelInfo, _decode_ChosenChannelInfo, _encode_ChosenChannelInfo } from "../MAP-MS-DataTypes/ChosenChannelInfo.ta.mjs";
// export { ChosenChannelInfo, _decode_ChosenChannelInfo, _encode_ChosenChannelInfo } from "../MAP-MS-DataTypes/ChosenChannelInfo.ta.mjs";
import { ChosenSpeechVersion, _decode_ChosenSpeechVersion, _encode_ChosenSpeechVersion } from "../MAP-MS-DataTypes/ChosenSpeechVersion.ta.mjs";
// export { ChosenSpeechVersion, _decode_ChosenSpeechVersion, _encode_ChosenSpeechVersion } from "../MAP-MS-DataTypes/ChosenSpeechVersion.ta.mjs";


/**
 * @summary ChosenRadioResourceInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChosenRadioResourceInformation ::= SEQUENCE {
 *     chosenChannelInfo    [0] ChosenChannelInfo    OPTIONAL,
 *     chosenSpeechVersion    [1] ChosenSpeechVersion    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ChosenRadioResourceInformation {
    constructor (
        /**
         * @summary `chosenChannelInfo`.
         * @public
         * @readonly
         */
        readonly chosenChannelInfo: OPTIONAL<ChosenChannelInfo>,
        /**
         * @summary `chosenSpeechVersion`.
         * @public
         * @readonly
         */
        readonly chosenSpeechVersion: OPTIONAL<ChosenSpeechVersion>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ChosenRadioResourceInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ChosenRadioResourceInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChosenRadioResourceInformation`.
     * @returns {ChosenRadioResourceInformation}
     */
    public static _from_object (_o: { [_K in keyof (ChosenRadioResourceInformation)]: (ChosenRadioResourceInformation)[_K] }): ChosenRadioResourceInformation {
        return new ChosenRadioResourceInformation(_o.chosenChannelInfo, _o.chosenSpeechVersion, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ChosenRadioResourceInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChosenRadioResourceInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("chosenChannelInfo", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("chosenSpeechVersion", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ChosenRadioResourceInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChosenRadioResourceInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChosenRadioResourceInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChosenRadioResourceInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChosenRadioResourceInformation: $.ASN1Decoder<ChosenRadioResourceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChosenRadioResourceInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChosenRadioResourceInformation (el: _Element): ChosenRadioResourceInformation {
    if (!_cached_decoder_for_ChosenRadioResourceInformation) { _cached_decoder_for_ChosenRadioResourceInformation = function (el: _Element): ChosenRadioResourceInformation {
    let chosenChannelInfo: OPTIONAL<ChosenChannelInfo>;
    let chosenSpeechVersion: OPTIONAL<ChosenSpeechVersion>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "chosenChannelInfo": (_el: _Element): void => { chosenChannelInfo = $._decode_implicit<ChosenChannelInfo>(() => _decode_ChosenChannelInfo)(_el); },
        "chosenSpeechVersion": (_el: _Element): void => { chosenSpeechVersion = $._decode_implicit<ChosenSpeechVersion>(() => _decode_ChosenSpeechVersion)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChosenRadioResourceInformation,
        _extension_additions_list_spec_for_ChosenRadioResourceInformation,
        _root_component_type_list_2_spec_for_ChosenRadioResourceInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ChosenRadioResourceInformation(
        chosenChannelInfo,
        chosenSpeechVersion,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ChosenRadioResourceInformation(el);
}

let _cached_encoder_for_ChosenRadioResourceInformation: $.ASN1Encoder<ChosenRadioResourceInformation> | null = null;

/**
 * @summary Encodes a(n) ChosenRadioResourceInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChosenRadioResourceInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChosenRadioResourceInformation (value: ChosenRadioResourceInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChosenRadioResourceInformation) { _cached_encoder_for_ChosenRadioResourceInformation = function (value: ChosenRadioResourceInformation, elGetter: $.ASN1Encoder<ChosenRadioResourceInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.chosenChannelInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ChosenChannelInfo, $.BER)(value.chosenChannelInfo, $.BER)),
            /* IF_ABSENT  */ ((value.chosenSpeechVersion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ChosenSpeechVersion, $.BER)(value.chosenSpeechVersion, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChosenRadioResourceInformation(value, elGetter);
}


/* eslint-enable */
