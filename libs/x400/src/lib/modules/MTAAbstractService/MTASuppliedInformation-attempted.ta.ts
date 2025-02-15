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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
export {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
import {
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta';
export {
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION MTASuppliedInformation_attempted */
/**
 * @summary MTASuppliedInformation_attempted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTASuppliedInformation-attempted ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type MTASuppliedInformation_attempted =
    | { mta: MTAName } /* CHOICE_ALT_ROOT */
    | { domain: GlobalDomainIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MTASuppliedInformation_attempted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTASuppliedInformation_attempted */
let _cached_decoder_for_MTASuppliedInformation_attempted: $.ASN1Decoder<MTASuppliedInformation_attempted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTASuppliedInformation_attempted */

/* START_OF_SYMBOL_DEFINITION _decode_MTASuppliedInformation_attempted */
/**
 * @summary Decodes an ASN.1 element into a(n) MTASuppliedInformation_attempted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTASuppliedInformation_attempted} The decoded data structure.
 */
export function _decode_MTASuppliedInformation_attempted(el: _Element) {
    if (!_cached_decoder_for_MTASuppliedInformation_attempted) {
        _cached_decoder_for_MTASuppliedInformation_attempted = $._decode_inextensible_choice<MTASuppliedInformation_attempted>(
            {
                'UNIVERSAL 22': ['mta', _decode_MTAName],
                'APPLICATION 3': ['domain', _decode_GlobalDomainIdentifier],
            }
        );
    }
    return _cached_decoder_for_MTASuppliedInformation_attempted(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTASuppliedInformation_attempted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTASuppliedInformation_attempted */
let _cached_encoder_for_MTASuppliedInformation_attempted: $.ASN1Encoder<MTASuppliedInformation_attempted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTASuppliedInformation_attempted */

/* START_OF_SYMBOL_DEFINITION _encode_MTASuppliedInformation_attempted */
/**
 * @summary Encodes a(n) MTASuppliedInformation_attempted into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTASuppliedInformation_attempted, encoded as an ASN.1 Element.
 */
export function _encode_MTASuppliedInformation_attempted(
    value: MTASuppliedInformation_attempted,
    elGetter: $.ASN1Encoder<MTASuppliedInformation_attempted>
) {
    if (!_cached_encoder_for_MTASuppliedInformation_attempted) {
        _cached_encoder_for_MTASuppliedInformation_attempted = $._encode_choice<MTASuppliedInformation_attempted>(
            {
                mta: _encode_MTAName,
                domain: _encode_GlobalDomainIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTASuppliedInformation_attempted(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_MTASuppliedInformation_attempted */

/* eslint-enable */
