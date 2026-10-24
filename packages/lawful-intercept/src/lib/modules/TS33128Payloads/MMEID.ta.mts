/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MMEGI, _decode_MMEGI, _encode_MMEGI } from "../TS33128Payloads/MMEGI.ta.mjs";
// export { MMEGI, _decode_MMEGI, _encode_MMEGI } from "../TS33128Payloads/MMEGI.ta.mjs";
import { type MMEC, _decode_MMEC, _encode_MMEC } from "../TS33128Payloads/MMEC.ta.mjs";
// export { MMEC, _decode_MMEC, _encode_MMEC } from "../TS33128Payloads/MMEC.ta.mjs";


/**
 * @summary MMEID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEID ::= SEQUENCE
 * {
 *     mMEGI       [1] MMEGI,
 *     mMEC        [2] MMEC
 * }
 * ```
 * 
 * @class
 */
export
class MMEID {
    /**
     * @summary `mMEGI`.
     * @public
     * @readonly
     */
    readonly mMEGI: MMEGI;
    /**
     * @summary `mMEC`.
     * @public
     * @readonly
     */
    readonly mMEC: MMEC;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mMEGI: MMEGI,
        mMEC: MMEC,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mMEGI = mMEGI;
        this.mMEC = mMEC;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMEID
     * @description
     * 
     * This takes an `object` and converts it to a `MMEID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEID`.
     * @returns {MMEID}
     */
    public static _from_object (_o: { [_K in keyof (MMEID)]: (MMEID)[_K] }): MMEID {
        return new MMEID(_o.mMEGI, _o.mMEC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMEID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEID: $.ComponentSpec[] = [
    new $.ComponentSpec("mMEGI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mMEC", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMEID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEID: $.ASN1Decoder<MMEID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEID (el: _Element): MMEID {
    if (!_cached_decoder_for_MMEID) { _cached_decoder_for_MMEID = function (el: _Element): MMEID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMEID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mMEGI";
    sequence[1].name = "mMEC";
    let mMEGI!: MMEGI;
    let mMEC!: MMEC;
    mMEGI = $._decode_implicit<MMEGI>(() => _decode_MMEGI)(sequence[0]);
    mMEC = $._decode_implicit<MMEC>(() => _decode_MMEC)(sequence[1]);
    return new MMEID(
        mMEGI,
        mMEC,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MMEID(el);
}

let _cached_encoder_for_MMEID: $.ASN1Encoder<MMEID> | null = null;

/**
 * @summary Encodes a(n) MMEID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEID, encoded as an ASN.1 Element.
 */
export
function _encode_MMEID (value: MMEID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEID) { _cached_encoder_for_MMEID = function (value: MMEID, elGetter: $.ASN1Encoder<MMEID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMEGI, $.BER)(value.mMEGI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMEC, $.BER)(value.mMEC, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMEID(value, elGetter);
}


/* eslint-enable */
