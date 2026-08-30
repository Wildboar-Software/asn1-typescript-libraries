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
import { SMS_TriggerDetectionPoint, _enum_for_SMS_TriggerDetectionPoint, SMS_TriggerDetectionPoint_sms_CollectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_CollectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_TriggerDetectionPoint_sms_DeliveryRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_DeliveryRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_TriggerDetectionPoint, _encode_SMS_TriggerDetectionPoint } from "../MAP-MS-DataTypes/SMS-TriggerDetectionPoint.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { DefaultSMS_Handling, _enum_for_DefaultSMS_Handling, DefaultSMS_Handling_continueTransaction /* IMPORTED_LONG_ENUMERATION_ITEM */, continueTransaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, DefaultSMS_Handling_releaseTransaction /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseTransaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DefaultSMS_Handling, _encode_DefaultSMS_Handling } from "../MAP-MS-DataTypes/DefaultSMS-Handling.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SMS_CAMEL_TDP_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-CAMEL-TDP-Data ::= SEQUENCE {
 *     sms-TriggerDetectionPoint    [0] SMS-TriggerDetectionPoint,
 *     serviceKey    [1] ServiceKey,
 *     gsmSCF-Address    [2] ISDN-AddressString,
 *     defaultSMS-Handling    [3] DefaultSMS-Handling,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class SMS_CAMEL_TDP_Data {
    constructor (
        /**
         * @summary `sms_TriggerDetectionPoint`.
         * @public
         * @readonly
         */
        readonly sms_TriggerDetectionPoint: SMS_TriggerDetectionPoint,
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
         * @summary `defaultSMS_Handling`.
         * @public
         * @readonly
         */
        readonly defaultSMS_Handling: DefaultSMS_Handling,
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
     * @summary Restructures an object into a SMS_CAMEL_TDP_Data
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_CAMEL_TDP_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_CAMEL_TDP_Data`.
     * @returns {SMS_CAMEL_TDP_Data}
     */
    public static _from_object (_o: { [_K in keyof (SMS_CAMEL_TDP_Data)]: (SMS_CAMEL_TDP_Data)[_K] }): SMS_CAMEL_TDP_Data {
        return new SMS_CAMEL_TDP_Data(_o.sms_TriggerDetectionPoint, _o.serviceKey, _o.gsmSCF_Address, _o.defaultSMS_Handling, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sms_TriggerDetectionPoint`
         * @public
         * @static
         */

    public static _enum_for_sms_TriggerDetectionPoint = _enum_for_SMS_TriggerDetectionPoint;        /**
         * @summary The enum used as the type of the component `defaultSMS_Handling`
         * @public
         * @static
         */

    public static _enum_for_defaultSMS_Handling = _enum_for_DefaultSMS_Handling;
}

/**
 * @summary The Leading Root Component Types of SMS_CAMEL_TDP_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_CAMEL_TDP_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("sms-TriggerDetectionPoint", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultSMS-Handling", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SMS_CAMEL_TDP_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_CAMEL_TDP_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_CAMEL_TDP_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_CAMEL_TDP_Data: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMS_CAMEL_TDP_Data: $.ASN1Decoder<SMS_CAMEL_TDP_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_CAMEL_TDP_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_CAMEL_TDP_Data (el: _Element): SMS_CAMEL_TDP_Data {
    if (!_cached_decoder_for_SMS_CAMEL_TDP_Data) { _cached_decoder_for_SMS_CAMEL_TDP_Data = function (el: _Element): SMS_CAMEL_TDP_Data {
    let sms_TriggerDetectionPoint!: SMS_TriggerDetectionPoint;
    let serviceKey!: ServiceKey;
    let gsmSCF_Address!: ISDN_AddressString;
    let defaultSMS_Handling!: DefaultSMS_Handling;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sms-TriggerDetectionPoint": (_el: _Element): void => { sms_TriggerDetectionPoint = $._decode_implicit<SMS_TriggerDetectionPoint>(() => _decode_SMS_TriggerDetectionPoint)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "defaultSMS-Handling": (_el: _Element): void => { defaultSMS_Handling = $._decode_implicit<DefaultSMS_Handling>(() => _decode_DefaultSMS_Handling)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMS_CAMEL_TDP_Data,
        _extension_additions_list_spec_for_SMS_CAMEL_TDP_Data,
        _root_component_type_list_2_spec_for_SMS_CAMEL_TDP_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMS_CAMEL_TDP_Data(
        sms_TriggerDetectionPoint,
        serviceKey,
        gsmSCF_Address,
        defaultSMS_Handling,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMS_CAMEL_TDP_Data(el);
}

let _cached_encoder_for_SMS_CAMEL_TDP_Data: $.ASN1Encoder<SMS_CAMEL_TDP_Data> | null = null;

/**
 * @summary Encodes a(n) SMS_CAMEL_TDP_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_CAMEL_TDP_Data, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_CAMEL_TDP_Data (value: SMS_CAMEL_TDP_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_CAMEL_TDP_Data) { _cached_encoder_for_SMS_CAMEL_TDP_Data = function (value: SMS_CAMEL_TDP_Data, elGetter: $.ASN1Encoder<SMS_CAMEL_TDP_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SMS_TriggerDetectionPoint, $.BER)(value.sms_TriggerDetectionPoint, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCF_Address, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_DefaultSMS_Handling, $.BER)(value.defaultSMS_Handling, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMS_CAMEL_TDP_Data(value, elGetter);
}


/* eslint-enable */
