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
 * @summary CCKeyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCKeyInfo ::= SEQUENCE
 * {
 *  cCCSID [1] OCTET STRING,
 *  -- the parameter uniquely mapping the key to the encrypted stream.
 *  cCDecKey [2] OCTET STRING,
 *  cCSalt [3] OCTET STRING OPTIONAL,
 *  -- The field reports the value from the CS_ID field in the ticket exchange headers as
 *  -- defined in IETF RFC 6043 [61].
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class CCKeyInfo {
    constructor (
        /**
         * @summary `cCCSID`.
         * @public
         * @readonly
         */
        readonly cCCSID: OCTET_STRING,
        /**
         * @summary `cCDecKey`.
         * @public
         * @readonly
         */
        readonly cCDecKey: OCTET_STRING,
        /**
         * @summary `cCSalt`.
         * @public
         * @readonly
         */
        readonly cCSalt: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CCKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CCKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCKeyInfo`.
     * @returns {CCKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (CCKeyInfo)]: (CCKeyInfo)[_K] }): CCKeyInfo {
        return new CCKeyInfo(_o.cCCSID, _o.cCDecKey, _o.cCSalt, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CCKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cCCSID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCDecKey", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cCSalt", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CCKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCKeyInfo: $.ASN1Decoder<CCKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCKeyInfo (el: _Element): CCKeyInfo {
    if (!_cached_decoder_for_CCKeyInfo) { _cached_decoder_for_CCKeyInfo = function (el: _Element): CCKeyInfo {
    let cCCSID!: OCTET_STRING;
    let cCDecKey!: OCTET_STRING;
    let cCSalt: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cCCSID": (_el: _Element): void => { cCCSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cCDecKey": (_el: _Element): void => { cCDecKey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cCSalt": (_el: _Element): void => { cCSalt = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCKeyInfo,
        _extension_additions_list_spec_for_CCKeyInfo,
        _root_component_type_list_2_spec_for_CCKeyInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCKeyInfo(
        cCCSID,
        cCDecKey,
        cCSalt,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCKeyInfo(el);
}

let _cached_encoder_for_CCKeyInfo: $.ASN1Encoder<CCKeyInfo> | null = null;

/**
 * @summary Encodes a(n) CCKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CCKeyInfo (value: CCKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCKeyInfo) { _cached_encoder_for_CCKeyInfo = function (value: CCKeyInfo, elGetter: $.ASN1Encoder<CCKeyInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.cCCSID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.cCDecKey, $.BER),
            /* IF_ABSENT  */ ((value.cCSalt === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cCSalt, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CCKeyInfo(value, elGetter);
}


/* eslint-enable */
