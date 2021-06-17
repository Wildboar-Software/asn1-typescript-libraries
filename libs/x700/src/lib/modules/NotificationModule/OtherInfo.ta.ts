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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';

/* START_OF_SYMBOL_DEFINITION OtherInfo */
/**
 * @summary OtherInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherInfo  ::=  SET OF ManagementExtension
 * ```
 */
export type OtherInfo = ManagementExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION OtherInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherInfo */
let _cached_decoder_for_OtherInfo: $.ASN1Decoder<OtherInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _decode_OtherInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherInfo} The decoded data structure.
 */
export function _decode_OtherInfo(el: _Element) {
    if (!_cached_decoder_for_OtherInfo) {
        _cached_decoder_for_OtherInfo = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_OtherInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherInfo */
let _cached_encoder_for_OtherInfo: $.ASN1Encoder<OtherInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _encode_OtherInfo */
/**
 * @summary Encodes a(n) OtherInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherInfo, encoded as an ASN.1 Element.
 */
export function _encode_OtherInfo(
    value: OtherInfo,
    elGetter: $.ASN1Encoder<OtherInfo>
) {
    if (!_cached_encoder_for_OtherInfo) {
        _cached_encoder_for_OtherInfo = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_OtherInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherInfo */

/* eslint-enable */
