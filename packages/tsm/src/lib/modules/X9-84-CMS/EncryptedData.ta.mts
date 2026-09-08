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
import { CMSVersion, CMSVersion_v84 /* IMPORTED_LONG_NAMED_INTEGER */, v84 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CMSVersion, _encode_CMSVersion } from "../X9-84-CMS/CMSVersion.ta.mjs";
// export { CMSVersion, CMSVersion_v84 /* IMPORTED_LONG_NAMED_INTEGER */, v84 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CMSVersion, _encode_CMSVersion } from "../X9-84-CMS/CMSVersion.ta.mjs";
import { EncryptedContentInfo, _decode_EncryptedContentInfo, _encode_EncryptedContentInfo } from "../X9-84-CMS/EncryptedContentInfo.ta.mjs";
// export { EncryptedContentInfo, _decode_EncryptedContentInfo, _encode_EncryptedContentInfo } from "../X9-84-CMS/EncryptedContentInfo.ta.mjs";


/**
 * @summary EncryptedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptedData ::= SEQUENCE {
 *    version               CMSVersion,
 *    encryptedContentInfo  EncryptedContentInfo
 * }
 * ```
 * 
 * @class
 */
export
class EncryptedData {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo
    ) {}

    /**
     * @summary Restructures an object into a EncryptedData
     * @description
     * 
     * This takes an `object` and converts it to a `EncryptedData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedData`.
     * @returns {EncryptedData}
     */
    public static _from_object (_o: { [_K in keyof (EncryptedData)]: (EncryptedData)[_K] }): EncryptedData {
        return new EncryptedData(_o.version, _o.encryptedContentInfo);
    }


}

/**
 * @summary The Leading Root Component Types of EncryptedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncryptedData: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("encryptedContentInfo", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EncryptedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncryptedData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncryptedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncryptedData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncryptedData: $.ASN1Decoder<EncryptedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptedData (el: _Element): EncryptedData {
    if (!_cached_decoder_for_EncryptedData) { _cached_decoder_for_EncryptedData = function (el: _Element): EncryptedData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EncryptedData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "encryptedContentInfo";
    let version!: CMSVersion;
    let encryptedContentInfo!: EncryptedContentInfo;
    version = _decode_CMSVersion(sequence[0]);
    encryptedContentInfo = _decode_EncryptedContentInfo(sequence[1]);
    return new EncryptedData(
        version,
        encryptedContentInfo,

    );
}; }
    return _cached_decoder_for_EncryptedData(el);
}

let _cached_encoder_for_EncryptedData: $.ASN1Encoder<EncryptedData> | null = null;

/**
 * @summary Encodes a(n) EncryptedData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedData, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptedData (value: EncryptedData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptedData) { _cached_encoder_for_EncryptedData = function (value: EncryptedData, elGetter: $.ASN1Encoder<EncryptedData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_EncryptedContentInfo(value.encryptedContentInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EncryptedData(value, elGetter);
}


/* eslint-enable */
