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



/**
 * @summary MessageInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageInfo ::= SEQUENCE
 * {     contents            IA5String,
 *     contentTypeAndSubtype        IA5String    OPTIONAL,
 *     contentsLength            INTEGER        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MessageInfo {
    constructor (
        /**
         * @summary `contents`.
         * @public
         * @readonly
         */
        readonly contents: IA5String,
        /**
         * @summary `contentTypeAndSubtype`.
         * @public
         * @readonly
         */
        readonly contentTypeAndSubtype: OPTIONAL<IA5String>,
        /**
         * @summary `contentsLength`.
         * @public
         * @readonly
         */
        readonly contentsLength: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a MessageInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MessageInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageInfo`.
     * @returns {MessageInfo}
     */
    public static _from_object (_o: { [_K in keyof (MessageInfo)]: (MessageInfo)[_K] }): MessageInfo {
        return new MessageInfo(_o.contents, _o.contentTypeAndSubtype, _o.contentsLength);
    }


}

/**
 * @summary The Leading Root Component Types of MessageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessageInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("contents", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("contentTypeAndSubtype", true, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("contentsLength", true, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MessageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessageInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessageInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessageInfo: $.ASN1Decoder<MessageInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageInfo (el: _Element): MessageInfo {
    if (!_cached_decoder_for_MessageInfo) { _cached_decoder_for_MessageInfo = function (el: _Element): MessageInfo {
    let contents!: IA5String;
    let contentTypeAndSubtype: OPTIONAL<IA5String>;
    let contentsLength: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "contents": (_el: _Element): void => { contents = $._decodeIA5String(_el); },
        "contentTypeAndSubtype": (_el: _Element): void => { contentTypeAndSubtype = $._decodeIA5String(_el); },
        "contentsLength": (_el: _Element): void => { contentsLength = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessageInfo,
        _extension_additions_list_spec_for_MessageInfo,
        _root_component_type_list_2_spec_for_MessageInfo,
        undefined,
    );
    return new MessageInfo(
        contents,
        contentTypeAndSubtype,
        contentsLength
    );
}; }
    return _cached_decoder_for_MessageInfo(el);
}

let _cached_encoder_for_MessageInfo: $.ASN1Encoder<MessageInfo> | null = null;

/**
 * @summary Encodes a(n) MessageInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MessageInfo (value: MessageInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageInfo) { _cached_encoder_for_MessageInfo = function (value: MessageInfo, elGetter: $.ASN1Encoder<MessageInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.contents, $.BER),
            /* IF_ABSENT  */ ((value.contentTypeAndSubtype === undefined) ? undefined : $._encodeIA5String(value.contentTypeAndSubtype, $.BER)),
            /* IF_ABSENT  */ ((value.contentsLength === undefined) ? undefined : $._encodeInteger(value.contentsLength, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MessageInfo(value, elGetter);
}


/* eslint-enable */
