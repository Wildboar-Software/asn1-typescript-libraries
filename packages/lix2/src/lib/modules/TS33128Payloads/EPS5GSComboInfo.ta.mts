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
import { EPSInterworkingIndication, _enum_for_EPSInterworkingIndication, EPSInterworkingIndication_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSInterworkingIndication_withN26 /* IMPORTED_LONG_ENUMERATION_ITEM */, withN26 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSInterworkingIndication_withoutN26 /* IMPORTED_LONG_ENUMERATION_ITEM */, withoutN26 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSInterworkingIndication_iwkNon3GPP /* IMPORTED_LONG_ENUMERATION_ITEM */, iwkNon3GPP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSInterworkingIndication, _encode_EPSInterworkingIndication } from "../TS33128Payloads/EPSInterworkingIndication.ta.mjs";
// export { EPSInterworkingIndication, _enum_for_EPSInterworkingIndication, EPSInterworkingIndication_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSInterworkingIndication_withN26 /* IMPORTED_LONG_ENUMERATION_ITEM */, withN26 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSInterworkingIndication_withoutN26 /* IMPORTED_LONG_ENUMERATION_ITEM */, withoutN26 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSInterworkingIndication_iwkNon3GPP /* IMPORTED_LONG_ENUMERATION_ITEM */, iwkNon3GPP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSInterworkingIndication, _encode_EPSInterworkingIndication } from "../TS33128Payloads/EPSInterworkingIndication.ta.mjs";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
import { EPSPDNCnxInfo, _decode_EPSPDNCnxInfo, _encode_EPSPDNCnxInfo } from "../TS33128Payloads/EPSPDNCnxInfo.ta.mjs";
// export { EPSPDNCnxInfo, _decode_EPSPDNCnxInfo, _encode_EPSPDNCnxInfo } from "../TS33128Payloads/EPSPDNCnxInfo.ta.mjs";
import { EPSBearerInfo, _decode_EPSBearerInfo, _encode_EPSBearerInfo } from "../TS33128Payloads/EPSBearerInfo.ta.mjs";
// export { EPSBearerInfo, _decode_EPSBearerInfo, _encode_EPSBearerInfo } from "../TS33128Payloads/EPSBearerInfo.ta.mjs";


/**
 * @summary EPS5GSComboInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS5GSComboInfo ::= SEQUENCE
 * {
 *     ePSInterworkingIndication [1] EPSInterworkingIndication,
 *     ePSSubscriberIDs          [2] EPSSubscriberIDs,
 *     ePSPDNCnxInfo             [3] EPSPDNCnxInfo OPTIONAL,
 *     ePSBearerInfo             [4] EPSBearerInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPS5GSComboInfo {
    constructor (
        /**
         * @summary `ePSInterworkingIndication`.
         * @public
         * @readonly
         */
        readonly ePSInterworkingIndication: EPSInterworkingIndication,
        /**
         * @summary `ePSSubscriberIDs`.
         * @public
         * @readonly
         */
        readonly ePSSubscriberIDs: EPSSubscriberIDs,
        /**
         * @summary `ePSPDNCnxInfo`.
         * @public
         * @readonly
         */
        readonly ePSPDNCnxInfo: OPTIONAL<EPSPDNCnxInfo>,
        /**
         * @summary `ePSBearerInfo`.
         * @public
         * @readonly
         */
        readonly ePSBearerInfo: OPTIONAL<EPSBearerInfo>
    ) {}

    /**
     * @summary Restructures an object into a EPS5GSComboInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EPS5GSComboInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPS5GSComboInfo`.
     * @returns {EPS5GSComboInfo}
     */
    public static _from_object (_o: { [_K in keyof (EPS5GSComboInfo)]: (EPS5GSComboInfo)[_K] }): EPS5GSComboInfo {
        return new EPS5GSComboInfo(_o.ePSInterworkingIndication, _o.ePSSubscriberIDs, _o.ePSPDNCnxInfo, _o.ePSBearerInfo);
    }

        /**
         * @summary The enum used as the type of the component `ePSInterworkingIndication`
         * @public
         * @static
         */

    public static _enum_for_ePSInterworkingIndication = _enum_for_EPSInterworkingIndication;
}

/**
 * @summary The Leading Root Component Types of EPS5GSComboInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPS5GSComboInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSInterworkingIndication", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ePSSubscriberIDs", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ePSPDNCnxInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ePSBearerInfo", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EPS5GSComboInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPS5GSComboInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPS5GSComboInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPS5GSComboInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPS5GSComboInfo: $.ASN1Decoder<EPS5GSComboInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS5GSComboInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS5GSComboInfo (el: _Element): EPS5GSComboInfo {
    if (!_cached_decoder_for_EPS5GSComboInfo) { _cached_decoder_for_EPS5GSComboInfo = function (el: _Element): EPS5GSComboInfo {
    let ePSInterworkingIndication!: EPSInterworkingIndication;
    let ePSSubscriberIDs!: EPSSubscriberIDs;
    let ePSPDNCnxInfo: OPTIONAL<EPSPDNCnxInfo>;
    let ePSBearerInfo: OPTIONAL<EPSBearerInfo>;
    const callbacks: $.DecodingMap = {
        "ePSInterworkingIndication": (_el: _Element): void => { ePSInterworkingIndication = $._decode_implicit<EPSInterworkingIndication>(() => _decode_EPSInterworkingIndication)(_el); },
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); },
        "ePSPDNCnxInfo": (_el: _Element): void => { ePSPDNCnxInfo = $._decode_implicit<EPSPDNCnxInfo>(() => _decode_EPSPDNCnxInfo)(_el); },
        "ePSBearerInfo": (_el: _Element): void => { ePSBearerInfo = $._decode_implicit<EPSBearerInfo>(() => _decode_EPSBearerInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPS5GSComboInfo,
        _extension_additions_list_spec_for_EPS5GSComboInfo,
        _root_component_type_list_2_spec_for_EPS5GSComboInfo,
        undefined,
    );
    return new EPS5GSComboInfo(
        ePSInterworkingIndication,
        ePSSubscriberIDs,
        ePSPDNCnxInfo,
        ePSBearerInfo
    );
}; }
    return _cached_decoder_for_EPS5GSComboInfo(el);
}

let _cached_encoder_for_EPS5GSComboInfo: $.ASN1Encoder<EPS5GSComboInfo> | null = null;

/**
 * @summary Encodes a(n) EPS5GSComboInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS5GSComboInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EPS5GSComboInfo (value: EPS5GSComboInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS5GSComboInfo) { _cached_encoder_for_EPS5GSComboInfo = function (value: EPS5GSComboInfo, elGetter: $.ASN1Encoder<EPS5GSComboInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSInterworkingIndication, $.BER)(value.ePSInterworkingIndication, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER),
            /* IF_ABSENT  */ ((value.ePSPDNCnxInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EPSPDNCnxInfo, $.BER)(value.ePSPDNCnxInfo, $.BER)),
            /* IF_ABSENT  */ ((value.ePSBearerInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerInfo, $.BER)(value.ePSBearerInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPS5GSComboInfo(value, elGetter);
}


/* eslint-enable */
