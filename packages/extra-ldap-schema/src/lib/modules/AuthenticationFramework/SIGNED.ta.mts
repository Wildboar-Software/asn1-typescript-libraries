/* eslint-disable */
import {
    type BIT_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary SIGNED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIGNED{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned              ToBeSigned,
 *   algorithmIdentifier     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   signature               BIT STRING,
 *   ...,
 * [[4:
 *   altAlgorithmIdentifier  AlgorithmIdentifier{{SupportedAltAlgorithms}} OPTIONAL,
 *   altSignature            BIT STRING OPTIONAL]]
 *   } (WITH COMPONENTS {..., altAlgorithmIdentifier PRESENT, altSignature PRESENT } |
 *      WITH COMPONENTS {..., altAlgorithmIdentifier ABSENT,  altSignature ABSENT } )
 * ```
 * 
 * @class
 */
export
class SIGNED<ToBeSigned> {
    /**
     * @summary `toBeSigned`.
     * @public
     * @readonly
     */
    readonly toBeSigned: ToBeSigned;
    /**
     * @summary `algorithmIdentifier`.
     * @public
     * @readonly
     */
    readonly algorithmIdentifier: AlgorithmIdentifier;
    /**
     * @summary `signature`.
     * @public
     * @readonly
     */
    readonly signature: BIT_STRING;
    /**
     * @summary `altAlgorithmIdentifier`.
     * @public
     * @readonly
     */
    readonly altAlgorithmIdentifier: OPTIONAL<AlgorithmIdentifier>;
    /**
     * @summary `altSignature`.
     * @public
     * @readonly
     */
    readonly altSignature: OPTIONAL<BIT_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        toBeSigned: ToBeSigned,
        algorithmIdentifier: AlgorithmIdentifier,
        signature: BIT_STRING,
        altAlgorithmIdentifier: OPTIONAL<AlgorithmIdentifier>,
        altSignature: OPTIONAL<BIT_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        if ((altAlgorithmIdentifier === undefined) !== (altSignature === undefined)) {
            throw new ASN1ConstructionError("SIGNED requires altAlgorithmIdentifier and altSignature to be both present or both absent");
        }
        this.toBeSigned = toBeSigned;
        this.algorithmIdentifier = algorithmIdentifier;
        this.signature = signature;
        this.altAlgorithmIdentifier = altAlgorithmIdentifier;
        this.altSignature = altSignature;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SIGNED
     * @description
     * 
     * This takes an `object` and converts it to a `SIGNED`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNED`.
     * @returns {SIGNED}
     */
    public static _from_object (_o: { [_K in keyof (SIGNED<any>)]: (SIGNED<any>)[_K] }): SIGNED<any> {
        return new SIGNED(_o.toBeSigned, _o.algorithmIdentifier, _o.signature, _o.altAlgorithmIdentifier, _o.altSignature, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag),
    new $.ComponentSpec("algorithmIdentifier", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIGNED: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("altAlgorithmIdentifier", true, $.hasTag(_TagClass.universal, 16), 0, 4),
    new $.ComponentSpec("altSignature", true, $.hasTag(_TagClass.universal, 3), 0, 4)
];

let _cached_decoder_for_SIGNED: $.ASN1Decoder<SIGNED<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SIGNED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_SIGNED<ToBeSigned>(_decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>): $.ASN1Decoder<SIGNED<ToBeSigned>> {
    return function (el: _Element): SIGNED<ToBeSigned> {
    let toBeSigned!: ToBeSigned;
    let algorithmIdentifier!: AlgorithmIdentifier;
    let signature!: BIT_STRING;
    let altAlgorithmIdentifier: OPTIONAL<AlgorithmIdentifier>; // Only present in version 4 and higher.
    let altSignature: OPTIONAL<BIT_STRING>; // Only present in version 4 and higher.
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "toBeSigned": (_el: _Element): void => { toBeSigned = _decode_ToBeSigned(_el); },
        "algorithmIdentifier": (_el: _Element): void => { algorithmIdentifier = _decode_AlgorithmIdentifier(_el); },
        "signature": (_el: _Element): void => { signature = $._decodeBitString(_el); },
        "altAlgorithmIdentifier": (_el: _Element): void => { altAlgorithmIdentifier = _decode_AlgorithmIdentifier(_el); },
        "altSignature": (_el: _Element): void => { altSignature = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SIGNED(
        toBeSigned,
        algorithmIdentifier,
        signature,
        altAlgorithmIdentifier,
        altSignature,
        _unrecognizedExtensionsList
    );
};
}

let _cached_encoder_for_SIGNED: $.ASN1Encoder<SIGNED<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will encode a(n) SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNED as an ASN.1 element.
 */
export
function _get_encoder_for_SIGNED<ToBeSigned>(_encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>): $.ASN1Encoder<SIGNED<ToBeSigned>> {
    return function (value: SIGNED<ToBeSigned>, elGetter: $.ASN1Encoder<SIGNED<ToBeSigned>>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_ToBeSigned(value.toBeSigned, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithmIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encodeBitString(value.signature, $.BER);
    if (value.altAlgorithmIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_AlgorithmIdentifier(value.altAlgorithmIdentifier, $.BER);
    }
    if (value.altSignature !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodeBitString(value.altSignature, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
};
}

/* eslint-enable */
