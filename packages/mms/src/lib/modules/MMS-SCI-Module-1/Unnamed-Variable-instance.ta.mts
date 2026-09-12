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
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";


/**
 * @summary Unnamed_Variable_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unnamed-Variable-instance ::= SEQUENCE {
 *     address             [0] Address,
 *     accessControl       [1] IMPLICIT Access-Control-List-instance,
 *     typeDescription     [2] TypeDescription
 * }
 * ```
 * 
 * @class
 */
export
class Unnamed_Variable_instance {
    constructor (
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: Address,
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `typeDescription`.
         * @public
         * @readonly
         */
        readonly typeDescription: TypeDescription
    ) {}

    /**
     * @summary Restructures an object into a Unnamed_Variable_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Unnamed_Variable_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Unnamed_Variable_instance`.
     * @returns {Unnamed_Variable_instance}
     */
    public static _from_object (_o: { [_K in keyof (Unnamed_Variable_instance)]: (Unnamed_Variable_instance)[_K] }): Unnamed_Variable_instance {
        return new Unnamed_Variable_instance(_o.address, _o.accessControl, _o.typeDescription);
    }


}

/**
 * @summary The Leading Root Component Types of Unnamed_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Unnamed_Variable_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("address", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("typeDescription", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Unnamed_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Unnamed_Variable_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Unnamed_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Unnamed_Variable_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Unnamed_Variable_instance: $.ASN1Decoder<Unnamed_Variable_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unnamed_Variable_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Unnamed_Variable_instance (el: _Element): Unnamed_Variable_instance {
    if (!_cached_decoder_for_Unnamed_Variable_instance) { _cached_decoder_for_Unnamed_Variable_instance = function (el: _Element): Unnamed_Variable_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("Unnamed-Variable-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "address";
    sequence[1].name = "accessControl";
    sequence[2].name = "typeDescription";
    let address!: Address;
    let accessControl!: Access_Control_List_instance;
    let typeDescription!: TypeDescription;
    address = $._decode_explicit<Address>(() => _decode_Address)(sequence[0]);
    accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(sequence[1]);
    typeDescription = $._decode_explicit<TypeDescription>(() => _decode_TypeDescription)(sequence[2]);
    return new Unnamed_Variable_instance(
        address,
        accessControl,
        typeDescription,

    );
}; }
    return _cached_decoder_for_Unnamed_Variable_instance(el);
}

let _cached_encoder_for_Unnamed_Variable_instance: $.ASN1Encoder<Unnamed_Variable_instance> | null = null;

/**
 * @summary Encodes a(n) Unnamed_Variable_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unnamed_Variable_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Unnamed_Variable_instance (value: Unnamed_Variable_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Unnamed_Variable_instance) { _cached_encoder_for_Unnamed_Variable_instance = function (value: Unnamed_Variable_instance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Address, $.BER)(value.address, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TypeDescription, $.BER)(value.typeDescription, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Unnamed_Variable_instance(value, elGetter);
}


/* eslint-enable */
