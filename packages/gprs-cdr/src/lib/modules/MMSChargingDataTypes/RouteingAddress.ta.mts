/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RouteingAddress
 * @description
 *
 * The field contains a recipient address for routeing of a multimedia
 * message. For a complete description of the routeing address, refer to TS
 * 29.140 [218].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.49.
 *
 * Recipient address for which routing of the MM is requested in
 * MM4_forward.REQ. Category M on the O4FRq-CDR table, which allows more
 * than one such address. The O4FRq record in this module does not include
 * that component. The address is an email address, an MSISDN, or a short
 * code.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingAddress ::= SEQUENCE {
 *    eMail-address   [0] IMPLICIT OCTET STRING,
 *    mSISDN          [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    shortCode       [2] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RouteingAddress {
    /**
     * @summary `eMail_address`.
     * @description
     *
     * Email form of the recipient address for which routing is requested.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly eMail_address: OCTET_STRING;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * MSISDN form of the recipient address for which routing is requested.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `shortCode`.
     * @description
     *
     * Short-code form of the recipient address for which routing is requested.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly shortCode: OPTIONAL<OCTET_STRING>;

    constructor (
        eMail_address: OCTET_STRING,
        mSISDN?: OPTIONAL<OCTET_STRING>,
        shortCode?: OPTIONAL<OCTET_STRING>
    ) {
        this.eMail_address = eMail_address;
        this.mSISDN = mSISDN;
        this.shortCode = shortCode;
    
        if (this.mSISDN !== undefined && (this.mSISDN.length < 1 || this.mSISDN.length > 9)) {
            throw new ASN1SizeError("RouteingAddress.mSISDN violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a RouteingAddress
     * @description
     * 
     * This takes an `object` and converts it to a `RouteingAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteingAddress`.
     * @returns {RouteingAddress}
     */
    public static _from_object (_o: { [_K in keyof (RouteingAddress)]: (RouteingAddress)[_K] }): RouteingAddress {
        return new RouteingAddress(_o.eMail_address, _o.mSISDN, _o.shortCode);
    }


}

/**
 * @summary The Leading Root Component Types of RouteingAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteingAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("eMail-address", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("shortCode", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RouteingAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteingAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteingAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteingAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteingAddress: $.ASN1Decoder<RouteingAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingAddress (el: _Element): RouteingAddress {
    if (!_cached_decoder_for_RouteingAddress) { _cached_decoder_for_RouteingAddress = function (el: _Element): RouteingAddress {
    let eMail_address!: OCTET_STRING;
    let mSISDN: OPTIONAL<OCTET_STRING>;
    let shortCode: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "eMail-address": (_el: _Element): void => { eMail_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "shortCode": (_el: _Element): void => { shortCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteingAddress,
        _extension_additions_list_spec_for_RouteingAddress,
        _root_component_type_list_2_spec_for_RouteingAddress,
        undefined,
    );
    return new RouteingAddress(
        eMail_address,
        mSISDN,
        shortCode
    );
}; }
    return _cached_decoder_for_RouteingAddress(el);
}

let _cached_encoder_for_RouteingAddress: $.ASN1Encoder<RouteingAddress> | null = null;

/**
 * @summary Encodes a(n) RouteingAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingAddress, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingAddress (value: RouteingAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingAddress) { _cached_encoder_for_RouteingAddress = function (value: RouteingAddress, _elGetter: $.ASN1Encoder<RouteingAddress>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.eMail_address, $.BER));
    if (value.mSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.mSISDN, $.BER));
    }
    if (value.shortCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.shortCode, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RouteingAddress(value, elGetter);
}


/* eslint-enable */
