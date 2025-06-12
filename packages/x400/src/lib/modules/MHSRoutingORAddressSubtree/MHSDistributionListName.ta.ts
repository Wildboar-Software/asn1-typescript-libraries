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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.js';
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.js';

/* START_OF_SYMBOL_DEFINITION MHSDistributionListName */
/**
 * @summary MHSDistributionListName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MHSDistributionListName  ::=  DistinguishedName
 * ```
 */
export type MHSDistributionListName = DistinguishedName; // DefinedType
/* END_OF_SYMBOL_DEFINITION MHSDistributionListName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MHSDistributionListName */
let _cached_decoder_for_MHSDistributionListName: $.ASN1Decoder<MHSDistributionListName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MHSDistributionListName */

/* START_OF_SYMBOL_DEFINITION _decode_MHSDistributionListName */
/**
 * @summary Decodes an ASN.1 element into a(n) MHSDistributionListName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MHSDistributionListName} The decoded data structure.
 */
export function _decode_MHSDistributionListName(el: _Element) {
    if (!_cached_decoder_for_MHSDistributionListName) {
        _cached_decoder_for_MHSDistributionListName = _decode_DistinguishedName;
    }
    return _cached_decoder_for_MHSDistributionListName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MHSDistributionListName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MHSDistributionListName */
let _cached_encoder_for_MHSDistributionListName: $.ASN1Encoder<MHSDistributionListName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MHSDistributionListName */

/* START_OF_SYMBOL_DEFINITION _encode_MHSDistributionListName */
/**
 * @summary Encodes a(n) MHSDistributionListName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MHSDistributionListName, encoded as an ASN.1 Element.
 */
export function _encode_MHSDistributionListName(
    value: MHSDistributionListName,
    elGetter: $.ASN1Encoder<MHSDistributionListName>
) {
    if (!_cached_encoder_for_MHSDistributionListName) {
        _cached_encoder_for_MHSDistributionListName = _encode_DistinguishedName;
    }
    return _cached_encoder_for_MHSDistributionListName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MHSDistributionListName */

/* eslint-enable */
