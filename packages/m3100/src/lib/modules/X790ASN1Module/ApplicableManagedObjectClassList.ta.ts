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
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta.js';
export {
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta.js';

/* START_OF_SYMBOL_DEFINITION ApplicableManagedObjectClassList */
/**
 * @summary ApplicableManagedObjectClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicableManagedObjectClassList  ::=  SET OF ObjectClass
 * ```
 */
export type ApplicableManagedObjectClassList = ObjectClass[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ApplicableManagedObjectClassList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicableManagedObjectClassList */
let _cached_decoder_for_ApplicableManagedObjectClassList: $.ASN1Decoder<ApplicableManagedObjectClassList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicableManagedObjectClassList */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicableManagedObjectClassList */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicableManagedObjectClassList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicableManagedObjectClassList} The decoded data structure.
 */
export function _decode_ApplicableManagedObjectClassList(el: _Element) {
    if (!_cached_decoder_for_ApplicableManagedObjectClassList) {
        _cached_decoder_for_ApplicableManagedObjectClassList = $._decodeSetOf<ObjectClass>(
            () => _decode_ObjectClass
        );
    }
    return _cached_decoder_for_ApplicableManagedObjectClassList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicableManagedObjectClassList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicableManagedObjectClassList */
let _cached_encoder_for_ApplicableManagedObjectClassList: $.ASN1Encoder<ApplicableManagedObjectClassList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicableManagedObjectClassList */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicableManagedObjectClassList */
/**
 * @summary Encodes a(n) ApplicableManagedObjectClassList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicableManagedObjectClassList, encoded as an ASN.1 Element.
 */
export function _encode_ApplicableManagedObjectClassList(
    value: ApplicableManagedObjectClassList,
    elGetter: $.ASN1Encoder<ApplicableManagedObjectClassList>
) {
    if (!_cached_encoder_for_ApplicableManagedObjectClassList) {
        _cached_encoder_for_ApplicableManagedObjectClassList = $._encodeSetOf<ObjectClass>(
            () => _encode_ObjectClass,
            $.BER
        );
    }
    return _cached_encoder_for_ApplicableManagedObjectClassList(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicableManagedObjectClassList */

/* eslint-enable */
