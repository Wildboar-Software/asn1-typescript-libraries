/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
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
    constructor (
        /**
         * @summary `tEID`.
         * @public
         * @readonly
         */
        readonly tEID: INTEGER,
        /**
         * @summary `iPv4Address`.
         * @public
         * @readonly
         */
        readonly iPv4Address: OPTIONAL<IPv4Address>,
        /**
         * @summary `iPv6Address`.
         * @public
         * @readonly
         */
        readonly iPv6Address: OPTIONAL<IPv6Address>
    ) {}

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
        return new FTEID(_o.tEID, _o.iPv4Address, _o.iPv6Address);
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
    const callbacks: $.DecodingMap = {
        "tEID": (_el: _Element): void => { tEID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iPv4Address": (_el: _Element): void => { iPv4Address = $._decode_implicit<IPv4Address>(() => _decode_IPv4Address)(_el); },
        "iPv6Address": (_el: _Element): void => { iPv6Address = $._decode_implicit<IPv6Address>(() => _decode_IPv6Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FTEID,
        _extension_additions_list_spec_for_FTEID,
        _root_component_type_list_2_spec_for_FTEID,
        undefined,
    );
    return new FTEID(
        tEID,
        iPv4Address,
        iPv6Address
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tEID, $.BER),
            /* IF_ABSENT  */ ((value.iPv4Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IPv4Address, $.BER)(value.iPv4Address, $.BER)),
            /* IF_ABSENT  */ ((value.iPv6Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IPv6Address, $.BER)(value.iPv6Address, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FTEID(value, elGetter);
}


/* eslint-enable */
