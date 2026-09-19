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
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
import { Tuple, _decode_Tuple, _encode_Tuple } from "../EmberPlus-Glow/Tuple.ta.mjs";
// export { Tuple, _decode_Tuple, _encode_Tuple } from "../EmberPlus-Glow/Tuple.ta.mjs";


/**
 * @summary InvocationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvocationResult ::= [APPLICATION 23] IMPLICIT
 *         SEQUENCE {
 *             invocationId    [0] Integer32,
 *             success         [1] BOOLEAN         OPTIONAL,           
 *             result          [2] Tuple           OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class InvocationResult {
    constructor (
        /**
         * @summary `invocationId`.
         * @public
         * @readonly
         */
        readonly invocationId: Integer32,
        /**
         * @summary `success`.
         * @public
         * @readonly
         */
        readonly success: OPTIONAL<BOOLEAN>,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: OPTIONAL<Tuple>
    ) {}

    /**
     * @summary Restructures an object into a InvocationResult
     * @description
     * 
     * This takes an `object` and converts it to a `InvocationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InvocationResult`.
     * @returns {InvocationResult}
     */
    public static _from_object (_o: { [_K in keyof (InvocationResult)]: (InvocationResult)[_K] }): InvocationResult {
        return new InvocationResult(_o.invocationId, _o.success, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of InvocationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InvocationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("invocationId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("success", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("result", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InvocationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InvocationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InvocationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InvocationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InvocationResult: $.ASN1Decoder<InvocationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvocationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvocationResult (el: _Element): InvocationResult {
    if (!_cached_decoder_for_InvocationResult) { _cached_decoder_for_InvocationResult = $._decode_implicit<InvocationResult>(() => function (el: _Element): InvocationResult {
    let invocationId!: Integer32;
    let success: OPTIONAL<BOOLEAN>;
    let result: OPTIONAL<Tuple>;
    const callbacks: $.DecodingMap = {
        "invocationId": (_el: _Element): void => { invocationId = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "success": (_el: _Element): void => { success = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "result": (_el: _Element): void => { result = $._decode_explicit<Tuple>(() => _decode_Tuple)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InvocationResult,
        _extension_additions_list_spec_for_InvocationResult,
        _root_component_type_list_2_spec_for_InvocationResult,
        undefined,
    );
    return new InvocationResult(
        invocationId,
        success,
        result
    );
}); }
    return _cached_decoder_for_InvocationResult(el);
}

let _cached_encoder_for_InvocationResult: $.ASN1Encoder<InvocationResult> | null = null;

/**
 * @summary Encodes a(n) InvocationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvocationResult, encoded as an ASN.1 Element.
 */
export
function _encode_InvocationResult (value: InvocationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvocationResult) { _cached_encoder_for_InvocationResult = $._encode_implicit(_TagClass.application, 23, () => function (value: InvocationResult, elGetter: $.ASN1Encoder<InvocationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.invocationId, $.BER),
            /* IF_ABSENT  */ ((value.success === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.success, $.BER)),
            /* IF_ABSENT  */ ((value.result === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Tuple, $.BER)(value.result, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_InvocationResult(value, elGetter);
}


/* eslint-enable */
