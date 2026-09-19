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
import { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
// export { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
import { SIPCellularAccessInfo, _decode_SIPCellularAccessInfo, _encode_SIPCellularAccessInfo } from "../TS33128Payloads/SIPCellularAccessInfo.ta.mjs";
// export { SIPCellularAccessInfo, _decode_SIPCellularAccessInfo, _encode_SIPCellularAccessInfo } from "../TS33128Payloads/SIPCellularAccessInfo.ta.mjs";
import { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";
// export { SIPLocationInfo, _decode_SIPLocationInfo, _encode_SIPLocationInfo } from "../TS33128Payloads/SIPLocationInfo.ta.mjs";


/**
 * @summary SIPCNIHeaderInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCNIHeaderInfo ::= SEQUENCE
 * {
 *     cellularNetworkInformation [1] SIPCellularNetworkInformation,
 *     cellularAccessInfo         [2] SEQUENCE OF SIPCellularAccessInfo OPTIONAL,
 *     cNILocation                [3] SEQUENCE OF SIPLocationInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SIPCNIHeaderInfo {
    constructor (
        /**
         * @summary `cellularNetworkInformation`.
         * @public
         * @readonly
         */
        readonly cellularNetworkInformation: SIPCellularNetworkInformation,
        /**
         * @summary `cellularAccessInfo`.
         * @public
         * @readonly
         */
        readonly cellularAccessInfo: OPTIONAL<SIPCellularAccessInfo[]>,
        /**
         * @summary `cNILocation`.
         * @public
         * @readonly
         */
        readonly cNILocation: OPTIONAL<SIPLocationInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a SIPCNIHeaderInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SIPCNIHeaderInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPCNIHeaderInfo`.
     * @returns {SIPCNIHeaderInfo}
     */
    public static _from_object (_o: { [_K in keyof (SIPCNIHeaderInfo)]: (SIPCNIHeaderInfo)[_K] }): SIPCNIHeaderInfo {
        return new SIPCNIHeaderInfo(_o.cellularNetworkInformation, _o.cellularAccessInfo, _o.cNILocation);
    }


}

/**
 * @summary The Leading Root Component Types of SIPCNIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPCNIHeaderInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cellularNetworkInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellularAccessInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cNILocation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SIPCNIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPCNIHeaderInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPCNIHeaderInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPCNIHeaderInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPCNIHeaderInfo: $.ASN1Decoder<SIPCNIHeaderInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPCNIHeaderInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPCNIHeaderInfo (el: _Element): SIPCNIHeaderInfo {
    if (!_cached_decoder_for_SIPCNIHeaderInfo) { _cached_decoder_for_SIPCNIHeaderInfo = function (el: _Element): SIPCNIHeaderInfo {
    let cellularNetworkInformation!: SIPCellularNetworkInformation;
    let cellularAccessInfo: OPTIONAL<SIPCellularAccessInfo[]>;
    let cNILocation: OPTIONAL<SIPLocationInfo[]>;
    const callbacks: $.DecodingMap = {
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<SIPCellularNetworkInformation>(() => _decode_SIPCellularNetworkInformation)(_el); },
        "cellularAccessInfo": (_el: _Element): void => { cellularAccessInfo = $._decode_implicit<SIPCellularAccessInfo[]>(() => $._decodeSequenceOf<SIPCellularAccessInfo>(() => _decode_SIPCellularAccessInfo))(_el); },
        "cNILocation": (_el: _Element): void => { cNILocation = $._decode_implicit<SIPLocationInfo[]>(() => $._decodeSequenceOf<SIPLocationInfo>(() => _decode_SIPLocationInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIPCNIHeaderInfo,
        _extension_additions_list_spec_for_SIPCNIHeaderInfo,
        _root_component_type_list_2_spec_for_SIPCNIHeaderInfo,
        undefined,
    );
    return new SIPCNIHeaderInfo(
        cellularNetworkInformation,
        cellularAccessInfo,
        cNILocation
    );
}; }
    return _cached_decoder_for_SIPCNIHeaderInfo(el);
}

let _cached_encoder_for_SIPCNIHeaderInfo: $.ASN1Encoder<SIPCNIHeaderInfo> | null = null;

/**
 * @summary Encodes a(n) SIPCNIHeaderInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPCNIHeaderInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SIPCNIHeaderInfo (value: SIPCNIHeaderInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPCNIHeaderInfo) { _cached_encoder_for_SIPCNIHeaderInfo = function (value: SIPCNIHeaderInfo, elGetter: $.ASN1Encoder<SIPCNIHeaderInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SIPCellularNetworkInformation, $.BER)(value.cellularNetworkInformation, $.BER),
            /* IF_ABSENT  */ ((value.cellularAccessInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SIPCellularAccessInfo>(() => _encode_SIPCellularAccessInfo, $.BER), $.BER)(value.cellularAccessInfo, $.BER)),
            /* IF_ABSENT  */ ((value.cNILocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<SIPLocationInfo>(() => _encode_SIPLocationInfo, $.BER), $.BER)(value.cNILocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SIPCNIHeaderInfo(value, elGetter);
}


/* eslint-enable */
