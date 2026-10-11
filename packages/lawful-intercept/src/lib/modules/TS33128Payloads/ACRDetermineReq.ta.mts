/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
// export { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
import { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";
// export { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";


/**
 * @summary ACRDetermineReq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRDetermineReq ::= SEQUENCE
 * {
 *     eASID           [1] EASID OPTIONAL,
 *     aCID            [2] ACID OPTIONAL,
 *     sEASEndpoint    [3] EASEndpoint
 * }
 * ```
 * 
 * @class
 */
export
class ACRDetermineReq {
    /**
     * @summary `eASID`.
     * @public
     * @readonly
     */
    readonly eASID: OPTIONAL<EASID>;
    /**
     * @summary `aCID`.
     * @public
     * @readonly
     */
    readonly aCID: OPTIONAL<ACID>;
    /**
     * @summary `sEASEndpoint`.
     * @public
     * @readonly
     */
    readonly sEASEndpoint: EASEndpoint;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eASID: OPTIONAL<EASID>,
        aCID: OPTIONAL<ACID>,
        sEASEndpoint: EASEndpoint,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eASID = eASID;
        this.aCID = aCID;
        this.sEASEndpoint = sEASEndpoint;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ACRDetermineReq
     * @description
     * 
     * This takes an `object` and converts it to a `ACRDetermineReq`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACRDetermineReq`.
     * @returns {ACRDetermineReq}
     */
    public static _from_object (_o: { [_K in keyof (ACRDetermineReq)]: (ACRDetermineReq)[_K] }): ACRDetermineReq {
        return new ACRDetermineReq(_o.eASID, _o.aCID, _o.sEASEndpoint, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ACRDetermineReq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ACRDetermineReq: $.ComponentSpec[] = [
    new $.ComponentSpec("eASID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sEASEndpoint", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ACRDetermineReq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ACRDetermineReq: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ACRDetermineReq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ACRDetermineReq: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ACRDetermineReq: $.ASN1Decoder<ACRDetermineReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACRDetermineReq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACRDetermineReq (el: _Element): ACRDetermineReq {
    if (!_cached_decoder_for_ACRDetermineReq) { _cached_decoder_for_ACRDetermineReq = function (el: _Element): ACRDetermineReq {
    let eASID: OPTIONAL<EASID>;
    let aCID: OPTIONAL<ACID>;
    let sEASEndpoint!: EASEndpoint;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eASID": (_el: _Element): void => { eASID = $._decode_implicit<EASID>(() => _decode_EASID)(_el); },
        "aCID": (_el: _Element): void => { aCID = $._decode_implicit<ACID>(() => _decode_ACID)(_el); },
        "sEASEndpoint": (_el: _Element): void => { sEASEndpoint = $._decode_implicit<EASEndpoint>(() => _decode_EASEndpoint)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ACRDetermineReq,
        _extension_additions_list_spec_for_ACRDetermineReq,
        _root_component_type_list_2_spec_for_ACRDetermineReq,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ACRDetermineReq(
        eASID,
        aCID,
        sEASEndpoint,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ACRDetermineReq(el);
}

let _cached_encoder_for_ACRDetermineReq: $.ASN1Encoder<ACRDetermineReq> | null = null;

/**
 * @summary Encodes a(n) ACRDetermineReq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACRDetermineReq, encoded as an ASN.1 Element.
 */
export
function _encode_ACRDetermineReq (value: ACRDetermineReq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACRDetermineReq) { _cached_encoder_for_ACRDetermineReq = function (value: ACRDetermineReq, elGetter: $.ASN1Encoder<ACRDetermineReq>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.eASID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASID, $.BER)(value.eASID, $.BER);
    }
    if (value.aCID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ACID, $.BER)(value.aCID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EASEndpoint, $.BER)(value.sEASEndpoint, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ACRDetermineReq(value, elGetter);
}


/* eslint-enable */
