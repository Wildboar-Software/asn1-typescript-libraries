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
import { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
import { UAProtocolID, _decode_UAProtocolID, _encode_UAProtocolID } from "../TS33128Payloads/UAProtocolID.ta.mjs";
// export { UAProtocolID, _decode_UAProtocolID, _encode_UAProtocolID } from "../TS33128Payloads/UAProtocolID.ta.mjs";


/**
 * @summary AKMAAFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AKMAAFID ::= SEQUENCE
 * {
 *     aFFQDN                [1] FQDN,
 *     uaProtocolID          [2] UAProtocolID
 * }
 * ```
 * 
 * @class
 */
export
class AKMAAFID {
    constructor (
        /**
         * @summary `aFFQDN`.
         * @public
         * @readonly
         */
        readonly aFFQDN: FQDN,
        /**
         * @summary `uaProtocolID`.
         * @public
         * @readonly
         */
        readonly uaProtocolID: UAProtocolID
    ) {}

    /**
     * @summary Restructures an object into a AKMAAFID
     * @description
     * 
     * This takes an `object` and converts it to a `AKMAAFID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AKMAAFID`.
     * @returns {AKMAAFID}
     */
    public static _from_object (_o: { [_K in keyof (AKMAAFID)]: (AKMAAFID)[_K] }): AKMAAFID {
        return new AKMAAFID(_o.aFFQDN, _o.uaProtocolID);
    }


}

/**
 * @summary The Leading Root Component Types of AKMAAFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AKMAAFID: $.ComponentSpec[] = [
    new $.ComponentSpec("aFFQDN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uaProtocolID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AKMAAFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AKMAAFID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AKMAAFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AKMAAFID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AKMAAFID: $.ASN1Decoder<AKMAAFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AKMAAFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AKMAAFID (el: _Element): AKMAAFID {
    if (!_cached_decoder_for_AKMAAFID) { _cached_decoder_for_AKMAAFID = function (el: _Element): AKMAAFID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AKMAAFID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFFQDN";
    sequence[1].name = "uaProtocolID";
    let aFFQDN!: FQDN;
    let uaProtocolID!: UAProtocolID;
    aFFQDN = $._decode_implicit<FQDN>(() => _decode_FQDN)(sequence[0]);
    uaProtocolID = $._decode_implicit<UAProtocolID>(() => _decode_UAProtocolID)(sequence[1]);
    return new AKMAAFID(
        aFFQDN,
        uaProtocolID,

    );
}; }
    return _cached_decoder_for_AKMAAFID(el);
}

let _cached_encoder_for_AKMAAFID: $.ASN1Encoder<AKMAAFID> | null = null;

/**
 * @summary Encodes a(n) AKMAAFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AKMAAFID, encoded as an ASN.1 Element.
 */
export
function _encode_AKMAAFID (value: AKMAAFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AKMAAFID) { _cached_encoder_for_AKMAAFID = function (value: AKMAAFID, elGetter: $.ASN1Encoder<AKMAAFID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FQDN, $.BER)(value.aFFQDN, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_UAProtocolID, $.BER)(value.uaProtocolID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AKMAAFID(value, elGetter);
}


/* eslint-enable */
