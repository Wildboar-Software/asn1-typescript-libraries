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
import { HLR_Id, _decode_HLR_Id, _encode_HLR_Id } from "../MAP-CommonDataTypes/HLR-Id.ta.mjs";
// export { HLR_Id, _decode_HLR_Id, _encode_HLR_Id } from "../MAP-CommonDataTypes/HLR-Id.ta.mjs";
import { SIP_URI, _decode_SIP_URI, _encode_SIP_URI } from "../MAP-SM-DataTypes/SIP-URI.ta.mjs";
// export { SIP_URI, _decode_SIP_URI, _encode_SIP_URI } from "../MAP-SM-DataTypes/SIP-URI.ta.mjs";


/**
 * @summary CorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationID ::= SEQUENCE {
 *     hlr-id    [0] HLR-Id    OPTIONAL,
 *     sip-uri-A    [1] SIP-URI    OPTIONAL,
 *     sip-uri-B    [2] SIP-URI}
 * ```
 * 
 * @class
 */
export
class CorrelationID {
    constructor (
        /**
         * @summary `hlr_id`.
         * @public
         * @readonly
         */
        readonly hlr_id: OPTIONAL<HLR_Id>,
        /**
         * @summary `sip_uri_A`.
         * @public
         * @readonly
         */
        readonly sip_uri_A: OPTIONAL<SIP_URI>,
        /**
         * @summary `sip_uri_B`.
         * @public
         * @readonly
         */
        readonly sip_uri_B: SIP_URI
    ) {}

    /**
     * @summary Restructures an object into a CorrelationID
     * @description
     * 
     * This takes an `object` and converts it to a `CorrelationID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorrelationID`.
     * @returns {CorrelationID}
     */
    public static _from_object (_o: { [_K in keyof (CorrelationID)]: (CorrelationID)[_K] }): CorrelationID {
        return new CorrelationID(_o.hlr_id, _o.sip_uri_A, _o.sip_uri_B);
    }


}

/**
 * @summary The Leading Root Component Types of CorrelationID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorrelationID: $.ComponentSpec[] = [
    new $.ComponentSpec("hlr-id", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sip-uri-A", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("sip-uri-B", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CorrelationID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorrelationID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CorrelationID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CorrelationID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CorrelationID: $.ASN1Decoder<CorrelationID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelationID (el: _Element): CorrelationID {
    if (!_cached_decoder_for_CorrelationID) { _cached_decoder_for_CorrelationID = function (el: _Element): CorrelationID {
    let hlr_id: OPTIONAL<HLR_Id>;
    let sip_uri_A: OPTIONAL<SIP_URI>;
    let sip_uri_B!: SIP_URI;
    const callbacks: $.DecodingMap = {
        "hlr-id": (_el: _Element): void => { hlr_id = $._decode_implicit<HLR_Id>(() => _decode_HLR_Id)(_el); },
        "sip-uri-A": (_el: _Element): void => { sip_uri_A = $._decode_implicit<SIP_URI>(() => _decode_SIP_URI)(_el); },
        "sip-uri-B": (_el: _Element): void => { sip_uri_B = $._decode_implicit<SIP_URI>(() => _decode_SIP_URI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CorrelationID,
        _extension_additions_list_spec_for_CorrelationID,
        _root_component_type_list_2_spec_for_CorrelationID,
        undefined,
    );
    return new CorrelationID(
        hlr_id,
        sip_uri_A,
        sip_uri_B
    );
}; }
    return _cached_decoder_for_CorrelationID(el);
}

let _cached_encoder_for_CorrelationID: $.ASN1Encoder<CorrelationID> | null = null;

/**
 * @summary Encodes a(n) CorrelationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelationID, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelationID (value: CorrelationID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelationID) { _cached_encoder_for_CorrelationID = function (value: CorrelationID, elGetter: $.ASN1Encoder<CorrelationID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.hlr_id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_HLR_Id, $.BER)(value.hlr_id, $.BER)),
            /* IF_ABSENT  */ ((value.sip_uri_A === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SIP_URI, $.BER)(value.sip_uri_A, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SIP_URI, $.BER)(value.sip_uri_B, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorrelationID(value, elGetter);
}


/* eslint-enable */
