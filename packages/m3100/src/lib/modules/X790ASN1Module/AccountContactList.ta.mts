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
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
export {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AccountContactList */
/**
 * @summary AccountContactList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccountContactList  ::=  SET OF PersonReach
 * ```
 */
export type AccountContactList = PersonReach[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AccountContactList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountContactList */
let _cached_decoder_for_AccountContactList: $.ASN1Decoder<AccountContactList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountContactList */

/* START_OF_SYMBOL_DEFINITION _decode_AccountContactList */
/**
 * @summary Decodes an ASN.1 element into a(n) AccountContactList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccountContactList} The decoded data structure.
 */
export function _decode_AccountContactList(el: _Element) {
    if (!_cached_decoder_for_AccountContactList) {
        _cached_decoder_for_AccountContactList = $._decodeSetOf<PersonReach>(
            () => _decode_PersonReach
        );
    }
    return _cached_decoder_for_AccountContactList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccountContactList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountContactList */
let _cached_encoder_for_AccountContactList: $.ASN1Encoder<AccountContactList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountContactList */

/* START_OF_SYMBOL_DEFINITION _encode_AccountContactList */
/**
 * @summary Encodes a(n) AccountContactList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccountContactList, encoded as an ASN.1 Element.
 */
export function _encode_AccountContactList(
    value: AccountContactList,
    elGetter: $.ASN1Encoder<AccountContactList>
) {
    if (!_cached_encoder_for_AccountContactList) {
        _cached_encoder_for_AccountContactList = $._encodeSetOf<PersonReach>(
            () => _encode_PersonReach,
            $.BER
        );
    }
    return _cached_encoder_for_AccountContactList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccountContactList */

/* eslint-enable */
