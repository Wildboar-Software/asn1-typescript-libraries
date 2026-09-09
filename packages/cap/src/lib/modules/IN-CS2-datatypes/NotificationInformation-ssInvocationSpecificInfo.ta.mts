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
import { InvokableService, _enum_for_InvokableService, InvokableService_callingLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, callingLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_connectedLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_reverseCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, reverseCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_explicitCallTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, explicitCallTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callCompletionOnBusySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InvokableService, _encode_InvokableService } from "../IN-CS2-datatypes/InvokableService.ta.mjs";
// export { InvokableService, _enum_for_InvokableService, InvokableService_callingLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, callingLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_connectedLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_reverseCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, reverseCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_explicitCallTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, explicitCallTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callCompletionOnBusySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InvokableService, _encode_InvokableService } from "../IN-CS2-datatypes/InvokableService.ta.mjs";


/**
 * @summary NotificationInformation_ssInvocationSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation-ssInvocationSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NotificationInformation_ssInvocationSpecificInfo {
    constructor (
        /**
         * @summary `invokedService`.
         * @public
         * @readonly
         */
        readonly invokedService: InvokableService,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NotificationInformation_ssInvocationSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationInformation_ssInvocationSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationInformation_ssInvocationSpecificInfo`.
     * @returns {NotificationInformation_ssInvocationSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (NotificationInformation_ssInvocationSpecificInfo)]: (NotificationInformation_ssInvocationSpecificInfo)[_K] }): NotificationInformation_ssInvocationSpecificInfo {
        return new NotificationInformation_ssInvocationSpecificInfo(_o.invokedService, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `invokedService`
         * @public
         * @static
         */

    public static _enum_for_invokedService = _enum_for_InvokableService;
}

/**
 * @summary The Leading Root Component Types of NotificationInformation_ssInvocationSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationInformation_ssInvocationSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("invokedService", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of NotificationInformation_ssInvocationSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationInformation_ssInvocationSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationInformation_ssInvocationSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationInformation_ssInvocationSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationInformation_ssInvocationSpecificInfo: $.ASN1Decoder<NotificationInformation_ssInvocationSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation_ssInvocationSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation_ssInvocationSpecificInfo (el: _Element): NotificationInformation_ssInvocationSpecificInfo {
    if (!_cached_decoder_for_NotificationInformation_ssInvocationSpecificInfo) { _cached_decoder_for_NotificationInformation_ssInvocationSpecificInfo = function (el: _Element): NotificationInformation_ssInvocationSpecificInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("NotificationInformation-ssInvocationSpecificInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokedService";
    let invokedService!: InvokableService;
    invokedService = $._decode_implicit<InvokableService>(() => _decode_InvokableService)(sequence[0]);
    return new NotificationInformation_ssInvocationSpecificInfo(
        invokedService,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_NotificationInformation_ssInvocationSpecificInfo(el);
}

let _cached_encoder_for_NotificationInformation_ssInvocationSpecificInfo: $.ASN1Encoder<NotificationInformation_ssInvocationSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation_ssInvocationSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation_ssInvocationSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation_ssInvocationSpecificInfo (value: NotificationInformation_ssInvocationSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation_ssInvocationSpecificInfo) { _cached_encoder_for_NotificationInformation_ssInvocationSpecificInfo = function (value: NotificationInformation_ssInvocationSpecificInfo, elGetter: $.ASN1Encoder<NotificationInformation_ssInvocationSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InvokableService, $.BER)(value.invokedService, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotificationInformation_ssInvocationSpecificInfo(value, elGetter);
}


/* eslint-enable */
