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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";


/**
 * @summary SM_RP_OA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-RP-OA  ::=  CHOICE {
 *     msisdn    [2] ISDN-AddressString,
 *     serviceCentreAddressOA    [4] AddressString,
 *     noSM-RP-OA    [5] NULL}
 * ```
 */
export
type SM_RP_OA =
    { msisdn: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { serviceCentreAddressOA: AddressString } /* CHOICE_ALT_ROOT */
    | { noSM_RP_OA: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SM_RP_OA: $.ASN1Decoder<SM_RP_OA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_RP_OA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_RP_OA (el: _Element): SM_RP_OA {
    if (!_cached_decoder_for_SM_RP_OA) { _cached_decoder_for_SM_RP_OA = $._decode_inextensible_choice<SM_RP_OA>({
    "CONTEXT 2": [ "msisdn", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ],
    "CONTEXT 4": [ "serviceCentreAddressOA", $._decode_implicit<AddressString>(() => _decode_AddressString) ],
    "CONTEXT 5": [ "noSM_RP_OA", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_SM_RP_OA(el);
}

let _cached_encoder_for_SM_RP_OA: $.ASN1Encoder<SM_RP_OA> | null = null;

/**
 * @summary Encodes a(n) SM_RP_OA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_RP_OA, encoded as an ASN.1 Element.
 */
export
function _encode_SM_RP_OA (value: SM_RP_OA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_RP_OA) { _cached_encoder_for_SM_RP_OA = $._encode_choice<SM_RP_OA>({
    "msisdn": $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER),
    "serviceCentreAddressOA": $._encode_implicit(_TagClass.context, 4, () => _encode_AddressString, $.BER),
    "noSM_RP_OA": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_SM_RP_OA(value, elGetter);
}


/* eslint-enable */
