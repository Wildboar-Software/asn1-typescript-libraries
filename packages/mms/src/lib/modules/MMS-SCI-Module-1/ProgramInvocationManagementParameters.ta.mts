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
 * @summary ProgramInvocationManagementParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgramInvocationManagementParameters ::= SEQUENCE {
 *    executionArgMaxSize           [0] IMPLICIT INTEGER,
 *    executionArgParseRules        [1] MMSString,
 *    executionArgSyntaxes          [2] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER,
 *    programLoction                [3] MMSString,
 *        -- syntax of the program Location notation
 *    stepMode                      [4] IMPLICIT BOOLEAN
 *        -- if true, step Mode is supported
 * }
 * ```
 * 
 * @class
 */
export
class ProgramInvocationManagementParameters {
    constructor (
        /**
         * @summary `executionArgMaxSize`.
         * @public
         * @readonly
         */
        readonly executionArgMaxSize: INTEGER,
        /**
         * @summary `executionArgParseRules`.
         * @public
         * @readonly
         */
        readonly executionArgParseRules: MMSString,
        /**
         * @summary `executionArgSyntaxes`.
         * @public
         * @readonly
         */
        readonly executionArgSyntaxes: OBJECT_IDENTIFIER[],
        /**
         * @summary `programLoction`.
         * @public
         * @readonly
         */
        readonly programLoction: MMSString,
        /**
         * @summary `stepMode`.
         * @public
         * @readonly
         */
        readonly stepMode: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ProgramInvocationManagementParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ProgramInvocationManagementParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProgramInvocationManagementParameters`.
     * @returns {ProgramInvocationManagementParameters}
     */
    public static _from_object (_o: { [_K in keyof (ProgramInvocationManagementParameters)]: (ProgramInvocationManagementParameters)[_K] }): ProgramInvocationManagementParameters {
        return new ProgramInvocationManagementParameters(_o.executionArgMaxSize, _o.executionArgParseRules, _o.executionArgSyntaxes, _o.programLoction, _o.stepMode);
    }


}

/**
 * @summary The Leading Root Component Types of ProgramInvocationManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProgramInvocationManagementParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("executionArgMaxSize", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("executionArgParseRules", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("executionArgSyntaxes", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("programLoction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("stepMode", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ProgramInvocationManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProgramInvocationManagementParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProgramInvocationManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProgramInvocationManagementParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProgramInvocationManagementParameters: $.ASN1Decoder<ProgramInvocationManagementParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProgramInvocationManagementParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProgramInvocationManagementParameters (el: _Element): ProgramInvocationManagementParameters {
    if (!_cached_decoder_for_ProgramInvocationManagementParameters) { _cached_decoder_for_ProgramInvocationManagementParameters = function (el: _Element): ProgramInvocationManagementParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("ProgramInvocationManagementParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "executionArgMaxSize";
    sequence[1].name = "executionArgParseRules";
    sequence[2].name = "executionArgSyntaxes";
    sequence[3].name = "programLoction";
    sequence[4].name = "stepMode";
    let executionArgMaxSize!: INTEGER;
    let executionArgParseRules!: MMSString;
    let executionArgSyntaxes!: OBJECT_IDENTIFIER[];
    let programLoction!: MMSString;
    let stepMode!: BOOLEAN;
    executionArgMaxSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    executionArgParseRules = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[1]);
    executionArgSyntaxes = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(sequence[2]);
    programLoction = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[3]);
    stepMode = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[4]);
    return new ProgramInvocationManagementParameters(
        executionArgMaxSize,
        executionArgParseRules,
        executionArgSyntaxes,
        programLoction,
        stepMode,

    );
}; }
    return _cached_decoder_for_ProgramInvocationManagementParameters(el);
}

let _cached_encoder_for_ProgramInvocationManagementParameters: $.ASN1Encoder<ProgramInvocationManagementParameters> | null = null;

/**
 * @summary Encodes a(n) ProgramInvocationManagementParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProgramInvocationManagementParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ProgramInvocationManagementParameters (value: ProgramInvocationManagementParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProgramInvocationManagementParameters) { _cached_encoder_for_ProgramInvocationManagementParameters = function (value: ProgramInvocationManagementParameters, elGetter: $.ASN1Encoder<ProgramInvocationManagementParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.executionArgMaxSize, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MMSString, $.BER)(value.executionArgParseRules, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.executionArgSyntaxes, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_MMSString, $.BER)(value.programLoction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.stepMode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProgramInvocationManagementParameters(value, elGetter);
}


/* eslint-enable */
