/* eslint-disable */
import {
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
import { Domain_instance, _decode_Domain_instance, _encode_Domain_instance } from "../MMS-SCI-Module-1/Domain-instance.ta.mjs";
// export { Domain_instance, _decode_Domain_instance, _encode_Domain_instance } from "../MMS-SCI-Module-1/Domain-instance.ta.mjs";
import { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
// export { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";


/**
 * @summary Unit_Control_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unit-Control-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     domains [4] IMPLICIT SEQUENCE OF Domain-instance,
 *     programInvocations [5] IMPLICIT SEQUENCE OF Program-Invocation-instance
 * }
 * ```
 * 
 * @class
 */
export
class Unit_Control_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `domains`.
         * @public
         * @readonly
         */
        readonly domains: Domain_instance[],
        /**
         * @summary `programInvocations`.
         * @public
         * @readonly
         */
        readonly programInvocations: Program_Invocation_instance[]
    ) {}

    /**
     * @summary Restructures an object into a Unit_Control_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Unit_Control_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Unit_Control_instance_definition_details`.
     * @returns {Unit_Control_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Unit_Control_instance_definition_details)]: (Unit_Control_instance_definition_details)[_K] }): Unit_Control_instance_definition_details {
        return new Unit_Control_instance_definition_details(_o.accessControl, _o.domains, _o.programInvocations);
    }


}

/**
 * @summary The Leading Root Component Types of Unit_Control_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Unit_Control_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("domains", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("programInvocations", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Unit_Control_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Unit_Control_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Unit_Control_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Unit_Control_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Unit_Control_instance_definition_details: $.ASN1Decoder<Unit_Control_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unit_Control_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Unit_Control_instance_definition_details (el: _Element): Unit_Control_instance_definition_details {
    if (!_cached_decoder_for_Unit_Control_instance_definition_details) { _cached_decoder_for_Unit_Control_instance_definition_details = function (el: _Element): Unit_Control_instance_definition_details {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("Unit-Control-instance-definition-details contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessControl";
    sequence[1].name = "domains";
    sequence[2].name = "programInvocations";
    let accessControl!: Access_Control_List_instance;
    let domains!: Domain_instance[];
    let programInvocations!: Program_Invocation_instance[];
    accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(sequence[0]);
    domains = $._decode_implicit<Domain_instance[]>(() => $._decodeSequenceOf<Domain_instance>(() => _decode_Domain_instance))(sequence[1]);
    programInvocations = $._decode_implicit<Program_Invocation_instance[]>(() => $._decodeSequenceOf<Program_Invocation_instance>(() => _decode_Program_Invocation_instance))(sequence[2]);
    return new Unit_Control_instance_definition_details(
        accessControl,
        domains,
        programInvocations,

    );
}; }
    return _cached_decoder_for_Unit_Control_instance_definition_details(el);
}

let _cached_encoder_for_Unit_Control_instance_definition_details: $.ASN1Encoder<Unit_Control_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Unit_Control_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unit_Control_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Unit_Control_instance_definition_details (value: Unit_Control_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Unit_Control_instance_definition_details) { _cached_encoder_for_Unit_Control_instance_definition_details = function (value: Unit_Control_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Domain_instance>(() => _encode_Domain_instance, $.BER), $.BER)(value.domains, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Program_Invocation_instance>(() => _encode_Program_Invocation_instance, $.BER), $.BER)(value.programInvocations, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Unit_Control_instance_definition_details(value, elGetter);
}


/* eslint-enable */
