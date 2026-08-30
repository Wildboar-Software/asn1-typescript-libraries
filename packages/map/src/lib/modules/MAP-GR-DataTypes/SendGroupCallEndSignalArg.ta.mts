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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { TalkerPriority, _enum_for_TalkerPriority, TalkerPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_privileged /* IMPORTED_LONG_ENUMERATION_ITEM */, privileged /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TalkerPriority, _encode_TalkerPriority } from "../MAP-GR-DataTypes/TalkerPriority.ta.mjs";
// export { TalkerPriority, _enum_for_TalkerPriority, TalkerPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_privileged /* IMPORTED_LONG_ENUMERATION_ITEM */, privileged /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TalkerPriority, _encode_TalkerPriority } from "../MAP-GR-DataTypes/TalkerPriority.ta.mjs";
import { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
// export { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";


/**
 * @summary SendGroupCallEndSignalArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendGroupCallEndSignalArg ::= SEQUENCE {
 *     imsi    IMSI    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     talkerPriority    [0]TalkerPriority    OPTIONAL,
 *     additionalInfo    [1]AdditionalInfo    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendGroupCallEndSignalArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `talkerPriority`.
         * @public
         * @readonly
         */
        readonly talkerPriority: OPTIONAL<TalkerPriority>,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<AdditionalInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendGroupCallEndSignalArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendGroupCallEndSignalArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendGroupCallEndSignalArg`.
     * @returns {SendGroupCallEndSignalArg}
     */
    public static _from_object (_o: { [_K in keyof (SendGroupCallEndSignalArg)]: (SendGroupCallEndSignalArg)[_K] }): SendGroupCallEndSignalArg {
        return new SendGroupCallEndSignalArg(_o.imsi, _o.extensionContainer, _o.talkerPriority, _o.additionalInfo, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `talkerPriority`
         * @public
         * @static
         */

    public static _enum_for_talkerPriority = _enum_for_TalkerPriority;
}

/**
 * @summary The Leading Root Component Types of SendGroupCallEndSignalArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendGroupCallEndSignalArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendGroupCallEndSignalArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendGroupCallEndSignalArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendGroupCallEndSignalArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendGroupCallEndSignalArg: $.ComponentSpec[] = [
    new $.ComponentSpec("talkerPriority", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("additionalInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_SendGroupCallEndSignalArg: $.ASN1Decoder<SendGroupCallEndSignalArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendGroupCallEndSignalArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendGroupCallEndSignalArg (el: _Element): SendGroupCallEndSignalArg {
    if (!_cached_decoder_for_SendGroupCallEndSignalArg) { _cached_decoder_for_SendGroupCallEndSignalArg = function (el: _Element): SendGroupCallEndSignalArg {
    let imsi: OPTIONAL<IMSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let talkerPriority: OPTIONAL<TalkerPriority>;
    let additionalInfo: OPTIONAL<AdditionalInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "talkerPriority": (_el: _Element): void => { talkerPriority = $._decode_implicit<TalkerPriority>(() => _decode_TalkerPriority)(_el); },
        "additionalInfo": (_el: _Element): void => { additionalInfo = $._decode_implicit<AdditionalInfo>(() => _decode_AdditionalInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendGroupCallEndSignalArg,
        _extension_additions_list_spec_for_SendGroupCallEndSignalArg,
        _root_component_type_list_2_spec_for_SendGroupCallEndSignalArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendGroupCallEndSignalArg(
        imsi,
        extensionContainer,
        talkerPriority,
        additionalInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendGroupCallEndSignalArg(el);
}

let _cached_encoder_for_SendGroupCallEndSignalArg: $.ASN1Encoder<SendGroupCallEndSignalArg> | null = null;

/**
 * @summary Encodes a(n) SendGroupCallEndSignalArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendGroupCallEndSignalArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendGroupCallEndSignalArg (value: SendGroupCallEndSignalArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendGroupCallEndSignalArg) { _cached_encoder_for_SendGroupCallEndSignalArg = function (value: SendGroupCallEndSignalArg, elGetter: $.ASN1Encoder<SendGroupCallEndSignalArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : _encode_IMSI(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.talkerPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TalkerPriority, $.BER)(value.talkerPriority, $.BER)),
            /* IF_ABSENT  */ ((value.additionalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AdditionalInfo, $.BER)(value.additionalInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendGroupCallEndSignalArg(value, elGetter);
}


/* eslint-enable */
