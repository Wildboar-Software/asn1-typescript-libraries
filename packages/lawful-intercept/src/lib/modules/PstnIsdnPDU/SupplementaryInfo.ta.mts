/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InformationAppliesTo, _decode_InformationAppliesTo, _encode_InformationAppliesTo } from "../PstnIsdnPDU/InformationAppliesTo.ta.mjs";
// export { InformationAppliesTo, _decode_InformationAppliesTo, _encode_InformationAppliesTo } from "../PstnIsdnPDU/InformationAppliesTo.ta.mjs";
import { FrameType, _decode_FrameType, _encode_FrameType, _enum_for_FrameType } from "../PstnIsdnPDU/FrameType.ta.mjs";
// export { FrameType, _enum_for_FrameType, FrameType_ipFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, ipFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_udpFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, udpFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_applicationFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, applicationFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_audioFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, audioFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_artificialRtpFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, artificialRtpFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FrameType, _encode_FrameType } from "../PstnIsdnPDU/FrameType.ta.mjs";
import { AlternateProtocol, _decode_AlternateProtocol, _encode_AlternateProtocol, _enum_for_AlternateProtocol } from "../PstnIsdnPDU/AlternateProtocol.ta.mjs";
// export { AlternateProtocol, _enum_for_AlternateProtocol, AlternateProtocol_uDPTL /* IMPORTED_LONG_ENUMERATION_ITEM */, uDPTL /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlternateProtocol, _encode_AlternateProtocol } from "../PstnIsdnPDU/AlternateProtocol.ta.mjs";


/**
 * @summary SupplementaryInfo
 * @description
 *
 * What the LEMF needs in order to decode one direction of PSTN/ISDN CC: the
 * codec, any extra SDP media parameters, encryption details, and which
 * protocol headers are actually in the CC. Each instance carries one media
 * format. A format change is a new instance.
 *
 * Send it as soon as possible, and before the CC when it is already known.
 * CC shall not be buffered or delayed while waiting for it. If interpreting
 * the CC depends on this information, the provider's system has to avoid that
 * delay. One instance is required for each direction present. When the two
 * directions differ (for example a different codec towards the target than
 * away from it), `payloadDirection` on every CC PDU is `toTarget` or
 * `fromTarget` only. When several CC links are in use, one instance is
 * required per link.
 *
 * It is sent as IRI (`PstnIsdnIRI`) and/or inside CC PDUs. On the CC path it
 * is present at least on the first PDU, and on a later PDU only when the
 * information changes during the session. The LEMF has to be able to see
 * where in the CC stream a change takes effect; if the CC itself does not
 * show that, set `firstPDUNumber`.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupplementaryInfo ::= SEQUENCE
 * {
 *     informationAppliesTo    [0] InformationAppliesTo,
 *         -- Identifies the PDUs to which this info applies
 *     mediaFormat             [1] INTEGER (0..127),
 *         -- As defined in RFC 3551 [10]
 *     mediaAttributes         [2] OCTET STRING OPTIONAL,
 *         -- Format as per RFC 4566 [7]
 *         -- Clause 6.3 describes when the mediaAttributes shall be present
 *     encryptionKey           [3] OCTET STRING OPTIONAL,
 *         -- Format as per RFC 4566 [7]
 *     sessionName             [4] OCTET STRING OPTIONAL,
 *         -- Format as per RFC 4566 [7]
 *     sessionInfo             [5] OCTET STRING OPTIONAL,
 *         -- Format as per RFC 4566 [7]
 *     copyOfSDPMessage        [6] OCTET STRING OPTIONAL,
 *         -- Format as per RFC 4566 [7]
 *     ...,
 *     frameType               [7] FrameType OPTIONAL,
 *         -- Populated if one or more protocol layers are missing from CC data
 *         -- May be omitted if all headers are present.
 *     alternateProtocol       [8] AlternateProtocol OPTIONAL
 *         -- Used to identify the protocol of packets sent in pstnIsdnCCContents
 * 
 * 
 * }
 * ```
 * 
 * @class
 */
