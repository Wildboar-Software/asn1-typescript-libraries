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
    ProtocolVersion,
    ProtocolVersion_version1 /* IMPORTED_LONG_NAMED_BIT */,
    version1 /* IMPORTED_SHORT_NAMED_BIT */,
    ProtocolVersion_version2 /* IMPORTED_LONG_NAMED_BIT */,
    version2 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ProtocolVersion,
    _encode_ProtocolVersion,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/ProtocolVersion.ta';
export {
    ProtocolVersion,
    ProtocolVersion_version1 /* IMPORTED_LONG_NAMED_BIT */,
    version1 /* IMPORTED_SHORT_NAMED_BIT */,
    ProtocolVersion_version2 /* IMPORTED_LONG_NAMED_BIT */,
    version2 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ProtocolVersion,
    _encode_ProtocolVersion,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/ProtocolVersion.ta';

/* START_OF_SYMBOL_DEFINITION ProtocolVersionSupported */
/**
 * @summary ProtocolVersionSupported
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersionSupported  ::=  ProtocolVersion
 * ```
 */
export type ProtocolVersionSupported = ProtocolVersion; // DefinedType
/* END_OF_SYMBOL_DEFINITION ProtocolVersionSupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolVersionSupported */
let _cached_decoder_for_ProtocolVersionSupported: $.ASN1Decoder<ProtocolVersionSupported> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolVersionSupported */

/* START_OF_SYMBOL_DEFINITION _decode_ProtocolVersionSupported */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolVersionSupported
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolVersionSupported} The decoded data structure.
 */
export function _decode_ProtocolVersionSupported(el: _Element) {
    if (!_cached_decoder_for_ProtocolVersionSupported) {
        _cached_decoder_for_ProtocolVersionSupported = _decode_ProtocolVersion;
    }
    return _cached_decoder_for_ProtocolVersionSupported(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtocolVersionSupported */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolVersionSupported */
let _cached_encoder_for_ProtocolVersionSupported: $.ASN1Encoder<ProtocolVersionSupported> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolVersionSupported */

/* START_OF_SYMBOL_DEFINITION _encode_ProtocolVersionSupported */
/**
 * @summary Encodes a(n) ProtocolVersionSupported into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolVersionSupported, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolVersionSupported(
    value: ProtocolVersionSupported,
    elGetter: $.ASN1Encoder<ProtocolVersionSupported>
) {
    if (!_cached_encoder_for_ProtocolVersionSupported) {
        _cached_encoder_for_ProtocolVersionSupported = _encode_ProtocolVersion;
    }
    return _cached_encoder_for_ProtocolVersionSupported(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtocolVersionSupported */

/* eslint-enable */
