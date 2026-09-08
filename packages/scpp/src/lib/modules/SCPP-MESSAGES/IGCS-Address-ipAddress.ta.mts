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
 * @summary IGCS_Address_ipAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IGCS-Address-ipAddress ::= SEQUENCE {
 *     ip    OCTET STRING(SIZE (4)),
 *     port  INTEGER(0..65535)
 * }
 * ```
 * 
 * @class
 */
export
class IGCS_Address_ipAddress {
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
        if (this.ip.length !== 4) {
            throw new ASN1SizeError("IGCS_Address_ipAddress.ip violates SIZE constraint");
        }
        const _n = typeof this.port === "bigint" ? Number(this.port) : this.port;
        if (_n < 0 || _n > 65535) {
            throw new ASN1OverflowError("IGCS_Address_ipAddress.port violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a IGCS_Address_ipAddress
     * @description
     * 
     * This takes an `object` and converts it to a `IGCS_Address_ipAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IGCS_Address_ipAddress`.
     * @returns {IGCS_Address_ipAddress}
     */
    public static _from_object (_o: { [_K in keyof (IGCS_Address_ipAddress)]: (IGCS_Address_ipAddress)[_K] }): IGCS_Address_ipAddress {
        return new IGCS_Address_ipAddress(_o.ip, _o.port);
    }


}

/**
 * @summary The Leading Root Component Types of IGCS_Address_ipAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IGCS_Address_ipAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("ip", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("port", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IGCS_Address_ipAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IGCS_Address_ipAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IGCS_Address_ipAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IGCS_Address_ipAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IGCS_Address_ipAddress: $.ASN1Decoder<IGCS_Address_ipAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IGCS_Address_ipAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IGCS_Address_ipAddress (el: _Element): IGCS_Address_ipAddress {
    if (!_cached_decoder_for_IGCS_Address_ipAddress) { _cached_decoder_for_IGCS_Address_ipAddress = function (el: _Element): IGCS_Address_ipAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IGCS-Address-ipAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ip";
    sequence[1].name = "port";
    const ip = $._decodeOctetString(sequence[0]);
    const port = $._decodeInteger(sequence[1]);
    return new IGCS_Address_ipAddress(
        ip,
        port,

    );
}; }
    return _cached_decoder_for_IGCS_Address_ipAddress(el);
}

let _cached_encoder_for_IGCS_Address_ipAddress: $.ASN1Encoder<IGCS_Address_ipAddress> | null = null;

/**
 * @summary Encodes a(n) IGCS_Address_ipAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IGCS_Address_ipAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IGCS_Address_ipAddress (value: IGCS_Address_ipAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IGCS_Address_ipAddress) { _cached_encoder_for_IGCS_Address_ipAddress = function (value: IGCS_Address_ipAddress): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.ip, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.port, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IGCS_Address_ipAddress(value, elGetter);
}


/* eslint-enable */
