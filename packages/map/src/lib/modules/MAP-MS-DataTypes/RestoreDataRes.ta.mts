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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary RestoreDataRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RestoreDataRes ::= SEQUENCE {
 *     hlr-Number    ISDN-AddressString,
 *     msNotReachable    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class RestoreDataRes {
    constructor (
        /**
         * @summary `hlr_Number`.
         * @public
         * @readonly
         */
        readonly hlr_Number: ISDN_AddressString,
        /**
         * @summary `msNotReachable`.
         * @public
         * @readonly
         */
        readonly msNotReachable: OPTIONAL<NULL>,
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
     * @summary Restructures an object into a RestoreDataRes
     * @description
     * 
     * This takes an `object` and converts it to a `RestoreDataRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RestoreDataRes`.
     * @returns {RestoreDataRes}
     */
    public static _from_object (_o: { [_K in keyof (RestoreDataRes)]: (RestoreDataRes)[_K] }): RestoreDataRes {
        return new RestoreDataRes(_o.hlr_Number, _o.msNotReachable, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RestoreDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RestoreDataRes: $.ComponentSpec[] = [
    new $.ComponentSpec("hlr-Number", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("msNotReachable", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RestoreDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RestoreDataRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RestoreDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RestoreDataRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RestoreDataRes: $.ASN1Decoder<RestoreDataRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RestoreDataRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RestoreDataRes (el: _Element): RestoreDataRes {
    if (!_cached_decoder_for_RestoreDataRes) { _cached_decoder_for_RestoreDataRes = function (el: _Element): RestoreDataRes {
    let hlr_Number!: ISDN_AddressString;
    let msNotReachable: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hlr-Number": (_el: _Element): void => { hlr_Number = _decode_ISDN_AddressString(_el); },
        "msNotReachable": (_el: _Element): void => { msNotReachable = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RestoreDataRes,
        _extension_additions_list_spec_for_RestoreDataRes,
        _root_component_type_list_2_spec_for_RestoreDataRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RestoreDataRes(
        hlr_Number,
        msNotReachable,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RestoreDataRes(el);
}

let _cached_encoder_for_RestoreDataRes: $.ASN1Encoder<RestoreDataRes> | null = null;

/**
 * @summary Encodes a(n) RestoreDataRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestoreDataRes, encoded as an ASN.1 Element.
 */
export
function _encode_RestoreDataRes (value: RestoreDataRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RestoreDataRes) { _cached_encoder_for_RestoreDataRes = function (value: RestoreDataRes, elGetter: $.ASN1Encoder<RestoreDataRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.hlr_Number, $.BER),
            /* IF_ABSENT  */ ((value.msNotReachable === undefined) ? undefined : $._encodeNull(value.msNotReachable, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RestoreDataRes(value, elGetter);
}


/* eslint-enable */
