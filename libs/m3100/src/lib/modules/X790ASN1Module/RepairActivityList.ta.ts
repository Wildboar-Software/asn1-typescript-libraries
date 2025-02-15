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
    RepairActivityList_Item,
    _decode_RepairActivityList_Item,
    _encode_RepairActivityList_Item,
} from '../X790ASN1Module/RepairActivityList-Item.ta';
export {
    RepairActivityList_Item,
    _decode_RepairActivityList_Item,
    _encode_RepairActivityList_Item,
} from '../X790ASN1Module/RepairActivityList-Item.ta';

/* START_OF_SYMBOL_DEFINITION RepairActivityList */
/**
 * @summary RepairActivityList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepairActivityList  ::=
 *   SET OF
 *     SEQUENCE {entryTime       GeneralizedTime,
 *               activityInfo    GraphicString,
 *               activityPerson  PersonReach OPTIONAL,
 *               activityCode    ActivityCode OPTIONAL,
 *               ...}
 * ```
 */
export type RepairActivityList = RepairActivityList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RepairActivityList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepairActivityList */
let _cached_decoder_for_RepairActivityList: $.ASN1Decoder<RepairActivityList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepairActivityList */

/* START_OF_SYMBOL_DEFINITION _decode_RepairActivityList */
/**
 * @summary Decodes an ASN.1 element into a(n) RepairActivityList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepairActivityList} The decoded data structure.
 */
export function _decode_RepairActivityList(el: _Element) {
    if (!_cached_decoder_for_RepairActivityList) {
        _cached_decoder_for_RepairActivityList = $._decodeSetOf<RepairActivityList_Item>(
            () => _decode_RepairActivityList_Item
        );
    }
    return _cached_decoder_for_RepairActivityList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RepairActivityList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepairActivityList */
let _cached_encoder_for_RepairActivityList: $.ASN1Encoder<RepairActivityList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepairActivityList */

/* START_OF_SYMBOL_DEFINITION _encode_RepairActivityList */
/**
 * @summary Encodes a(n) RepairActivityList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepairActivityList, encoded as an ASN.1 Element.
 */
export function _encode_RepairActivityList(
    value: RepairActivityList,
    elGetter: $.ASN1Encoder<RepairActivityList>
) {
    if (!_cached_encoder_for_RepairActivityList) {
        _cached_encoder_for_RepairActivityList = $._encodeSetOf<RepairActivityList_Item>(
            () => _encode_RepairActivityList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RepairActivityList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RepairActivityList */

/* eslint-enable */
