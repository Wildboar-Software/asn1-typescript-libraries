/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkSliceInstanceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkSliceInstanceID ::= SEQUENCE {
 *    sST        [0] IMPLICIT INTEGER ( 0 .. 255 ),
 *    sD         [1] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class NetworkSliceInstanceID {
    /**
     * @summary `sST`.
     * @public
     * @readonly
     */
    readonly sST: INTEGER;
    /**
     * @summary `sD`.
     * @public
     * @readonly
     */
    readonly sD: OPTIONAL<OCTET_STRING>;

    constructor (
        sST: INTEGER,
        sD: OPTIONAL<OCTET_STRING>
    ) {
        this.sST = sST;
        this.sD = sD;
    
        if (((typeof this.sST === "bigint" ? Number(this.sST) : this.sST) < 0 || (typeof this.sST === "bigint" ? Number(this.sST) : this.sST) > 255)) {
            throw new ASN1OverflowError("NetworkSliceInstanceID.sST violates INTEGER range");
        }
        if (this.sD !== undefined && (this.sD.length !== 3)) {
            throw new ASN1SizeError("NetworkSliceInstanceID.sD violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a NetworkSliceInstanceID
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkSliceInstanceID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkSliceInstanceID`.
     * @returns {NetworkSliceInstanceID}
     */
    public static _from_object (_o: { [_K in keyof (NetworkSliceInstanceID)]: (NetworkSliceInstanceID)[_K] }): NetworkSliceInstanceID {
        return new NetworkSliceInstanceID(_o.sST, _o.sD);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkSliceInstanceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkSliceInstanceID: $.ComponentSpec[] = [
    new $.ComponentSpec("sST", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sD", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NetworkSliceInstanceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkSliceInstanceID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkSliceInstanceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkSliceInstanceID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkSliceInstanceID: $.ASN1Decoder<NetworkSliceInstanceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkSliceInstanceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkSliceInstanceID (el: _Element): NetworkSliceInstanceID {
    if (!_cached_decoder_for_NetworkSliceInstanceID) { _cached_decoder_for_NetworkSliceInstanceID = function (el: _Element): NetworkSliceInstanceID {
    let sST!: INTEGER;
    let sD: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sST": (_el: _Element): void => { sST = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sD": (_el: _Element): void => { sD = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkSliceInstanceID,
        _extension_additions_list_spec_for_NetworkSliceInstanceID,
        _root_component_type_list_2_spec_for_NetworkSliceInstanceID,
        undefined,
    );
    return new NetworkSliceInstanceID(
        sST,
        sD
    );
}; }
    return _cached_decoder_for_NetworkSliceInstanceID(el);
}

let _cached_encoder_for_NetworkSliceInstanceID: $.ASN1Encoder<NetworkSliceInstanceID> | null = null;

/**
 * @summary Encodes a(n) NetworkSliceInstanceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkSliceInstanceID, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkSliceInstanceID (value: NetworkSliceInstanceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkSliceInstanceID) { _cached_encoder_for_NetworkSliceInstanceID = function (value: NetworkSliceInstanceID, _elGetter: $.ASN1Encoder<NetworkSliceInstanceID>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.sST, $.BER));
    if (value.sD !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sD, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NetworkSliceInstanceID(value, elGetter);
}


/* eslint-enable */
