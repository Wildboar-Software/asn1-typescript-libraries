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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary RoamingStatusUpdateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingStatusUpdateInfo ::= SEQUENCE
 * {
 *     iMSI           [1] IMSI OPTIONAL,
 *     pLMNID         [2] PLMNID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RoamingStatusUpdateInfo {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: OPTIONAL<PLMNID>
    ) {}

    /**
     * @summary Restructures an object into a RoamingStatusUpdateInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RoamingStatusUpdateInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoamingStatusUpdateInfo`.
     * @returns {RoamingStatusUpdateInfo}
     */
    public static _from_object (_o: { [_K in keyof (RoamingStatusUpdateInfo)]: (RoamingStatusUpdateInfo)[_K] }): RoamingStatusUpdateInfo {
        return new RoamingStatusUpdateInfo(_o.iMSI, _o.pLMNID);
    }


}

/**
 * @summary The Leading Root Component Types of RoamingStatusUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoamingStatusUpdateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pLMNID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RoamingStatusUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoamingStatusUpdateInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoamingStatusUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoamingStatusUpdateInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoamingStatusUpdateInfo: $.ASN1Decoder<RoamingStatusUpdateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingStatusUpdateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamingStatusUpdateInfo (el: _Element): RoamingStatusUpdateInfo {
    if (!_cached_decoder_for_RoamingStatusUpdateInfo) { _cached_decoder_for_RoamingStatusUpdateInfo = function (el: _Element): RoamingStatusUpdateInfo {
    let iMSI: OPTIONAL<IMSI>;
    let pLMNID: OPTIONAL<PLMNID>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoamingStatusUpdateInfo,
        _extension_additions_list_spec_for_RoamingStatusUpdateInfo,
        _root_component_type_list_2_spec_for_RoamingStatusUpdateInfo,
        undefined,
    );
    return new RoamingStatusUpdateInfo(
        iMSI,
        pLMNID
    );
}; }
    return _cached_decoder_for_RoamingStatusUpdateInfo(el);
}

let _cached_encoder_for_RoamingStatusUpdateInfo: $.ASN1Encoder<RoamingStatusUpdateInfo> | null = null;

/**
 * @summary Encodes a(n) RoamingStatusUpdateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingStatusUpdateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RoamingStatusUpdateInfo (value: RoamingStatusUpdateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamingStatusUpdateInfo) { _cached_encoder_for_RoamingStatusUpdateInfo = function (value: RoamingStatusUpdateInfo, elGetter: $.ASN1Encoder<RoamingStatusUpdateInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.pLMNID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoamingStatusUpdateInfo(value, elGetter);
}


/* eslint-enable */
