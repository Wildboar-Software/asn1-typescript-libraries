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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SM_DeliveryTimerValue, _decode_SM_DeliveryTimerValue, _encode_SM_DeliveryTimerValue } from "../MAP-SM-DataTypes/SM-DeliveryTimerValue.ta.mjs";
// export { SM_DeliveryTimerValue, _decode_SM_DeliveryTimerValue, _encode_SM_DeliveryTimerValue } from "../MAP-SM-DataTypes/SM-DeliveryTimerValue.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary IP_SM_GW_Guidance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IP-SM-GW-Guidance ::= SEQUENCE {
 *     minimumDeliveryTimeValue    SM-DeliveryTimerValue,
 *     recommendedDeliveryTimeValue    SM-DeliveryTimerValue,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class IP_SM_GW_Guidance {
    constructor (
        /**
         * @summary `minimumDeliveryTimeValue`.
         * @public
         * @readonly
         */
        readonly minimumDeliveryTimeValue: SM_DeliveryTimerValue,
        /**
         * @summary `recommendedDeliveryTimeValue`.
         * @public
         * @readonly
         */
        readonly recommendedDeliveryTimeValue: SM_DeliveryTimerValue,
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
     * @summary Restructures an object into a IP_SM_GW_Guidance
     * @description
     * 
     * This takes an `object` and converts it to a `IP_SM_GW_Guidance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IP_SM_GW_Guidance`.
     * @returns {IP_SM_GW_Guidance}
     */
    public static _from_object (_o: { [_K in keyof (IP_SM_GW_Guidance)]: (IP_SM_GW_Guidance)[_K] }): IP_SM_GW_Guidance {
        return new IP_SM_GW_Guidance(_o.minimumDeliveryTimeValue, _o.recommendedDeliveryTimeValue, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IP_SM_GW_Guidance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IP_SM_GW_Guidance: $.ComponentSpec[] = [
    new $.ComponentSpec("minimumDeliveryTimeValue", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("recommendedDeliveryTimeValue", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of IP_SM_GW_Guidance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IP_SM_GW_Guidance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IP_SM_GW_Guidance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IP_SM_GW_Guidance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IP_SM_GW_Guidance: $.ASN1Decoder<IP_SM_GW_Guidance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IP_SM_GW_Guidance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IP_SM_GW_Guidance (el: _Element): IP_SM_GW_Guidance {
    if (!_cached_decoder_for_IP_SM_GW_Guidance) { _cached_decoder_for_IP_SM_GW_Guidance = function (el: _Element): IP_SM_GW_Guidance {
    let minimumDeliveryTimeValue!: SM_DeliveryTimerValue;
    let recommendedDeliveryTimeValue!: SM_DeliveryTimerValue;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "minimumDeliveryTimeValue": (_el: _Element): void => { minimumDeliveryTimeValue = _decode_SM_DeliveryTimerValue(_el); },
        "recommendedDeliveryTimeValue": (_el: _Element): void => { recommendedDeliveryTimeValue = _decode_SM_DeliveryTimerValue(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IP_SM_GW_Guidance,
        _extension_additions_list_spec_for_IP_SM_GW_Guidance,
        _root_component_type_list_2_spec_for_IP_SM_GW_Guidance,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IP_SM_GW_Guidance(
        minimumDeliveryTimeValue,
        recommendedDeliveryTimeValue,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IP_SM_GW_Guidance(el);
}

let _cached_encoder_for_IP_SM_GW_Guidance: $.ASN1Encoder<IP_SM_GW_Guidance> | null = null;

/**
 * @summary Encodes a(n) IP_SM_GW_Guidance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IP_SM_GW_Guidance, encoded as an ASN.1 Element.
 */
export
function _encode_IP_SM_GW_Guidance (value: IP_SM_GW_Guidance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IP_SM_GW_Guidance) { _cached_encoder_for_IP_SM_GW_Guidance = function (value: IP_SM_GW_Guidance, elGetter: $.ASN1Encoder<IP_SM_GW_Guidance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SM_DeliveryTimerValue(value.minimumDeliveryTimeValue, $.BER),
            /* REQUIRED   */ _encode_SM_DeliveryTimerValue(value.recommendedDeliveryTimeValue, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IP_SM_GW_Guidance(value, elGetter);
}


/* eslint-enable */
