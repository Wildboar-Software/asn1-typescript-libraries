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
import { Ext_ForwardingInfoFor_CSE, _decode_Ext_ForwardingInfoFor_CSE, _encode_Ext_ForwardingInfoFor_CSE } from "../MAP-MS-DataTypes/Ext-ForwardingInfoFor-CSE.ta.mjs";
import { Ext_CallBarringInfoFor_CSE, _decode_Ext_CallBarringInfoFor_CSE, _encode_Ext_CallBarringInfoFor_CSE } from "../MAP-MS-DataTypes/Ext-CallBarringInfoFor-CSE.ta.mjs";


/**
 * @summary Ext_SS_InfoFor_CSE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SS-InfoFor-CSE  ::=  CHOICE {
 *     forwardingInfoFor-CSE    [0] Ext-ForwardingInfoFor-CSE,
 *     callBarringInfoFor-CSE    [1] Ext-CallBarringInfoFor-CSE
 *     }
 * ```
 */
export
type Ext_SS_InfoFor_CSE =
    { forwardingInfoFor_CSE: Ext_ForwardingInfoFor_CSE } /* CHOICE_ALT_ROOT */
    | { callBarringInfoFor_CSE: Ext_CallBarringInfoFor_CSE } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Ext_SS_InfoFor_CSE: $.ASN1Decoder<Ext_SS_InfoFor_CSE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SS_InfoFor_CSE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_SS_InfoFor_CSE (el: _Element): Ext_SS_InfoFor_CSE {
    if (!_cached_decoder_for_Ext_SS_InfoFor_CSE) { _cached_decoder_for_Ext_SS_InfoFor_CSE = $._decode_inextensible_choice<Ext_SS_InfoFor_CSE>({
    "CONTEXT 0": [ "forwardingInfoFor_CSE", $._decode_implicit<Ext_ForwardingInfoFor_CSE>(() => _decode_Ext_ForwardingInfoFor_CSE) ],
    "CONTEXT 1": [ "callBarringInfoFor_CSE", $._decode_implicit<Ext_CallBarringInfoFor_CSE>(() => _decode_Ext_CallBarringInfoFor_CSE) ]
}); }
    return _cached_decoder_for_Ext_SS_InfoFor_CSE(el);
}

let _cached_encoder_for_Ext_SS_InfoFor_CSE: $.ASN1Encoder<Ext_SS_InfoFor_CSE> | null = null;

/**
 * @summary Encodes a(n) Ext_SS_InfoFor_CSE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SS_InfoFor_CSE, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_SS_InfoFor_CSE (value: Ext_SS_InfoFor_CSE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_SS_InfoFor_CSE) { _cached_encoder_for_Ext_SS_InfoFor_CSE = $._encode_choice<Ext_SS_InfoFor_CSE>({
    "forwardingInfoFor_CSE": $._encode_implicit(_TagClass.context, 0, () => _encode_Ext_ForwardingInfoFor_CSE, $.BER),
    "callBarringInfoFor_CSE": $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_CallBarringInfoFor_CSE, $.BER),
}, $.BER); }
    return _cached_encoder_for_Ext_SS_InfoFor_CSE(value, elGetter);
}


/* eslint-enable */
