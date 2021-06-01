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
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta';
export {
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta';

/* START_OF_SYMBOL_DEFINITION SubmissionControls */
/**
 * @summary SubmissionControls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControls  ::=
 *   Controls
 *     (WITH COMPONENTS {
 *        ...,
 *        permissible-content-types              ABSENT,
 *        permissible-encoded-information-types  ABSENT
 *      })
 * ```
 */
export type SubmissionControls = Controls; // DefinedType
/* END_OF_SYMBOL_DEFINITION SubmissionControls */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionControls */
let _cached_decoder_for_SubmissionControls: $.ASN1Decoder<SubmissionControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionControls */

/* START_OF_SYMBOL_DEFINITION _decode_SubmissionControls */
/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControls} The decoded data structure.
 */
export function _decode_SubmissionControls(el: _Element) {
    if (!_cached_decoder_for_SubmissionControls) {
        _cached_decoder_for_SubmissionControls = _decode_Controls;
    }
    return _cached_decoder_for_SubmissionControls(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubmissionControls */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionControls */
let _cached_encoder_for_SubmissionControls: $.ASN1Encoder<SubmissionControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionControls */

/* START_OF_SYMBOL_DEFINITION _encode_SubmissionControls */
/**
 * @summary Encodes a(n) SubmissionControls into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControls, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionControls(
    value: SubmissionControls,
    elGetter: $.ASN1Encoder<SubmissionControls>
) {
    if (!_cached_encoder_for_SubmissionControls) {
        _cached_encoder_for_SubmissionControls = _encode_Controls;
    }
    return _cached_encoder_for_SubmissionControls(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubmissionControls */

/* eslint-enable */
