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
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
// export { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SendEndSignal_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendEndSignal-Arg ::= [3] SEQUENCE {
 *     an-APDU    AccessNetworkSignalInfo,
 *     extensionContainer    [0]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SendEndSignal_Arg {
    constructor (
        /**
         * @summary `an_APDU`.
         * @public
         * @readonly
         */
        readonly an_APDU: AccessNetworkSignalInfo,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendEndSignal_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `SendEndSignal_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendEndSignal_Arg`.
     * @returns {SendEndSignal_Arg}
     */
    public static _from_object (_o: { [_K in keyof (SendEndSignal_Arg)]: (SendEndSignal_Arg)[_K] }): SendEndSignal_Arg {
        return new SendEndSignal_Arg(_o.an_APDU, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendEndSignal_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendEndSignal_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("an-APDU", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendEndSignal_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendEndSignal_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendEndSignal_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendEndSignal_Arg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendEndSignal_Arg: $.ASN1Decoder<SendEndSignal_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendEndSignal_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendEndSignal_Arg (el: _Element): SendEndSignal_Arg {
    if (!_cached_decoder_for_SendEndSignal_Arg) { _cached_decoder_for_SendEndSignal_Arg = $._decode_implicit<SendEndSignal_Arg>(() => function (el: _Element): SendEndSignal_Arg {
    let an_APDU!: AccessNetworkSignalInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "an-APDU": (_el: _Element): void => { an_APDU = _decode_AccessNetworkSignalInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendEndSignal_Arg,
        _extension_additions_list_spec_for_SendEndSignal_Arg,
        _root_component_type_list_2_spec_for_SendEndSignal_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendEndSignal_Arg(
        an_APDU,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_SendEndSignal_Arg(el);
}

let _cached_encoder_for_SendEndSignal_Arg: $.ASN1Encoder<SendEndSignal_Arg> | null = null;

/**
 * @summary Encodes a(n) SendEndSignal_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendEndSignal_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_SendEndSignal_Arg (value: SendEndSignal_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendEndSignal_Arg) { _cached_encoder_for_SendEndSignal_Arg = $._encode_implicit(_TagClass.context, 3, () => function (value: SendEndSignal_Arg, elGetter: $.ASN1Encoder<SendEndSignal_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessNetworkSignalInfo(value.an_APDU, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SendEndSignal_Arg(value, elGetter);
}


/* eslint-enable */
