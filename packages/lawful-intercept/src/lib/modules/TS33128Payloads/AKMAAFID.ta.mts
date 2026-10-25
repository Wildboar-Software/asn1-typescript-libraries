/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
import { type UAProtocolID, _decode_UAProtocolID, _encode_UAProtocolID } from "../TS33128Payloads/UAProtocolID.ta.mjs";
// export { UAProtocolID, _decode_UAProtocolID, _encode_UAProtocolID } from "../TS33128Payloads/UAProtocolID.ta.mjs";


/**
 * @summary AKMAAFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AKMAAFID ::= SEQUENCE
 * {
 *     aFFQDN                [1] FQDN,
 *     uaProtocolID          [2] UAProtocolID
 * }
 * ```
 * 
 * @class
 */
export
class AKMAAFID {
    /**
     * @summary `aFFQDN`.
     * @public
     * @readonly
     */
    readonly aFFQDN: FQDN;
    /**
     * @summary `uaProtocolID`.
     * @public
     * @readonly
     */
    readonly uaProtocolID: UAProtocolID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aFFQDN: FQDN,
        uaProtocolID: UAProtocolID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aFFQDN = aFFQDN;
        this.uaProtocolID = uaProtocolID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AKMAAFID
     * @description
     * 
     * This takes an `object` and converts it to a `AKMAAFID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AKMAAFID`.
     * @returns {AKMAAFID}
     */
    public static _from_object (_o: { [_K in keyof (AKMAAFID)]: (AKMAAFID)[_K] }): AKMAAFID {
        return new AKMAAFID(_o.aFFQDN, _o.uaProtocolID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AKMAAFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AKMAAFID: $.ComponentSpec[] = [
    new $.ComponentSpec("aFFQDN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uaProtocolID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AKMAAFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AKMAAFID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AKMAAFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AKMAAFID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AKMAAFID: $.ASN1Decoder<AKMAAFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AKMAAFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AKMAAFID (el: _Element): AKMAAFID {
    if (!_cached_decoder_for_AKMAAFID) { _cached_decoder_for_AKMAAFID = function (el: _Element): AKMAAFID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AKMAAFID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFFQDN";
    sequence[1].name = "uaProtocolID";
    let aFFQDN!: FQDN;
    let uaProtocolID!: UAProtocolID;
    aFFQDN = $._decode_implicit<FQDN>(() => _decode_FQDN)(sequence[0]);
    uaProtocolID = $._decode_implicit<UAProtocolID>(() => _decode_UAProtocolID)(sequence[1]);
    return new AKMAAFID(
        aFFQDN,
        uaProtocolID,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AKMAAFID(el);
}

let _cached_encoder_for_AKMAAFID: $.ASN1Encoder<AKMAAFID> | null = null;

/**
 * @summary Encodes a(n) AKMAAFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AKMAAFID, encoded as an ASN.1 Element.
 */
export
function _encode_AKMAAFID (value: AKMAAFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AKMAAFID) { _cached_encoder_for_AKMAAFID = function (value: AKMAAFID, elGetter: $.ASN1Encoder<AKMAAFID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FQDN, $.BER)(value.aFFQDN, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_UAProtocolID, $.BER)(value.uaProtocolID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AKMAAFID(value, elGetter);
}


/* eslint-enable */
