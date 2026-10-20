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
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary ScfTaskRefusedParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfTaskRefusedParameter  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {reason
 *                  ENUMERATED {generic(0), unobtainable(1), congestion(2)
 *                                                           -- other values FFS
 *                                                           },
 *                securityParameters  [1]  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export
type ScfTaskRefusedParameter = OPTIONALLY_PROTECTED<{ // FIXME: reason: EnumeratedType; securityParameters: SecurityParameters }>; // DefinedType

let _cached_decoder_for_ScfTaskRefusedParameter: $.ASN1Decoder<ScfTaskRefusedParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScfTaskRefusedParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScfTaskRefusedParameter (el: _Element): ScfTaskRefusedParameter {
    if (!_cached_decoder_for_ScfTaskRefusedParameter) { _cached_decoder_for_ScfTaskRefusedParameter = _get_decoder_for_OPTIONALLY_PROTECTED<{ // FIXME: reason: EnumeratedType; securityParameters: SecurityParameters }>(function (el: _Element): OPTIONALLY_PROTECTED {
    let reason!: /* FIXME: reason COULD_NOT_COMPILE_TYPE */;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "reason": (_el: _Element): void => { reason = $._decodeEnumerated(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED(
        reason,
        securityParameters
    );
}); }
    return _cached_decoder_for_ScfTaskRefusedParameter(el);
}

let _cached_encoder_for_ScfTaskRefusedParameter: $.ASN1Encoder<ScfTaskRefusedParameter> | null = null;

/**
 * @summary Encodes a(n) ScfTaskRefusedParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScfTaskRefusedParameter, encoded as an ASN.1 Element.
 */
export
function _encode_ScfTaskRefusedParameter (value: ScfTaskRefusedParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScfTaskRefusedParameter) { _cached_encoder_for_ScfTaskRefusedParameter = _get_encoder_for_OPTIONALLY_PROTECTED<{ // FIXME: reason: EnumeratedType; securityParameters: SecurityParameters }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeEnumerated(value.reason, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_ScfTaskRefusedParameter(value, elGetter);
}


/* eslint-enable */
