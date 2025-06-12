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
    ServiceLocationList_Item,
    _decode_ServiceLocationList_Item,
    _encode_ServiceLocationList_Item,
} from '../X790ASN1Module/ServiceLocationList-Item.ta.mjs';
export {
    ServiceLocationList_Item,
    _decode_ServiceLocationList_Item,
    _encode_ServiceLocationList_Item,
} from '../X790ASN1Module/ServiceLocationList-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ServiceLocationList */
/**
 * @summary ServiceLocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceLocationList  ::=
 *   SET OF SEQUENCE {name     PremisesName,
 *                    address  PremisesAddress,
 *                    ...}
 * ```
 */
export type ServiceLocationList = ServiceLocationList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ServiceLocationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceLocationList */
let _cached_decoder_for_ServiceLocationList: $.ASN1Decoder<ServiceLocationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceLocationList */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceLocationList */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceLocationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceLocationList} The decoded data structure.
 */
export function _decode_ServiceLocationList(el: _Element) {
    if (!_cached_decoder_for_ServiceLocationList) {
        _cached_decoder_for_ServiceLocationList = $._decodeSetOf<ServiceLocationList_Item>(
            () => _decode_ServiceLocationList_Item
        );
    }
    return _cached_decoder_for_ServiceLocationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceLocationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceLocationList */
let _cached_encoder_for_ServiceLocationList: $.ASN1Encoder<ServiceLocationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceLocationList */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceLocationList */
/**
 * @summary Encodes a(n) ServiceLocationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceLocationList, encoded as an ASN.1 Element.
 */
export function _encode_ServiceLocationList(
    value: ServiceLocationList,
    elGetter: $.ASN1Encoder<ServiceLocationList>
) {
    if (!_cached_encoder_for_ServiceLocationList) {
        _cached_encoder_for_ServiceLocationList = $._encodeSetOf<ServiceLocationList_Item>(
            () => _encode_ServiceLocationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ServiceLocationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceLocationList */

/* eslint-enable */
