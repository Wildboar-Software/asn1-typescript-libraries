/* eslint-disable */
import {
    type GeneralizedTime,
    type INTEGER,
    type OBJECT_IDENTIFIER,
    type OCTET_STRING,
    type OPTIONAL,
    type PrintableString,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../LI-PS-PDU/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../LI-PS-PDU/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../LI-PS-PDU/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../LI-PS-PDU/CommunicationIdentifier.ta.mjs";
import { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
// export { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
import { type TimeStampQualifier, _decode_TimeStampQualifier, _encode_TimeStampQualifier, _enum_for_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";
// export { TimeStampQualifier, _enum_for_TimeStampQualifier, TimeStampQualifier_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfMediation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfMediation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfAggregation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfAggregation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimeStampQualifier, _encode_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";


/**
 * @summary PSHeader
 * @description
 * 
 * Header attached to every HI2 and HI3 PDU so the LEMF can identify the
 * intercept, associate IRI with CC, and detect loss or reordering. The same
 * header is used when the payload is transport-related information; several TRI
 * types fill only a subset of the fields and put any legal value in the rest.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.1, clause 5.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PSHeader ::= SEQUENCE
 * {
 *     li-psDomainId                   [0] OBJECT IDENTIFIER,
 *     lawfulInterceptionIdentifier    [1] LawfulInterceptionIdentifier,
 *         -- As of ASN.1 version 26 this parameter is included from ETSI TS 103 280 [44]
 *     authorizationCountryCode        [2] PrintableString (SIZE (2)) OPTIONAL,
 *         -- see clause 5.2.3
 *     communicationIdentifier         [3] CommunicationIdentifier,
 *     sequenceNumber                  [4] INTEGER (0..4294967295),
 *     timeStamp                       [5] GeneralizedTime OPTIONAL,
 *         -- see clause 5.2.6
 *     ...,
 *     interceptionPointID             [6] PrintableString (SIZE (1..8)) OPTIONAL,
 *         -- see clause 5.2.11
 *     microSecondTimeStamp            [7] MicroSecondTimeStamp OPTIONAL,
 *     timeStampQualifier              [8] TimeStampQualifier OPTIONAL,
 *     extendedInterceptionPointID     [9] OCTET STRING (SIZE (1..65535)) OPTIONAL,
 *         -- see clause 5.2.13
 *     networkFunctionIdentifier       [10] OCTET STRING (SIZE (1..65535)) OPTIONAL
 *         -- see clause 5.2.14
 * }
 * ```
 * 
 * @class
 */
export
class PSHeader {
    /**
     * @summary `li_psDomainId`.
     * @description
     *
     * Which version of the handover header is in use. For this module that is
     * `li-psDomainId` (genHeader version 35).
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.1, annex A, clause A.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly li_psDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     *
     * The LIID, included from ETSI TS 103 280 from ASN.1 version 26 and kept
     * under this name so existing references still match. TS 102 232-1 points
     * the field's definition at TS 103 280, clause 6, and does not restate it.
     * Together with a nationally unique LIID, `authorizationCountryCode` makes
     * the identifier internationally unique.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `authorizationCountryCode`.
     * @description
     *
     * Country in which the authorization was granted, as a two-letter ISO
     * 3166-1 code. With a nationally unique LIID the pair is internationally
     * unique. Where the national LIID is not unique, the pair is not guaranteed
     * to be unique either; an internationally unique pair then needs a
     * nationally unique LIID to be created.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly authorizationCountryCode: OPTIONAL<PrintableString>;
    /**
     * @summary `communicationIdentifier`.
     * @description
     *
     * Network identifier, communication identity number, and delivery country
     * code for the communications session. Part of the sequence-number context.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4, clause 5.2.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `sequenceNumber`.
     * @description
     *
     * Counts PS-PDUs in one sequence-number context. The context key is the
     * LIID, the operator identifier, and the payload alternative (IRI sequence,
     * CC sequence, TRI, HI1, encryption container, 3GPP HI1, inter-LEMF
     * handover, or HI4). The network-element identifier (either form), the CIN
     * (`communicationIdentityNumber` or `cINExtension`), and the delivery
     * country code join the key when they are present. An omitted optional
     * component is its own key value, so PDUs that share an LIID and operator
     * identifier but omit the CIN form one context.
     *
     * The MF starts again at zero when a target enters a new context. Each
     * service-specific standard lists those events. As a guide, a session
     * starts when an IRI-BEGIN would be sent and ends when an IRI-END would be
     * sent, and CC that belongs to one IRI-REPORT is usually its own context.
     * An IRI-REPORT that appears after an IRI-END, or before an IRI-BEGIN,
     * keeps the CIN of the other HI2 and HI3 traffic in that context.
     *
     * The value increases by 1 for each PS-PDU the MF generates in that
     * context, stays within 0..4294967295, and wraps to zero after 2^32 PDUs.
     * IRI and CC are counted apart. Among TRI, keep-alive, integrityCheck,
     * option negotiation, and pDUAcknowledgementRequest are each counted on
     * their own, and each of those is counted apart from IRI and CC. A
     * receiver treats a step other than +1,
     * against the previous PDU of that context, as loss or reordering.
     *
     * Some TRI messages reuse or fix the number: `keep-aliveResponse` and
     * `pDUAcknowledgementResponse` repeat the request; `optionResponse` repeats
     * the `optionRequest`; `firstSegmentFlag` repeats the first segment and
     * `lastSegmentFlag` repeats the last; `testPDU` and `cINReset` use zero.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.5, clause 6.2.2, clause
     * 6.2.4, clause 6.3.4, clause 6.3.5, clause 6.3.6, clause 7.3.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly sequenceNumber: INTEGER;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Mandatory on IRI. CC carries a timestamp as well, unless the
     * service-specific standard makes an exception. Either this GeneralizedTime
     * or `microSecondTimeStamp` may be used, by national agreement.
     * `timeStampQualifier` says which instant the value is.
     *
     * For an aggregated PDU the per-payload time is carried on each payload. A
     * time on this header may still record when the aggregated PDU was
     * completed; that use sets the qualifier to `timeOfAggregation`. Sequence
     * PDUs with `sequenceNumber`. The specification recommends against using
     * this timestamp to order PDUs at the LEMF or LGW.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `interceptionPointID`.
     * @description
     *
     * Optional. When used, the service provider assigns each interception point
     * an identifier of 1 to 8 characters, unique within that provider, and
     * attaches it to every CC and IRI PDU from that point. It is independent of
     * the sequence number and of the network-element identifier (the latter
     * distinguishes mediation functions; one mediation function may have
     * several interception points). For a given CC or IRI PDU, use this field
     * or `extendedInterceptionPointID`, and only one of them.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.11.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly interceptionPointID: OPTIONAL<PrintableString>;
    /**
     * @summary `microSecondTimeStamp`.
     * @description
     *
     * Alternative to `timeStamp`, used by national agreement. Seconds since
     * 1970-01-01 00:00Z plus a microsecond fraction. The same aggregation and
     * sequencing rules apply as for `timeStamp`.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>;
    /**
     * @summary `timeStampQualifier`.
     * @description
     *
     * Which instant `timeStamp` or `microSecondTimeStamp` represents. Optional,
     * and used by national agreement. On an aggregated PDU, `timeOfAggregation`
     * on the header is the time the complete PDU was created.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStampQualifier: OPTIONAL<TimeStampQualifier>;
    /**
     * @summary `extendedInterceptionPointID`.
     * @description
     *
     * Optional alternative to `interceptionPointID` when the provider's
     * interception-point identifier is longer than 8 characters (an IPv6
     * address is the specification's example). Length is 1 to 65535 octets. It
     * is unique within the provider and, when used, is attached to every CC and
     * IRI PDU from that point. Only one of the two interception-point fields is
     * used on a given CC or IRI PDU.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.13.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly extendedInterceptionPointID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `networkFunctionIdentifier`.
     * @description
     *
     * Optional identifier of the network function associated with the
     * interception point. Length 1 to 65535 octets. Use it only where the
     * service-specific standard says so, and only in the way that standard
     * describes.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.14.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly networkFunctionIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.1, clause 5.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        li_psDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        authorizationCountryCode: OPTIONAL<PrintableString>,
        communicationIdentifier: CommunicationIdentifier,
        sequenceNumber: INTEGER,
        timeStamp?: OPTIONAL<GeneralizedTime>,
        interceptionPointID?: OPTIONAL<PrintableString>,
        microSecondTimeStamp?: OPTIONAL<MicroSecondTimeStamp>,
        timeStampQualifier?: OPTIONAL<TimeStampQualifier>,
        extendedInterceptionPointID?: OPTIONAL<OCTET_STRING>,
        networkFunctionIdentifier?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.li_psDomainId = li_psDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.authorizationCountryCode = authorizationCountryCode;
        this.communicationIdentifier = communicationIdentifier;
        this.sequenceNumber = sequenceNumber;
        this.timeStamp = timeStamp;
        this.interceptionPointID = interceptionPointID;
        this.microSecondTimeStamp = microSecondTimeStamp;
        this.timeStampQualifier = timeStampQualifier;
        this.extendedInterceptionPointID = extendedInterceptionPointID;
        this.networkFunctionIdentifier = networkFunctionIdentifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PSHeader
     * @description
     * 
     * This takes an `object` and converts it to a `PSHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PSHeader`.
     * @returns {PSHeader}
     */
    public static _from_object (_o: { [_K in keyof (PSHeader)]: (PSHeader)[_K] }): PSHeader {
        return new PSHeader(_o.li_psDomainId, _o.lawfulInterceptionIdentifier, _o.authorizationCountryCode, _o.communicationIdentifier, _o.sequenceNumber, _o.timeStamp, _o.interceptionPointID, _o.microSecondTimeStamp, _o.timeStampQualifier, _o.extendedInterceptionPointID, _o.networkFunctionIdentifier, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `timeStampQualifier`
         * @public
         * @static
         */

    public static _enum_for_timeStampQualifier = _enum_for_TimeStampQualifier;
}

/**
 * @summary The Leading Root Component Types of PSHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PSHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("li-psDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("authorizationCountryCode", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sequenceNumber", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PSHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PSHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PSHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PSHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("interceptionPointID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("microSecondTimeStamp", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("timeStampQualifier", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extendedInterceptionPointID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("networkFunctionIdentifier", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_PSHeader: $.ASN1Decoder<PSHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PSHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PSHeader (el: _Element): PSHeader {
    if (!_cached_decoder_for_PSHeader) { _cached_decoder_for_PSHeader = function (el: _Element): PSHeader {
    let li_psDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let authorizationCountryCode: OPTIONAL<PrintableString>;
    let communicationIdentifier!: CommunicationIdentifier;
    let sequenceNumber!: INTEGER;
    let timeStamp: OPTIONAL<GeneralizedTime>;
    let interceptionPointID: OPTIONAL<PrintableString>;
    let microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>;
    let timeStampQualifier: OPTIONAL<TimeStampQualifier>;
    let extendedInterceptionPointID: OPTIONAL<OCTET_STRING>;
    let networkFunctionIdentifier: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "li-psDomainId": (_el: _Element): void => { li_psDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "authorizationCountryCode": (_el: _Element): void => {
            authorizationCountryCode = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (authorizationCountryCode.length < 2 || authorizationCountryCode.length > 2) {
                throw new ASN1SizeError("PSHeader.authorizationCountryCode violates SIZE constraint");
            }
        },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "sequenceNumber": (_el: _Element): void => {
            sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sequenceNumber === "bigint" ? sequenceNumber : BigInt(sequenceNumber);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("PSHeader.sequenceNumber violates INTEGER range");
            }
        },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "interceptionPointID": (_el: _Element): void => {
            interceptionPointID = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (interceptionPointID.length < 1 || interceptionPointID.length > 8) {
                throw new ASN1SizeError("PSHeader.interceptionPointID violates SIZE constraint");
            }
        },
        "microSecondTimeStamp": (_el: _Element): void => { microSecondTimeStamp = $._decode_implicit<MicroSecondTimeStamp>(() => _decode_MicroSecondTimeStamp)(_el); },
        "timeStampQualifier": (_el: _Element): void => { timeStampQualifier = $._decode_implicit<TimeStampQualifier>(() => _decode_TimeStampQualifier)(_el); },
        "extendedInterceptionPointID": (_el: _Element): void => {
            extendedInterceptionPointID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (extendedInterceptionPointID.length < 1 || extendedInterceptionPointID.length > 65535) {
                throw new ASN1SizeError("PSHeader.extendedInterceptionPointID violates SIZE constraint");
            }
        },
        "networkFunctionIdentifier": (_el: _Element): void => {
            networkFunctionIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (networkFunctionIdentifier.length < 1 || networkFunctionIdentifier.length > 65535) {
                throw new ASN1SizeError("PSHeader.networkFunctionIdentifier violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PSHeader,
        _extension_additions_list_spec_for_PSHeader,
        _root_component_type_list_2_spec_for_PSHeader,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PSHeader(
        li_psDomainId,
        lawfulInterceptionIdentifier,
        authorizationCountryCode,
        communicationIdentifier,
        sequenceNumber,
        timeStamp,
        interceptionPointID,
        microSecondTimeStamp,
        timeStampQualifier,
        extendedInterceptionPointID,
        networkFunctionIdentifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PSHeader(el);
}

let _cached_encoder_for_PSHeader: $.ASN1Encoder<PSHeader> | null = null;

/**
 * @summary Encodes a(n) PSHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSHeader, encoded as an ASN.1 Element.
 */
export
function _encode_PSHeader (value: PSHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PSHeader) { _cached_encoder_for_PSHeader = function (value: PSHeader, elGetter: $.ASN1Encoder<PSHeader>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.li_psDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    if (value.authorizationCountryCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.authorizationCountryCode, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER);
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeGeneralizedTime, $.BER)(value.timeStamp, $.BER);
    }
    if (value.interceptionPointID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodePrintableString, $.BER)(value.interceptionPointID, $.BER);
    }
    if (value.microSecondTimeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MicroSecondTimeStamp, $.BER)(value.microSecondTimeStamp, $.BER);
    }
    if (value.timeStampQualifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_TimeStampQualifier, $.BER)(value.timeStampQualifier, $.BER);
    }
    if (value.extendedInterceptionPointID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.extendedInterceptionPointID, $.BER);
    }
    if (value.networkFunctionIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.networkFunctionIdentifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PSHeader(value, elGetter);
}


/* eslint-enable */
