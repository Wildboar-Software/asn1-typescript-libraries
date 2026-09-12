/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
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


/**
 * @summary Named_Type_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Named-Type-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     typeDescription [4] TypeDescription,
 *     meaning [5] IMPLICIT VisibleString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Named_Type_instance_definition_details {
    constructor (
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
        readonly typeDescription: TypeDescription,
        /**
         * @summary `meaning`.
         * @public
         * @readonly
         */
        readonly meaning: OPTIONAL<VisibleString>
    ) {}

    /**
     * @summary Restructures an object into a Named_Type_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Named_Type_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Named_Type_instance_definition_details`.
     * @returns {Named_Type_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Named_Type_instance_definition_details)]: (Named_Type_instance_definition_details)[_K] }): Named_Type_instance_definition_details {
        return new Named_Type_instance_definition_details(_o.accessControl, _o.typeDescription, _o.meaning);
    }


}

/**
 * @summary The Leading Root Component Types of Named_Type_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Named_Type_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("typeDescription", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("meaning", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Named_Type_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Named_Type_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Named_Type_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Named_Type_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Named_Type_instance_definition_details: $.ASN1Decoder<Named_Type_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Named_Type_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Named_Type_instance_definition_details (el: _Element): Named_Type_instance_definition_details {
    if (!_cached_decoder_for_Named_Type_instance_definition_details) { _cached_decoder_for_Named_Type_instance_definition_details = function (el: _Element): Named_Type_instance_definition_details {
    let accessControl!: Access_Control_List_instance;
    let typeDescription!: TypeDescription;
    let meaning: OPTIONAL<VisibleString>;
    const callbacks: $.DecodingMap = {
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "typeDescription": (_el: _Element): void => { typeDescription = $._decode_explicit<TypeDescription>(() => _decode_TypeDescription)(_el); },
        "meaning": (_el: _Element): void => { meaning = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Named_Type_instance_definition_details,
        _extension_additions_list_spec_for_Named_Type_instance_definition_details,
        _root_component_type_list_2_spec_for_Named_Type_instance_definition_details,
        undefined,
    );
    return new Named_Type_instance_definition_details(
        accessControl,
        typeDescription,
        meaning
    );
}; }
    return _cached_decoder_for_Named_Type_instance_definition_details(el);
}

let _cached_encoder_for_Named_Type_instance_definition_details: $.ASN1Encoder<Named_Type_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Named_Type_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Named_Type_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Named_Type_instance_definition_details (value: Named_Type_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Named_Type_instance_definition_details) { _cached_encoder_for_Named_Type_instance_definition_details = function (value: Named_Type_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_TypeDescription, $.BER)(value.typeDescription, $.BER),
            /* IF_ABSENT  */ ((value.meaning === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.meaning, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Named_Type_instance_definition_details(value, elGetter);
}


/* eslint-enable */
