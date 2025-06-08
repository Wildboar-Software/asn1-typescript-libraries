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
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from "@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta";


/* START_OF_SYMBOL_DEFINITION ActionReply */
/**
 * @summary ActionReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionReply  ::=  SET OF ManagementExtension
 * ```
 */
export
type ActionReply = ManagementExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ActionReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionReply */
let _cached_decoder_for_ActionReply: $.ASN1Decoder<ActionReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionReply */

/* START_OF_SYMBOL_DEFINITION _decode_ActionReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionReply} The decoded data structure.
 */
export
function _decode_ActionReply (el: _Element) {
    if (!_cached_decoder_for_ActionReply) { _cached_decoder_for_ActionReply = $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension); }
    return _cached_decoder_for_ActionReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionReply */
let _cached_encoder_for_ActionReply: $.ASN1Encoder<ActionReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionReply */

/* START_OF_SYMBOL_DEFINITION _encode_ActionReply */
/**
 * @summary Encodes a(n) ActionReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionReply, encoded as an ASN.1 Element.
 */
export
function _encode_ActionReply (value: ActionReply, elGetter: $.ASN1Encoder<ActionReply>) {
    if (!_cached_encoder_for_ActionReply) { _cached_encoder_for_ActionReply = $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER); }
    return _cached_encoder_for_ActionReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionReply */

/* eslint-enable */
