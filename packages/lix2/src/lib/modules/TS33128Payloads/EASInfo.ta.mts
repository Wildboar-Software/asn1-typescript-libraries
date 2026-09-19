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
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { ServiceKPIs, _decode_ServiceKPIs, _encode_ServiceKPIs } from "../TS33128Payloads/ServiceKPIs.ta.mjs";
// export { ServiceKPIs, _decode_ServiceKPIs, _encode_ServiceKPIs } from "../TS33128Payloads/ServiceKPIs.ta.mjs";


/**
 * @summary EASInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASInfo ::= SEQUENCE
 * {
 *     eASID                 [1] EASID,
 *     expectedSvcKPIs       [2] ServiceKPIs OPTIONAL,
 *     minimumReqSvcKPIs     [3] ServiceKPIs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EASInfo {
    constructor (
        /**
         * @summary `eASID`.
         * @public
         * @readonly
         */
        readonly eASID: EASID,
        /**
         * @summary `expectedSvcKPIs`.
         * @public
         * @readonly
         */
        readonly expectedSvcKPIs: OPTIONAL<ServiceKPIs>,
        /**
         * @summary `minimumReqSvcKPIs`.
         * @public
         * @readonly
         */
        readonly minimumReqSvcKPIs: OPTIONAL<ServiceKPIs>
    ) {}

    /**
     * @summary Restructures an object into a EASInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EASInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASInfo`.
     * @returns {EASInfo}
     */
    public static _from_object (_o: { [_K in keyof (EASInfo)]: (EASInfo)[_K] }): EASInfo {
        return new EASInfo(_o.eASID, _o.expectedSvcKPIs, _o.minimumReqSvcKPIs);
    }


}

/**
 * @summary The Leading Root Component Types of EASInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("eASID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("expectedSvcKPIs", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("minimumReqSvcKPIs", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EASInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASInfo: $.ASN1Decoder<EASInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASInfo (el: _Element): EASInfo {
    if (!_cached_decoder_for_EASInfo) { _cached_decoder_for_EASInfo = function (el: _Element): EASInfo {
    let eASID!: EASID;
    let expectedSvcKPIs: OPTIONAL<ServiceKPIs>;
    let minimumReqSvcKPIs: OPTIONAL<ServiceKPIs>;
    const callbacks: $.DecodingMap = {
        "eASID": (_el: _Element): void => { eASID = $._decode_implicit<EASID>(() => _decode_EASID)(_el); },
        "expectedSvcKPIs": (_el: _Element): void => { expectedSvcKPIs = $._decode_implicit<ServiceKPIs>(() => _decode_ServiceKPIs)(_el); },
        "minimumReqSvcKPIs": (_el: _Element): void => { minimumReqSvcKPIs = $._decode_implicit<ServiceKPIs>(() => _decode_ServiceKPIs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EASInfo,
        _extension_additions_list_spec_for_EASInfo,
        _root_component_type_list_2_spec_for_EASInfo,
        undefined,
    );
    return new EASInfo(
        eASID,
        expectedSvcKPIs,
        minimumReqSvcKPIs
    );
}; }
    return _cached_decoder_for_EASInfo(el);
}

let _cached_encoder_for_EASInfo: $.ASN1Encoder<EASInfo> | null = null;

/**
 * @summary Encodes a(n) EASInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EASInfo (value: EASInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASInfo) { _cached_encoder_for_EASInfo = function (value: EASInfo, elGetter: $.ASN1Encoder<EASInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASID, $.BER)(value.eASID, $.BER),
            /* IF_ABSENT  */ ((value.expectedSvcKPIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceKPIs, $.BER)(value.expectedSvcKPIs, $.BER)),
            /* IF_ABSENT  */ ((value.minimumReqSvcKPIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ServiceKPIs, $.BER)(value.minimumReqSvcKPIs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EASInfo(value, elGetter);
}


/* eslint-enable */
