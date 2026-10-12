/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";
// export { LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";


/**
 * @summary LAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LAI ::= SEQUENCE
 * {
 *     pLMNID [1] PLMNID,
 *     lAC    [2] LAC
 * }
 * ```
 * 
 * @class
 */
export
class LAI {
    /**
     * @summary `pLMNID`.
     * @public
     * @readonly
     */
    readonly pLMNID: PLMNID;
    /**
     * @summary `lAC`.
     * @public
     * @readonly
     */
    readonly lAC: LAC;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pLMNID: PLMNID,
        lAC: LAC,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pLMNID = pLMNID;
        this.lAC = lAC;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LAI
     * @description
     * 
     * This takes an `object` and converts it to a `LAI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LAI`.
     * @returns {LAI}
     */
    public static _from_object (_o: { [_K in keyof (LAI)]: (LAI)[_K] }): LAI {
        return new LAI(_o.pLMNID, _o.lAC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LAI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lAC", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LAI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LAI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LAI: $.ASN1Decoder<LAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LAI (el: _Element): LAI {
    if (!_cached_decoder_for_LAI) { _cached_decoder_for_LAI = function (el: _Element): LAI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LAI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNID";
    sequence[1].name = "lAC";
    let pLMNID!: PLMNID;
    let lAC!: LAC;
    pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    lAC = $._decode_implicit<LAC>(() => _decode_LAC)(sequence[1]);
    return new LAI(
        pLMNID,
        lAC,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_LAI(el);
}

let _cached_encoder_for_LAI: $.ASN1Encoder<LAI> | null = null;

/**
 * @summary Encodes a(n) LAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LAI, encoded as an ASN.1 Element.
 */
export
function _encode_LAI (value: LAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LAI) { _cached_encoder_for_LAI = function (value: LAI, elGetter: $.ASN1Encoder<LAI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LAC, $.BER)(value.lAC, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LAI(value, elGetter);
}


/* eslint-enable */
