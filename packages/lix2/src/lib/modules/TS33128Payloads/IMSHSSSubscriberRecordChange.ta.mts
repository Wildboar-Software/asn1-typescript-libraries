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
import { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
// export { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";


/**
 * @summary IMSHSSSubscriberRecordChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSHSSSubscriberRecordChange ::= SEQUENCE
 * {
 *     hSSIdentities            [1] SEQUENCE OF HSSIdentities,
 *     iMSProfileData           [2] SBIType OPTIONAL,
 *     mSISDNs                  [3] SEQUENCE (SIZE(1..MAX)) OF MSISDN OPTIONAL,
 *     iMEI                     [4] IMEI OPTIONAL,
 *     previousIMEI             [5] IMEI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSHSSSubscriberRecordChange {
    constructor (
        /**
         * @summary `hSSIdentities`.
         * @public
         * @readonly
         */
        readonly hSSIdentities: HSSIdentities[],
        /**
         * @summary `iMSProfileData`.
         * @public
         * @readonly
         */
        readonly iMSProfileData: OPTIONAL<SBIType>,
        /**
         * @summary `mSISDNs`.
         * @public
         * @readonly
         */
        readonly mSISDNs: OPTIONAL<MSISDN[]>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `previousIMEI`.
         * @public
         * @readonly
         */
        readonly previousIMEI: OPTIONAL<IMEI>
    ) {}

    /**
     * @summary Restructures an object into a IMSHSSSubscriberRecordChange
     * @description
     * 
     * This takes an `object` and converts it to a `IMSHSSSubscriberRecordChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSHSSSubscriberRecordChange`.
     * @returns {IMSHSSSubscriberRecordChange}
     */
    public static _from_object (_o: { [_K in keyof (IMSHSSSubscriberRecordChange)]: (IMSHSSSubscriberRecordChange)[_K] }): IMSHSSSubscriberRecordChange {
        return new IMSHSSSubscriberRecordChange(_o.hSSIdentities, _o.iMSProfileData, _o.mSISDNs, _o.iMEI, _o.previousIMEI);
    }


}

/**
 * @summary The Leading Root Component Types of IMSHSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSHSSSubscriberRecordChange: $.ComponentSpec[] = [
    new $.ComponentSpec("hSSIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSProfileData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDNs", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("previousIMEI", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of IMSHSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSHSSSubscriberRecordChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSHSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSHSSSubscriberRecordChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSHSSSubscriberRecordChange: $.ASN1Decoder<IMSHSSSubscriberRecordChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSHSSSubscriberRecordChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSHSSSubscriberRecordChange (el: _Element): IMSHSSSubscriberRecordChange {
    if (!_cached_decoder_for_IMSHSSSubscriberRecordChange) { _cached_decoder_for_IMSHSSSubscriberRecordChange = function (el: _Element): IMSHSSSubscriberRecordChange {
    let hSSIdentities!: HSSIdentities[];
    let iMSProfileData: OPTIONAL<SBIType>;
    let mSISDNs: OPTIONAL<MSISDN[]>;
    let iMEI: OPTIONAL<IMEI>;
    let previousIMEI: OPTIONAL<IMEI>;
    const callbacks: $.DecodingMap = {
        "hSSIdentities": (_el: _Element): void => { hSSIdentities = $._decode_implicit<HSSIdentities[]>(() => $._decodeSequenceOf<HSSIdentities>(() => _decode_HSSIdentities))(_el); },
        "iMSProfileData": (_el: _Element): void => { iMSProfileData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "mSISDNs": (_el: _Element): void => { mSISDNs = $._decode_implicit<MSISDN[]>(() => $._decodeSequenceOf<MSISDN>(() => _decode_MSISDN))(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "previousIMEI": (_el: _Element): void => { previousIMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSHSSSubscriberRecordChange,
        _extension_additions_list_spec_for_IMSHSSSubscriberRecordChange,
        _root_component_type_list_2_spec_for_IMSHSSSubscriberRecordChange,
        undefined,
    );
    return new IMSHSSSubscriberRecordChange(
        hSSIdentities,
        iMSProfileData,
        mSISDNs,
        iMEI,
        previousIMEI
    );
}; }
    return _cached_decoder_for_IMSHSSSubscriberRecordChange(el);
}

let _cached_encoder_for_IMSHSSSubscriberRecordChange: $.ASN1Encoder<IMSHSSSubscriberRecordChange> | null = null;

/**
 * @summary Encodes a(n) IMSHSSSubscriberRecordChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSHSSSubscriberRecordChange, encoded as an ASN.1 Element.
 */
export
function _encode_IMSHSSSubscriberRecordChange (value: IMSHSSSubscriberRecordChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSHSSSubscriberRecordChange) { _cached_encoder_for_IMSHSSSubscriberRecordChange = function (value: IMSHSSSubscriberRecordChange, elGetter: $.ASN1Encoder<IMSHSSSubscriberRecordChange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<HSSIdentities>(() => _encode_HSSIdentities, $.BER), $.BER)(value.hSSIdentities, $.BER),
            /* IF_ABSENT  */ ((value.iMSProfileData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.iMSProfileData, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDNs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MSISDN>(() => _encode_MSISDN, $.BER), $.BER)(value.mSISDNs, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.previousIMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_IMEI, $.BER)(value.previousIMEI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSHSSSubscriberRecordChange(value, elGetter);
}


/* eslint-enable */
