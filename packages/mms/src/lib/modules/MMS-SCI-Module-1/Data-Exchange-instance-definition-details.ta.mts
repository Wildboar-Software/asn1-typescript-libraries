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
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
// export { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";


/**
 * @summary Data_Exchange_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Data-Exchange-instance-definition-details ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Data_Exchange_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `request`.
         * @public
         * @readonly
         */
        readonly request: TypeDescription[],
        /**
         * @summary `response`.
         * @public
         * @readonly
         */
        readonly response: TypeDescription[],
        /**
         * @summary `linked`.
         * @public
         * @readonly
         */
        readonly linked: BOOLEAN,
        /**
         * @summary `programInvocation`.
         * @public
         * @readonly
         */
        readonly programInvocation: OPTIONAL<Program_Invocation_instance>
    ) {}

    /**
     * @summary Restructures an object into a Data_Exchange_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Data_Exchange_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Data_Exchange_instance_definition_details`.
     * @returns {Data_Exchange_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Data_Exchange_instance_definition_details)]: (Data_Exchange_instance_definition_details)[_K] }): Data_Exchange_instance_definition_details {
        return new Data_Exchange_instance_definition_details(_o.accessControl, _o.request, _o.response, _o.linked, _o.programInvocation);
    }


}

/**
 * @summary The Leading Root Component Types of Data_Exchange_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Data_Exchange_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("request", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("response", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("linked", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("programInvocation", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of Data_Exchange_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Data_Exchange_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Data_Exchange_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Data_Exchange_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Data_Exchange_instance_definition_details: $.ASN1Decoder<Data_Exchange_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Data_Exchange_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Data_Exchange_instance_definition_details (el: _Element): Data_Exchange_instance_definition_details {
    if (!_cached_decoder_for_Data_Exchange_instance_definition_details) { _cached_decoder_for_Data_Exchange_instance_definition_details = function (el: _Element): Data_Exchange_instance_definition_details {
    let accessControl!: Access_Control_List_instance;
    let request!: TypeDescription[];
    let response!: TypeDescription[];
    let linked!: BOOLEAN;
    let programInvocation: OPTIONAL<Program_Invocation_instance>;
    const callbacks: $.DecodingMap = {
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "request": (_el: _Element): void => { request = $._decode_implicit<TypeDescription[]>(() => $._decodeSequenceOf<TypeDescription>(() => _decode_TypeDescription))(_el); },
        "response": (_el: _Element): void => { response = $._decode_implicit<TypeDescription[]>(() => $._decodeSequenceOf<TypeDescription>(() => _decode_TypeDescription))(_el); },
        "linked": (_el: _Element): void => { linked = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "programInvocation": (_el: _Element): void => { programInvocation = $._decode_implicit<Program_Invocation_instance>(() => _decode_Program_Invocation_instance)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Data_Exchange_instance_definition_details,
        _extension_additions_list_spec_for_Data_Exchange_instance_definition_details,
        _root_component_type_list_2_spec_for_Data_Exchange_instance_definition_details,
        undefined,
    );
    return new Data_Exchange_instance_definition_details(
        accessControl,
        request,
        response,
        linked,
        programInvocation
    );
}; }
    return _cached_decoder_for_Data_Exchange_instance_definition_details(el);
}

let _cached_encoder_for_Data_Exchange_instance_definition_details: $.ASN1Encoder<Data_Exchange_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Data_Exchange_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data_Exchange_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Data_Exchange_instance_definition_details (value: Data_Exchange_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Data_Exchange_instance_definition_details) { _cached_encoder_for_Data_Exchange_instance_definition_details = function (value: Data_Exchange_instance_definition_details, elGetter: $.ASN1Encoder<Data_Exchange_instance_definition_details>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<TypeDescription>(() => _encode_TypeDescription, $.BER), $.BER)(value.request, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<TypeDescription>(() => _encode_TypeDescription, $.BER), $.BER)(value.response, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.linked, $.BER),
            /* IF_ABSENT  */ ((value.programInvocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Program_Invocation_instance, $.BER)(value.programInvocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Data_Exchange_instance_definition_details(value, elGetter);
}


/* eslint-enable */
