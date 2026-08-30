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
import { SM_EnumeratedDeliveryFailureCause, _enum_for_SM_EnumeratedDeliveryFailureCause, SM_EnumeratedDeliveryFailureCause_memoryCapacityExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryCapacityExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_equipmentProtocolError /* IMPORTED_LONG_ENUMERATION_ITEM */, equipmentProtocolError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_equipmentNotSM_Equipped /* IMPORTED_LONG_ENUMERATION_ITEM */, equipmentNotSM_Equipped /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_unknownServiceCentre /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownServiceCentre /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_sc_Congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, sc_Congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_invalidSME_Address /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidSME_Address /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_subscriberNotSC_Subscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriberNotSC_Subscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_EnumeratedDeliveryFailureCause, _encode_SM_EnumeratedDeliveryFailureCause } from "../MAP-ER-DataTypes/SM-EnumeratedDeliveryFailureCause.ta.mjs";
// export { SM_EnumeratedDeliveryFailureCause, _enum_for_SM_EnumeratedDeliveryFailureCause, SM_EnumeratedDeliveryFailureCause_memoryCapacityExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryCapacityExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_equipmentProtocolError /* IMPORTED_LONG_ENUMERATION_ITEM */, equipmentProtocolError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_equipmentNotSM_Equipped /* IMPORTED_LONG_ENUMERATION_ITEM */, equipmentNotSM_Equipped /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_unknownServiceCentre /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownServiceCentre /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_sc_Congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, sc_Congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_invalidSME_Address /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidSME_Address /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_EnumeratedDeliveryFailureCause_subscriberNotSC_Subscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriberNotSC_Subscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_EnumeratedDeliveryFailureCause, _encode_SM_EnumeratedDeliveryFailureCause } from "../MAP-ER-DataTypes/SM-EnumeratedDeliveryFailureCause.ta.mjs";
import { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
// export { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SM_DeliveryFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryFailureCause ::= SEQUENCE {
 *     sm-EnumeratedDeliveryFailureCause    SM-EnumeratedDeliveryFailureCause,
 *     diagnosticInfo    SignalInfo    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SM_DeliveryFailureCause {
    constructor (
        /**
         * @summary `sm_EnumeratedDeliveryFailureCause`.
         * @public
         * @readonly
         */
        readonly sm_EnumeratedDeliveryFailureCause: SM_EnumeratedDeliveryFailureCause,
        /**
         * @summary `diagnosticInfo`.
         * @public
         * @readonly
         */
        readonly diagnosticInfo: OPTIONAL<SignalInfo>,
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
     * @summary Restructures an object into a SM_DeliveryFailureCause
     * @description
     * 
     * This takes an `object` and converts it to a `SM_DeliveryFailureCause`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SM_DeliveryFailureCause`.
     * @returns {SM_DeliveryFailureCause}
     */
    public static _from_object (_o: { [_K in keyof (SM_DeliveryFailureCause)]: (SM_DeliveryFailureCause)[_K] }): SM_DeliveryFailureCause {
        return new SM_DeliveryFailureCause(_o.sm_EnumeratedDeliveryFailureCause, _o.diagnosticInfo, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sm_EnumeratedDeliveryFailureCause`
         * @public
         * @static
         */

    public static _enum_for_sm_EnumeratedDeliveryFailureCause = _enum_for_SM_EnumeratedDeliveryFailureCause;
}

/**
 * @summary The Leading Root Component Types of SM_DeliveryFailureCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SM_DeliveryFailureCause: $.ComponentSpec[] = [
    new $.ComponentSpec("sm-EnumeratedDeliveryFailureCause", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("diagnosticInfo", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SM_DeliveryFailureCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SM_DeliveryFailureCause: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SM_DeliveryFailureCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SM_DeliveryFailureCause: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SM_DeliveryFailureCause: $.ASN1Decoder<SM_DeliveryFailureCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_DeliveryFailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_DeliveryFailureCause (el: _Element): SM_DeliveryFailureCause {
    if (!_cached_decoder_for_SM_DeliveryFailureCause) { _cached_decoder_for_SM_DeliveryFailureCause = function (el: _Element): SM_DeliveryFailureCause {
    let sm_EnumeratedDeliveryFailureCause!: SM_EnumeratedDeliveryFailureCause;
    let diagnosticInfo: OPTIONAL<SignalInfo>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sm-EnumeratedDeliveryFailureCause": (_el: _Element): void => { sm_EnumeratedDeliveryFailureCause = _decode_SM_EnumeratedDeliveryFailureCause(_el); },
        "diagnosticInfo": (_el: _Element): void => { diagnosticInfo = _decode_SignalInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SM_DeliveryFailureCause,
        _extension_additions_list_spec_for_SM_DeliveryFailureCause,
        _root_component_type_list_2_spec_for_SM_DeliveryFailureCause,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SM_DeliveryFailureCause(
        sm_EnumeratedDeliveryFailureCause,
        diagnosticInfo,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SM_DeliveryFailureCause(el);
}

let _cached_encoder_for_SM_DeliveryFailureCause: $.ASN1Encoder<SM_DeliveryFailureCause> | null = null;

/**
 * @summary Encodes a(n) SM_DeliveryFailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_DeliveryFailureCause, encoded as an ASN.1 Element.
 */
export
function _encode_SM_DeliveryFailureCause (value: SM_DeliveryFailureCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_DeliveryFailureCause) { _cached_encoder_for_SM_DeliveryFailureCause = function (value: SM_DeliveryFailureCause, elGetter: $.ASN1Encoder<SM_DeliveryFailureCause>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SM_EnumeratedDeliveryFailureCause(value.sm_EnumeratedDeliveryFailureCause, $.BER),
            /* IF_ABSENT  */ ((value.diagnosticInfo === undefined) ? undefined : _encode_SignalInfo(value.diagnosticInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SM_DeliveryFailureCause(value, elGetter);
}


/* eslint-enable */
