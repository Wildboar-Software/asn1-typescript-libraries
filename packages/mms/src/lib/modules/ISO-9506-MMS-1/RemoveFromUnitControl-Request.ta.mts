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


/**
 * @summary RemoveFromUnitControl_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoveFromUnitControl-Request ::= SEQUENCE {
 *    unitControl            [0] IMPLICIT Identifier, -- Unit Control Name
 *    domains                [1] IMPLICIT SEQUENCE OF Identifier,
 *    programInvocations     [2] IMPLICIT SEQUENCE OF Identifier }
 * ```
 * 
 * @class
 */
export
class RemoveFromUnitControl_Request {
    constructor (
        /**
         * @summary `unitControl`.
         * @public
         * @readonly
         */
        readonly unitControl: Identifier,
        /**
         * @summary `domains`.
         * @public
         * @readonly
         */
        readonly domains: Identifier[],
        /**
         * @summary `programInvocations`.
         * @public
         * @readonly
         */
        readonly programInvocations: Identifier[]
    ) {}

    /**
     * @summary Restructures an object into a RemoveFromUnitControl_Request
     * @description
     * 
     * This takes an `object` and converts it to a `RemoveFromUnitControl_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveFromUnitControl_Request`.
     * @returns {RemoveFromUnitControl_Request}
     */
    public static _from_object (_o: { [_K in keyof (RemoveFromUnitControl_Request)]: (RemoveFromUnitControl_Request)[_K] }): RemoveFromUnitControl_Request {
        return new RemoveFromUnitControl_Request(_o.unitControl, _o.domains, _o.programInvocations);
    }


}

/**
 * @summary The Leading Root Component Types of RemoveFromUnitControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoveFromUnitControl_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("unitControl", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("domains", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("programInvocations", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RemoveFromUnitControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoveFromUnitControl_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoveFromUnitControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoveFromUnitControl_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoveFromUnitControl_Request: $.ASN1Decoder<RemoveFromUnitControl_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoveFromUnitControl_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoveFromUnitControl_Request (el: _Element): RemoveFromUnitControl_Request {
    if (!_cached_decoder_for_RemoveFromUnitControl_Request) { _cached_decoder_for_RemoveFromUnitControl_Request = function (el: _Element): RemoveFromUnitControl_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RemoveFromUnitControl-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "unitControl";
    sequence[1].name = "domains";
    sequence[2].name = "programInvocations";
    let unitControl!: Identifier;
    let domains!: Identifier[];
    let programInvocations!: Identifier[];
    unitControl = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    domains = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(sequence[1]);
    programInvocations = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(sequence[2]);
    return new RemoveFromUnitControl_Request(
        unitControl,
        domains,
        programInvocations,

    );
}; }
    return _cached_decoder_for_RemoveFromUnitControl_Request(el);
}

let _cached_encoder_for_RemoveFromUnitControl_Request: $.ASN1Encoder<RemoveFromUnitControl_Request> | null = null;

/**
 * @summary Encodes a(n) RemoveFromUnitControl_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveFromUnitControl_Request, encoded as an ASN.1 Element.
 */
export
function _encode_RemoveFromUnitControl_Request (value: RemoveFromUnitControl_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoveFromUnitControl_Request) { _cached_encoder_for_RemoveFromUnitControl_Request = function (value: RemoveFromUnitControl_Request, elGetter: $.ASN1Encoder<RemoveFromUnitControl_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.unitControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.domains, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.programInvocations, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RemoveFromUnitControl_Request(value, elGetter);
}


/* eslint-enable */
