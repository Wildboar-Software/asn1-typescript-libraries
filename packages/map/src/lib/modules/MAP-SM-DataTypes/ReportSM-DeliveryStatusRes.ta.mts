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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SMServingNodeAddressList, _decode_SMServingNodeAddressList, _encode_SMServingNodeAddressList } from "../MAP-SM-DataTypes/SMServingNodeAddressList.ta.mjs";
// export { SMServingNodeAddressList, _decode_SMServingNodeAddressList, _encode_SMServingNodeAddressList } from "../MAP-SM-DataTypes/SMServingNodeAddressList.ta.mjs";


/**
 * @summary ReportSM_DeliveryStatusRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSM-DeliveryStatusRes ::= SEQUENCE {
 *     storedMSISDN    ISDN-AddressString    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     registeredSMServingNodes    [0] SMServingNodeAddressList    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ReportSM_DeliveryStatusRes {
    constructor (
        /**
         * @summary `storedMSISDN`.
         * @public
         * @readonly
         */
        readonly storedMSISDN: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `registeredSMServingNodes`.
         * @public
         * @readonly
         */
        readonly registeredSMServingNodes: OPTIONAL<SMServingNodeAddressList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReportSM_DeliveryStatusRes
     * @description
     * 
     * This takes an `object` and converts it to a `ReportSM_DeliveryStatusRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportSM_DeliveryStatusRes`.
     * @returns {ReportSM_DeliveryStatusRes}
     */
    public static _from_object (_o: { [_K in keyof (ReportSM_DeliveryStatusRes)]: (ReportSM_DeliveryStatusRes)[_K] }): ReportSM_DeliveryStatusRes {
        return new ReportSM_DeliveryStatusRes(_o.storedMSISDN, _o.extensionContainer, _o.registeredSMServingNodes, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ReportSM_DeliveryStatusRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportSM_DeliveryStatusRes: $.ComponentSpec[] = [
    new $.ComponentSpec("storedMSISDN", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ReportSM_DeliveryStatusRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportSM_DeliveryStatusRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportSM_DeliveryStatusRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportSM_DeliveryStatusRes: $.ComponentSpec[] = [
    new $.ComponentSpec("registeredSMServingNodes", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

let _cached_decoder_for_ReportSM_DeliveryStatusRes: $.ASN1Decoder<ReportSM_DeliveryStatusRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportSM_DeliveryStatusRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportSM_DeliveryStatusRes (el: _Element): ReportSM_DeliveryStatusRes {
    if (!_cached_decoder_for_ReportSM_DeliveryStatusRes) { _cached_decoder_for_ReportSM_DeliveryStatusRes = function (el: _Element): ReportSM_DeliveryStatusRes {
    let storedMSISDN: OPTIONAL<ISDN_AddressString>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let registeredSMServingNodes: OPTIONAL<SMServingNodeAddressList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "storedMSISDN": (_el: _Element): void => { storedMSISDN = _decode_ISDN_AddressString(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "registeredSMServingNodes": (_el: _Element): void => { registeredSMServingNodes = $._decode_implicit<SMServingNodeAddressList>(() => _decode_SMServingNodeAddressList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportSM_DeliveryStatusRes,
        _extension_additions_list_spec_for_ReportSM_DeliveryStatusRes,
        _root_component_type_list_2_spec_for_ReportSM_DeliveryStatusRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReportSM_DeliveryStatusRes(
        storedMSISDN,
        extensionContainer,
        registeredSMServingNodes,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReportSM_DeliveryStatusRes(el);
}

let _cached_encoder_for_ReportSM_DeliveryStatusRes: $.ASN1Encoder<ReportSM_DeliveryStatusRes> | null = null;

/**
 * @summary Encodes a(n) ReportSM_DeliveryStatusRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSM_DeliveryStatusRes, encoded as an ASN.1 Element.
 */
export
function _encode_ReportSM_DeliveryStatusRes (value: ReportSM_DeliveryStatusRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportSM_DeliveryStatusRes) { _cached_encoder_for_ReportSM_DeliveryStatusRes = function (value: ReportSM_DeliveryStatusRes, elGetter: $.ASN1Encoder<ReportSM_DeliveryStatusRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.storedMSISDN === undefined) ? undefined : _encode_ISDN_AddressString(value.storedMSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.registeredSMServingNodes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SMServingNodeAddressList, $.BER)(value.registeredSMServingNodes, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportSM_DeliveryStatusRes(value, elGetter);
}


/* eslint-enable */
