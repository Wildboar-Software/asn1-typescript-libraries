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
import { ub_common_name_length } from '../MTSUpperBounds/ub-common-name-length.va';
export { ub_common_name_length } from '../MTSUpperBounds/ub-common-name-length.va';

/* START_OF_SYMBOL_DEFINITION UniversalCommonName */
/**
 * @summary UniversalCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalCommonName  ::=  UniversalOrBMPString{ub-common-name-length}
 * ```
 */
export type UniversalCommonName = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalCommonName */
let _cached_decoder_for_UniversalCommonName: $.ASN1Decoder<UniversalCommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalCommonName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalCommonName} The decoded data structure.
 */
export function _decode_UniversalCommonName(el: _Element) {
    if (!_cached_decoder_for_UniversalCommonName) {
        _cached_decoder_for_UniversalCommonName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalCommonName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalCommonName */
let _cached_encoder_for_UniversalCommonName: $.ASN1Encoder<UniversalCommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalCommonName */
/**
 * @summary Encodes a(n) UniversalCommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalCommonName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalCommonName(
    value: UniversalCommonName,
    elGetter: $.ASN1Encoder<UniversalCommonName>
) {
    if (!_cached_encoder_for_UniversalCommonName) {
        _cached_encoder_for_UniversalCommonName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalCommonName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalCommonName */

/* eslint-enable */
