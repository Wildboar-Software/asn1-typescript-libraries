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
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
// export { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary SCEFMSISDNLessMOSMS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFMSISDNLessMOSMS ::= SEQUENCE
 * {
 *     iMSI                      [1] IMSI OPTIONAL,
 *     mSISDN                    [2] MSISDN OPTIONAL,
 *     externalIdentifie         [3] NAI OPTIONAL,
 *     terminatingSMSParty       [4] SCSASID,
 *     sMS                       [5] SMSTPDUData OPTIONAL,
 *     sourcePort                [6] PortNumber OPTIONAL,
 *     destinationPort           [7] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCEFMSISDNLessMOSMS {
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
         * @summary `externalIdentifie`.
         * @public
         * @readonly
         */
        readonly externalIdentifie: OPTIONAL<NAI>,
        /**
         * @summary `terminatingSMSParty`.
         * @public
         * @readonly
         */
        readonly terminatingSMSParty: SCSASID,
        /**
         * @summary `sMS`.
         * @public
         * @readonly
         */
        readonly sMS: OPTIONAL<SMSTPDUData>,
        /**
         * @summary `sourcePort`.
         * @public
         * @readonly
         */
        readonly sourcePort: OPTIONAL<PortNumber>,
        /**
         * @summary `destinationPort`.
         * @public
         * @readonly
         */
        readonly destinationPort: OPTIONAL<PortNumber>
    ) {}

    /**
     * @summary Restructures an object into a SCEFMSISDNLessMOSMS
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFMSISDNLessMOSMS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFMSISDNLessMOSMS`.
     * @returns {SCEFMSISDNLessMOSMS}
     */
    public static _from_object (_o: { [_K in keyof (SCEFMSISDNLessMOSMS)]: (SCEFMSISDNLessMOSMS)[_K] }): SCEFMSISDNLessMOSMS {
        return new SCEFMSISDNLessMOSMS(_o.iMSI, _o.mSISDN, _o.externalIdentifie, _o.terminatingSMSParty, _o.sMS, _o.sourcePort, _o.destinationPort);
    }


}

/**
 * @summary The Leading Root Component Types of SCEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifie", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("terminatingSMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMS", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sourcePort", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("destinationPort", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SCEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFMSISDNLessMOSMS: $.ASN1Decoder<SCEFMSISDNLessMOSMS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFMSISDNLessMOSMS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFMSISDNLessMOSMS (el: _Element): SCEFMSISDNLessMOSMS {
    if (!_cached_decoder_for_SCEFMSISDNLessMOSMS) { _cached_decoder_for_SCEFMSISDNLessMOSMS = function (el: _Element): SCEFMSISDNLessMOSMS {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifie: OPTIONAL<NAI>;
    let terminatingSMSParty!: SCSASID;
    let sMS: OPTIONAL<SMSTPDUData>;
    let sourcePort: OPTIONAL<PortNumber>;
    let destinationPort: OPTIONAL<PortNumber>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifie": (_el: _Element): void => { externalIdentifie = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "terminatingSMSParty": (_el: _Element): void => { terminatingSMSParty = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "sMS": (_el: _Element): void => { sMS = $._decode_explicit<SMSTPDUData>(() => _decode_SMSTPDUData)(_el); },
        "sourcePort": (_el: _Element): void => { sourcePort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationPort": (_el: _Element): void => { destinationPort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFMSISDNLessMOSMS,
        _extension_additions_list_spec_for_SCEFMSISDNLessMOSMS,
        _root_component_type_list_2_spec_for_SCEFMSISDNLessMOSMS,
        undefined,
    );
    return new SCEFMSISDNLessMOSMS(
        iMSI,
        mSISDN,
        externalIdentifie,
        terminatingSMSParty,
        sMS,
        sourcePort,
        destinationPort
    );
}; }
    return _cached_decoder_for_SCEFMSISDNLessMOSMS(el);
}

let _cached_encoder_for_SCEFMSISDNLessMOSMS: $.ASN1Encoder<SCEFMSISDNLessMOSMS> | null = null;

/**
 * @summary Encodes a(n) SCEFMSISDNLessMOSMS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFMSISDNLessMOSMS, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFMSISDNLessMOSMS (value: SCEFMSISDNLessMOSMS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFMSISDNLessMOSMS) { _cached_encoder_for_SCEFMSISDNLessMOSMS = function (value: SCEFMSISDNLessMOSMS, elGetter: $.ASN1Encoder<SCEFMSISDNLessMOSMS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifie === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifie, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SCSASID, $.BER)(value.terminatingSMSParty, $.BER),
            /* IF_ABSENT  */ ((value.sMS === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_SMSTPDUData, $.BER)(value.sMS, $.BER)),
            /* IF_ABSENT  */ ((value.sourcePort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PortNumber, $.BER)(value.sourcePort, $.BER)),
            /* IF_ABSENT  */ ((value.destinationPort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PortNumber, $.BER)(value.destinationPort, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFMSISDNLessMOSMS(value, elGetter);
}


/* eslint-enable */
