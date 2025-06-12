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
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta.js';
export {
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta.js';

/* START_OF_SYMBOL_DEFINITION DeassignNetworkCTPFromLogicalLinkEndInformation */
/**
 * @summary DeassignNetworkCTPFromLogicalLinkEndInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeassignNetworkCTPFromLogicalLinkEndInformation  ::=  CTPList
 * ```
 */
export type DeassignNetworkCTPFromLogicalLinkEndInformation = CTPList; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeassignNetworkCTPFromLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation */
let _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation: $.ASN1Decoder<DeassignNetworkCTPFromLogicalLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _decode_DeassignNetworkCTPFromLogicalLinkEndInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) DeassignNetworkCTPFromLogicalLinkEndInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeassignNetworkCTPFromLogicalLinkEndInformation} The decoded data structure.
 */
export function _decode_DeassignNetworkCTPFromLogicalLinkEndInformation(
    el: _Element
) {
    if (!_cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation) {
        _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation = _decode_CTPList;
    }
    return _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_DeassignNetworkCTPFromLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation */
let _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation: $.ASN1Encoder<DeassignNetworkCTPFromLogicalLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _encode_DeassignNetworkCTPFromLogicalLinkEndInformation */
/**
 * @summary Encodes a(n) DeassignNetworkCTPFromLogicalLinkEndInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeassignNetworkCTPFromLogicalLinkEndInformation, encoded as an ASN.1 Element.
 */
export function _encode_DeassignNetworkCTPFromLogicalLinkEndInformation(
    value: DeassignNetworkCTPFromLogicalLinkEndInformation,
    elGetter: $.ASN1Encoder<DeassignNetworkCTPFromLogicalLinkEndInformation>
) {
    if (!_cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation) {
        _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation = _encode_CTPList;
    }
    return _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DeassignNetworkCTPFromLogicalLinkEndInformation */

/* eslint-enable */
