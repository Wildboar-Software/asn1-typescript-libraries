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
    ACBioInstance,
    _decode_ACBioInstance,
    _encode_ACBioInstance,
} from '../AuthenticationContextForBiometrics/ACBioInstance.ta';
export {
    ACBioInstance,
    _decode_ACBioInstance,
    _encode_ACBioInstance,
} from '../AuthenticationContextForBiometrics/ACBioInstance.ta';

/* START_OF_SYMBOL_DEFINITION SequenceOfACBioInstances */
/**
 * @summary SequenceOfACBioInstances
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfACBioInstances  ::=  SEQUENCE OF ACBioInstance
 * ```
 */
export type SequenceOfACBioInstances = ACBioInstance[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfACBioInstances */
let _cached_decoder_for_SequenceOfACBioInstances: $.ASN1Decoder<SequenceOfACBioInstances> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceOfACBioInstances */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfACBioInstances
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfACBioInstances} The decoded data structure.
 */
export function _decode_SequenceOfACBioInstances(el: _Element) {
    if (!_cached_decoder_for_SequenceOfACBioInstances) {
        _cached_decoder_for_SequenceOfACBioInstances = $._decodeSequenceOf<ACBioInstance>(
            () => _decode_ACBioInstance
        );
    }
    return _cached_decoder_for_SequenceOfACBioInstances(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfACBioInstances */
let _cached_encoder_for_SequenceOfACBioInstances: $.ASN1Encoder<SequenceOfACBioInstances> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceOfACBioInstances */
/**
 * @summary Encodes a(n) SequenceOfACBioInstances into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfACBioInstances, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfACBioInstances(
    value: SequenceOfACBioInstances,
    elGetter: $.ASN1Encoder<SequenceOfACBioInstances>
) {
    if (!_cached_encoder_for_SequenceOfACBioInstances) {
        _cached_encoder_for_SequenceOfACBioInstances = $._encodeSequenceOf<ACBioInstance>(
            () => _encode_ACBioInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfACBioInstances(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceOfACBioInstances */

/* eslint-enable */
