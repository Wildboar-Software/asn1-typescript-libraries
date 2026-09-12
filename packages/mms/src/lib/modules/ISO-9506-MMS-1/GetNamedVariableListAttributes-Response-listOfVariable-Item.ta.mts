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
import { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
// export { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
import { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";
// export { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";


/**
 * @summary GetNamedVariableListAttributes_Response_listOfVariable_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetNamedVariableListAttributes-Response-listOfVariable-Item ::= SEQUENCE {
 *     variableSpecification VariableSpecification,
 *     alternateAccess [5] IMPLICIT AlternateAccess OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GetNamedVariableListAttributes_Response_listOfVariable_Item {
    constructor (
        /**
         * @summary `variableSpecification`.
         * @public
         * @readonly
         */
        readonly variableSpecification: VariableSpecification,
        /**
         * @summary `alternateAccess`.
         * @public
         * @readonly
         */
        readonly alternateAccess: OPTIONAL<AlternateAccess>
    ) {}

    /**
     * @summary Restructures an object into a GetNamedVariableListAttributes_Response_listOfVariable_Item
     * @description
     * 
     * This takes an `object` and converts it to a `GetNamedVariableListAttributes_Response_listOfVariable_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetNamedVariableListAttributes_Response_listOfVariable_Item`.
     * @returns {GetNamedVariableListAttributes_Response_listOfVariable_Item}
     */
    public static _from_object (_o: { [_K in keyof (GetNamedVariableListAttributes_Response_listOfVariable_Item)]: (GetNamedVariableListAttributes_Response_listOfVariable_Item)[_K] }): GetNamedVariableListAttributes_Response_listOfVariable_Item {
        return new GetNamedVariableListAttributes_Response_listOfVariable_Item(_o.variableSpecification, _o.alternateAccess);
    }


}

/**
 * @summary The Leading Root Component Types of GetNamedVariableListAttributes_Response_listOfVariable_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetNamedVariableListAttributes_Response_listOfVariable_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("variableSpecification", false, $.hasAnyTag),
    new $.ComponentSpec("alternateAccess", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of GetNamedVariableListAttributes_Response_listOfVariable_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetNamedVariableListAttributes_Response_listOfVariable_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetNamedVariableListAttributes_Response_listOfVariable_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetNamedVariableListAttributes_Response_listOfVariable_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item: $.ASN1Decoder<GetNamedVariableListAttributes_Response_listOfVariable_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetNamedVariableListAttributes_Response_listOfVariable_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetNamedVariableListAttributes_Response_listOfVariable_Item (el: _Element): GetNamedVariableListAttributes_Response_listOfVariable_Item {
    if (!_cached_decoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item) { _cached_decoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item = function (el: _Element): GetNamedVariableListAttributes_Response_listOfVariable_Item {
    let variableSpecification!: VariableSpecification;
    let alternateAccess: OPTIONAL<AlternateAccess>;
    const callbacks: $.DecodingMap = {
        "variableSpecification": (_el: _Element): void => { variableSpecification = _decode_VariableSpecification(_el); },
        "alternateAccess": (_el: _Element): void => { alternateAccess = $._decode_implicit<AlternateAccess>(() => _decode_AlternateAccess)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetNamedVariableListAttributes_Response_listOfVariable_Item,
        _extension_additions_list_spec_for_GetNamedVariableListAttributes_Response_listOfVariable_Item,
        _root_component_type_list_2_spec_for_GetNamedVariableListAttributes_Response_listOfVariable_Item,
        undefined,
    );
    return new GetNamedVariableListAttributes_Response_listOfVariable_Item(
        variableSpecification,
        alternateAccess
    );
}; }
    return _cached_decoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item(el);
}

let _cached_encoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item: $.ASN1Encoder<GetNamedVariableListAttributes_Response_listOfVariable_Item> | null = null;

/**
 * @summary Encodes a(n) GetNamedVariableListAttributes_Response_listOfVariable_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetNamedVariableListAttributes_Response_listOfVariable_Item, encoded as an ASN.1 Element.
 */
export
function _encode_GetNamedVariableListAttributes_Response_listOfVariable_Item (value: GetNamedVariableListAttributes_Response_listOfVariable_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item) { _cached_encoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item = function (value: GetNamedVariableListAttributes_Response_listOfVariable_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_VariableSpecification(value.variableSpecification, $.BER),
            /* IF_ABSENT  */ ((value.alternateAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AlternateAccess, $.BER)(value.alternateAccess, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetNamedVariableListAttributes_Response_listOfVariable_Item(value, elGetter);
}


/* eslint-enable */
