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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
// export { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
import { SecurityInfo, _decode_SecurityInfo, _encode_SecurityInfo } from "../CSTA-security/SecurityInfo.ta.mjs";
// export { SecurityInfo, _decode_SecurityInfo, _encode_SecurityInfo } from "../CSTA-security/SecurityInfo.ta.mjs";


/**
 * @summary CSTASecurityData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTASecurityData ::= SEQUENCE
 * {     messageSequenceNumber    [0] IMPLICIT INTEGER                 OPTIONAL,
 *     timestamp         TimeInfo                     OPTIONAL,
 *     securityInfo         SecurityInfo                     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CSTASecurityData {
    constructor (
        /**
         * @summary `messageSequenceNumber`.
         * @public
         * @readonly
         */
        readonly messageSequenceNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: OPTIONAL<TimeInfo>,
        /**
         * @summary `securityInfo`.
         * @public
         * @readonly
         */
        readonly securityInfo: OPTIONAL<SecurityInfo>
    ) {}

    /**
     * @summary Restructures an object into a CSTASecurityData
     * @description
     * 
     * This takes an `object` and converts it to a `CSTASecurityData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSTASecurityData`.
     * @returns {CSTASecurityData}
     */
    public static _from_object (_o: { [_K in keyof (CSTASecurityData)]: (CSTASecurityData)[_K] }): CSTASecurityData {
        return new CSTASecurityData(_o.messageSequenceNumber, _o.timestamp, _o.securityInfo);
    }


}

/**
 * @summary The Leading Root Component Types of CSTASecurityData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSTASecurityData: $.ComponentSpec[] = [
    new $.ComponentSpec("messageSequenceNumber", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("timestamp", true, $.hasTag(_TagClass.universal, 24), undefined, undefined),
    new $.ComponentSpec("securityInfo", true, $.or($.hasTag(_TagClass.universal, 4), $.hasTag(_TagClass.universal, 5)), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CSTASecurityData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSTASecurityData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSTASecurityData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSTASecurityData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CSTASecurityData: $.ASN1Decoder<CSTASecurityData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTASecurityData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTASecurityData (el: _Element): CSTASecurityData {
    if (!_cached_decoder_for_CSTASecurityData) { _cached_decoder_for_CSTASecurityData = function (el: _Element): CSTASecurityData {
    let messageSequenceNumber: OPTIONAL<INTEGER>;
    let timestamp: OPTIONAL<TimeInfo>;
    let securityInfo: OPTIONAL<SecurityInfo>;
    const callbacks: $.DecodingMap = {
        "messageSequenceNumber": (_el: _Element): void => { messageSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = _decode_TimeInfo(_el); },
        "securityInfo": (_el: _Element): void => { securityInfo = _decode_SecurityInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CSTASecurityData,
        _extension_additions_list_spec_for_CSTASecurityData,
        _root_component_type_list_2_spec_for_CSTASecurityData,
        undefined,
    );
    return new CSTASecurityData(
        messageSequenceNumber,
        timestamp,
        securityInfo
    );
}; }
    return _cached_decoder_for_CSTASecurityData(el);
}

let _cached_encoder_for_CSTASecurityData: $.ASN1Encoder<CSTASecurityData> | null = null;

/**
 * @summary Encodes a(n) CSTASecurityData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTASecurityData, encoded as an ASN.1 Element.
 */
export
function _encode_CSTASecurityData (value: CSTASecurityData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTASecurityData) { _cached_encoder_for_CSTASecurityData = function (value: CSTASecurityData, elGetter: $.ASN1Encoder<CSTASecurityData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.messageSequenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.messageSequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.timestamp === undefined) ? undefined : _encode_TimeInfo(value.timestamp, $.BER)),
            /* IF_ABSENT  */ ((value.securityInfo === undefined) ? undefined : _encode_SecurityInfo(value.securityInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CSTASecurityData(value, elGetter);
}


/* eslint-enable */
