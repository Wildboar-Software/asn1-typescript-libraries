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
import { UDMInfoRequestType, _enum_for_UDMInfoRequestType, UDMInfoRequestType_hSS /* IMPORTED_LONG_ENUMERATION_ITEM */, hSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMInfoRequestType_aUSF /* IMPORTED_LONG_ENUMERATION_ITEM */, aUSF /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMInfoRequestType_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMInfoRequestType, _encode_UDMInfoRequestType } from "../TS33128Payloads/UDMInfoRequestType.ta.mjs";
// export { UDMInfoRequestType, _enum_for_UDMInfoRequestType, UDMInfoRequestType_hSS /* IMPORTED_LONG_ENUMERATION_ITEM */, hSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMInfoRequestType_aUSF /* IMPORTED_LONG_ENUMERATION_ITEM */, aUSF /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMInfoRequestType_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMInfoRequestType, _encode_UDMInfoRequestType } from "../TS33128Payloads/UDMInfoRequestType.ta.mjs";
import { SubscriberIdentifier, _decode_SubscriberIdentifier, _encode_SubscriberIdentifier } from "../TS33128Payloads/SubscriberIdentifier.ta.mjs";
// export { SubscriberIdentifier, _decode_SubscriberIdentifier, _encode_SubscriberIdentifier } from "../TS33128Payloads/SubscriberIdentifier.ta.mjs";
import { PrimaryAuthenticationType, _enum_for_PrimaryAuthenticationType, PrimaryAuthenticationType_eAPAKAPrime /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKAPrime /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_fiveGAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPTLS /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPTLS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_ePSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_iMSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_gBAAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, gBAAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_uMTSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, uMTSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrimaryAuthenticationType, _encode_PrimaryAuthenticationType } from "../TS33128Payloads/PrimaryAuthenticationType.ta.mjs";
// export { PrimaryAuthenticationType, _enum_for_PrimaryAuthenticationType, PrimaryAuthenticationType_eAPAKAPrime /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKAPrime /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_fiveGAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPTLS /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPTLS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_ePSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_iMSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_gBAAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, gBAAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_uMTSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, uMTSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrimaryAuthenticationType, _encode_PrimaryAuthenticationType } from "../TS33128Payloads/PrimaryAuthenticationType.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";
// export { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";
import { CAGID, _decode_CAGID, _encode_CAGID } from "../TS33128Payloads/CAGID.ta.mjs";
// export { CAGID, _decode_CAGID, _encode_CAGID } from "../TS33128Payloads/CAGID.ta.mjs";


/**
 * @summary UDMAuthenticationInfoRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMAuthenticationInfoRequest ::= SEQUENCE
 * {
 *     infoRequestType    [1] UDMInfoRequestType,
 *     rGAuthCtx          [2] SEQUENCE SIZE(1..MAX) OF SubscriberIdentifier,
 *     authType           [3] PrimaryAuthenticationType,
 *     servingNetworkName [4] PLMNID,
 *     aUSFInstanceID     [5] NFID OPTIONAL,
 *     cellCAGInfo        [6] CAGID OPTIONAL,
 *     n5GCIndicator      [7] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMAuthenticationInfoRequest {
    constructor (
        /**
         * @summary `infoRequestType`.
         * @public
         * @readonly
         */
        readonly infoRequestType: UDMInfoRequestType,
        /**
         * @summary `rGAuthCtx`.
         * @public
         * @readonly
         */
        readonly rGAuthCtx: SubscriberIdentifier[],
        /**
         * @summary `authType`.
         * @public
         * @readonly
         */
        readonly authType: PrimaryAuthenticationType,
        /**
         * @summary `servingNetworkName`.
         * @public
         * @readonly
         */
        readonly servingNetworkName: PLMNID,
        /**
         * @summary `aUSFInstanceID`.
         * @public
         * @readonly
         */
        readonly aUSFInstanceID: OPTIONAL<NFID>,
        /**
         * @summary `cellCAGInfo`.
         * @public
         * @readonly
         */
        readonly cellCAGInfo: OPTIONAL<CAGID>,
        /**
         * @summary `n5GCIndicator`.
         * @public
         * @readonly
         */
        readonly n5GCIndicator: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a UDMAuthenticationInfoRequest
     * @description
     * 
     * This takes an `object` and converts it to a `UDMAuthenticationInfoRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMAuthenticationInfoRequest`.
     * @returns {UDMAuthenticationInfoRequest}
     */
    public static _from_object (_o: { [_K in keyof (UDMAuthenticationInfoRequest)]: (UDMAuthenticationInfoRequest)[_K] }): UDMAuthenticationInfoRequest {
        return new UDMAuthenticationInfoRequest(_o.infoRequestType, _o.rGAuthCtx, _o.authType, _o.servingNetworkName, _o.aUSFInstanceID, _o.cellCAGInfo, _o.n5GCIndicator);
    }

        /**
         * @summary The enum used as the type of the component `infoRequestType`
         * @public
         * @static
         */

    public static _enum_for_infoRequestType = _enum_for_UDMInfoRequestType;        /**
         * @summary The enum used as the type of the component `authType`
         * @public
         * @static
         */

    public static _enum_for_authType = _enum_for_PrimaryAuthenticationType;
}

