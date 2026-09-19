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
 * @summary IpaCapabilities_ipaFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaCapabilities-ipaFeatures ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IpaCapabilities_ipaFeatures = BIT_STRING;

/**
 * @summary IpaCapabilities_ipaFeatures_directRspServerCommunication
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_directRspServerCommunication: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary directRspServerCommunication
 * @constant
 */
export
const directRspServerCommunication: number = IpaCapabilities_ipaFeatures_directRspServerCommunication; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_indirectRspServerCommunication
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_indirectRspServerCommunication: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary indirectRspServerCommunication
 * @constant
 */
export
const indirectRspServerCommunication: number = IpaCapabilities_ipaFeatures_indirectRspServerCommunication; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimDownloadDataHandling
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimDownloadDataHandling: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary eimDownloadDataHandling
 * @constant
 */
export
const eimDownloadDataHandling: number = IpaCapabilities_ipaFeatures_eimDownloadDataHandling; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimCtxParams1Generation
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimCtxParams1Generation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary eimCtxParams1Generation
 * @constant
 */
export
const eimCtxParams1Generation: number = IpaCapabilities_ipaFeatures_eimCtxParams1Generation; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimProfileMetadataVerification
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimProfileMetadataVerification: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary eimProfileMetadataVerification
 * @constant
 */
export
const eimProfileMetadataVerification: number = IpaCapabilities_ipaFeatures_eimProfileMetadataVerification; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_minimizeEsipaBytes
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_minimizeEsipaBytes: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary minimizeEsipaBytes
 * @constant
 */
export
const minimizeEsipaBytes: number = IpaCapabilities_ipaFeatures_minimizeEsipaBytes; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IpaCapabilities_ipaFeatures: $.ASN1Decoder<IpaCapabilities_ipaFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaCapabilities_ipaFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaCapabilities_ipaFeatures (el: _Element): IpaCapabilities_ipaFeatures {
    if (!_cached_decoder_for_IpaCapabilities_ipaFeatures) { _cached_decoder_for_IpaCapabilities_ipaFeatures = $._decodeBitString; }
    return _cached_decoder_for_IpaCapabilities_ipaFeatures(el);
}

let _cached_encoder_for_IpaCapabilities_ipaFeatures: $.ASN1Encoder<IpaCapabilities_ipaFeatures> | null = null;

/**
 * @summary Encodes a(n) IpaCapabilities_ipaFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaCapabilities_ipaFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_IpaCapabilities_ipaFeatures (value: IpaCapabilities_ipaFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaCapabilities_ipaFeatures) { _cached_encoder_for_IpaCapabilities_ipaFeatures = $._encodeBitString; }
    return _cached_encoder_for_IpaCapabilities_ipaFeatures(value, elGetter);
}


/* eslint-enable */