export
class SupplementaryInfo {
    /**
     * @summary `informationAppliesTo`.
     * @description
     *
     * Which CC PDUs this information describes: direction, CC link, and, when
     * a change is not visible in the CC itself, the first sequence number.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.3.3 and 6.3.4.
     *
     * @public
     * @readonly
     */
    readonly informationAppliesTo: InformationAppliesTo;
    /**
     * @summary `mediaFormat`.
     * @description
     *
     * RTP payload type of the codec, as assigned by IETF RFC 3551. Range
     * 0..127. Exactly one format; a change is another `SupplementaryInfo`.
     * Under PSTN/ISDN the codec is typically G.711 (ITU-T G.711).
     *
     * When the payload is UDPTL, this shall be 0. That value is then
     * insignificant to the LEMF: it is not the static PCMU assignment.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.2 and 6.3.2.
     *
     * @public
     * @readonly
     */
    readonly mediaFormat: INTEGER;
    /**
     * @summary `mediaAttributes`.
     * @description
     *
     * Parameters the LEMF needs beyond the payload type, in the syntax of an
     * SDP `a=` field (IETF RFC 4566). Required whenever the payload type
     * alone is not enough to decode the CC. Typically present if and only if
     * `mediaFormat` is 32 or above.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.2.
     *
     * @public
     * @readonly
     */
    readonly mediaAttributes: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `encryptionKey`.
     * @description
     *
     * Encryption details, in the syntax defined by IETF RFC 4566. The ASN.1
     * comment points at that RFC; the field table points at clause 6.2.
     *
     * Encryption applied inside the CSP's domain, and under the CSP's
     * control, is either removed or fully described, including the keys.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.2 and 6.3.2.
     *
     * @public
     * @readonly
     */
    readonly encryptionKey: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sessionName`.
     * @description
     *
     * SDP session name (`s=` in IETF RFC 4566), when the target communication
     * has one. Included only as decided by national agreement.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.2.
     *
     * @public
     * @readonly
     */
    readonly sessionName: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sessionInfo`.
     * @description
     *
     * SDP session information (`i=` in IETF RFC 4566), when the target
     * communication has that field. Included only as decided by national
     * agreement. The field table's second sentence repeats "it may be
     * present" and does not add a further rule.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.2.
     *
     * @public
     * @readonly
     */
    readonly sessionInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `copyOfSDPMessage`.
     * @description
     *
     * An SDP message (IETF RFC 4566), in addition to the session and media
     * fields above. Optional.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.2.
     *
     * @public
     * @readonly
     */
    readonly copyOfSDPMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `frameType`.
     * @description
     *
     * Which of the application, UDP, and IP headers are in the CC. Required
     * when one or more of them are missing. May be omitted when all three are
     * present.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.2 and 6.3.2.
     *
     * @public
     * @readonly
     */
    readonly frameType: OPTIONAL<FrameType>;
    /**
     * @summary `alternateProtocol`.
     * @description
     *
     * Application protocol of `pstnIsdnCCContents` when a complete IP, UDP, or
     * application frame is present and the payload is not RTP. The only
     * defined value is UDPTL.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.2 and annex A.
     *
     * @public
     * @readonly
     */
    readonly alternateProtocol: OPTIONAL<AlternateProtocol>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        informationAppliesTo: InformationAppliesTo,
        mediaFormat: INTEGER,
        mediaAttributes?: OPTIONAL<OCTET_STRING>,
        encryptionKey?: OPTIONAL<OCTET_STRING>,
        sessionName?: OPTIONAL<OCTET_STRING>,
        sessionInfo?: OPTIONAL<OCTET_STRING>,
        copyOfSDPMessage?: OPTIONAL<OCTET_STRING>,
        frameType?: OPTIONAL<FrameType>,
        alternateProtocol?: OPTIONAL<AlternateProtocol>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.informationAppliesTo = informationAppliesTo;
        this.mediaFormat = mediaFormat;
        this.mediaAttributes = mediaAttributes;
        this.encryptionKey = encryptionKey;
        this.sessionName = sessionName;
        this.sessionInfo = sessionInfo;
        this.copyOfSDPMessage = copyOfSDPMessage;
        this.frameType = frameType;
        this.alternateProtocol = alternateProtocol;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SupplementaryInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SupplementaryInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplementaryInfo`.
     * @returns {SupplementaryInfo}
     */
    public static _from_object (_o: { [_K in keyof (SupplementaryInfo)]: (SupplementaryInfo)[_K] }): SupplementaryInfo {
        return new SupplementaryInfo(_o.informationAppliesTo, _o.mediaFormat, _o.mediaAttributes, _o.encryptionKey, _o.sessionName, _o.sessionInfo, _o.copyOfSDPMessage, _o.frameType, _o.alternateProtocol, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `frameType`
         * @public
         * @static
         */

    public static _enum_for_frameType = _enum_for_FrameType;        /**
         * @summary The enum used as the type of the component `alternateProtocol`
         * @public
         * @static
         */

    public static _enum_for_alternateProtocol = _enum_for_AlternateProtocol;
}

/**
 * @summary The Leading Root Component Types of SupplementaryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SupplementaryInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("informationAppliesTo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaFormat", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mediaAttributes", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("encryptionKey", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sessionName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sessionInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("copyOfSDPMessage", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of SupplementaryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SupplementaryInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SupplementaryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SupplementaryInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("frameType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("alternateProtocol", true, $.hasTag(_TagClass.context, 8))
];

let _cached_decoder_for_SupplementaryInfo: $.ASN1Decoder<SupplementaryInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplementaryInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupplementaryInfo (el: _Element): SupplementaryInfo {
    if (!_cached_decoder_for_SupplementaryInfo) { _cached_decoder_for_SupplementaryInfo = function (el: _Element): SupplementaryInfo {
    let informationAppliesTo!: InformationAppliesTo;
    let mediaFormat!: INTEGER;
    let mediaAttributes: OPTIONAL<OCTET_STRING>;
    let encryptionKey: OPTIONAL<OCTET_STRING>;
    let sessionName: OPTIONAL<OCTET_STRING>;
    let sessionInfo: OPTIONAL<OCTET_STRING>;
    let copyOfSDPMessage: OPTIONAL<OCTET_STRING>;
    let frameType: OPTIONAL<FrameType>;
    let alternateProtocol: OPTIONAL<AlternateProtocol>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "informationAppliesTo": (_el: _Element): void => { informationAppliesTo = $._decode_implicit<InformationAppliesTo>(() => _decode_InformationAppliesTo)(_el); },
        "mediaFormat": (_el: _Element): void => {
            mediaFormat = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof mediaFormat === "bigint" ? mediaFormat : BigInt(mediaFormat);
            if (_n < 0n || _n > 127n) {
                throw new ASN1OverflowError("SupplementaryInfo.mediaFormat violates INTEGER range");
            }
        },
        "mediaAttributes": (_el: _Element): void => { mediaAttributes = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "encryptionKey": (_el: _Element): void => { encryptionKey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sessionName": (_el: _Element): void => { sessionName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sessionInfo": (_el: _Element): void => { sessionInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "copyOfSDPMessage": (_el: _Element): void => { copyOfSDPMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "frameType": (_el: _Element): void => { frameType = $._decode_implicit<FrameType>(() => _decode_FrameType)(_el); },
        "alternateProtocol": (_el: _Element): void => { alternateProtocol = $._decode_implicit<AlternateProtocol>(() => _decode_AlternateProtocol)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SupplementaryInfo,
        _extension_additions_list_spec_for_SupplementaryInfo,
        _root_component_type_list_2_spec_for_SupplementaryInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SupplementaryInfo(
        informationAppliesTo,
        mediaFormat,
        mediaAttributes,
        encryptionKey,
        sessionName,
        sessionInfo,
        copyOfSDPMessage,
        frameType,
        alternateProtocol,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SupplementaryInfo(el);
}

let _cached_encoder_for_SupplementaryInfo: $.ASN1Encoder<SupplementaryInfo> | null = null;

/**
 * @summary Encodes a(n) SupplementaryInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplementaryInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SupplementaryInfo (value: SupplementaryInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupplementaryInfo) { _cached_encoder_for_SupplementaryInfo = function (value: SupplementaryInfo, elGetter: $.ASN1Encoder<SupplementaryInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InformationAppliesTo, $.BER)(value.informationAppliesTo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.mediaFormat, $.BER);
    if (value.mediaAttributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.mediaAttributes, $.BER);
    }
    if (value.encryptionKey !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.encryptionKey, $.BER);
    }
    if (value.sessionName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.sessionName, $.BER);
    }
    if (value.sessionInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.sessionInfo, $.BER);
    }
    if (value.copyOfSDPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.copyOfSDPMessage, $.BER);
    }
    if (value.frameType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_FrameType, $.BER)(value.frameType, $.BER);
    }
    if (value.alternateProtocol !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_AlternateProtocol, $.BER)(value.alternateProtocol, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SupplementaryInfo(value, elGetter);
}


/* eslint-enable */