/**
 * @summary The Leading Root Component Types of UDMAuthenticationInfoRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMAuthenticationInfoRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("infoRequestType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rGAuthCtx", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("authType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servingNetworkName", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aUSFInstanceID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cellCAGInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("n5GCIndicator", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of UDMAuthenticationInfoRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMAuthenticationInfoRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMAuthenticationInfoRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMAuthenticationInfoRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMAuthenticationInfoRequest: $.ASN1Decoder<UDMAuthenticationInfoRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMAuthenticationInfoRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMAuthenticationInfoRequest (el: _Element): UDMAuthenticationInfoRequest {
    if (!_cached_decoder_for_UDMAuthenticationInfoRequest) { _cached_decoder_for_UDMAuthenticationInfoRequest = function (el: _Element): UDMAuthenticationInfoRequest {
    let infoRequestType!: UDMInfoRequestType;
    let rGAuthCtx!: SubscriberIdentifier[];
    let authType!: PrimaryAuthenticationType;
    let servingNetworkName!: PLMNID;
    let aUSFInstanceID: OPTIONAL<NFID>;
    let cellCAGInfo: OPTIONAL<CAGID>;
    let n5GCIndicator: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "infoRequestType": (_el: _Element): void => { infoRequestType = $._decode_implicit<UDMInfoRequestType>(() => _decode_UDMInfoRequestType)(_el); },
        "rGAuthCtx": (_el: _Element): void => { rGAuthCtx = $._decode_implicit<SubscriberIdentifier[]>(() => $._decodeSequenceOf<SubscriberIdentifier>(() => _decode_SubscriberIdentifier))(_el); },
        "authType": (_el: _Element): void => { authType = $._decode_implicit<PrimaryAuthenticationType>(() => _decode_PrimaryAuthenticationType)(_el); },
        "servingNetworkName": (_el: _Element): void => { servingNetworkName = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "aUSFInstanceID": (_el: _Element): void => { aUSFInstanceID = $._decode_implicit<NFID>(() => _decode_NFID)(_el); },
        "cellCAGInfo": (_el: _Element): void => { cellCAGInfo = $._decode_implicit<CAGID>(() => _decode_CAGID)(_el); },
        "n5GCIndicator": (_el: _Element): void => { n5GCIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMAuthenticationInfoRequest,
        _extension_additions_list_spec_for_UDMAuthenticationInfoRequest,
        _root_component_type_list_2_spec_for_UDMAuthenticationInfoRequest,
        undefined,
    );
    return new UDMAuthenticationInfoRequest(
        infoRequestType,
        rGAuthCtx,
        authType,
        servingNetworkName,
        aUSFInstanceID,
        cellCAGInfo,
        n5GCIndicator
    );
}; }
    return _cached_decoder_for_UDMAuthenticationInfoRequest(el);
}

let _cached_encoder_for_UDMAuthenticationInfoRequest: $.ASN1Encoder<UDMAuthenticationInfoRequest> | null = null;

/**
 * @summary Encodes a(n) UDMAuthenticationInfoRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMAuthenticationInfoRequest, encoded as an ASN.1 Element.
 */
export
function _encode_UDMAuthenticationInfoRequest (value: UDMAuthenticationInfoRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMAuthenticationInfoRequest) { _cached_encoder_for_UDMAuthenticationInfoRequest = function (value: UDMAuthenticationInfoRequest, elGetter: $.ASN1Encoder<UDMAuthenticationInfoRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UDMInfoRequestType, $.BER)(value.infoRequestType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SubscriberIdentifier>(() => _encode_SubscriberIdentifier, $.BER), $.BER)(value.rGAuthCtx, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PrimaryAuthenticationType, $.BER)(value.authType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PLMNID, $.BER)(value.servingNetworkName, $.BER),
            /* IF_ABSENT  */ ((value.aUSFInstanceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_NFID, $.BER)(value.aUSFInstanceID, $.BER)),
            /* IF_ABSENT  */ ((value.cellCAGInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CAGID, $.BER)(value.cellCAGInfo, $.BER)),
            /* IF_ABSENT  */ ((value.n5GCIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.n5GCIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMAuthenticationInfoRequest(value, elGetter);
}


/* eslint-enable */
