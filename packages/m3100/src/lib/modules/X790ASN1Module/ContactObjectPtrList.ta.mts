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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ContactObjectPtrList */
/**
 * @summary ContactObjectPtrList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactObjectPtrList  ::=  SET OF ObjectInstance
 * ```
 */
export type ContactObjectPtrList = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ContactObjectPtrList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactObjectPtrList */
let _cached_decoder_for_ContactObjectPtrList: $.ASN1Decoder<ContactObjectPtrList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactObjectPtrList */

/* START_OF_SYMBOL_DEFINITION _decode_ContactObjectPtrList */
/**
 * @summary Decodes an ASN.1 element into a(n) ContactObjectPtrList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactObjectPtrList} The decoded data structure.
 */
export function _decode_ContactObjectPtrList(el: _Element) {
    if (!_cached_decoder_for_ContactObjectPtrList) {
        _cached_decoder_for_ContactObjectPtrList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ContactObjectPtrList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContactObjectPtrList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactObjectPtrList */
let _cached_encoder_for_ContactObjectPtrList: $.ASN1Encoder<ContactObjectPtrList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactObjectPtrList */

/* START_OF_SYMBOL_DEFINITION _encode_ContactObjectPtrList */
/**
 * @summary Encodes a(n) ContactObjectPtrList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactObjectPtrList, encoded as an ASN.1 Element.
 */
export function _encode_ContactObjectPtrList(
    value: ContactObjectPtrList,
    elGetter: $.ASN1Encoder<ContactObjectPtrList>
) {
    if (!_cached_encoder_for_ContactObjectPtrList) {
        _cached_encoder_for_ContactObjectPtrList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ContactObjectPtrList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContactObjectPtrList */

/* eslint-enable */
