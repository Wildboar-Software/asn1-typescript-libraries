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
    FunctionalUnits,
    FunctionalUnits_multipleObjectSelection /* IMPORTED_LONG_NAMED_BIT */,
    multipleObjectSelection /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_filter /* IMPORTED_LONG_NAMED_BIT */,
    filter /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_multipleReply /* IMPORTED_LONG_NAMED_BIT */,
    multipleReply /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_extendedService /* IMPORTED_LONG_NAMED_BIT */,
    extendedService /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_cancelGet /* IMPORTED_LONG_NAMED_BIT */,
    cancelGet /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_FunctionalUnits,
    _encode_FunctionalUnits,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/FunctionalUnits.ta.js';
export {
    FunctionalUnits,
    FunctionalUnits_multipleObjectSelection /* IMPORTED_LONG_NAMED_BIT */,
    multipleObjectSelection /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_filter /* IMPORTED_LONG_NAMED_BIT */,
    filter /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_multipleReply /* IMPORTED_LONG_NAMED_BIT */,
    multipleReply /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_extendedService /* IMPORTED_LONG_NAMED_BIT */,
    extendedService /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_cancelGet /* IMPORTED_LONG_NAMED_BIT */,
    cancelGet /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_FunctionalUnits,
    _encode_FunctionalUnits,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/FunctionalUnits.ta.js';

/* START_OF_SYMBOL_DEFINITION CmiseFunctionalUnitsSelected */
/**
 * @summary CmiseFunctionalUnitsSelected
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmiseFunctionalUnitsSelected  ::=  FunctionalUnits
 * ```
 */
export type CmiseFunctionalUnitsSelected = FunctionalUnits; // DefinedType
/* END_OF_SYMBOL_DEFINITION CmiseFunctionalUnitsSelected */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CmiseFunctionalUnitsSelected */
let _cached_decoder_for_CmiseFunctionalUnitsSelected: $.ASN1Decoder<CmiseFunctionalUnitsSelected> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CmiseFunctionalUnitsSelected */

/* START_OF_SYMBOL_DEFINITION _decode_CmiseFunctionalUnitsSelected */
/**
 * @summary Decodes an ASN.1 element into a(n) CmiseFunctionalUnitsSelected
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmiseFunctionalUnitsSelected} The decoded data structure.
 */
export function _decode_CmiseFunctionalUnitsSelected(el: _Element) {
    if (!_cached_decoder_for_CmiseFunctionalUnitsSelected) {
        _cached_decoder_for_CmiseFunctionalUnitsSelected = _decode_FunctionalUnits;
    }
    return _cached_decoder_for_CmiseFunctionalUnitsSelected(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CmiseFunctionalUnitsSelected */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CmiseFunctionalUnitsSelected */
let _cached_encoder_for_CmiseFunctionalUnitsSelected: $.ASN1Encoder<CmiseFunctionalUnitsSelected> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CmiseFunctionalUnitsSelected */

/* START_OF_SYMBOL_DEFINITION _encode_CmiseFunctionalUnitsSelected */
/**
 * @summary Encodes a(n) CmiseFunctionalUnitsSelected into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmiseFunctionalUnitsSelected, encoded as an ASN.1 Element.
 */
export function _encode_CmiseFunctionalUnitsSelected(
    value: CmiseFunctionalUnitsSelected,
    elGetter: $.ASN1Encoder<CmiseFunctionalUnitsSelected>
) {
    if (!_cached_encoder_for_CmiseFunctionalUnitsSelected) {
        _cached_encoder_for_CmiseFunctionalUnitsSelected = _encode_FunctionalUnits;
    }
    return _cached_encoder_for_CmiseFunctionalUnitsSelected(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CmiseFunctionalUnitsSelected */

/* eslint-enable */
