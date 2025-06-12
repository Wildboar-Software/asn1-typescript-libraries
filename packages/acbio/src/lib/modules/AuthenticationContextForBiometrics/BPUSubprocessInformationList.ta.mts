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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    BPUSubprocessInformation,
    _decode_BPUSubprocessInformation,
    _encode_BPUSubprocessInformation,
} from '../AuthenticationContextForBiometrics/BPUSubprocessInformation.ta.mjs';
export {
    BPUSubprocessInformation,
    _decode_BPUSubprocessInformation,
    _encode_BPUSubprocessInformation,
} from '../AuthenticationContextForBiometrics/BPUSubprocessInformation.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BPUSubprocessInformationList */
/**
 * @summary BPUSubprocessInformationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUSubprocessInformationList  ::=  SEQUENCE OF BPUSubprocessInformation
 * ```
 */
export type BPUSubprocessInformationList = BPUSubprocessInformation[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BPUSubprocessInformationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUSubprocessInformationList */
let _cached_decoder_for_BPUSubprocessInformationList: $.ASN1Decoder<BPUSubprocessInformationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUSubprocessInformationList */

/* START_OF_SYMBOL_DEFINITION _decode_BPUSubprocessInformationList */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUSubprocessInformationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUSubprocessInformationList} The decoded data structure.
 */
export function _decode_BPUSubprocessInformationList(el: _Element) {
    if (!_cached_decoder_for_BPUSubprocessInformationList) {
        _cached_decoder_for_BPUSubprocessInformationList = $._decodeSequenceOf<BPUSubprocessInformation>(
            () => _decode_BPUSubprocessInformation
        );
    }
    return _cached_decoder_for_BPUSubprocessInformationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BPUSubprocessInformationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUSubprocessInformationList */
let _cached_encoder_for_BPUSubprocessInformationList: $.ASN1Encoder<BPUSubprocessInformationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUSubprocessInformationList */

/* START_OF_SYMBOL_DEFINITION _encode_BPUSubprocessInformationList */
/**
 * @summary Encodes a(n) BPUSubprocessInformationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUSubprocessInformationList, encoded as an ASN.1 Element.
 */
export function _encode_BPUSubprocessInformationList(
    value: BPUSubprocessInformationList,
    elGetter: $.ASN1Encoder<BPUSubprocessInformationList>
) {
    if (!_cached_encoder_for_BPUSubprocessInformationList) {
        _cached_encoder_for_BPUSubprocessInformationList = $._encodeSequenceOf<BPUSubprocessInformation>(
            () => _encode_BPUSubprocessInformation,
            $.BER
        );
    }
    return _cached_encoder_for_BPUSubprocessInformationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BPUSubprocessInformationList */

/* eslint-enable */
