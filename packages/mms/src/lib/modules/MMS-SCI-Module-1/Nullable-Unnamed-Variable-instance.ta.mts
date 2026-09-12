/* eslint-disable */
import {
    OPTIONAL,
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
 * @summary Nullable_Unnamed_Variable_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Nullable-Unnamed-Variable-instance ::= SEQUENCE {
 *     address             [0] Address OPTIONAL,
 *     accessControl       [1] IMPLICIT Access-Control-List-instance OPTIONAL,
 *     typeDescription     [2] TypeDescription OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Nullable_Unnamed_Variable_instance {
    constructor (
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: OPTIONAL<Address>,
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: OPTIONAL<Access_Control_List_instance>,
        /**
         * @summary `typeDescription`.
         * @public
         * @readonly
         */
        readonly typeDescription: OPTIONAL<TypeDescription>
    ) {}

    /**
     * @summary Restructures an object into a Nullable_Unnamed_Variable_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Nullable_Unnamed_Variable_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Nullable_Unnamed_Variable_instance`.
     * @returns {Nullable_Unnamed_Variable_instance}
     */
    public static _from_object (_o: { [_K in keyof (Nullable_Unnamed_Variable_instance)]: (Nullable_Unnamed_Variable_instance)[_K] }): Nullable_Unnamed_Variable_instance {
        return new Nullable_Unnamed_Variable_instance(_o.address, _o.accessControl, _o.typeDescription);
    }


}

/**
 * @summary The Leading Root Component Types of Nullable_Unnamed_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Nullable_Unnamed_Variable_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("address", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessControl", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("typeDescription", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Nullable_Unnamed_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Nullable_Unnamed_Variable_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Nullable_Unnamed_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Nullable_Unnamed_Variable_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Nullable_Unnamed_Variable_instance: $.ASN1Decoder<Nullable_Unnamed_Variable_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Nullable_Unnamed_Variable_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Nullable_Unnamed_Variable_instance (el: _Element): Nullable_Unnamed_Variable_instance {
    if (!_cached_decoder_for_Nullable_Unnamed_Variable_instance) { _cached_decoder_for_Nullable_Unnamed_Variable_instance = function (el: _Element): Nullable_Unnamed_Variable_instance {
    let address: OPTIONAL<Address>;
    let accessControl: OPTIONAL<Access_Control_List_instance>;
    let typeDescription: OPTIONAL<TypeDescription>;
    const callbacks: $.DecodingMap = {
        "address": (_el: _Element): void => { address = $._decode_explicit<Address>(() => _decode_Address)(_el); },
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "typeDescription": (_el: _Element): void => { typeDescription = $._decode_explicit<TypeDescription>(() => _decode_TypeDescription)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Nullable_Unnamed_Variable_instance,
        _extension_additions_list_spec_for_Nullable_Unnamed_Variable_instance,
        _root_component_type_list_2_spec_for_Nullable_Unnamed_Variable_instance,
        undefined,
    );
    return new Nullable_Unnamed_Variable_instance(
        address,
        accessControl,
        typeDescription
    );
}; }
    return _cached_decoder_for_Nullable_Unnamed_Variable_instance(el);
}

let _cached_encoder_for_Nullable_Unnamed_Variable_instance: $.ASN1Encoder<Nullable_Unnamed_Variable_instance> | null = null;

/**
 * @summary Encodes a(n) Nullable_Unnamed_Variable_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Nullable_Unnamed_Variable_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Nullable_Unnamed_Variable_instance (value: Nullable_Unnamed_Variable_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Nullable_Unnamed_Variable_instance) { _cached_encoder_for_Nullable_Unnamed_Variable_instance = function (value: Nullable_Unnamed_Variable_instance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.address === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Address, $.BER)(value.address, $.BER)),
            /* IF_ABSENT  */ ((value.accessControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER)),
            /* IF_ABSENT  */ ((value.typeDescription === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_TypeDescription, $.BER)(value.typeDescription, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Nullable_Unnamed_Variable_instance(value, elGetter);
}


/* eslint-enable */
