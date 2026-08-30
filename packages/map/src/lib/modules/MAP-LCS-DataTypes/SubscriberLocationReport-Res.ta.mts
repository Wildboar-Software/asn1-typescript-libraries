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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { ReportingPLMNList, _decode_ReportingPLMNList, _encode_ReportingPLMNList } from "../MAP-LCS-DataTypes/ReportingPLMNList.ta.mjs";
import { LCS_ReferenceNumber, _decode_LCS_ReferenceNumber, _encode_LCS_ReferenceNumber } from "../MAP-LCS-DataTypes/LCS-ReferenceNumber.ta.mjs";


/**
 * @summary SubscriberLocationReport_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberLocationReport-Res ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL, 
 *     ..., 
 *     na-ESRK    [0] ISDN-AddressString    OPTIONAL,
 *     na-ESRD    [1] ISDN-AddressString    OPTIONAL,
 *     h-gmlc-Address    [2]    GSN-Address    OPTIONAL,
 *     mo-lrShortCircuitIndicator    [3] NULL    OPTIONAL,
 *     reportingPLMNList    [4] ReportingPLMNList    OPTIONAL,
 *     lcs-ReferenceNumber    [5]    LCS-ReferenceNumber    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SubscriberLocationReport_Res {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `na_ESRK`.
         * @public
         * @readonly
         */
        readonly na_ESRK: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `na_ESRD`.
         * @public
         * @readonly
         */
        readonly na_ESRD: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `h_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly h_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `mo_lrShortCircuitIndicator`.
         * @public
         * @readonly
         */
        readonly mo_lrShortCircuitIndicator: OPTIONAL<NULL>,
        /**
         * @summary `reportingPLMNList`.
         * @public
         * @readonly
         */
        readonly reportingPLMNList: OPTIONAL<ReportingPLMNList>,
        /**
         * @summary `lcs_ReferenceNumber`.
         * @public
         * @readonly
         */
        readonly lcs_ReferenceNumber: OPTIONAL<LCS_ReferenceNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubscriberLocationReport_Res
     * @description
     * 
     * This takes an `object` and converts it to a `SubscriberLocationReport_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscriberLocationReport_Res`.
     * @returns {SubscriberLocationReport_Res}
     */
    public static _from_object (_o: { [_K in keyof (SubscriberLocationReport_Res)]: (SubscriberLocationReport_Res)[_K] }): SubscriberLocationReport_Res {
        return new SubscriberLocationReport_Res(_o.extensionContainer, _o.na_ESRK, _o.na_ESRD, _o.h_gmlc_Address, _o.mo_lrShortCircuitIndicator, _o.reportingPLMNList, _o.lcs_ReferenceNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SubscriberLocationReport_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscriberLocationReport_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SubscriberLocationReport_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscriberLocationReport_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscriberLocationReport_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscriberLocationReport_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("na-ESRK", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("na-ESRD", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("h-gmlc-Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mo-lrShortCircuitIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("reportingPLMNList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lcs-ReferenceNumber", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_SubscriberLocationReport_Res: $.ASN1Decoder<SubscriberLocationReport_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberLocationReport_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberLocationReport_Res (el: _Element): SubscriberLocationReport_Res {
    if (!_cached_decoder_for_SubscriberLocationReport_Res) { _cached_decoder_for_SubscriberLocationReport_Res = function (el: _Element): SubscriberLocationReport_Res {
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let na_ESRK: OPTIONAL<ISDN_AddressString> = undefined;
    let na_ESRD: OPTIONAL<ISDN_AddressString> = undefined;
    let h_gmlc_Address: OPTIONAL<GSN_Address> = undefined;
    let mo_lrShortCircuitIndicator: OPTIONAL<NULL> = undefined;
    let reportingPLMNList: OPTIONAL<ReportingPLMNList> = undefined;
    let lcs_ReferenceNumber: OPTIONAL<LCS_ReferenceNumber> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "na-ESRK": (_el: _Element): void => { na_ESRK = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "na-ESRD": (_el: _Element): void => { na_ESRD = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "h-gmlc-Address": (_el: _Element): void => { h_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "mo-lrShortCircuitIndicator": (_el: _Element): void => { mo_lrShortCircuitIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reportingPLMNList": (_el: _Element): void => { reportingPLMNList = $._decode_implicit<ReportingPLMNList>(() => _decode_ReportingPLMNList)(_el); },
        "lcs-ReferenceNumber": (_el: _Element): void => { lcs_ReferenceNumber = $._decode_implicit<LCS_ReferenceNumber>(() => _decode_LCS_ReferenceNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubscriberLocationReport_Res,
        _extension_additions_list_spec_for_SubscriberLocationReport_Res,
        _root_component_type_list_2_spec_for_SubscriberLocationReport_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SubscriberLocationReport_Res(
        extensionContainer,
        na_ESRK,
        na_ESRD,
        h_gmlc_Address,
        mo_lrShortCircuitIndicator,
        reportingPLMNList,
        lcs_ReferenceNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SubscriberLocationReport_Res(el);
}

let _cached_encoder_for_SubscriberLocationReport_Res: $.ASN1Encoder<SubscriberLocationReport_Res> | null = null;

/**
 * @summary Encodes a(n) SubscriberLocationReport_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberLocationReport_Res, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberLocationReport_Res (value: SubscriberLocationReport_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberLocationReport_Res) { _cached_encoder_for_SubscriberLocationReport_Res = function (value: SubscriberLocationReport_Res, elGetter: $.ASN1Encoder<SubscriberLocationReport_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.na_ESRK === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.na_ESRK, $.BER)),
            /* IF_ABSENT  */ ((value.na_ESRD === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.na_ESRD, $.BER)),
            /* IF_ABSENT  */ ((value.h_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GSN_Address, $.BER)(value.h_gmlc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.mo_lrShortCircuitIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.mo_lrShortCircuitIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.reportingPLMNList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ReportingPLMNList, $.BER)(value.reportingPLMNList, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_ReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LCS_ReferenceNumber, $.BER)(value.lcs_ReferenceNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubscriberLocationReport_Res(value, elGetter);
}


/* eslint-enable */
