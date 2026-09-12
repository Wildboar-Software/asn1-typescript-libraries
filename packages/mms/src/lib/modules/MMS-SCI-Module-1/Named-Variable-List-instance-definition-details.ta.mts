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
import { Variable_List_Item_instance, _decode_Variable_List_Item_instance, _encode_Variable_List_Item_instance } from "../MMS-SCI-Module-1/Variable-List-Item-instance.ta.mjs";
// export { Variable_List_Item_instance, _decode_Variable_List_Item_instance, _encode_Variable_List_Item_instance } from "../MMS-SCI-Module-1/Variable-List-Item-instance.ta.mjs";


/**
 * @summary Named_Variable_List_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Named-Variable-List-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     listOfVariables [4] IMPLICIT SEQUENCE OF Variable-List-Item-instance
 * }
 * ```
 * 
 * @class
 */
export
class Named_Variable_List_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `listOfVariables`.
         * @public
         * @readonly
         */
        readonly listOfVariables: Variable_List_Item_instance[]
    ) {}

    /**
     * @summary Restructures an object into a Named_Variable_List_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Named_Variable_List_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Named_Variable_List_instance_definition_details`.
     * @returns {Named_Variable_List_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Named_Variable_List_instance_definition_details)]: (Named_Variable_List_instance_definition_details)[_K] }): Named_Variable_List_instance_definition_details {
        return new Named_Variable_List_instance_definition_details(_o.accessControl, _o.listOfVariables);
    }


}

/**
 * @summary The Leading Root Component Types of Named_Variable_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Named_Variable_List_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("listOfVariables", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Named_Variable_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Named_Variable_List_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Named_Variable_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Named_Variable_List_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Named_Variable_List_instance_definition_details: $.ASN1Decoder<Named_Variable_List_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Named_Variable_List_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Named_Variable_List_instance_definition_details (el: _Element): Named_Variable_List_instance_definition_details {
    if (!_cached_decoder_for_Named_Variable_List_instance_definition_details) { _cached_decoder_for_Named_Variable_List_instance_definition_details = function (el: _Element): Named_Variable_List_instance_definition_details {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Named-Variable-List-instance-definition-details contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessControl";
    sequence[1].name = "listOfVariables";
    let accessControl!: Access_Control_List_instance;
    let listOfVariables!: Variable_List_Item_instance[];
    accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(sequence[0]);
    listOfVariables = $._decode_implicit<Variable_List_Item_instance[]>(() => $._decodeSequenceOf<Variable_List_Item_instance>(() => _decode_Variable_List_Item_instance))(sequence[1]);
    return new Named_Variable_List_instance_definition_details(
        accessControl,
        listOfVariables,

    );
}; }
    return _cached_decoder_for_Named_Variable_List_instance_definition_details(el);
}

let _cached_encoder_for_Named_Variable_List_instance_definition_details: $.ASN1Encoder<Named_Variable_List_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Named_Variable_List_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Named_Variable_List_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Named_Variable_List_instance_definition_details (value: Named_Variable_List_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Named_Variable_List_instance_definition_details) { _cached_encoder_for_Named_Variable_List_instance_definition_details = function (value: Named_Variable_List_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Variable_List_Item_instance>(() => _encode_Variable_List_Item_instance, $.BER), $.BER)(value.listOfVariables, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Named_Variable_List_instance_definition_details(value, elGetter);
}


/* eslint-enable */
