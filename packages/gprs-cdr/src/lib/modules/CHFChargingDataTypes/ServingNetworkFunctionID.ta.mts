/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NetworkFunctionInformation, _decode_NetworkFunctionInformation, _encode_NetworkFunctionInformation } from "../CHFChargingDataTypes/NetworkFunctionInformation.ta.mjs";


/**
 * @summary ServingNetworkFunctionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingNetworkFunctionID ::= SEQUENCE {
 *    servingNetworkFunctionInformation   [0] IMPLICIT NetworkFunctionInformation,
 *    aMFIdentifier                       [1] IMPLICIT OCTET STRING ( SIZE( 6 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ServingNetworkFunctionID {
    /**
     * @summary `servingNetworkFunctionInformation`.
     * @public
     * @readonly
     */
    readonly servingNetworkFunctionInformation: NetworkFunctionInformation;
    /**
     * @summary `aMFIdentifier`.
     * @public
     * @readonly
     */
    readonly aMFIdentifier: OPTIONAL<OCTET_STRING>;

    constructor (
        servingNetworkFunctionInformation: NetworkFunctionInformation,
        aMFIdentifier: OPTIONAL<OCTET_STRING>
    ) {
        this.servingNetworkFunctionInformation = servingNetworkFunctionInformation;
        this.aMFIdentifier = aMFIdentifier;
    
        if (this.aMFIdentifier !== undefined && (this.aMFIdentifier.length !== 6)) {
            throw new ASN1SizeError("ServingNetworkFunctionID.aMFIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ServingNetworkFunctionID
     * @description
     * 
     * This takes an `object` and converts it to a `ServingNetworkFunctionID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServingNetworkFunctionID`.
     * @returns {ServingNetworkFunctionID}
     */
    public static _from_object (_o: { [_K in keyof (ServingNetworkFunctionID)]: (ServingNetworkFunctionID)[_K] }): ServingNetworkFunctionID {
        return new ServingNetworkFunctionID(_o.servingNetworkFunctionInformation, _o.aMFIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of ServingNetworkFunctionID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServingNetworkFunctionID: $.ComponentSpec[] = [
    new $.ComponentSpec("servingNetworkFunctionInformation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aMFIdentifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServingNetworkFunctionID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServingNetworkFunctionID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServingNetworkFunctionID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServingNetworkFunctionID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServingNetworkFunctionID: $.ASN1Decoder<ServingNetworkFunctionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServingNetworkFunctionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServingNetworkFunctionID (el: _Element): ServingNetworkFunctionID {
    if (!_cached_decoder_for_ServingNetworkFunctionID) { _cached_decoder_for_ServingNetworkFunctionID = function (el: _Element): ServingNetworkFunctionID {
    let servingNetworkFunctionInformation!: NetworkFunctionInformation;
    let aMFIdentifier: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "servingNetworkFunctionInformation": (_el: _Element): void => { servingNetworkFunctionInformation = $._decode_implicit<NetworkFunctionInformation>(() => _decode_NetworkFunctionInformation)(_el); },
        "aMFIdentifier": (_el: _Element): void => { aMFIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServingNetworkFunctionID,
        _extension_additions_list_spec_for_ServingNetworkFunctionID,
        _root_component_type_list_2_spec_for_ServingNetworkFunctionID,
        undefined,
    );
    return new ServingNetworkFunctionID(
        servingNetworkFunctionInformation,
        aMFIdentifier
    );
}; }
    return _cached_decoder_for_ServingNetworkFunctionID(el);
}

let _cached_encoder_for_ServingNetworkFunctionID: $.ASN1Encoder<ServingNetworkFunctionID> | null = null;

/**
 * @summary Encodes a(n) ServingNetworkFunctionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServingNetworkFunctionID, encoded as an ASN.1 Element.
 */
export
function _encode_ServingNetworkFunctionID (value: ServingNetworkFunctionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServingNetworkFunctionID) { _cached_encoder_for_ServingNetworkFunctionID = function (value: ServingNetworkFunctionID, _elGetter: $.ASN1Encoder<ServingNetworkFunctionID>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_NetworkFunctionInformation, $.BER)(value.servingNetworkFunctionInformation, $.BER));
    if (value.aMFIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.aMFIdentifier, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServingNetworkFunctionID(value, elGetter);
}


/* eslint-enable */
