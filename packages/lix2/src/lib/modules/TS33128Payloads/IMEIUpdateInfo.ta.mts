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
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";


/**
 * @summary IMEIUpdateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIUpdateInfo ::= SEQUENCE
 * {
 *     iMSI       [1] IMSI OPTIONAL,
 *     iMEI       [2] IMEI OPTIONAL,
 *     iMEISV     [3] IMEISV OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMEIUpdateInfo {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `iMEISV`.
         * @public
         * @readonly
         */
        readonly iMEISV: OPTIONAL<IMEISV>
    ) {}

    /**
     * @summary Restructures an object into a IMEIUpdateInfo
     * @description
     * 
     * This takes an `object` and converts it to a `IMEIUpdateInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMEIUpdateInfo`.
     * @returns {IMEIUpdateInfo}
     */
    public static _from_object (_o: { [_K in keyof (IMEIUpdateInfo)]: (IMEIUpdateInfo)[_K] }): IMEIUpdateInfo {
        return new IMEIUpdateInfo(_o.iMSI, _o.iMEI, _o.iMEISV);
    }


}

/**
 * @summary The Leading Root Component Types of IMEIUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMEIUpdateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMEISV", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IMEIUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMEIUpdateInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMEIUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMEIUpdateInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMEIUpdateInfo: $.ASN1Decoder<IMEIUpdateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEIUpdateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEIUpdateInfo (el: _Element): IMEIUpdateInfo {
    if (!_cached_decoder_for_IMEIUpdateInfo) { _cached_decoder_for_IMEIUpdateInfo = function (el: _Element): IMEIUpdateInfo {
    let iMSI: OPTIONAL<IMSI>;
    let iMEI: OPTIONAL<IMEI>;
    let iMEISV: OPTIONAL<IMEISV>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "iMEISV": (_el: _Element): void => { iMEISV = $._decode_implicit<IMEISV>(() => _decode_IMEISV)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMEIUpdateInfo,
        _extension_additions_list_spec_for_IMEIUpdateInfo,
        _root_component_type_list_2_spec_for_IMEIUpdateInfo,
        undefined,
    );
    return new IMEIUpdateInfo(
        iMSI,
        iMEI,
        iMEISV
    );
}; }
    return _cached_decoder_for_IMEIUpdateInfo(el);
}

let _cached_encoder_for_IMEIUpdateInfo: $.ASN1Encoder<IMEIUpdateInfo> | null = null;

/**
 * @summary Encodes a(n) IMEIUpdateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEIUpdateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_IMEIUpdateInfo (value: IMEIUpdateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEIUpdateInfo) { _cached_encoder_for_IMEIUpdateInfo = function (value: IMEIUpdateInfo, elGetter: $.ASN1Encoder<IMEIUpdateInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.iMEISV === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IMEISV, $.BER)(value.iMEISV, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMEIUpdateInfo(value, elGetter);
}


/* eslint-enable */
