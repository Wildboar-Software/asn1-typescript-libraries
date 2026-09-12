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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { StartCount, _decode_StartCount, _encode_StartCount } from "../ISO-9506-MMS-1/StartCount.ta.mjs";
// export { StartCount, _decode_StartCount, _encode_StartCount } from "../ISO-9506-MMS-1/StartCount.ta.mjs";


/**
 * @summary AlterProgramInvocationAttributes_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlterProgramInvocationAttributes-Request ::= SEQUENCE {
 *    programInvocation          [0] IMPLICIT Identifier,
 *    startCount                 [1] StartCount DEFAULT cycleCount: 1 }
 * ```
 * 
 * @class
 */
export
class AlterProgramInvocationAttributes_Request {
    constructor (
        /**
         * @summary `programInvocation`.
         * @public
         * @readonly
         */
        readonly programInvocation: Identifier,
        /**
         * @summary `startCount`.
         * @public
         * @readonly
         */
        readonly startCount: OPTIONAL<StartCount>
    ) {}

    /**
     * @summary Restructures an object into a AlterProgramInvocationAttributes_Request
     * @description
     * 
     * This takes an `object` and converts it to a `AlterProgramInvocationAttributes_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlterProgramInvocationAttributes_Request`.
     * @returns {AlterProgramInvocationAttributes_Request}
     */
    public static _from_object (_o: { [_K in keyof (AlterProgramInvocationAttributes_Request)]: (AlterProgramInvocationAttributes_Request)[_K] }): AlterProgramInvocationAttributes_Request {
        return new AlterProgramInvocationAttributes_Request(_o.programInvocation, _o.startCount);
    }

    /**
     * @summary Getter that returns the default value for `startCount`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_startCount () { return { cycleCount: 1 }; }
}

/**
 * @summary The Leading Root Component Types of AlterProgramInvocationAttributes_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlterProgramInvocationAttributes_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("startCount", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AlterProgramInvocationAttributes_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlterProgramInvocationAttributes_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlterProgramInvocationAttributes_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlterProgramInvocationAttributes_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlterProgramInvocationAttributes_Request: $.ASN1Decoder<AlterProgramInvocationAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlterProgramInvocationAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlterProgramInvocationAttributes_Request (el: _Element): AlterProgramInvocationAttributes_Request {
    if (!_cached_decoder_for_AlterProgramInvocationAttributes_Request) { _cached_decoder_for_AlterProgramInvocationAttributes_Request = function (el: _Element): AlterProgramInvocationAttributes_Request {
    let programInvocation!: Identifier;
    let startCount: OPTIONAL<StartCount> = AlterProgramInvocationAttributes_Request._default_value_for_startCount;
    const callbacks: $.DecodingMap = {
        "programInvocation": (_el: _Element): void => { programInvocation = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "startCount": (_el: _Element): void => { startCount = $._decode_explicit<StartCount>(() => _decode_StartCount)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlterProgramInvocationAttributes_Request,
        _extension_additions_list_spec_for_AlterProgramInvocationAttributes_Request,
        _root_component_type_list_2_spec_for_AlterProgramInvocationAttributes_Request,
        undefined,
    );
    return new AlterProgramInvocationAttributes_Request(
        programInvocation,
        startCount
    );
}; }
    return _cached_decoder_for_AlterProgramInvocationAttributes_Request(el);
}

let _cached_encoder_for_AlterProgramInvocationAttributes_Request: $.ASN1Encoder<AlterProgramInvocationAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) AlterProgramInvocationAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlterProgramInvocationAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_AlterProgramInvocationAttributes_Request (value: AlterProgramInvocationAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlterProgramInvocationAttributes_Request) { _cached_encoder_for_AlterProgramInvocationAttributes_Request = function (value: AlterProgramInvocationAttributes_Request, elGetter: $.ASN1Encoder<AlterProgramInvocationAttributes_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocation, $.BER),
            /* IF_DEFAULT */ (value.startCount === undefined || $.deepEq(value.startCount, AlterProgramInvocationAttributes_Request._default_value_for_startCount) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_StartCount, $.BER)(value.startCount, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlterProgramInvocationAttributes_Request(value, elGetter);
}


/* eslint-enable */
