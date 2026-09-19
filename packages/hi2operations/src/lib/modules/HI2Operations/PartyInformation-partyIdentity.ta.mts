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
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../HI2Operations/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../HI2Operations/CallingPartyNumber.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";


/**
 * @summary PartyInformation_partyIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-partyIdentity ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PartyInformation_partyIdentity {
    constructor (
        /**
         * @summary `imei`.
         * @public
         * @readonly
         */
        readonly imei: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tei`.
         * @public
         * @readonly
         */
        readonly tei: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary `calledPartyNumber`.
         * @public
         * @readonly
         */
        readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>,
        /**
         * @summary `msISDN`.
         * @public
         * @readonly
         */
        readonly msISDN: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `e164_Format`.
         * @public
         * @readonly
         */
        readonly e164_Format: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sip_uri`.
         * @public
         * @readonly
         */
        readonly sip_uri: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tel_url`.
         * @public
         * @readonly
         */
        readonly tel_url: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nai`.
         * @public
         * @readonly
         */
        readonly nai: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `x_3GPP_Asserted_Identity`.
         * @public
         * @readonly
         */
        readonly x_3GPP_Asserted_Identity: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `xUI`.
         * @public
         * @readonly
         */
        readonly xUI: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `iMPI`.
         * @public
         * @readonly
         */
        readonly iMPI: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `extID`.
         * @public
         * @readonly
         */
        readonly extID: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PartyInformation_partyIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `PartyInformation_partyIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyInformation_partyIdentity`.
     * @returns {PartyInformation_partyIdentity}
     */
    public static _from_object (_o: { [_K in keyof (PartyInformation_partyIdentity)]: (PartyInformation_partyIdentity)[_K] }): PartyInformation_partyIdentity {
        return new PartyInformation_partyIdentity(_o.imei, _o.tei, _o.imsi, _o.callingPartyNumber, _o.calledPartyNumber, _o.msISDN, _o.e164_Format, _o.sip_uri, _o.tel_url, _o.nai, _o.x_3GPP_Asserted_Identity, _o.xUI, _o.iMPI, _o.extID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tei", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("msISDN", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("e164-Format", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sip-uri", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("tel-url", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("nai", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("x-3GPP-Asserted-Identity", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("xUI", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("iMPI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("extID", true, $.hasTag(_TagClass.context, 14))
];

let _cached_decoder_for_PartyInformation_partyIdentity: $.ASN1Decoder<PartyInformation_partyIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInformation_partyIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInformation_partyIdentity (el: _Element): PartyInformation_partyIdentity {
    if (!_cached_decoder_for_PartyInformation_partyIdentity) { _cached_decoder_for_PartyInformation_partyIdentity = function (el: _Element): PartyInformation_partyIdentity {
    let imei: OPTIONAL<OCTET_STRING>;
    let tei: OPTIONAL<OCTET_STRING>;
    let imsi: OPTIONAL<OCTET_STRING>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let msISDN: OPTIONAL<OCTET_STRING>;
    let e164_Format: OPTIONAL<OCTET_STRING>;
    let sip_uri: OPTIONAL<OCTET_STRING>;
    let tel_url: OPTIONAL<OCTET_STRING>;
    let nai: OPTIONAL<OCTET_STRING>;
    let x_3GPP_Asserted_Identity: OPTIONAL<OCTET_STRING>;
    let xUI: OPTIONAL<OCTET_STRING>;
    let iMPI: OPTIONAL<OCTET_STRING>;
    let extID: OPTIONAL<UTF8String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imei": (_el: _Element): void => { imei = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tei": (_el: _Element): void => { tei = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_explicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_explicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "msISDN": (_el: _Element): void => { msISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "e164-Format": (_el: _Element): void => { e164_Format = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sip-uri": (_el: _Element): void => { sip_uri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tel-url": (_el: _Element): void => { tel_url = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "nai": (_el: _Element): void => { nai = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "x-3GPP-Asserted-Identity": (_el: _Element): void => { x_3GPP_Asserted_Identity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "xUI": (_el: _Element): void => { xUI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iMPI": (_el: _Element): void => { iMPI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extID": (_el: _Element): void => { extID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyInformation_partyIdentity,
        _extension_additions_list_spec_for_PartyInformation_partyIdentity,
        _root_component_type_list_2_spec_for_PartyInformation_partyIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyInformation_partyIdentity(
        imei,
        tei,
        imsi,
        callingPartyNumber,
        calledPartyNumber,
        msISDN,
        e164_Format,
        sip_uri,
        tel_url,
        nai,
        x_3GPP_Asserted_Identity,
        xUI,
        iMPI,
        extID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PartyInformation_partyIdentity(el);
}

let _cached_encoder_for_PartyInformation_partyIdentity: $.ASN1Encoder<PartyInformation_partyIdentity> | null = null;

/**
 * @summary Encodes a(n) PartyInformation_partyIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInformation_partyIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInformation_partyIdentity (value: PartyInformation_partyIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInformation_partyIdentity) { _cached_encoder_for_PartyInformation_partyIdentity = function (value: PartyInformation_partyIdentity, elGetter: $.ASN1Encoder<PartyInformation_partyIdentity>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imei === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.imei, $.BER)),
            /* IF_ABSENT  */ ((value.tei === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.tei, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyNumber === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.msISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.msISDN, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.e164_Format === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.e164_Format, $.BER)),
            /* IF_ABSENT  */ ((value.sip_uri === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.sip_uri, $.BER)),
            /* IF_ABSENT  */ ((value.tel_url === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.tel_url, $.BER)),
            /* IF_ABSENT  */ ((value.nai === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.nai, $.BER)),
            /* IF_ABSENT  */ ((value.x_3GPP_Asserted_Identity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.x_3GPP_Asserted_Identity, $.BER)),
            /* IF_ABSENT  */ ((value.xUI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.xUI, $.BER)),
            /* IF_ABSENT  */ ((value.iMPI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.iMPI, $.BER)),
            /* IF_ABSENT  */ ((value.extID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.extID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PartyInformation_partyIdentity(value, elGetter);
}


/* eslint-enable */
