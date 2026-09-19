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
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { SCEFReleaseCause, _enum_for_SCEFReleaseCause, SCEFReleaseCause_mMERelease /* IMPORTED_LONG_ENUMERATION_ITEM */, mMERelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_dNRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, dNRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_hSSRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, hSSRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_localConfigurationPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, localConfigurationPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_unknownCause /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownCause /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SCEFReleaseCause, _encode_SCEFReleaseCause } from "../TS33128Payloads/SCEFReleaseCause.ta.mjs";
// export { SCEFReleaseCause, _enum_for_SCEFReleaseCause, SCEFReleaseCause_mMERelease /* IMPORTED_LONG_ENUMERATION_ITEM */, mMERelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_dNRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, dNRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_hSSRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, hSSRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_localConfigurationPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, localConfigurationPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFReleaseCause_unknownCause /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownCause /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SCEFReleaseCause, _encode_SCEFReleaseCause } from "../TS33128Payloads/SCEFReleaseCause.ta.mjs";


/**
 * @summary SCEFPDNConnectionRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFPDNConnectionRelease ::= SEQUENCE
 * {
 *     iMSI                   [1] IMSI OPTIONAL,
 *     mSISDN                 [2] MSISDN OPTIONAL,
 *     externalIdentifier     [3] NAI OPTIONAL,
 *     ePSBearerID            [4] EPSBearerID,
 *     timeOfFirstPacket      [5] Timestamp OPTIONAL,
 *     timeOfLastPacket       [6] Timestamp OPTIONAL,
 *     uplinkVolume           [7] INTEGER OPTIONAL,
 *     downlinkVolume         [8] INTEGER OPTIONAL,
 *     releaseCause           [9] SCEFReleaseCause
 * }
 * ```
 * 
 * @class
 */
export
class SCEFPDNConnectionRelease {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `externalIdentifier`.
         * @public
         * @readonly
         */
        readonly externalIdentifier: OPTIONAL<NAI>,
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `timeOfFirstPacket`.
         * @public
         * @readonly
         */
        readonly timeOfFirstPacket: OPTIONAL<Timestamp>,
        /**
         * @summary `timeOfLastPacket`.
         * @public
         * @readonly
         */
        readonly timeOfLastPacket: OPTIONAL<Timestamp>,
        /**
         * @summary `uplinkVolume`.
         * @public
         * @readonly
         */
        readonly uplinkVolume: OPTIONAL<INTEGER>,
        /**
         * @summary `downlinkVolume`.
         * @public
         * @readonly
         */
        readonly downlinkVolume: OPTIONAL<INTEGER>,
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: SCEFReleaseCause
    ) {}

    /**
     * @summary Restructures an object into a SCEFPDNConnectionRelease
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFPDNConnectionRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFPDNConnectionRelease`.
     * @returns {SCEFPDNConnectionRelease}
     */
    public static _from_object (_o: { [_K in keyof (SCEFPDNConnectionRelease)]: (SCEFPDNConnectionRelease)[_K] }): SCEFPDNConnectionRelease {
        return new SCEFPDNConnectionRelease(_o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.ePSBearerID, _o.timeOfFirstPacket, _o.timeOfLastPacket, _o.uplinkVolume, _o.downlinkVolume, _o.releaseCause);
    }

        /**
         * @summary The enum used as the type of the component `releaseCause`
         * @public
         * @static
         */

    public static _enum_for_releaseCause = _enum_for_SCEFReleaseCause;
}

/**
 * @summary The Leading Root Component Types of SCEFPDNConnectionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFPDNConnectionRelease: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfFirstPacket", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("timeOfLastPacket", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("uplinkVolume", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("downlinkVolume", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("releaseCause", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SCEFPDNConnectionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFPDNConnectionRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFPDNConnectionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFPDNConnectionRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFPDNConnectionRelease: $.ASN1Decoder<SCEFPDNConnectionRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFPDNConnectionRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFPDNConnectionRelease (el: _Element): SCEFPDNConnectionRelease {
    if (!_cached_decoder_for_SCEFPDNConnectionRelease) { _cached_decoder_for_SCEFPDNConnectionRelease = function (el: _Element): SCEFPDNConnectionRelease {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let ePSBearerID!: EPSBearerID;
    let timeOfFirstPacket: OPTIONAL<Timestamp>;
    let timeOfLastPacket: OPTIONAL<Timestamp>;
    let uplinkVolume: OPTIONAL<INTEGER>;
    let downlinkVolume: OPTIONAL<INTEGER>;
    let releaseCause!: SCEFReleaseCause;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "timeOfFirstPacket": (_el: _Element): void => { timeOfFirstPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "timeOfLastPacket": (_el: _Element): void => { timeOfLastPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "uplinkVolume": (_el: _Element): void => { uplinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "downlinkVolume": (_el: _Element): void => { downlinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<SCEFReleaseCause>(() => _decode_SCEFReleaseCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFPDNConnectionRelease,
        _extension_additions_list_spec_for_SCEFPDNConnectionRelease,
        _root_component_type_list_2_spec_for_SCEFPDNConnectionRelease,
        undefined,
    );
    return new SCEFPDNConnectionRelease(
        iMSI,
        mSISDN,
        externalIdentifier,
        ePSBearerID,
        timeOfFirstPacket,
        timeOfLastPacket,
        uplinkVolume,
        downlinkVolume,
        releaseCause
    );
}; }
    return _cached_decoder_for_SCEFPDNConnectionRelease(el);
}

let _cached_encoder_for_SCEFPDNConnectionRelease: $.ASN1Encoder<SCEFPDNConnectionRelease> | null = null;

/**
 * @summary Encodes a(n) SCEFPDNConnectionRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFPDNConnectionRelease, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFPDNConnectionRelease (value: SCEFPDNConnectionRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFPDNConnectionRelease) { _cached_encoder_for_SCEFPDNConnectionRelease = function (value: SCEFPDNConnectionRelease, elGetter: $.ASN1Encoder<SCEFPDNConnectionRelease>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* IF_ABSENT  */ ((value.timeOfFirstPacket === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.timeOfFirstPacket, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastPacket === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Timestamp, $.BER)(value.timeOfLastPacket, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.uplinkVolume, $.BER)),
            /* IF_ABSENT  */ ((value.downlinkVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.downlinkVolume, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_SCEFReleaseCause, $.BER)(value.releaseCause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFPDNConnectionRelease(value, elGetter);
}


/* eslint-enable */
