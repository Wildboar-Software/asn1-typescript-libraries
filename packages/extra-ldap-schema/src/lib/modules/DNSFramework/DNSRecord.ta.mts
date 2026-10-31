/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DNS_RR_Type, _decode_DNS_RR_Type, _encode_DNS_RR_Type } from "../DNSFramework/DNS-RR-Type.ta.mjs";
// export { DNS_RR_Type, _decode_DNS_RR_Type, _encode_DNS_RR_Type } from "../DNSFramework/DNS-RR-Type.ta.mjs";
import { type DNSClass, _decode_DNSClass, _encode_DNSClass } from "../DNSFramework/DNSClass.ta.mjs";
// export { DNSClass, _decode_DNSClass, _encode_DNSClass } from "../DNSFramework/DNSClass.ta.mjs";
import { type TTL, _decode_TTL, _encode_TTL } from "../DNSFramework/TTL.ta.mjs";
// export { TTL, _decode_TTL, _encode_TTL } from "../DNSFramework/TTL.ta.mjs";


/**
 * @summary DNSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNSRecord ::= SEQUENCE {
 *     / * Though the DNS wire format does not include the type first, this syntax
 *     does so that the existing integerFirstComponentMatch matching rule can be
 *     used to select DNS record types. * /
 *     type    DNS-RR-Type,
 *     class   DNSClass,
 *     ttl     TTL,
 *     data    OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class DNSRecord {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: DNS_RR_Type;
    /**
     * @summary `class_`.
     * @public
     * @readonly
     */
    readonly class_: DNSClass;
    /**
     * @summary `ttl`.
     * @public
     * @readonly
     */
    readonly ttl: TTL;
    /**
     * @summary `data`.
     * @public
     * @readonly
     */
    readonly data: OCTET_STRING;

    constructor (
        type_: DNS_RR_Type,
        class_: DNSClass,
        ttl: TTL,
        data: OCTET_STRING
    ) {
        this.type_ = type_;
        this.class_ = class_;
        this.ttl = ttl;
        this.data = data;
    }

    /**
     * @summary Restructures an object into a DNSRecord
     * @description
     * 
     * This takes an `object` and converts it to a `DNSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNSRecord`.
     * @returns {DNSRecord}
     */
    public static _from_object (_o: { [_K in keyof (DNSRecord)]: (DNSRecord)[_K] }): DNSRecord {
        return new DNSRecord(_o.type_, _o.class_, _o.ttl, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of DNSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("ttl", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("data", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of DNSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNSRecord: $.ASN1Decoder<DNSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNSRecord (el: _Element): DNSRecord {
    if (!_cached_decoder_for_DNSRecord) { _cached_decoder_for_DNSRecord = function (el: _Element): DNSRecord {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("DNSRecord contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "class";
    sequence[2].name = "ttl";
    sequence[3].name = "data";
    let type_!: DNS_RR_Type;
    let class_!: DNSClass;
    let ttl!: TTL;
    let data!: OCTET_STRING;
    type_ = _decode_DNS_RR_Type(sequence[0]);
    class_ = _decode_DNSClass(sequence[1]);
    ttl = _decode_TTL(sequence[2]);
    data = $._decodeOctetString(sequence[3]);
    return new DNSRecord(
        type_,
        class_,
        ttl,
        data,

    );
}; }
    return _cached_decoder_for_DNSRecord(el);
}

let _cached_encoder_for_DNSRecord: $.ASN1Encoder<DNSRecord> | null = null;

/**
 * @summary Encodes a(n) DNSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_DNSRecord (value: DNSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNSRecord) { _cached_encoder_for_DNSRecord = function (value: DNSRecord, elGetter: $.ASN1Encoder<DNSRecord>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_DNS_RR_Type(value.type_, $.BER),
        /* REQUIRED   */ _encode_DNSClass(value.class_, $.BER),
        /* REQUIRED   */ _encode_TTL(value.ttl, $.BER),
        /* REQUIRED   */ $._encodeOctetString(value.data, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_DNSRecord(value, elGetter);
}


/* eslint-enable */
