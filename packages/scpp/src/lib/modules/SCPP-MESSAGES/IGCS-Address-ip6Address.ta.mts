/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IGCS_Address_ip6Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IGCS-Address-ip6Address ::= SEQUENCE {
 *     ip    OCTET STRING(SIZE (16)),
 *     port  INTEGER(0..65535)
 * }
 * ```
 * 
 * @class
 */
export
class IGCS_Address_ip6Address {
    constructor (
        /**
         * @summary `ip`.
         * @public
         * @readonly
         */
        readonly ip: OCTET_STRING,
        /**
         * @summary `port`.
         * @public
         * @readonly
         */
        readonly port: INTEGER
    ) {
        if (this.ip.length !== 16) {
            throw new ASN1SizeError("IGCS_Address_ip6Address.ip violates SIZE constraint");
        }
        const _n = typeof this.port === "bigint" ? Number(this.port) : this.port;
        if (_n < 0 || _n > 65535) {
            throw new ASN1OverflowError("IGCS_Address_ip6Address.port violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a IGCS_Address_ip6Address
     * @description
     * 
     * This takes an `object` and converts it to a `IGCS_Address_ip6Address`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IGCS_Address_ip6Address`.
     * @returns {IGCS_Address_ip6Address}
     */
    public static _from_object (_o: { [_K in keyof (IGCS_Address_ip6Address)]: (IGCS_Address_ip6Address)[_K] }): IGCS_Address_ip6Address {
        return new IGCS_Address_ip6Address(_o.ip, _o.port);
    }


}

/**
 * @summary The Leading Root Component Types of IGCS_Address_ip6Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IGCS_Address_ip6Address: $.ComponentSpec[] = [
    new $.ComponentSpec("ip", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("port", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IGCS_Address_ip6Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IGCS_Address_ip6Address: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IGCS_Address_ip6Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IGCS_Address_ip6Address: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IGCS_Address_ip6Address: $.ASN1Decoder<IGCS_Address_ip6Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IGCS_Address_ip6Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IGCS_Address_ip6Address (el: _Element): IGCS_Address_ip6Address {
    if (!_cached_decoder_for_IGCS_Address_ip6Address) { _cached_decoder_for_IGCS_Address_ip6Address = function (el: _Element): IGCS_Address_ip6Address {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IGCS-Address-ip6Address contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ip";
    sequence[1].name = "port";
    const ip = $._decodeOctetString(sequence[0]);
    const port = $._decodeInteger(sequence[1]);
    return new IGCS_Address_ip6Address(
        ip,
        port,

    );
}; }
    return _cached_decoder_for_IGCS_Address_ip6Address(el);
}

let _cached_encoder_for_IGCS_Address_ip6Address: $.ASN1Encoder<IGCS_Address_ip6Address> | null = null;

/**
 * @summary Encodes a(n) IGCS_Address_ip6Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IGCS_Address_ip6Address, encoded as an ASN.1 Element.
 */
export
function _encode_IGCS_Address_ip6Address (value: IGCS_Address_ip6Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IGCS_Address_ip6Address) { _cached_encoder_for_IGCS_Address_ip6Address = function (value: IGCS_Address_ip6Address): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.ip, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.port, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IGCS_Address_ip6Address(value, elGetter);
}


/* eslint-enable */
