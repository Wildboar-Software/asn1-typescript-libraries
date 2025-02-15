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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION MORTs */
/**
 * @summary MORTs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MORTs  ::=  SET OF ObjectInstance
 * ```
 */
export type MORTs = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION MORTs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MORTs */
let _cached_decoder_for_MORTs: $.ASN1Decoder<MORTs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MORTs */

/* START_OF_SYMBOL_DEFINITION _decode_MORTs */
/**
 * @summary Decodes an ASN.1 element into a(n) MORTs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MORTs} The decoded data structure.
 */
export function _decode_MORTs(el: _Element) {
    if (!_cached_decoder_for_MORTs) {
        _cached_decoder_for_MORTs = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_MORTs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MORTs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MORTs */
let _cached_encoder_for_MORTs: $.ASN1Encoder<MORTs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MORTs */

/* START_OF_SYMBOL_DEFINITION _encode_MORTs */
/**
 * @summary Encodes a(n) MORTs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MORTs, encoded as an ASN.1 Element.
 */
export function _encode_MORTs(value: MORTs, elGetter: $.ASN1Encoder<MORTs>) {
    if (!_cached_encoder_for_MORTs) {
        _cached_encoder_for_MORTs = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_MORTs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MORTs */

/* eslint-enable */
