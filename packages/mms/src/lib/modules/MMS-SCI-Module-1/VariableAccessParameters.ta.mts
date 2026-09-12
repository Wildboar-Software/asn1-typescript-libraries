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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary VariableAccessParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariableAccessParameters ::= SEQUENCE {
 *    uninterruptibleAccess      [0] MMSString,
 *         -- conditions under which it is guaranteed
 *    singleMode                 [1] IMPLICIT BOOLEAN,
 *    unnamedMode                [2] IMPLICIT BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class VariableAccessParameters {
    constructor (
        /**
         * @summary `uninterruptibleAccess`.
         * @public
         * @readonly
         */
        readonly uninterruptibleAccess: MMSString,
        /**
         * @summary `singleMode`.
         * @public
         * @readonly
         */
        readonly singleMode: BOOLEAN,
        /**
         * @summary `unnamedMode`.
         * @public
         * @readonly
         */
        readonly unnamedMode: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a VariableAccessParameters
     * @description
     * 
     * This takes an `object` and converts it to a `VariableAccessParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VariableAccessParameters`.
     * @returns {VariableAccessParameters}
     */
    public static _from_object (_o: { [_K in keyof (VariableAccessParameters)]: (VariableAccessParameters)[_K] }): VariableAccessParameters {
        return new VariableAccessParameters(_o.uninterruptibleAccess, _o.singleMode, _o.unnamedMode);
    }


}

/**
 * @summary The Leading Root Component Types of VariableAccessParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VariableAccessParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("uninterruptibleAccess", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("singleMode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unnamedMode", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of VariableAccessParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VariableAccessParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VariableAccessParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VariableAccessParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VariableAccessParameters: $.ASN1Decoder<VariableAccessParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariableAccessParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariableAccessParameters (el: _Element): VariableAccessParameters {
    if (!_cached_decoder_for_VariableAccessParameters) { _cached_decoder_for_VariableAccessParameters = function (el: _Element): VariableAccessParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("VariableAccessParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "uninterruptibleAccess";
    sequence[1].name = "singleMode";
    sequence[2].name = "unnamedMode";
    let uninterruptibleAccess!: MMSString;
    let singleMode!: BOOLEAN;
    let unnamedMode!: BOOLEAN;
    uninterruptibleAccess = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[0]);
    singleMode = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    unnamedMode = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    return new VariableAccessParameters(
        uninterruptibleAccess,
        singleMode,
        unnamedMode,

    );
}; }
    return _cached_decoder_for_VariableAccessParameters(el);
}

let _cached_encoder_for_VariableAccessParameters: $.ASN1Encoder<VariableAccessParameters> | null = null;

/**
 * @summary Encodes a(n) VariableAccessParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariableAccessParameters, encoded as an ASN.1 Element.
 */
export
function _encode_VariableAccessParameters (value: VariableAccessParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariableAccessParameters) { _cached_encoder_for_VariableAccessParameters = function (value: VariableAccessParameters, elGetter: $.ASN1Encoder<VariableAccessParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSString, $.BER)(value.uninterruptibleAccess, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.singleMode, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.unnamedMode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VariableAccessParameters(value, elGetter);
}


/* eslint-enable */
