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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary PrepareSubsequentHO_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareSubsequentHO-Res ::= [3] SEQUENCE {
 *     an-APDU    AccessNetworkSignalInfo,
 *     extensionContainer    [0]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class PrepareSubsequentHO_Res {
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
     * @summary Restructures an object into a PrepareSubsequentHO_Res
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareSubsequentHO_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareSubsequentHO_Res`.
     * @returns {PrepareSubsequentHO_Res}
     */
    public static _from_object (_o: { [_K in keyof (PrepareSubsequentHO_Res)]: (PrepareSubsequentHO_Res)[_K] }): PrepareSubsequentHO_Res {
        return new PrepareSubsequentHO_Res(_o.an_APDU, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareSubsequentHO_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareSubsequentHO_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("an-APDU", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of PrepareSubsequentHO_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareSubsequentHO_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareSubsequentHO_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareSubsequentHO_Res: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrepareSubsequentHO_Res: $.ASN1Decoder<PrepareSubsequentHO_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareSubsequentHO_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareSubsequentHO_Res (el: _Element): PrepareSubsequentHO_Res {
    if (!_cached_decoder_for_PrepareSubsequentHO_Res) { _cached_decoder_for_PrepareSubsequentHO_Res = $._decode_implicit<PrepareSubsequentHO_Res>(() => function (el: _Element): PrepareSubsequentHO_Res {
    let an_APDU!: AccessNetworkSignalInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "an-APDU": (_el: _Element): void => { an_APDU = _decode_AccessNetworkSignalInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareSubsequentHO_Res,
        _extension_additions_list_spec_for_PrepareSubsequentHO_Res,
        _root_component_type_list_2_spec_for_PrepareSubsequentHO_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrepareSubsequentHO_Res(
        an_APDU,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_PrepareSubsequentHO_Res(el);
}

let _cached_encoder_for_PrepareSubsequentHO_Res: $.ASN1Encoder<PrepareSubsequentHO_Res> | null = null;

/**
 * @summary Encodes a(n) PrepareSubsequentHO_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareSubsequentHO_Res, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareSubsequentHO_Res (value: PrepareSubsequentHO_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareSubsequentHO_Res) { _cached_encoder_for_PrepareSubsequentHO_Res = $._encode_implicit(_TagClass.context, 3, () => function (value: PrepareSubsequentHO_Res, elGetter: $.ASN1Encoder<PrepareSubsequentHO_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessNetworkSignalInfo(value.an_APDU, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_PrepareSubsequentHO_Res(value, elGetter);
}


/* eslint-enable */
