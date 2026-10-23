/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../IN-SCF-SCF-datatypes/AgreementID.ta.mjs";
// export { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../IN-SCF-SCF-datatypes/AgreementID.ta.mjs";


/**
 * @summary SCFCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFCriteria ::= SEQUENCE {agreement  [0] IMPLICIT AgreementID,
 *                           ...
 * }
 * ```
 * 
 * @class
 */
export
class SCFCriteria {
    /**
     * @summary `agreement`.
     * @public
     * @readonly
     */
    readonly agreement: AgreementID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        agreement: AgreementID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.agreement = agreement;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SCFCriteria
     * @description
     * 
     * This takes an `object` and converts it to a `SCFCriteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCFCriteria`.
     * @returns {SCFCriteria}
     */
    public static _from_object (_o: { [_K in keyof (SCFCriteria)]: (SCFCriteria)[_K] }): SCFCriteria {
        return new SCFCriteria(_o.agreement, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SCFCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCFCriteria: $.ComponentSpec[] = [
    new $.ComponentSpec("agreement", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SCFCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCFCriteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCFCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCFCriteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCFCriteria: $.ASN1Decoder<SCFCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCFCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCFCriteria (el: _Element): SCFCriteria {
    if (!_cached_decoder_for_SCFCriteria) { _cached_decoder_for_SCFCriteria = function (el: _Element): SCFCriteria {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SCFCriteria contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "agreement";
    const agreement: AgreementID = $._decode_implicit<AgreementID>(() => _decode_AgreementID)(sequence[0]);
    return new SCFCriteria(
        agreement,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_SCFCriteria(el);
}

let _cached_encoder_for_SCFCriteria: $.ASN1Encoder<SCFCriteria> | null = null;

/**
 * @summary Encodes a(n) SCFCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_SCFCriteria (value: SCFCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCFCriteria) { _cached_encoder_for_SCFCriteria = function (value: SCFCriteria, elGetter: $.ASN1Encoder<SCFCriteria>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AgreementID, $.BER)(value.agreement, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCFCriteria(value, elGetter);
}


/* eslint-enable */
