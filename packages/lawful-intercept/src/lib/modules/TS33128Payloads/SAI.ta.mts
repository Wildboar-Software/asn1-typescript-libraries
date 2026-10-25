/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { type LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";
// export { LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";
import { type SAC, _decode_SAC, _encode_SAC } from "../TS33128Payloads/SAC.ta.mjs";
// export { SAC, _decode_SAC, _encode_SAC } from "../TS33128Payloads/SAC.ta.mjs";


/**
 * @summary SAI
 * @description
 * 
 * The Service Area Identifier (SAI) is used to identify an area consisting of
 * one or more cells belonging to the same Location Area. Such an area is called
 * a Service Area and can be used for indicating the location of a UE to the
 * Core Network. The SAI is derived from the data present in the SAI information
 * element defined in TS 23.003[19] clause 12.5.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.73.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SAI ::= SEQUENCE
 * {
 *     pLMNID [1] PLMNID,
 *     lAC    [2] LAC,
 *     sAC    [3] SAC
 * }
 * ```
 * 
 * @class
 */
export
class SAI {
    /**
     * @summary `pLMNID`.
     * @description
     *
     * The PLMN Identity of the service area being reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.73.
     *
     * @public
     * @readonly
     */
    readonly pLMNID: PLMNID;
    /**
     * @summary `lAC`.
     * @description
     *
     * The Location Area Code of the service area being reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.73.
     *
     * @public
     * @readonly
     */
    readonly lAC: LAC;
    /**
     * @summary `sAC`.
     * @description
     *
     * The Service Area Code of the service area being reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.73.
     *
     * @public
     * @readonly
     */
    readonly sAC: SAC;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pLMNID: PLMNID,
        lAC: LAC,
        sAC: SAC,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pLMNID = pLMNID;
        this.lAC = lAC;
        this.sAC = sAC;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SAI
     * @description
     * 
     * This takes an `object` and converts it to a `SAI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SAI`.
     * @returns {SAI}
     */
    public static _from_object (_o: { [_K in keyof (SAI)]: (SAI)[_K] }): SAI {
        return new SAI(_o.pLMNID, _o.lAC, _o.sAC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SAI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lAC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sAC", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SAI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SAI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SAI: $.ASN1Decoder<SAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SAI (el: _Element): SAI {
    if (!_cached_decoder_for_SAI) { _cached_decoder_for_SAI = function (el: _Element): SAI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SAI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNID";
    sequence[1].name = "lAC";
    sequence[2].name = "sAC";
    let pLMNID!: PLMNID;
    let lAC!: LAC;
    let sAC!: SAC;
    pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    lAC = $._decode_implicit<LAC>(() => _decode_LAC)(sequence[1]);
    sAC = $._decode_implicit<SAC>(() => _decode_SAC)(sequence[2]);
    return new SAI(
        pLMNID,
        lAC,
        sAC,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_SAI(el);
}

let _cached_encoder_for_SAI: $.ASN1Encoder<SAI> | null = null;

/**
 * @summary Encodes a(n) SAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SAI, encoded as an ASN.1 Element.
 */
export
function _encode_SAI (value: SAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SAI) { _cached_encoder_for_SAI = function (value: SAI, elGetter: $.ASN1Encoder<SAI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LAC, $.BER)(value.lAC, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SAC, $.BER)(value.sAC, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SAI(value, elGetter);
}


/* eslint-enable */
