/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";
// export { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";


/**
 * @summary PLMNLocation
 * @description
 * 
 * The PLMNLocation type is derived from the data present in the PlmnLocation
 * type defined in TS 29.571 [17] clause 5.4.4.99.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.86.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNLocation ::= SEQUENCE
 * {
 *     pLMNID                       [1] PLMNID,
 *     nID                          [2] NID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PLMNLocation {
    /**
     * @summary `pLMNID`.
     * @description
     *
     * The PLMN Identity is composed of the Mobile Country Code (MCC) and Mobile
     * Network Code (MNC).
     *
     * 3GPP TS 33.128, clause 7.3.3.2.86.
     *
     * @public
     * @readonly
     */
    readonly pLMNID: PLMNID;
    /**
     * @summary `nID`.
     * @description
     *
     * The Network Identifier. Shall be present if the PLMN is an SNPN.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.86.
     *
     * @public
     * @readonly
     */
    readonly nID: OPTIONAL<NID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pLMNID: PLMNID,
        nID: OPTIONAL<NID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pLMNID = pLMNID;
        this.nID = nID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PLMNLocation
     * @description
     * 
     * This takes an `object` and converts it to a `PLMNLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PLMNLocation`.
     * @returns {PLMNLocation}
     */
    public static _from_object (_o: { [_K in keyof (PLMNLocation)]: (PLMNLocation)[_K] }): PLMNLocation {
        return new PLMNLocation(_o.pLMNID, _o.nID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PLMNLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PLMNLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PLMNLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PLMNLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PLMNLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PLMNLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PLMNLocation: $.ASN1Decoder<PLMNLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNLocation (el: _Element): PLMNLocation {
    if (!_cached_decoder_for_PLMNLocation) { _cached_decoder_for_PLMNLocation = function (el: _Element): PLMNLocation {
    let pLMNID!: PLMNID;
    let nID: OPTIONAL<NID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "nID": (_el: _Element): void => { nID = $._decode_implicit<NID>(() => _decode_NID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PLMNLocation,
        _extension_additions_list_spec_for_PLMNLocation,
        _root_component_type_list_2_spec_for_PLMNLocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PLMNLocation(
        pLMNID,
        nID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PLMNLocation(el);
}

let _cached_encoder_for_PLMNLocation: $.ASN1Encoder<PLMNLocation> | null = null;

/**
 * @summary Encodes a(n) PLMNLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNLocation, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNLocation (value: PLMNLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNLocation) { _cached_encoder_for_PLMNLocation = function (value: PLMNLocation, elGetter: $.ASN1Encoder<PLMNLocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER);
    if (value.nID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_NID, $.BER)(value.nID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PLMNLocation(value, elGetter);
}


/* eslint-enable */
