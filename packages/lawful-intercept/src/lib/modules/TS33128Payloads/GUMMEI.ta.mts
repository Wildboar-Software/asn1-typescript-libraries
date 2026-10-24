/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMEID, _decode_MMEID, _encode_MMEID } from "../TS33128Payloads/MMEID.ta.mjs";
// export { MMEID, _decode_MMEID, _encode_MMEID } from "../TS33128Payloads/MMEID.ta.mjs";
import { type MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
// export { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
import { type MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
// export { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";


/**
 * @summary GUMMEI
 * @description
 * 
 * Serving MME’s GUMMEI, see NOTE 2.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GUMMEI ::= SEQUENCE
 * {
 *     mMEID       [1] MMEID,
 *     mCC         [2] MCC,
 *     mNC         [3] MNC
 * }
 * ```
 * 
 * @class
 */
export
class GUMMEI {
    /**
     * @summary `mMEID`.
     * @public
     * @readonly
     */
    readonly mMEID: MMEID;
    /**
     * @summary `mCC`.
     * @public
     * @readonly
     */
    readonly mCC: MCC;
    /**
     * @summary `mNC`.
     * @public
     * @readonly
     */
    readonly mNC: MNC;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mMEID: MMEID,
        mCC: MCC,
        mNC: MNC,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mMEID = mMEID;
        this.mCC = mCC;
        this.mNC = mNC;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GUMMEI
     * @description
     * 
     * This takes an `object` and converts it to a `GUMMEI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GUMMEI`.
     * @returns {GUMMEI}
     */
    public static _from_object (_o: { [_K in keyof (GUMMEI)]: (GUMMEI)[_K] }): GUMMEI {
        return new GUMMEI(_o.mMEID, _o.mCC, _o.mNC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GUMMEI: $.ComponentSpec[] = [
    new $.ComponentSpec("mMEID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mNC", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GUMMEI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GUMMEI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GUMMEI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GUMMEI: $.ASN1Decoder<GUMMEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GUMMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GUMMEI (el: _Element): GUMMEI {
    if (!_cached_decoder_for_GUMMEI) { _cached_decoder_for_GUMMEI = function (el: _Element): GUMMEI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GUMMEI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mMEID";
    sequence[1].name = "mCC";
    sequence[2].name = "mNC";
    let mMEID!: MMEID;
    let mCC!: MCC;
    let mNC!: MNC;
    mMEID = $._decode_implicit<MMEID>(() => _decode_MMEID)(sequence[0]);
    mCC = $._decode_implicit<MCC>(() => _decode_MCC)(sequence[1]);
    mNC = $._decode_implicit<MNC>(() => _decode_MNC)(sequence[2]);
    return new GUMMEI(
        mMEID,
        mCC,
        mNC,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_GUMMEI(el);
}

let _cached_encoder_for_GUMMEI: $.ASN1Encoder<GUMMEI> | null = null;

/**
 * @summary Encodes a(n) GUMMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUMMEI, encoded as an ASN.1 Element.
 */
export
function _encode_GUMMEI (value: GUMMEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GUMMEI) { _cached_encoder_for_GUMMEI = function (value: GUMMEI, elGetter: $.ASN1Encoder<GUMMEI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMEID, $.BER)(value.mMEID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCC, $.BER)(value.mCC, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MNC, $.BER)(value.mNC, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GUMMEI(value, elGetter);
}


/* eslint-enable */
