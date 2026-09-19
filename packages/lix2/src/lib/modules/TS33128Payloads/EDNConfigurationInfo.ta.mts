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
import { EDNConnectionInfo, _decode_EDNConnectionInfo, _encode_EDNConnectionInfo } from "../TS33128Payloads/EDNConnectionInfo.ta.mjs";
// export { EDNConnectionInfo, _decode_EDNConnectionInfo, _encode_EDNConnectionInfo } from "../TS33128Payloads/EDNConnectionInfo.ta.mjs";
import { EESsInfo, _decode_EESsInfo, _encode_EESsInfo } from "../TS33128Payloads/EESsInfo.ta.mjs";
// export { EESsInfo, _decode_EESsInfo, _encode_EESsInfo } from "../TS33128Payloads/EESsInfo.ta.mjs";


/**
 * @summary EDNConfigurationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDNConfigurationInfo ::= SEQUENCE
 * {
 *     eDNConnectionInfo    [1] EDNConnectionInfo,
 *     eESsInfo             [2] EESsInfo,
 *     lifetime             [3] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EDNConfigurationInfo {
    constructor (
        /**
         * @summary `eDNConnectionInfo`.
         * @public
         * @readonly
         */
        readonly eDNConnectionInfo: EDNConnectionInfo,
        /**
         * @summary `eESsInfo`.
         * @public
         * @readonly
         */
        readonly eESsInfo: EESsInfo,
        /**
         * @summary `lifetime`.
         * @public
         * @readonly
         */
        readonly lifetime: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a EDNConfigurationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EDNConfigurationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDNConfigurationInfo`.
     * @returns {EDNConfigurationInfo}
     */
    public static _from_object (_o: { [_K in keyof (EDNConfigurationInfo)]: (EDNConfigurationInfo)[_K] }): EDNConfigurationInfo {
        return new EDNConfigurationInfo(_o.eDNConnectionInfo, _o.eESsInfo, _o.lifetime);
    }


}

/**
 * @summary The Leading Root Component Types of EDNConfigurationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EDNConfigurationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("eDNConnectionInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eESsInfo", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lifetime", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EDNConfigurationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EDNConfigurationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EDNConfigurationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EDNConfigurationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EDNConfigurationInfo: $.ASN1Decoder<EDNConfigurationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDNConfigurationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDNConfigurationInfo (el: _Element): EDNConfigurationInfo {
    if (!_cached_decoder_for_EDNConfigurationInfo) { _cached_decoder_for_EDNConfigurationInfo = function (el: _Element): EDNConfigurationInfo {
    let eDNConnectionInfo!: EDNConnectionInfo;
    let eESsInfo!: EESsInfo;
    let lifetime: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "eDNConnectionInfo": (_el: _Element): void => { eDNConnectionInfo = $._decode_implicit<EDNConnectionInfo>(() => _decode_EDNConnectionInfo)(_el); },
        "eESsInfo": (_el: _Element): void => { eESsInfo = $._decode_implicit<EESsInfo>(() => _decode_EESsInfo)(_el); },
        "lifetime": (_el: _Element): void => { lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EDNConfigurationInfo,
        _extension_additions_list_spec_for_EDNConfigurationInfo,
        _root_component_type_list_2_spec_for_EDNConfigurationInfo,
        undefined,
    );
    return new EDNConfigurationInfo(
        eDNConnectionInfo,
        eESsInfo,
        lifetime
    );
}; }
    return _cached_decoder_for_EDNConfigurationInfo(el);
}

let _cached_encoder_for_EDNConfigurationInfo: $.ASN1Encoder<EDNConfigurationInfo> | null = null;

/**
 * @summary Encodes a(n) EDNConfigurationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDNConfigurationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EDNConfigurationInfo (value: EDNConfigurationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDNConfigurationInfo) { _cached_encoder_for_EDNConfigurationInfo = function (value: EDNConfigurationInfo, elGetter: $.ASN1Encoder<EDNConfigurationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EDNConnectionInfo, $.BER)(value.eDNConnectionInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EESsInfo, $.BER)(value.eESsInfo, $.BER),
            /* IF_ABSENT  */ ((value.lifetime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.lifetime, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EDNConfigurationInfo(value, elGetter);
}


/* eslint-enable */
