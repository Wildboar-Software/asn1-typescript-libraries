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
 * @summary PTCEncryptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCEncryptionInfo ::= SEQUENCE {
 *  cipher [1] UTF8String,
 *  cryptoContext [2] UTF8String OPTIONAL,
 *  key [3] UTF8String,
 *  keyEncoding [4] UTF8String,
 *  salt [5] UTF8String OPTIONAL,
 *  pTCOther [6] UTF8String OPTIONAL,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class PTCEncryptionInfo {
    constructor (
        /**
         * @summary `cipher`.
         * @public
         * @readonly
         */
        readonly cipher: UTF8String,
        /**
         * @summary `cryptoContext`.
         * @public
         * @readonly
         */
        readonly cryptoContext: OPTIONAL<UTF8String>,
        /**
         * @summary `key`.
         * @public
         * @readonly
         */
        readonly key: UTF8String,
        /**
         * @summary `keyEncoding`.
         * @public
         * @readonly
         */
        readonly keyEncoding: UTF8String,
        /**
         * @summary `salt`.
         * @public
         * @readonly
         */
        readonly salt: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCOther`.
         * @public
         * @readonly
         */
        readonly pTCOther: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PTCEncryptionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PTCEncryptionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCEncryptionInfo`.
     * @returns {PTCEncryptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (PTCEncryptionInfo)]: (PTCEncryptionInfo)[_K] }): PTCEncryptionInfo {
        return new PTCEncryptionInfo(_o.cipher, _o.cryptoContext, _o.key, _o.keyEncoding, _o.salt, _o.pTCOther, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PTCEncryptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCEncryptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cipher", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cryptoContext", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("key", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("keyEncoding", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("salt", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCOther", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PTCEncryptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCEncryptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCEncryptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCEncryptionInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCEncryptionInfo: $.ASN1Decoder<PTCEncryptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCEncryptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCEncryptionInfo (el: _Element): PTCEncryptionInfo {
    if (!_cached_decoder_for_PTCEncryptionInfo) { _cached_decoder_for_PTCEncryptionInfo = function (el: _Element): PTCEncryptionInfo {
    let cipher!: UTF8String;
    let cryptoContext: OPTIONAL<UTF8String>;
    let key!: UTF8String;
    let keyEncoding!: UTF8String;
    let salt: OPTIONAL<UTF8String>;
    let pTCOther: OPTIONAL<UTF8String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cipher": (_el: _Element): void => { cipher = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cryptoContext": (_el: _Element): void => { cryptoContext = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "key": (_el: _Element): void => { key = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "keyEncoding": (_el: _Element): void => { keyEncoding = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "salt": (_el: _Element): void => { salt = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCOther": (_el: _Element): void => { pTCOther = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCEncryptionInfo,
        _extension_additions_list_spec_for_PTCEncryptionInfo,
        _root_component_type_list_2_spec_for_PTCEncryptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCEncryptionInfo(
        cipher,
        cryptoContext,
        key,
        keyEncoding,
        salt,
        pTCOther,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCEncryptionInfo(el);
}

let _cached_encoder_for_PTCEncryptionInfo: $.ASN1Encoder<PTCEncryptionInfo> | null = null;

/**
 * @summary Encodes a(n) PTCEncryptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCEncryptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PTCEncryptionInfo (value: PTCEncryptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCEncryptionInfo) { _cached_encoder_for_PTCEncryptionInfo = function (value: PTCEncryptionInfo, elGetter: $.ASN1Encoder<PTCEncryptionInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.cipher, $.BER),
            /* IF_ABSENT  */ ((value.cryptoContext === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.cryptoContext, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.key, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.keyEncoding, $.BER),
            /* IF_ABSENT  */ ((value.salt === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.salt, $.BER)),
            /* IF_ABSENT  */ ((value.pTCOther === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.pTCOther, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCEncryptionInfo(value, elGetter);
}


/* eslint-enable */
