/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";


/**
 * @summary AlternativeNSSAIEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternativeNSSAIEntry ::= SEQUENCE
 * {
 *     sNSSAIToBeReplaced  [1] SNSSAI,
 *     alternativeSNSSAI   [2] SNSSAI
 * }
 * ```
 * 
 * @class
 */
export
class AlternativeNSSAIEntry {
    /**
     * @summary `sNSSAIToBeReplaced`.
     * @public
     * @readonly
     */
    readonly sNSSAIToBeReplaced: SNSSAI;
    /**
     * @summary `alternativeSNSSAI`.
     * @public
     * @readonly
     */
    readonly alternativeSNSSAI: SNSSAI;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sNSSAIToBeReplaced: SNSSAI,
        alternativeSNSSAI: SNSSAI,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sNSSAIToBeReplaced = sNSSAIToBeReplaced;
        this.alternativeSNSSAI = alternativeSNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AlternativeNSSAIEntry
     * @description
     * 
     * This takes an `object` and converts it to a `AlternativeNSSAIEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlternativeNSSAIEntry`.
     * @returns {AlternativeNSSAIEntry}
     */
    public static _from_object (_o: { [_K in keyof (AlternativeNSSAIEntry)]: (AlternativeNSSAIEntry)[_K] }): AlternativeNSSAIEntry {
        return new AlternativeNSSAIEntry(_o.sNSSAIToBeReplaced, _o.alternativeSNSSAI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AlternativeNSSAIEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlternativeNSSAIEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("sNSSAIToBeReplaced", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("alternativeSNSSAI", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AlternativeNSSAIEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlternativeNSSAIEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlternativeNSSAIEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlternativeNSSAIEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlternativeNSSAIEntry: $.ASN1Decoder<AlternativeNSSAIEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternativeNSSAIEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternativeNSSAIEntry (el: _Element): AlternativeNSSAIEntry {
    if (!_cached_decoder_for_AlternativeNSSAIEntry) { _cached_decoder_for_AlternativeNSSAIEntry = function (el: _Element): AlternativeNSSAIEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AlternativeNSSAIEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sNSSAIToBeReplaced";
    sequence[1].name = "alternativeSNSSAI";
    let sNSSAIToBeReplaced!: SNSSAI;
    let alternativeSNSSAI!: SNSSAI;
    sNSSAIToBeReplaced = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(sequence[0]);
    alternativeSNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(sequence[1]);
    return new AlternativeNSSAIEntry(
        sNSSAIToBeReplaced,
        alternativeSNSSAI,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AlternativeNSSAIEntry(el);
}

let _cached_encoder_for_AlternativeNSSAIEntry: $.ASN1Encoder<AlternativeNSSAIEntry> | null = null;

/**
 * @summary Encodes a(n) AlternativeNSSAIEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternativeNSSAIEntry, encoded as an ASN.1 Element.
 */
export
function _encode_AlternativeNSSAIEntry (value: AlternativeNSSAIEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternativeNSSAIEntry) { _cached_encoder_for_AlternativeNSSAIEntry = function (value: AlternativeNSSAIEntry, _elGetter: $.ASN1Encoder<AlternativeNSSAIEntry>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SNSSAI, $.BER)(value.sNSSAIToBeReplaced, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SNSSAI, $.BER)(value.alternativeSNSSAI, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AlternativeNSSAIEntry(value, elGetter);
}


/* eslint-enable */
