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
import { O_BcsmTriggerDetectionPoint, _enum_for_O_BcsmTriggerDetectionPoint, O_BcsmTriggerDetectionPoint_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, O_BcsmTriggerDetectionPoint_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_O_BcsmTriggerDetectionPoint, _encode_O_BcsmTriggerDetectionPoint } from "../MAP-MS-DataTypes/O-BcsmTriggerDetectionPoint.ta.mjs";
// export { O_BcsmTriggerDetectionPoint, _enum_for_O_BcsmTriggerDetectionPoint, O_BcsmTriggerDetectionPoint_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, O_BcsmTriggerDetectionPoint_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_O_BcsmTriggerDetectionPoint, _encode_O_BcsmTriggerDetectionPoint } from "../MAP-MS-DataTypes/O-BcsmTriggerDetectionPoint.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { DefaultCallHandling, _enum_for_DefaultCallHandling, DefaultCallHandling_continueCall /* IMPORTED_LONG_ENUMERATION_ITEM */, continueCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, DefaultCallHandling_releaseCall /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DefaultCallHandling, _encode_DefaultCallHandling } from "../MAP-MS-DataTypes/DefaultCallHandling.ta.mjs";
// export { DefaultCallHandling, _enum_for_DefaultCallHandling, DefaultCallHandling_continueCall /* IMPORTED_LONG_ENUMERATION_ITEM */, continueCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, DefaultCallHandling_releaseCall /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DefaultCallHandling, _encode_DefaultCallHandling } from "../MAP-MS-DataTypes/DefaultCallHandling.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary O_BcsmCamelTDPData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-BcsmCamelTDPData ::= SEQUENCE {
 *     o-BcsmTriggerDetectionPoint    O-BcsmTriggerDetectionPoint,
 *     serviceKey    ServiceKey,
 *     gsmSCF-Address    [0] ISDN-AddressString,
 *     defaultCallHandling    [1] DefaultCallHandling,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class O_BcsmCamelTDPData {
    constructor (
        /**
         * @summary `o_BcsmTriggerDetectionPoint`.
         * @public
         * @readonly
         */
        readonly o_BcsmTriggerDetectionPoint: O_BcsmTriggerDetectionPoint,
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
         * @summary `defaultCallHandling`.
         * @public
         * @readonly
         */
        readonly defaultCallHandling: DefaultCallHandling,
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
     * @summary Restructures an object into a O_BcsmCamelTDPData
     * @description
     * 
     * This takes an `object` and converts it to a `O_BcsmCamelTDPData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `O_BcsmCamelTDPData`.
     * @returns {O_BcsmCamelTDPData}
     */
    public static _from_object (_o: { [_K in keyof (O_BcsmCamelTDPData)]: (O_BcsmCamelTDPData)[_K] }): O_BcsmCamelTDPData {
        return new O_BcsmCamelTDPData(_o.o_BcsmTriggerDetectionPoint, _o.serviceKey, _o.gsmSCF_Address, _o.defaultCallHandling, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `o_BcsmTriggerDetectionPoint`
         * @public
         * @static
         */

    public static _enum_for_o_BcsmTriggerDetectionPoint = _enum_for_O_BcsmTriggerDetectionPoint;        /**
         * @summary The enum used as the type of the component `defaultCallHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling = _enum_for_DefaultCallHandling;
}

/**
 * @summary The Leading Root Component Types of O_BcsmCamelTDPData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_O_BcsmCamelTDPData: $.ComponentSpec[] = [
    new $.ComponentSpec("o-BcsmTriggerDetectionPoint", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("defaultCallHandling", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of O_BcsmCamelTDPData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_O_BcsmCamelTDPData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of O_BcsmCamelTDPData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_O_BcsmCamelTDPData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_O_BcsmCamelTDPData: $.ASN1Decoder<O_BcsmCamelTDPData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) O_BcsmCamelTDPData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_O_BcsmCamelTDPData (el: _Element): O_BcsmCamelTDPData {
    if (!_cached_decoder_for_O_BcsmCamelTDPData) { _cached_decoder_for_O_BcsmCamelTDPData = function (el: _Element): O_BcsmCamelTDPData {
    let o_BcsmTriggerDetectionPoint!: O_BcsmTriggerDetectionPoint;
    let serviceKey!: ServiceKey;
    let gsmSCF_Address!: ISDN_AddressString;
    let defaultCallHandling!: DefaultCallHandling;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "o-BcsmTriggerDetectionPoint": (_el: _Element): void => { o_BcsmTriggerDetectionPoint = _decode_O_BcsmTriggerDetectionPoint(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = _decode_ServiceKey(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "defaultCallHandling": (_el: _Element): void => { defaultCallHandling = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_O_BcsmCamelTDPData,
        _extension_additions_list_spec_for_O_BcsmCamelTDPData,
        _root_component_type_list_2_spec_for_O_BcsmCamelTDPData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new O_BcsmCamelTDPData(
        o_BcsmTriggerDetectionPoint,
        serviceKey,
        gsmSCF_Address,
        defaultCallHandling,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_O_BcsmCamelTDPData(el);
}

let _cached_encoder_for_O_BcsmCamelTDPData: $.ASN1Encoder<O_BcsmCamelTDPData> | null = null;

/**
 * @summary Encodes a(n) O_BcsmCamelTDPData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_BcsmCamelTDPData, encoded as an ASN.1 Element.
 */
export
function _encode_O_BcsmCamelTDPData (value: O_BcsmCamelTDPData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_O_BcsmCamelTDPData) { _cached_encoder_for_O_BcsmCamelTDPData = function (value: O_BcsmCamelTDPData, elGetter: $.ASN1Encoder<O_BcsmCamelTDPData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_O_BcsmTriggerDetectionPoint(value.o_BcsmTriggerDetectionPoint, $.BER),
            /* REQUIRED   */ _encode_ServiceKey(value.serviceKey, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCF_Address, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_O_BcsmCamelTDPData(value, elGetter);
}


/* eslint-enable */
