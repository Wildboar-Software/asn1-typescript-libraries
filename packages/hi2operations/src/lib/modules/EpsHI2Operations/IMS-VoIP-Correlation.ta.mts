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
import { IMS_VoIP_Correlation_Item, _decode_IMS_VoIP_Correlation_Item, _encode_IMS_VoIP_Correlation_Item } from "../EpsHI2Operations/IMS-VoIP-Correlation-Item.ta.mjs";
// export { IMS_VoIP_Correlation_Item, _decode_IMS_VoIP_Correlation_Item, _encode_IMS_VoIP_Correlation_Item } from "../EpsHI2Operations/IMS-VoIP-Correlation-Item.ta.mjs";


/**
 * @summary IMS_VoIP_Correlation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMS-VoIP-Correlation  ::=  SET OF SEQUENCE {
 *  ims-iri [0] IRI-to-IRI-Correlation,
 *  ims-cc [1] IRI-to-CC-Correlation OPTIONAL
 * }
 * ```
 */
export
type IMS_VoIP_Correlation = IMS_VoIP_Correlation_Item[]; // SetOfType

let _cached_decoder_for_IMS_VoIP_Correlation: $.ASN1Decoder<IMS_VoIP_Correlation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMS_VoIP_Correlation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMS_VoIP_Correlation (el: _Element): IMS_VoIP_Correlation {
    if (!_cached_decoder_for_IMS_VoIP_Correlation) { _cached_decoder_for_IMS_VoIP_Correlation = $._decodeSetOf<IMS_VoIP_Correlation_Item>(() => _decode_IMS_VoIP_Correlation_Item); }
    return _cached_decoder_for_IMS_VoIP_Correlation(el);
}

let _cached_encoder_for_IMS_VoIP_Correlation: $.ASN1Encoder<IMS_VoIP_Correlation> | null = null;

/**
 * @summary Encodes a(n) IMS_VoIP_Correlation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMS_VoIP_Correlation, encoded as an ASN.1 Element.
 */
export
function _encode_IMS_VoIP_Correlation (value: IMS_VoIP_Correlation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMS_VoIP_Correlation) { _cached_encoder_for_IMS_VoIP_Correlation = $._encodeSetOf<IMS_VoIP_Correlation_Item>(() => _encode_IMS_VoIP_Correlation_Item, $.BER); }
    return _cached_encoder_for_IMS_VoIP_Correlation(value, elGetter);
}


/* eslint-enable */
