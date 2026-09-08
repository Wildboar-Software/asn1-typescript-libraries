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
import { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../X9-84-CMS/OriginatorInfo.ta.mjs";
// export { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../X9-84-CMS/OriginatorInfo.ta.mjs";
import { RecipientInfos, _decode_RecipientInfos, _encode_RecipientInfos } from "../X9-84-CMS/RecipientInfos.ta.mjs";
// export { RecipientInfos, _decode_RecipientInfos, _encode_RecipientInfos } from "../X9-84-CMS/RecipientInfos.ta.mjs";
import { EncryptedContentInfo, _decode_EncryptedContentInfo, _encode_EncryptedContentInfo } from "../X9-84-CMS/EncryptedContentInfo.ta.mjs";
// export { EncryptedContentInfo, _decode_EncryptedContentInfo, _encode_EncryptedContentInfo } from "../X9-84-CMS/EncryptedContentInfo.ta.mjs";


/**
 * @summary EnvelopedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnvelopedData ::= SEQUENCE {
 *    version               CMSVersion,
 *    originatorInfo        [0] OriginatorInfo  OPTIONAL,
 *    recipientInfos        RecipientInfos,
 *    encryptedContentInfo  EncryptedContentInfo
 * }
 * ```
 * 
 * @class
 */
export
class EnvelopedData {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `originatorInfo`.
         * @public
         * @readonly
         */
        readonly originatorInfo: OPTIONAL<OriginatorInfo>,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: RecipientInfos,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo
    ) {}

    /**
     * @summary Restructures an object into a EnvelopedData
     * @description
     * 
     * This takes an `object` and converts it to a `EnvelopedData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnvelopedData`.
     * @returns {EnvelopedData}
     */
    public static _from_object (_o: { [_K in keyof (EnvelopedData)]: (EnvelopedData)[_K] }): EnvelopedData {
        return new EnvelopedData(_o.version, _o.originatorInfo, _o.recipientInfos, _o.encryptedContentInfo);
    }


}

/**
 * @summary The Leading Root Component Types of EnvelopedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnvelopedData: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("originatorInfo", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("recipientInfos", false, $.hasTag(_TagClass.universal, 17), undefined, undefined),
    new $.ComponentSpec("encryptedContentInfo", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EnvelopedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnvelopedData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnvelopedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnvelopedData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnvelopedData: $.ASN1Decoder<EnvelopedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopedData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnvelopedData (el: _Element): EnvelopedData {
    if (!_cached_decoder_for_EnvelopedData) { _cached_decoder_for_EnvelopedData = function (el: _Element): EnvelopedData {
    let version!: CMSVersion;
    let originatorInfo: OPTIONAL<OriginatorInfo>;
    let recipientInfos!: RecipientInfos;
    let encryptedContentInfo!: EncryptedContentInfo;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_CMSVersion(_el); },
        "originatorInfo": (_el: _Element): void => { originatorInfo = $._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfos": (_el: _Element): void => { recipientInfos = _decode_RecipientInfos(_el); },
        "encryptedContentInfo": (_el: _Element): void => { encryptedContentInfo = _decode_EncryptedContentInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EnvelopedData,
        _extension_additions_list_spec_for_EnvelopedData,
        _root_component_type_list_2_spec_for_EnvelopedData,
        undefined,
    );
    return new EnvelopedData(
        version,
        originatorInfo,
        recipientInfos,
        encryptedContentInfo
    );
}; }
    return _cached_decoder_for_EnvelopedData(el);
}

let _cached_encoder_for_EnvelopedData: $.ASN1Encoder<EnvelopedData> | null = null;

/**
 * @summary Encodes a(n) EnvelopedData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopedData, encoded as an ASN.1 Element.
 */
export
function _encode_EnvelopedData (value: EnvelopedData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnvelopedData) { _cached_encoder_for_EnvelopedData = function (value: EnvelopedData, elGetter: $.ASN1Encoder<EnvelopedData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* IF_ABSENT  */ ((value.originatorInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_OriginatorInfo, $.BER)(value.originatorInfo, $.BER)),
            /* REQUIRED   */ _encode_RecipientInfos(value.recipientInfos, $.BER),
            /* REQUIRED   */ _encode_EncryptedContentInfo(value.encryptedContentInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EnvelopedData(value, elGetter);
}


/* eslint-enable */
