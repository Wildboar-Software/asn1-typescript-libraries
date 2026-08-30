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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";


/**
 * @summary SM_RP_DA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-RP-DA  ::=  CHOICE {
 *     imsi    [0] IMSI,
 *     lmsi    [1] LMSI,
 *     serviceCentreAddressDA    [4] AddressString,
 *     noSM-RP-DA    [5] NULL}
 * ```
 */
export
type SM_RP_DA =
    { imsi: IMSI } /* CHOICE_ALT_ROOT */
    | { lmsi: LMSI } /* CHOICE_ALT_ROOT */
    | { serviceCentreAddressDA: AddressString } /* CHOICE_ALT_ROOT */
    | { noSM_RP_DA: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SM_RP_DA: $.ASN1Decoder<SM_RP_DA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_RP_DA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_RP_DA (el: _Element): SM_RP_DA {
    if (!_cached_decoder_for_SM_RP_DA) { _cached_decoder_for_SM_RP_DA = $._decode_inextensible_choice<SM_RP_DA>({
    "CONTEXT 0": [ "imsi", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 1": [ "lmsi", $._decode_implicit<LMSI>(() => _decode_LMSI) ],
    "CONTEXT 4": [ "serviceCentreAddressDA", $._decode_implicit<AddressString>(() => _decode_AddressString) ],
    "CONTEXT 5": [ "noSM_RP_DA", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_SM_RP_DA(el);
}

let _cached_encoder_for_SM_RP_DA: $.ASN1Encoder<SM_RP_DA> | null = null;

/**
 * @summary Encodes a(n) SM_RP_DA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_RP_DA, encoded as an ASN.1 Element.
 */
export
function _encode_SM_RP_DA (value: SM_RP_DA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_RP_DA) { _cached_encoder_for_SM_RP_DA = $._encode_choice<SM_RP_DA>({
    "imsi": $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER),
    "lmsi": $._encode_implicit(_TagClass.context, 1, () => _encode_LMSI, $.BER),
    "serviceCentreAddressDA": $._encode_implicit(_TagClass.context, 4, () => _encode_AddressString, $.BER),
    "noSM_RP_DA": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_SM_RP_DA(value, elGetter);
}


/* eslint-enable */
