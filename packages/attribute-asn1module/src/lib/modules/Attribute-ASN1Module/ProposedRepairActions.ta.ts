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
import { SpecificIdentifier, _decode_SpecificIdentifier, _encode_SpecificIdentifier } from "../Attribute-ASN1Module/SpecificIdentifier.ta";
export { SpecificIdentifier, _decode_SpecificIdentifier, _encode_SpecificIdentifier } from "../Attribute-ASN1Module/SpecificIdentifier.ta";


/* START_OF_SYMBOL_DEFINITION ProposedRepairActions */
/**
 * @summary ProposedRepairActions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProposedRepairActions  ::=  SET OF SpecificIdentifier
 * ```
 */
export
type ProposedRepairActions = SpecificIdentifier[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ProposedRepairActions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProposedRepairActions */
let _cached_decoder_for_ProposedRepairActions: $.ASN1Decoder<ProposedRepairActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProposedRepairActions */

/* START_OF_SYMBOL_DEFINITION _decode_ProposedRepairActions */
/**
 * @summary Decodes an ASN.1 element into a(n) ProposedRepairActions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProposedRepairActions} The decoded data structure.
 */
export
function _decode_ProposedRepairActions (el: _Element) {
    if (!_cached_decoder_for_ProposedRepairActions) { _cached_decoder_for_ProposedRepairActions = $._decodeSetOf<SpecificIdentifier>(() => _decode_SpecificIdentifier); }
    return _cached_decoder_for_ProposedRepairActions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProposedRepairActions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProposedRepairActions */
let _cached_encoder_for_ProposedRepairActions: $.ASN1Encoder<ProposedRepairActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProposedRepairActions */

/* START_OF_SYMBOL_DEFINITION _encode_ProposedRepairActions */
/**
 * @summary Encodes a(n) ProposedRepairActions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProposedRepairActions, encoded as an ASN.1 Element.
 */
export
function _encode_ProposedRepairActions (value: ProposedRepairActions, elGetter: $.ASN1Encoder<ProposedRepairActions>) {
    if (!_cached_encoder_for_ProposedRepairActions) { _cached_encoder_for_ProposedRepairActions = $._encodeSetOf<SpecificIdentifier>(() => _encode_SpecificIdentifier, $.BER); }
    return _cached_encoder_for_ProposedRepairActions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProposedRepairActions */

/* eslint-enable */
