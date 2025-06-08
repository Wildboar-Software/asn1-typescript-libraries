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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AlarmStatus_Item, AlarmStatus_Item_underRepair /* IMPORTED_LONG_NAMED_INTEGER */, underRepair /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_critical /* IMPORTED_LONG_NAMED_INTEGER */, critical /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_major /* IMPORTED_LONG_NAMED_INTEGER */, major /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_minor /* IMPORTED_LONG_NAMED_INTEGER */, minor /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_alarmOutstanding /* IMPORTED_LONG_NAMED_INTEGER */, alarmOutstanding /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmStatus_Item, _encode_AlarmStatus_Item } from "../Attribute-ASN1Module/AlarmStatus-Item.ta";
export { AlarmStatus_Item, AlarmStatus_Item_underRepair /* IMPORTED_LONG_NAMED_INTEGER */, underRepair /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_critical /* IMPORTED_LONG_NAMED_INTEGER */, critical /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_major /* IMPORTED_LONG_NAMED_INTEGER */, major /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_minor /* IMPORTED_LONG_NAMED_INTEGER */, minor /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmStatus_Item_alarmOutstanding /* IMPORTED_LONG_NAMED_INTEGER */, alarmOutstanding /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmStatus_Item, _encode_AlarmStatus_Item } from "../Attribute-ASN1Module/AlarmStatus-Item.ta";


/* START_OF_SYMBOL_DEFINITION AlarmStatus */
/**
 * @summary AlarmStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmStatus  ::= 
 *   SET OF
 *     INTEGER {underRepair(0), critical(1), major(2), minor(3),
 *              alarmOutstanding(4)}
 * ```
 */
export
type AlarmStatus = AlarmStatus_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AlarmStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmStatus */
let _cached_decoder_for_AlarmStatus: $.ASN1Decoder<AlarmStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmStatus */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmStatus} The decoded data structure.
 */
export
function _decode_AlarmStatus (el: _Element) {
    if (!_cached_decoder_for_AlarmStatus) { _cached_decoder_for_AlarmStatus = $._decodeSetOf<AlarmStatus_Item>(() => _decode_AlarmStatus_Item); }
    return _cached_decoder_for_AlarmStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmStatus */
let _cached_encoder_for_AlarmStatus: $.ASN1Encoder<AlarmStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmStatus */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmStatus */
/**
 * @summary Encodes a(n) AlarmStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmStatus, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmStatus (value: AlarmStatus, elGetter: $.ASN1Encoder<AlarmStatus>) {
    if (!_cached_encoder_for_AlarmStatus) { _cached_encoder_for_AlarmStatus = $._encodeSetOf<AlarmStatus_Item>(() => _encode_AlarmStatus_Item, $.BER); }
    return _cached_encoder_for_AlarmStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmStatus */

/* eslint-enable */
