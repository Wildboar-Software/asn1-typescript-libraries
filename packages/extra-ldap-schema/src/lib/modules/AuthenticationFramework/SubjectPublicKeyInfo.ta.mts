/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { type PublicKey, _decode_PublicKey, _encode_PublicKey } from "../AuthenticationFramework/PublicKey.ta.mjs";

/**
 * @summary SubjectPublicKeyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectPublicKeyInfo ::= SEQUENCE {
 *   algorithm         AlgorithmIdentifier{{SupportedAlgorithms}},
 *   subjectPublicKey  PublicKey,
 *   ... }
 * ```
 * 
 * @class
 */
export
class SubjectPublicKeyInfo {
    /**
     * @summary `algorithm`.
     * @public
     * @readonly
     */
    readonly algorithm: AlgorithmIdentifier;
    /**
     * @summary `subjectPublicKey`.
     * @public
     * @readonly
     */
    readonly subjectPublicKey: PublicKey;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        algorithm: AlgorithmIdentifier,
        subjectPublicKey: PublicKey,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.algorithm = algorithm;
        this.subjectPublicKey = subjectPublicKey;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SubjectPublicKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SubjectPublicKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectPublicKeyInfo`.
     * @returns {SubjectPublicKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (SubjectPublicKeyInfo)]: (SubjectPublicKeyInfo)[_K] }): SubjectPublicKeyInfo {
        return new SubjectPublicKeyInfo(_o.algorithm, _o.subjectPublicKey, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of SubjectPublicKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("subjectPublicKey", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of SubjectPublicKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubjectPublicKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubjectPublicKeyInfo: $.ASN1Decoder<SubjectPublicKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectPublicKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectPublicKeyInfo (el: _Element): SubjectPublicKeyInfo {
    if (!_cached_decoder_for_SubjectPublicKeyInfo) { _cached_decoder_for_SubjectPublicKeyInfo = function (el: _Element): SubjectPublicKeyInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SubjectPublicKeyInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: AlgorithmIdentifier;
    let subjectPublicKey!: PublicKey;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    subjectPublicKey = _decode_PublicKey(sequence[1]);
    return new SubjectPublicKeyInfo(
        algorithm,
        subjectPublicKey,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_SubjectPublicKeyInfo(el);
}

let _cached_encoder_for_SubjectPublicKeyInfo: $.ASN1Encoder<SubjectPublicKeyInfo> | null = null;

/**
 * @summary Encodes a(n) SubjectPublicKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectPublicKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectPublicKeyInfo (value: SubjectPublicKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectPublicKeyInfo) { _cached_encoder_for_SubjectPublicKeyInfo = function (value: SubjectPublicKeyInfo, elGetter: $.ASN1Encoder<SubjectPublicKeyInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithm, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_PublicKey(value.subjectPublicKey, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SubjectPublicKeyInfo(value, elGetter);
}

/* eslint-enable */
