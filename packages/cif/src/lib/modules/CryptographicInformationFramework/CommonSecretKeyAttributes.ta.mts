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



/**
 * @summary CommonSecretKeyAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonSecretKeyAttributes ::= SEQUENCE {
 *     keyLen INTEGER OPTIONAL, -- keylength (in bits)
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class CommonSecretKeyAttributes {
    constructor (
        /**
         * @summary `keyLen`.
         * @public
         * @readonly
         */
        readonly keyLen: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonSecretKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `CommonSecretKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonSecretKeyAttributes`.
     * @returns {CommonSecretKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CommonSecretKeyAttributes)]: (CommonSecretKeyAttributes)[_K] }): CommonSecretKeyAttributes {
        return new CommonSecretKeyAttributes(_o.keyLen, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommonSecretKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonSecretKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("keyLen", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CommonSecretKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonSecretKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonSecretKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonSecretKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonSecretKeyAttributes: $.ASN1Decoder<CommonSecretKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonSecretKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonSecretKeyAttributes (el: _Element): CommonSecretKeyAttributes {
    if (!_cached_decoder_for_CommonSecretKeyAttributes) { _cached_decoder_for_CommonSecretKeyAttributes = function (el: _Element): CommonSecretKeyAttributes {
    let keyLen: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "keyLen": (_el: _Element): void => { keyLen = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonSecretKeyAttributes,
        _extension_additions_list_spec_for_CommonSecretKeyAttributes,
        _root_component_type_list_2_spec_for_CommonSecretKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonSecretKeyAttributes(
        keyLen,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonSecretKeyAttributes(el);
}

let _cached_encoder_for_CommonSecretKeyAttributes: $.ASN1Encoder<CommonSecretKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) CommonSecretKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonSecretKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CommonSecretKeyAttributes (value: CommonSecretKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonSecretKeyAttributes) { _cached_encoder_for_CommonSecretKeyAttributes = function (value: CommonSecretKeyAttributes, elGetter: $.ASN1Encoder<CommonSecretKeyAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keyLen === undefined) ? undefined : $._encodeInteger(value.keyLen, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonSecretKeyAttributes(value, elGetter);
}


/* eslint-enable */
