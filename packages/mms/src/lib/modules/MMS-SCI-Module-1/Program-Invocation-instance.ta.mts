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
import { Program_Invocation_instance_definition, _decode_Program_Invocation_instance_definition, _encode_Program_Invocation_instance_definition } from "../MMS-SCI-Module-1/Program-Invocation-instance-definition.ta.mjs";
// export { Program_Invocation_instance_definition, _decode_Program_Invocation_instance_definition, _encode_Program_Invocation_instance_definition } from "../MMS-SCI-Module-1/Program-Invocation-instance-definition.ta.mjs";


/**
 * @summary Program_Invocation_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Program-Invocation-instance ::= SEQUENCE {
 *     name                   [0] IMPLICIT Identifier,
 *     definition             CHOICE {
 *         reference           [1] IMPLICIT OBJECT IDENTIFIER,
 *         details                [2] IMPLICIT SEQUENCE {
 *             programInvocationState
 *                 [3] IMPLICIT ProgramInvocationState,
 *             domains
 *                 [4] IMPLICIT SEQUENCE OF Domain-instance,
 *             accessControl
 *                 [5] IMPLICIT SEQUENCE OF Access-Control-List-instance,
 *             reusable
 *                 [6] IMPLICIT BOOLEAN,
 *             monitor
 *                 [7] IMPLICIT BOOLEAN,
 *     -- The following three fields shall all be present if the value of
 *     -- monitor is true.
 *     -- If present, the &name field of each object instance
 *     -- shall have a value equal to the
 *     -- &name field of this instance of the PROGRAM-INVOCATION.
 *         eventCondition
 *                 [8] IMPLICIT SEQUENCE OF Event-Condition-instance OPTIONAL,
 *         eventAction
 *                 [9] IMPLICIT SEQUENCE OF Event-Action-instance OPTIONAL,
 *         eventEnrollment
 *                 [10] IMPLICIT SEQUENCE OF Event-Enrollment-instance OPTIONAL,
 *         executionArgument
 *                 [11] MMSString,
 *         ...
 *     ,      control
 *                 [12] IMPLICIT Control-State,
 *         controlling-Program-Invocation
 *                 [13] IMPLICIT Program-Invocation-instance,
 *     -- The following field shall be present
 *     -- if and only if the value of the &control field is controlling.
 *         controlled-Program-Invocations
 *                 [14] IMPLICIT SEQUENCE OF Program-Invocation-instance OPTIONAL
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Program_Invocation_instance {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: Identifier,
        /**
         * @summary `definition`.
         * @public
         * @readonly
         */
        readonly definition: Program_Invocation_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Program_Invocation_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Program_Invocation_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Program_Invocation_instance`.
     * @returns {Program_Invocation_instance}
     */
    public static _from_object (_o: { [_K in keyof (Program_Invocation_instance)]: (Program_Invocation_instance)[_K] }): Program_Invocation_instance {
        return new Program_Invocation_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Program_Invocation_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Program_Invocation_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Program_Invocation_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Program_Invocation_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Program_Invocation_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Program_Invocation_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Program_Invocation_instance: $.ASN1Decoder<Program_Invocation_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Program_Invocation_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Program_Invocation_instance (el: _Element): Program_Invocation_instance {
    if (!_cached_decoder_for_Program_Invocation_instance) { _cached_decoder_for_Program_Invocation_instance = function (el: _Element): Program_Invocation_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Program-Invocation-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: Identifier;
    let definition!: Program_Invocation_instance_definition;
    name = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    definition = _decode_Program_Invocation_instance_definition(sequence[1]);
    return new Program_Invocation_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Program_Invocation_instance(el);
}

let _cached_encoder_for_Program_Invocation_instance: $.ASN1Encoder<Program_Invocation_instance> | null = null;

/**
 * @summary Encodes a(n) Program_Invocation_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Program_Invocation_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Program_Invocation_instance (value: Program_Invocation_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Program_Invocation_instance) { _cached_encoder_for_Program_Invocation_instance = function (value: Program_Invocation_instance, elGetter: $.ASN1Encoder<Program_Invocation_instance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Program_Invocation_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Program_Invocation_instance(value, elGetter);
}


/* eslint-enable */
