/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS2-datatypes/CSAID.ta.mjs";
// export { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS2-datatypes/CSAID.ta.mjs";


/**
 * @summary CreateCallSegmentAssociationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateCallSegmentAssociationResult ::= SEQUENCE {
 *   newCallSegmentAssociation  [0]  CSAID,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CreateCallSegmentAssociationResult {
    /**
     * @summary `newCallSegmentAssociation`.
     * @public
     * @readonly
     */
    readonly newCallSegmentAssociation: CSAID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        newCallSegmentAssociation: CSAID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.newCallSegmentAssociation = newCallSegmentAssociation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CreateCallSegmentAssociationResult
     * @description
     * 
     * This takes an `object` and converts it to a `CreateCallSegmentAssociationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateCallSegmentAssociationResult`.
     * @returns {CreateCallSegmentAssociationResult}
     */
    public static _from_object (_o: { [_K in keyof (CreateCallSegmentAssociationResult)]: (CreateCallSegmentAssociationResult)[_K] }): CreateCallSegmentAssociationResult {
        return new CreateCallSegmentAssociationResult(_o.newCallSegmentAssociation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CreateCallSegmentAssociationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateCallSegmentAssociationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("newCallSegmentAssociation", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CreateCallSegmentAssociationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateCallSegmentAssociationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateCallSegmentAssociationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateCallSegmentAssociationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateCallSegmentAssociationResult: $.ASN1Decoder<CreateCallSegmentAssociationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateCallSegmentAssociationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateCallSegmentAssociationResult (el: _Element): CreateCallSegmentAssociationResult {
    if (!_cached_decoder_for_CreateCallSegmentAssociationResult) { _cached_decoder_for_CreateCallSegmentAssociationResult = function (el: _Element): CreateCallSegmentAssociationResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CreateCallSegmentAssociationResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "newCallSegmentAssociation";
    const newCallSegmentAssociation: CSAID = $._decode_implicit<CSAID>(() => _decode_CSAID)(sequence[0]);
    return new CreateCallSegmentAssociationResult(
        newCallSegmentAssociation,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_CreateCallSegmentAssociationResult(el);
}

let _cached_encoder_for_CreateCallSegmentAssociationResult: $.ASN1Encoder<CreateCallSegmentAssociationResult> | null = null;

/**
 * @summary Encodes a(n) CreateCallSegmentAssociationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateCallSegmentAssociationResult, encoded as an ASN.1 Element.
 */
export
function _encode_CreateCallSegmentAssociationResult (value: CreateCallSegmentAssociationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateCallSegmentAssociationResult) { _cached_encoder_for_CreateCallSegmentAssociationResult = function (value: CreateCallSegmentAssociationResult, elGetter: $.ASN1Encoder<CreateCallSegmentAssociationResult>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CSAID, $.BER)(value.newCallSegmentAssociation, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CreateCallSegmentAssociationResult(value, elGetter);
}


/* eslint-enable */
