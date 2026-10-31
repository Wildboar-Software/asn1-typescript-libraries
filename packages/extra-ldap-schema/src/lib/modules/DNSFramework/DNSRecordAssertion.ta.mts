/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
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
 * @summary DNSRecordAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNSRecordAssertion ::= SEQUENCE {
 *     type    DNS-RR-Type OPTIONAL,
 *     class   [0] DNSClass OPTIONAL,
 *     ttl     [1] TTL OPTIONAL,
 *     data    OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DNSRecordAssertion {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: OPTIONAL<DNS_RR_Type>;
    /**
     * @summary `class_`.
     * @public
     * @readonly
     */
    readonly class_: OPTIONAL<DNSClass>;
    /**
     * @summary `ttl`.
     * @public
     * @readonly
     */
    readonly ttl: OPTIONAL<TTL>;
    /**
     * @summary `data`.
     * @public
     * @readonly
     */
    readonly data: OPTIONAL<OCTET_STRING>;

    constructor (
        type_?: OPTIONAL<DNS_RR_Type>,
        class_?: OPTIONAL<DNSClass>,
        ttl?: OPTIONAL<TTL>,
        data?: OPTIONAL<OCTET_STRING>
    ) {
        this.type_ = type_;
        this.class_ = class_;
        this.ttl = ttl;
        this.data = data;
    }

    /**
     * @summary Restructures an object into a DNSRecordAssertion
     * @description
     * 
     * This takes an `object` and converts it to a `DNSRecordAssertion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNSRecordAssertion`.
     * @returns {DNSRecordAssertion}
     */
    public static _from_object (_o: { [_K in keyof (DNSRecordAssertion)]: (DNSRecordAssertion)[_K] }): DNSRecordAssertion {
        return new DNSRecordAssertion(_o.type_, _o.class_, _o.ttl, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of DNSRecordAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNSRecordAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("class", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ttl", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("data", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of DNSRecordAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNSRecordAssertion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNSRecordAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNSRecordAssertion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNSRecordAssertion: $.ASN1Decoder<DNSRecordAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNSRecordAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNSRecordAssertion (el: _Element): DNSRecordAssertion {
    if (!_cached_decoder_for_DNSRecordAssertion) { _cached_decoder_for_DNSRecordAssertion = function (el: _Element): DNSRecordAssertion {
    let type_: OPTIONAL<DNS_RR_Type>;
    let class_: OPTIONAL<DNSClass>;
    let ttl: OPTIONAL<TTL>;
    let data: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = _decode_DNS_RR_Type(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_explicit<DNSClass>(() => _decode_DNSClass)(_el); },
        "ttl": (_el: _Element): void => { ttl = $._decode_explicit<TTL>(() => _decode_TTL)(_el); },
        "data": (_el: _Element): void => { data = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNSRecordAssertion,
        _extension_additions_list_spec_for_DNSRecordAssertion,
        _root_component_type_list_2_spec_for_DNSRecordAssertion,
        undefined,
    );
    return new DNSRecordAssertion(
        type_,
        class_,
        ttl,
        data
    );
}; }
    return _cached_decoder_for_DNSRecordAssertion(el);
}

let _cached_encoder_for_DNSRecordAssertion: $.ASN1Encoder<DNSRecordAssertion> | null = null;

/**
 * @summary Encodes a(n) DNSRecordAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNSRecordAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_DNSRecordAssertion (value: DNSRecordAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNSRecordAssertion) { _cached_encoder_for_DNSRecordAssertion = function (value: DNSRecordAssertion, elGetter: $.ASN1Encoder<DNSRecordAssertion>): _Element {
    const _components: _Element[] = [];
    if (value.type_ !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNS_RR_Type(value.type_, $.BER));
    }
    if (value.class_ !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_DNSClass, $.BER)(value.class_, $.BER));
    }
    if (value.ttl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_TTL, $.BER)(value.ttl, $.BER));
    }
    if (value.data !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeOctetString(value.data, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNSRecordAssertion(value, elGetter);
}


/* eslint-enable */
