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
    EDIM_ExtendedBodyPart,
    _decode_EDIM_ExtendedBodyPart,
    _encode_EDIM_ExtendedBodyPart,
} from '../EDIMSInformationObjects/EDIM-ExtendedBodyPart.ta.js';
export {
    EDIM_ExtendedBodyPart,
    _decode_EDIM_ExtendedBodyPart,
    _encode_EDIM_ExtendedBodyPart,
} from '../EDIMSInformationObjects/EDIM-ExtendedBodyPart.ta.js';

/* START_OF_SYMBOL_DEFINITION BodyPartPlaceHolder */
/**
 * @summary BodyPartPlaceHolder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartPlaceHolder  ::=
 *   EDIM-ExtendedBodyPart
 * ```
 */
export type BodyPartPlaceHolder = EDIM_ExtendedBodyPart; // DefinedType
/* END_OF_SYMBOL_DEFINITION BodyPartPlaceHolder */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartPlaceHolder */
let _cached_decoder_for_BodyPartPlaceHolder: $.ASN1Decoder<BodyPartPlaceHolder> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartPlaceHolder */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartPlaceHolder */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartPlaceHolder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartPlaceHolder} The decoded data structure.
 */
export function _decode_BodyPartPlaceHolder(el: _Element) {
    if (!_cached_decoder_for_BodyPartPlaceHolder) {
        _cached_decoder_for_BodyPartPlaceHolder = _decode_EDIM_ExtendedBodyPart;
    }
    return _cached_decoder_for_BodyPartPlaceHolder(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartPlaceHolder */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartPlaceHolder */
let _cached_encoder_for_BodyPartPlaceHolder: $.ASN1Encoder<BodyPartPlaceHolder> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartPlaceHolder */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartPlaceHolder */
/**
 * @summary Encodes a(n) BodyPartPlaceHolder into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartPlaceHolder, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartPlaceHolder(
    value: BodyPartPlaceHolder,
    elGetter: $.ASN1Encoder<BodyPartPlaceHolder>
) {
    if (!_cached_encoder_for_BodyPartPlaceHolder) {
        _cached_encoder_for_BodyPartPlaceHolder = _encode_EDIM_ExtendedBodyPart;
    }
    return _cached_encoder_for_BodyPartPlaceHolder(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartPlaceHolder */

/* eslint-enable */
