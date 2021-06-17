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

/* START_OF_SYMBOL_DEFINITION _enum_for_DedicatedOrShared */
export enum _enum_for_DedicatedOrShared {
    dedicated = 1,
    shared = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DedicatedOrShared */

/* START_OF_SYMBOL_DEFINITION DedicatedOrShared */
/**
 * @summary DedicatedOrShared
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DedicatedOrShared  ::=  ENUMERATED {dedicated(1), shared(2), ...
 *                                   }
 * ```@enum {number}
 */
export type DedicatedOrShared = _enum_for_DedicatedOrShared | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION DedicatedOrShared */

/* START_OF_SYMBOL_DEFINITION DedicatedOrShared_dedicated */
/**
 * @summary DedicatedOrShared_dedicated
 * @constant
 * @type {number}
 */
export const DedicatedOrShared_dedicated: DedicatedOrShared = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DedicatedOrShared_dedicated */

/* START_OF_SYMBOL_DEFINITION dedicated */
/**
 * @summary dedicated
 * @constant
 * @type {number}
 */
export const dedicated: DedicatedOrShared = DedicatedOrShared_dedicated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dedicated */

/* START_OF_SYMBOL_DEFINITION DedicatedOrShared_shared */
/**
 * @summary DedicatedOrShared_shared
 * @constant
 * @type {number}
 */
export const DedicatedOrShared_shared: DedicatedOrShared = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DedicatedOrShared_shared */

/* START_OF_SYMBOL_DEFINITION shared */
/**
 * @summary shared
 * @constant
 * @type {number}
 */
export const shared: DedicatedOrShared = DedicatedOrShared_shared; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION shared */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DedicatedOrShared */
let _cached_decoder_for_DedicatedOrShared: $.ASN1Decoder<DedicatedOrShared> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DedicatedOrShared */

/* START_OF_SYMBOL_DEFINITION _decode_DedicatedOrShared */
/**
 * @summary Decodes an ASN.1 element into a(n) DedicatedOrShared
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DedicatedOrShared} The decoded data structure.
 */
export function _decode_DedicatedOrShared(el: _Element) {
    if (!_cached_decoder_for_DedicatedOrShared) {
        _cached_decoder_for_DedicatedOrShared = $._decodeEnumerated;
    }
    return _cached_decoder_for_DedicatedOrShared(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DedicatedOrShared */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DedicatedOrShared */
let _cached_encoder_for_DedicatedOrShared: $.ASN1Encoder<DedicatedOrShared> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DedicatedOrShared */

/* START_OF_SYMBOL_DEFINITION _encode_DedicatedOrShared */
/**
 * @summary Encodes a(n) DedicatedOrShared into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DedicatedOrShared, encoded as an ASN.1 Element.
 */
export function _encode_DedicatedOrShared(
    value: DedicatedOrShared,
    elGetter: $.ASN1Encoder<DedicatedOrShared>
) {
    if (!_cached_encoder_for_DedicatedOrShared) {
        _cached_encoder_for_DedicatedOrShared = $._encodeEnumerated;
    }
    return _cached_encoder_for_DedicatedOrShared(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DedicatedOrShared */

/* eslint-enable */
