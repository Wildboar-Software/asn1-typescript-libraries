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
import { Data_Exchange_instance_definition, _decode_Data_Exchange_instance_definition, _encode_Data_Exchange_instance_definition } from "../MMS-SCI-Module-1/Data-Exchange-instance-definition.ta.mjs";
// export { Data_Exchange_instance_definition, _decode_Data_Exchange_instance_definition, _encode_Data_Exchange_instance_definition } from "../MMS-SCI-Module-1/Data-Exchange-instance-definition.ta.mjs";


/**
 * @summary Data_Exchange_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Data-Exchange-instance ::= SEQUENCE {
 *     name                [0] IMPLICIT Identifier,
 *     definition          CHOICE {
 *         reference           [1] IMPLICIT OBJECT IDENTIFIER,
 *         details             [2] IMPLICIT SEQUENCE {
 *             accessControl       [3] IMPLICIT Access-Control-List-instance,
 *             request             [4] IMPLICIT SEQUENCE OF TypeDescription,
 *             response            [5] IMPLICIT SEQUENCE OF TypeDescription,
 *             linked              [6] IMPLICIT BOOLEAN,
 *     -- The following attribute shall appear if an only if the value of &linked is true.
 *             programInvocation   [7] IMPLICIT Program-Invocation-instance OPTIONAL
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Data_Exchange_instance {
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
        readonly definition: Data_Exchange_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Data_Exchange_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Data_Exchange_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Data_Exchange_instance`.
     * @returns {Data_Exchange_instance}
     */
    public static _from_object (_o: { [_K in keyof (Data_Exchange_instance)]: (Data_Exchange_instance)[_K] }): Data_Exchange_instance {
        return new Data_Exchange_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Data_Exchange_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Data_Exchange_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Data_Exchange_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Data_Exchange_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Data_Exchange_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Data_Exchange_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Data_Exchange_instance: $.ASN1Decoder<Data_Exchange_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Data_Exchange_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Data_Exchange_instance (el: _Element): Data_Exchange_instance {
    if (!_cached_decoder_for_Data_Exchange_instance) { _cached_decoder_for_Data_Exchange_instance = function (el: _Element): Data_Exchange_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Data-Exchange-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: Identifier;
    let definition!: Data_Exchange_instance_definition;
    name = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    definition = _decode_Data_Exchange_instance_definition(sequence[1]);
    return new Data_Exchange_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Data_Exchange_instance(el);
}

let _cached_encoder_for_Data_Exchange_instance: $.ASN1Encoder<Data_Exchange_instance> | null = null;

/**
 * @summary Encodes a(n) Data_Exchange_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data_Exchange_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Data_Exchange_instance (value: Data_Exchange_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Data_Exchange_instance) { _cached_encoder_for_Data_Exchange_instance = function (value: Data_Exchange_instance, elGetter: $.ASN1Encoder<Data_Exchange_instance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Data_Exchange_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Data_Exchange_instance(value, elGetter);
}


/* eslint-enable */
