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
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../TSM/ProtocolIdentifier.ta.mjs";
// export { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../TSM/ProtocolIdentifier.ta.mjs";
import { ContentType, _enum_for_ContentType, ContentType_change_cipher_spec /* IMPORTED_LONG_ENUMERATION_ITEM */, change_cipher_spec /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentType_alert /* IMPORTED_LONG_ENUMERATION_ITEM */, alert /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentType_handshake /* IMPORTED_LONG_ENUMERATION_ITEM */, handshake /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentType_application_data /* IMPORTED_LONG_ENUMERATION_ITEM */, application_data /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ContentType, _encode_ContentType } from "../TSM/ContentType.ta.mjs";
// export { ContentType, _enum_for_ContentType, ContentType_change_cipher_spec /* IMPORTED_LONG_ENUMERATION_ITEM */, change_cipher_spec /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentType_alert /* IMPORTED_LONG_ENUMERATION_ITEM */, alert /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentType_handshake /* IMPORTED_LONG_ENUMERATION_ITEM */, handshake /* IMPORTED_SHORT_ENUMERATION_ITEM */, ContentType_application_data /* IMPORTED_LONG_ENUMERATION_ITEM */, application_data /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ContentType, _encode_ContentType } from "../TSM/ContentType.ta.mjs";
import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";
// export { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";
import { TSMCipherText_fragment, _decode_TSMCipherText_fragment, _encode_TSMCipherText_fragment } from "../TSM/TSMCipherText-fragment.ta.mjs";
// export { TSMCipherText_fragment, _decode_TSMCipherText_fragment, _encode_TSMCipherText_fragment } from "../TSM/TSMCipherText-fragment.ta.mjs";


/**
 * @summary TSMCipherText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMCipherText ::= SEQUENCE {
 * protocolID    ProtocolIdentifier,
 * type        ContentType,
 * version    ProtocolVersion,
 * fragment    CHOICE {
 *     stream    GenericStreamCipher,
 *     block    GenericBlockCipher
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class TSMCipherText {
    constructor (
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: ProtocolIdentifier,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: ContentType,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: ProtocolVersion,
        /**
         * @summary `fragment`.
         * @public
         * @readonly
         */
        readonly fragment: TSMCipherText_fragment
    ) {}

    /**
     * @summary Restructures an object into a TSMCipherText
     * @description
     * 
     * This takes an `object` and converts it to a `TSMCipherText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSMCipherText`.
     * @returns {TSMCipherText}
     */
    public static _from_object (_o: { [_K in keyof (TSMCipherText)]: (TSMCipherText)[_K] }): TSMCipherText {
        return new TSMCipherText(_o.protocolID, _o.type_, _o.version, _o.fragment);
    }

        /**
         * @summary The enum used as the type of the component `type_`
         * @public
         * @static
         */

    public static _enum_for_type_ = _enum_for_ContentType;
}

/**
 * @summary The Leading Root Component Types of TSMCipherText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSMCipherText: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("fragment", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TSMCipherText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSMCipherText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSMCipherText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSMCipherText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSMCipherText: $.ASN1Decoder<TSMCipherText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMCipherText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMCipherText (el: _Element): TSMCipherText {
    if (!_cached_decoder_for_TSMCipherText) { _cached_decoder_for_TSMCipherText = function (el: _Element): TSMCipherText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("TSMCipherText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocolID";
    sequence[1].name = "type";
    sequence[2].name = "version";
    sequence[3].name = "fragment";
    let protocolID!: ProtocolIdentifier;
    let type_!: ContentType;
    let version!: ProtocolVersion;
    let fragment!: TSMCipherText_fragment;
    protocolID = _decode_ProtocolIdentifier(sequence[0]);
    type_ = _decode_ContentType(sequence[1]);
    version = _decode_ProtocolVersion(sequence[2]);
    fragment = _decode_TSMCipherText_fragment(sequence[3]);
    return new TSMCipherText(
        protocolID,
        type_,
        version,
        fragment,

    );
}; }
    return _cached_decoder_for_TSMCipherText(el);
}

let _cached_encoder_for_TSMCipherText: $.ASN1Encoder<TSMCipherText> | null = null;

/**
 * @summary Encodes a(n) TSMCipherText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMCipherText, encoded as an ASN.1 Element.
 */
export
function _encode_TSMCipherText (value: TSMCipherText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMCipherText) { _cached_encoder_for_TSMCipherText = function (value: TSMCipherText, elGetter: $.ASN1Encoder<TSMCipherText>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolID, $.BER),
            /* REQUIRED   */ _encode_ContentType(value.type_, $.BER),
            /* REQUIRED   */ _encode_ProtocolVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_TSMCipherText_fragment(value.fragment, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSMCipherText(value, elGetter);
}


/* eslint-enable */
