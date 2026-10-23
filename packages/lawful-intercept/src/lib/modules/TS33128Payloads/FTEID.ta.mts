/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";


/**
 * @summary FTEID
 * @description
 * 
 * Contains the F-TEID identifying the UPF endpoint of the GTP tunnel used to
 * encapsulate the traffic derived from the UL NG-U UP TNL Information (see TS
 * 38.413 clause 9.3.4.1), as defined in TS 29.244 [15] clause 8.2.3. Non-GTP
 * encapsulation is for further study.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FTEID ::= SEQUENCE
 * {
 *     tEID        [1] INTEGER (0.. 4294967295),
 *     iPv4Address [2] IPv4Address OPTIONAL,
 *     iPv6Address [3] IPv6Address OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FTEID {
    /**
     * @summary `tEID`.
     * @public
     * @readonly
     */
    readonly tEID: INTEGER;
    /**
     * @summary `iPv4Address`.
     * @public
     * @readonly
     */
    readonly iPv4Address: OPTIONAL<IPv4Address>;
    /**
     * @summary `iPv6Address`.
     * @public
     * @readonly
     */
    readonly iPv6Address: OPTIONAL<IPv6Address>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        tEID: INTEGER,
        iPv4Address?: OPTIONAL<IPv4Address>,
        iPv6Address?: OPTIONAL<IPv6Address>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.tEID = tEID;
        this.iPv4Address = iPv4Address;
        this.iPv6Address = iPv6Address;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FTEID
     * @description
     * 
     * This takes an `object` and converts it to a `FTEID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FTEID`.
     * @returns {FTEID}
     */
    public static _from_object (_o: { [_K in keyof (FTEID)]: (FTEID)[_K] }): FTEID {
        return new FTEID(_o.tEID, _o.iPv4Address, _o.iPv6Address, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FTEID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FTEID: $.ComponentSpec[] = [
    new $.ComponentSpec("tEID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPv4Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iPv6Address", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FTEID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FTEID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FTEID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FTEID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FTEID: $.ASN1Decoder<FTEID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FTEID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FTEID (el: _Element): FTEID {
    if (!_cached_decoder_for_FTEID) { _cached_decoder_for_FTEID = function (el: _Element): FTEID {
    let tEID!: INTEGER;
    let iPv4Address: OPTIONAL<IPv4Address>;
    let iPv6Address: OPTIONAL<IPv6Address>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tEID": (_el: _Element): void => {
            tEID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof tEID === "bigint" ? tEID : BigInt(tEID);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("FTEID.tEID violates INTEGER range");
            }
        },
        "iPv4Address": (_el: _Element): void => { iPv4Address = $._decode_implicit<IPv4Address>(() => _decode_IPv4Address)(_el); },
        "iPv6Address": (_el: _Element): void => { iPv6Address = $._decode_implicit<IPv6Address>(() => _decode_IPv6Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FTEID,
        _extension_additions_list_spec_for_FTEID,
        _root_component_type_list_2_spec_for_FTEID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FTEID(
        tEID,
        iPv4Address,
        iPv6Address,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FTEID(el);
}

let _cached_encoder_for_FTEID: $.ASN1Encoder<FTEID> | null = null;

/**
 * @summary Encodes a(n) FTEID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FTEID, encoded as an ASN.1 Element.
 */
export
function _encode_FTEID (value: FTEID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FTEID) { _cached_encoder_for_FTEID = function (value: FTEID, elGetter: $.ASN1Encoder<FTEID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tEID, $.BER);
    if (value.iPv4Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IPv4Address, $.BER)(value.iPv4Address, $.BER);
    }
    if (value.iPv6Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPv6Address, $.BER)(value.iPv6Address, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FTEID(value, elGetter);
}


/* eslint-enable */
