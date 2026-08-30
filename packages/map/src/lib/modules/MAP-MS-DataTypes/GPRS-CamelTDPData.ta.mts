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
import { GPRS_TriggerDetectionPoint, _enum_for_GPRS_TriggerDetectionPoint, GPRS_TriggerDetectionPoint_attach /* IMPORTED_LONG_ENUMERATION_ITEM */, attach /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRS_TriggerDetectionPoint_attachChangeOfPosition /* IMPORTED_LONG_ENUMERATION_ITEM */, attachChangeOfPosition /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRS_TriggerDetectionPoint_pdp_ContextEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pdp_ContextEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRS_TriggerDetectionPoint_pdp_ContextEstablishmentAcknowledgement /* IMPORTED_LONG_ENUMERATION_ITEM */, pdp_ContextEstablishmentAcknowledgement /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRS_TriggerDetectionPoint_pdp_ContextChangeOfPosition /* IMPORTED_LONG_ENUMERATION_ITEM */, pdp_ContextChangeOfPosition /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GPRS_TriggerDetectionPoint, _encode_GPRS_TriggerDetectionPoint } from "../MAP-MS-DataTypes/GPRS-TriggerDetectionPoint.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { DefaultGPRS_Handling, _enum_for_DefaultGPRS_Handling, DefaultGPRS_Handling_continueTransaction /* IMPORTED_LONG_ENUMERATION_ITEM */, continueTransaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, DefaultGPRS_Handling_releaseTransaction /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseTransaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DefaultGPRS_Handling, _encode_DefaultGPRS_Handling } from "../MAP-MS-DataTypes/DefaultGPRS-Handling.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary GPRS_CamelTDPData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-CamelTDPData ::= SEQUENCE {
 *     gprs-TriggerDetectionPoint    [0] GPRS-TriggerDetectionPoint,
 *     serviceKey    [1] ServiceKey,
 *     gsmSCF-Address    [2] ISDN-AddressString,
 *     defaultSessionHandling    [3] DefaultGPRS-Handling,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class GPRS_CamelTDPData {
    constructor (
        /**
         * @summary `gprs_TriggerDetectionPoint`.
         * @public
         * @readonly
         */
        readonly gprs_TriggerDetectionPoint: GPRS_TriggerDetectionPoint,
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `gsmSCF_Address`.
         * @public
         * @readonly
         */
        readonly gsmSCF_Address: ISDN_AddressString,
        /**
         * @summary `defaultSessionHandling`.
         * @public
         * @readonly
         */
        readonly defaultSessionHandling: DefaultGPRS_Handling,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GPRS_CamelTDPData
     * @description
     * 
     * This takes an `object` and converts it to a `GPRS_CamelTDPData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GPRS_CamelTDPData`.
     * @returns {GPRS_CamelTDPData}
     */
    public static _from_object (_o: { [_K in keyof (GPRS_CamelTDPData)]: (GPRS_CamelTDPData)[_K] }): GPRS_CamelTDPData {
        return new GPRS_CamelTDPData(_o.gprs_TriggerDetectionPoint, _o.serviceKey, _o.gsmSCF_Address, _o.defaultSessionHandling, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `gprs_TriggerDetectionPoint`
         * @public
         * @static
         */

    public static _enum_for_gprs_TriggerDetectionPoint = _enum_for_GPRS_TriggerDetectionPoint;        /**
         * @summary The enum used as the type of the component `defaultSessionHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultSessionHandling = _enum_for_DefaultGPRS_Handling;
}

/**
 * @summary The Leading Root Component Types of GPRS_CamelTDPData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GPRS_CamelTDPData: $.ComponentSpec[] = [
    new $.ComponentSpec("gprs-TriggerDetectionPoint", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultSessionHandling", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of GPRS_CamelTDPData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GPRS_CamelTDPData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GPRS_CamelTDPData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GPRS_CamelTDPData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GPRS_CamelTDPData: $.ASN1Decoder<GPRS_CamelTDPData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_CamelTDPData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_CamelTDPData (el: _Element): GPRS_CamelTDPData {
    if (!_cached_decoder_for_GPRS_CamelTDPData) { _cached_decoder_for_GPRS_CamelTDPData = function (el: _Element): GPRS_CamelTDPData {
    let gprs_TriggerDetectionPoint!: GPRS_TriggerDetectionPoint;
    let serviceKey!: ServiceKey;
    let gsmSCF_Address!: ISDN_AddressString;
    let defaultSessionHandling!: DefaultGPRS_Handling;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gprs-TriggerDetectionPoint": (_el: _Element): void => { gprs_TriggerDetectionPoint = $._decode_implicit<GPRS_TriggerDetectionPoint>(() => _decode_GPRS_TriggerDetectionPoint)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "defaultSessionHandling": (_el: _Element): void => { defaultSessionHandling = $._decode_implicit<DefaultGPRS_Handling>(() => _decode_DefaultGPRS_Handling)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRS_CamelTDPData,
        _extension_additions_list_spec_for_GPRS_CamelTDPData,
        _root_component_type_list_2_spec_for_GPRS_CamelTDPData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRS_CamelTDPData(
        gprs_TriggerDetectionPoint,
        serviceKey,
        gsmSCF_Address,
        defaultSessionHandling,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GPRS_CamelTDPData(el);
}

let _cached_encoder_for_GPRS_CamelTDPData: $.ASN1Encoder<GPRS_CamelTDPData> | null = null;

/**
 * @summary Encodes a(n) GPRS_CamelTDPData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_CamelTDPData, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_CamelTDPData (value: GPRS_CamelTDPData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_CamelTDPData) { _cached_encoder_for_GPRS_CamelTDPData = function (value: GPRS_CamelTDPData, elGetter: $.ASN1Encoder<GPRS_CamelTDPData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GPRS_TriggerDetectionPoint, $.BER)(value.gprs_TriggerDetectionPoint, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCF_Address, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_DefaultGPRS_Handling, $.BER)(value.defaultSessionHandling, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GPRS_CamelTDPData(value, elGetter);
}


/* eslint-enable */
