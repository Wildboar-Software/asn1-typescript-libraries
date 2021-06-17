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
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta';
export {
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta';

/* START_OF_SYMBOL_DEFINITION AssignNetworkCTPOnLogicalLinkEndResult */
/**
 * @summary AssignNetworkCTPOnLogicalLinkEndResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignNetworkCTPOnLogicalLinkEndResult  ::=  CTPList
 * ```
 */
export type AssignNetworkCTPOnLogicalLinkEndResult = CTPList; // DefinedType
/* END_OF_SYMBOL_DEFINITION AssignNetworkCTPOnLogicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult */
let _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult: $.ASN1Decoder<AssignNetworkCTPOnLogicalLinkEndResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _decode_AssignNetworkCTPOnLogicalLinkEndResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AssignNetworkCTPOnLogicalLinkEndResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignNetworkCTPOnLogicalLinkEndResult} The decoded data structure.
 */
export function _decode_AssignNetworkCTPOnLogicalLinkEndResult(el: _Element) {
    if (!_cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult) {
        _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult = _decode_CTPList;
    }
    return _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssignNetworkCTPOnLogicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult */
let _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _encode_AssignNetworkCTPOnLogicalLinkEndResult */
/**
 * @summary Encodes a(n) AssignNetworkCTPOnLogicalLinkEndResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignNetworkCTPOnLogicalLinkEndResult, encoded as an ASN.1 Element.
 */
export function _encode_AssignNetworkCTPOnLogicalLinkEndResult(
    value: AssignNetworkCTPOnLogicalLinkEndResult,
    elGetter: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndResult>
) {
    if (!_cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult) {
        _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult = _encode_CTPList;
    }
    return _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AssignNetworkCTPOnLogicalLinkEndResult */

/* eslint-enable */
