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
import { CCBS_Feature, _decode_CCBS_Feature, _encode_CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ServiceIndicator, ServiceIndicator_clir_invoked /* IMPORTED_LONG_NAMED_BIT */, clir_invoked /* IMPORTED_SHORT_NAMED_BIT */, ServiceIndicator_camel_invoked /* IMPORTED_LONG_NAMED_BIT */, camel_invoked /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServiceIndicator, _encode_ServiceIndicator } from "../MAP-SS-DataTypes/ServiceIndicator.ta.mjs";
import { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";


/**
 * @summary CCBS_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-Data ::= SEQUENCE {
 *     ccbs-Feature    [0]    CCBS-Feature,
 *     translatedB-Number    [1]    ISDN-AddressString,
 *     serviceIndicator    [2]    ServiceIndicator    OPTIONAL,
 *     callInfo    [3]    ExternalSignalInfo,
 *     networkSignalInfo    [4]    ExternalSignalInfo,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CCBS_Data {
    constructor (
        /**
         * @summary `ccbs_Feature`.
         * @public
         * @readonly
         */
        readonly ccbs_Feature: CCBS_Feature,
        /**
         * @summary `translatedB_Number`.
         * @public
         * @readonly
         */
        readonly translatedB_Number: ISDN_AddressString,
        /**
         * @summary `serviceIndicator`.
         * @public
         * @readonly
         */
        readonly serviceIndicator: OPTIONAL<ServiceIndicator>,
        /**
         * @summary `callInfo`.
         * @public
         * @readonly
         */
        readonly callInfo: ExternalSignalInfo,
        /**
         * @summary `networkSignalInfo`.
         * @public
         * @readonly
         */
        readonly networkSignalInfo: ExternalSignalInfo,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CCBS_Data
     * @description
     * 
     * This takes an `object` and converts it to a `CCBS_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCBS_Data`.
     * @returns {CCBS_Data}
     */
    public static _from_object (_o: { [_K in keyof (CCBS_Data)]: (CCBS_Data)[_K] }): CCBS_Data {
        return new CCBS_Data(_o.ccbs_Feature, _o.translatedB_Number, _o.serviceIndicator, _o.callInfo, _o.networkSignalInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CCBS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCBS_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("ccbs-Feature", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("translatedB-Number", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("networkSignalInfo", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CCBS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCBS_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCBS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCBS_Data: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCBS_Data: $.ASN1Decoder<CCBS_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCBS_Data (el: _Element): CCBS_Data {
    if (!_cached_decoder_for_CCBS_Data) { _cached_decoder_for_CCBS_Data = function (el: _Element): CCBS_Data {
    let ccbs_Feature!: CCBS_Feature;
    let translatedB_Number!: ISDN_AddressString;
    let serviceIndicator: OPTIONAL<ServiceIndicator> = undefined;
    let callInfo!: ExternalSignalInfo;
    let networkSignalInfo!: ExternalSignalInfo;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ccbs-Feature": (_el: _Element): void => { ccbs_Feature = $._decode_implicit<CCBS_Feature>(() => _decode_CCBS_Feature)(_el); },
        "translatedB-Number": (_el: _Element): void => { translatedB_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "serviceIndicator": (_el: _Element): void => { serviceIndicator = $._decode_implicit<ServiceIndicator>(() => _decode_ServiceIndicator)(_el); },
        "callInfo": (_el: _Element): void => { callInfo = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "networkSignalInfo": (_el: _Element): void => { networkSignalInfo = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCBS_Data,
        _extension_additions_list_spec_for_CCBS_Data,
        _root_component_type_list_2_spec_for_CCBS_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCBS_Data(
        ccbs_Feature,
        translatedB_Number,
        serviceIndicator,
        callInfo,
        networkSignalInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCBS_Data(el);
}

let _cached_encoder_for_CCBS_Data: $.ASN1Encoder<CCBS_Data> | null = null;

/**
 * @summary Encodes a(n) CCBS_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_Data, encoded as an ASN.1 Element.
 */
export
function _encode_CCBS_Data (value: CCBS_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCBS_Data) { _cached_encoder_for_CCBS_Data = function (value: CCBS_Data, elGetter: $.ASN1Encoder<CCBS_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CCBS_Feature, $.BER)(value.ccbs_Feature, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.translatedB_Number, $.BER),
            /* IF_ABSENT  */ ((value.serviceIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceIndicator, $.BER)(value.serviceIndicator, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ExternalSignalInfo, $.BER)(value.callInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_ExternalSignalInfo, $.BER)(value.networkSignalInfo, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CCBS_Data(value, elGetter);
}


/* eslint-enable */
