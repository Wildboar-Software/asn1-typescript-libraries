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
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta';
export {
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta';

/* START_OF_SYMBOL_DEFINITION SupportableClientList */
/**
 * @summary SupportableClientList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportableClientList  ::=  SET OF ObjectClass
 * ```
 */
export type SupportableClientList = ObjectClass[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SupportableClientList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportableClientList */
let _cached_decoder_for_SupportableClientList: $.ASN1Decoder<SupportableClientList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportableClientList */

/* START_OF_SYMBOL_DEFINITION _decode_SupportableClientList */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportableClientList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportableClientList} The decoded data structure.
 */
export function _decode_SupportableClientList(el: _Element) {
    if (!_cached_decoder_for_SupportableClientList) {
        _cached_decoder_for_SupportableClientList = $._decodeSetOf<ObjectClass>(
            () => _decode_ObjectClass
        );
    }
    return _cached_decoder_for_SupportableClientList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportableClientList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportableClientList */
let _cached_encoder_for_SupportableClientList: $.ASN1Encoder<SupportableClientList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportableClientList */

/* START_OF_SYMBOL_DEFINITION _encode_SupportableClientList */
/**
 * @summary Encodes a(n) SupportableClientList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportableClientList, encoded as an ASN.1 Element.
 */
export function _encode_SupportableClientList(
    value: SupportableClientList,
    elGetter: $.ASN1Encoder<SupportableClientList>
) {
    if (!_cached_encoder_for_SupportableClientList) {
        _cached_encoder_for_SupportableClientList = $._encodeSetOf<ObjectClass>(
            () => _encode_ObjectClass,
            $.BER
        );
    }
    return _cached_encoder_for_SupportableClientList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportableClientList */

/* eslint-enable */
