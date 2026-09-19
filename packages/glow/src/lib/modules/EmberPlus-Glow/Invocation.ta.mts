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
 * @summary Invocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Invocation ::= [APPLICATION 22] IMPLICIT
 *         SEQUENCE {
 *             invocationId    [0] Integer32       OPTIONAL,
 *             arguments       [1] Tuple           OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class Invocation {
    constructor (
        /**
         * @summary `invocationId`.
         * @public
         * @readonly
         */
        readonly invocationId: OPTIONAL<Integer32>,
        /**
         * @summary `arguments`.
         * @public
         * @readonly
         */
        readonly arguments: OPTIONAL<Tuple>
    ) {}

    /**
     * @summary Restructures an object into a Invocation
     * @description
     * 
     * This takes an `object` and converts it to a `Invocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Invocation`.
     * @returns {Invocation}
     */
    public static _from_object (_o: { [_K in keyof (Invocation)]: (Invocation)[_K] }): Invocation {
        return new Invocation(_o.invocationId, _o.arguments);
    }


}

/**
 * @summary The Leading Root Component Types of Invocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Invocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invocationId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("arguments", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Invocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Invocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Invocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Invocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Invocation: $.ASN1Decoder<Invocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Invocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Invocation (el: _Element): Invocation {
    if (!_cached_decoder_for_Invocation) { _cached_decoder_for_Invocation = $._decode_implicit<Invocation>(() => function (el: _Element): Invocation {
    let invocationId: OPTIONAL<Integer32>;
    let arguments: OPTIONAL<Tuple>;
    const callbacks: $.DecodingMap = {
        "invocationId": (_el: _Element): void => { invocationId = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "arguments": (_el: _Element): void => { arguments = $._decode_explicit<Tuple>(() => _decode_Tuple)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Invocation,
        _extension_additions_list_spec_for_Invocation,
        _root_component_type_list_2_spec_for_Invocation,
        undefined,
    );
    return new Invocation(
        invocationId,
        arguments
    );
}); }
    return _cached_decoder_for_Invocation(el);
}

let _cached_encoder_for_Invocation: $.ASN1Encoder<Invocation> | null = null;

/**
 * @summary Encodes a(n) Invocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invocation, encoded as an ASN.1 Element.
 */
export
function _encode_Invocation (value: Invocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Invocation) { _cached_encoder_for_Invocation = $._encode_implicit(_TagClass.application, 22, () => function (value: Invocation, elGetter: $.ASN1Encoder<Invocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.invocationId === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.invocationId, $.BER)),
            /* IF_ABSENT  */ ((value.arguments === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Tuple, $.BER)(value.arguments, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Invocation(value, elGetter);
}


/* eslint-enable */
