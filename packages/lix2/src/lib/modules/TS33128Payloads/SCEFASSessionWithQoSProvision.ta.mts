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
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { AForASSessionWithQoSOpType, _enum_for_AForASSessionWithQoSOpType, AForASSessionWithQoSOpType_pOST /* IMPORTED_LONG_ENUMERATION_ITEM */, pOST /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_pUT /* IMPORTED_LONG_ENUMERATION_ITEM */, pUT /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_pATCH /* IMPORTED_LONG_ENUMERATION_ITEM */, pATCH /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_dELETE /* IMPORTED_LONG_ENUMERATION_ITEM */, dELETE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSOpType, _encode_AForASSessionWithQoSOpType } from "../TS33128Payloads/AForASSessionWithQoSOpType.ta.mjs";
// export { AForASSessionWithQoSOpType, _enum_for_AForASSessionWithQoSOpType, AForASSessionWithQoSOpType_pOST /* IMPORTED_LONG_ENUMERATION_ITEM */, pOST /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_pUT /* IMPORTED_LONG_ENUMERATION_ITEM */, pUT /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_pATCH /* IMPORTED_LONG_ENUMERATION_ITEM */, pATCH /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_dELETE /* IMPORTED_LONG_ENUMERATION_ITEM */, dELETE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSOpType, _encode_AForASSessionWithQoSOpType } from "../TS33128Payloads/AForASSessionWithQoSOpType.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode, AForASSessionWithQoSResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";
// export { AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode, AForASSessionWithQoSResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";


/**
 * @summary SCEFASSessionWithQoSProvision
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFASSessionWithQoSProvision ::= SEQUENCE
 * {
 *     mSISDN                               [1] MSISDN OPTIONAL,
 *     externalIdentifier                   [2] NAI OPTIONAL,
 *     sCSASID                              [3] SCSASID,
 *     aSSessionWithQoSOpType               [4] AForASSessionWithQoSOpType,
 *     aSSessionWithQoSSubscription         [5] SBIType OPTIONAL,
 *     aSSessionWithQoSSubscriptionPatch    [6] SBIType OPTIONAL,
 *     aSSessionWithQoSResponseCode         [7] AForASSessionWithQoSResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class SCEFASSessionWithQoSProvision {
    constructor (
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
         * @summary `sCSASID`.
         * @public
         * @readonly
         */
        readonly sCSASID: SCSASID,
        /**
         * @summary `aSSessionWithQoSOpType`.
         * @public
         * @readonly
         */
        readonly aSSessionWithQoSOpType: AForASSessionWithQoSOpType,
        /**
         * @summary `aSSessionWithQoSSubscription`.
         * @public
         * @readonly
         */
        readonly aSSessionWithQoSSubscription: OPTIONAL<SBIType>,
        /**
         * @summary `aSSessionWithQoSSubscriptionPatch`.
         * @public
         * @readonly
         */
        readonly aSSessionWithQoSSubscriptionPatch: OPTIONAL<SBIType>,
        /**
         * @summary `aSSessionWithQoSResponseCode`.
         * @public
         * @readonly
         */
        readonly aSSessionWithQoSResponseCode: AForASSessionWithQoSResponseCode
    ) {}

    /**
     * @summary Restructures an object into a SCEFASSessionWithQoSProvision
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFASSessionWithQoSProvision`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFASSessionWithQoSProvision`.
     * @returns {SCEFASSessionWithQoSProvision}
     */
    public static _from_object (_o: { [_K in keyof (SCEFASSessionWithQoSProvision)]: (SCEFASSessionWithQoSProvision)[_K] }): SCEFASSessionWithQoSProvision {
        return new SCEFASSessionWithQoSProvision(_o.mSISDN, _o.externalIdentifier, _o.sCSASID, _o.aSSessionWithQoSOpType, _o.aSSessionWithQoSSubscription, _o.aSSessionWithQoSSubscriptionPatch, _o.aSSessionWithQoSResponseCode);
    }

        /**
         * @summary The enum used as the type of the component `aSSessionWithQoSOpType`
         * @public
         * @static
         */

    public static _enum_for_aSSessionWithQoSOpType = _enum_for_AForASSessionWithQoSOpType;        /**
         * @summary The enum used as the type of the component `aSSessionWithQoSResponseCode`
         * @public
         * @static
         */

    public static _enum_for_aSSessionWithQoSResponseCode = _enum_for_AForASSessionWithQoSResponseCode;
}

