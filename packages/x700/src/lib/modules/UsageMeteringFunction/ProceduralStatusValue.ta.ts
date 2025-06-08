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
    ProceduralStatus,
    _decode_ProceduralStatus,
    _encode_ProceduralStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProceduralStatus.ta';
export {
    ProceduralStatus,
    _decode_ProceduralStatus,
    _encode_ProceduralStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProceduralStatus.ta';

/* START_OF_SYMBOL_DEFINITION ProceduralStatusValue */
/**
 * @summary ProceduralStatusValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProceduralStatusValue  ::=  ProceduralStatus(WITH COMPONENT (terminating))
 * ```
 */
export type ProceduralStatusValue = ProceduralStatus; // DefinedType
/* END_OF_SYMBOL_DEFINITION ProceduralStatusValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProceduralStatusValue */
let _cached_decoder_for_ProceduralStatusValue: $.ASN1Decoder<ProceduralStatusValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProceduralStatusValue */

/* START_OF_SYMBOL_DEFINITION _decode_ProceduralStatusValue */
/**
 * @summary Decodes an ASN.1 element into a(n) ProceduralStatusValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProceduralStatusValue} The decoded data structure.
 */
export function _decode_ProceduralStatusValue(el: _Element) {
    if (!_cached_decoder_for_ProceduralStatusValue) {
        _cached_decoder_for_ProceduralStatusValue = _decode_ProceduralStatus;
    }
    return _cached_decoder_for_ProceduralStatusValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProceduralStatusValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProceduralStatusValue */
let _cached_encoder_for_ProceduralStatusValue: $.ASN1Encoder<ProceduralStatusValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProceduralStatusValue */

/* START_OF_SYMBOL_DEFINITION _encode_ProceduralStatusValue */
/**
 * @summary Encodes a(n) ProceduralStatusValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProceduralStatusValue, encoded as an ASN.1 Element.
 */
export function _encode_ProceduralStatusValue(
    value: ProceduralStatusValue,
    elGetter: $.ASN1Encoder<ProceduralStatusValue>
) {
    if (!_cached_encoder_for_ProceduralStatusValue) {
        _cached_encoder_for_ProceduralStatusValue = _encode_ProceduralStatus;
    }
    return _cached_encoder_for_ProceduralStatusValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProceduralStatusValue */

/* eslint-enable */
