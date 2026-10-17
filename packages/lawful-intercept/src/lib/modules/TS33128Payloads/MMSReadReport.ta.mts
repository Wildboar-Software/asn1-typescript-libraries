/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { MMSReadStatus, _decode_MMSReadStatus, _encode_MMSReadStatus, _enum_for_MMSReadStatus } from "../TS33128Payloads/MMSReadStatus.ta.mjs";
// export { MMSReadStatus, _enum_for_MMSReadStatus, MMSReadStatus_read /* IMPORTED_LONG_ENUMERATION_ITEM */, read /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSReadStatus_deletedWithoutBeingRead /* IMPORTED_LONG_ENUMERATION_ITEM */, deletedWithoutBeingRead /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSReadStatus, _encode_MMSReadStatus } from "../TS33128Payloads/MMSReadStatus.ta.mjs";


/**
 * @summary MMSReadReport
 * @description
 * 
 * The IRI-POI present in the MMS Proxy-Relay shall generate an xIRI containing
 * an MMSReadReport record when the MMS Proxy-Relay:
 *
 * - sends a m-read-orig-ind (as defined in OMA-TS-MMS_ENC [39] clause 6.7.2) to
 *   the MMS client in the target UE, or
 *
 * - receives a m-read-rec-ind (as defined in OMA-TS-MMS_ENC [39] clause 6.7.2)
 *   from the MMS client in the target UE.
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadReport ::= SEQUENCE
 * {
 *     version             [1] MMSVersion,
 *     messageID           [2] UTF8String,
 *     terminatingMMSParty [3] SEQUENCE OF MMSParty,
 *     originatingMMSParty [4] SEQUENCE OF MMSParty,
 *     direction           [5] MMSDirection,
 *     mMSDateTime         [6] Timestamp,
 *     readStatus          [7] MMSReadStatus,
 *     applicID            [8] UTF8String OPTIONAL,
 *     replyApplicID       [9] UTF8String OPTIONAL,
 *     auxApplicInfo       [10] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSReadReport {
    /**
     * @summary `version`.
     * @description
     *
     * The version of MM, to include major and minor version.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly version: MMSVersion;
    /**
     * @summary `messageID`.
     * @description
     *
     * An ID assigned by the MMS Proxy-Relay to uniquely identify an MM. As
     * defined in OMA-TS-MMS_ENC [39] clause 7.3.29.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly messageID: UTF8String;
    /**
     * @summary `terminatingMMSParty`.
     * @description
     *
     * ID(s) of the terminating party (i.e. the intended recipient of the read
     * report or the originator of the initial MM message to which the read
     * report applies) in one or more of the formats described in clause
     * 7.4.2.1. When address translation occurs (such as the case of a token
     * sent by the client and replaced with a proper address by the MMS
     * Proxy-Relay), both the pre and post translated addresses (with
     * appropriate correlation) are included.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly terminatingMMSParty: MMSParty[];
    /**
     * @summary `originatingMMSParty`.
     * @description
     *
     * ID(s) of the originating party (i.e. the originator of the read report or
     * the recipient the initial MM message to which the read report applies) in
     * one or more of the formats described in clause 7.4.2.1. When address
     * translation occurs (such as the case of a token sent by the client and
     * replaced with a proper address by the MMS Proxy-Relay), both the pre and
     * post translated addresses (with appropriate correlation) are included.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly originatingMMSParty: MMSParty[];
    /**
     * @summary `direction`.
     * @description
     *
     * Indicates the direction of the original MM (not of this message). This
     * shall be encoded either as "from target", or "to target", as appropriate.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly direction: MMSDirection;
    /**
     * @summary `mMSDateTime`.
     * @public
     * @readonly
     */
    readonly mMSDateTime: Timestamp;
    /**
     * @summary `readStatus`.
     * @description
     *
     * Status of the MMS (e.g. read or deleted without reading).
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly readStatus: MMSReadStatus;
    /**
     * @summary `applicID`.
     * @description
     *
     * Identification of the originating application of the original MM. As
     * defined in OMA-TS-MMS_ENC [39] clause 7.3.2. Include if sent to/by the
     * MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly applicID: OPTIONAL<UTF8String>;
    /**
     * @summary `replyApplicID`.
     * @description
     *
     * Identification of an application to which replies, delivery reports, and
     * read reports are addressed. As defined in OMA-TS-MMS_ENC [39] clause
     * 7.3.42. Include if sent to/by the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly replyApplicID: OPTIONAL<UTF8String>;
    /**
     * @summary `auxApplicInfo`.
     * @description
     *
     * Auxiliary application addressing information as indicated in the original
     * MM. As defined in OMA-TS-MMS_ENC [39] clause 7.3.4. Include if sent to/by
     * the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.15.
     *
     * @public
     * @readonly
     */
    readonly auxApplicInfo: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        version: MMSVersion,
        messageID: UTF8String,
        terminatingMMSParty: MMSParty[],
        originatingMMSParty: MMSParty[],
        direction: MMSDirection,
        mMSDateTime: Timestamp,
        readStatus: MMSReadStatus,
        applicID: OPTIONAL<UTF8String>,
        replyApplicID: OPTIONAL<UTF8String>,
        auxApplicInfo: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.version = version;
        this.messageID = messageID;
        this.terminatingMMSParty = terminatingMMSParty;
        this.originatingMMSParty = originatingMMSParty;
        this.direction = direction;
        this.mMSDateTime = mMSDateTime;
        this.readStatus = readStatus;
        this.applicID = applicID;
        this.replyApplicID = replyApplicID;
        this.auxApplicInfo = auxApplicInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSReadReport
     * @description
     * 
     * This takes an `object` and converts it to a `MMSReadReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSReadReport`.
     * @returns {MMSReadReport}
     */
    public static _from_object (_o: { [_K in keyof (MMSReadReport)]: (MMSReadReport)[_K] }): MMSReadReport {
        return new MMSReadReport(_o.version, _o.messageID, _o.terminatingMMSParty, _o.originatingMMSParty, _o.direction, _o.mMSDateTime, _o.readStatus, _o.applicID, _o.replyApplicID, _o.auxApplicInfo, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `readStatus`
         * @public
         * @static
         */

    public static _enum_for_readStatus = _enum_for_MMSReadStatus;
}

/**
 * @summary The Leading Root Component Types of MMSReadReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSReadReport: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminatingMMSParty", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatingMMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mMSDateTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("readStatus", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("applicID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("replyApplicID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("auxApplicInfo", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of MMSReadReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSReadReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSReadReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSReadReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSReadReport: $.ASN1Decoder<MMSReadReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSReadReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSReadReport (el: _Element): MMSReadReport {
    if (!_cached_decoder_for_MMSReadReport) { _cached_decoder_for_MMSReadReport = function (el: _Element): MMSReadReport {
    let version!: MMSVersion;
    let messageID!: UTF8String;
    let terminatingMMSParty!: MMSParty[];
    let originatingMMSParty!: MMSParty[];
    let direction!: MMSDirection;
    let mMSDateTime!: Timestamp;
    let readStatus!: MMSReadStatus;
    let applicID: OPTIONAL<UTF8String>;
    let replyApplicID: OPTIONAL<UTF8String>;
    let auxApplicInfo: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "terminatingMMSParty": (_el: _Element): void => { terminatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "originatingMMSParty": (_el: _Element): void => { originatingMMSParty = $._decode_implicit<MMSParty[]>(() => $._decodeSequenceOf<MMSParty>(() => _decode_MMSParty))(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "mMSDateTime": (_el: _Element): void => { mMSDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "readStatus": (_el: _Element): void => { readStatus = $._decode_implicit<MMSReadStatus>(() => _decode_MMSReadStatus)(_el); },
        "applicID": (_el: _Element): void => { applicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "replyApplicID": (_el: _Element): void => { replyApplicID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "auxApplicInfo": (_el: _Element): void => { auxApplicInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSReadReport,
        _extension_additions_list_spec_for_MMSReadReport,
        _root_component_type_list_2_spec_for_MMSReadReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMSReadReport(
        version,
        messageID,
        terminatingMMSParty,
        originatingMMSParty,
        direction,
        mMSDateTime,
        readStatus,
        applicID,
        replyApplicID,
        auxApplicInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMSReadReport(el);
}

let _cached_encoder_for_MMSReadReport: $.ASN1Encoder<MMSReadReport> | null = null;

/**
 * @summary Encodes a(n) MMSReadReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSReadReport, encoded as an ASN.1 Element.
 */
export
function _encode_MMSReadReport (value: MMSReadReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSReadReport) { _cached_encoder_for_MMSReadReport = function (value: MMSReadReport, elGetter: $.ASN1Encoder<MMSReadReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.terminatingMMSParty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<MMSParty>(() => _encode_MMSParty, $.BER), $.BER)(value.originatingMMSParty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSDirection, $.BER)(value.direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Timestamp, $.BER)(value.mMSDateTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_MMSReadStatus, $.BER)(value.readStatus, $.BER);
    if (value.applicID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.applicID, $.BER);
    }
    if (value.replyApplicID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.replyApplicID, $.BER);
    }
    if (value.auxApplicInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.auxApplicInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSReadReport(value, elGetter);
}


/* eslint-enable */
