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
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta';
export {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta';

/* START_OF_SYMBOL_DEFINITION CPC_type */
/**
 * @summary CPC_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPC-type  ::=
 *   User-data
 * ```
 */
export type CPC_type = User_data; // DefinedType
/* END_OF_SYMBOL_DEFINITION CPC_type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CPC_type */
let _cached_decoder_for_CPC_type: $.ASN1Decoder<CPC_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CPC_type */

/* START_OF_SYMBOL_DEFINITION _decode_CPC_type */
/**
 * @summary Decodes an ASN.1 element into a(n) CPC_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPC_type} The decoded data structure.
 */
export function _decode_CPC_type(el: _Element) {
    if (!_cached_decoder_for_CPC_type) {
        _cached_decoder_for_CPC_type = _decode_User_data;
    }
    return _cached_decoder_for_CPC_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CPC_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CPC_type */
let _cached_encoder_for_CPC_type: $.ASN1Encoder<CPC_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CPC_type */

/* START_OF_SYMBOL_DEFINITION _encode_CPC_type */
/**
 * @summary Encodes a(n) CPC_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPC_type, encoded as an ASN.1 Element.
 */
export function _encode_CPC_type(
    value: CPC_type,
    elGetter: $.ASN1Encoder<CPC_type>
) {
    if (!_cached_encoder_for_CPC_type) {
        _cached_encoder_for_CPC_type = _encode_User_data;
    }
    return _cached_encoder_for_CPC_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CPC_type */

/* eslint-enable */
