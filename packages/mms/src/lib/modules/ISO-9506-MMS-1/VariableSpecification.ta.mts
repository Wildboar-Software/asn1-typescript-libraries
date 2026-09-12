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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { VariableSpecification_variableDescription, _decode_VariableSpecification_variableDescription, _encode_VariableSpecification_variableDescription } from "../ISO-9506-MMS-1/VariableSpecification-variableDescription.ta.mjs";
// export { VariableSpecification_variableDescription, _decode_VariableSpecification_variableDescription, _encode_VariableSpecification_variableDescription } from "../ISO-9506-MMS-1/VariableSpecification-variableDescription.ta.mjs";
import { ScatteredAccessDescription, _decode_ScatteredAccessDescription, _encode_ScatteredAccessDescription } from "../ISO-9506-MMS-1A/ScatteredAccessDescription.ta.mjs";
// export { ScatteredAccessDescription, _decode_ScatteredAccessDescription, _encode_ScatteredAccessDescription } from "../ISO-9506-MMS-1A/ScatteredAccessDescription.ta.mjs";


/**
 * @summary VariableSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariableSpecification  ::=  CHOICE {
 *    name                   [0] ObjectName,
 *    address             [1] Address,
 *    variableDescription [2] IMPLICIT SEQUENCE {
 *        address                Address,
 *        typeSpecification      TypeSpecification
 *        },
 *    -- the following element is only present to support the services
 *    -- defined in annex E
 *    scatteredAccessDescription    [3] IMPLICIT ScatteredAccessDescription,
 * -- In ISO 9506, this alternative is used if (vsca).
 * -- However, since ScatteredAccessDescription is a SEQUENCE OF,
 * -- you get the exact same encoding if you just encode an empty SEQUENCE OF.
 * --    scatteredAccessDescription    [3] IMPLICIT NULL,
 *    invalidated                   [4] IMPLICIT NULL
 * }
 * ```
 */
export
type VariableSpecification =
    { name: ObjectName } /* CHOICE_ALT_ROOT */
    | { address: Address } /* CHOICE_ALT_ROOT */
    | { variableDescription: VariableSpecification_variableDescription } /* CHOICE_ALT_ROOT */
    | { scatteredAccessDescription: ScatteredAccessDescription } /* CHOICE_ALT_ROOT */
    | { invalidated: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VariableSpecification: $.ASN1Decoder<VariableSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariableSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariableSpecification (el: _Element): VariableSpecification {
    if (!_cached_decoder_for_VariableSpecification) { _cached_decoder_for_VariableSpecification = $._decode_inextensible_choice<VariableSpecification>({
    "CONTEXT 0": [ "name", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ],
    "CONTEXT 1": [ "address", $._decode_explicit<Address>(() => _decode_Address) ],
    "CONTEXT 2": [ "variableDescription", $._decode_implicit<VariableSpecification_variableDescription>(() => _decode_VariableSpecification_variableDescription) ],
    "CONTEXT 3": [ "scatteredAccessDescription", $._decode_implicit<ScatteredAccessDescription>(() => _decode_ScatteredAccessDescription) ],
    "CONTEXT 4": [ "invalidated", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_VariableSpecification(el);
}

let _cached_encoder_for_VariableSpecification: $.ASN1Encoder<VariableSpecification> | null = null;

/**
 * @summary Encodes a(n) VariableSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariableSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_VariableSpecification (value: VariableSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariableSpecification) { _cached_encoder_for_VariableSpecification = $._encode_choice<VariableSpecification>({
    "name": $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER),
    "address": $._encode_explicit(_TagClass.context, 1, () => _encode_Address, $.BER),
    "variableDescription": $._encode_implicit(_TagClass.context, 2, () => _encode_VariableSpecification_variableDescription, $.BER),
    "scatteredAccessDescription": $._encode_implicit(_TagClass.context, 3, () => _encode_ScatteredAccessDescription, $.BER),
    "invalidated": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_VariableSpecification(value, elGetter);
}


/* eslint-enable */
