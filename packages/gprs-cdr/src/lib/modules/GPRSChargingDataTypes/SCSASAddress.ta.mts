/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";


/**
 * @summary SCSASAddress
 * @description
 * 
 * Address of the SCS/AS used for SGi point-to-point tunnelling of a Non-IP
 * PDN connection (tables 6.1.3.1 and 6.3.1.2.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSASAddress ::= SET {
 *    sCSAddress   [1] GSNAddress,
 *    sCSRealm     [2] IMPLICIT OCTET STRING}
 * ```
 * 
 * @class
 */
export
class SCSASAddress {
    /**
     * @summary `sCSAddress`.
     * @public
     * @readonly
     */
    readonly sCSAddress: GSNAddress;
    /**
     * @summary `sCSRealm`.
     * @public
     * @readonly
     */
    readonly sCSRealm: OCTET_STRING;

    constructor (
        sCSAddress: GSNAddress,
        sCSRealm: OCTET_STRING
    ) {
        this.sCSAddress = sCSAddress;
        this.sCSRealm = sCSRealm;
    }

    /**
     * @summary Restructures an object into a SCSASAddress
     * @description
     * 
     * This takes an `object` and converts it to a `SCSASAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCSASAddress`.
     * @returns {SCSASAddress}
     */
    public static _from_object (_o: { [_K in keyof (SCSASAddress)]: (SCSASAddress)[_K] }): SCSASAddress {
        return new SCSASAddress(_o.sCSAddress, _o.sCSRealm);
    }


}

/**
 * @summary The Leading Root Component Types of SCSASAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCSASAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("sCSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sCSRealm", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SCSASAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCSASAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCSASAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCSASAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCSASAddress: $.ASN1Decoder<SCSASAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCSASAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCSASAddress (el: _Element): SCSASAddress {
    if (!_cached_decoder_for_SCSASAddress) { _cached_decoder_for_SCSASAddress = function (el: _Element): SCSASAddress {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let sCSAddress!: GSNAddress;
    let sCSRealm!: OCTET_STRING;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sCSAddress": (_el: _Element): void => { sCSAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "sCSRealm": (_el: _Element): void => { sCSRealm = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SCSASAddress,
        _extension_additions_list_spec_for_SCSASAddress,
        _root_component_type_list_2_spec_for_SCSASAddress,
        undefined,
    );
    return new SCSASAddress( /* SET_CONSTRUCTOR_CALL */
        sCSAddress,
        sCSRealm
    );
}; }
    return _cached_decoder_for_SCSASAddress(el);
}

let _cached_encoder_for_SCSASAddress: $.ASN1Encoder<SCSASAddress> | null = null;

/**
 * @summary Encodes a(n) SCSASAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCSASAddress, encoded as an ASN.1 Element.
 */
export
function _encode_SCSASAddress (value: SCSASAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCSASAddress) { _cached_encoder_for_SCSASAddress = function (value: SCSASAddress, _elGetter: $.ASN1Encoder<SCSASAddress>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GSNAddress, $.BER)(value.sCSAddress, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sCSRealm, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SCSASAddress(value, elGetter);
}


/* eslint-enable */