/**
 * @summary The Leading Root Component Types of SCEFASSessionWithQoSProvision
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFASSessionWithQoSProvision: $.ComponentSpec[] = [
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sCSASID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aSSessionWithQoSOpType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aSSessionWithQoSSubscription", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aSSessionWithQoSSubscriptionPatch", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aSSessionWithQoSResponseCode", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SCEFASSessionWithQoSProvision
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFASSessionWithQoSProvision: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFASSessionWithQoSProvision
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFASSessionWithQoSProvision: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFASSessionWithQoSProvision: $.ASN1Decoder<SCEFASSessionWithQoSProvision> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFASSessionWithQoSProvision
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFASSessionWithQoSProvision (el: _Element): SCEFASSessionWithQoSProvision {
    if (!_cached_decoder_for_SCEFASSessionWithQoSProvision) { _cached_decoder_for_SCEFASSessionWithQoSProvision = function (el: _Element): SCEFASSessionWithQoSProvision {
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let sCSASID!: SCSASID;
    let aSSessionWithQoSOpType!: AForASSessionWithQoSOpType;
    let aSSessionWithQoSSubscription: OPTIONAL<SBIType>;
    let aSSessionWithQoSSubscriptionPatch: OPTIONAL<SBIType>;
    let aSSessionWithQoSResponseCode!: AForASSessionWithQoSResponseCode;
    const callbacks: $.DecodingMap = {
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "aSSessionWithQoSOpType": (_el: _Element): void => { aSSessionWithQoSOpType = $._decode_implicit<AForASSessionWithQoSOpType>(() => _decode_AForASSessionWithQoSOpType)(_el); },
        "aSSessionWithQoSSubscription": (_el: _Element): void => { aSSessionWithQoSSubscription = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "aSSessionWithQoSSubscriptionPatch": (_el: _Element): void => { aSSessionWithQoSSubscriptionPatch = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "aSSessionWithQoSResponseCode": (_el: _Element): void => { aSSessionWithQoSResponseCode = $._decode_implicit<AForASSessionWithQoSResponseCode>(() => _decode_AForASSessionWithQoSResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFASSessionWithQoSProvision,
        _extension_additions_list_spec_for_SCEFASSessionWithQoSProvision,
        _root_component_type_list_2_spec_for_SCEFASSessionWithQoSProvision,
        undefined,
    );
    return new SCEFASSessionWithQoSProvision(
        mSISDN,
        externalIdentifier,
        sCSASID,
        aSSessionWithQoSOpType,
        aSSessionWithQoSSubscription,
        aSSessionWithQoSSubscriptionPatch,
        aSSessionWithQoSResponseCode
    );
}; }
    return _cached_decoder_for_SCEFASSessionWithQoSProvision(el);
}

let _cached_encoder_for_SCEFASSessionWithQoSProvision: $.ASN1Encoder<SCEFASSessionWithQoSProvision> | null = null;

/**
 * @summary Encodes a(n) SCEFASSessionWithQoSProvision into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFASSessionWithQoSProvision, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFASSessionWithQoSProvision (value: SCEFASSessionWithQoSProvision, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFASSessionWithQoSProvision) { _cached_encoder_for_SCEFASSessionWithQoSProvision = function (value: SCEFASSessionWithQoSProvision, elGetter: $.ASN1Encoder<SCEFASSessionWithQoSProvision>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_AForASSessionWithQoSOpType, $.BER)(value.aSSessionWithQoSOpType, $.BER),
            /* IF_ABSENT  */ ((value.aSSessionWithQoSSubscription === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.aSSessionWithQoSSubscription, $.BER)),
            /* IF_ABSENT  */ ((value.aSSessionWithQoSSubscriptionPatch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SBIType, $.BER)(value.aSSessionWithQoSSubscriptionPatch, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_AForASSessionWithQoSResponseCode, $.BER)(value.aSSessionWithQoSResponseCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFASSessionWithQoSProvision(value, elGetter);
}


/* eslint-enable */
