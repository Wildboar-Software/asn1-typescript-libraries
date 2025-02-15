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
    BPUIOStaticInformation,
    _decode_BPUIOStaticInformation,
    _encode_BPUIOStaticInformation,
} from '../AuthenticationContextForBiometrics/BPUIOStaticInformation.ta';
export {
    BPUIOStaticInformation,
    _decode_BPUIOStaticInformation,
    _encode_BPUIOStaticInformation,
} from '../AuthenticationContextForBiometrics/BPUIOStaticInformation.ta';

/* START_OF_SYMBOL_DEFINITION BPUIOStaticInformationList */
/**
 * @summary BPUIOStaticInformationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUIOStaticInformationList  ::=  SEQUENCE OF BPUIOStaticInformation
 * ```
 */
export type BPUIOStaticInformationList = BPUIOStaticInformation[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BPUIOStaticInformationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUIOStaticInformationList */
let _cached_decoder_for_BPUIOStaticInformationList: $.ASN1Decoder<BPUIOStaticInformationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUIOStaticInformationList */

/* START_OF_SYMBOL_DEFINITION _decode_BPUIOStaticInformationList */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUIOStaticInformationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUIOStaticInformationList} The decoded data structure.
 */
export function _decode_BPUIOStaticInformationList(el: _Element) {
    if (!_cached_decoder_for_BPUIOStaticInformationList) {
        _cached_decoder_for_BPUIOStaticInformationList = $._decodeSequenceOf<BPUIOStaticInformation>(
            () => _decode_BPUIOStaticInformation
        );
    }
    return _cached_decoder_for_BPUIOStaticInformationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BPUIOStaticInformationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUIOStaticInformationList */
let _cached_encoder_for_BPUIOStaticInformationList: $.ASN1Encoder<BPUIOStaticInformationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUIOStaticInformationList */

/* START_OF_SYMBOL_DEFINITION _encode_BPUIOStaticInformationList */
/**
 * @summary Encodes a(n) BPUIOStaticInformationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUIOStaticInformationList, encoded as an ASN.1 Element.
 */
export function _encode_BPUIOStaticInformationList(
    value: BPUIOStaticInformationList,
    elGetter: $.ASN1Encoder<BPUIOStaticInformationList>
) {
    if (!_cached_encoder_for_BPUIOStaticInformationList) {
        _cached_encoder_for_BPUIOStaticInformationList = $._encodeSequenceOf<BPUIOStaticInformation>(
            () => _encode_BPUIOStaticInformation,
            $.BER
        );
    }
    return _cached_encoder_for_BPUIOStaticInformationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BPUIOStaticInformationList */

/* eslint-enable */
