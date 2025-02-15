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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
import { ub_manual_handling_instruction_length } from '../IPMSUpperBounds/ub-manual-handling-instruction-length.va';
export { ub_manual_handling_instruction_length } from '../IPMSUpperBounds/ub-manual-handling-instruction-length.va';

/* START_OF_SYMBOL_DEFINITION ManualHandlingInstruction */
/**
 * @summary ManualHandlingInstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManualHandlingInstruction  ::=
 *   UniversalOrBMPString{ub-manual-handling-instruction-length}
 * ```
 */
export type ManualHandlingInstruction = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualHandlingInstruction */
let _cached_decoder_for_ManualHandlingInstruction: $.ASN1Decoder<ManualHandlingInstruction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _decode_ManualHandlingInstruction */
/**
 * @summary Decodes an ASN.1 element into a(n) ManualHandlingInstruction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManualHandlingInstruction} The decoded data structure.
 */
export function _decode_ManualHandlingInstruction(el: _Element) {
    if (!_cached_decoder_for_ManualHandlingInstruction) {
        _cached_decoder_for_ManualHandlingInstruction = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_ManualHandlingInstruction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualHandlingInstruction */
let _cached_encoder_for_ManualHandlingInstruction: $.ASN1Encoder<ManualHandlingInstruction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _encode_ManualHandlingInstruction */
/**
 * @summary Encodes a(n) ManualHandlingInstruction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManualHandlingInstruction, encoded as an ASN.1 Element.
 */
export function _encode_ManualHandlingInstruction(
    value: ManualHandlingInstruction,
    elGetter: $.ASN1Encoder<ManualHandlingInstruction>
) {
    if (!_cached_encoder_for_ManualHandlingInstruction) {
        _cached_encoder_for_ManualHandlingInstruction = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_ManualHandlingInstruction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManualHandlingInstruction */

/* eslint-enable */
