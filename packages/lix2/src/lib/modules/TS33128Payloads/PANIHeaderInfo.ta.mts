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
import { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
// export { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
import { SIPAccessInfo, _decode_SIPAccessInfo, _encode_SIPAccessInfo } from "../TS33128Payloads/SIPAccessInfo.ta.mjs";
// export { SIPAccessInfo, _decode_SIPAccessInfo, _encode_SIPAccessInfo } from "../TS33128Payloads/SIPAccessInfo.ta.mjs";
import { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";
// export { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";


/**
 * @summary PANIHeaderInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PANIHeaderInfo ::= SEQUENCE
 * {
 *     accessNetworkInformation [1] SIPAccessNetworkInformation,
 *     accessInfo               [2] SEQUENCE OF SIPAccessInfo OPTIONAL,
 *     pANILocation             [3] SEQUENCE OF SIPLocationInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PANIHeaderInfo {
    constructor (
        /**
         * @summary `accessNetworkInformation`.
         * @public
         * @readonly
         */
        readonly accessNetworkInformation: SIPAccessNetworkInformation,
        /**
         * @summary `accessInfo`.
         * @public
         * @readonly
         */
        readonly accessInfo: OPTIONAL<SIPAccessInfo[]>,
        /**
         * @summary `pANILocation`.
         * @public
         * @readonly
         */
        readonly pANILocation: OPTIONAL<SIPLocationInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a PANIHeaderInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PANIHeaderInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PANIHeaderInfo`.
     * @returns {PANIHeaderInfo}
     */
    public static _from_object (_o: { [_K in keyof (PANIHeaderInfo)]: (PANIHeaderInfo)[_K] }): PANIHeaderInfo {
        return new PANIHeaderInfo(_o.accessNetworkInformation, _o.accessInfo, _o.pANILocation);
    }


}

/**
 * @summary The Leading Root Component Types of PANIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PANIHeaderInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("accessNetworkInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pANILocation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PANIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PANIHeaderInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PANIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PANIHeaderInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PANIHeaderInfo: $.ASN1Decoder<PANIHeaderInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PANIHeaderInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PANIHeaderInfo (el: _Element): PANIHeaderInfo {
    if (!_cached_decoder_for_PANIHeaderInfo) { _cached_decoder_for_PANIHeaderInfo = function (el: _Element): PANIHeaderInfo {
    let accessNetworkInformation!: SIPAccessNetworkInformation;
    let accessInfo: OPTIONAL<SIPAccessInfo[]>;
    let pANILocation: OPTIONAL<SIPLocationInfo[]>;
    const callbacks: $.DecodingMap = {
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<SIPAccessNetworkInformation>(() => _decode_SIPAccessNetworkInformation)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<SIPAccessInfo[]>(() => $._decodeSequenceOf<SIPAccessInfo>(() => _decode_SIPAccessInfo))(_el); },
        "pANILocation": (_el: _Element): void => { pANILocation = $._decode_implicit<SIPLocationInfo[]>(() => $._decodeSequenceOf<SIPLocationInfo>(() => _decode_SIPLocationInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PANIHeaderInfo,
        _extension_additions_list_spec_for_PANIHeaderInfo,
        _root_component_type_list_2_spec_for_PANIHeaderInfo,
        undefined,
    );
    return new PANIHeaderInfo(
        accessNetworkInformation,
        accessInfo,
        pANILocation
    );
}; }
    return _cached_decoder_for_PANIHeaderInfo(el);
}

let _cached_encoder_for_PANIHeaderInfo: $.ASN1Encoder<PANIHeaderInfo> | null = null;

/**
 * @summary Encodes a(n) PANIHeaderInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PANIHeaderInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PANIHeaderInfo (value: PANIHeaderInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PANIHeaderInfo) { _cached_encoder_for_PANIHeaderInfo = function (value: PANIHeaderInfo, elGetter: $.ASN1Encoder<PANIHeaderInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SIPAccessNetworkInformation, $.BER)(value.accessNetworkInformation, $.BER),
            /* IF_ABSENT  */ ((value.accessInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SIPAccessInfo>(() => _encode_SIPAccessInfo, $.BER), $.BER)(value.accessInfo, $.BER)),
            /* IF_ABSENT  */ ((value.pANILocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<SIPLocationInfo>(() => _encode_SIPLocationInfo, $.BER), $.BER)(value.pANILocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PANIHeaderInfo(value, elGetter);
}


/* eslint-enable */
