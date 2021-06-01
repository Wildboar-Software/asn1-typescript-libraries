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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
import { ub_pds_parameter_length } from '../MTSUpperBounds/ub-pds-parameter-length.va';
export { ub_pds_parameter_length } from '../MTSUpperBounds/ub-pds-parameter-length.va';

/* START_OF_SYMBOL_DEFINITION UniversalPDSParameter */
/**
 * @summary UniversalPDSParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPDSParameter  ::=  UniversalOrBMPString{ub-pds-parameter-length}
 * ```
 */
export type UniversalPDSParameter = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPDSParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPDSParameter */
let _cached_decoder_for_UniversalPDSParameter: $.ASN1Decoder<UniversalPDSParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPDSParameter */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPDSParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPDSParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPDSParameter} The decoded data structure.
 */
export function _decode_UniversalPDSParameter(el: _Element) {
    if (!_cached_decoder_for_UniversalPDSParameter) {
        _cached_decoder_for_UniversalPDSParameter = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalPDSParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPDSParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPDSParameter */
let _cached_encoder_for_UniversalPDSParameter: $.ASN1Encoder<UniversalPDSParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPDSParameter */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPDSParameter */
/**
 * @summary Encodes a(n) UniversalPDSParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPDSParameter, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPDSParameter(
    value: UniversalPDSParameter,
    elGetter: $.ASN1Encoder<UniversalPDSParameter>
) {
    if (!_cached_encoder_for_UniversalPDSParameter) {
        _cached_encoder_for_UniversalPDSParameter = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalPDSParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPDSParameter */

/* eslint-enable */
