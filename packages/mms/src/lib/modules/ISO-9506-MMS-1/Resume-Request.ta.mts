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
import { Resume_Request_executionArgument, _decode_Resume_Request_executionArgument, _encode_Resume_Request_executionArgument } from "../ISO-9506-MMS-1/Resume-Request-executionArgument.ta.mjs";
// export { Resume_Request_executionArgument, _decode_Resume_Request_executionArgument, _encode_Resume_Request_executionArgument } from "../ISO-9506-MMS-1/Resume-Request-executionArgument.ta.mjs";


/**
 * @summary Resume_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Resume-Request ::= SEQUENCE {
 *    programInvocationName      [0] IMPLICIT Identifier,
 *    executionArgument          CHOICE {
 *        simpleString               [1] IMPLICIT MMSString,
 *        encodedString              EXTERNAL,
 *        enmbeddedString            EMBEDDED PDV  } OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class Resume_Request {
    constructor (
        /**
         * @summary `programInvocationName`.
         * @public
         * @readonly
         */
        readonly programInvocationName: Identifier,
        /**
         * @summary `executionArgument`.
         * @public
         * @readonly
         */
        readonly executionArgument: OPTIONAL<Resume_Request_executionArgument>
    ) {}

    /**
     * @summary Restructures an object into a Resume_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Resume_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Resume_Request`.
     * @returns {Resume_Request}
     */
    public static _from_object (_o: { [_K in keyof (Resume_Request)]: (Resume_Request)[_K] }): Resume_Request {
        return new Resume_Request(_o.programInvocationName, _o.executionArgument);
    }


}

/**
 * @summary The Leading Root Component Types of Resume_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Resume_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("executionArgument", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.universal, 8), $.hasTag(_TagClass.universal, 11)))
];

/**
 * @summary The Trailing Root Component Types of Resume_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Resume_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Resume_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Resume_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Resume_Request: $.ASN1Decoder<Resume_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Resume_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Resume_Request (el: _Element): Resume_Request {
    if (!_cached_decoder_for_Resume_Request) { _cached_decoder_for_Resume_Request = function (el: _Element): Resume_Request {
    let programInvocationName!: Identifier;
    let executionArgument: OPTIONAL<Resume_Request_executionArgument>;
    const callbacks: $.DecodingMap = {
        "programInvocationName": (_el: _Element): void => { programInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "executionArgument": (_el: _Element): void => { executionArgument = _decode_Resume_Request_executionArgument(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Resume_Request,
        _extension_additions_list_spec_for_Resume_Request,
        _root_component_type_list_2_spec_for_Resume_Request,
        undefined,
    );
    return new Resume_Request(
        programInvocationName,
        executionArgument
    );
}; }
    return _cached_decoder_for_Resume_Request(el);
}

let _cached_encoder_for_Resume_Request: $.ASN1Encoder<Resume_Request> | null = null;

/**
 * @summary Encodes a(n) Resume_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Resume_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Resume_Request (value: Resume_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Resume_Request) { _cached_encoder_for_Resume_Request = function (value: Resume_Request, elGetter: $.ASN1Encoder<Resume_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocationName, $.BER),
            /* IF_ABSENT  */ ((value.executionArgument === undefined) ? undefined : _encode_Resume_Request_executionArgument(value.executionArgument, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Resume_Request(value, elGetter);
}


/* eslint-enable */
